import { useQuery } from "@tanstack/react-query";

const useUser = () => {

  const { data: usr = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/user`
      );
      return res.json();
    },
  });
  return [usr, refetch];
};

export default useUser;