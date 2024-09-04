export default function ImageCard({ photo, onClick }) {
  return (
    <div onClick={() => onClick(photo.urls.regular)}>
      <img
        src={photo.urls.small}
        alt={photo.alt_description}
        width={360}
        height={360}
      />
    </div>
  );
}
