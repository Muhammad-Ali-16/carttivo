import { useParams, Link } from 'react-router'
import { useBlog } from '../context/BlogContext'
import commentImg from '../assets/blog-comment.png'
import { useState } from 'react'

function BlogDetails() {
  const { link } = useParams()
  const { blogs } = useBlog()
  const [visibleComments, setVisibleComments] = useState(3)

  const socialLinks = [
    { link: '/', icon: 'bi-facebook' },
    { link: '/', icon: 'bi-instagram' },
    { link: '/', icon: 'bi-twitter-x' },
    { link: '/', icon: 'bi-youtube' },
    { link: '/', icon: 'bi-tiktok' },
  ]

  const blog = blogs.find((b) => b.link === link)

  if (!blog) return <div className='bg-(--bg-primary) h-[40vh] flex justify-center items-center flex-col gap-6'>
    <h6 className='bg-[#ffebeb] text-[#d17175] w-fit px-6 py-2 rounded-full'>Error</h6>
    <h1 className='text-xl md:text-3xl font-semibold'>Blog Not Found!</h1>
  </div>

  return (
    <section className="blog-details-main px-4 py-12 bg-(--bg-primary)">
      <div className=" max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-10">

        <div className="blog flex flex-col w-full rounded-lg overflow-hidden">

          {/* >----------------->Blog-Img<---------------< */}
          <div className="blog-img w-full overflow-hidden">
            <div className="relative overflow-hidden rounded-sm block ">
              <img
                src={blog.image}
                alt={blog.title}
                className="object-cover hover:scale-105 transition-transform duration-500 w-fit max-h-1/2"
              />
              <div className="absolute rounded-xs top-4 left-4 bg-(--bg-secondary) text-white text-center px-3 py-2 leading-tight">
                <span className="block text-md font-semibold">{blog.day}</span>
                <span className="block text-[10px] opacity-70 uppercase">{blog.month}</span>
              </div>
            </div>
          </div>

          {/* >----------------->Blog-Content<---------------< */}
          <div className="blog-content flex flex-col justify-center gap-3">

            <div className="blog-post-details flex flex-wrap items-center gap-4 text-sm text-black/50 border-b border-black/15 py-4">
              <h6>
                Posted by
              </h6>
              <span className="flex items-center gap-1.5">
                <i className="bi bi-person"></i> {blog.author}
              </span>
              <span className="flex items-center gap-1.5">
                <i className="bi bi-chat"></i> {blog.comments.length} Comment(s)
              </span>
              <span className="flex items-center gap-1.5">
                <i className="bi bi-eye"></i> {blog.views} View(s)
              </span>
            </div>

            <div className="blog-content w-full text-md text-black/70 flex flex-col gap-6 items-start justify-start py-6  border-b border-black/20">

              <p className="first-letter:float-start first-letter:text-4xl md:first-letter:text-5xl first-letter:uppercase first-letter:font-semibold first-letter:text-black/85 first-letter:pe-2 first-letter:pr-2">
                Lorem ipsum dolor  amet consectetur adipisicing elit. Magni cum minus, fugit placeat ea voluptate harum accusantium. Soluta at aliquam, provident maiores minus, inventore quidem nisi neque veritatis eveniet dolorum a totam laborum Labore voluptas beatae, non, architecto laudantium quisquam provident unde iusto veniam natus laborum quas at, repudiandae ducimus
              </p>

              <div>
                <h1 className='text-2xl lg:text-3xl font-semibold text-black/80 py-3'>Heading</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam consequuntur placeat doloremque ullam porro vel, aliquid sed sint harum eveniet nihil eius provident molestiae soluta facilis reiciendis dignissimos, voluptatum debitis modi dolore! Quia voluptate necessitatibus officia hic omnis magnam animi!
                </p>
              </div>

              <div className="bg-[#eeeff1] p-6 border-s-5 border-(--bg-secondary) rounded-s-lg italic">
                <i className="bi bi-quote float-start md:text-3xl text-3xl me-2"></i>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quaerat, quis repellat adipisci amet quae voluptatibus atque, nostrum, dignissimos error sint est nisi dolore libero ullam minus! Eum saepe odit, iste eos enim sint nam vel suscipit fugit similique impedit?
                </p>
              </div>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error architecto provident voluptates vero nostrum! Dolorem soluta ullam iste qui? Explicabo omnis quaerat nostrum illo accusantium eveniet aut culpa, nulla odit.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum error aut quam nulla ut hic. Explicabo autem atque assumenda.
              </p>

              <div>
                <h1 className='text-xl lg:text-2xl font-semibold text-black/80 py-3'>Heading</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam consequuntur placeat doloremque ullam porro vel, aliquid sed sint harum eveniet nihil eius provident molestiae soluta facilis reiciendis dignissimos, voluptatum debitis modi dolore! Quia voluptate necessitatibus officia hic omnis magnam animi!
                </p>
              </div>

              <div className="bg-[#eeeff1] p-6 border-s-5 border-(--bg-secondary) rounded-s-lg italic">
                <i className="bi bi-quote float-start md:text-3xl text-3xl me-2"></i>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quaerat, quis repellat adipisci amet quae voluptatibus atque, nostrum, dignissimos error sint est nisi dolore libero ullam minus! Eum saepe odit, iste eos enim sint nam vel suscipit fugit similique impedit?
                </p>
              </div>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error architecto provident voluptates vero nostrum! Dolorem soluta ullam iste qui? Explicabo omnis quaerat nostrum illo accusantium eveniet aut culpa, nulla odit.
              </p>

            </div>

            {blog.tags?.length > 0 && (
              <div className="blog-tags flex items-center gap-4">
                <span className="text-black/60 text-sm">Tags:</span>
                <div className="tags-main flex flex-wrap items-center gap-4">
                  {blog.tags.map((tag) => (
                    <div
                      key={tag}
                      className="tag bg-white border border-black/20 text-sm text-black/70 px-3 py-0.5 rounded-full hover:border-black/90 cursor-pointer"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="social-links py-8 flex flex-row gap-4 text-md text-black/60">
              <span className="text-black/60 text-sm">Follow us:</span>
              {socialLinks.map((link, i) => (
                <Link to={link.link} className="hover:text-(--text-secondary)" key={i}>
                  <i className={`bi ${link.icon}`}></i>
                </Link>
              ))}
            </div>

          </div>

          {/* >----------------->Blog-Comments<---------------< */}

          <div className='blog-comments-main flex flex-col items-start'>
            <h1 className='text-xl lg:text-2xl font-semibold text-black/80 py-3'>{blog.comments.length} Comment(s)</h1>
            {blog.comments.length === 0 ?
              <div className='flex justify-center items-center p-6 w-full'>
                <h1 className='text-xl font-semibold'>
                  No comments on this post
                </h1>
              </div>
              :
              <>
                <div className="card-grid flex flex-col gap-8">
                  {blog.comments.slice(0, visibleComments).map((comment, i) => (
                    <div className="comment-card border-b border-black/15 py-6 flex flex-col gap-3" key={i}>

                      <div className="comment-heading flex flex-row gap-4">
                        <img src={commentImg} alt='comment-img' className='comment-img rounded-full' />
                        <div className="comment-details">
                          <h6 className='font-semibold text-sm'>{comment.name}</h6>
                          <span className='text-xs text-black/60 font-semibold me-3'><i className='bi bi-calendar'></i> {comment.day} {comment.month}</span>
                          <span className='text-xs text-black/60 font-semibold me-3'><i className='bi bi-clock'></i> {comment.time}</span>
                        </div>
                      </div>

                      <div className="comment-discription">
                        <p className='text-black/70 text-sm'>
                          {comment.comment}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  className="cursor-pointer bg-transparent hover:bg-black/4 border border-black/80 text-black/80 px-6 py-3 rounded-full text-xs self-end my-8"
                  onClick={() => { setVisibleComments(blog.comments.length) }}
                >
                  View All Comments <i className="bi bi-arrow-right"></i>
                </button>
              </>
            }
          </div>

          {/* >----------------->Add-Comments<---------------< */}
          <div className="contact-form lg:col-span-2 ">
            <div className="p-8">
              <h1 className="title text-2xl font-semibold text-(--text-dark) py-5">
                Leave A Comment
              </h1>

              <form className='flex flex-col gap-6'>

                <div className="flex flex-row gap-6 w-full items-center">
                  <label htmlFor="Name" className="text-sm text-black/60 font-semibold shrink-0 w-28">
                    Name<span className="text-red-600 text-xl">*</span>
                  </label>
                  <input
                    id="Name"
                    name="Name"
                    type="text"
                    required
                    className="bg-white outline outline-black/5 focus:outline-black/70 rounded-sm p-2 w-full"
                  />
                </div>

                <div className="flex flex-row gap-6 w-full items-center">
                  <label htmlFor="email" className="text-sm text-black/60 font-semibold shrink-0 w-28">
                    Email<span className="text-red-600 text-xl">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    required
                    className="bg-white outline outline-black/5 focus:outline-black/70 rounded-sm p-2 w-full"
                  />
                </div>

                <div className="flex flex-row gap-6 w-full items-start">
                  <label htmlFor="comment" className="text-sm text-black/60 font-semibold shrink-0 w-28 pt-2">
                    Comment<span className="text-red-600 text-xl">*</span>
                  </label>
                  <textarea
                    name="comment"
                    id="comment"
                    required
                    className="bg-white outline outline-black/5 focus:outline-black/70 rounded-sm p-2 w-full min-h-32"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-(--text-dark) text-white font-semibold px-8 py-2.5 cursor-pointer rounded-full w-full hover:bg-(--bg-secondary) transition-all"
                >
                  Submit
                </button>
              </form>

            </div>
          </div>

        </div>


        <div className="side-bar h-fit sticky top-26 lg:max-w-xs w-full bg-white shadow-md shadow-[#68676726] p-6">
          <h6 className="text-sm font-semibold">Other Must Reads</h6>
          <ul className="text-sm leading-8 mt-6">
            {blogs.map((card, i) => (
              <li key={i} className='flex flex-row items-center gap-3'>
                <img src={card.image} alt={card.link} className='w-10 h-10 rounded-full object-cover' />
                <div className="flex flex-col gap-1 text-sm py-4">
                  <h6 className='text-sm'>
                    <Link to={`/blog/${card.link}`}>
                      {card.title}
                    </Link>
                  </h6>
                  <div className="text-black/50 flex flex-row gap-2 text-xs">
                    <span className="flex items-center gap-1.5">
                      <i className="bi bi-chat"></i> {card.comments.length}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <i className="bi bi-calendar"></i> {card.day} {card.month}
                    </span>
                  </div>
                </div>

              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}

export default BlogDetails