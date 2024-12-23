import React, { useState } from 'react';
import UsersTab from './components/Tabs/UsersTab';
import BooksTab from './components/Tabs/BooksTab';
import TabSwitcher from './components/Tabs/TabSwitcher';
import { usersData, booksData } from './data';

const App = () => {
  const [activeTab, setActiveTab] = useState('users');
  const [users, setUsers] = useState(usersData);
  const [books, setBooks] = useState(booksData);
  // Initialize role as empty string
  const [newUser, setNewUser] = useState({ name: '', ReadableStreamDefaultController: '', email: '' });
  const [newBook, setNewBook] = useState({ title: '', author: '', isbn: '' });
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm?.toLowerCase() || "")
  );

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm?.toLowerCase() || "")
  );

  const AddUser = () => {
    // Validate that a role is selected before adding
    if (newUser.name && newUser.role && newUser.email) {
      setUsers([...users, { ...newUser, id: Date.now() }]);
      // Reset with empty role
      setNewUser({ name: '', role: '', email: '' });
    } else {
      alert('Please fill in all fields including selecting a role');
    }
  };

  const addBook = () => {
    if (newBook.title && newBook.author && newBook.isbn) {
      setBooks([...books, { ...newBook, id: Date.now() }]);
      setNewBook({ title: '', author: '', isbn: '' });
    } else {
      alert('Please fill in all fields');
    }
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'users' && (
        <UsersTab
          users={users}
          filteredUsers={filteredUsers}
          newUser={newUser}
          setNewUser={setNewUser}
          addUser={AddUser}
          deleteUser={deleteUser}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      )}
      {activeTab === 'books' && (
        <BooksTab
          books={books}
          filteredBooks={filteredBooks}
          newBook={newBook}
          setNewBook={setNewBook}
          addBook={addBook}
          deleteBook={deleteBook}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      )}
    </div>
  );
};

export default App;