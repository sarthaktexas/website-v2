import Link from 'next/link'
import Image from 'next/image'

const links = [
  { href: '/manifesto', label: 'Read my Manifesto' },
]

export default function Nav() {
  return (
    <nav>
      <ul className="flex flex-wrap justify-between items-center p-8">
        <li>
          <Link href="/">
            <a className="text-pink-500 no-underline">
            <Image
              src="/signature.svg"
              alt="Signature of the creator"
              width={100}
                height={70}
                className="flicker"
            />
            </a>
          </Link>
        </li>
        <ul className="flex flex-wrap justify-between items-center space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <Link href={href}>
                <a className="bg-transparent hover:bg-pink-500 text-pink-500 font-semibold hover:text-white py-2 px-4 border border-pink-500 hover:border-transparent rounded">
                  {label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  )
}
