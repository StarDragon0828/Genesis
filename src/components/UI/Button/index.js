import { Button } from "react-bootstrap"
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import "./style.scss"

export default function customButton(props) {
  
  const tooltip = <Tooltip className="custom-tooltip">{props.tooltipText}</Tooltip>;

  return (
    <>
      { props.tooltipText && props.tooltipText !== "" ? 
        (
          <OverlayTrigger placement="auto" overlay={tooltip} delay={{ show: 200, hide: 300 }}>
            <Button className={`button ${props.className}`} onClick={props.onClick}>
              { props.text }
            </Button>
          </OverlayTrigger>
        )
        :
        (
          <Button className={`button ${props.className}`} onClick={props.onClick}>
            { props.text }
          </Button>
        )
      }
    </>
  )
}