import React,{ Component } from "react";

class Header extends Component {
    
   render ()
   {
       return(
       <div className="Header" style={{"height":100}}>
       <h1>Clicky Game</h1>
       <h2>Click on an image to earn points, but don't click on any more than once!</h2>
       </div>

   );
}
}   
export default Header;