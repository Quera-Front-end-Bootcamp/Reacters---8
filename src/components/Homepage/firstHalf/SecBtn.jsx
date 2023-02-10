function SecondaryButton(props) {
	return (
		<a href="/courses"
			className="text-slate-50 bg-[#0d5a5f] shadow-lg hover:bg-[#093d41] py-4 px-8 md:mt-40 mt-0 mx-4 text-center rounded-md font-medium">
			{props.anchorText}
		</a>
	);
}

export default SecondaryButton;
