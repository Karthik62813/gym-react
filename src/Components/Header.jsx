import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Badge from '@mui/joy/Badge';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CircularProgress from '@mui/joy/CircularProgress';
import Chip from '@mui/joy/Chip';
import IconButton from '@mui/joy/IconButton';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import Tooltip from '@mui/joy/Tooltip';
import Sheet from '@mui/joy/Sheet';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
// import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';import InfoIcon from '@mui/icons-material/Info';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
// import Home from './Home';
import { LuSearch } from "react-icons/lu";

export default function ColorInversionNavigation() {
  const [color] = React.useState('neutral');
  return (
    <div >
      <Box sx={{ display: 'flex', overflow: 'auto' , width: '25.5%', margin:'1%', position:'fixed'}} >
      <Sheet
        variant="solid"
        invertedColors
        sx={{
          height:'94vh',
          borderRadius:'20px 0 0 20px',
          p: 2,
          backgroundColor: '#373A40',
          ...(color !== 'neutral' && {
            bgcolor: `${color}.700`,
          }),
        }}
      >
        
        <List
          sx={{
            '--ListItem-radius': '8px',
            '--List-gap': '8px',
            flexGrow: 0,
            minWidth: 200,
          }}
        >
          <div className='searchbar'>
            <LuSearch className="searchicon"/>
            <input type="search" />
          </div>
          <Link to='/home' className="navbtn"><ListItemButton>
            <ListItemDecorator>
            <SpaceDashboardIcon />
            </ListItemDecorator>
             Dashboard
          </ListItemButton></Link>
          
          <Link to='/about' className="navbtn"><ListItemButton>
            <ListItemDecorator>
            <InfoIcon />
            </ListItemDecorator>
            About
          </ListItemButton></Link>
          
          <Link to='/services' className="navbtn"><ListItemButton>
            <ListItemDecorator>
            <SettingsSuggestIcon />
            </ListItemDecorator>
            Services
          </ListItemButton></Link>
          
          <Link to='/contact' className="navbtn"><ListItemButton>
            <ListItemDecorator>
            <ContactSupportIcon />
            </ListItemDecorator>
            Contact
          </ListItemButton></Link>
          
          <ListItemButton>
            <ListItemDecorator>
              <PersonIcon />
            </ListItemDecorator>
            Team
          </ListItemButton>
          <ListItem nested>
            <ListSubheader>Shortcuts</ListSubheader>
            <List>
              <ListItemButton>Tasks</ListItemButton>
              <ListItemButton>Reports</ListItemButton>
            </List>
          </ListItem>
        </List>
        <Card
          variant="soft"
          orientation="horizontal"
          sx={{ mt: 2, display: 'flex', alignItems: 'center'}}
        >
          <CircularProgress value={80} determinate thickness={8} size="lg">
            80%
          </CircularProgress>
          <CardContent sx={{ ml: 2 }}>
            <Chip
              size="sm"
              variant="outlined"
              sx={{ alignSelf: 'flex-start', mb: 1 }}
            >
              Active
            </Chip>
            <Typography fontSize="xs">Last update: 22/12/22</Typography>
          </CardContent>
        </Card>
      </Sheet>
      <Sheet
        variant="solid"
        invertedColors
        
        sx={{
          height:'94vh',
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          bgcolor: `${color}.800`,
          borderRadius:'0 20px 20px 0',
          '& .MuiBadge-root': { '--Badge-ringColor': '#FFF' },
          '& .MuiBadge-colorSuccess': { bgcolor: 'success.400' },
          '& button': {
            borderRadius: '50%',
            padding: 0,
            '--IconButton-size': '3rem',
          },
        }}
      >
        <Badge badgeContent="99+" badgeInset="10%" size="sm">
          <IconButton>
            <Avatar src="https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg" />
          </IconButton>
        </Badge>
        <Badge
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          badgeInset="15%"
          color="success"
        >
          <IconButton>
            <Avatar src="https://img.freepik.com/premium-vector/stylish-default-user-profile-photo-avatar-vector-illustration_664995-352.jpg" />
          </IconButton>
        </Badge>
        <Tooltip title="Add another chat" variant="soft">
          <IconButton sx={{ color: 'text.tertiary' }}>
            <AddIcon />
          </IconButton>
        </Tooltip>
        
        <Link to='/login' className="navbtn"><ListItemButton className='logout'>
          <ListItemDecorator>
            <LogoutIcon/>
          </ListItemDecorator>
          Logout
        </ListItemButton></Link>

      </Sheet>
      </Box>
    </div>
  );
}
