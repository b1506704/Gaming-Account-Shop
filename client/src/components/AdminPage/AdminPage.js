import React, { useEffect } from 'react';

import NavBar from '../NavBar/NavBar';
import HeadingTitle from '../HeadingTitle/HeadingTitle';
import EditAccountCategory from '../EditAccountCategory/EditAccountCategory';
import EditAccountList from '../EditAccountList/EditAccountList';
import EditCreditList from '../EditCreditList/EditCreditList';
import Footer from '../Footer/Footer';
import './AdminPage.css';

const AdminPage = ({userName, setCurrentAccList, setCurrentCardList}) => {
    return(
        <div>
            <NavBar userName={userName} userMode="admin"/>
            <HeadingTitle title="Admin Panel" subtitle="Trang quản lý cơ sở dữ liệu"/>
            <EditCreditList setCurrentCardList={setCurrentCardList}/>
            <EditAccountCategory/>
            <EditAccountList setCurrentAccList={setCurrentAccList}/>
            <Footer/>
        </div>
    );
}
export default AdminPage;