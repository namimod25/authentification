import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoPerson, IoPricetag, IoHome, IoLogOut } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { LogOut, reset } from '../features/authSlice';

const Sidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    const logOut = () => {
        dispatch(LogOut());
        dispatch(reset());
        navigate("/");
    };

    return (
        <div>
            <aside className="menu pl-3 has-shadow">
                <p className="menu-label">General</p>
                <ul className="menu-list">
                    <NavLink to={"/dashboard"}><IoHome />Dashboard</NavLink>
                    <li>
                        <NavLink to={"/products"}><IoPricetag />Products</NavLink>
                    </li>
                </ul>
                {user && user.role === "admin" && (
                    <div>
                        <p className="menu-label">Admin</p>
                        <ul className="menu-list">
                            <li>
                                <NavLink to={"/users"}><IoPerson />Users</NavLink>
                            </li>

                        </ul>
                    </div>
                )}

                <p className="menu-label">Setting</p>
                <ul className="menu-list">
                    <li>
                        <button onClick={logOut} className='button is-white'><IoLogOut />Logout</button>
                    </li>
                </ul>
            </aside>
        </div>
    )
}

export default Sidebar