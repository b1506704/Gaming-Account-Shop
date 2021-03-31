import React from 'react';

import CardPage from '../CardPage/CardPage';

const EditAccountList = ({currentAccList, setCurrentAccList}) => {
    return(
        <CardPage context="edit_list" currentAccList={currentAccList} setCurrentAccList={setCurrentAccList}/>
    );
}
export default EditAccountList;