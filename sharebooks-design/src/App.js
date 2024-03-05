import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppHeader from './components/Header.jsx';
import AppFooter from './components/Footer';
import HomePage from './pages/HomePage';
import ContactsPage from './pages/Contacts';
import FAQPage from './pages/FAQ';
import SuccessPage from './pages/SuccessPage';
import LogIn from './components/logIn';
import Marketplace from './pages/marketplace.jsx';
import Registration from './components/Registration.jsx';
import ProfilUser from './pages/ProfilUser.jsx';
import PersonalLibrary from './pages/PersonalLibrary.jsx';
import Settings from './pages/Settings.jsx';
import BookReadingPage from './pages/ReadingPage.jsx';
import PurchasePage from './pages/PurchasePage.jsx';
function App() {
  return (
    <BrowserRouter>
     <div className="App">
        <AppHeader />
      <div className="content-with-fixed-header">
      <Routes>
      <Route index element={<HomePage />}> 
        {/* <Route path="/about" element={<AboutPage />} /> */}
       </Route>
        {/* <Route path="/" element={<AppHeader />} /> */}
        {/* другие маршруты */}
        <Route path='contacts/' element={<ContactsPage/>}>

        </Route>

        <Route path='FAQ/' element={<FAQPage/>}> </Route>
        <Route path='login/' element={<LogIn/>}></Route>
        <Route path='Registration/' element={<Registration/>}></Route>
        <Route path='SuccessPage/' element={<SuccessPage/>}></Route>
        <Route path='ProfilUser/' element={<ProfilUser/>}></Route>
        <Route path='PersonalLibrary/' element={<PersonalLibrary/>}></Route>
        <Route path='Marketplace/' element={<Marketplace/>}></Route>
        <Route path='Settings/' element={<Settings/>}></Route>
        <Route path='Reading/' element={<BookReadingPage/>}></Route>
        <Route path='Purchase/' element={<PurchasePage/>}></Route>
      </Routes>
      </div>
      <AppFooter />
      </div>
    </BrowserRouter>
  );
}


export default App;

