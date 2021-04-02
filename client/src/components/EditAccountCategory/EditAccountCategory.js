import React from 'react';

import CardPage from '../CardPage/CardPage';

const EditAccountCategory = ({setCurrentCategoryList}) => {
    return(
        <CardPage context="edit_category" setCurrentCategoryList={setCurrentCategoryList}/>
    );
}
export default EditAccountCategory;