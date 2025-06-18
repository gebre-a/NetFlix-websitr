import React from 'react';
import "./header.css";
import NetFlixLogo from "../../images/NetflixLogo.png";
import SearchIcon from '@mui/icons-material/Search';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import Person4Icon from '@mui/icons-material/Person4';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import NetflixLogo from "../../images/NetflixLogo.png"

const Header = () => {
  return (
    <div className='outer-header'>
        <div className='header-container'>
            <div className='header-left'>
                <ul>
                  {/* <li> <image src = {NetFlixLogo} alt = ""></image></li> */}
                  <li><img src={NetFlixLogo} alt="Netflix Logo" width="100" /></li>
                    {/* <li>netflix</li> */}
                    <li>Home</li>
                    <li>tvshow</li>
                    <li>movies</li>
                    <li>latest</li>
                    <li>my list</li>
                    <li>browse by language</li>
                </ul>
            </div>
            <div className='header_right'>
                  <ul>
                    {/* <li><SearchIcon>/</li> */}
                    <li><SearchIcon /></li>
                    <li><CircleNotificationsIcon /></li>
                    <li><Person4Icon /></li>
                    <li><ArrowDropDownIcon /></li>


                

                </ul>
              </div>
        </div>
    </div>
  )
}

export default Header