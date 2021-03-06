import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import DefaultImage from "../../Assets/Title/default.jpg";
import "../../Styles/BoxStyle.css";


const Title = (props) => {
  const { title, image, id } = props;

  const [titleImage, setTitleImage] = useState("");

  useEffect(() => {
    const finalImage = image ? image : DefaultImage;
    setTitleImage(finalImage);
  }, [image]);

  return (
    <div>
      <Box
        className="boxStyle"
        key={id}
        sx={{
          backgroundImage: `url(${titleImage})`,
          display:"flex",
          justifyContent:"center",
          marginTop:"1em",
          position: "relative",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { lg: "35px", md: "32px", xs: "30px" },
            color: "white",
            textShadow: "black 1px 0 6px",
            position: "absolute",
            bottom: "0%",
            margin: "1em",
            textTransform: "uppercase",
            fontWeight: "600",
            letterSpacing: "0.5rem",
          }}
        >
          {title}
        </Typography>
      </Box>
    </div>
  );
};

export default Title;
