import React from 'react';

import CardPage from '../CardPage/CardPage';

const AccountList = ({currentAccList}) => {
    return(
        <CardPage context="list" currentAccList={currentAccList}/>
    );
}
export default AccountList;