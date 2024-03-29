import api from "@/config/api";
import { LOGIN } from "@/service/closet/queries/login";
import { API } from "@/types";
import { useMutation } from "@apollo/client";


export const useAuth = () => {
  const [ login, { data, loading, error }] = useMutation<{
    login: {
      token: string
    }
  }>(LOGIN, {
    client: api,
    onCompleted: (data) => {
      console.log('data', data)
    }
  });
  return { login, data, loading, error };
}