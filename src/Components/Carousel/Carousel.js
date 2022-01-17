import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { getImagesSlides } from "../../Services/slidesService";
import { Swiper, SwiperSlide } from "swiper/react";
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
const Carousel = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const dataImage = await getImagesSlides();
    setData(dataImage);
  }, []);

  return (
    <Box>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          "--swiper-pagination-active-color": "#000",
          "--swiper-navigation-size": "80px",
          textShadow: "0 0 0 #000",
          background: "0 0 0 #000",
        }}
        speed={2000}
        parallax={true}
        loop={true}
        navigation={true}
        autoPlay={true}
        autoPlay={{
          delay: 5000,
        }}
      >
        {data?.map((item, index) => (
          <Box key={index} sx={{}} data-swiper-parallax="-23%">
            <SwiperSlide
              style={{
                backgroundImage: `url(${item.image}), linear-gradient(180deg, rgba(7,49,58,0) 20%,rgba(17,17,17,0.6) 100%)`,
                backgroundBlendMode: "multiply",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "580px",
                backgroundRepeat: "no-repeat",
                boxSizing: "border-box",
                textShadow: "black 1px 0 6px",
              }}
            >
              <SwiperSlide
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  alignContent: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "0 0 0 50px",
                    marginTop: "15%",
                    marginLeft: { xs: 4, md: 18 },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: { xs: "1.5rem", md: "2.5rem" },
                      fontWeight: "bold",
                      marginBottom: { xs: "30px", md: "30px" },
                      letterSpacing: "0.5rem ",
                      textTransform: "uppercase",
                    }}
                    data-swiper-parallax="-300"
                  >
                    {item.name}
                  </Typography>
                </Box>
              </SwiperSlide>
            </SwiperSlide>
          </Box>
        ))}
      </Swiper>
    </Box>
  );
};

export default Carousel;
