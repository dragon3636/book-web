import { useDropdown } from './dropdown-context';
import IconArrowDown from './IconArrowDown';
import IconArrowUp from './IconArrowUp';

const Select = ({ children }) => {
    const { handleToggleDropdown, isShowDropdown } = useDropdown();

    return (
        <div className='flex items-center justify-between p-5 rounded-lg cursor-pointer border border-slate-100' onClick={handleToggleDropdown}>
            {children}
            {isShowDropdown ? <IconArrowUp></IconArrowUp> : <IconArrowDown></IconArrowDown> }
        </div>
    );
};

export default Select;