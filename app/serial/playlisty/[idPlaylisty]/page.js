import VideoList from "@/app/_components/VideoList";
import { getPlaylistVideos, getVideos } from "@/app/_lib/service";

export const metadata = {
  title: "Odcinki",
};

export default async function page({ params }) {
  const { idPlaylisty } = await params;
  const data = await getPlaylistVideos(idPlaylisty);
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-4xl  text-primary-300 py-2">Playlista</h2>
      <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(30%,1fr))] 2xl:grid-cols-[repeat(auto-fill,minmax(20%,1fr))] gap-x-2 gap-y-3 w-full">
        {data.map((video) => (
          <VideoList key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
}
