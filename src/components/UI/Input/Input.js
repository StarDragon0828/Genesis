import { forwardRef, useState } from "react"
import EyeIcon from "../../../assets/icons/eye.svg"
import EyeIconOff from "../../../assets/icons/eye-off.svg"
import "./style.scss"

const Input = forwardRef((props, ref) => {

  const [type, setType] = useState(props.type)

  const togglePasswordType = () => {
    setType(type==="password"?"text":"password")
  }

  const onChange = (e) => {
    props.onChange && props.onChange(e, props.name)
  }

  const onKeyDown = (e) => {
    props.onKeyDown && props.onKeyDown(e, props.name)
  }

  return <div className={`input ${props.className}`}>
    <input {...props} type={type} onChange={onChange} ref={ref} onKeyDown={onKeyDown} />
    {
      props.type==="password"? <img onClick={togglePasswordType} src={ type==="password"?EyeIcon:EyeIconOff } /> : ""
    }
  </div>
})

export default Input;