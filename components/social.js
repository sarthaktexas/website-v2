import Link from 'next/link'

const links = [
  { href: 'https://github.com/sarthaktexas', label: 'GitHub', icon: 'github-line' },
  //{ href: 'https://sarthakmohanty.s3.amazonaws.com/Sarthak\'s+Resume.pdf', label: 'Resume', icon: 'file-3-line' },
  { href: 'https://dribbble.com/sarthakmohanty', label: 'Dribble', icon: 'dribbble-line' },
  //{ href: '/projects', label: 'Projects', icon: 'grid-fill' },
  { href: 'https://behance.net/sarthaktexas', label: 'Behance', icon: 'behance-fill' },
  { href: 'https://twitter.com/sarthaktexas', label: 'Twitter', icon: 'twitter-line' },
  { href: 'mailto:hello@sarthakmohanty.me', label: 'Email', icon: 'send-plane-fill' },
]

export default function Social() {
  return (
    <ul className="mt-4 mb-2">
      {links.map(({ href, label, icon }) => (
        <li key={`${href}${label}`} className="inline-block mr-8 text-pink-400 hover:text-red-400">
          <Link href={href}>
            <i className={`ri-${icon}`} title={label} style={{ fontSize: 30 }}/>
          </Link>
        </li>
      ))}
    </ul>
  )
}