"use client"

// https://examples.motion.dev/react/loading-jumping-dots

import { motion, Variants } from "framer-motion"
import { div } from "framer-motion/client"

function LoadingThreeDotsJumping() {
    const dotVariants: Variants = {
        jump: {
            y: -30,
            transition: {
                duration: 0.8,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
            },
        },
    }

    return (
        <div className="flex items-center justify-center h-[50vh]">
            <motion.div
                animate="jump"
                transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
                className="container"
            >
                <motion.div className="dot" variants={dotVariants} />
                <motion.div className="dot" variants={dotVariants} />
                <motion.div className="dot" variants={dotVariants} />
                <StyleSheet />
            </motion.div>
        </div>
    )
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
    return (
        <style>
            {`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 15px;
            }

            .dot {
                width: 18px;
                height: 18px;
                border-radius: 50%;
                background-color: #4F46E5;
                will-change: transform;
            }
            `}
        </style>
    )
}

export default LoadingThreeDotsJumping