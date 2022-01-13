import React, { useState, useEffect, useCallback, lazy, Suspense } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
/* import Title from "../../Title/Title"; */
import { getById } from "../../../app/activitiesReducer/activitiesReducer";
import { useSelector } from "react-redux";
import "../../../Styles/CardStyle.css";
import { useDispatch } from "react-redux";
import LoadingSpinner from "../../../Utils/loadingSpinner";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';

const Title = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("../../Title/Title")), 600)
    )
);

const Detail = () => {
  const { id } = useParams();
  const history = useHistory();
  const activity = useSelector((state) => state.activities.activity);
  const [activityDescription, setActivityDescription] = useState("");
  const [loading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const stripedHtml = useCallback(() => {
    activity.description &&
      setActivityDescription(activity.description.replace(/<[^>]+>/g, ""));
  }, [activity.description]);

  useEffect(() => {
    dispatch(getById(id));
    stripedHtml();
    setIsLoading(false);
  }, [stripedHtml]);

  return (
    <div>
      <IconButton sx={{
        cursor:"pointer",
        width:{
          xs:"3em",
          md:"4em"},
        height:{
          xs:"3em",
          md:"4em"}}}
        onClick={()=>history.push("/activities")}
        >
        <ArrowBackIcon sx={{
        width:{
          xs:"3em",
          md:"4em"},
          height:{
            xs:"3em",
            md:"4em"}}}
          />
      </IconButton>
      {loading ? (
        <div className="spinner">
          <LoadingSpinner />
        </div>
      ) : (
        <div>
          <Box sx={{
            width:"100%",
            display:"flex",
            justifyContent:"center"}}
          >
            <Card className="cardStyle" sx={{
              pointerEvents:"none",
              margin:"0",
              marginTop:"2em",
              width:{
                xs:"20em",
                md:"30em"},
              height:{
                xs:"80%"
              }
              }}>
              <CardActionArea>
                <CardMedia sx={{
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center"}}>
                  <Suspense fallback={<LoadingSpinner />}>
                    <Title
                      title={activity.name}
                      image={activity.image}
                      key={activity.id}
                    />
                  </Suspense>
                </CardMedia>
                <CardContent sx={{
                  display:"flex",
                  justifyContent:"center"}}>
                  <Typography>{activityDescription}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        </div>
      )}
    </div>
  );
};

export default Detail;
