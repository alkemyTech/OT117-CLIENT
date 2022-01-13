import React, { useEffect, useState, useCallback, lazy, Suspense } from "react";
import { useParams, useHistory } from "react-router";
import NewsTitle from "./NewsTittle";
import { getNewById } from "../../../Services/newsServices";
import LoadingSpinner from "../../../Utils/loadingSpinner";
import "../../../Styles/CardStyle.css";
import { useDispatch, useSelector } from "react-redux";
import * as newsActions from "../../../app/NewsReducer/newsReducer";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Box
} from "@mui/material";

const Title = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("../../Title/Title")), 600)
    )
);

const NewsDetailLayout = () => {
  const [newsDescription, setNewsDescription] = useState("");


  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();

  const news = useSelector((state) => state.news.currentNews);
  const isLoading = useSelector((state) => state.news.loading);

  const stripedHtml = useCallback(() => {
    news.content && setNewsDescription(news.content.replace(/<[^>]+>/g, ""));
  }, [news.content]);

  useEffect(() => {
    dispatch(newsActions.getById(id));
    stripedHtml();
  }, [id, stripedHtml]);

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
        onClick={()=>history.push("/novedades")}
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
      {isLoading
      ? <Box className="spinner" sx={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        zIndex:99,bgcolor:'transparent'}}
        >
          <LoadingSpinner />
        </Box>
       :
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
                <Suspense fallback={
                  <Box className="spinner" sx={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'center',
                    zIndex:99,bgcolor:'transparent'}}
                  >
                    <LoadingSpinner />
                  </Box>
                }>
                  <Title title={news.name} image={news.image} key={news.id} />
                </Suspense>
              </CardMedia>
              <CardContent sx={{
                display:"flex",
                justifyContent:"center"}}>
                <Typography>{newsDescription}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      }
    </div>
  );
};

export default NewsDetailLayout;
