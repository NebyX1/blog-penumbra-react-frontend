import api from './axios';
import { useQuery } from 'react-query';

async function fetchPostBySlug(slug) {
  try {
    const { data } = await api.get(`posts/slug/${slug}`);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export function useFetchPostBySlug(slug) {
  return useQuery(['post', slug], () => fetchPostBySlug(slug));
}
