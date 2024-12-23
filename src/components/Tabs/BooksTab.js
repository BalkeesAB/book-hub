import React from 'react';
import { Edit, Trash2, Plus, Search } from 'lucide-react';

const BooksTab = ({ books, filteredBooks, newBook, setNewBook, addBook, deleteBook, searchTerm, setSearchTerm }) => {
  return (
    <div className="p-4 bg-purple-100">
      <h2 className="text-2xl font-semibold text-gray-800">Book Catalog</h2>
      
      {/* Add Book Form */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="ISBN"
          value={newBook.isbn}
          onChange={(e) => setNewBook({ ...newBook, isbn: e.target.value })}
          className="border p-2 rounded"
        />
        <button
          onClick={addBook}
          className="bg-white px-4 py-2 rounded border flex items-center gap-2"
        >
          <Plus size={20} />
          Add Book
        </button>
      </div>

      {/* Search Box */}
      <div className="mb-4 relative">
        <Search className="absolute left-3 top-3" size={20} />
        <input
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 p-2 border rounded w-full"
        />
      </div>

      {/* Table */}
      <table className="w-full bg-white">
        <thead>
          <tr>
            <th className="text-left p-3 border-b">Title</th>
            <th className="text-left p-3 border-b">Author</th>
            <th className="text-left p-3 border-b">ISBN</th>
            <th className="text-left p-3 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map(book => (
            <tr key={book.id}>
              <td className="p-3 border-b">{book.title}</td>
              <td className="p-3 border-b">{book.author}</td>
              <td className="p-3 border-b">{book.isbn}</td>
              <td className="p-3 border-b">
                <div className="flex gap-2">
                  <button><Edit size={20} /></button>
                  <button onClick={() => deleteBook(book.id)}><Trash2 size={20} /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTab;