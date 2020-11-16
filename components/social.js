const links = [
  { href: 'https://github.com/sarthaktexas', label: 'GitHub', icon: 'github-line' },
  { href: 'https://sarthakmohanty.s3.amazonaws.com/Sarthak\'s+Resume.pdf', label: 'Resume', icon: 'file-copy-line' },
  { href: 'https://dribbble.com/sarthakmohanty', label: 'Dribble', icon: 'dribbble-line' },
  { href: 'https://behance.net/sarthaktexas', label: 'Behance', icon: 'behance-fill' },
  {href: 'mailto:hello@sarthakmohanty.me', icon: 'send-plane-fill'}
]

export default function Social() {
  return (
    <ul className="mt-4 mb-2">
      {links.map(({ href, label, icon }) => (
        <li key={`${href}${label}`} className="inline-block mr-8 text-pink-400">
          <a href={href}>
            <i className={`ri-${icon}`} title={label} style={{ fontSize: 30 }}/>
          </a>
        </li>
      ))}
    </ul>
  )
}