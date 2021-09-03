import React from 'react';

import HeaderButton from './HeaderFirstPart/HeaderButton/HeaderButton';
//import Aux from '../../hoc/Aux';
const HeaderButtonCall = (props) =>{
    console.log(props.data)
    const listbutton =props.data.arr.map((d) =>
         <HeaderButton>{d}</HeaderButton>
);
    return(
        listbutton   
);
}
export default HeaderButtonCall;