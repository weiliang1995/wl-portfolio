import React from 'react'

type Props = {
    id: string | NavTitle;
    className?: string;
    children: React.ReactNode;
}

const Section = ({ id, className, children }: Props) => {
  return (
    <section id={id} className={`w-3/4 p-12 flex justify-center items-center ${className}`}>
        {children}
    </section>
  )
}

export default Section