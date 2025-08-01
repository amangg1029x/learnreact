import Header from "./header.jsx"
import Footer from "./footer.jsx"
import Food from "./food.jsx";
import Card from "./card.jsx";
import Form from "./form.jsx";
import Value from "./ValuePasser.jsx";
import Api from "./api.jsx";
import { Routes , Route, Link } from "react-router-dom";
import UserContext, { DataContext } from "./userConext.jsx";
import { useContext } from "react";


function App() {
    
  const data = useContext(DataContext);
  console.log(data);

  const People = [
    {
      "image": "https://randomuser.me/api/portraits/women/1.jpg",
      "name": "Swati Gupta",
      "role": "Frontend Developer"
    },
    {
      "image": "https://randomuser.me/api/portraits/men/2.jpg",
      "name": "Rahul Mehra",
      "role": "Backend Developer"
    },
    {
      "image": "https://randomuser.me/api/portraits/women/3.jpg",
      "name": "Ayesha Khan",
      "role": "UI/UX Designer"
    },
    {
      "image": "https://randomuser.me/api/portraits/men/4.jpg",
      "name": "Vikram Sharma",
      "role": "DevOps Engineer"
    },
    {
      "image": "https://randomuser.me/api/portraits/women/5.jpg",
      "name": "Neha Verma",
      "role": "Product Manager"
    }
  ]

    return (
      <>
      <Header></Header> 
      <Routes>
        <Route path="/" element = {<>
          
      {
      People.map(function(elem, idx){
        return <Card key = {idx} img = {elem.image} name  = {elem.name} role = {elem.role}></Card>
      })
      }
      <Food></Food>
      <p>Mai hoon {data}</p>
      <Form></Form>
      <UserContext>
        <Footer></Footer>
      </UserContext>
      <a href="/api"><button>Get Api</button></a>
       </>} />
        

        <Route path = "/api" element = {
          //Link is same as <a> tag but it prevents reloading the site
          <>
            <Api></Api>
            
            <Link to = "/" className="m-100">Card</Link>
          </>
        }></Route>
      </Routes>

      
      </>
    );
}
export default App
