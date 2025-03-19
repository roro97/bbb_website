import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts({ showPastEvents = false }) {
  let allBlogs = getBlogPosts()
  const now = new Date()

  const upcomingEvents = allBlogs
    .filter((post) => new Date(post.metadata.publishedAt) >= now)
    .sort((a, b) => new Date(a.metadata.publishedAt).getTime() - new Date(b.metadata.publishedAt).getTime())

  const pastEvents = allBlogs
    .filter((post) => new Date(post.metadata.publishedAt) < now)
    .sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime())

  const EventList = ({ events }) => (
    <div>
      {events.map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col space-y-1 mb-4"
          href={`/blog/${post.slug}`}
        >
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
            <p className="text-neutral-600 dark:text-neutral-400 w-[150px] tabular-nums">
              {formatDate(post.metadata.publishedAt, false)}
            </p>
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {post.metadata.title}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-4">Kommende Events</h2>
        <EventList events={upcomingEvents} />
      </div>
      {showPastEvents && pastEvents.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Vergangene Events</h2>
          <EventList events={pastEvents} />
        </div>
      )}
    </div>
  )
}
