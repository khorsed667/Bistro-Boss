import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const useUser = () => {

  const {user} = useContext(AuthContext);

  const { data: usr = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/user/${user?.email}`
      );
      return res.json();
    },
  });
  return [usr, refetch];
};

export default useUser;