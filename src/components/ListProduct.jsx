import React, { useState } from "react";
import { Heart } from "lucide-react"; // Import icon hati dari Lucide React

export default function Listfilm({ film, onEdit, onDelete, onInfo }) {
  const [favorited, setFavorited] = useState(false); // State untuk menentukan apakah card difavoritkan atau tidak

  const toggleFavorite = () => {
    setFavorited(!favorited); // Toggle nilai state favorited
  };

  return (
    <div className="w-full md:w-1/3 lg:w-1/4 p-2">
      <div className="bg-white shadow-md rounded-lg overflow-hidden h-full flex flex-col relative">
        <img
          className="w-full h-48 object-cover"
          src={film.gambar}
          alt={film.nama}
        />
        <div className="px-6 py-4 flex-grow">
          <div className="font-bold text-xl mb-2">{film.nama}</div>
          <p className="text-gray-700 text-base">
            Tahun Rilis: {film.tahunRilis}
          </p>
        </div>
        <div className="absolute top-0 right-0 mt-2 mr-2">
          <button
            onClick={toggleFavorite}
            className={`text-gray-500 hover:text-red-500 ${
              favorited ? "bg-red-500" : ""
            }`}
          >
            <Heart size={24} />
          </button>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button
            onClick={() => onInfo(film)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Info
          </button>
          <button
            onClick={() => onEdit(film)}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(film.id)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
