import api from "@/config/api";
import { RETRIEVE_CLOSET_BY_ID } from "@/service/closet/queries/retrieve-closet-by-id";
import { API } from "@/types";
import { useQuery } from "@apollo/client";
import { useState } from "react";


export const useCloset = () => {
  const [search, setSearch] = useState('');
  const { data, loading, error } = useQuery<API>(RETRIEVE_CLOSET_BY_ID, {
    client: api,
  });

  const handleSearchChange = (value: string) => {
    setSearch(value);
  }

  return { data, loading, error, handleSearchChange, search};
}