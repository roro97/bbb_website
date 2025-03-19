import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Bond's Big Band
      </h1>
      <Image
        className='mb-4'
        src="/images/full-bandv2.jpg"
        alt="Bond's Big Band"
        width={800}
        height={250}
        style={{ objectFit: 'cover', objectPosition: '50% 30%' }}
      />
      <p className="mb-4">
        Was 2010 als Bläserkreis der Musikschule Weil am Rhein begann, ist nun die Bonds Big Band, schon in der 2. Generation! Eine junge engagierte Bigband mit Ambitionen und einem breiten Repertoire an Stücken aus Jazz, Funk und Pop.
      </p>
      <div className="my-8">
        <BlogPosts showPastEvents={false} />
      </div>
    </section>
  )
}
