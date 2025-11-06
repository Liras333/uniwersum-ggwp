"use server";

import { redirect } from "next/navigation";
import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";

const ITEMS_PER_PAGE = 5;

export async function getPageParam({ stronaParams, tabela }) {
  const sort = stronaParams.sort ?? "";
  const page = Number(stronaParams.strona) ?? 1;
  const pageIndex = !page ? 0 : page;
  const searchText = stronaParams.search ?? "";

  const from = (pageIndex - 1) * ITEMS_PER_PAGE;
  const to = from + ITEMS_PER_PAGE - 1;

  let query = supabase
    .from(tabela)
    .select("*", { count: "exact" })
    .range(from, to);

  if (searchText) {
    query = query.ilike("nazwa", `%${searchText}%`);
  }

  if (!sort) query = query = query.order("created_at", { ascending: false });
  if (sort === "a-z") query = query.order("nazwa", { ascending: true });
  if (sort === "z-a") query = query.order("nazwa", { ascending: false });
  if (sort === "najnowsze")
    query = query.order("created_at", { ascending: false });
  if (sort === "najstarsze")
    query = query.order("created_at", { ascending: true });

  const { data, count, error } = await query;

  if (error) throw error;
  return { data, count };
}

export async function setSearchedPostac(pathname, searchParams, formData) {
  const params = new URLSearchParams(searchParams);
  const search = params.get("search");

  params.set("search", formData.get("szukaj"));

  revalidatePath(`${pathname}?${params.toString()}`);
  redirect(`${pathname}?${params.toString()}`);
}

export async function setDefaultSearch() {}
