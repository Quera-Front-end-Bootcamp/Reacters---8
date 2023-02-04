function SecondaryButton(props) {
	return (
		<a href="/courses" className=" text-slate-50 bg-[#0d5a5f] hover:bg-[#093d41] py-4 px-8 rounded-md">
			{props.anchorText}
		</a>
	);
}

export default SecondaryButton;
