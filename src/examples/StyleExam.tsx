import * as React from 'react';
import { ReactMultiEmail } from '../../src/components/React-multi-email';
import'../../src/components/React-multi-email/style.css';

export default function multiEmail () {
  const [emails, setEmails] = React.useState<string[]>([]);
  return (
    <div style={styles}>
      <h3>react-multi-email</h3>
      <ReactMultiEmail
        placeholder="Input your Email Address"
        style={{ border: '1px solid red', marginLeft: '1rem', width: '300px'}}
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

const styles = {
  fontFamily: "sans-serif",
  width: "500px",
  border: "1px solid rgb(238, 238, 238)",
  background: "rgb(243, 243, 243)",
  padding: "25px",
  margin: "20px",
  color: "black",
};
