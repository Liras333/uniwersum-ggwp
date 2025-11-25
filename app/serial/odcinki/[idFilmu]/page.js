import Video from "@/app/_components/Video";

export const metadata = {
  title: "Odcinek",
};

export default async function page({ params }) {
  const { idFilmu } = await params;
  return <Video idFilmu={idFilmu} />;
}
