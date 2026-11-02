
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/blogs/"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Blog API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
   <main id="main">
      <section id="gallery" className="gallery">
        <div className="container">

          <div className="section-header">
            <h2>My Blog</h2>
            <p>Explore My Photography Stories</p>
          </div>

          {loading ? (
            <p className="text-center">Loading blogs...</p>
          ) : blogs.length === 0 ? (
            <p className="text-center">No blogs available.</p>
          ) : (
            <div className="row gy-4 justify-content-center">
              
{blogs.map((blog) => (
  <div
    className="col-xl-3 col-lg-3 col-md-6"
    key={blog.id}
  >
    <Link
      href={`/blog/${blog.slug}`}
      className="text-decoration-none text-dark"
    >
      <div className="gallery-item h-100">

        <img
          src={blog.image || "/assets/img/gallery/gallery-1.jpg"}
          className="img-fluid"
          alt={blog.heading}
        />

        <div className="p-3 text-center">
          <h3>{blog.heading}</h3>
          <p>{blog.description}</p>
        </div>

      </div>
    </Link>
  </div>
))}

            </div>
          )}

        </div>
      </section>
    </main>
  );
}
