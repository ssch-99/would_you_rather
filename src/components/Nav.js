import React, {Component} from "react";
import {connect} from "react-redux";
import { Menu,Avatar } from 'antd';
import { HomeOutlined, AppstoreOutlined, QuestionOutlined, BarsOutlined,UserOutlined,LogoutOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
class Nav extends Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {

        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="brand" disabled={true} className='brand'>
                    Would you rather?
                </Menu.Item>
                <Menu.Item key="home">
                    <HomeOutlined />
                    Home
                </Menu.Item>
                <Menu.Item key="new">
                    <QuestionOutlined />
                    New Question
                </Menu.Item>
                <Menu.Item key="leaderboard">
                    <BarsOutlined />
                    Leader Board
                </Menu.Item>

                <Menu.Item key="loggedin">
                    Sascha <Avatar size="small" icon={<UserOutlined />} />
                </Menu.Item>

                <Menu.Item key="logout">
                    <LogoutOutlined />
                    Logout
                </Menu.Item>


            </Menu>
        )

    }


}

export default Nav
