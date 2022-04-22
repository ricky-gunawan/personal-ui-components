import { themes } from "./index";

export const mapTheme = (theme) => {
  return {
    "--color-primary": theme.primary || "",
    "--color-secondary": theme.secondary || "",
    "--color-textPrimary": theme.textPrimary || "",
    "--color-textSecondary": theme.textSecondary || "",
    "--color-bgPrimary": theme.bgPrimary || "",
    "--color-bgSecondary": theme.bgSecondary || "",
  };
};

export const applyTheme = (theme) => {
  const themeObject = mapTheme(themes[theme]);
  if (!themeObject) return;

  const root = document.documentElement;

  Object.keys(themeObject).forEach((property) => {
    root.style.setProperty(property, themeObject[property]);
  });
};

export const extend = (theme, newTheme) => {
  return {
    ...theme,
    newTheme,
  };
};
