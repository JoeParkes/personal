import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Jobs from "./components/jobs";
import Skills from "./components/skills";
import Video from "./components/video";
import ComingSoon from "./components/coming-soon";
import Title from "./components/title";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isAnimating, setIsAnimating] = useState(true);
  const [secondAnimation, setSecondAnimation] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <div className="App mx-auto">
        <Routes>
          <Route
            index
            element={
              <>
                <div className="flex flex-col md:flex-row gap-4 h-screen justify-between">
                  <div className="p-6 md:p-12 order-2 md:order-1">
                    <Header />
                    <Jobs />
                    <Skills />
                  </div>
                  <AnimatePresence>
                    <motion.div
                      className="order-1 md:order-2 relative"
                      animate={{
                        height: isMobile ? "430px" : "100%",
                        position:
                          isMobile && isAnimating ? "fixed" : "relative",
                        top: isMobile ? "0" : "auto",
                        left: isMobile ? "0" : "auto",
                        opacity: 1,
                        width: isMobile ? "100%" : "100%",
                        paddingLeft: isMobile && secondAnimation ? "12px" : "0",
                        paddingRight:
                          isMobile && secondAnimation ? "12px" : "0",
                      }}
                      initial={{
                        height: isMobile ? "0px" : "100%",
                        position: isMobile ? "fixed" : "relative",
                        top: isMobile ? "0" : "auto",
                        left: isMobile ? "0" : "auto",
                        opacity: 0,
                        width: isMobile ? "100%" : "100%",
                        paddingLeft: isMobile && secondAnimation ? "0" : "0",
                        paddingRight: isMobile && secondAnimation ? "0" : "0",
                      }}
                      transition={{
                        duration: isMobile ? 1.5 : 3,
                        delay: 0,
                      }}
                      onAnimationComplete={() => {
                        setIsAnimating(false);
                        setSecondAnimation(true);
                      }}
                    >
                      <Video />
                      <Title />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </>
            }
          />
          <Route element={<ComingSoon />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
