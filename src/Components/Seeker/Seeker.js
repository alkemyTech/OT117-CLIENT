import React, { useState, useEffect } from "react";
import LoadingSpinner from "../../Utils/loadingSpinner";
import axios from "axios";
import {
  Form,
  Button,
  Container,
  TableRow,
  TableCell,
  TextField,
  Spinner,
  Grid,
  Box,
} from "@mui/material";

import CustomCard from "../Card/CustomCard";
import { searchIn } from "../../Services/seekerService";
import { setCKEditorText } from "../../Components/common/ckEditor/setCKEditorText";


const Seeker = ({ endpointName, minLength }) => {
  const [targetValue, setTargetValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState([]);

  const targetValueSearch = (e) => {
    setTargetValue(e.target.value);
  };

  const showresults = async () => {
    setIsLoading(true);
    if (targetValue ===""){
      setTargetValue(" ");
    }
    await searchIn(endpointName, targetValue, minLength).then((res) => {
      setResult(res);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    showresults();
  }, [targetValue]);

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          m: 4,
        }}
      >
        <TextField
          sx={{ width: "75%" }}
          controlId="floatingInput"
          label="Ingrese su busqueda"
          className="d-flex"
          onChange={targetValueSearch}
        />
      </Box>

      <Container>
        {targetValue && !isLoading ? (
          <Grid container spacing={2}>
            {result.map((element) => (
              <Grid item xs={6} md={4} key={element.id}>
                <CustomCard
                  title={element.name}
                  img={element.image}
                  description={
                  (element.content && setCKEditorText(element, "content")) ||
                  (element.description && setCKEditorText(element, "description"))
                }
                lines={element.description && 3}
                route={`${location.pathname}/${element.id}`}
                />
              </Grid>
            ))}
          </Grid>
        ) : isLoading ? (
          <div className="d-flex justify-content-center m-5">
            <LoadingSpinner />
          </div>
        ) : (
          ""
        )}
      </Container>
    </div>
  );
};

export default Seeker;
