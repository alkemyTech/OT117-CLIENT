import { NO_ACTIVITIES } from "../../common/text/textActivity";
import { setCKEditorText } from "../../common/ckEditor/setCKEditorText";
import { getAll } from "../../../Services/activityService";
import { Container, Grid, Button } from "@mui/material";
import CustomCard from "../../Card/CustomCard";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const ActivitiesCards = () => {
  const [activities, setActivitie] = useState([]);
  const history = useHistory();
  useEffect(() => {
    getAll().then((activities) => setActivitie(activities));
  }, []);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        my: 1,
        mb: 7,
        mt: 9,
      }}
    >
      <h2>Actividades</h2>

      <Button onClick={() => history.push("/backoffice/activities/new")}>
        Crear nueva Actividad
      </Button>

      <Grid container sx={{ m: 3 }}>
        {activities.length > 0 ? (
          activities.map((card) => (
            <Grid key={card.id} xs={12} sm={4}>
              <CustomCard
                route={`/backoffice/activities/edit/${card.id}`}
                title={card.name}
                img={card.image}
                description={
                  card.description && setCKEditorText(card, "description")
                }
                button="Cambiar Actividad"
              />
            </Grid>
          ))
        ) : (
          <p>{NO_ACTIVITIES}</p>
        )}
      </Grid>
    </Container>
  );
};

export default ActivitiesCards;
