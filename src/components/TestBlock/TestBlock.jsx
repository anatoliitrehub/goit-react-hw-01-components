

import { Description, Avatar, Name } from "./TestBlock.styled";

const TestBlock = ({username}) => {
   
    return(
        <>
<Description>
  <Avatar  />      
  <Name>{username}</Name>\
     
  </Description>
  </>
 )
}

export default TestBlock;