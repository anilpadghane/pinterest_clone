
import './App.css';
import {Add, Chat, FavoriteRounded,  Notifications, Person, QuestionMark} from '@mui/icons-material'
import { useAuth0 } from "@auth0/auth0-react";
import MenuContainer from './component/MenuContainer';
import Pin from './component/Pin';
import { useEffect } from 'react';
import Data from './component/Data';

function App() {
  useEffect(()=>{
    const allIcon =document.querySelectorAll('.iconContainer')
   function setMenuActive(){
    allIcon.forEach((n)=>n.classList.remove("active"))
    this.classList.add('active')
    
   }

   allIcon.forEach(n=>n.addEventListener('click',setMenuActive))
  },[])
  const { loginWithRedirect,logout,isAuthenticated } = useAuth0()
  
  return (
    
   <div className="App" >
    
    <div className='menuContainer'>
      <img 
      src="https://thumbs.dreamstime.com/b/ap-initial-logo-company-name-colored-red-black-swoosh-design-isolated-white-background-vector-business-identity-199333196.jpg"
      alt=""
      className="logo"/>
      <div className="subMenu">
      <MenuContainer icon={<Person/>} />
      <MenuContainer icon={<Notifications/>}/>
      <MenuContainer icon={<Chat/>}/>
        <div>
          <MenuContainer icon={<FavoriteRounded/>}/>
        </div>
        <div>
        <MenuContainer icon={<QuestionMark/>}/>
        <MenuContainer icon={<Add/>}/>
        </div>
        {isAuthenticated ?(
          <>  <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Log Out
        </button></>
        ):(<><button onClick={() => loginWithRedirect()}>Log In</button></>)}
        

      </div>
    </div>
    <main>
      <div className='searchBox'>
        <input type='text' placeholder='Search here '/>
        <div className='search'>
          <img
          src='https://cdn-icons-png.flaticon.com/512/20/20710.png'
          alt=''
          />
        </div>
      </div>
      <div className='mainContainer'>
      {Data &&
            Data.map((data) => (
              <Pin
                key={data.id}
                pinSize={data.size}
                imgSrc={data.imgSrc}
                name={data.name}
                link={data.link}
              />
            ))}
     
      </div>
    </main>
  
   </div>
  );
}

export default App;
