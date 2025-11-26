import PlaylistaList from "@/app/_components/PlaylistaList";
import { getPlaylists, getVideos } from "@/app/_lib/service";

export const metadata = {
  title: "Odcinki",
};

export default async function page() {
  const data = await getPlaylists();
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-4xl  text-primary-300 py-2">Playlisty</h2>
      <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(30%,1fr))] 2xl:grid-cols-[repeat(auto-fill,minmax(20%,1fr))] gap-x-2 gap-y-3 w-full">
        {data.map((playlista) => (
          <PlaylistaList key={playlista.id} playlista={playlista} />
        ))}
      </div>
    </section>
  );
}
