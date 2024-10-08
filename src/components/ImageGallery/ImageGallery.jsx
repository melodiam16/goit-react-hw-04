import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ gallery, onImageClick }) {
  return (
    <ul className={css.gallery}>
      {gallery.map((photo) => (
        <li key={photo.id}>
          <ImageCard photo={photo} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
}
