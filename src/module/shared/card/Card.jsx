import React from 'react'

const Card = ({className,children}) => {
  let style = className + " tw-border-white tw-rounded-md tw-border-4 tw-bg-white tw-mt-2"
  return ( 
    <React.Fragment>
      <div className={style}>
      {children}
      </div>
    </React.Fragment>
   );
}
 
export default Card;