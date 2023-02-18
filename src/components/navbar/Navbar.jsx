import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import './navbar.css'
function Navbar() {
  return (
    <div className="navbar">
		<div className="wrapper">
		<div className="search">
			<input type="text" placeholder="Buscar . . ."/>
			<SearchOutlinedIcon/>
		</div>
		<div className="items">
			<div className="item">
			<NotificationsNoneOutlinedIcon className="icon" />
			<div className="counter">2</div>
			</div>
			<div className="item">
				<img src="https://cdn.esquimaltmfrc.com/wp-content/uploads/2015/09/flat-faces-icons-circle-man-6.png" width={'30px'} height={'30px'} className='avatar' alt="" />
			</div>
		</div>
		</div>
	</div>
  )
}

export {Navbar}