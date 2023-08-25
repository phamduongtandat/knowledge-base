import { createContext, useState } from "react";
const AddPopupContext = createContext();

const AddPopupProvider = ({ children }) => {

    const [isOpenAdd, setIsOpenAdd] = useState(0)
    return (
        <AddPopupContext.Provider value={[isOpenAdd, setIsOpenAdd]}>
            {children}
        </AddPopupContext.Provider>
    )
};
export { AddPopupContext, AddPopupProvider }