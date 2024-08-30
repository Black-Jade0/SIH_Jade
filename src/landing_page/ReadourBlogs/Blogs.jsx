import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './styles.css';

function BlogCard({ date, title, description }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src="https://via.placeholder.com/150"
          className="card-img-top"
          alt="Blog"
        />
        <div className="card-body">
          <p className="text-muted">{date}</p>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}

function BlogsPage() {
  const blogs = [
    {
      date: "11 Jul 2023",
      title: "Importance of Vocational Training",
      description:
        "Vocational training plays a crucial role in career development...",
    },
    {
      date: "03 Jul 2023",
      title: "All You Need to Know About Unconventional Jobs",
      description:
        "Unconventional jobs offer new opportunities and challenges...",
    },
    {
      date: "05 Jun 2023",
      title: "Technology Enabling Better Employment Opportunities",
      description:
        "The role of technology in providing better career options...",
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Read Our Blogs</h2>
      <p className="text-muted">Discover the latest trends</p>
      <div className="row">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            date={blog.date}
            title={blog.title}
            description={blog.description}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogsPage;
