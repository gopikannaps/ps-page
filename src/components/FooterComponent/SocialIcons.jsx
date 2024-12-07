import SocialWidget from './SocialWidget';
import facebook from '../../assets/img/facebook.png';
import whatsapp from '../../assets/img/whatsapp.png';
import insta from '../../assets/img/insta.png';
import youtube from '../../assets/img/youtube.png';
import linkedin from '../../assets/img/linkedin.png';

function App() {
  const socialIcons = [
    { href: 'https://facebook.com', img: facebook, alt: 'Facebook' },
    { href: 'https://whatsapp.com', img: whatsapp, alt: 'WhatsApp' },
    { href: 'https://instagram.com', img: insta, alt: 'Instagram' },
    { href: 'https://youtube.com', img: youtube, alt: 'YouTube' },
    { href: 'https://linkedin.com', img: linkedin, alt: 'LinkedIn' },
  ];

  return (
    <div className="p-4">
      <SocialWidget icons={socialIcons} />
    </div>
  );
}

export default App;
