import React, {Component} from "react";
import {connect} from "react-redux";
import { Menu,Avatar } from 'antd';
import { HomeOutlined, QuestionOutlined, BarsOutlined,LogoutOutlined } from '@ant-design/icons';
import {NavLink, withRouter} from "react-router-dom";
import {handleLogout} from "../actions/login";

class Nav extends Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });

        if(e.key === "logout"){
            this.logout()
        }
    };

    logout = () => {
        console.log("logout")
        const {dispatch} = this.props
        dispatch(handleLogout())
        this.props.history.push('/home')
    }

    render() {

        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="brand" disabled={true} className='brand'>
                    Would you rather?
                </Menu.Item>
                <Menu.Item key="home">
                    <NavLink to='/home' exact><HomeOutlined />Home</NavLink>
                </Menu.Item>
                <Menu.Item key="new">
                    <NavLink to='/add' exact><QuestionOutlined />New Question</NavLink>
                </Menu.Item>
                <Menu.Item key="leaderboard">
                    <NavLink to='/leaderboard' exact> <BarsOutlined />Leader Board</NavLink>
                </Menu.Item>
                <Menu.Item key="logout" style={{float: 'right'}}>
                    <NavLink to='/logout' exact> <LogoutOutlined /> Logout</NavLink>
                </Menu.Item>
                <Menu.Item key="loggedin" style={{float: 'right'}}>
                    {this.props.loggedInUser.name} <Avatar size="small" src={this.props.loggedInUser.avatarURL} />
                </Menu.Item>


            </Menu>
        )

    }


}
function mapStateToProps({loggedInUser}) {

    return {
        loggedInUser
    }

}


export default withRouter(connect(mapStateToProps)(Nav))
