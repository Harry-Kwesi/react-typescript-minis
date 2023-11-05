import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [urlToShare, setUrlToShare] = useState<string>(''); // Your URL

  const generateShareableLink = () => {
    // Define the URL you want to share
    const urlToShare = 'https://example.com'; // Replace with your URL

    // Create a shareable link
    const shareableLink = `https://example.com/share?url=${encodeURIComponent(urlToShare)}`;

    // Set the shareable link in the state
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
        <button onClick={generateShareableLink}>Generate Shareable Link</button>
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
