import { React, useEffect, useState } from "react";
import TestimonialCard from "../Card/TestimonialCard";
import styled from "styled-components";
import { Container, Typography } from "@mui/material";

const GridContainer = styled.div`
  display: grid;
  gap: 0.5rem;
  width: 100%;
  margin: 1rem 0;

  @media screen and (min-width: ${640 / 16}rem) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 0.75rem;
    margin: 1.5rem 0;
  }
`;

const TestimonialsSection = ({ getInformation }) => {
  const [cardsInfo, setCardsInfo] = useState([]);
  useEffect(() => {
    getInformation().then((res) => {
      setCardsInfo(res.splice(-3));
    });
  }, []);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        my: 1,
        mb: 7,
        mt: 9,
        marginTop: "2rem",
        marginBottom: 0,
      }}
    >
      <Typography variant="h4"> Testimonios </Typography>
      <GridContainer>
        {cardsInfo.map((card) => {
          return (
            <TestimonialCard
              name={card.name}
              image={card.image}
              description={card.description}
            />
          );
        })}
      </GridContainer>
    </Container>
  );
};
export default TestimonialsSection;
