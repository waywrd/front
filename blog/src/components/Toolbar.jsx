import React from 'react'
import '../styles/toolbar.css'
import DrawerToggleButton from '../components/SideDrawer/DrawerToggleButton'

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div><DrawerToggleButton /></div>
            <div className="toolbar_logo"><a href="/">THE LOGO</a></div>
            <div className="spacer"></div>
            <div className="toolbar_navigation_items">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/userinfo">UserInfo</a></li>
                </ul>
            </div>
        </nav>
    </header>
)

export default toolbar;