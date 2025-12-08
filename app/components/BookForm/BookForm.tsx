import css from "./BookForm.module.css";

export default function BookForm() {
  return (
    <section className={css.formSection}>
      <div className={css.formTextWrapper}>
        <h2 className={css.formTitle}>Book your campervan now</h2>
        <p className={css.formText}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <form className={css.form} action="submit">
        <input
          placeholder="Name*"
          className={css.input}
          type="text"
          name="name"
        />
        <input
          placeholder="Email*"
          className={css.input}
          type="email"
          name="email"
        />
        <input
          placeholder="Booking date*"
          type="date"
          className={css.input}
          name="date"
        />
        <textarea
          placeholder="Comment"
          className={css.textarea}
          name="comment"
        />
      </form>
      <button className={`button ${css.button}`} type="submit">
        Send
      </button>
    </section>
  );
}
