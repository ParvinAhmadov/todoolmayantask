import React, { useState } from 'react';

const BlogTable = () => {
  const [profileImages, setProfileImages] = useState({
    vera: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
    blake: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
    dana: 'https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
    alonzo: 'https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80'
  });

  const [newUser, setNewUser] = useState({
    name: '',
    role: '',
    createdAt: '',
    status: '',
    profilePicture: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    if (files.length > 0) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setProfileImages(prevState => ({
          ...prevState,
          [name]: e.target.result
        }));
        setNewUser({ ...newUser, profilePicture: e.target.result });
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const handleDeleteUser = () => {
    // Implement delete user logic here
    console.log('User deleted');
  };

  const handleAddUser = () => {
    // Implement add user logic here
    console.log('Add user functionality goes here');
  };

  return (
    <div className='container mx-auto'>
      <body className="antialiased font-sans bg-gray-200">
        <div className="container px-4 sm:px-8">
          <div className="py-8">
            {}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
              onClick={handleAddUser}
            >
              Add User
            </button>

            <form onSubmit={handleAddUser}>
              <div className="my-2 flex sm:flex-row flex-col">
                <div className="block relative">
                  <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                 
                  </span>
                
                </div>
              </div>
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          User
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Role
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Created at
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Profile Picture
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src={profileImages.vera}
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Vera Carpenter
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">Admin</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Jan 21, 2020
                            </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                            <span className="relative">Active</span>
                          </span>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <input
                            type="file"
                            name="vera"
                            onChange={handleFileChange}
                          />
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          {}
                          <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            onClick={handleDeleteUser}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                      {}
                    </tbody>
                  </table>
                </div>
              </div>
            </form>
          </div>
        </div>
      </body>
    </div>
  );
};

export default BlogTable;
