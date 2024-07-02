import React from 'react';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Tentang Saya</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Nama:</label>
          <span className="text-gray-800">Anggi</span>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Tempat Lahir:</label>
          <span className="text-gray-800">Sibolga</span>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Pelatihan:</label>
          <span className="text-gray-800">React</span>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Nama Instruktur:</label>
          <span className="text-gray-800">Siti cuprit</span>
        </div>
      </div>
    </div>
  );
}
