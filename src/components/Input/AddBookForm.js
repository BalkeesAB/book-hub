import React from 'react';
import { Plus } from 'lucide-react';

const AddBookForm = ({ newBook, setNewBook, addBook }) => {
  return (
    <div className="flex gap-4 mb-6">
      <input
        type="text"
        placeholder="Title"
        className="px-4 py-2 border rounded-lg flex-1"
        value={newBook.title}
        onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Author"
        className="px-4 py-2 border rounded-lg flex-1"
        value={newBook.author}
        onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
      />
      <input
        type="text"
        placeholder="ISBN"
        className="px-4 py-2 border rounded-lg flex-1"
        value={newBook.isbn}
        onChange={(e) => setNewBook({ ...newBook, isbn: e.target.value })}
      />
      <button
        onClick={addBook}
        className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        <Plus className="mr-2 h-4 w-4" />
        Add Book
      </button>
    </div>
  );
};

export default AddBookForm;
