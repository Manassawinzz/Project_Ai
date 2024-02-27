import React, { useContext } from 'react';
import { AuthContext } from '../../../api/context/authContext';
import { useNavigate } from 'react-router-dom';


function NavbarLogin() {
  const navigate = useNavigate()

  const {currentUser,logout} = useContext(AuthContext)

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <div className="font-bold text-xl">Trading Bot</div>
      <div className="flex items-center gap-4">
        <a href="/downloads" className="hover:bg-gray-700 px-3 py-2 rounded">Downloads Bot</a>
        <a href="/qa" className="hover:bg-gray-700 px-3 py-2 rounded">Q&A</a>
        <span className="px-3 py-2">Welcome:  {currentUser?.username}</span>
        {currentUser?<button onClick={logout} className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded transition duration-300">
          Logout
        </button>:navigate("/")}
      </div>
    </nav>
  );
}

export default NavbarLogin;
