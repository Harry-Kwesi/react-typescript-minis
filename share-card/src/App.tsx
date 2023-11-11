import { useState } from 'react';
import './App.css';
import { SocialIcon } from 'react-social-icons';
import toast, { Toaster } from 'react-hot-toast';

interface SocialMediaProfile {
  key: number;
  url: string;
  onClick: (e: React.MouseEvent) => void;
}

function App() {
  const [urlToShare, setUrlToShare] = useState<string>('');

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(urlToShare);
      toast('Link copied to clipboard!')
    } catch (err) {
      console.error('Unable to copy to clipboard', err);
    }
  };

  const updateInputWithUrl = (clickedUrl: string, event: React.MouseEvent) => {
    event.preventDefault();
    setUrlToShare(clickedUrl);
    copyToClipboard();
  };

  const generateSocialMediaProfiles = (): SocialMediaProfile[] => {
    const socialMediaProfilesData = [
      { name: "Twitter", url: "https://www.twitter.com/your-twitter-profile" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/your-linkedin-profile" },
      { name: "Facebook", url: "https://www.facebook.com/your-facebook-profile" },
      { name: "Instagram", url: "https://www.instagram.com/your-instagram-profile" },
      { name: "Pinterest", url: "https://www.pinterest.com/your-pinterest-profile" },
      { name: "Telegram", url: "https://www.telegram.org/your-telegram-profile" }
    ];

    return socialMediaProfilesData.map((profile, index) => ({
      key: index,
      url: profile.url,
      onClick: (e: React.MouseEvent) => updateInputWithUrl(profile.url, e),
      style: { marginRight: 10, height: 50, width: 50 }
    }));
  };

  const socialMediaProfiles = generateSocialMediaProfiles();

  return (
    <>
      <div className="card">
        <h3>Share the link</h3>
        <div className='socialIcons'>
          {socialMediaProfiles.map((profile) => (
            <SocialIcon key={profile.key} url={profile.url} onClick={profile.onClick} style={profile.style} />
          ))}
        </div>
        <div><p>or copy link</p></div>
        <div className="searchbox-wrap">
          <input
            type="text"
            value={urlToShare}
          />
          <button onClick={copyToClipboard}><span>Copy</span> </button>
        </div>
        <Toaster />
      </div>
    </>
  );
}

export default App;
