import PropTypes from 'prop-types';
import { ProfileStyled, Description, Avatar, Name, Tag, Location, Stats, StatsItem, Label, Quantity } from "./Profile.styled";

const Profile = ({username,tag,location,avatar,stats}) => {
    return(
      <>
      <ProfileStyled>
        <Description>
          <Avatar 
            src={avatar}
            alt={tag}
          />      
          <Name>{username}</Name>
     
          <Tag>@{tag}</Tag>
          <Location>{location}</Location>
        </Description>
  
      <Stats>
        {Object.keys(stats).map((key,ind)=>{
           return(
            <>
            <StatsItem key={Math.random()}>
            <Label>{key}</Label>
            <Quantity>{stats[key]}</Quantity>
            </StatsItem>
            </>
            )
          })}
      </Stats>
  </ProfileStyled>
  </>
 )
}

Profile.propTypes = {
  username:PropTypes.string.isRequired,
  tag:PropTypes.string.isRequired,
  location:PropTypes.string.isRequired,
  avatar:PropTypes.string.isRequired,
  stats:PropTypes.object.isRequired
}


export default Profile;