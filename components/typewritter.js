import { useEffect, useState } from "react";
import Typewriter from "../modules/typewritter";

export default ({ children, speed, delay, replace, ...props }) => {
  const [displayed, setDisplayed] = useState("");
  const [cx, setCx] = useState("init");

  useEffect(() => {
    const writer = new Typewriter(
      children,
      (value) => {
        setDisplayed(value);
        setCx(writer.isOver() ? "over" : "writing");
      },
      { speed, replace }
    );
    if (delay) {
      setTimeout(() => {
        writer.run();
      }, delay);
    } else {
      writer.run();
    }
  }, []);

  const classes = `${props.className || ""} ${cx}`.trim();
  return (
    <span className={classes}>
      {displayed || children}
      <style jsx>{`
        span {
          padding-right: 0.05em;
          border-right: 0.05em solid currentColor;
        }

        span.init {
          opacity: 0;
        }

        span.writing {
          animation: blink-caret 0.6s step-end infinite;
        }

        span.over {
          animation: blink-caret 0.6s step-end 6 both;
        }

        @keyframes blink-caret {
          from,
          to {
            border-color: transparent;
          }
          50% {
            border-color: currentColor;
          }
        }
      `}</style>
    </span>
  );
};
