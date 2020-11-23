import Link from 'next/link'

const links = [
  //{ href: '/manifesto', label: 'Read my Manifesto' },
  { href: '/walkthrough', label: 'Resume' },
]

export default function Nav() {
  return (
    <nav>
      <ul className="flex flex-wrap justify-between items-center p-8">
        <li>
          <Link href="/">
            <img
              src="/signature.svg"
              alt="Signature of the creator"
              width={75}
              height={50}
              key="signature-nav"
            />
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
