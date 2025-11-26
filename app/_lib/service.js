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

export async function getOneVideo(kodFilmu) {
  const { data, error } = await supabase
    .from("filmy")
    .select("*")
    .eq("film", kodFilmu)
    .single();

  if (error) throw new Error(error.message);

  return data;
}

export async function getProposedVideos(idFilmu) {
  const { count: totalCount, error: countError } = await supabase
    .from("filmy")
    .select("id", { count: "exact", head: true });

  if (countError) throw new Error(countError.message);

  const total = totalCount || 0;

  let query = supabase
    .from("filmy")
    .select("*")
    .order("id", { ascending: false });
  if (idFilmu + 5 <= total - 1) {
    query = query.range(idFilmu - 1, idFilmu + 5);
  } else {
    const start = total - 6;
    const end = total - 1;
    query = query.range(start, end);
  }

  const { data, error } = await query;

  if (error) throw new Error(error.message);

  return data;
}

export async function getPlaylists() {
  const { data, error } = await supabase
    .from("playlisty")
    .select("*")
    .order("id", { ascending: false });

  if (error) throw new Error(error.message);

  return data;
}

export async function countOfVideos(idPlaylisty) {
  const { data, error, count } = await supabase
    .from("playlista_film")
    .select("*", { count: "exact", head: true })
    .eq("id_playlisty", idPlaylisty)
    .order("id", { ascending: false });

  if (error) throw new Error(error.message);

  return count;
}

export async function getPlaylistVideos(idPlaylisty) {
  const { data, error } = await supabase
    .from("filmy")
    .select(
      `
      *,
      playlista_film!inner (
        id_playlisty,
      )

    `
    )
    .eq("playlista_film.id_playlisty", idPlaylisty)
    .order("id", { ascending: false });

  if (error) throw new Error(error.message);

  return data;
}
