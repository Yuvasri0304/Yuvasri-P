// "use client";

// import { AnimatePresence, motion, useInView, Variants } from "framer-motion";
// import { useRef } from "react";

// interface BlurFadeProps {
//   children: React.ReactNode;
//   className?: string;
//   variant?: {
//     hidden: { y: number };
//     visible: { y: number };
//   };
//   duration?: number;
//   delay?: number;
//   yOffset?: number;
//   inView?: boolean;
//   inViewMargin?: string;
//   blur?: string;
// }
// const BlurFade = ({
//   children,
//   className,
//   variant,
//   duration = 0.4,
//   delay = 0,
//   yOffset = 6,
//   inView = false,
//   inViewMargin = "-50px",
//   blur = "6px",
// }: BlurFadeProps) => {
//   const ref = useRef(null);
//   const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
//   const isInView = !inView || inViewResult;
//   const defaultVariants: Variants = {
//     hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
//     visible: { y: -yOffset, opacity: 1, filter: `blur(0px)` },
//   };
//   const combinedVariants = variant || defaultVariants;
//   return (
//     <AnimatePresence>
//       <motion.div
//         ref={ref}
//         initial="hidden"
//         animate={isInView ? "visible" : "hidden"}
//         exit="hidden"
//         variants={combinedVariants}
//         transition={{
//           delay: 0.04 + delay,
//           duration,
//           ease: "easeOut",
//         }}
//         className={className}
//       >
//         {children}
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// export default BlurFade;

// "use client";

// import { motion, useInView, Variants } from "framer-motion";
// import { useRef } from "react";

// interface BlurFadeProps {
//   children: React.ReactNode;
//   className?: string;
//   variant?: Variants;
//   duration?: number;
//   delay?: number;
//   yOffset?: number;
//   inViewMargin?: string;
//   blur?: string;
//   disableFirst?: boolean; // New prop to disable animation for the first section
// }

// const BlurFade = ({
//   children,
//   className,
//   variant,
//   duration = 0.4,
//   delay = 0,
//   yOffset = 6,
//   inViewMargin = "-50px",
//   blur = "6px",
//   disableFirst = false, // Default: false (only hero section will set it to true)
// }: BlurFadeProps) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { margin: inViewMargin, once: true });

//   // If it's the first section (disableFirst), no animation
//   if (disableFirst) {
//     return <div className={className}>{children}</div>;
//   }

//   const defaultVariants: Variants = {
//     hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
//     visible: { y: 0, opacity: 1, filter: "blur(0px)" },
//   };

//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       animate={isInView ? "visible" : "hidden"}
//       variants={variant || defaultVariants}
//       transition={{ delay, duration, ease: "easeOut" }}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default BlurFade;
"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: Variants;
  duration?: number;
  delay?: number;
  yOffset?: number;
  inViewMargin?: string;
  blur?: string;
  disableFirst?: boolean; // New prop to disable animation for the first section
}

const BlurFade = ({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inViewMargin = "-50px",
  blur = "6px",
  disableFirst = false, // Default: false (only hero section will set it to true)
}: BlurFadeProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    margin: inViewMargin as any, // Type assertion to fix the error
    once: true 
  });

  // If it's the first section (disableFirst), no animation
  if (disableFirst) {
    return <div className={className}>{children}</div>;
  }

  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variant || defaultVariants}
      transition={{ delay, duration, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default BlurFade;