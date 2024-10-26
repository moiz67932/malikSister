import React from 'react'
import Image from 'next/image'

export default function Hero() {
    return (
        <div className="relative h-screen">
            <Image
                src="/Images/HeroBg.jpeg"
                alt="Modern interior design"
                layout="fill"
                objectFit="cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white">
                    <h1 className="text-5xl font-bold mb-4">CurveAngle</h1>
                    <p className="text-xl mb-8">Crafting the future of design</p>
                    <button className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition-colors">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    )
}