import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import fetchGallery from "../../services/galleryAPI";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import React from "react";
import ImageModal from "../ImageModal/ImageModal";

function App() {
  const [gallery, setGallery] = useState([]);
  const [topic, setTopic] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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
  };

  const handleLoadMore = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  function openModal(imageUrl) {
    setIsOpen(true);
    setSelectedImage(imageUrl);
  }

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />

      {error && (
        <>
          <ErrorMessage />
        </>
      )}

      {loading && (
        <>
          <Loader />
        </>
      )}

      <ImageGallery gallery={gallery} onImageClick={openModal} />
      {gallery.length > 0 && !loading && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        imageUrl={selectedImage}
      />
    </>
  );
}

export default App;
