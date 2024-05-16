import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Events',
  description: 'Lerne mehr über die Events der Bond\'s Big Band.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Usere Events</h1>
      <BlogPosts />
    </section>
  )
}
