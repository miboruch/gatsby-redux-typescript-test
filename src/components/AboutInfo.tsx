import React from 'react';

interface Props {
  firstName: string;
  lastName: string;
}

const AboutInfo: React.FC<Props> = ({ firstName, lastName }) => {
  return (
    <div>
      <h2>
        Hello, this page is about {firstName} {lastName}
      </h2>
    </div>
  );
};

export default AboutInfo;
