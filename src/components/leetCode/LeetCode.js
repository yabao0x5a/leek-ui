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
  timeComplexity,
  spaceComplexity,
}) => {
  return (
    <article>
      <Header />
      <section>
        <h2>{titleString}</h2>
        <p></p>
        <>
          {descriptionStringArr.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </>
        <h3>Reference</h3>
        <>
          {referenceLinkArr.map((item, index) => {
            return (
              <a key={index} href={item} target="_blank" rel={item}>
                <span className="tip">
                  <strong>{index === 0 ? "LintCode" : "LeetCode"}</strong>
                </span>
              </a>
            );
          })}
        </>
        <div className="tip-wrapper">
          {codeStringArr.map((item, index) => {
            return (
              <div key={index}>
                <h3>Solution {index + 1}</h3>
                <SyntaxHighlighter language="javascript" style={docco}>
                  {item}
                </SyntaxHighlighter>
              </div>
            );
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

        <div className="tip-wrapper">
          <span className="tip">Time Complexity</span>
          <>
            {timeComplexity.map((item, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  className={["storybook-button"]}
                  style={{ backgroundColor: "#f0f0f0", color: "#66bf3c" }}
                  disabled
                >
                  {item || "null"}
                </button>
              );
            })}
          </>
        </div>
        <div className="tip-wrapper">
          <span className="tip">Space Complexity</span>
          <>
            {spaceComplexity.map((item, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  className={["storybook-button"]}
                  style={{ backgroundColor: "#f0f0f0", color: "#66bf3c" }}
                  disabled
                >
                  {item || "null"}
                </button>
              );
            })}
          </>
        </div>
      </section>
    </article>
  );
};
