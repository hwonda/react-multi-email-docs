import * as React from 'react';
import { ReactMultiEmail } from '../components/React-multi-email';
import'../components/React-multi-email/style.css';

export default function multiEmail() {
  const [emails, setEmails] = React.useState<string[]>([]);

  const validateEmailFunc = async (email: string) => {
    try {
      const response = await fetch(`https://api.example.com/validate-email?email=${email}`);
      const data = await response.json();
      return data.isValid;
    } catch (error) {
      return false;
    }
  };

  return (
    <div style={styles}>
      <h3>react-multi-email</h3>
      <ReactMultiEmail
        enableSpinner={true}
        spinner={() => <div>Loading...</div>}
        emails={emails}
        onChange={(_emails: string[]) => {
          setEmails(_emails);
        }}
        validateEmail={validateEmailFunc}
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
