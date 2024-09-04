import axios from "axios";

const UNSPLASH_ACCESS_KEY = "7hcLqp7WO0-fhlwfBVN7Jrn4gkXy8Hxl8mziy5A5un4";

const fetchGallery = async (topic, page) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query: topic,
      per_page: 9,
      page,
    },
    headers: {
      Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
    },
  });

  return {
    gallery: response.data.results,
    totalPages: response.data.total_pages,
  };
};

export default fetchGallery;
