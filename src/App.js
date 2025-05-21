import './App.css';
import { AllRoutes } from './routes/AllRoutes';
import { Header,Footer } from './components';
function App() {
  return (
    <div className="App">
      {/* <h1 className='text-xl'>hello world</h1> */}
      <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
