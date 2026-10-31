import { Link } from "react-router-dom"
import { blogPosts } from "@utils/fackData/blogData"

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })

const BlogPage = () => (
  <main className="zenorix-contact">
    <section className="zenorix-contact__hero">
      <div className="zenorix-svcpage__inner">
        <p className="zenorix-svcpage__pill"><i className="ri-arrow-right-up-line" aria-hidden="true" />Blog</p>
        <h1>Insights on <span>websites, apps &amp; growth</span></h1>
        <p>Practical guides from the Zenorix team on website development, e-commerce, software and mobile apps for businesses in Kerala.</p>
      </div>
    </section>
    <section className="zenorix-contact__content zenorix-legal" aria-label="Blog posts">
      <div className="zenorix-svcpage__inner">
        <ul className="zenorix-blog__list">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <article>
                <p className="zenorix-blog__meta">{post.category} · {formatDate(post.datePublished)} · {post.readingMinutes} min read</p>
                <h2><Link to={`/blog/${post.slug}`}>{post.title}</Link></h2>
                <p>{post.description}</p>
                <Link to={`/blog/${post.slug}`} className="zenorix-blog__more">Read article ↗</Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </main>
)

export default BlogPage
