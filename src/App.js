import  Header from './component/Header';
import './App.css';
import Balance from './component/Balance';
import IncomeExesice from './component/IncomeExesice';
import TrangitionComponent from './component/TrangitionComponent';
import AddTransition from './component/AddTrangition';
import {GlobalProvider} from './context/GlobleState'


function App() {



  
  return (
    <GlobalProvider >
      <div className="App">
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExesice/>
        <TrangitionComponent />
        <AddTransition/>
      </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
