import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";


const UsePayments = () => {

    const {user} = useContext(AuthContext);

    const { data : payment = [], refetch} = useQuery({
        queryKey : ['payment'],
        queryFn : async() =>{
            const res = await fetch(`https://bistro-boss-server-9677.onrender.com/payment/${user?.email}`);
            return res.json();
        }
    })
    return [payment, refetch];
};

export default UsePayments;