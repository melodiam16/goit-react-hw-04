import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import fetchGallery from "../../services/galleryAPI";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

function App() {
  const [gallery, setGallery] = useState([]);
  console.log(gallery);

  const [topic, setTopic] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  console.log(totalPages);

  useEffect(() => {
    if (topic === "") {
      return;
    }

    async function getGallery() {
      try {
        setLoading(true);
        setError(false);
        const res = await fetchGallery(topic, page);
        setGallery((prevState) => [...prevState, ...res.gallery]);
        setTotalPages(res.totalPages);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getGallery();
  }, [topic, page]);

  const handleSearch = (newTopic) => {
    setTopic(newTopic);
    setPage(1);
    setGallery([]);
    console.log("Searching for:", newTopic);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {loading && (
        <>
          <Loader />
        </>
      )}

      {error && (
        <>
          <ErrorMessage />
        </>
      )}

      <ImageGallery gallery={gallery} />
      {gallery.length > 0 && !loading && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}
    </>
  );
}

export default App;
