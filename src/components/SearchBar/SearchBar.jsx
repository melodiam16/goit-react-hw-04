import css from "./SearchBar.module.css";
export default function SearchBar({ onSearch }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;

    const { topic } = form.elements;
    const topicValue = topic.value;
    console.log(topicValue);

    if (topicValue.trim() === "") {
      alert("Please enter search term!");
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
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
