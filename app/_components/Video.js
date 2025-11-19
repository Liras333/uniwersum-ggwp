import { format } from "date-fns";
import { getOneVideo, getProposedVideos } from "../_lib/service";
import ProposedVideo from "./ProposedVideo";

export default async function Video({ idFilmu }) {
  const data = await getOneVideo(idFilmu);
  const data2 = await getProposedVideos(data.id);

  return (
    <section className="flex gap-10 justify-center my-5 flex-wrap lg:flex-nowrap">
      <section className="flex flex-col gap-5 w-full">
        <iframe
          className="rounded-md aspect-video"
          src={`https://www.youtube.com/embed/${idFilmu}`}
          allowFullScreen
        ></iframe>
        <h2 className="text-3xl text-primary-300">{data.nazwa}</h2>
        <span className="text-neutral-500">
          {format(data.created_at, "dd MM yyyy")}r.
        </span>
        <p className="text-neutral-300">
          {data?.opis || (
            <span className="italic">Brak opisu pod tym filmem</span>
          )}
        </p>
      </section>
      <section className="flex flex-col gap-2 ">
        <h3 className="text-xl font-bold text-center text-primary-300 ">
          Proponowane
        </h3>
        {data2.map((proposedVideo) => (
          <ProposedVideo key={proposedVideo.id} proposedVideo={proposedVideo} />
        ))}
      </section>
    </section>
  );
}
