<template>
  <section class="bg-white dark:bg-gray-900 min-h-screen p-4 sm:p-10">
    <div v-show="!notes.length" class="flex text-white justify-center my-10">
      <div>
        <svg class="w-20 text-center m-auto" viewBox="0 0 256 256">
          <g>
            <path fill="currentColor" d="M54.2,32.1V17.4c0-4.1,3.3-7.4,7.4-7.4c4.1,0,7.4,3.3,7.4,7.4v14.8c0,4.1-3.3,7.4-7.4,7.4C57.5,39.5,54.2,36.2,54.2,32.1z M231.3,38.6v193.6c0,7.7-6.6,13.8-14.8,13.8h-177c-8.1,0-14.7-6.2-14.7-13.8V38.6c0-7.6,6.6-13.8,14.7-13.8h7.4v7.4c0,8.1,6.6,14.8,14.7,14.8c8.1,0,14.8-6.6,14.8-14.8v-7.4h103.3v7.4c0,8.1,6.6,14.8,14.8,14.8c8.1,0,14.7-6.6,14.7-14.8v-7.4h7.4C224.7,24.8,231.3,31,231.3,38.6z M216.5,69h-177v162.2l177,0.1V69z M194.4,39.5c4.1,0,7.4-3.3,7.4-7.4V17.4c0-4.1-3.3-7.4-7.4-7.4c-4.1,0-7.4,3.3-7.4,7.4v14.8C187,36.2,190.3,39.5,194.4,39.5z M61.6,113.3h132.8c4.1,0,7.4-3.3,7.4-7.4s-3.3-7.4-7.4-7.4H61.6c-4.1,0-7.4,3.3-7.4,7.4C54.2,110,57.5,113.3,61.6,113.3z M61.6,157.5h132.8c4.1,0,7.4-3.3,7.4-7.4c0-4.1-3.3-7.4-7.4-7.4H61.6c-4.1,0-7.4,3.3-7.4,7.4C54.3,154.2,57.5,157.5,61.6,157.5z M61.6,201.8h132.8c4.1,0,7.4-3.3,7.4-7.4c0-4.1-3.3-7.4-7.4-7.4H61.6c-4.1,0-7.4,3.3-7.4,7.4C54.2,198.5,57.5,201.8,61.6,201.8z"/>
          </g>
        </svg>
      </div>
    </div>
    <div class="container mx-auto max-w-screen-2xl lg:px-12">
      <div class="max-w-3xl sm:px-10 mx-auto mb-5 sm:mb-8">
        <label for="add-note" class="sr-only">Napísať poznámku</label>
        <div class="flex rounded-lg shadow">
          <textarea id="add-note" v-model="newNoteContent" @input="autoResize" rows="1" @keydown.enter.prevent="addNewNote" placeholder="Napísať poznámku ..." class="font-medium ring-2 ring-primary py-3 px-4 block w-full shadow-sm rounded-lg text-lg focus:z-10 focus:border-primary bg-slate-900 border-primary text-gray-400 focus:ring-primary focus:bg-primary focus:text-black focus:placeholder-amber-900"></textarea>
        </div>
        <p class="text-primary text-xs text-right pt-1.5 opacity-60">
          ostáva <strong>{{ remainingChars }}</strong> znakov
        </p>
      </div>
      <draggable :list="notes" group="notes" itemKey="id" @change="changeNote" :animation="300" class="sm:columns-2 md:columns-3 xl:columns-4">
        <template #item="{ element : note, index }">
          <NoteBlock :note="note" @remove-note="removeNote(index)"/>
        </template>
      </draggable>
      <p v-show="!notes.length" class="text-white opacity-20 text-center text-lg px-4">
        Zatial nemáte žiadnu uloženú poznámku :(
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent, ref, computed} from 'vue';
import {useNotesStore} from '../stores/notesStore';
import draggable from 'vuedraggable';
import NoteBlock from '../components/NoteBlock.vue';

export default defineComponent({
  name: 'Dashboard',
  components: {
    draggable,
    NoteBlock
  },
  setup() {
    // Access the notes store by invoking the useNotesStore method.
    const notesStore = useNotesStore();

    // Call the loadNotes method immediately to initialize the notes array
    notesStore.loadNotes();

    // Initialize a reactive reference for new note content with an empty string.
    const newNoteContent = ref('');

    // Define a constant for the maximum allowed characters in a note.
    const maxChars = 255;

    // Create a computed property to calculate the remaining characters allowed.
    const remainingChars = computed(() => maxChars - newNoteContent.value.length);

    const addNewNote = (event) => {
      const content = newNoteContent.value.trim();
      if (!content || content.length > maxChars) {
        // Prevent the default Enter key action (new line) if the textarea is empty
        event.preventDefault();
        return;
      }

      // Create a new Date object representing the current date and time
      const currentTime = new Date();

      // Convert the currentTime object to a localized string representation
      const timeString = currentTime.toLocaleTimeString([], {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

      notesStore.addNote({
        id: Date.now().toString(),
        content: newNoteContent.value,
        created: timeString // Store the creation timestamp
      });
      newNoteContent.value = '';
      event.target.style.height = 'auto'; // Reset the height
    };

    // Method to remove a note from the store
    const removeNote = (index: number) => {
      // Calls the removeNote method from the notesStore
      // This method updates the notes array by removing the note at the specified index
      notesStore.removeNote(index);
    };

    // Method to trigger saving the current state of notes to persistent storage
    const changeNote = () => {
      // Calls the saveNotes method from the notesStore
      // This method serializes the current state of the notes array and saves it to localStorage
      notesStore.saveNotes();
    };

    const autoResize = (event) => {
      const textarea = event.target;
      let inputValue = textarea.value;

      if (inputValue.length > maxChars) {
        // Truncate the value to the max character count
        inputValue = inputValue.substr(0, maxChars);
        // Update the textarea value and the model
        textarea.value = inputValue;
        newNoteContent.value = inputValue;
      }

      if (textarea.value.trim()) {
        textarea.style.height = 'auto'; // Reset the height
        textarea.style.height = textarea.scrollHeight + 'px'; // Set to scroll height
      }
    };

    return {
      notes: notesStore.notes,
      newNoteContent,
      addNewNote,
      removeNote,
      changeNote,
      autoResize,
      remainingChars,
    };
  },
});
</script>

<style scoped>
.sortable-chosen {
  @apply ring-4;
}
</style>
