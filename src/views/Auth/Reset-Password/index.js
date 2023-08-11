import "./style.scss";
import { useMemo, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button";
import AuthLayout from "../../../components/layout/auth/layout";
import View from "../../../components/UI/View";

const ResetPassword = (props) => {

  const navigate = useNavigate()
  const firstRef = useRef()
  const secondRef = useRef()
  const thirdRef = useRef()
  const fourthRef = useRef()
  const fifthRef = useRef()
  const sixthRef = useRef()
  const refs = useMemo(() => [firstRef, secondRef, thirdRef, fourthRef, fifthRef, sixthRef], [firstRef, secondRef, thirdRef, fourthRef, fifthRef, sixthRef])

  const onKeyDown = (event, name) => {
    const value = event.target.value
    if (value.length === 0 && event.key === "Backspace") {
      const prevRef = name > 0 && refs[name - 1]
      if (prevRef && prevRef.current) prevRef.current.focus()
    }
    if (event.key >= "0" && event.key <= "9") {
      event.target.value = event.key
      event.preventDefault()
      const nextRef = refs[name + 1]
      if (nextRef && nextRef.current) {
        nextRef.current.focus()
        nextRef.current.value=""
      }
    }
  }

  const verify = () => {
    navigate("/set-new-password")
  }

  return <AuthLayout agree={false}>
    <View className="reset-password-page">
      <h5 className="enter-otp">Please enter the OTP sent to<br />your email. <Link className="text-primary text-decoration-none">Change</Link></h5>
      <View className="digit-container">
        {
          new Array(6).fill(0).map((_, idx) => <Input key={`digit-${idx}`} type="number" className="digit" name={idx} ref={refs[idx]} onKeyDown={onKeyDown}/>)
        }
      </View>
      <Button text="Verify" className="w-100" onClick={verify} />
    </View>
  </AuthLayout>
}

export default ResetPassword;