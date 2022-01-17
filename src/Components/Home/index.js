import React, { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";
import { getOrganizationInformation } from "../../Services/OrganizationInformation";
import CardsSection from "./CardsSection";
import * as newsService from "../../Services/newsServices";
import * as testimonialService from "../../Services/testimonialService";
import { errorMessage } from "../error";
import TestimonialsSection from "./TestimonialsSection";

const Home = () => {
  const [welcomeText, setWelcomeText] = useState("Bienvenido a Somos más!");
  const [sectionScroll, setSectionScroll] = useState(false);

  // useEffect(() => {
  //   getOrganizationInformation()
  //     .then((res) => setWelcomeText(res.data.welcome_text))
  //     .catch((err) => {
  //       errorMessage(err);
  //     });
  // }, []);
  useEffect(() => {
    const showTestimonial = () => {
      const bodyHeight =
        document.documentElement.getBoundingClientRect().height;
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop >= bodyHeight / 1.8) {
        setSectionScroll(true);
      }
    };
    window.addEventListener("scroll", showTestimonial);

    return () => {
      window.removeEventListener("scroll", showTestimonial);
    };
  }, []);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{welcomeText}</h1>
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <Carousel />
        <CardsSection
          title="Últimas novedades"
          clickeable={{ to: "/novedades" }}
          getInformation={newsService.getAll}
          slices={3}
          button={{ text: "Ver todas", to: "/novedades" }}
        />
        {sectionScroll && (
          <TestimonialsSection
            getInformation={testimonialService.getAllTestimonial}
          />
        )}
      </section>
    </>
  );
};

export default Home;
