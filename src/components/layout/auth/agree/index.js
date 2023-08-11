import { Link } from "react-router-dom"
import "./style.scss"

const Agree = (props) => {
  return <h5 className="agree">By continuing, you agree to Genesis's <Link>Terms of Use</Link> and <Link>Privacy Policy.</Link></h5>
}

export default Agree