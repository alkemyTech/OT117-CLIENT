import { Container, Box, ImageList, Typography } from '@mui/material';
import React from 'react';
import Image from '../../Assets/SchoolCampaign/Logotipo campaña materiales escolares.png';
import Image2 from '../../Assets/SchoolCampaign/Imágenes contenido opción 1.png';
import Image3 from '../../Assets/SchoolCampaign/Imágenes contenido opción 2.png';
import moment from "moment"
const Content = () => {
  const actualDate = moment()
  const contestDate = moment("2022-12-15")
  const dateDifference = moment.duration(contestDate.diff(actualDate))
  const images = [
    {img: Image, alt:"", rotate:'45deg', align:'start'},
    {img: Image2, alt:"", rotate:'10deg', align:'end'},
    {img: Image3, alt:"", rotate:'-10deg', align:'end'},
    {img: Image, alt:"", rotate:'-45deg', align:'start'}
  ]

  return (
    <Container width={false} sx={{display:'flex', alignItems:'center', flexDirection:'column', position:'relative', marginTop:'50px', marginBottom:{lg:'250px'}}}>
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems:'center', textAlign:'center', zIndex:'10', gap:'15px'}}>
        <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}, justifyContent:'center', maxWidth:{lg:'70%'}, flexWrap:'wrap', gap:'10px'}}>
          <Typography variant="h5">{`${actualDate.format("DD/MM/YYYY")} ${actualDate.format("HH:mm")}hs`}</Typography>
          <Typography variant="h5">Avenida Lacarra 621, Parque Avellaneda, Provincia de Buenos Aires</Typography>
        </Box>
        <Typography variant="h5" sx={{display: {xs:'none', sm:'block'}}}>{`Fecha del concurso: ${contestDate.format("DD/MM/YYYY")}`}</Typography>
        <Typography variant="h5" sx={{display: {xs:'none', sm:'block'}}}>
          TE QUEDAN: {`${dateDifference._data.months} meses, ${dateDifference._data.days} días y ${dateDifference._data.hours} horas`} para participar
        </Typography>
        <Typography paragraph sx={{maxWidth:{xs:'100%', lg:'65%'}}}>
          Te invitamos a sumarte donando útiles escolares nuevos o usados en buen estado
          para que podamos armarles regalos personalizados a los niños y adultos de las instituciones que ayudamos desde la Fundación
        </Typography>
      </Box>
      <Box sx={{display:{xs:'none', lg:'flex'}, minHeight:'300px', justifyContent:'space-between', position:'absolute', width:'100%', top:'60px'}}>
        {
          images.map((image, index) =>
            <img
              key= {index}
              src= {image.img}
              alt= {image.alt}
              width= "200px"
              style= {{
                transform:`rotate(${image.rotate})`,
                height: 'fit-content',
                alignSelf: image.align
              }}
            />
          )
        }
      </Box>
    </Container>
  );
}

export default Content;
