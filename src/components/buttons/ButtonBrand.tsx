import React from 'react'

interface Props extends React.ComponentProps<'button'> {}

const ButtonBrand = (props: Props) => {
    const {children, className} = props
  return (
    <button className={`bg-brand px-5 rounded-sm w-full max-w-60 text-lg text-[white] py-2 ${className}`}>
        {children}
    </button>
  )
}

export default ButtonBrand