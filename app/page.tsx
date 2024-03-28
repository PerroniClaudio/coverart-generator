'use client';

import { useState } from 'react';

export default function Home() {
  const [formdata, setFormdata] = useState({
    name: 'nome',
    title: 'titolo',
    color: '#FFFF11',
  });

  const [backgroundColor, setBackgroundColor] = useState('#ff0000');
  const lista = Array.from({ length: 100 }, (_, index) => index);

  return (
    <div className="grid grid-cols-12 gap-2 antialiased">
      <aside className="self-start sticky top-0 col-span-2 flex flex-col gap-4 p-2">
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Artista</label>
          <input
            type="text"
            name="name"
            id="name"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) =>
              setFormdata((prevState) => ({
                ...prevState,
                name: e.target.value,
              }))
            }
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="name">Titolo</label>
          <input
            type="text"
            name="title"
            id="title"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) =>
              setFormdata((prevState) => ({
                ...prevState,
                title: e.target.value,
              }))
            }
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="name">Colore</label>
          <input
            type="color"
            name="color"
            id="color"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => {
              setFormdata((prevState) => ({
                ...prevState,
                color: e.target.value,
              }));

              setBackgroundColor(e.target.value);
            }}
          />
        </div>
      </aside>

      <main
        style={{ backgroundColor }}
        className="col-span-10 break-all p-4 text-6xl uppercase font-extrabold text-white"
      >
        {lista.map((element) => (
          <span key={element}>
            {formdata.name} - {formdata.title}&nbsp;
          </span>
        ))}
      </main>
    </div>
  );
}
