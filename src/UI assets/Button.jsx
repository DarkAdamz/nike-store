const Button = (props) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat rounded-full text-lg leading-none 
    ${props.backgroundColour ? `${props.backgroundColour} ${props.borderColor} ${props.textColor}` : ` bg-coral-red text-white border-coral-red`}
    `}>
      {props.label}
     {props.iconURL && <img
        src={props.iconURL}
        alt="arrow-right"
        className="ml-2 rounded-full w-5 h-5"
      />}
    </button>
  )
}

export default Button