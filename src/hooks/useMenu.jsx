// import { useEffect, useState } from 'react';

import { useQuery } from "@tanstack/react-query";

const useMenu = () => {

    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(()=>{
    //     fetch('https://bistro-server-psi.vercel.app/menu')
    //     .then(res => res.json())
    //     .then(data =>{
    //         setMenu(data);
    //         setLoading(false);
    //     })
    // },[])

    // https://bistro-server-psi.vercel.app

    // Using Tan Stack Query for loading data from backend...

    const { data : menu = [], refetch } = useQuery({
        queryKey: ["menu"],
        queryFn: async () =>{
            const res = await fetch('https://bistro-boss-server-9677.onrender.com/menu');
            return res.json();
        }
    })
    return [menu, refetch];
};

export default useMenu;
