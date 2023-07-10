import * as React from "react";
import { AppBar, Box, Typography, Button, Stack, Toolbar } from "@mui/material";
import "./Header.css";
import Compound from "./Assets/Compound.png";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WidgetsIcon from "@mui/icons-material/Widgets";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import USDC from "./Assets/USDC.png";
import Ethereum from "./Assets/Ethereum.png";

function Header() {
  return (
    <>
      <Box>
        <AppBar className="app" position="static">
          <Toolbar>
            <Stack direction="row" sx={{ flexGrow: 1 }} className="parent">
              <Typography className="name">
                <a href="https://compound.finance/">
                  <img className="image" src={Compound} alt="Compound" />
                </a>
                Compound
              </Typography>
              <Button className="button">
                <ViewQuiltIcon />
                Dashboard
              </Button>
              <Button className="button1">
                <LeaderboardIcon />
                Markets
              </Button>
              <Button className="button1">
                <WidgetsIcon />
                Extensions
              </Button>
              <Button className="button1">
                <CheckCircleIcon />
                Vote
              </Button>
            </Stack>
            <Stack direction="row" className="parent1">
              <Stack direction="row">
                <img className="image1" src={USDC} alt="USDC" />
                <img className="image1" src={Ethereum} alt="USDC" />
                USDC/ Ethereum
              </Stack>
              <Button className="button2">Connect Wallet</Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;
