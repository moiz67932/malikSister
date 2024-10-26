import React from 'react'

export default function ContactForm() {
    return (
        <section className="bg-gray-800 text-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Get in touch</h2>
                <form className="max-w-lg mx-auto">
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2">Name</label>
                        <input type="text" id="name" className="w-full px-3 py-2 bg-gray-700 rounded-md" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2">Email address</label>
                        <input type="email" id="email" className="w-full px-3 py-2 bg-gray-700 rounded-md" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block mb-2">Message</label>
                        <textarea id="message" rows="4" className="w-full px-3 py-2 bg-gray-700 rounded-md" required></textarea>
                    </div>
                    <button type="submit" className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition-colors">
                        Send
                    </button>
                </form>
            </div>
        </section>
    )
}