import React from 'react';

type Props = {
  id: string | PageID;
  className?: string;
  children: React.ReactNode;
};

const Section = ({ id, className, children }: Props) => {
  return (
    <section id={id} className={`w-full h-full ${className}`}>
      {children}
    </section>
  );
};

export default Section;
