import * as React from 'react';
import { ReactMultiEmail } from '../components/React-multi-email';
import'../components/React-multi-email/style.css';

export default function multiEmail() {
  const [emails, setEmails] = React.useState<string[]>([]);
  const [currentKeyDown, setCurrentKeyDown] = React.useState<string>("");
  const [currentKeyUp, setCurrentKeyUp] = React.useState<string>("");

  const onKeyDownFunc = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(event.key);
    setCurrentKeyDown(event.key);
  };

  const onKeyUpFunc = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(event.key);
    setCurrentKeyUp(event.key);
    // const value = event.currentTarget.value;
    // if (event.key === "Enter" && !value.endsWith("@example.com") ) {
      // console.log(emails.length);
      // console.log(emails);
      // alert("Please use an email from the '@example.com' domain.");
      // setEmails(emails.length >= 0 ? [...emails, ""] : [""]);
    // }
    // setEmails([])
  };

  return (
    <div style={styles}>
      <h3>react-multi-email</h3>
      <ReactMultiEmail
        placeholder="Input your Email Address"
        emails={emails}
        onChange={(_emails: string[]) => {
          setEmails(_emails);
        }}
        onKeyDown={onKeyDownFunc}
        onKeyUp={onKeyUpFunc}
        getLabel={(
          email: string,
          index: number,
          removeEmail: (index: number) => void
        ) => {
          return (
            <div data-tag key={index}>
              {email}
              <span data-tag-handle onClick={() => removeEmail(index)}>
                ×
              </span>
            </div>
          );
        }}
      />
      <h4>react-multi-email value</h4>
      <p>{emails.join(", ") || "empty"}</p>
      <div>currentKey(keyDown): {currentKeyDown}</div>
      <div>currentKey(keyUp): {currentKeyUp}</div>
    </div>
  );
}

const styles = {
  fontFamily: "sans-serif",
  width: "500px",
  border: "1px solid rgb(238, 238, 238)",
  background: "rgb(243, 243, 243)",
  padding: "25px",
  margin: "20px",
  color: "black",
};
