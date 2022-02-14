import Nav from './component/Nav';
import Main from './component/Main';
import Footer from './component/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
          <Nav />
      </header>

      <main>
        <div className="container-xxl">
          <div className="row" id="main-content">
            <div className="col-md-2 border">
            </div>
            <div className="col" >
              <Main />
            </div>
            <div className='col-md-2 border'>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="container-xxl" >
          <div className="row border pt-2" id="footer-content">
            <Footer />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
