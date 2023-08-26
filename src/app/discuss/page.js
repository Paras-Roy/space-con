"use client"
import { useState } from "react"
import Link from "next/link"
export default function Discuss() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            author: "Sarah Williams",
            category: "general",
            date: "2023-09-10",
            title: "Black Holes and Their Mysteries",
            place: "Cosmology Seminar",
            desc: "Dive into the enigmatic world of black holes and their intriguing properties...",
            paragraphs: [
                "Black holes are one of the most mysterious and captivating phenomena...",
                "Event horizon, a point of no return, surrounds the singularity...",
                "Hawking radiation, a theoretical process, suggests black holes can emit energy...",
            ],
            images: [
                "https://example.com/black-hole-image1.jpg",
                "https://example.com/black-hole-image2.jpg"
            ],
            votes: 14,
            comments: [
                {
                    author: "Alex Johnson",
                    content: "I find it incredible how something can have such strong gravitational pull.",
                    date: "2023-09-10",
                    votes: 2
                },
                {
                    author: "Sophia Smith",
                    content: "I've always wondered about the possibility of wormholes near black holes.",
                    date: "2023-09-11",
                    votes: 3
                }
            ]
        },
        {
            id: 2,
            author: "Daniel Brown",
            category: "general",
            date: "2023-09-15",
            title: "Colonizing Other Planets",
            place: "Future Space Symposium",
            desc: "Join us for a discussion on the challenges and potential of colonizing other planets...",
            paragraphs: [
                "The concept of colonizing other planets has been a staple of science fiction...",
                "Mars is often considered the most viable candidate for human settlement...",
                "Challenges such as harsh environments, radiation, and sustainability must be addressed...",
            ],
            images: [
                "https://example.com/planet-colonization-image1.jpg",
                "https://example.com/planet-colonization-image2.jpg"
            ],
            votes: 19,
            comments: [
                {
                    author: "Emma Taylor",
                    content: "I wonder how self-sufficient a colony on Mars could really be.",
                    date: "2023-09-15",
                    votes: 4
                },
                {
                    author: "Liam Miller",
                    content: "What lessons can we learn from space station projects like the ISS?",
                    date: "2023-09-16",
                    votes: 2
                }
            ]
        },
        {
            id: 3,
            author: "Olivia Davis",
            category: "issue",
            date: "2023-09-20",
            title: "The Ethics of Genetic Engineering",
            place: "Genetics Conference",
            desc: "Join us for a discussion on the ethics of genetic engineering...",
            'paragraphs': [
                "Genetic engineering has the potential to cure diseases and improve lives...",
                "However, it also raises concerns about the ethics of altering human DNA...",
                "Genetic engineering could lead to a new era of eugenics...",
            ],
            images: [
                "https://example.com/genetic-engineering-image1.jpg",
                "https://example.com/genetic-engineering-image2.jpg"
            ],
            votes: 12,
            comments: [
                {
                    author: "Noah Wilson",
                    content: "I think genetic engineering could be a huge benefit to humanity.",
                    date: "2023-09-20",
                    votes: 3
                },
                {
                    author: "Ava Anderson",
                    content: "I worry that genetic engineering could lead to discrimination.",
                    date: "2023-09-21",
                    votes: 1
                }
            ]
        },

    ])

    const upvote = (id) => {
        setPosts(posts.map(post => {
            if (post.id === id) {
                post.votes += 1
            }
            return post
        }))
    }
    const downvote = (id) => {
        setPosts(posts.map(post => {
            if (post.id === id) {
                post.votes -= 1
            }
            return post
        }))
    }
    return (
        <div className="flex flex-col w-3/4 min-h-screen mt-24">
            <h1 className="text-2xl font-semibold mb-6">Discussion Page</h1>
            <button className="bg-blue-500 text-white self-center px-4 py-2 w-48 rounded-lg mb-4">Create Post</button>
            <div className="w-full space-y-6">
                {posts.map((post, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg p-4 flex w-full items-start space-x-4">
                        <div className="flex flex-col items-center justify-center">
                            <button onClick={()=>upvote(post.id)} className="text-gray-300 hover:text-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                                </svg>
                            </button>
                            <span className="text-gray-400">{post.votes}</span>
                            <button onClick={()=>downvote(post.id)} className="text-gray-300 hover:text-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="flex-grow">
                            <div className="flex items-center space-x-2 mb-1">
                                <Link href={`/discussion/${post.id}`} className={`text-xl font-semibold`}>{post.title}</Link>
                                <span className="text-gray-400 text-sm">by {post.author} | {post.date}</span>
                            </div>
                            <p className="text-gray-500 mt-2">{post.desc}</p>
                            <div className="flex items-center mt-2">
                                <span className={`text-gray-400 text-sm ${post.category === 'issue' ? 'text-red-500' : 'text-gray-400'}`}>{post.category}</span>
                                <span className="ml-auto text-gray-400 text-sm">{post.comments.length} Comments</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}