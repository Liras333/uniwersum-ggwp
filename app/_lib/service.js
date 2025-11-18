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
    .eq("id", idSwiata)
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

export async function getOneLokacja(idLokacji) {
  const { data, error } = await supabase
    .from("lokacje")
    .select("*")
    .eq("id", idLokacji)
    .single();

  if (error) throw new Error(error.message);

  return data;
}

export async function getOnePrzedmiot(idPrzedmiotu) {
  const { data, error } = await supabase
    .from("przedmiot")
    .select("*")
    .eq("id", idPrzedmiotu)
    .single();

  if (error) throw new Error(error.message);

  return data;
}

export async function getRandomPostac() {
  const { data, error } = await supabase
    .from("postacie")
    .select("*")
    .order("id", { ascending: true })
    .limit(1)
    .range(
      new Date()
        .toISOString()
        .split("T")[0]
        .split("")
        .reduce((a, c) => a + c.charCodeAt(0), 0) % 15, // OFFSET
      new Date()
        .toISOString()
        .split("T")[0]
        .split("")
        .reduce((a, c) => a + c.charCodeAt(0), 0) % 15
    )
    .single();

  if (error) throw new Error(error.message);

  return data;
}

export async function getVideos() {
  const { data, error } = await supabase
    .from("filmy")
    .select("*")
    .order("id", { ascending: false });

  if (error) throw new Error(error.message);

  return data;
}
