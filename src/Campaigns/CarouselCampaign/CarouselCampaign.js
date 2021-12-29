import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "@mui/material";
import styled from "styled-components"
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Parallax,
} from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "../../Styles/Carousel.css";
SwiperCore.use([Parallax, Autoplay, Navigation, Pagination, Scrollbar, A11y]);

const SliderContainer = styled.div`
  --slider-padding: 1em;
  width: calc(100% - (var(--slider-padding) * 2));
  height: 20rem;
  padding: var(--slider-padding);

  @media screen and (min-width: ${640 / 16}rem){
    --slider-padding: 1.5em;
    height: 25rem;  
  }

  @media screen and (min-width: ${1024 / 16}rem){
    --slider-padding: 2em;
    height: 30rem;
  }
`

const CarouselCampaign = ({ values }) => {
  const sliderContent = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    boxSizing: "border-box",
  };
  const sliderContainer = {
    "--swiper-navigation-color": "#fff",
    "--swiper-pagination-color": "#fff",
    "--swiper-pagination-active-color": "#000",
    "--swiper-navigation-size": "80px",
    textShadow: "0 0 0 #000",
    background: "0 0 0 #000",
    width: "100%",
    height: "100%"
  };
  return (
    <SliderContainer>
      <Swiper
        style={sliderContainer}
        speed={2000}
        parallax={true}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 5000,
        }}
      >
        {values.map((slide, index) => (
          <>
            <SwiperSlide key={index}>
              <div data-swiper-parallax="-23%">
                <SwiperSlide style={sliderContent}>
                    <img
                      src={slide.img}
                      alt={slide.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "center",
                        objectPosition: "center"
                      }}
                    />
                </SwiperSlide>
              </div>
              <Box
                data-swiper-parallax="-100"
                sx={{
                  display: { xs: "none", xl: "flex" },
                  justifyContent: "center",
                  padding: "20px",
                  fontSize: "1.5rem",
                }}
              >
                {slide.title}
              </Box>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </SliderContainer>
  );
};

export default CarouselCampaign;
