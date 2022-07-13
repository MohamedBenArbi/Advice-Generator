import { useEffect, useState } from 'react';
import './App.css';
import Component1 from './Component1';

var dat;

function App() {

  function grab() {

    fetch("https://api.adviceslip.com/advice").then(res => res.json()).then(ad => {
      localStorage.setItem("adv", ad.slip.advice);
      localStorage.setItem("id", ad.slip.id);

      setstate(ad.slip.advice)
    })


  }

  const adv = localStorage.getItem("adv");
  const id = localStorage.getItem("id");


  const [state, setstate] = useState()

  useEffect(() => {
    setstate(adv)
  }, [adv])





  return (
    <>
      <div className='flex items-center justify-center w-screen h-screen bg-Bl-100'>
        <Component1 advice={state} grab={grab} id={id} />
      </div>
    </>
  );
}

export default App;
