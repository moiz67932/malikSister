import React from 'react'
import Image from 'next/image'

export default function CraftingSpaces() {
    return (
        <section className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-5/8 mb-8 md:mb-0 pr-10">
                    <h2 className="text-3xl font-bold mb-4">Crafting spaces</h2>
                    <p className="mb-4">
                        We create innovative design solutions that transform spaces into extraordinary experiences. Our team of experts combines creativity with functionality to deliver unique and inspiring environments.
                    </p>
                    <button className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition-colors">
                        Read More
                    </button>
                </div>
                <div className="md:w-3/8">
                    <Image
                        src="/Images/Project2.jpg"
                        alt="Modern interior design"
                        width={600}
                        height={400}
                        className="rounded-lg"
                    />
                </div>
            </div>
        </section>
    )
}