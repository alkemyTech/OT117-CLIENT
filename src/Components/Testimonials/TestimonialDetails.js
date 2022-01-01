import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getTestimonial } from "../../Services/testimonialService";
import CustomCard from "../Card/CustomCard";
import { Container, Grid } from "@mui/material";
import Swal from "sweetalert2";
const TestimonialsDetaills = () => {
  const [testimonials, setTestimonials] = useState([]);
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    getTestimonial(id)
      .then(({ data }) => setTestimonials(data))
      .catch(() => {
        history.push("/");
        Swal.fire("Error", "Informacion no encontrada", "error");
      });
  }, []);
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        my: 1,
        mb: 7,
        mt: 9,
      }}
    >
      <Grid sx={{ m: 10 }}>
        <CustomCard
          title={testimonials.name}
          img={testimonials.image}
          description={testimonials.description}
        />
      </Grid>
    </Container>
  );
};

export default TestimonialsDetaills;
