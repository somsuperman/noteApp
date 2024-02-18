import {defineStore} from 'pinia';
import {ref} from 'vue';

// Define and export a new store named 'notes'
export const useNotesStore = defineStore('notes', () => {
    // State: An array to hold notes, initialized as empty
    const notes = ref([]);

    // Action: Adds a new note to the beginning of the notes array and saves the updated list to localStorage
    const addNote = (note: any) => {
        notes.value.unshift(note);  // Prepend new note to the array
        saveNotes(); // Persist changes to localStorage
    };

    // Action: Removes a note by index from the notes array and updates localStorage
    const removeNote = (index: any) => {
        notes.value.splice(index, 1); // Remove the note at the specified index
        saveNotes(); // Persist changes to localStorage
    };

    // Internal function to save the current state of notes to localStorage
    const saveNotes = () => {
        localStorage.setItem('notes', JSON.stringify(notes.value)); // Serialize and save notes array
    };

    // Action to load notes from localStorage and initialize the state
    const loadNotes = () => {
        const savedNotes = localStorage.getItem('notes'); // Retrieve the serialized notes array
        if (savedNotes) {
            notes.value = JSON.parse(savedNotes); // Deserialize and load the notes into state
        }
    };

    // Exposing the state and actions for use in components
    return {notes, addNote, removeNote, loadNotes, saveNotes};
});
