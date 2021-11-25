export default function Footer() {
  const links = [
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mattfewer/',
      icon: 'ri-linkedin-line'
    },
    {
      title: 'GitHub',
      url: 'https://github.com/mattyfew',
      icon: 'ri-github-line'
    },
    {
      title: 'Instagram',
      url: 'https://instagram.com/mattyfew',
      icon: 'ri-instagram-line'
    },
  ]

  return <footer className="footer">
    {links.map((link, index) => {
      return <a key={index} href={link.url} target="_blank">
        <span>{link.title}</span>
        <i className={link.icon} />
      </a>
    })}
  </footer>
}