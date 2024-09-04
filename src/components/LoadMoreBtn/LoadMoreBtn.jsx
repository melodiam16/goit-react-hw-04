import css from "./LoadMoreBtn.module.css";
export default function LoadMoreBtn({ onLoadMore }) {
  return (
    <>
      <div className={css.container}>
        <button className={css.btn} onClick={onLoadMore}>
          Load more
        </button>
      </div>
    </>
  );
}
