interface propsComp{
  styling?:string
}

const Button = (props:propsComp) => {
  const {styling} = props
  return (
    <button type="button" className={`select-none rounded-[10px] py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styling}`}>
      Get Started
    </button>
  )
}

export default Button
