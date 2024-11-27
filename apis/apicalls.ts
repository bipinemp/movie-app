import axios from "axios";

const TOKEN = process.env.NEXT_PUBLIC_API_KEY;
const MOVIE_URL = process.env.NEXT_PUBLIC_MOVIE_URL;

export async function fetchData(url: string) {
  try {
    const response = await axios.get(`${MOVIE_URL}/${url}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error("Something went wrong.");
  }
}

export async function searchMovie(url: string, query: string) {
  try {
    const response = await axios.get(`${url}?query=${query}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error("Something went wrong.");
  }
}
