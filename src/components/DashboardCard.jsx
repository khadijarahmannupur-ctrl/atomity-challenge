"use client";

import { motion } from "framer-motion";

export default function DashboardCard({ data }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
        bg-white
        rounded-3xl
        border
        p-8
        shadow-sm
      "
        >
            {data.map((item) => (
                <div
                    key={item.id}
                    className="mb-5"
                >
                    <div className="flex justify-between mb-2">
                        <span>{item.title}</span>

                        <span>{item.stock}</span>
                    </div>

                    <div className="h-3 bg-gray-200 rounded">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{
                                width: `${item.stock}%`,
                            }}
                            transition={{ duration: 1 }}
                            className="
                h-full
                rounded
                bg-green-400
              "
                        />
                    </div>
                </div>
            ))}
        </motion.div>
    );
}