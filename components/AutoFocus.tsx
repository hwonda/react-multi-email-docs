import * as React from 'react';
import { ReactMultiEmail } from '../../src/components/React-multi-email/ReactMultiEmail';
import'../../src/components/React-multi-email/style.css';
// import { Button } from 'antd';

const styles = {
  fontFamily: "sans-serif",
  width: "500px",
  border: "1px solid rgb(238, 238, 238)",
  background: "rgb(243, 243, 243)",
  padding: "25px",
  margin: "20px",
  color: "black",
};

export default function placeholder () {
  const [emails, setEmails] = React.useState<string[]>([]);
  return (
    <div style={styles}>
      <h3>react-multi-email</h3>
      <ReactMultiEmail
        placeholder="Input your Email Address"
        autoFocus={true}
        emails={emails}
        onChange={(_emails: string[]) => {
          setEmails(_emails);
        }}
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
      <br />
      <h4>react-multi-email value</h4>
      <p>{emails.join(", ") || "empty"}</p>
    </div>
  );
}
