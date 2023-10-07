import  React,{useState} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, Route } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkIcon from '@mui/icons-material/Work';
import PeopleIcon from '@mui/icons-material/People';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ModalForm from './ModalForm';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const[modalIsOpen,setModalIsOpen] = useState(false)

  const handleModalFormOpen = () => {
    setModalIsOpen(true);
  };

  const handleModalFormClose = () => {
    setModalIsOpen(false);
  };


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <AcUnitIcon style={{ marginRight: '8px' }} />
        <Typography variant="h6" noWrap>
          TITULO DO SITE
        </Typography>
      </Box>
     </Toolbar >
        
      <Divider />
      <List>
        {[
          { text: 'Inicio', route: '/' ,icon: <HomeIcon />},
          { text: 'Meu Perfil', route: '/perfil',icon: <AccountCircleIcon /> },
          { text: 'Meus Projetos', route: '/meus-projetos',icon: <WorkIcon /> },
          { text: 'Colaboradores', route: '/colaboradores',icon: <PeopleIcon />  },
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.route}>
              <ListItemIcon>
              {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton  onClick={handleModalFormOpen}>
            <ListItemIcon>
            <AddBoxIcon />
              </ListItemIcon>
            <ListItemText primary={"Criar Projeto"}/>
        </ListItemButton>
        </ListItem>
    </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor:'transparent',
        }}
      >
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2,
               display: { sm: 'none' },
               
            }}
          >
            <MenuIcon />
          </IconButton>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box> 
      <ModalForm  isOpen={modalIsOpen} onClose={handleModalFormClose}/>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
