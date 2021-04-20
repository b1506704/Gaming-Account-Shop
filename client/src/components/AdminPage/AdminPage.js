import React from 'react';

import NavBar from '../NavBar/NavBar';
import HeadingTitle from '../HeadingTitle/HeadingTitle';
// import EditAccountCategory from '../EditAccountCategory/EditAccountCategory';
import EditAccountList from '../EditAccountList/EditAccountList';
import Footer from '../Footer/Footer';
import './AdminPage.css';

const AdminPage = ({userName}) => {
    return(
        <div>
            <NavBar userName={userName} userMode="admin"/>
            <HeadingTitle title="Admin Panel" subtitle="Trang quản lý cơ sở dữ liệu"/>
            {/* <EditAccountCategory/> */}
            <EditAccountList/>
            <Footer/>
        </div>
    );
}
export default AdminPage;