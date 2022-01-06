import Title from "../Title/Title";
import { Box, Grid, Container, Typography } from "@mui/material";
import "../../Styles/Container.css";
import {
  LinkedinFollowCompany,
  TwitterTweet,
  TwitterButton
} from "react-social-plugins";
import AboutUsMembers from "./AboutUsMembers";
import nosotros from "../../Assets/TitleImages/nosotros.jpg";
import logo from "../../Assets/Logo/logo.png";
import nosotrossvg from "../../Assets/waves/nosotros.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../../Styles/AboutLinks.css"

const AboutUs = () => {

  const description = `Somos un centro comunitario que acompaña a más de 700 personas a través de las áreas de:
        Educación, deportes, primera infancia, salud, alimentación y trabajo social.`;
  return (
    <>
        <Title title="NOSOTROS" image={nosotros} />
        <div className="title-container-text"></div>
      <div className="ContenedorNosotros">
        <Box
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 167, md: 333 },
            maxWidth: { xs: 250, md: 450 },
          }}
          alt="The house from the offer."
          src={nosotrossvg}
        ></Box>
        <div
          className="ContenedorNosotrosH1"
        >
          <Box
            component="h1"
            sx={{
              fontSize: { xs: 15, md: 30 },
            }}
          >
            {description}
          </Box>
        </div>
      </div>
      <Grid className="ContenedorTitulo">
        {/* <img src={logo} alt="Logo"  className="MiembrosLogo"/> */}
      </Grid>
      <div className="ContenedorCards">
        <AboutUsMembers />
      </div>
      <div>
        <div>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              my: 1,
              mb: 7,
              mt: 9,
            }}
          >
             <Typography
              className="ContenedorTitulo"
              variant="h3"
              sx={{
                fontSize: { lg: "45px", xs: "35px" },
                bottom: "40px",
                textTransform: "uppercase",
                fontWeight: "600",
                letterSpacing: "0.5rem",
              }}>
                REDES
            </Typography>
            <Box sx={{
              margin:3,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection:{xs:"column",md:"row"}
            }}>
              <a className="AboutLinks" style={{color:"#ec4c4c"}}
              href="https://www.facebook.com/somos_mas">
              Facebook</a>
              <a className="AboutLinks" style={{color:"#f1bf67"}}
              href="https://www.linkedin.com/company/somosmas">
              Linkedin</a>
              <a className="AboutLinks" style={{color:"#1d9bf0"}}
              href="https://www.instagram.com/somosmas">
              Instagram</a>
            </Box>
            <Box sx={{
              margin:3
            }}>
              <LinkedinFollowCompany
                companyId={3144678}
                counter="top"
                lang="en_US"
              />
            </Box>
            <Box sx={{
              margin:3
            }}>
              <TwitterButton
                target="@somosmas"
                text="es una ONG que vale la pena conocer"
                type="Mention"
                  />
            </Box>

            <Grid container sx={{ m: 3 }}>
              <TwitterTweet
                align="center"
                coversation="none"
                tweetId="1450535690199085058"
                theme="light"
                width={300}
              />
              <TwitterTweet
                align="center"
                coversation="none"
                tweetId="1440383594615042052"
                theme="light"
                width={300}
              />
              <TwitterTweet
                align="center"
                coversation="none"
                tweetId="1271501359658012675"
                theme="light"
                width={300}
              />
            </Grid>
          </Container>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
