import React, { useEffect, useState } from "react";
import axios from "axios";

const Convert = ({ Language, Text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(Text);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(Text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [Text]);
  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: Language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };

    doTranslation();
  }, [Language, debouncedText]);

  return (
    <div>
      <h1>{translated}</h1>
    </div>
  );
};

export default Convert;
