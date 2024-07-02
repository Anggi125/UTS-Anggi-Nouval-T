import { useState } from "react";
import ListProduct from "../components/ListProduct";
import { useEffect } from "react";
import { PlusCircle } from 'lucide-react';
import { Edit2, XCircle } from 'lucide-react';

const initialFilm = [
  {
    id: 1,
    gambar: "https://www.wowkeren.com/display/images/photo/2019/03/13/00248218.jpg",
    tahunRilis: 1990,
    nama: "Dilan 1998",
    genre: "Drama",
    durasi: "2 jam",
    sinopsiFilm: "film ini adalah film yang menceritakan kisah cinta"
  },
  {
    id: 2,
    gambar: "https://i1.sndcdn.com/artworks-000288903674-thfuy6-t500x500.jpg",
    tahunRilis: 2001,
    nama: "GERBANG NERAKA",
    genre: "Horor",
    durasi: "2 jam",
    sinopsiFilm: "film ini adalah film yang menceritakan kisah horor"
  },
  {
    id: 3,
    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWL2mlkaimmWp_LFD-gFaPQJnrQ-c6rUHbbg&s",
    tahunRilis: 2002,
    nama: "Spiderman 2",
    genre: "Adventure",
    durasi: "2 jam",
    sinopsiFilm: "film ini adalah film yang menceritakan kisah perjuangan"
  },
];

const savedFilm = localStorage.getItem("films");

export default function Products() {
  const [film, setFilm] = useState(
    savedFilm ? JSON.parse(savedFilm) : initialFilm
  );
  const [editFilm, setEditFilm] = useState();
  const [sortType, setSortType] = useState("asc"); 
  const [searchTerm, setSearchTerm] = useState(""); 

  const sortByName = () => {
    const sortedFilm = [...film].sort((a, b) => {
      const nameA = a.nama.toUpperCase();
      const nameB = b.nama.toUpperCase();
      if (sortType === "asc") {
        return nameA > nameB ? 1 : -1;
      } else {
        return nameA < nameB ? 1 : -1;
      }
    });
    setFilm(sortedFilm);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  
  const filteredFilm = film.filter((film) =>
    film.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const menanganiEdit = (film) => {
    setEditFilm(film);
  };

  const menanganiDelete = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus film ini?")) {
      setFilm(film.filter((p) => p.id !== id));
    }
  };

  const infoFilm = (film) => {
    alert(
      "Judul : " +
        film.nama +
        "\n Genre : " +
        film.genre +
        "\nDurasi : " +
        film.durasi +
        "\nSinopsi film : " +
        film.sinopsiFilm
    );
  };

  function addProduct() {
    setEditFilm({});
  }

  useEffect(() => {
    localStorage.setItem("films", JSON.stringify(film));
  }, [film]);

  return (
    <main>
      <div className="flex items-center mb-4">
        <span className="mr-2"><b>Urutkan berdasarkan nama:</b></span>
        <button
          onClick={() => {
            setSortType("asc");
            sortByName();
          }}
          className={`mr-2 px-3 py-1 rounded ${
            sortType === "asc" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
        >
          Desc
        </button>
        <button
          onClick={() => {
            setSortType("desc");
            sortByName();
          }}
          className={`px-3 py-1 rounded ${
            sortType === "desc" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
        >
          Asc
        </button>
      </div>

     
      <div className="mb-4">
        <input
          type="text"
          placeholder="Cari berdasarkan nama film..."
          value={searchTerm}
          onChange={handleSearch}
          className="border border-gray-300 rounded px-3 py-2 w-full"
        />
      </div>

      <div className="flex items-center justify-center h-screen bg-gray-200 flex-wrap gap-4">
       
        {filteredFilm.map((film) => (
          <ListProduct
            key={film.id}
            film={film}
            onEdit={menanganiEdit}
            onDelete={menanganiDelete}
            onInfo={infoFilm}
          />
        ))}
      </div>

      <button
        onClick={addProduct}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center"
      >
        <PlusCircle className="w-5 h-5 mr-2" />
        Add Product
      </button>

     
      {editFilm && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <form className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
            {/* Form input */}
            <div className="flex flex-col mb-4">
              <label htmlFor="nama" className="text-lg font-medium">
                Nama
              </label>
              <input
                type="text"
                id="nama"
                value={editFilm.nama}
                onChange={(e) =>
                  setEditFilm({ ...editFilm, nama: e.target.value })
                }
                className="border border-gray-300 rounded px-3 py-2 mt-1"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="tahunRilis" className="text-lg font-medium">
                Tahun Rilis
              </label>
              <input
                type="number"
                id="tahunRilis"
                value={editFilm.tahunRilis}
                onChange={(e) =>
                  setEditFilm({ ...editFilm, tahunRilis: e.target.value })
                }
                className="border border-gray-300 rounded px-3 py-2 mt-1"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="gambar" className="text-lg font-medium">
                Link Gambar
              </label>
              <input
                type="text"
                id="gambar"
                value={editFilm.gambar}
                onChange={(e) =>
                  setEditFilm({ ...editFilm, gambar: e.target.value })
                }
                className="border border-gray-300 rounded px-3 py-2 mt-1"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="genre" className="text-lg font-medium">
                Genre Film
              </label>
              <input
                type="text"
                id="genre"
                value={editFilm.genre}
                onChange={(e) =>
                  setEditFilm({ ...editFilm, genre: e.target.value })
                }
                className="border border-gray-300 rounded px-3 py-2 mt-1"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="durasi" className="text-lg font-medium">
                Durasi Film
              </label>
              <input
                type="text"
                id="durasi"
                value={editFilm.durasi}
                onChange={(e) =>
                  setEditFilm({ ...editFilm, durasi: e.target.value })
                }
                className="border border-gray-300 rounded px-3 py-2 mt-1"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="sinopsiFilm" className="text-lg font-medium">
                Sinopsi Film
              </label>
              <input
                type="text"
                id="sinopsiFilm"
                value={editFilm.sinopsiFilm}
                onChange={(e) =>
                  setEditFilm({ ...editFilm, sinopsiFilm: e.target.value })
                }
                className="border border-gray-300 rounded px-3 py-2 mt-1"
              />
            </div>
          
            <div className="flex justify-end">
              <button
                onClick={() => {
                  if (editFilm.id) {
                   
                    setFilm(
                      film.map((b) => (b.id === editFilm.id ? editFilm : b))
                    );
                  } else {
                   
                    setFilm([...film, { id: film.length + 1, ...editFilm }]);
                  }
                  setEditFilm(null); 
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center mr-2"
              >
                <Edit2 className="w-5 h-5 mr-1" />
                Save
              </button>
              <button
                onClick={() => setEditFilm(null)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded flex items-center"
              >
                <XCircle className="w-5 h-5 mr-1" />
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </main>
  );
}

