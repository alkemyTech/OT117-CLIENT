import React, { useEffect, useState } from "react";
import "../../Styles/CardStyle.css";
import { listHasValues } from "../../Utils/validation";
import Title from "../Title/Title";
import CustomCard from "../Card/CustomCard";
import { Container } from "@mui/material";
import LoadingSpinner from "../../Utils/loadingSpinner";
import * as newsActions from "../../app/NewsReducer/newsReducer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
const NewsList = () => {
  const dispatch = useDispatch();

  const allNews = useSelector((state) => state.news.data);
  const isLoading = useSelector((state) => state.news.loading);

  useEffect(() => {
    dispatch(newsActions.getAll());
  }, []);

  const newsListHasValues = listHasValues(allNews);
  return (
    <Container className="ContainerList">
      {isLoading ? (
        <div className="spinner">
          <LoadingSpinner />
        </div>
      ) : (
        <div>
          <Title title="Novedades" />
          <ul className="list-grid-container ">
            {newsListHasValues ? (
              allNews.map((news) => {
                return (
                  <Link to={`novedades/${news.id}`}>
                  <CustomCard
                    key={news.id}
                    title={news.name}
                    img={news.image}
                    description={news.content}
                  />
                  </Link>
                );
              })
            ) : (
              <p>No hay novedades</p>
            )}
          </ul>
        </div>
      )}
    </Container>
  );
};

export default NewsList;
