import React from 'react';

export default function Home() {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('https://cdn.oneesports.id/cdn-data/sites/2/2023/12/Anime_OnePiece_EastBlueSaga_Wallpaper_Luffy_Nami_Zoro_Sanji_Usopp-1024x576-1.jpg')`,
      }}
    >
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Selamat Datang di UTS React</h1>
        <p className="text-xl">Silakan jelajahi lebih lanjut!</p>
      </div>
    </div>
  );
}
