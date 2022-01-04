import { Box, Button, List, Divider, SwipeableDrawer, Container, IconButton } from '@mui/material';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../../Assets/Logo/logo.png';
import schoolLogo from '../../../Assets/SchoolCampaign/Logotipo campaña materiales escolares.png';
import toysLogo from '../../../Assets/ToysCampaign/Logotipo campaña juguetes.png'
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import NavLinksList from './NavLinksList';
import { navLinks,campaignLinks, manageLinkActivation } from './HeaderLinks';
import '../../../Styles/Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogged,setIsLogged] = useState(false);
  const [userName,setUserName] = useState();
  const logout = () =>{
    localStorage.clear();
    setIsLogged(false)
  }
  manageLinkActivation(window.location.pathname);
  useEffect(()=>{
    setUserName(localStorage.getItem('userName'))
    if(userName){
      setIsLogged(true)
    }
  },[userName])
  return (
    <Container maxWidth={false} sx={{display: 'flex',  backgroundColor:"#28527A",justifyContent: 'space-between', padding:'0 15px 0 10px'}}>
      <Box sx={{display:'flex', gap:'20px', color:"white", alignItems:'center'}}>
        <img id='ong-logo-image' className={window.location.pathname!=='/'?('ong-logo'):('')} src={logo} height="100px"/>
        {window.location.pathname==='/school-campaign' || window.location.pathname==='/toys-campaign'?
          (
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
              {window.location.pathname==='/school-campaign'?
              (
                <img id='toys-logo' src={schoolLogo} height="70px"/>
              )
              :(<img id='materials-logo' src={toysLogo} height="70px"/>)}
              <span id='campaign-slogan' className='slogan'>{window.location.pathname==='/school-campaign'? ('JUNTOS EN LA VUELTA AL COLE'):('JUGUETES POR MÁS SONRISAS')}</span>
            </Box>
          ):
          (null)}
        <NavLinksList horizontal navLinks={navLinks} campaignLinks={campaignLinks} isLogged={isLogged}/>
      </Box>
        <List sx={{display:{xs:'none', lg:'flex'}, gap:'10px'}}>
          {isLogged
          ?<>
            <div display="flex" flexDirection="column">
              <div>
                <Button color="buttonlogin" variant="outlined" sx={{alignSelf:'center'}}><span>{userName}</span></Button>
              </div>
              <div>
                <Button component={Link} to="/backoffice" color="buttonlogin" variant="outlined" sx={{alignSelf:'center'}}>Backoffice</Button>
                <Button color="error" variant="contained" sx={{alignSelf:'center'}} onClick={()=>logout()}>Cerrar sesión</Button>
              </div>
            </div>
          </>
          :<>
            <Button component={Link} to="/login" color="buttonlogin" variant="outlined" sx={{alignSelf:'center'}}>
              LOGIN
            </Button>
            <Button component={Link} to="/register"  color="buttonregistrate" variant="contained" sx={{alignSelf: 'center'}}>
              Registrate
            </Button>
          </>
          }
        </List>
      <IconButton onClick={() => setIsOpen(true)} aria-label="menu" size="large" sx={{display: {xs:'inline-block', lg:'none'}}}>
          <MenuIcon/>
      </IconButton>
      <SwipeableDrawer
        anchor={'left'}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}>
          <Box
          sx={{ width: 250 }}
          role="presentation">
            <List sx={{display:'flex', flexDirection:'column', paddingLeft:'15px', gap:'10px'}}>
              {isLogged
                ?<>
                  <Button color="success" variant="outlined" sx={{alignSelf:'center'}}>{userName}</Button>
                  <Button component={Link} to="/backoffice" color="success" variant="outlined" sx={{alignSelf:'center'}}>Backoffice</Button>
                  <Button color="error" variant="outlined" sx={{alignSelf:'center'}} onClick={()=>logout()}>Cerrar sesión</Button>
                </>
                :<>
                  <Button component={Link} to="/login" variant="outlined" sx={{alignSelf:'start'}}>
                    LOGIN
                  </Button>
                  <Button component={Link} to="/register" variant="contained" sx={{alignSelf: 'start'}}>
                    Registrate
                  </Button>
                </>
              }</List>
            <Divider />
            <NavLinksList navLinks={navLinks} campaignLinks={campaignLinks} isLogged={isLogged}/>
          </Box>
      </SwipeableDrawer>
    </Container>
    )
}

export default Header;
