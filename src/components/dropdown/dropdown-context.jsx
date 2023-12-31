import { useContext, createContext } from 'react';

const DropdownContext = createContext();

function DropdownProvider(props) {
  return <DropdownContext.Provider {...props}></DropdownContext.Provider>;
}
function useDropdown() {
  const context = useContext(DropdownContext);
  if (typeof context === 'undefined') {
    throw new Error('useDropdown must be used within DropdownProvider');
  }
  return context;
}

export { useDropdown, DropdownProvider };
