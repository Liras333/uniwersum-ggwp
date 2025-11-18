import Video from "@/app/_components/Video";

export default async function page({ params }) {
  const { idFilmu } = await params;
  return <Video idFilmu={idFilmu} />;
}
