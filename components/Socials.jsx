import Link from 'next/link'
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa'

// Ajuste as URLs nos paths como desejar:
const socials = [
  { icon: <FaGithub />, path: 'https://github.com/LeoMucci' },
  { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/leonardomucci' },
  { icon: <FaYoutube />, path: 'https://www.youtube.com/seu-canal' },
  { icon: <FaTwitter />, path: 'https://twitter.com/seu-usuario' },
]

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.path}
          target="_blank"           // Abre em nova aba
          rel="noopener noreferrer" 
          className={iconStyles}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  )
}

export default Socials
