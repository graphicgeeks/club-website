import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
<<<<<<< HEAD
};
=======
};
>>>>>>> parent of 5dae76b (Merge remote-tracking branch 'origin/v1.0' into refactor/toast)
