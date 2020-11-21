import React from "react";
import ReactMarkdown from "react-markdown";
import "./index.css";

const Box = (props, className, name) => {
    return (
        <div className={className}>
            <span>{name}</span>
            <p><ReactMarkdown source={props.children} /></p>
        </div>
    );
};

const Note = (props) => Box(props, "note", "Note");
const Warning = (props) => Box(props, "warning", "Warning");
const Tip = (props) => Box(props, "tip", "Tip");
const Support = (props) => Box(props, "support", "Limited Support");

export { Note, Warning, Tip, Support };
