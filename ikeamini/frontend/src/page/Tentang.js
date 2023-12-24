import React from 'react';
import { Link } from 'react-router-dom';

const Tentang = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Selamat Datang di web Kami</h1>
        <p className="text-lg mb-8">
          Kami adalah tim yang bekerja secara team demi mengembangkan skill untuk berinovasi dan keren.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/kontak" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded flex items-center">
            Hubungi Kami
          </Link>
          <Link to="/kontak" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center ">
            ingin tau kami?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tentang;
