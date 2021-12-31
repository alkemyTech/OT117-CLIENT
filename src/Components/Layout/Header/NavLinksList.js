import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { Link } from 'react-router-dom';
import React,{useState} from "react";

const NavLinksList = ({navLinks,campaignLinks, isLogged, horizontal}) => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
        {horizontal ?
            <List sx={{display:{xs:'none', lg:'flex'}}}
            component="nav"
            >
                {navLinks.map((navLink) => (
                    navLink.private ? (isLogged ??
                <ListItem component={Link} to={navLink.link} sx={{minWidth:'fit-content'}} button key={navLink.text}>
                    <ListItemText primary={navLink.text} sx={navLink.active ? {borderBottom:'2px solid #ec4c4c'} : {}}/>
                </ListItem>)
                : <ListItem component={Link} to={navLink.link} sx={{minWidth:'fit-content'}} button key={navLink.text}>
                    <ListItemText primary={navLink.text} sx={navLink.active ? {borderBottom:'2px solid #ec4c4c'} : {}}/>
                  </ListItem>
                ))}
                <div display="flex" flexDirection="column">
                    <ListItem onClick={handleClick}>
                        <ListItemText primary='Campañas'/>
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                            {campaignLinks.map((campLink) => (
                                campLink.private ? (isLogged ??
                            <ListItem component={Link} to={campLink.link} sx={{minWidth:'fit-content'}} button key={campLink.text}>
                                <ListItemText primary={campLink.text} sx={campLink.active ? {borderBottom:'2px solid #ec4c4c'} : {}}/>
                            </ListItem>)
                            : <ListItem component={Link} to={campLink.link} sx={{minWidth:'fit-content'}} button key={campLink.text}>
                                <ListItemText primary={campLink.text} sx={campLink.active ? {borderBottom:'2px solid #ec4c4c'} : {}}/>
                            </ListItem>
                            ))}
                    </Collapse>
                </div>
            </List>
            :<List>
            {navLinks.map((navLink) => (
                navLink.private ? (isLogged ??
                    <ListItem component={Link} to={navLink.link} button key={navLink.text}>
                    <ListItemText primary={navLink.text} sx={navLink.active ? {borderBottom:'2px solid #1a76d2'} : {}}/>
                  </ListItem>)
                  : <ListItem component={Link} to={navLink.link} sx={{maxWidth:'fit-content'}} button key={navLink.text}>
                      <ListItemText primary={navLink.text} sx={navLink.active ? {borderBottom:'2px solid #1a76d2'} : {}}/>
                    </ListItem>
              ))}
              <div display="flex" flexDirection="column">
                    <ListItem onClick={handleClick}>
                        <ListItemText primary='Campañas'/>
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                            {campaignLinks.map((campLink) => (
                                campLink.private ? (isLogged ??
                            <ListItem component={Link} to={campLink.link} sx={{minWidth:'fit-content'}} button key={campLink.text}>
                                <ListItemText primary={campLink.text} sx={campLink.active ? {borderBottom:'2px solid #ec4c4c'} : {}}/>
                            </ListItem>)
                            : <ListItem component={Link} to={campLink.link} sx={{minWidth:'fit-content'}} button key={campLink.text}>
                                <ListItemText primary={campLink.text} sx={campLink.active ? {borderBottom:'2px solid #ec4c4c'} : {}}/>
                            </ListItem>
                            ))}
                    </Collapse>
                </div>
            </List>
        }
        </>
    )
}

export default NavLinksList;
