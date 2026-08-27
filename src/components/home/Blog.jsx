import { Link } from 'react-router'
import SectionTitle from '../ui/SectionTitle'

import BlogImg1 from '../../assets/blog-img-1.webp'
import BlogImg2 from '../../assets/blog-img-2.webp'
import BlogImg3 from '../../assets/blog-img-3.webp'
import BlogImg4 from '../../assets/blog-img-4.webp'

function Blog() {

    const blogPosts = [
        {
            link: 'journal-blog-is-here',
            image: BlogImg1,
            author: 'admin',
            comments: 3,
            views: 2806,
            title: 'Journal Blog is Here',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique obcaecati laboriosam placeat ullam non quibusdam cum explicabo ducimus molestiae vel a dignissimos illum dolorem alias cumque eius in, ipsam dolore.',
            day: '14',
            month: 'Dec'
        },
        {
            link: 'best-theme-options',
            image: BlogImg2,
            author: 'admin',
            comments: 8,
            views: 1080,
            title: 'Best theme options',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique obcaecati laboriosam placeat ullam non quibusdam cum explicabo ducimus molestiae vel a dignissimos illum dolorem alias cumque eius in, ipsam dolore.',
            day: '28',
            month: 'Jun'
        },
        {
            link: 'another-blog-post',
            image: BlogImg3,
            author: 'admin',
            comments: 1,
            views: 2563,
            title: 'Another blog post',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique obcaecati laboriosam placeat ullam non quibusdam cum explicabo ducimus molestiae vel a dignissimos illum dolorem alias cumque eius in, ipsam dolore.',
            day: '01',
            month: 'Sep'
        },
        {
            link: 'office-essentials',
            image: BlogImg4,
            author: 'admin',
            comments: 5,
            views: 2896,
            title: 'Office essentials',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique obcaecati laboriosam placeat ullam non quibusdam cum explicabo ducimus molestiae vel a dignissimos illum dolorem alias cumque eius in, ipsam dolore.',
            day: '20',
            month: 'May'
        },
    ]
    return (
        <section className="blog-main width-common h-auto flex justify-center relative z-2">
            <div className="content-main overflow-hidden py-10">

                {/* >----------------->Section-Heading<---------------< */}
                <div className="heading-main text-center py-10">
                    <SectionTitle
                        title="From the Blog"
                    />
                </div>


                <div className={`blog-cards-main grid grid-rows-1 grid-cols-1 lg:grid-cols-2 gap-6`}>
                    {blogPosts.map((post, i) => (
                        <div
                            key={i}
                            className="card bg-white flex flex-row items-stretch w-full rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* >----------------->Card-Img<---------------< */}
                            <div className="blog-img p-4 w-2/5 shrink-0 overflow-hidden">
                                <Link to={`/blog/${post.link}`} className="relative overflow-hidden rounded-md block h-full">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-0 left-0 bg-(--bg-secondary) text-white text-center px-3 py-2 leading-tight">
                                        <span className="block text-md font-semibold">{post.day}</span>
                                        <span className="block text-[10px] opacity-70 uppercase">{post.month}</span>
                                    </div>
                                </Link>
                            </div>

                            {/* >----------------->Card-Content<---------------< */}
                            <div className="card-content flex flex-col justify-center gap-3 py-6 px-2 md:p-4 w-3/5">
                                <div className="flex flex-wrap items-center gap-4 text-sm text-black/50">
                                    <span className="flex items-center gap-1.5">
                                        <i className="bi bi-person"></i> {post.author}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <i className="bi bi-chat"></i> {post.comments}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <i className="bi bi-eye"></i> {post.views}
                                    </span>
                                </div>

                                <h3 className="card-heading text-md md:text-xl font-semibold leading-snug text-black">
                                    <Link
                                        to={`/blog/${post.link}`}
                                        className="hover:text-(--text-secondary) transition-colors duration-200"
                                    >
                                        {post.title}
                                    </Link>
                                </h3>

                                <p className="card-description text-sm text-black/60 line-clamp-2">
                                    {post.description}
                                </p>

                                <Link
                                    to={`/blog/${post.link}`}
                                    className="card-btn text-sm font-medium underline underline-offset-4 w-fit flex items-center gap-1 hover:text-(--text-secondary) transition-colors duration-200"
                                >
                                    Continue reading <i className="bi bi-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    )
}

export default Blog