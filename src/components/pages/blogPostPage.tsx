import { Link, Navigate, useParams } from "react-router-dom"
import { getBlogPost } from "@utils/fackData/blogData"
import { serviceLinks } from "@/lib/seo"

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getBlogPost(slug) : undefined
  if (!post) return <Navigate to="/blog" replace />

  return (
    <main className="zenorix-contact">
      <section className="zenorix-contact__hero">
        <div className="zenorix-svcpage__inner">
          <p className="zenorix-svcpage__pill"><i className="ri-arrow-right-up-line" aria-hidden="true" />{post.category}</p>
          <h1 className="zenorix-blog__title">{post.title}</h1>
          <p>By {post.author} · <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time> · {post.readingMinutes} min read</p>
        </div>
      </section>
      <article className="zenorix-contact__content zenorix-legal">
        <div className="zenorix-svcpage__inner">
          {post.content.map((block, i) => {
            if (block.type === "h2") return <h2 key={i}>{block.text}</h2>
            if (block.type === "p") return <p key={i}>{block.text}</p>
            if (block.type === "ul") return <ul key={i}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>
            return <ol key={i}>{block.items.map((item) => <li key={item}>{item}</li>)}</ol>
          })}
          <h2>Explore our services</h2>
          <ul>
            {serviceLinks.map((l) => <li key={l.href}><Link to={l.href}>{l.label}</Link></li>)}
            <li><Link to="/contact">Contact Zenorix</Link></li>
          </ul>
          <p><Link to="/blog">← Back to all articles</Link></p>
        </div>
      </article>
    </main>
  )
}

export default BlogPostPage
