import Image from 'next/image'

export default function Page() {
return (
    <section>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
            Unsere Setlist
        </h1>
        <Image
            className='mb-4'
            src="/images/mundstueck.jpg"
            alt="Bond's Big Band"
            width={800}
            height={300}
        />
        <h3 className=" text-xl font-semibold tracking-tighter">
            Jazz
        </h3>
        <p className="mb-4">
            Wir spielen viele bekannte Klassiker der Jazz-Musik und traditionelle Big Band Klassiker wie In the Mood. Hier eine Auswahl unserer Jazz-Stücke:
        </p>
        <p className='ml-6 mb-4'>
            <ul style={{ listStyleType: 'circle' }}>
                <li>In the Mood</li>
                <li>It don't mean a thing</li>
                <li>Swinging Shanty</li>
                <li>American patrol</li>
                <li>Cantaloupe island</li>
                <li>Children of Sanchez</li>
            </ul>
        </p>
        <h3 className=" text-xl font-semibold tracking-tighter">
            Pop
        </h3>
        <p className="mb-4">
        Als junge und dynamische Gruppe wollen wir auch etwas neuere und moderne Stücke einbauen, die sich gut als Big Band umsetzen lassen. Hier eine Auswahl:
        </p>
        <p className='ml-6 mb-4'>
            <ul style={{ listStyleType: 'circle' }}>
                <li>Skyfall</li>
                <li>Rolling in the Deep</li>
                <li>Carry on wayward son</li>
                <li>Earth wind and fire dance mix</li>
                <li>Eye of the tiger</li>
                <li>Georgia on my mind</li>
                <li>Invisible touch</li>
            </ul>
        </p>
        <h3 className=" text-xl font-semibold tracking-tighter">
            Funk
        </h3>
        <p className="mb-4">
            Wenn es so richtig groovt, macht es einfach Spaß, sowohl das Spielen als auch das Zuhören.
        </p>
        <p className='ml-6 mb-4'>
            <ul style={{ listStyleType: 'circle' }}>
                <li>Spain - Chick Corea</li>
                <li>September</li>
                <li>Hawaii 5- O</li>
                <li>Little Brown Jug</li>
                <li>25 or 6 to 4</li>
            </ul>
        </p>
    </section>
)
}