import React from 'react'
import Image from 'next/image'

const exampleProjects = [
    {
        id: 1,
        title: "Project One",
        description: "This is a description for Project One. It showcases the alternating layout with image on the left.",
        imageUrl: "/Images/Bedroom.jpg"
    },
    {
        id: 2,
        title: "Project Two",
        description: "This is a description for Project Two. It demonstrates the alternating layout with image on the right.",
        imageUrl: "/Images/Bedroom.jpg"
    },
    {
        id: 3,
        title: "Project Three",
        description: "This is a description for Project Three. It goes back to having the image on the left.",
        imageUrl: "/Images/Bedroom.jpg"
    }
]

export default function AlternatingProjects({ projects = exampleProjects }) {
    return (
        <div className="container mx-auto px-4 py-8">
            {projects.map((project, index) => (
                <div
                    key={project.id}
                    className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                        } items-center mb-16 gap-8`}
                >
                    <div className="w-full md:w-1/2">
                        <Image
                            src={project.imageUrl}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                        <p className="text-gray-400">{project.description}</p>
                        <button className="bg-transparent text-white px-6 py-2 mt-4 -ml-2 rounded-full border-teal-400 border-[1.5px] hover:bg-teal-600  transition-colors">
                            Read More
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}