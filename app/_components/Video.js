export default async function Video({ idFilmu }) {
  return (
    <section>
      <h2 className="text-3xl text-primary-300 py-5">film</h2>
      {/* <video width="320" height="240" controls preload="none">
        <source
          src={`https://www.youtube.com/embed/${idFilmu}`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video> */}
      <iframe
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${idFilmu}`}
        allowfullscreen=""
      ></iframe>
    </section>
  );
}
