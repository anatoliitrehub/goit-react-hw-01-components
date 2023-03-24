
import PropTypes from 'prop-types';
import { StatisticsStyled, Title, StatList } from './Statystic.styled';
import ListItem from './ListItem/ListItem'

const Statistics = ({title,data}) => {
return(
    <>
    <StatisticsStyled>
    {title ? <Title>{title}</Title> : <Title>No title</Title>}
  
  <StatList>
  {data.map(el=>{
    const {id,label,percentage} = el
    return(
    <ListItem id={id} label={label} percentage={percentage}/>
    )
  })}
  
    
    </StatList>

</StatisticsStyled>
    </>
)
}

Statistics.propTypes = {
title: PropTypes.string,
data: PropTypes.array.isRequired
};



export default Statistics;
