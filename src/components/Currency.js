import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { dispatch } = useContext(AppContext);

  const changeCurency = (val) => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: val,
    })
  }

  const mystyle = {
    backgroundColor: 'lightgreen',
    fontWeight: 'bold',
    color: '#013208',
    width: '100%'
  };

  return (

    <div className='alert alert-success' style={mystyle}>
      <div className='alert-success' >

        Currency {
          <select name="Currency" id="Currency" onChange={event => changeCurency(event.target.value)}
            className="selectpicker border-0" style={mystyle}>
            <option value="$" >$ Dollar</option>
            <option value="£" >£ Pound</option>
            <option value="€" >€ Euro</option>
            <option value="₹" >₹ Rupee</option>
          </select>
        }
      </div>
    </div >
  )
}

export default Currency;