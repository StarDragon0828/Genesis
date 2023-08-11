import './style.scss';
import { useState } from "react";
import { Alert, AlertContainer } from "react-bs-notifier";

export default function MyNotification(props) {
	const [showing, setShowing] = useState({
		info: props.info,
		success: props.success,
		warning: props.warning,
		danger: props.danger
	});

	return (
		<div>
			<AlertContainer position="top-right">
				{showing.info ? (
					<Alert type="info" headline="Oh Some Info">
						Something happened of only moderate importance.
					</Alert>
				) : null}

				{showing.success ? (
					<Alert type="success" headline="Sign up was successful!">
					</Alert>
				) : null}

				{showing.warning ? (
					<Alert type="warning" headline="Oh Uhh Hmm">
						Something bad may be about to happen.
					</Alert>
				) : null}

				{showing.danger ? (
					<Alert type="danger" headline="Oh Shit">
						Something bad has happened. Panic!
					</Alert>
				) : null}
			</AlertContainer>
		</div>
	);
}
