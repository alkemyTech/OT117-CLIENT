import { getAllTestimonial } from "../../Services/testimonialService";
import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import CustomCard from "../Card/CustomCard";
import { setCKEditorText } from "../../Components/common/ckEditor/setCKEditorText";
import LoadingSpinner from "../../Utils/loadingSpinner";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const data = async () => {
      const resp = await getAllTestimonial();
      if (resp.length > 0) {
        setTestimonials(resp);
        setError(false);
      } else if (resp.success) {
        setError(true);
      }
    };
    data();
  }, []);
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: "center",
        my: 1,
        mb: 7,
        mt: 9,
      }}
    >
      <h1>Testimonios</h1>
      {testimonials.length === 0 && !error && <LoadingSpinner />}
      {error && (
        <h3>
          Lo Sentimos Hubo un error al cargar los datos, estamos trabajando en
          la solucion =)
        </h3>
      )}
      <Grid container sx={{ m: 3 }}>
        {testimonials.length > 0 &&
          testimonials.map((card) => (
            <Grid xs={4}>
              <CustomCard
                title={card.name}
                img={card.image}
                description={
                  (card.content && setCKEditorText(card, "content")) ||
                  (card.description && setCKEditorText(card, "description"))
                }
                lines={card.description && 3}
              />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Testimonials;
