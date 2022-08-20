import React from "react";
import { motion } from "framer-motion";
const Wrapper = (props) => {
    return <span className="word-wrapper">{props.children}</span>;
};
const tagMap = {
    paragraph: "p",
    heading1: "h1",
    heading2: "h2",
};

const AnimatedText = (props) => {
    let speed;
    switch(props.speed){
        case "slow":  speed = 1; break;
        case "normal": speed = 0.5; break;
        case "fast":  speed = 0.3; break;
        default:  speed = 0.7; break;
    }
    const item = {
        hidden: {
            y: "100%",
            color: "#ba0030",
            transition: {type: "spring", duration: 0.3, ease: [0.15, 0.5, 0.7, 1]
            }
        },
        visible: {
            y: 0,
            color: "#170772",
            transition: {type: "spring",  ease: [0, 0.4, 0.7, 1], duration: speed , bounce: 0.3, bounceStiffness: 0.1}
        }
    };

    const splitWords = props.text.split(" ");
    const words = [];
    for (const [, item] of splitWords.entries()) {
        words.push(item.split(""));
    }
    words.map((word) => {
        return word.push("\u00A0");
    });
    const Tag = tagMap[props.type];
    return (
        <Tag>
            {words.map((word, index) => {
                return (
                    <Wrapper key={index}>
                        {words[index].flat().map((element, index) => {
                            return (
                                <span
                                    style={{
                                        overflow: "hidden",
                                        display: "inline-flex"
                                    }}
                                    key={index}>
                                        <motion.span
                                            style={{ display: "flex"}}
                                            variants={item}>
                                                {element}
                                        </motion.span>
                                </span>
                            );
                        })}
                    </Wrapper>
                );
            })}
        </Tag>
    );
};

export default AnimatedText;
