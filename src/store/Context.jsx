import { createContext, useState } from "react"
export const myContext = createContext({
    city : '',
    settingCity : () => {},
});
const ContextProvider = (props) => {
    const [city , setCity] = useState('Aleppo');
    const contextValue  = {
        city,
        settingCity,
    };
    function settingCity (city) {
        setCity(city);
    }
    return <myContext.Provider value={contextValue}>{props.children}</myContext.Provider>
}
export default ContextProvider;