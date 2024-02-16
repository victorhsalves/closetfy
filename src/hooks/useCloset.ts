import api from "@/config/api";
import { RETRIEVE_ALL_CLOSET } from "@/service/closet/queries/retrieve-all-closet";
import { useQuery } from "@apollo/client";


export const useCloset = () => {
  const { data, loading, error } = useQuery(RETRIEVE_ALL_CLOSET, {
    client: api,
  });
  return { data, loading, error };
}