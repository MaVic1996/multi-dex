import { useState } from "react";

export const useOpenClosePokedex = () => {
  const [active, setActive] = useState(false);
  const [showOpenButton, setShowButton] = useState(true);

  const handleOpen = () => {
    setActive(true);
    setTimeout(() => setShowButton(false), 1300);
  };

  const handleClose = () => {
    setShowButton(true);
    setTimeout(() => setActive(false), 100);
  };

  const togglePokedex = () => (active ? handleClose() : handleOpen());

  return { active, showOpenButton, togglePokedex };
};
