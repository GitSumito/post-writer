import { allPosts } from '@/.contentlayer/generated'
import Image from 'next/image'
import { format } from 'date-fns'
import Link from 'next/link'

export default function BlogPage() {
  const posts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div>
        <div className="space-y-4">
          <h1 className="font-extrabold text-4xl lg:text-5xl tracking-tighter">blog</h1>
          <p>ContentLayer と MDX で書いています。</p>
        </div>
      </div>
      <hr className="my-8" />
      <div className="grid sm:grid-cols-2 gap-10">
        {posts.map(post => (
          <article key={post._id} className="relative group flex flex-col space-y-4">
            {post.image && (
              <Image
                src={post.image}
                alt={post.title}
                width={804}
                height={452}
                className="rounded-md border bg-muted transition-opacity group-hover:opacity-75"
              />
            )}

            <div className="flex flex-col space-y-2">
              <h2 className="text-2xl font-extrabold">{post.title}</h2>
              {post.description && <p className="text-muted-foreground">{post.description}</p>}
              {post.date && (
                <p className="text-sm text-muted-foreground">
                  {format(new Date(post.date), 'yyyy/MM/dd')}
                </p>
              )}
            </div>

            <Link href={post.slug} className="absolute inset-0">
              <span className="sr-only">View {post.title}</span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
