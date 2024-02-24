import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const useCart = () => {

    const {user} = useContext(AuthContext);
    const token = localStorage.getItem('access-token');

    const { data : cart =[], refetch } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn:  async () => {
            const res = await fetch(`https://bistro-server-psi.vercel.app/cart?email=${user?.email}`,{
              headers:{
                authorization: `bearer ${token}`
              }
            })
            return res.json()
          },
      })
      return [cart, refetch];
};

export default useCart;