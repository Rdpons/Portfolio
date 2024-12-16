import reactLogo from '../assets/logo/react.png';
import htmlLogo from '../assets/logo/html.png';
import cssLogo from '../assets/logo/css.png';
import jsLogo from '../assets/logo/javascript.png';
import phpLogo from '../assets/logo/php.png';
import nodejsLogo from '../assets/logo/node.png';
import firebaseLogo from '../assets/logo/firebase.png';
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  },
});
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl">Technologies
      </motion.h1>
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center"
        >
          <img src={htmlLogo} alt="HTML" className="w-20 h-20" />
        </motion.div>
        <motion.div 
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center"
        >
          <img src={cssLogo} alt="CSS" className="w-20 h-20" />
        </motion.div>
        <motion.div 
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center"
        >
          <img src={jsLogo} alt="JavaScript" className="w-20 h-20" />
        </motion.div>
        <motion.div 
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center"
        >
          <img src={phpLogo} alt="JavaScript" className="w-20 h-20" />
        </motion.div>
        <motion.div 
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center"
        >
          <img src={reactLogo} alt="React" className="w-20 h-20" />
        </motion.div>
        <motion.div 
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center"
        >
          <img src={nodejsLogo} alt="Node.js" className="w-20 h-20" />
        </motion.div>
        <motion.div 
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center"
        >
          <img src={firebaseLogo} alt="Node.js" className="w-20 h-20" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
