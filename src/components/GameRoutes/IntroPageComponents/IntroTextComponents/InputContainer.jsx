import { motion } from "framer-motion";
import { useContext } from "react";
import { IntroPageContext } from "../../../../contexts/IntroPageContext";
import framerMotionVariants from "../../../../functions/containerVariants";

function InputContainer() {
  const containerVariants = framerMotionVariants(0.6, 0.7, 0);

  const { playerName, setPlayerName, handleClick, handleKeyPress } =
    useContext(IntroPageContext);

  return (
    <motion.div
      className="input-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <input
        type="text"
        spellcheck="false"
        onChange={(e) => {
          setPlayerName(e.target.value);
          console.log(playerName);
        }}
        onKeyDown={handleKeyPress}
        value={playerName}
        placeholder="Enter your name"
      />
      <button onClick={handleClick}>Start!</button>
      {/* <button onClick={() => {setPlayerName("Donna"); console.log(playerName)}}>Start!</button> */}
    </motion.div>
  );
}

export default InputContainer;
