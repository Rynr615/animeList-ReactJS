import axios from "axios";

const baseUrl = import.meta.env.VITE_BASEURL;

export const getNewAnime =  async () => {
    const newAnime =  await axios.get(`${baseUrl}seasons/now?limit=6`);
    return newAnime.data.data;
}

export const getPopularAnime = async () => {
    const popularAnime = await axios.get(`${baseUrl}top/anime?filter=bypupularity&limit=6`);
    return popularAnime.data.data;
}