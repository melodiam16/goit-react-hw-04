import css from "./ErrorMessage.module.css";
export default function ErrorMessage() {
  return (
    <b className={css.error}>
      Something went wrong while fetching the data. Please try again or refresh
      the page.
    </b>
  );
}
