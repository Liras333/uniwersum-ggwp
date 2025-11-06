import { revalidatePath } from "next/cache";
import { supabase } from "./supabase";

export async function getAktualnosci() {
  const { data, error } = await supabase
    .from("aktualnosci")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error("błąd");

  // revalidatePath('/glowna/aktualnosci');
  return data;
}

export async function getOnePost(idPostu) {
  const { data, error } = await supabase
    .from("aktualnosci")
    .select("*")
    .eq("id", idPostu)
    .single();

  if (error) throw new Error("błąd");

  return data;
}

export async function getSwiaty() {
  const { data, error } = await supabase
    .from("swiaty")
    .select("*")
    .order("obraz", { ascending: true });

  if (error) throw new Error("błąd");

  return data;
}

export async function getOneSwiat(idSwiata) {
  const { data, error } = await supabase
    .from("swiaty")
    .select("*")
    .eq("idSwiata", idSwiata)
    .single();

  if (error) throw new Error(error.message);

  return data;
}

export async function getOnePostac(idPostaci) {
  const { data, error } = await supabase
    .from("postacie")
    .select("*")
    .eq("id", idPostaci)
    .single();

  if (error) throw new Error(error.message);

  return data;
}

export async function getOneWydarzenie(idWydarzenia) {
  const { data, error } = await supabase
    .from("wydarzenia")
    .select("*")
    .eq("id", idWydarzenia)
    .single();

  if (error) throw new Error(error.message);

  return data;
}
