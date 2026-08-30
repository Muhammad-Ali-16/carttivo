import { Link } from 'react-router'
import PagesSectionLayout from '../components/layout/PagesSectionLayout'
import { useBlog } from '../context/BlogContext'

function BlogPage() {

  const { blogs } = useBlog()

  return (
    <div className='blog-main bg-(--bg-primary)'>

      <PagesSectionLayout width="full">

        <div className={`blog-cards-main flex flex-col gap-6`}>
          {blogs.map((post, i) => (
            <div
              key={i}
              className="card flex flex-col sm:flex-row w-full rounded-lg overflow-hidden"
            >
              {/* >----------------->Card-Img<---------------< */}
              <div className="blog-img p-4 sm:w-2/5 shrink-0 overflow-hidden">
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
              <div className="card-content flex flex-col justify-center gap-3 py-6 px-2 md:p-4 sm:w-3/5">
                <div className="flex flex-wrap items-center gap-4 text-sm text-black/50">
                  <span className="flex items-center gap-1.5">
                    <i className="bi bi-person"></i> {post.author}
                  </span>
                    <span className="flex items-center gap-1.5">
                      <i className="bi bi-chat"></i> {post.comments.length}
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

      </PagesSectionLayout>

    </div>
  )
}

export default BlogPage