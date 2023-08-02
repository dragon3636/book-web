import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
const createCommnet = (postId) => {
  console.log("🚀 ~ file: main.jsx:6 ~ createCommnet ~ postId:", postId)
  setInterval(() => {
    const event = new CustomEvent(`listen-${postId}`, { detail: `Comment of ${postId}` });
    window.dispatchEvent(event)
  },
    2000)
}
createCommnet(2);
createCommnet(3);
createCommnet(1);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
