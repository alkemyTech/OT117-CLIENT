import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Container, Box, TableFooter} from "@mui/material";
import { getOrganizationInformation } from "../../Services/OrganizationInformation";

const Footer = () => {
  const linkStyle = { textDecoration: "none", color:"white" };
  const [organizationInformation, setOrganizationInformation] = useState({});

  useEffect(() => {
    getOrganizationInformation().then((res) => {
      setOrganizationInformation(res.data);
    });
  }, []);

  return (
    <>
    <div className="ContenedorWaveFooter">
      </div>
    <TableFooter
      sx={{
        display: { xs: "flex" },
        justifyContent: { xs: "center" },
        alignItems: { xs: "center" },
        justifyContent: { xs: "space-evenly" },
        flexDirection: { xs: "column" },
        backgroundColor:"#28527A",
        color:"white"
      }}
    >
      <Container
        sx={{
          display: { xs: "grid", sm: "flex" },
          justifyContent: { xs: "center" },
          alignItems: { xs: "center" },
          justifyContent: { xs: "space-around" },
        }}
      >
        <Box
          sx={{
            display:"flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection:  "column",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              height:"100px"

            }}>
            <img  height="120px" src={organizationInformation.logo} alt="logo" style={{objectFit:"cover"}}/>
          </Box>
          <Box sx={{
                display: { xs: "none", sm: "flex" },
                position: "relative",
                bottom: 10
                }}>
            <Link to="/" style={linkStyle}>
              Visita nuestra página
            </Link>
        </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "flex" },
            flexDirection: { xs: "column"},
            gap: 5,
            width: { xs: "100%" },
            justifyContent: { xs: "space-evenly" },
            alignItems: { xs: "center" },
            flexWrap: { xs: "wrap" },
          }}
        >
          <Box
            sx={{
              margin: "3px",
              display: { xs: "none",xl:"flex" }
            }}
          >
            <Link to="/school-campaign" style={linkStyle}>
              Campaña Escolar
            </Link>
          </Box>
          <Box
            sx={{
              margin: "3px",
              display: { xs: "none",xl:"flex" },
            }}
          >
            <Link to="/toys-campaign" style={linkStyle}>
              Campaña Juguetes
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex" ,
            width: "100%" ,
            justifyContent: "center" ,
            flexDirection: {md:"column"},
          }}
        >
          <Box sx={{display: "flex", justifyContent:"flex-start", alignItems:"center"}}>
            <a href={`https://${organizationInformation.facebook_url}`} target="_blank">
              <FacebookIcon sx={{ fontSize: 40, textDecoration: "none", color:"#ec4c4c"}} />
            </a>
            <Box sx={{display: {xs:"none", md:"flex"}}}>
              <a href={`https://${organizationInformation.facebook_url}`} target="_blank" style={linkStyle}>
                <p>https://www.facebook.com/somos_mas</p>
              </a>
            </Box>
          </Box>
          <Box sx={{display: "flex", justifyContent:"flex-start", alignItems:"center"}}>
            <a href={`https://${organizationInformation.linkedin_url}`} target="_blank">
              <LinkedInIcon sx={{ fontSize: 40, textDecoration: "none", color:"#f8fc74" }} />
            </a>
            <Box sx={{display: {xs:"none", md:"flex"}}}>
              <a href={`https://${organizationInformation.linkedin_url}`}  style={linkStyle}>
                <p>https://www.linkedin.com/company/somosmas</p>
              </a>
            </Box>
          </Box>
          <Box sx={{display: "flex", justifyContent:"flex-start", alignItems:"center"}}>
            <a href={`https://${organizationInformation.instagram_url}`} target="_blank">
              <InstagramIcon sx={{ fontSize: 40, textDecoration: "none", color:"#8dcaff" }} />
            </a>
            <Box sx={{display: {xs:"none", md:"flex"}}}>
              <a href={`https://${organizationInformation.instagram_url}`} style={linkStyle}>
                <p>https://www.instagram.com/somosmas</p>
              </a>
            </Box>
          </Box>
          <Box sx={{display: "flex", justifyContent:"flex-start", alignItems:"center"}}>
            <a href={`https://${organizationInformation.twitter_url}`} target="_blank">
              <TwitterIcon sx={{ fontSize: 40, textDecoration: "none", color:"white" }} />
            </a>
            <Box sx={{display: {xs:"none", md:"flex"}}}>
              <a href={`https://${organizationInformation.twitter_url}`} style={linkStyle}>
                <p>https://www.twitter.com/somosmas</p>
              </a>
            </Box>
          </Box>
        </Box>
      </Container>
    </TableFooter>
    </>
  );
};

export default Footer;
