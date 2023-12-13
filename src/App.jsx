import Logo from "./assets/logo.png";
import "./App.css";

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Logo" className="banner-logo" />
      <div className="banner-title">Meta Psychic Reader</div>
    </header>
  );
};

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>Book Online</li>
        <li>Services</li>
      </ul>
      <ul>
        <li>metapsychicreader@gmail.com</li>
        <li>
          <span className="material-icons">place</span>
        </li>
        <li>
          <span className="material-icons yellow">account_circle</span>
        </li>
        <li>Log In</li>
      </ul>
    </nav>
  );
};

const ChatButton = () => {
  return (
    <div className="chat-button">
      <span className="material-icons">chat</span>
      <div className="chat-button-text">Let&apos;s Chat!</div>
    </div>
  );
};

const Main = () => {
  return (
    <main>
      <div className="shade"></div>
      <div className="main-content">
        <div className="main-title">
          META PSYCHIC
          <br />
          SEE&apos;S ALL - TELL&apos;S ALL
        </div>
        <div className="main-subtitle">READING&apos;S BY : ARIA</div>
        <div className="main-subtitle">
          You Have A Question?
          <br />I KNOW THE ANSWER&apos;S!
        </div>
      </div>
    </main>
  );
};

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Main />
      <ChatButton />
    </>
  );
}

export default App;
