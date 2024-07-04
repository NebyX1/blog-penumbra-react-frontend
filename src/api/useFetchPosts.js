import api from './axios';
import { useQuery } from 'react-query';

async function fetchPosts() {
  try {
    const { data } = await api.get('posts');
    data.sort((a, b) => Date.parse(b.date) - Date.parse(a.date)); // Ordenar los posts por fecha
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export function useFetchPosts() {
  return useQuery('posts', fetchPosts);
}
