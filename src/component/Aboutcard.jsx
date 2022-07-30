import React, { useContext } from "react";
import {
  Card,
  Pledge,
  Title,
  Head,
  Cardparagraph,
  Container,
  Bottomcard,
  Righttext,
  BottomcardLeftside,
} from "../style/Aboutstyle";
import { Button } from "../style/element/button";
import { Titlebacked } from "../style/genaral/typography";
import BackedContext from "./BackedContext";

const Aboutcard = ({ title, pledge, detaile, left, lastitem, id }) => {
  const { setSelectBychose, setToggleMenu } = useContext(BackedContext);

  const handlerClickPopup = () => {
    if (left) {
      setToggleMenu();
      setSelectBychose(id);
    } else {
      return;
    }
  };

  return (
    <Card disabled={lastitem}>
      <Container>
        <Head>
          <Title>{title}</Title>
          <Pledge>Pledge ${pledge} or more</Pledge>
        </Head>
        <Cardparagraph>{detaile}</Cardparagraph>
        <Bottomcard>
          <BottomcardLeftside>
            <Titlebacked>{left}</Titlebacked>
            <Righttext>left</Righttext>
          </BottomcardLeftside>
          <Button small onClick={handlerClickPopup}>
            Select Rewad
          </Button>
        </Bottomcard>
      </Container>
    </Card>
  );
};

export default Aboutcard;
