// import axios from 'axios';
// import { useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useMenu = () => {
  const axiosPublic = useAxiosPublic();
  // const [menu, setMenu] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const getData = async () => {
  //     const { data } = await axios.get(`http://localhost:3000/menu`);
  //     setMenu(data);
  //     setLoading(false);
  //   };
  //   getData();
  // }, []);
  const {
    data: menu = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ['menu'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/menu`);
      return res.data;
    },
  });
  return [menu, loading, refetch];
};

export default useMenu;
