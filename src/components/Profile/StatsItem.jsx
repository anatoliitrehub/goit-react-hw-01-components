import PropTypes from 'prop-types';
import { Label,Quantity } from "./Profile.styled";

const StatsItem = ({label,quantity}) => {
    return(
        <>
      <Label>{label}</Label>
      <Quantity>{quantity}</Quantity>
        </>
    )
}

StatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
}

export default StatsItem;