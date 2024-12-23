import React from 'react';
import { Edit, Trash2, Plus, Search } from 'lucide-react';

const UsersTab = ({ users, filteredUsers, newUser, setNewUser, addUser, deleteUser, searchTerm, setSearchTerm }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-semibold text-gray-800">User Management</h2>
      
      {/* Add User Form */}
      <div className="flex gap-5 mb-6">
        <input
          type="text"
          placeholder="Name"
          className="px-4 py-2 border rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <select
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          className="px-4 py-2 border rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Role</option>
          <option value="User">User</option>
          <option value="Librarian">Admin</option>
        </select>
        <input
          type="email"
          placeholder="Email"
          className="px-4 py-2 border rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <button
          onClick={addUser}
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add User
        </button>
      </div>


      {/* Search Users */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search users..."
          className="w-full px-10 py-2 border rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Role</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredUsers.map(user => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="p-2 hover:bg-gray-100 rounded"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTab;
