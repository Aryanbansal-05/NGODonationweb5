import { useState } from 'react'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router'
import './App.css'
import AuthPage from './components/Login'
import Navbar from './components/Navbar'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router'
import ImageSlider from './components/ImageSlider'
import image16 from './assets/image16.jpeg'
import image12 from './assets/image12.jpeg'
import image18 from './assets/image18.jpg'
import image9 from './assets/image9.jpeg'
import DonutChart from './components/Charts'
import DonutChart2 from './components/Charts2'
import DonutChart3 from './components/Charts3'
import image6 from './assets/image6.jpeg'
import NGOListBar from './components/NGObar'
import NGODetailPage from './components/NGODetailPage'
import NGODetail from './components/NGOdetail'
import Chatbot from './chatbot'

export default function App() {
  const sampleImages = [image16, image12, image18, image9]
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <>
     

    
      <div className=" w-full items-center justify-center">
     
        <ImageSlider images={sampleImages} interval={3000} />
        <Navbar />
      </div>


      <div className="flex flex-col lg:flex-row gap-10 px-4 pt-10">

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1 w-full lg:w-1/2">
          <DonutChart />
          <DonutChart2 />
          <DonutChart3 />
        </div>


        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-700 mb-6">
            United for a Better India 🇮🇳
          </h1>
          <img
            src={image6}
            alt="India NGO Collage"
            className="w-full rounded-xl object-cover pt-20"
          />
        </div>
      </div>


      <NGOListBar />
       {/* Floating Chatbot Button */}
       <button
  onClick={() => setShowChatbot(!showChatbot)}
  className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-5 rounded-full shadow-2xl hover:scale-110 hover:from-blue-700 hover:to-blue-900 transition-all duration-300 ease-in-out z-50 text-3xl"
  title="Chat with Zariya"
>
  💬
</button>


      {/* Chatbot Popup Box */}
      {showChatbot && (
        <div className="fixed bottom-20 right-5 w-[45%] bg-white shadow-2xl rounded-lg border z-40">
          <Chatbot />
        </div>
      )}

    </>
  );
}
