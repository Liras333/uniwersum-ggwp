import FilterSort from "@/app/_components/FilterSort";
import ListaSwiatow from "@/app/_components/ListaSwiatow";
import Pagination from "@/app/_components/Pagination";
import Spinner from "@/app/_components/Spinner";
import { getPageParam } from "@/app/_lib/actions";
import { Suspense } from "react";

export const metadata = {
  title: "swiaty",
};
export const revalidate = 3600;

export default async function Page({ searchParams }) {
  const stronaParams = await searchParams;
  const { data, count } = await getPageParam({
    stronaParams,
    tabela: "swiaty",
  });
  return (
    <section className=" divide-neutral-700 flex flex-col">
      <h2 className="text-4xl text-primary-300 py-5">Światy</h2>
      <FilterSort />

      <Suspense fallback={<Spinner />}>
        <ListaSwiatow swiaty={data} />
        <Pagination count={count} />
      </Suspense>
    </section>
  );
}
