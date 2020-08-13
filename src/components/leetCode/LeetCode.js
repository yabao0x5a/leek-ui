import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Header } from "./Header";
import "./leetcode.css";

export const LeetCode = ({
  codeStringArr,
  titleString,
  descriptionStringArr,
  referenceLinkArr,
  levelArr,
  companyArr,
}) => {
  return (
    <article>
      <Header />
      <section>
        <h2>{titleString}</h2>
        <p></p>
        <>
        {descriptionStringArr.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
        </>
        <h3>Reference</h3>
        <ul>
          {referenceLinkArr.map((item, index) => {
            return (
              <li key={index}>
                <a href={item} target="_blank" rel={item}>
                  <strong>{item}</strong>
                </a>
              </li>
            );
          })}
        </ul>
        <div className="tip-wrapper">
        {codeStringArr.map((item, index) => {
            return (
              <div key={index}>
                <h3>Solution {index + 1}</h3>
                <SyntaxHighlighter language="javascript" style={docco}>
                {item}
                </SyntaxHighlighter>
              </div>
            )
          })}
        </div>
        <div className="tip-wrapper">
          <span className="tip">Level</span>
          <>
            {levelArr.map((item, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  className={["storybook-button"]}
                  style={{ backgroundColor: "#f0f0f0", color: "#66bf3c" }}
                  disabled
                >
                  {item}
                </button>
              );
            })}
          </>
        </div>
        <div className="tip-wrapper">
          <span className="tip">Company</span>
          <>
            {companyArr.map((item, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  className={["storybook-button"]}
                  style={{ backgroundColor: "#f2f2f2", color: "#66bf3c" }}
                  disabled
                >
                  {item}
                </button>
              );
            })}
          </>
        </div>
      </section>
    </article>
  );
};
