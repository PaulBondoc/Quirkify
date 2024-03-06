import axios from "axios";

const url: string = import.meta.env.VITE_API_URL;
const key: string = import.meta.env.VITE_API_KEY;

export const fetchGenreList = async () => {
  try {
    const response = await axios.get(`${url}/genres`, {
      params: {
        key: key,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("Error Fetching Genre List", error);
  }
};

export const fetchGamesList = async (page: number) => {
  try {
    const response = await axios.get(`${url}/games`, {
      params: {
        key: key,
        page: page,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("Error Fetching Games List", error);
  }
};

export const fetchGameDetails = async (id: string | undefined) => {
  try {
    const response = await axios.get(`${url}/games/${id}`, {
      params: {
        key: key,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching Game Details", error);
  }
};

export const fetchGameScreenShots = async (id: string | undefined) => {
  try {
    const response = await axios.get(`${url}/games/${id}/screenshots`, {
      params: {
        key: key,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("Error fetching screenshots", error);
  }
};

export const fetchDevelopersByGame = async (id: string | undefined) => {
  try {
    const response = await axios.get(`${url}/games/${id}/development-team`, {
      params: {
        key: key,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("Error fetching Developers", error);
  }
};

export const fetchSimilarGames = async (id: string | undefined) => {
  try {
    const response = await axios.get(`${url}/games/${id}/game-series`, {
      params: {
        key: key,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("Error fetching Similar games", error);
  }
};

export const fetchSearchedGame = async (query: string | null) => {
  try {
    const response = await axios.get(`${url}/games?search=${query}`, {
      params: {
        key: key,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("Error fetching searched game", error);
  }
};

export const fetchDevelopers = async (page: number) => {
  try {
    const response = await axios.get(`${url}/developers`, {
      params: {
        key: key,
        page: page,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("Error fetching developers", error);
  }
};

export const fetchPublishers = async (page: number) => {
  try {
    const response = await axios.get(`${url}/publishers`, {
      params: {
        key: key,
        page: page,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("Error fetching publishers", error);
  }
};
