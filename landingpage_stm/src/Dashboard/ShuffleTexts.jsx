import { useState, useCallback, useEffect } from "react";

export default function ShuffleTexts(props) {
  const [text, setText] = useState(props.default);
  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * props.texts.length);
    setText(props.texts[index]);
  });

  useEffect(() => {
    const intervalID = setInterval(shuffle, 2000);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  return <div className="shuffle text-pri-40 text-dh-5">{text}</div>;
}
