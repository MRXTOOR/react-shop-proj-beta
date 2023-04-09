import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react"
import Items from "./components/Items"

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      items: [
        {
         title: "PS2",
        img: "https://i.pinimg.com/originals/56/2b/e3/562be3b5af643a600f9070766c7bb82b.gif",
        desc: "Dignissimos cum qui quibusdam reiciendis velit cumque eum doloremque. Similique corporis facere repudiandae fugit aliquid earum recusandae cumque. In labore corporis nemo ducimus praesentium. Nulla deleniti et accusamus accusantium. Aliquid sint voluptate unde voluptate.",
        category: "category 1",
         price: "461.00",
         id: 1
        },
        {
         title: "PS1",
         img: "https://i.pinimg.com/originals/d2/65/3f/d2653f4a73404a7c7eeef29f1b4c1fa4.gif",

         desc: "sequi",
         category: "category 2",
         price: "577.00",
         id: 2
        },
        {
         title: "Game Cube",
         img: "https://i.pinimg.com/originals/5b/c1/18/5bc118209cd1f969d3da113ad6381cc6.gif",
         desc: "Dignissimos cum qui quibusdam reiciendis velit cumque eum doloremque. Similique corporis facere repudiandae fugit aliquid earum recusandae cumque. In labore corporis nemo ducimus praesentium. Nulla deleniti et accusamus accusantium. Aliquid sint voluptate unde voluptate.",
         category: "category 3",
         price: "996.00",
         id: 3
        },
        {
         title: "Gameboy",
         img: "https://i.pinimg.com/originals/1b/1e/f9/1b1ef9ca50499b5246ca48cb97375ded.gif",

         desc: "Aliquid omnis vitae ullam dolorum.",
         category: "category 4",
         price: "886.00",
         id: 4
        }
        ,
        {
         title: "Atari 2600",
         img: "https://i.pinimg.com/originals/ec/19/e4/ec19e4a8260925b7c849477d0ca8b26b.gif",

         desc: "Aliquid omnis vitae ullam dolorum.",
         category: "category 4",
         price: "616.00",
         id: 5
        }
        ,
        {
         title: "My custom",
         img: "https://i.pinimg.com/564x/73/a9/b9/73a9b9ad0723dc7963ff800569bcfe8d.jpg",

         desc: "Aliquid omnis vitae ullam dolorum.",
         category: "category 4",
         price: "116.00",
         id: 5
        }
       ]
    }
  }
  render(){

  return (
    <div className="wrapper">
      <Header />
      <Items items={this.state.items} />
      <Footer/>
   
    </div>
    

  );
}
}

export default App;
