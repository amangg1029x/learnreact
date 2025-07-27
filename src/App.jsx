import Header from "./header.jsx"
import Footer from "./footer.jsx"
import Food from "./food.jsx";
import Card from "./card.jsx";
import Form from "./form.jsx";
import Value from "./ValuePasser.jsx";
import Api from "./api.jsx";


function App() {
    
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
      {
      People.map(function(elem, idx){
        return <Card key = {idx} img = {elem.image} name  = {elem.name} role = {elem.role}></Card>
      })
      }
      <Food></Food>
      <Api></Api>
      <Form></Form>
      <Footer></Footer>
      </>
    );
}
export default App
