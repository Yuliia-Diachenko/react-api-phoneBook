// import { css } from "@emotion/react";
import PageTitle from "../../components/PageTitle/PageTitle";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <PageTitle>
      Welcome to the phone book application.
      </PageTitle>
      <p>
      In this web application, you can save your contacts, 
      emergency numbers and have access to the phone book from any device with Internet access.
      </p>
      <img src="src/assets/white_pages.svg" alt="PhoneBook" width={400} className={css.image}/>
      </div>
  );
}