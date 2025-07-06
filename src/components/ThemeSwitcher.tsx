import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeSwitcher() {
    const { theme, toggleTheme } = useTheme();
    return (
        <button onClick={toggleTheme} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded">
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
    )
};