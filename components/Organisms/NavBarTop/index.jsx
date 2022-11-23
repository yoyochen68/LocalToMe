import styled from 'styled-components'
import * as React from 'react';
import { AppBar, Container, Box, Toolbar, IconButton, Button, Delete, Icon, ThemeProvider, Typography } from '@mui/material'
import NavBarIcons from '../../Atoms/NavIcons';
import { Colours, Theme } from '../../../styles/globals';
import { useState } from 'react';
import { useRouter } from 'next/router';

const AppDiv = styled(AppBar)`
  @media (max-width: 768px) {
    display:none;
}
`

const NavButton = styled(IconButton)`
`

const NavIcons = styled(NavBarIcons)`
`

const Logo = styled.img`
  width:50px;
  height:50px;
`

export default function TopNavigation({
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
      <AppDiv position="fixed" sx={{ backgroundColor: "white", color: Colours.primary, maxWidth: "100vw" }}>
        <Container maxWidth="false">
          <Toolbar disableGutters>
            <Container sx={{ display: "flex", justifyContent: "flex-start" }}>
              <Logo src="/localtomelogo.svg" alt="Local To Me logo" aria />
              {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}> */}
              <Typography
                variant="h4"
                noWrap
                component="a"
                href="/"
                sx={{
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  fontFamily: "Fredoka",
                }}
              >
                LocalToMe
              </Typography>
            </Container>
            {/* </Box> */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex', justifyContent: "flex-end" } }}>
              <NavButton onClick={onHome} sx={{ display: 'flex', flexDirection: 'column', borderRadius: "0", padding: "18px 30px", maxWidth: "90px", fontSize: "12px" }}>
                <NavIcons icon="Home" />
                Home
              </NavButton>
              <NavButton onClick={onCommunity} sx={{ display: 'flex', flexDirection: 'column', borderRadius: "0", padding: "18px 30px", maxWidth: "90px", fontSize: "12px" }}>
                <NavIcons icon="Community" />
                Community
              </NavButton>
              <NavButton onClick={onMap} sx={{ display: 'flex', flexDirection: 'column', borderRadius: "0", padding: "18px 30px", maxWidth: "90px", fontSize: "12px" }}>
                <NavIcons icon="Map" />
                Map
              </NavButton>
              <NavButton onClick={onFavourites} sx={{ display: 'flex', flexDirection: 'column', borderRadius: "0", padding: "18px 30px", maxWidth: "90px", fontSize: "12px" }}>
                <NavIcons icon="Favourite" />
                Favourites
              </NavButton>
              <NavButton onClick={onProfile} sx={{ display: 'flex', flexDirection: 'column', borderRadius: "0", padding: "18px 30px", maxWidth: "90px", fontSize: "12px" }}>
                <NavIcons icon="Profile" />
                Profile
              </NavButton>
            </Box>
          </Toolbar>
        </Container>
      </AppDiv>
    </ThemeProvider>
  );
}         