'use server'

const ITEMS_PER_PAGE = 5

import { supabase } from "./supabase";

// export async function getPage({searchParams}){
    

//     return pageIndex
// }


export async function getPageParam(page = 0, table, searchText = ""){
  const from = page * ITEMS_PER_PAGE;
  const to = from + ITEMS_PER_PAGE - 1;

  let query = supabase
    .from(table)
    .select('*', { count: 'exact' })
    .range(from, to)

  if(searchText){
    query = query.ilike('nazwa', `%${searchText}%`)
  }

  const { data, count, error } = await query;

  if (error) throw error;

  return { data, count };
}