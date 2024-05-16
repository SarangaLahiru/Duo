import { Button } from 'flowbite-react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import './App.css';
import Sidebar1 from './components/Sidebar';
import { default as Slider } from './components/carousel';
import Footer1 from './components/footer';
import Header from './components/header';
import Header1 from './components/header1';

function App() {
  const [count, setCount] = useState(0)
  const alert = () => {
    Swal.fire({
      title: "The Internet?",
      text: "That thing is still around?",
      icon: "question"
    });
  }
  const alert2 = () => {
    toast.success("success");
  }

  return (
    <>
      <h2 data-aos="fade-up" className="text-red-50 bg-black">asda</h2>
      <button onClick={alert}>ok</button>
      <button className=' bg-red-100' onClick={alert2}>ok2</button>
      <Button>ok</Button>
      <Header />
      <Header1 />

      <Slider />
      <Sidebar1 />
      <Footer1 />



    </>
  )
}

export default App
