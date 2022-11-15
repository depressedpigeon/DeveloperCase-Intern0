// import '../src/fonts/Pixelar-Regular-W01-Regular.ttf';
// default export helps next.js to distinguish which components to render as main
import styled from 'styled-components';

// import Header from '../components/Header';


function Header() {
  return <header>
    <h1>My Inbox</h1>
    <p class="p-header">Redeem your packs</p>
  </header>;
}

function Navigation() {
  return <nav>
    <ul>
      <li>home</li>
      <li>store</li>
      <li>marketplace</li>
      <li>dexicon</li>
    </ul>
  </nav>
}

function Main() {
  return <main>
    <div class="div-notificationBox">
      <div class="div-picture">
        <img src="../src/images/starter.png" alt="Starter pack image" />
      </div>
      <div class="div-text">
        <h2>You recieved 4 new packs</h2>
        <p class="p-pack-name">Basic Beast Starter Pack</p>
        <p class="p-pack-price">USD $40.00</p>
      </div>
    </div>

    <div class="div-notificationBox">
      <div class="div-picture">
        <img src="./src/images/cursed.png" alt="Starter pack image" />
      </div>
      <div class="div-text">
        <h2>You recieved 2 new packs</h2>
        <p class="p-pack-name">Cursed Black Pack</p>
        <p class="p-pack-price">USD $600.00</p>
      </div>

    </div>
    <div class="div-notificationBox">
      <div class="div-picture">
        <img src="./src/images/shiny.png" alt="Starter pack image" />
      </div>
      <div class="div-text">
        <h2>You recieved 4 new packs</h2>
        <p class="p-pack-name">Basic Beast Starter Pack</p>
        <p class="p-pack-price">USD $40.00</p>
      </div>
    </div>

    {/* <div>
      <button>claim all</button>
    </div> */}

  </main>
}

// const Navigation = styled.nav`
//   color: var(--yellowText);
//   text-transform: uppercase;
//   text-align: center;
// `;

export default function HomePage() {

  function displayClaim() {
    // dislpay a message the the packages are claimed
  }

  return (
    <div>
      <Navigation />
      <Header />
      <Main />

      <button onClick={displayClaim}>claim all</button>
    </div>
  );
}
