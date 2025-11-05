"use client";

import { Search } from "@deemlol/next-icons";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { setSearchedPostac } from "../_lib/actions";

export default function FilterSort() {
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const strona = searchParams.get("sort") || "najnowsze";
  function checkSort(sorting) {
    if (strona === sorting) return true;
  }

  const daneSzukane = setSearchedPostac.bind(null, pathname, searchParams);

  function handleSort(sorting) {
    const params = new URLSearchParams(searchParams);
    params.set("sort", sorting);
    router.replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }

  return (
    <div className="flex flex-col-reverse gap-5 items-center lg:flex-row flex-wrap justify-between  my-5">
      <form
        action={async (formData) => {
          await daneSzukane(formData);
        }}
        className="flex items-center rounded gap-3 bg-secondary-800 pl-3 "
      >
        <span className="text-neutral-600">
          <Search size={20} />
        </span>
        <input
          name="szukaj"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          placeholder="Wyszukaj"
          className="px-1.5 py-1 focus:outline-solid focus:outline-secondary-300 focus:outline-2 focus:rounded"
        />
        <button className="bg-secondary-600 text-neutral-300 py-2 px-3 cursor-pointer rounded hover:bg-secondary-700 transition-colors active:bg-secondary-600">
          <Search size={20} />
        </button>
      </form>

      <div className="flex justify-end items-center ">
        <button
          onClick={() => handleSort("a-z")}
          className={`px-2 m-1 ${
            checkSort("a-z")
              ? "bg-primary-400 text-neutral-800"
              : "bg-neutral-700 text-neutral-200"
          } rounded-md cursor-pointer hover:bg-primary-500 transition-colors`}
        >
          A - Z
        </button>

        <button
          onClick={() => handleSort("z-a")}
          className={`px-2 m-1 ${
            checkSort("z-a")
              ? "bg-primary-400 text-neutral-800"
              : "bg-neutral-700 text-neutral-200"
          } rounded-md cursor-pointer hover:bg-primary-500 transition-colors`}
        >
          Z - A
        </button>
        <button
          onClick={() => handleSort("najnowsze")}
          className={`px-2 m-1 ${
            checkSort("najnowsze")
              ? "bg-primary-400 text-neutral-800"
              : "bg-neutral-700 text-neutral-200"
          } rounded-md cursor-pointer hover:bg-primary-500 transition-colors`}
        >
          Od najnowszych
        </button>
        <button
          onClick={() => handleSort("najstarsze")}
          className={`px-2 m-1 ${
            checkSort("najstarsze")
              ? "bg-primary-400 text-neutral-800"
              : "bg-neutral-700 text-neutral-200"
          } rounded-md cursor-pointer hover:bg-primary-500 transition-colors`}
        >
          Od najstarszych
        </button>
      </div>
    </div>
  );
}
