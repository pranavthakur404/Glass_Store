import { useState } from "react";
import styles from "../pages_css/Contact.module.css";

function Contact() {
  useState();
  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.formHeading}>
        Fill out this form, and we will reach out to you shortly.
      </h2>
      <form className={styles.formContainer}>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" required />
        <br />
        <label htmlFor="number">Contact Number: </label>
        <input type="number" id="number" required />
        <br />
        <label htmlFor="message">Message: </label>
        <br />
        <textarea id="message" cols="70" rows="10"></textarea>
        <br />
        <button type="submit" className={styles.submitBtn}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
