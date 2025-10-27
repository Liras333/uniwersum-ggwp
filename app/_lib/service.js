import { revalidatePath } from "next/cache";
import { supabase } from "./supabase";

export async function getAktualnosci(){
    const { data, error } = await supabase
    .from('aktualnosci')
    .select('*')
    .order('created_at',{ ascending: false })

    if(error ) throw new Error("błąd");

    // revalidatePath('/glowna/aktualnosci');
    return data;
}

export async function getOnePost(idPostu){
    const { data, error } = await supabase
    .from('aktualnosci')
    .select('*')
    .eq('id', idPostu)
    .single()

    if(error ) throw new Error("błąd");

    return data;
}

export async function getSwiaty(){
    const { data, error } = await supabase
    .from('swiaty')
    .select('*')
    .order('obraz', {ascending: true})

    if(error ) throw new Error("błąd");

    return data;
}

export async function getOneSwiat(idSwiata){
    const { data, error } = await supabase
    .from('swiaty')
    .select('*')
    .eq('idSwiata', idSwiata)
    .single()

    if(error) throw new Error( error.message);

    return data;
}

const ITEMS_PER_PAGE = 5
export async function getPostacie(page = 0) {
  const from = page * ITEMS_PER_PAGE;
  const to = from + ITEMS_PER_PAGE - 1;

  const { data, count, error } = await supabase
    .from('postacie')
    .select('*', { count: 'exact' })
    .range(from, to)

  if (error) throw error;

  return { data, count };
}