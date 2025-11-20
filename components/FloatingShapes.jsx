"use client";

import React from "react";
import { UseParallax } from "@/hooks/UseParallax";

// Predefined options for randomness
const sizes = ["w-64 h-64", "w-72 h-72", "w-80 h-80", "w-96 h-64", "w-96 h-80"];
const positions = [
    "top-10 left-1/4",
    "top-1/3 right-1/5",
    "bottom-1/4 right-1/3",
    "bottom-1/2 left-1/6",
    "top-2/3 left-1/3",
    "bottom-1/5 right-1/6",
];
const gradients = [
    "from-purple-400 to-pink-500",
    "from-green-400 to-blue-500",
    "from-yellow-300 to-orange-400",
    "from-indigo-400 to-purple-500",
    "from-cyan-300 to-blue-400",
    "from-pink-300 to-red-400",
];

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

const FloatingShapes = () => {
    const scrollY = UseParallax();

    const [shapes] = React.useState(() =>
        Array.from({ length: 6 }).map((_, i) => ({
            id: i + 1,
            size: getRandom(sizes),
            position: getRandom(positions),
            gradient: getRandom(gradients),
        })),
    );

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {shapes.map((shape) => (
                <div
                    key={shape.id}
                    className={`absolute ${shape.size} ${shape.position} bg-gradient-to-r ${shape.gradient} rounded-xl blur-3xl opacity-40 animate-pulse transition-transform duration-700 delay-100 ease-in-out`}
                    style={{
                        transform: `translateY(${scrollY * 0.5}px) rotate(${scrollY * 0.1 }deg)`,
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingShapes;
