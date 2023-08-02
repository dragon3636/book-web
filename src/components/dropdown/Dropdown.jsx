import { useState } from 'react';
import { DropdownProvider } from './dropdown-context';
const Dropdown = ({ children }) => {
    const [isShowDropdown, setIsShowDropdown] = useState(false);
    const handleToggleDropdown = () => {
        setIsShowDropdown(!isShowDropdown);
    }
    const value = { handleToggleDropdown, isShowDropdown };

    return (
        <DropdownProvider value={value}>
            <div className='w-full max-w-[300px] relative'>{children}</div>
        </DropdownProvider>
    );
};

export default Dropdown;