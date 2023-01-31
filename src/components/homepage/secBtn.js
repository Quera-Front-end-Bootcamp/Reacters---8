import "./secBtn.css";
function SecondaryButton(props) {
	return (
		<a href="/courses" className="text-green-800 bg-slate-50 py-4 px-8">
			{props.anchorText}
		</a>
	);
}

export default SecondaryButton;
