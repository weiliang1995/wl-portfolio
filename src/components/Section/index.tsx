import React from 'react';
import { PageID } from '@/utils/enum';

type Props = {
  id: string | PageID;
  className?: string;
  children: React.ReactNode;
};

const Section = ({ id, className, children }: Props) => {
  return (
    <section id={id} className={`py-20 w-full h-full ${className}`}>
      {children}
    </section>
  );
};

export default Section;
