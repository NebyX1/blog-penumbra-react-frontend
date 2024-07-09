import api from './axios';
import { useQuery } from 'react-query';

async function fetchJournals() {
  try {
    const { data } = await api.get('journals');
    data.sort((a, b) => Date.parse(b.date) - Date.parse(a.date)); // Ordenar los journals por fecha
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export function useFetchJournals() {
  return useQuery('journals', fetchJournals);
}
