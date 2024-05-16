import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
return (
    <section>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
            Kontakt
        </h1>
        <Image
            className='mb-4'
            src="/images/Leitherer-dirigieren-cut.jpg"
            alt="Bond's Big Band"
            width={800}
            height={300}
        />

        <p className="mb-4">
            Kontak aufnehmen können Sie über die folgende E-Mail-Adresse:
        </p>
        <p className="mb-4">
            <Link href="mailto:leitherer@web.de" className="font-bold underline">
                leitherer@web.de
            </Link>
        </p>
        <p className="mb-8">
            Wir proben jeden Dienstag von 19:30 bis 21:30 Uhr im Musiksaal der Musikschule Weil am Rhein.
        </p>
    </section>
)
}
