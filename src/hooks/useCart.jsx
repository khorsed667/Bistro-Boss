import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const useCart = () => {

    const {user} = useContext(AuthContext);

    const { data : cart =[], refetch } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn:  async () => {
            const response = await fetch(`http://localhost:5000/cart?email=${user?.email}`)
            if (!response.ok) {
              throw new Error('Network response was not ok')
            }
            return response.json()
          },
      })
      return [cart, refetch]
};

export default useCart;