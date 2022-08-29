import { NavLink, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
    <h1>Assignment</h1>
    <ul>
      <li><NavLink to="/" style={({isActive})=>{return{backgroundColor: isActive ? 'grey': ''}}}>Home</NavLink></li>
      <li><NavLink to="/about" style={({isActive})=>{return{backgroundColor: isActive ? 'grey': ''}}}>About</NavLink></li>
      <li><NavLink to="/headtail" style={({isActive})=>{return{backgroundColor: isActive ? 'grey': ''}}}>Head and Tail</NavLink></li>
    </ul>
    <Outlet />
    </>
  );
};

export default Layout;