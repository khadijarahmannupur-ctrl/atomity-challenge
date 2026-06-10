"use client";

import { motion } from "framer-motion";

export default function ProviderNode({
    name,
}) {
    return (
        <motion.div
            whileHover={{
                scale: 1.05,
            }}
            initial={{
                opacity: 0,
                scale: 0.8,
            }}
            whileInView={{
                opacity: 1,
                scale: 1,
            }}
            className="
        p-5
        bg-white
        rounded-2xl
        border
        text-center
      "
        >
            <h3 className="font-semibold">
                {name}
            </h3>
        </motion.div>
    );
}