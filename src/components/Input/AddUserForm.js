import React from 'react';
import { Plus } from 'lucide-react';

const AddUserForm = ({ newUser, setNewUser, addUser }) => {
  return (
    <div className="flex gap-4 mb-6">
      <input
        type="text"
        placeholder="Name"
        className="px-4 py-2 border rounded-lg flex-1"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      />
      <select
        value={newUser.role}
        onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        className="px-4 py-2 border rounded-lg flex-1"
      >
        <option value="">Select Role</option>
        <option value="User">User</option>
        <option value="Librarian">Librarian</option>
      </select>
      <input
        type="email"
        placeholder="Email"
        className="px-4 py-2 border rounded-lg flex-1"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      <button
        onClick={addUser}
        className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        <Plus className="mr-2 h-4 w-4" />
        Add User
      </button>
    </div>
  );
};

export default AddUserForm;
