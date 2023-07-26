import Image from 'next/image'
import { headers } from 'next/headers'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from 'react';

export default async function Home() {
  const songs = await getSongs()

  console.log(songs)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        {songs.map((song: { id: any; name: string; attributes: any[]; image: string; }) => <a
          key={`song-${song.id}-${song.name}`}
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image width={250} height={250} src={song.image} alt={`${song.name} Cover Image`}/>
          <h2 className={`mb-3 text-2xl font-semibold`}>
            {song.name}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            {song.attributes.find(({ trait_type }) => trait_type === 'artist').value}
          </p>
        </a>)}
      </div>
    </main>
  )
}

async function getSongs() {
  const host = headers().get("host");
  const protocol = process?.env.NODE_ENV==="development"?"http":"https"
  const res = await fetch(`${protocol}://${host}/api/songs`)
  return res.json()
}