import { useState, useRef } from 'react'
import './App.css'
import { SocialIcon } from 'react-social-icons'

function App() {
  const [urlToShare, setUrlToShare] = useState<string>(''); // Your URL

  const generateShareableLink = () => {
    const urlToShare = 'https://example.com'; // Replace with your URL

    const shareableLink = `https://example.com/share?url=${encodeURIComponent(urlToShare)}`;

    setUrlToShare(shareableLink);
  };

  const copyToClipboard = () => {
    if (urlToShare) {
      navigator.clipboard.writeText(urlToShare)
        .then(() => {
          alert('Link copied to clipboard!');
        })
        .catch((error) => {
          console.error('Copy failed: ', error);
        });
    }
  };

  return (
    <>
      <div className="card">
        <h3>Share the link</h3>
        <div className='socialIcons'>
          <div><SocialIcon url="www.twitter.com" className="custom-class" fgColor="currentColor"  style={{marginRight: 10, height:40, width: 40  }}/></div>
        
        <SocialIcon url="www.linkedin.com"  style={{marginRight: 10, height:40, width: 40 }}/>
        <SocialIcon url="www.facebook.com"  style={{marginRight: 10, height:40, width: 40  }} />
        <SocialIcon url="www.instagram.com"  style={{marginRight: 10, height:40, width: 40  }} />
        <SocialIcon url="www.pinterest.com"   style={{marginRight: 10, height:40, width: 40  }}/>
        <SocialIcon url="www.telegram.com"  style={{height:40, width: 40  }}/>
        </div>
        
        
      <div style={{ position: 'relative' }}>
        <input
          type="text"
          value={urlToShare}
          style={{ display: urlToShare ? 'block' : 'none' }}
          readOnly
        />
        {urlToShare && (
          <button
            onClick={copyToClipboard}
            style={{
              position: 'absolute',
              right: '10px',
              top: '5px',
              padding: '5px',
            }}
          >
            Copy
          </button>
        )}
      </div>
      </div>
    </>
  )
}


export default App
