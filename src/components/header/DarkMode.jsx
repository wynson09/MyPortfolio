import React, { useEffect} from "react";
import { ReactComponent as Sun } from "../../assets/Sun.svg";
import { ReactComponent as Moon } from "../../assets/Moon.svg";
import "./DarkMode.css";

const DarkMode = ({themeStatus}) => {
    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light');
        localStorage.darkMode = false;
    }
    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark');
        localStorage.darkMode = true;
    }

    useEffect(() => {
        if(localStorage.darkMode === 'true') {
            setDarkMode();
            themeStatus(true);
        }
    },[themeStatus])
    
    
    const toggleTheme = e => {
        if(e.target.checked){
            setDarkMode();
            themeStatus(true);
        }
        else {
            setLightMode();
            themeStatus(false);
        }
    }
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
                defaultChecked={localStorage.darkMode === 'true'}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
