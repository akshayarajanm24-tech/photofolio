
import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/components/comman/navbar";
import Footer from "@/components/comman/footer";
import ScrollTop from "@/components/comman/scrolltop";

const API_URL = "http://127.0.0.1:8000/api/blogs/";

async function getBlogs() {
  try {
    const response = await fetch(API_URL, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch blogs");
    }

    return await response.json();
  } catch (error) {
    console.error("Blog API Error:", error);
    return [];
  }
}

export default async function BlogDetails({ params }) {
  const { slug } = await params;

  const blogs = await getBlogs();

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  // Latest 4 posts except current blog
  const recentPosts = blogs
    .filter((item) => item.id !== blog.id)
    .slice(0, 4);

  return (
    <>
      {/* Navbar */}
      <Navbar />

      <main id="main">

        {/* Breadcrumb Section */}
        <section className="breadcrumbs">
          <div className="container">

            <div className="blog-breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>

              <Link href="/blog">Blog</Link>
              <span>/</span>

              <span className="current-page">
                {blog.heading}
              </span>
            </div>

            <h2>{blog.heading}</h2>

          </div>
        </section>

        {/* Blog Details Section */}
        <section className="blog-details">
          <div className="container">

            <div className="row g-5">

              {/* LEFT SIDE - MAIN BLOG */}
              <div className="col-lg-8">

                <article className="blog-article">

                  {/* Blog Heading */}
                  <div className="blog-title-area mb-4">

                    <h1>{blog.heading}</h1>

                    <div className="blog-meta">
                      <span>
                        <i className="bi bi-calendar3"></i>{" "}
                        {new Date(
                          blog.created_at
                        ).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>

                  </div>

                  {/* Main Image */}
                  <div className="blog-featured-image mb-4">

                    <img
                      src={
                        blog.image ||
                        "/assets/img/gallery/gallery-1.jpg"
                      }
                      alt={blog.heading}
                      className="img-fluid w-100"
                    />

                  </div>

                  {/* Blog Content */}
                  <div className="blog-content">

                    <h2>{blog.heading}</h2>

                    <p>{blog.description}</p>

                  </div>

                  {/* Back to Blog */}
                  <div className="blog-back mt-5">

                    <Link
                      href="/blog"
                      className="btn btn-outline-dark"
                    >
                      <i className="bi bi-arrow-left"></i>{" "}
                      Back to Blogs
                    </Link>

                  </div>

                </article>

              </div>

              {/* RIGHT SIDE - RECENT POSTS */}
              <div className="col-lg-4">

                <aside className="blog-sidebar">

                  <div className="sidebar-item">

                    <h3>Recent Posts</h3>

                    {recentPosts.map((post) => (

                      <div
                        className="recent-post-item"
                        key={post.id}
                      >

                        <Link
                          href={`/blog/${post.slug}`}
                          className="recent-post-image"
                        >
                          <img
                            src={
                              post.image ||
                              "/assets/img/gallery/gallery-1.jpg"
                            }
                            alt={post.heading}
                          />
                        </Link>

                        <div className="recent-post-info">

                          <h4>
                            <Link
                              href={`/blog/${post.slug}`}
                            >
                              {post.heading}
                            </Link>
                          </h4>

                          

                        </div>

                      </div>

                    ))}

                  </div>

                  {/* All Blogs */}
                  <div className="sidebar-item all-blogs-box">

                    <h3>Explore More</h3>

                    <p>
                      Discover more photography stories
                      and creative ideas.
                    </p>

                    <Link
                      href="/blog"
                      className="btn btn-outline-dark w-100"
                    >
                      View All Blogs
                    </Link>

                  </div>

                </aside>

              </div>

            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />
      <ScrollTop />
    </>
  );
}
