import React from 'react'
import Image from 'next/image'

export default function ConsultUs() {
    return (
        <section className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                <div className="md:w-5/8 mb-8 md:mb-0 pr-10">
                    <h2 className="text-3xl font-bold mb-4">Consult us</h2>
                    <p className="mb-4">
                        Our team of experts is ready to help you with your next project. Get in touch with us for a consultation and let's create something amazing together.
                    </p>
                    <button className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition-colors">
                        Contact Us
                    </button>
                </div>
                <div className="md:w-3/8">
                    <Image
                        src="/Images/Project3.jpg"
                        alt="Consultation"
                        width={600}
                        height={400}
                        className="rounded-lg"
                    />
                </div>
            </div>
        </section>
    )
}