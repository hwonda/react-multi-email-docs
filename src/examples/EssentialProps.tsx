import * as React from 'react';
import { ReactMultiEmail } from '../components/React-multi-email';
import'../components/React-multi-email/style.css';

export default function EssentialProps () {
  const [emails, setEmails] = React.useState<string[]>([]);
  return (
      <ReactMultiEmail
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
  );
}
