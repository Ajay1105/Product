import React from "react";
import "./ProductCard.css";

import { easeInOut, motion } from "framer-motion";

const ProductCard = (props) => {
  return (
    <>
      <motion.div
      drag
      dragConstraints={{
        top: -300,
        left: -300,
        right: 300,
        bottom: 300,
      }}

        className="box"
        initial={{ x: 0, y: 100, scale: 0.5, rotate: 18,opacity: 0 }}
        whileInView={{ opacity: 1, x: 0, y: 1, scale: 1, rotate: 0  }}
        transition={{ duration: 1, ease:easeInOut }}
        viewport={{ once: true }}
              >
        <div className="flex flex-col ml-8 px-2 py-3 w-60 h-96 rounded-2xl outline-1 mb-8 outline">
          <motion.div whileTap={{ scale: 2 }}>
            <img src={props.img} alt="img" className="my-2 rounded-xl p-img" />
            </motion.div>
          <div className="mt-3">
            <h4 className="mb-3 flex justify-center bold-text">
              {" "}
              {props.name}{" "}
            </h4>
            <p className="p-text">{props.desc}</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProductCard;
