// import React from "react";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import "./HomepageCard.css";

// const HomepageCard = ({ header, innerInfo, innerInfoSmall }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <motion.div
//       transition={{ layout: { duration: 1, type: "spring" } }}
//       Layout
//       className="cardHov"
//       onClick={() => setIsOpen(!isOpen)}
//       //   onHoverEnd={() => setIsOpen(!isOpen)}
//     >
//       <motion.h2 Layout="position">{header}</motion.h2>
//       {isOpen && (
//         <motion.div className="expand">
//           <p>{innerInfo}</p>
//           <p>{innerInfoSmall}</p>
//         </motion.div>
//       )}
//     </motion.div>
//   );
// };

// export default HomepageCard;
