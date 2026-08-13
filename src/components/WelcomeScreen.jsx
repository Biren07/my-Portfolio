import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Terminal, Code2, Cpu, ArrowRight, Zap } from "lucide-react";

export const WelcomeScreen = ({ onWelcomeComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const steps = [
    { text: "Initializing Core Systems...", icon: Cpu },
    { text: "Compiling Full-Stack Modules...", icon: Code2 },
    { text: "Connecting APIs & Database...", icon: Terminal },
    { text: "Welcome to Birendra's Portfolio", icon: Sparkles },
  ];

  useEffect(() => {
    // Progress counter animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.floor(Math.random() * 9) + 5;
        return Math.min(prev + increment, 100);
      });
    }, 85);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress < 25) setCurrentStep(0);
    else if (progress < 60) setCurrentStep(1);
    else if (progress < 90) setCurrentStep(2);
    else setCurrentStep(3);

    if (progress >= 100) {
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
          if (onWelcomeComplete) onWelcomeComplete();
        }, 800);
      }, 500);

      return () => clearTimeout(exitTimer);
    }
  }, [progress, onWelcomeComplete]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => {
      if (onWelcomeComplete) onWelcomeComplete();
    }, 450);
  };

  const StepIcon = steps[currentStep]?.icon || Sparkles;

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070913] text-foreground overflow-hidden select-none px-4 sm:px-6 h-[100dvh]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: "blur(12px)",
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
          }}
        >
          {/* Ambient Multi-color Glowing Orbs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] rounded-full bg-gradient-to-tr from-primary/35 via-purple-600/25 to-pink-500/15 blur-[100px] sm:blur-[140px]"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Background Tech Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293718_1px,transparent_1px),linear-gradient(to_bottom,#1f293718_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

          {/* Main Card / Container */}
          <div className="relative w-full max-w-md mx-auto flex flex-col items-center text-center z-10 py-4">
            {/* Glowing Logo Monogram */}
            <motion.div
              className="relative mb-5 sm:mb-7"
              initial={{ scale: 0.75, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative p-[2.5px] rounded-3xl bg-gradient-to-tr from-primary via-purple-500 to-pink-500 shadow-[0_0_50px_-10px_rgba(168,85,247,0.65)]">
                <div className="w-18 h-18 sm:w-24 sm:h-24 rounded-[1.35rem] bg-[#0B0F19] flex items-center justify-center border border-white/10 backdrop-blur-xl">
                  <span className="font-mono text-2xl sm:text-3xl font-black bg-gradient-to-br from-white via-primary to-purple-400 bg-clip-text text-transparent tracking-tighter">
                    &lt;BD/&gt;
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Name and Role */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mb-5 sm:mb-7"
            >
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-1.5">
                BIRENDRA SINGH DHAMI
              </h2>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[11px] sm:text-xs font-semibold text-primary">
                <Zap className="h-3 w-3 text-primary animate-pulse" />
                <span>Full Stack Developer || MERN Stack</span>
              </div>
            </motion.div>

            {/* Terminal Boot Sequence Card */}
            <motion.div
              className="w-full bg-[#0D121F]/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 sm:p-5 shadow-2xl text-left relative mb-5 sm:mb-6 overflow-hidden"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-white/10 text-xs text-muted-foreground font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-[10px] sm:text-[11px] text-gray-400">
                    birendra@portfolio:~
                  </span>
                </div>
                <div className="text-[9px] sm:text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  SYSTEM READY
                </div>
              </div>

              {/* Step indicator */}
              <div className="flex items-center gap-2.5 mb-3.5 min-h-[30px]">
                <div className="p-1.5 rounded-lg bg-primary/15 text-primary shrink-0">
                  <StepIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="text-xs sm:text-sm font-mono text-gray-200 truncate">
                  <span className="text-primary mr-1">&gt;</span>
                  {steps[currentStep]?.text}
                </div>
              </div>

              {/* Progress Bar & Percentage */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-muted-foreground text-[10px] sm:text-[11px]">
                    Boot Sequence
                  </span>
                  <span className="text-primary font-bold text-[11px] sm:text-xs">
                    {progress}%
                  </span>
                </div>
                <div className="relative h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/10">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-full"
                    style={{ width: `${progress}%` }}
                    transition={{ ease: "easeOut" }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Skip Intro Button */}
            <motion.button
              onClick={handleSkip}
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs font-medium text-muted-foreground hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 active:scale-95 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Enter Portfolio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
