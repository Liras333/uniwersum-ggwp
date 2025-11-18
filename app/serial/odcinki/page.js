import Video from "@/app/_components/Video";
import { getVideos } from "@/app/_lib/service";

export default async function page() {
  const data = await getVideos();
  console.log(data);
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-4xl  text-primary-300 py-2">Odcinki</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(30%,1fr))] 2xl:grid-cols-[repeat(auto-fill,minmax(20%,1fr))] gap-4 w-full">
        {data.map((video) => (
          <Video key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
}
