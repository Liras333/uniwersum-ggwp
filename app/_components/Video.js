import { getOneVideo } from "../_lib/service";

export default async function Video({ idFilmu }) {
  const data = await getOneVideo(idFilmu);
  // console.log(data);
  return (
    <section className="flex gap-10 justify-center my-5 flex-wrap lg:flex-nowrap">
      <section className="flex flex-col gap-5 w-full">
        <iframe
          className="rounded-md aspect-video"
          src={`https://www.youtube.com/embed/${idFilmu}`}
          allowFullScreen
        ></iframe>
        <h2 className="text-3xl text-primary-300">{data.nazwa}</h2>
      </section>
      <section className="flex flex-col gap-5 ">
        <div className="w-80 h-20 bg-accent-500 rounded-md"></div>
        <div className="w-80 h-20 bg-accent-500 rounded-md"></div>
        <div className="w-80 h-20 bg-accent-500 rounded-md"></div>
        <div className="w-80 h-20 bg-accent-500 rounded-md"></div>
        <div className="w-80 h-20 bg-accent-500 rounded-md"></div>
        <div className="w-80 h-20 bg-accent-500 rounded-md"></div>
        <div className="w-80 h-20 bg-accent-500 rounded-md"></div>
      </section>
    </section>
  );
}
