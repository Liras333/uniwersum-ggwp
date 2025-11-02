"use server";

const ITEMS_PER_PAGE = 5;

import { redirect } from "next/navigation";

import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";

export async function getPageParam(page = 0, table, searchText = "", sort) {
  const from = page * ITEMS_PER_PAGE;
  const to = from + ITEMS_PER_PAGE - 1;

  let query = supabase
    .from(table)
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
  revalidatePath(
    `${pathname}?${params.toString()}&search=${formData.get("szukaj")}`
  );

  redirect(`${pathname}?${params.toString()}&search=${formData.get("szukaj")}`);
}
