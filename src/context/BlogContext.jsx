import { useContext, createContext } from 'react'

import BlogImg1 from '../assets/blog-img-1.webp'
import BlogImg2 from '../assets/blog-img-2.webp'
import BlogImg3 from '../assets/blog-img-3.webp'
import BlogImg4 from '../assets/blog-img-4.webp'

const BlogContext = createContext()

export function BlogProvider({ children }) {

    const blogs = [
        {
            link: 'journal-blog-is-here',
            image: BlogImg1,
            author: 'admin',
            comments: [
                { name: 'Demo', day: '14', month: 'Dec', time: '06:49:52 PM', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique obcaecati laboriosam placeat ullam non quibusdam cum explicabo ducimus molestiae vel a dignissimos illum dolorem alias cumque eius in, ipsam dolore' },
                { name: 'Demo', day: '14', month: 'Dec', time: '06:49:52 PM', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique obcaecati laboriosam placeat ullam non quibusdam cum explicabo ducimus molestiae vel a dignissimos illum dolorem alias cumque eius in, ipsam dolore' },
                { name: 'Demo', day: '14', month: 'Dec', time: '06:49:52 PM', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique obcaecati laboriosam placeat ullam non quibusdam cum explicabo ducimus molestiae vel a dignissimos illum dolorem alias cumque eius in, ipsam dolore' },
            ],
            views: 2806,
            title: 'Journal Blog is Here',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique obcaecati laboriosam placeat ullam non quibusdam cum explicabo ducimus molestiae vel a dignissimos illum dolorem alias cumque eius in, ipsam dolore.',
            day: '14',
            month: 'Dec',
            tags: ["cool", "modern", "smart", "travel", "shop"]
        },
        {
            link: 'best-theme-options',
            image: BlogImg2,
            author: 'admin',
            comments: [
                { name: 'Demo', day: '14', month: 'Dec', time: '06:49:52 PM', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique obcaecati laboriosam placeat ullam non quibusdam cum explicabo ducimus molestiae vel a dignissimos illum dolorem alias cumque eius in, ipsam dolore' },
                { name: 'Demo', day: '14', month: 'Dec', time: '06:49:52 PM', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique obcaecati laboriosam placeat ullam non quibusdam cum explicabo ducimus molestiae vel a dignissimos illum dolorem alias cumque eius in, ipsam dolore' },
                { name: 'Demo', day: '14', month: 'Dec', time: '06:49:52 PM', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique obcaecati laboriosam placeat ullam non quibusdam cum explicabo ducimus molestiae vel a dignissimos illum dolorem alias cumque eius in, ipsam dolore' },
                { name: 'Demo', day: '14', month: 'Dec', time: '06:49:52 PM', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique obcaecati laboriosam placeat ullam non quibusdam cum explicabo ducimus molestiae vel a dignissimos illum dolorem alias cumque eius in, ipsam dolore' },
                { name: 'Demo', day: '14', month: 'Dec', time: '06:49:52 PM', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique obcaecati laboriosam placeat ullam non quibusdam cum explicabo ducimus molestiae vel a dignissimos illum dolorem alias cumque eius in, ipsam dolore' },
                { name: 'Demo', day: '14', month: 'Dec', time: '06:49:52 PM', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique obcaecati laboriosam placeat ullam non quibusdam cum explicabo ducimus molestiae vel a dignissimos illum dolorem alias cumque eius in, ipsam dolore' },
                { name: 'Demo', day: '14', month: 'Dec', time: '06:49:52 PM', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique obcaecati laboriosam placeat ullam non quibusdam cum explicabo ducimus molestiae vel a dignissimos illum dolorem alias cumque eius in, ipsam dolore' },
                { name: 'Demo', day: '14', month: 'Dec', time: '06:49:52 PM', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique obcaecati laboriosam placeat ullam non quibusdam cum explicabo ducimus molestiae vel a dignissimos illum dolorem alias cumque eius in, ipsam dolore' },
                { name: 'Demo', day: '14', month: 'Dec', time: '06:49:52 PM', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique obcaecati laboriosam placeat ullam non quibusdam cum explicabo ducimus molestiae vel a dignissimos illum dolorem alias cumque eius in, ipsam dolore' },
            ],
            views: 1080,
            title: 'Best theme options',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique obcaecati laboriosam placeat ullam non quibusdam cum explicabo ducimus molestiae vel a dignissimos illum dolorem alias cumque eius in, ipsam dolore.',
            day: '28',
            month: 'Jun',
            tags: ["cool", "modern", "smart", "travel", "shop"]
        },
        {
            link: 'another-blog-post',
            image: BlogImg3,
            author: 'admin',
            comments: [
                { name: 'Demo', day: '14', month: 'Dec', time: '06:49:52 PM', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique obcaecati laboriosam placeat ullam non quibusdam cum explicabo ducimus molestiae vel a dignissimos illum dolorem alias cumque eius in, ipsam dolore' },
            ],
            views: 2563,
            title: 'Another blog post',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique obcaecati laboriosam placeat ullam non quibusdam cum explicabo ducimus molestiae vel a dignissimos illum dolorem alias cumque eius in, ipsam dolore.',
            day: '01',
            month: 'Sep',
            tags: ["cool", "modern", "smart", "travel", "shop"]
        },
        {
            link: 'office-essentials',
            image: BlogImg4,
            author: 'admin',
            comments: [
                { name: 'Demo', day: '14', month: 'Dec', time: '06:49:52 PM', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique obcaecati laboriosam placeat ullam non quibusdam cum explicabo ducimus molestiae vel a dignissimos illum dolorem alias cumque eius in, ipsam dolore' },
                { name: 'Demo', day: '14', month: 'Dec', time: '06:49:52 PM', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique obcaecati laboriosam placeat ullam non quibusdam cum explicabo ducimus molestiae vel a dignissimos illum dolorem alias cumque eius in, ipsam dolore' },
                { name: 'Demo', day: '14', month: 'Dec', time: '06:49:52 PM', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique obcaecati laboriosam placeat ullam non quibusdam cum explicabo ducimus molestiae vel a dignissimos illum dolorem alias cumque eius in, ipsam dolore' },
                { name: 'Demo', day: '14', month: 'Dec', time: '06:49:52 PM', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique obcaecati laboriosam placeat ullam non quibusdam cum explicabo ducimus molestiae vel a dignissimos illum dolorem alias cumque eius in, ipsam dolore' },
                { name: 'Demo', day: '14', month: 'Dec', time: '06:49:52 PM', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique obcaecati laboriosam placeat ullam non quibusdam cum explicabo ducimus molestiae vel a dignissimos illum dolorem alias cumque eius in, ipsam dolore' },
            ],
            views: 2896,
            title: 'Office essentials',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique obcaecati laboriosam placeat ullam non quibusdam cum explicabo ducimus molestiae vel a dignissimos illum dolorem alias cumque eius in, ipsam dolore.',
            day: '20',
            month: 'May',
            tags: ["cool", "modern", "smart", "travel", "shop"]
        },
    ]

    return (
        <BlogContext.Provider value={{ blogs }}>
            {children}
        </BlogContext.Provider>
    )
}

export function useBlog() {
    const context = useContext(BlogContext)
    if (!context) {
        throw new Error('useBlog must be used within a BlogProvider')
    }
    return context
}