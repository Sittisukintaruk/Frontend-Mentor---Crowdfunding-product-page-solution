import React, { useContext, useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  InputPledge,
  ButtonGroup,
  CardTile,
  Inputarea,
  Form,
  H3gray,
  Cardtoper,
  Cardheader,
  Pledge,
  Mainpledge,
  AreaWarpper,
  Radio,
  RadioButton,
  Card,
  Body,
  NewMainpledge,
  Left,
  RightLeft,
  MobileLeft,
  DesktopLeft,
  CardContainer,
} from "../style/OverlayStyle";
import { Paragraphoverlay } from "../style/genaral/typography";
import { Button } from "../style/element/button";
import BackedContext from "./BackedContext";
import { setInputFilter } from "../common/Funtion";

const OverlayBody = () => {
  const [input, setInput] = useState(0);
  const {
    contents,
    select,
    setSelectBychose,
    setContentsbyInput,
    setTogglePopup,
  } = useContext(BackedContext);
  const look = useRef();

  useEffect(() => {
    if (look.current) {
      look.current.focus();
      setInputFilter(
        look.current,
        function (value) {
          return /^\d*\.?\d*$/.test(value); // Allow digits and '.' only, using a RegExp
        },
        "Only digits and '.' are allowed"
      );

      setInput(0);
    }

    return () => {};
  }, [select]);

  const handlerChage = (e) => {
    setInput(e.target.value);
  };

  const handlerClick = (pledge, id) => {
    if (input && input >= pledge) {
      setTogglePopup();
      setContentsbyInput(input, pledge, id);
    } else {
      return alert(`need $${pledge} or more to buy this`);
    }
  };

  return (
    <Body
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.4, delay: 0.4 }}
    >
      <Card
        as={motion.div}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 0.4, delay: 0.6 }}
        check={select === 0 ? true : false}
      >
        <Radio htmlFor="noreward">
          <input
            id="noreward"
            type="radio"
            checked={select === 0 ? true : false}
            onChange={() => {
              setSelectBychose(0);
            }}
            name="text"
          />
          <AreaWarpper>
            <Mainpledge>
              <RadioButton className="radio" />
              <CardTile>Pledge with no reward</CardTile>
            </Mainpledge>
            <Paragraphoverlay>
              Choose to support us without a reward if you simply believe in our
              project. As a backer, you will be signed up to receive product
              updates via email.
            </Paragraphoverlay>
          </AreaWarpper>
        </Radio>
      </Card>
      {contents.map(({ pledge, title, detaile, left, id }, index) =>
        left ? (
          <Card
            key={id}
            as={motion.div}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 0.4, delay: 0.8 }}
            check={select === id ? true : false}
          >
            <Radio htmlFor={id}>
              <input
                id={id}
                type="radio"
                name="text"
                checked={select === id ? true : false}
                onChange={() => {
                  setSelectBychose(id);
                }}
              />
              <AreaWarpper>
                <NewMainpledge>
                  <CardContainer>
                    <Cardtoper>
                      <RadioButton className="radio" />
                      <Cardheader>
                        <CardTile>{title}</CardTile>
                        <Pledge>Pledge ${pledge} or more</Pledge>
                      </Cardheader>
                    </Cardtoper>
                    <DesktopLeft>
                      <Left>{left} </Left>
                      <RightLeft>left</RightLeft>
                    </DesktopLeft>
                  </CardContainer>
                  <Paragraphoverlay>{detaile}</Paragraphoverlay>
                  <MobileLeft>
                    <Left>{left} </Left>
                    <RightLeft>left</RightLeft>
                  </MobileLeft>
                </NewMainpledge>
              </AreaWarpper>
            </Radio>
            <AnimatePresence>
              {select === id && (
                <Form
                  as={motion.form}
                  initial={{ opacity: 0, y: -20, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 120 }}
                  transition={{ ease: "easeOut", duration: 0.2 }}
                  exit={{ opacity: 0, y: 20, height: 0 }}
                  action=""
                >
                  <Inputarea>
                    <H3gray>Enter your pledge</H3gray>
                    <ButtonGroup>
                      <InputPledge>
                        <span>$</span>
                        <input
                          value={input}
                          maxLength={3}
                          onChange={handlerChage}
                          ref={look}
                          type="text"
                          required
                        />
                      </InputPledge>
                      <Button
                        type="submit"
                        small
                        onClick={(e) => {
                          e.preventDefault();
                          handlerClick(pledge, id);
                        }}
                      >
                        Continue
                      </Button>
                    </ButtonGroup>
                  </Inputarea>
                </Form>
              )}
            </AnimatePresence>
          </Card>
        ) : (
          <Card
            key={id}
            as={motion.div}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 0.4, delay: 0.8 }}
            check={select === id ? true : false}
            disabled
          >
            <Radio htmlFor={id}>
              <input
                id={id}
                type="radio"
                name="text"
                checked={select === id ? true : false}
                onChange={() => {
                  setSelectBychose(id);
                }}
              />
              <AreaWarpper>
                <NewMainpledge>
                  <CardContainer>
                    <Cardtoper>
                      <RadioButton className="radio" />
                      <Cardheader>
                        <CardTile>{title}</CardTile>
                        <Pledge>Pledge ${pledge} or more</Pledge>
                      </Cardheader>
                    </Cardtoper>
                    <DesktopLeft>
                      <Left>{left} </Left>
                      <RightLeft>left</RightLeft>
                    </DesktopLeft>
                  </CardContainer>
                  <Paragraphoverlay>{detaile}</Paragraphoverlay>
                  <MobileLeft>
                    <Left>{left} </Left>
                    <RightLeft>left</RightLeft>
                  </MobileLeft>
                </NewMainpledge>
              </AreaWarpper>
            </Radio>
            <AnimatePresence>
              {select === id && (
                <Form
                  as={motion.form}
                  initial={{ opacity: 0, y: -20, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 120 }}
                  transition={{ ease: "easeOut", duration: 0.2 }}
                  exit={{ opacity: 0, y: 20, height: 0 }}
                  action=""
                >
                  <Inputarea>
                    <H3gray>Enter your pledge</H3gray>
                    <ButtonGroup>
                      <InputPledge>
                        <span>$</span>
                        <input
                          value={input}
                          maxLength={3}
                          onChange={handlerChage}
                          ref={look}
                          type="text"
                          required
                        />
                      </InputPledge>
                      <Button
                        type="submit"
                        small
                        onClick={(e) => {
                          e.preventDefault();
                          handlerClick(pledge, id);
                        }}
                      >
                        Continue
                      </Button>
                    </ButtonGroup>
                  </Inputarea>
                </Form>
              )}
            </AnimatePresence>
          </Card>
        )
      )}
    </Body>
  );
};

export default OverlayBody;
