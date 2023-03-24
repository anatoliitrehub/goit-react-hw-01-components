import PropTypes from 'prop-types';
import s from './Transactionhistory.module.css'
import TransactionItem from './TransactionItem/TransactionItem';

const TransactionHistory =({items}) => {
    return(
<>
<table className={s.transactionHistory}>
  <thead>
    <tr className={s.head}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
<tbody>
  {items.map(el=>{
    const {id,type,amount,currency} = el;
    return(
        <TransactionItem key={id} type={type} amount={amount} currency={currency} />
    )
  })}
</tbody>
  
</table>
</>
    )
}

TransactionHistory.propsTypes = {
    items:PropTypes.object.isRequired
}

export default TransactionHistory;