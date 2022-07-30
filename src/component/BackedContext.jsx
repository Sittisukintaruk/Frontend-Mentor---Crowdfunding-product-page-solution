import React, { createContext, useState, useEffect } from "react";
import content from "../content";

const BackedContext = createContext();

export const BackedProvider = ({ children }) => {
  const [backed, setBacked] = useState(37850);
  const [total, setTotal] = useState(5007);
  const [contents, setContents] = useState(content);
  const [overlay, setOverlay] = useState(false);
  const [popup, setPopup] = useState(false);
  const [select, setSelect] = useState(0);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    return () => {
      return "";
    };
  }, [select]);

  const setSelectBychose = (input) => {
    setSelect(input);
  };

  const setBackedByinput = (value) => {
    setBacked(backed + value);
  };

  const setToggleMenu = () => {
    setOverlay(!overlay);
  };

  const setToggleNavbar = () => {
    setMenu(!menu);
  };

  const setTogglePopup = () => {
    setPopup(!popup);
  };

  const setContentsbyInput = (input, pledge, id) => {
    //input value >>
    const newobj = contents?.map((obj) => {
      if (obj.id === id) {
        let sum = input / pledge;
        if (obj.left < Math.floor(sum)) {
          alert(`only ${obj.left} left need ${obj.left * pledge}$ to buy`);
          return { ...obj };
        }
        let newleft = obj.left - Math.floor(sum);
        let newtotal = obj.left - newleft;
        setTotal(total + newtotal);
        return { ...obj, left: newleft };
      }
      return obj;
    });
    setBacked(backed - input);
    setContents(newobj);
  };

  return (
    <BackedContext.Provider
      value={{
        backed,
        setBackedByinput,
        total,
        setTotal,
        contents,
        overlay,
        setToggleMenu,
        select,
        setSelectBychose,
        setContentsbyInput,
        setTogglePopup,
        popup,
        menu,
        setToggleNavbar,
      }}
    >
      {children}
    </BackedContext.Provider>
  );
};

export default BackedContext;
