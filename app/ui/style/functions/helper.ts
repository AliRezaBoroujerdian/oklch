export const ChangeTheme = (theme: string) => {
    document.querySelector("html")?.setAttribute("data-theme-palette", theme);
};

  export const ChangeHue = (hue: any) => {
    document.documentElement.style.setProperty(
      "--hue",
      hue,
  )
};

