import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const useReservation = () => {

    const {user} = useContext(AuthContext);

    const{ data : reservation = [], refetch } = useQuery({
        queryKey:['reservation'],
        queryFn: async() =>{
            const res = await fetch(`https://bistro-boss-server-9677.onrender.com/reservation/${user?.email}`)
            return res.json()
        }
    })
    return [reservation, refetch];
};

export default useReservation;