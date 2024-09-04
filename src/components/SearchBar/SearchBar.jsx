import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
export default function SearchBar({ onSearch }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;

    const { topic } = form.elements;
    const topicValue = topic.value;

    if (topicValue.trim() === "") {
      toast.error("Please enter something before sending", {
        duration: 3000,
        position: "top-center",
        icon: "⚠️",
      });
      return;
    }

    onSearch(topicValue);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="topic"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />

        <div>
          <button className={css.btn} type="submit">
            Search
          </button>
        </div>
        <Toaster />
      </form>
    </header>
  );
}
