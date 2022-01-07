import { Container, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomCard from "../Card/CustomCard";
import { setCKEditorText } from "../../Components/common/ckEditor/setCKEditorText";
import LoadingSpinner from "../../Utils/loadingSpinner";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  gap: .5rem;
  width: 100%;
  margin: 1rem 0;
  
  @media screen and (min-width: ${640 / 16}rem){
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: .75rem;
    margin: 1.5rem 0;
  }
`

const CardsSection = ({
  title,
  button,
  getInformation,
  slices,
  clickeable,
}) => {
  const [cardsInfo, setCardsInfo] = useState([]);
  useEffect(() => {
    getInformation().then((res) => {
      if (slices) {
        setCardsInfo(res.slice(-slices));
      } else {
        setCardsInfo(res);
      }
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
        marginBottom: 0
      }}
    >
      <Typography variant="h4"> {title} </Typography>
      {cardsInfo.length === 0 && <LoadingSpinner />}
      <GridContainer>
        {cardsInfo &&
          cardsInfo.map((card) => (
            <CustomCard
              key={card.id}
              title={card.name}
              img={card.image}
              route={clickeable && `${clickeable.to}/${card.id}`}
              description={
                (card.content && setCKEditorText(card, "content")) ||
                (card.description && setCKEditorText(card, "description"))
              }
              lines={card.description && 3}
            />
          ))}
      </GridContainer>
      {button && (
        <Button component={Link} to={button.to} variant="outlined">
          {button.text}
        </Button>
      )}
    </Container>
  );
};

export default CardsSection;
