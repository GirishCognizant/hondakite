// import React from 'react';
// import './Fuelup.css'; // Assuming Fuelup.css contains styles
// import '../css/style.css'; // Assuming Fuelup.css contains styles
// import amongUsImg from '../../img/among-us-button-fin-1608054673652.jpg'; // Assuming Fuelup.css contains styles
// import HondaSymbol from "../../images/Honda Symbol H.png"
// import HondaPowerOfDreams from "../../images/Honda-PowerOfDreams-Symbol.png"

// import TestDrive from '../../img/Test-Drive.jpg';
// import gotImage from '../../img/GOT.jpg';
// import scavengerImage from '../../img/Scavenger.png';
// import whoAmIImage from '../../img/who-am-i.png';
// import taglineManiaImage from '../../img/Tagline-Mania.jpg';
// import moneyHeistImage from '../../img/MoneyHeist.jpg';
// import testDrive2Image from '../../img/TestDrive2.jpg';
// import angryBirdsImage from '../../img/AngryBirds.jpg';
// import findTheFlowImage from '../../img/FindTheFlow.jpg';
// import superPowerDrainerImage from '../../img/SuperPowerDrainer.jpg';
// import cricketImage from '../../img/Cricket.jpg';
// import spaceQuestImage from '../../img/SpaceQuest.jpg';
// import wordleImage from '../../img/Wordle.jpg';
// import brainBrawlImage from '../../img/BrainBrawl.jpg';
// import pedalToVictoryImage from '../../img/PedalToVictory.jpg';
// import aceOfOdditiesImage from '../../img/AceOfOddities.jpg';
// import { Link } from 'react-router-dom';

// const FuelUp = () => {
//     return (
//         <html lang="en">
//             <head>
//                 <meta charSet="utf-8" />
//                 <title>CarServ - Car Repair HTML Template</title>
//                 <meta content="width=device-width, initial-scale=1.0" name="viewport" />
//                 <link rel="icon" href="img/favicon.ico" />


//             </head>
//             <body>
//                 {/* Navbar Start */}
//                 <nav className="navbar navbar-expand-lg navbar-light shadow sticky-top p-0" style={{ height: '75px' }}>
//                     <a href="../index2.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
//                         <img className='logos' src={HondaSymbol} alt="Symbol" id="hondaSymbol" />
//                         <img className='logos' src={HondaPowerOfDreams} alt="Symbol" height="110%" width="60%" />
//                     </a>
//                     <div className="collapse navbar-collapse" id="navbarCollapse">
//                         <div className="navbar-nav ms-auto p-4 p-lg-0">
//                             <Link to="/" className="nav-item nav-link">
//                                 HOME
//                             </Link>
//                             {/* <a href="../pages/Kitearea.html" className="nav-item nav-link active">KITE AREA</a> */}
//                             {/* <a href="service.html" className="nav-item nav-link">Services</a> */}
//                             <div className="nav-item dropdown">
//                                 <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
//                                     Quick Links
//                                 </a>
//                                 <div className="dropdown-menu fade-up m-0">
//                                     <a href="./ktvideo/ktvideo.html" className="dropdown-item">
//                                         KtVideos
//                                     </a>
//                                     <a href="./bcamp/elearn.html" className="dropdown-item">
//                                         eLearning
//                                     </a>
//                                     <a href="./pages/askKITE.html" className="dropdown-item">
//                                         Ask KITE
//                                     </a>
//                                     <a href="https://cognizantonline.sharepoint.com/sites/kha-honda" className="dropdown-item">
//                                         Know Hub
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </nav>

//                 <h2 className="line-title">MONDAY FUELUP</h2>
//                 <section className="game-section">
//                     <div className="owl-carousel custom-carousel owl-theme">
//                         <div className="item active" style={{ backgroundImage: `url(${amongUsImg})` }}>
//                             <div className={styles.itemDesc}>
//                                 <h3>Level 0 :Among US</h3>
//                                 <p>Identify the imposter among the Honda models </p>
//                                 <a href="Among US.html"> Click here </a>
//                             </div>
//                         </div>
//                         <div className={styles.item} style={{ backgroundImage: `url(${TestDrive})` }}>
//                             <div className={styles.itemDesc}>
//                                 <h3>Level 1:Test Drive</h3>
//                                 <p>Let's do some brainstorming at pitstops</p>
//                                 <a href="Test drive.html">Click here</a>
//                             </div>
//                         </div>

//                         <div className={styles.item} style={{ backgroundImage: `url(${gotImage})` }}>
//                             <div className={styles.itemDesc}>
//                                 <h3>Level 2: GOT: Game Of Terms</h3>
//                                 <p>Find the Honda application related term jumpled in each</p>
//                                 <a href="GOT.html">Click here</a>
//                             </div>
//                         </div>
//                         <div className={styles.item} style={{ backgroundImage: `url(${scavengerImage})` }}>
//                             <div className={styles.itemDesc}>
//                                 <h3>Level 3: Scavenger Hunt</h3>
//                                 <p>Hunt the pictures and connect with the Honda Terms</p>
//                                 <a href="Scavenger.html">Click here</a>
//                             </div>
//                         </div>
//                         <div className={styles.item} style={{ backgroundImage: `url(${whoAmIImage})` }}>
//                             <div className={styles.itemDesc}>
//                                 <h3>Level 4: Who Am I?</h3>
//                                 <p>Let's do some brainstorming at pitstops</p>
//                                 <a href="Test drive.html">Click here</a>
//                             </div>
//                         </div>

// <div className={styles.item} style={{ backgroundImage: `url(${taglineManiaImage})` }}>
//     <div className={styles.itemDesc}>
//         <h3>Level 7: Tagline Mania</h3>
//         <p>Find the Honda application related term jumpled in each</p>
//         <a href="GOT.html">Click here</a>
//     </div>
// </div>
// <div className={styles.item} style={{ backgroundImage: `url(${moneyHeistImage})` }}>
//     <div className={styles.itemDesc}>
//         <h3>Level 8: Money Heist</h3>
//         <p>Find the Honda application related term jumpled in each</p>
//         <a href="GOT.html">Click here</a>
//     </div>
// </div>
// <div className={styles.item} style={{ backgroundImage: `url(${testDrive2Image})` }}>
//     <div className={styles.itemDesc}>
//         <h3>Level 9: Test Drive: Part-2</h3>
//         <p>Find the Honda application related term jumpled in each</p>
//         <a href="GOT.html">Click here</a>
//     </div>
// </div>
// <div className={styles.item} style={{ backgroundImage: `url(${angryBirdsImage})` }}>
//     <div className={styles.itemDesc}>
//         <h3>Level 10: Angry Birds</h3>
//         <p>Find the Honda application related term jumpled in each</p>
//         <a href="GOT.html">Click here</a>
//     </div>
// </div>
// <div className={styles.item} style={{ backgroundImage: `url(${findTheFlowImage})` }}>
//     <div className={styles.itemDesc}>
//         <h3>Level 11: Find the Flow</h3>
//         <p>Find the Honda application related term jumpled in each</p>
//         <a href="GOT.html">Click here</a>
//     </div>
// </div>
// <div className={styles.item} style={{ backgroundImage: `url(${superPowerDrainerImage})` }}>
//     <div className={styles.itemDesc}>
//         <h3>Level 12: Super Power Drainer</h3>
//         <p>Find the Honda application related term jumpled in each</p>
//         <a href="GOT.html">Click here</a>
//     </div>
// </div>
// <div className={styles.item} style={{ backgroundImage: `url(${cricketImage})` }}>
//     <div className={styles.itemDesc}>
//         <h3>Level 13: Cricket with Honda KITE</h3>
//         <p>Find the Honda application related term jumpled in each</p>
//         <a href="GOT.html">Click here</a>
//     </div>
// </div>
// <div className={styles.item} style={{ backgroundImage: `url(${spaceQuestImage})` }}>
//     <div className={styles.itemDesc}>
//         <h3>Level 14: Space Quest</h3>
//         <p>Find the Honda application related term jumpled in each</p>
//         <a href="GOT.html">Click here</a>
//     </div>
// </div>
// <div className={styles.item} style={{ backgroundImage: `url(${wordleImage})` }}>
//     <div className={styles.itemDesc}>
//         <h3>Level 15: Wordle</h3>
//         <p>Find the Honda application related term jumpled in each</p>
//         <a href="GOT.html">Click here</a>
//     </div>
// </div>
// <div className={styles.item} style={{ backgroundImage: `url(${brainBrawlImage})` }}>
//     <div className={styles.itemDesc}>
//         <h3>Level 16: Brain Brawl</h3>
//         <p>Find the Honda application related term jumpled in each</p>
//         <a href="GOT.html">Click here</a>
//     </div>
// </div>
// <div className={styles.item} style={{ backgroundImage: `url(${pedalToVictoryImage})` }}>
//     <div className={styles.itemDesc}>
//         <h3>Level 17: Pedal to Victory</h3>
//         <p>Find the Honda application related term jumpled in each</p>
//         <a href="GOT.html">Click here</a>
//     </div>
// </div>
// <div className={styles.item} style={{ backgroundImage: `url(${aceOfOdditiesImage})` }}>
//     <div className={styles.itemDesc}>
//         <h3>Level 18: Ace of Oddities</h3>
//         <p>Find the Honda application related term jumpled in each</p>
//         <a href="GOT.html">Click here</a>
//     </div>
// </div>

//                     </div>
//                 </section>

//                 {/* ... other sections ... */}

//                 {/* partial */}
//                 <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
//                 <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
//                 <script src="./Fuelup.js"></script>
//             </body>
//         </html>
//     );
// };

// export default FuelUp;

import React from 'react';
import styles from './Fuelup.module.css'; // Import the CSS module
import amongUsImg from '../../img/among-us-button-fin-1608054673652.jpg';
import HondaSymbol from "../../images/Honda Symbol H.png";
import HondaPowerOfDreams from "../../images/Honda-PowerOfDreams-Symbol.png";
import TestDrive from '../../img/Test-Drive.jpg';
import gotImage from '../../img/GOT.jpg';
import scavengerImage from '../../img/Scavenger.png';
import whoAmIImage from '../../img/who-am-i.png';
import taglineManiaImage from '../../img/Tagline-Mania.jpg';
import moneyHeistImage from '../../img/MoneyHeist.jpg';
import testDrive2Image from '../../img/TestDrive2.jpg';
import angryBirdsImage from '../../img/AngryBirds.jpg';
import findTheFlowImage from '../../img/FindTheFlow.jpg';
import superPowerDrainerImage from '../../img/SuperPowerDrainer.jpg';
import cricketImage from '../../img/Cricket.jpg';
import spaceQuestImage from '../../img/SpaceQuest.jpg';
import wordleImage from '../../img/Wordle.jpg';
import brainBrawlImage from '../../img/BrainBrawl.jpg';
import pedalToVictoryImage from '../../img/PedalToVictory.jpg';
import aceOfOdditiesImage from '../../img/AceOfOddities.jpg';
import { Link } from 'react-router-dom';

const FuelUp = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>CarServ - Car Repair HTML Template</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <link rel="icon" href="img/favicon.ico" />
      </head>
      <body>
        {/* Navbar Start */}
        <nav className={`navbar navbar-expand-lg navbar-light shadow sticky-top p-0 ${styles.navbar}`} style={{ height: '75px' }}>
          <a href="../index2.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <img className={styles.logos} src={HondaSymbol} alt="Symbol" id="hondaSymbol" />
            <img className={styles.logos} src={HondaPowerOfDreams} alt="Symbol" height="110%" width="60%" />
          </a>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
              <Link to="/" className="nav-item nav-link">
                HOME
              </Link>
              <div className="nav-item dropdown">
                <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  Quick Links
                </a>
                <div className="dropdown-menu fade-up m-0">
                  <a href="./ktvideo/ktvideo.html" className="dropdown-item">
                    KtVideos
                  </a>
                  <a href="./bcamp/elearn.html" className="dropdown-item">
                    eLearning
                  </a>
                  <a href="./pages/askKITE.html" className="dropdown-item">
                    Ask KITE
                  </a>
                  <a href="https://cognizantonline.sharepoint.com/sites/kha-honda" className="dropdown-item">
                    Know Hub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Navbar End */}

        <h2 className={styles.lineTitle}>MONDAY FUELUP</h2>

        <section className={styles.gameSection}>
          {/* <div className=" owl-theme "> */}
          <div className={`${styles.owlStage}  owl-carousel custom-carousel`}>
            <div className={`${styles.item} active`} style={{ backgroundImage: `url(${amongUsImg})` }}>
              <div className={styles.itemDesc}>
                <h3>Level 0: Among US</h3>
                <p>Identify the imposter among the Honda models</p>
                <a href="Among US.html">Click here</a>
              </div>
            </div>
            <div className={styles.item} style={{ backgroundImage: `url(${TestDrive})` }}>
              <div className={styles.itemDesc}>
                <h3>Level 1: Test Drive</h3>
                <p>Let's do some brainstorming at pitstops</p>
                <a href="Test drive.html">Click here</a>
              </div>
            </div>
            {/* <div className={styles.item} style={{ backgroundImage: `url(${gotImage})` }}>
              <div className={styles.itemDesc}>
                <h3>Level 2: GOT: Game Of Terms</h3>
                <p>Find the Honda application related term jumpled in each</p>
                <a href="GOT.html">Click here</a>
              </div>
            </div>
            <div className={styles.item} style={{ backgroundImage: `url(${scavengerImage})` }}>
              <div className={styles.itemDesc}>
                <h3>Level 3: Scavenger Hunt</h3>
                <p>Hunt the pictures and connect with the Honda Terms</p>
                <a href="Scavenger.html">Click here</a>
              </div>
            </div> */}

            {/* <div className={styles.item} style={{ backgroundImage: `url(${taglineManiaImage})` }}>
              <div className={styles.itemDesc}>
                <h3>Level 7: Tagline Mania</h3>
                <p>Find the Honda application related term jumpled in each</p>
                <a href="GOT.html">Click here</a>
              </div>
            </div>
            <div className={styles.item} style={{ backgroundImage: `url(${moneyHeistImage})` }}>
              <div className={styles.itemDesc}>
                <h3>Level 8: Money Heist</h3>
                <p>Find the Honda application related term jumpled in each</p>
                <a href="GOT.html">Click here</a>
              </div>
            </div>
            <div className={styles.item} style={{ backgroundImage: `url(${testDrive2Image})` }}>
              <div className={styles.itemDesc}>
                <h3>Level 9: Test Drive: Part-2</h3>
                <p>Find the Honda application related term jumpled in each</p>
                <a href="GOT.html">Click here</a>
              </div>
            </div>
            <div className={styles.item} style={{ backgroundImage: `url(${angryBirdsImage})` }}>
              <div className={styles.itemDesc}>
                <h3>Level 10: Angry Birds</h3>
                <p>Find the Honda application related term jumpled in each</p>
                <a href="GOT.html">Click here</a>
              </div>
            </div>
            <div className={styles.item} style={{ backgroundImage: `url(${findTheFlowImage})` }}>
              <div className={styles.itemDesc}>
                <h3>Level 11: Find the Flow</h3>
                <p>Find the Honda application related term jumpled in each</p>
                <a href="GOT.html">Click here</a>
              </div>
            </div>
            <div className={styles.item} style={{ backgroundImage: `url(${superPowerDrainerImage})` }}>
              <div className={styles.itemDesc}>
                <h3>Level 12: Super Power Drainer</h3>
                <p>Find the Honda application related term jumpled in each</p>
                <a href="GOT.html">Click here</a>
              </div>
            </div>
            <div className={styles.item} style={{ backgroundImage: `url(${cricketImage})` }}>
              <div className={styles.itemDesc}>
                <h3>Level 13: Cricket with Honda KITE</h3>
                <p>Find the Honda application related term jumpled in each</p>
                <a href="GOT.html">Click here</a>
              </div>
            </div>
            <div className={styles.item} style={{ backgroundImage: `url(${spaceQuestImage})` }}>
              <div className={styles.itemDesc}>
                <h3>Level 14: Space Quest</h3>
                <p>Find the Honda application related term jumpled in each</p>
                <a href="GOT.html">Click here</a>
              </div>
            </div>
            <div className={styles.item} style={{ backgroundImage: `url(${wordleImage})` }}>
              <div className={styles.itemDesc}>
                <h3>Level 15: Wordle</h3>
                <p>Find the Honda application related term jumpled in each</p>
                <a href="GOT.html">Click here</a>
              </div>
            </div>
            <div className={styles.item} style={{ backgroundImage: `url(${brainBrawlImage})` }}>
              <div className={styles.itemDesc}>
                <h3>Level 16: Brain Brawl</h3>
                <p>Find the Honda application related term jumpled in each</p>
                <a href="GOT.html">Click here</a>
              </div>
            </div>
            <div className={styles.item} style={{ backgroundImage: `url(${pedalToVictoryImage})` }}>
              <div className={styles.itemDesc}>
                <h3>Level 17: Pedal to Victory</h3>
                <p>Find the Honda application related term jumpled in each</p>
                <a href="GOT.html">Click here</a>
              </div>
            </div>
            <div className={styles.item} style={{ backgroundImage: `url(${aceOfOdditiesImage})` }}>
              <div className={styles.itemDesc}>
                <h3>Level 18: Ace of Oddities</h3>
                <p>Find the Honda application related term jumpled in each</p>
                <a href="GOT.html">Click here</a>
              </div>
            </div> */}

          </div>
        </section>

        {/* Additional sections or content as needed */}

      </body>
    </html>
  );
};

export default FuelUp;
