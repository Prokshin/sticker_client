import React, { useEffect } from "react";
import Card from "../card";
import { connect } from "react-redux";
import { addSticker } from "../../actions";

const Stickers = props => {
  const { addSticker } = props;
  useEffect(() => {
    const Load = async () => {
      const response = await fetch("http://127.0.0.1:8080/stickers");
      response.json().then(res => {
        res.map(el => {
          addSticker(el);
          return 1;
        });
      });
    };
    Load();
  }, [addSticker]);
  return (
    <div>
      {props.stickers.map(el => {
        console.log(el);
        return <Card key={el.title} title={el.title} text={el.text} />;
      })}
    </div>
  );
};

const mapStateToProps = store => {
  const stickers = store;
  return { stickers };
};

export default connect(mapStateToProps, { addSticker })(Stickers);
