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

const AnimatedCharacters = (props) => {
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
            transition: {type: "spring",  ease: [0.15, 0.5, 0.7, 1], duration: 0.3 , bounce: 0.3, bounceStiffness: 0.5}
        }
    };

    //  Split each word of props.text into an array
    const splitWords = props.text.split(" ");

    // Create storage array
    const words = [];

    // Push each word into words array
    for (const [, item] of splitWords.entries()) {
        words.push(item.split(""));
    }

    words.map((word) => {
        return word.push("\u00A0");
    });

    // Get the tag name from tagMap
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
                                            style={{ display: "flex" }}
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

export default AnimatedCharacters;
