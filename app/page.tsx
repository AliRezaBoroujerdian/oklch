"use client";

import {
  Box,
  Chip,
  Container,
  CssBaseline,
  Divider,
  IconButton,
  Slider,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { ChangeHue, ChangeTheme } from "./ui/style/functions/helper";
import { useState } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { inherits } from "util";

export default function Home() {
  const [hue, setHue] = useState<number>(320);
  const [theme, setTheme] = useState<string>("light");

  const handleHueChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setHue(newValue);
      ChangeHue(newValue);
    }
  };

  const handleThemeChange = () => {
    var newTheme = theme == "dark" ? "light" : "dark";
    setTheme(newTheme);
    ChangeTheme(newTheme);
  };

  return (
    <>
      <div className="min-h-screen">
        <div className="md:flex justify-center items-center ">
          <div className="md:flex justify-center items-center [&_.MuiDivider-root]:border-primary">
            <div className="">
              <div className="m-10 p-3">
                <h1 className="text-3xl mb-1">Main Title</h1>
                <h3 className="text-xl text-secondary">Lorem ipsum dolor</h3>
              </div>

              <div className="m-10 p-6 border-2 md:w-96 bg-base-secondary rounded-md border-base-teritary">
                <h2 className="text-2xl mb-1">I'm a card</h2>
                <h4 className="mb-4">Lorem ipsum dolor</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Itaque doloremque modi veniam aspernatur voluptatum labore
                  dolores perspiciatis.
                </p>
              </div>

              <button className="button ml-10 p-3 border-2 w-32 text-base-primary bg-secondary rounded-md">
                Button
              </button>
              <button className="error mx-10 p-3 text-primary border-2 w-32 rounded-md">
                Button
              </button>
            </div>
            {/* <Divider orientation="vertical" variant="middle" flexItem  /> */}
            <div>
              <div className="m-10 p-6 border-2 md:w-96 bg-base-secondary rounded-md border-base-teritary [&_.MuiDivider-root::before]:border-primary [&_.MuiDivider-root::after]:border-primary [&_.MuiChip-root]:bg-base-teritary [&_.MuiChip-root]:text-primary [&_.MuiSlider-root]:text-secondary">
                <div className="mb-5 flex justify-center">
                  <h1 className="text-3xl mb-1">Setting</h1>
                </div>
                <Divider>
                  <Chip label="Hue" />
                </Divider>
                <Typography
                  className="mt-4"
                  id="non-linear-slider"
                  gutterBottom
                >
                  hue: {hue}
                </Typography>
                <Slider
                  track={false}
                  defaultValue={320}
                  valueLabelDisplay="auto"
                  min={0}
                  max={360}
                  onChange={handleHueChange}
                />
                <div className="mt-2">
                  <Divider>
                    <Chip label="Theme" />
                  </Divider>
                </div>

                <button
                  className="mt-4 mb-4 p-3 text-primary border-2 w-full rounded-md flex justify-evenly items-center border-primary"
                  onClick={handleThemeChange}
                >
                  {theme == "dark" ? "light" : "dark"} mode
                  {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
                </button>
              </div>
            </div>
          </div>
        </div>

        <footer className="bg-base-100">
          <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
            <div className="border-t  border-secondary pt-3 sm:mt-20 flex justify-between">
              <p className="text-xs leading-5 text-secondary">
                <a href="https://tamtaam.com/">Tamtaam</a>
              </p>
              <p className="text-xs leading-5 text-secondary">
                <a href="https://boroujerdian.com/">Boroujerdian</a>
              </p>
              <p className="text-xs leading-5 text-secondary">
                <a href="https://tamtaam.com/">Github</a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
