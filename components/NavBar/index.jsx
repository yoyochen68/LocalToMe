import * as React from 'react';
import styled from 'styled-components'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import { Colours, Theme } from '../../styles/globals';
import { Colours } from '../../styles/globals';
import { ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Icon from '@mui/material';
// Placeholder Icons
import NavbarIcons from './NavIcons';

const NavBar = styled(BottomNavigation)`
  width:100vw;
  position:fixed;
  bottom:0;
  color:#535353;
  box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.25);
  z-index:100;
  // @media (min-width: 768px) {
  //   display:none;
  height:7.5vh;
}
`
const NavBarAction = styled(BottomNavigationAction)`
  font-family:'Rubik', sans-serif;
  max-width:none;
  &:hover{
    color:${Colours.primary};
}
`
import { createTheme } from '@mui/material';

export const Theme = createTheme({
  typography: {
    fontFamily: [
      "Rubik, sans-serif"
    ]
  },
  palette: {
    primary: {
      main: `#068906`
    },
    secondary: {
      main: `#085617`
    }
  }
});

export default function LabelBottomNavigation({
  value = 0,
}) {
  const r = useRouter();
  // let [navValue, setNavValue] = useState(value);
  const onHome = () => {
    r.push("/");
  }
  const onCommunity = () => {
    r.push("/community");
  }
  const onMap = () => {
    r.push("/map");
  }
  const onFavourites = () => {
    r.push("/favourites");
  }
  const onProfile = () => {
    r.push('/profile')
  }
  return (
    <ThemeProvider theme={Theme}>
      <NavBar
        showLabels
        value={value}
        active={value}
        onChange={(event, newValue) => {
          value = newValue;
        }}
      >
        {value === 0 ? (<NavBarAction label="Home" icon={<NavbarIcons icon="Home" active={true} />} onClick={onHome} />) : (<NavBarAction label="Home" icon={<NavbarIcons icon="Home" />} onClick={onHome} />)}
        {value === 1 ? (<NavBarAction label="Community" icon={<NavbarIcons icon="Community" active={true} />} onClick={onCommunity} />) : (<NavBarAction label="Community" icon={<NavbarIcons icon="Community" />} onClick={onCommunity} />)}
        {value === 2 ? (<NavBarAction label="Map" icon={<NavbarIcons icon="Map" active={true} />} onClick={onMap} />) : (<NavBarAction label="Map" icon={<NavbarIcons icon="Map" />} onClick={onMap} />)}
        {value === 3 ? (<NavBarAction label="Favourites" icon={<NavbarIcons icon="Favourite" active={true} />} onClick={onFavourites} />) : (<NavBarAction label="Favourites" icon={<NavbarIcons icon="Favourite" />} onClick={onFavourites} />)}
        {value === 4 ? (<NavBarAction label="Profile" icon={<NavbarIcons icon="Profile" active={true} />} onClick={onProfile} />) : (<NavBarAction label="Profile" icon={<NavbarIcons icon="Profile" />} onClick={onProfile} />)}

      </NavBar>
    </ThemeProvider>
  );
}         