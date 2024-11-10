import React, { useState, useEffect, useRef } from 'react';
import './bootstrap.min.css';
import './test.css';
import './index2.css';
import HondaSymbol from "../../images/Honda Symbol H.png";
import HondaPowerOfDreams from "../../images/Honda-PowerOfDreams-Symbol.png";
import Profilepic from "../../img/Profilepic.png";
import saloon from "../../img/saloon.png";
import { Link } from 'react-router-dom';

export default function Index2() {
  const [profileMenuVisible, setProfileMenuVisible] = useState(false);
  const [logoutConfirmationVisible, setLogoutConfirmationVisible] = useState(false);
  // const [name, setName] = useState(localStorage.getItem('userName'));
  // const [email, setEmail] = useState(localStorage.getItem('userEmail'));

  const containerRef = useRef(null); // Reference to the container for blinking words
  const radialRef = useRef(null); // Reference to radial container
  const hasToggled = useRef(false);

  useEffect(() => {
    if (hasToggled.current) return;
    hasToggled.current = true;

    // Function for smooth rotation animation using vanilla JavaScript
    const angleStart = -360;
    const animationDuration = 500; // Animation duration in milliseconds

    const rotate = (li, targetAngle) => {
      const startAngle = parseFloat(li.style.transform.replace('rotate(', '').replace('deg)', '')) || angleStart;
      const startTime = performance.now(); // Get the start time for animation

      const rotateStep = (timestamp) => {
        const elapsedTime = timestamp - startTime;
        const progress = Math.min(elapsedTime / animationDuration, 1); // Normalize progress (0 to 1)
        const currentAngle = startAngle + (targetAngle - startAngle) * progress;

        li.style.transform = `rotate(${currentAngle}deg)`;

        const label = li.querySelector('label');
        if (label) {
          label.style.transform = `rotate(${(-currentAngle)}deg)`;
        }

        if (progress < 1) {
          requestAnimationFrame(rotateStep); // Keep animating until we reach the target angle
        }
      };

      requestAnimationFrame(rotateStep); // Start the animation loop
    };


    // Toggle options for rotating animations
    const toggleOptions = (s) => {
      // console.log("what")
      const element = document.querySelector(s);
      element.classList.toggle('open');
      const li = element.querySelectorAll('li');
      const angles = [-5, 31, 67, 103, 139, 176];
      li.forEach((item, i) => {
        const targetAngle = angles[i];
        element.classList.contains('open') ? rotate(item, targetAngle) : rotate(item, angleStart);
      });
    };


    // Side tab animation
    toggleOptions('.selector');

    document.querySelectorAll('.selector button').forEach((button) => {
      button.addEventListener('click', () => {
        toggleOptions(button.parentElement);
      });
    });


    // Radial animation
    const makeRadial = (options) => {
      if (options && options.el) {
        const el = options.el;
        const radials = options.radials || 60;
        const degrees = 360 / radials;
        for (let i = 0; i < radials / 2; i++) {
          const newTick = document.createElement('div');
          newTick.classList.add('tick');
          newTick.style.transform = `rotate(${i * degrees}deg)`;
          el.prepend(newTick);
        }
      }
    };

    makeRadial({ el: radialRef.current, radials: 100 });

    // Blinking words animation
    // const words = ['16 KYC', '12 KYA', '24 Drive In Domain', '17 Terms To Know'];
    // let lastIndex = -1;

    // const scatterWords = () => {
    //   const containerRect = containerRef.current.getBoundingClientRect();
    //   const leftValue = Math.floor(Math.random() * (containerRect.width - 100));
    //   const topValue = Math.floor(Math.random() * (containerRect.height - 100));
    //   return { leftValue, topValue };
    // };

    // const randomBlink = () => {
    //   const min = 2;
    //   const max = 4;
    //   return Math.floor(Math.random() * (max - min + 1)) + min;
    // };

    // const displayWord = () => {
    //   if (!containerRef.current) return;
    //   containerRef.current.innerHTML = ''; // Clear previous words
    //   const word = document.createElement('p');
    //   word.classList.add('blinking-word');
    //   let randomIndex;
    //   do {
    //     randomIndex = Math.floor(Math.random() * words.length);
    //   } while (randomIndex === lastIndex);
    //   lastIndex = randomIndex;
    //   const selectedWord = words[randomIndex];

    //   // Split the word into parts and wrap them in spans
    //   const formattedWord = selectedWord.replace(/(\d+)([a-zA-Z\s]+)/g, '<span class="big">$1</span><span class="small">$2</span>');
    //   word.innerHTML = formattedWord;

    //   const { leftValue, topValue } = scatterWords();
    //   word.style.top = `${topValue}px`;
    //   word.style.left = `${leftValue}px`;
    //   word.style.animationDuration = `${randomBlink()}s`;

    //   containerRef.current.appendChild(word);
    // };

    // displayWord();
    // const wordInterval = setInterval(displayWord, 2000);

    // // Cleanup on component unmount
    // return () => {
    //   clearInterval(wordInterval);
    // };
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light shadow sticky-top p-0">
        <a href="../HondaKITE/index2.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
          <img src={HondaSymbol} alt="Symbol" id="hondaSymbol" />
          <img src={HondaPowerOfDreams} alt="PowerOfDreams" height="110%" width="60%" />
        </a>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <a href="./pages/Kitearea.html" className="nav-item nav-link">KITE AREA</a>
            <div className="nav-item dropdown">
              <a href="/" id="quickLinks" className="nav-link">Quick Links</a>
              <div className="dropdown-menu fade-up m-0">
                <a href="./ktvideo/ktvideo.html" className="dropdown-item">KtVideos</a>
                <a href="./bcamp/elearn.html" className="dropdown-item">eLearning</a>
                <a href="./pages/askKITE.html" className="dropdown-item">Ask KITE</a>
                <a href="https://cognizantonline.sharepoint.com/sites/kha-honda" className="dropdown-item">Know Hub</a>
              </div>
            </div>

            <div className="profile-dropdown">
              <div onClick={() => setProfileMenuVisible(!profileMenuVisible)} className="nav-item nav-link">
                <img src={Profilepic} alt="Profile Icon" id="profileIcon" className="profile-icon" />
              </div>
              {profileMenuVisible && (
                <div className="profile-menu" id="profileMenu">
                  {/* <p>{name}</p> */}
                  {/* <p>{email ? `${email}@cognizant.com` : ''}</p> */}
                  <button onClick={() => setLogoutConfirmationVisible(true)}>Logout</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="table">
        <div className="table-cell">
          <div id="main">
            <div id="screen">
              <div className="road">
                <div className="car car1"><img id='blueCar' src={saloon} alt="Car 1" /></div>
              </div>
              <div id="home">
                <div id="radial" ref={radialRef}><div id="empty"></div></div>
                <div id="icon"></div>
                <div id="status" className="text-white">WELCOME TO</div>
                <h1 id="kite" className="text-white">KITE</h1>
                <div id="mph"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="selector">
        <ul>
          <li id="bootcampBtn">
            <input id="menus" type="checkbox" />
            <label htmlFor="2"><Link to="/HomeBootcamp">Bootcamp</Link></label>
          </li>
          <li id="driveinBtn">
            <input id="menus" type="checkbox" />
            <label htmlFor="3"><Link to="/Drivein">Drive-i Domain</Link></label>
          </li>
          <li id="dashboardBtn">
            <input id="menus" type="checkbox" />
            <label htmlFor="4"><Link to="/ActDashBoard">Dashboard</Link></label>
          </li>
          <li id="automationBtn">
            <input id="menus" type="checkbox" />
            <label htmlFor="5"><a href="./pages/autopage.html">Automation Zone</a></label>
          </li>
          <li id="fameBtn">
            <input id="menus" type="checkbox" />
            <label htmlFor="6"><a href="./pages/dds.html">DDS</a></label>
          </li>
          <li id="fuelupBtn">
            <input id="menus" type="checkbox" />
            <label htmlFor="7"><Link to="/FuelUp">Fuel-up</Link></label>
          </li>
        </ul>
      </div>

      {logoutConfirmationVisible && (
        <div className="blurred-background" id="blurredBackground">
          <div className="message-box bg-white" id="messageBox">
            <h2>Are you sure you want to log out?</h2>
            <button onClick={() => window.location.href = './logout.html'}>Yes</button>
            <button onClick={() => setLogoutConfirmationVisible(false)}>No</button>
          </div>
        </div>
      )}

      {/* Blinking words container */}
      <div ref={containerRef} className="star-container"></div>
    </div>
  );
}
