export const getInitialTheme = () => {
  const saved = localStorage.getItem("geek-theme");
  if (saved === "dark" || saved === "light") return saved;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};
