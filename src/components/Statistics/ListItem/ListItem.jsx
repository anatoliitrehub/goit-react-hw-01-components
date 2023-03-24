import PropTypes from 'prop-types';
import {ListItemStyled,Label, Percentage} from './ListItem.styled';

const ListItem = ({id,label,percentage}) =>{
return(
<>
<ListItemStyled key={id}>
<Label>{label}</Label>
<Percentage>{percentage}%</Percentage>
     
   
</ListItemStyled>
</>
)
};

ListItem.propTypes = {
    id:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    percentage:PropTypes.number.isRequired
}



export default ListItem;