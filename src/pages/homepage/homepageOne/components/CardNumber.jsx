function CardNumber(props) {
	return (
		<div className="card-number flex flex-col justify-center items-center gap-4 bg-[#00000080] text-slate-50 p-12">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="w-16 h-16"
			>
				<path strokeLinecap="round" strokeLinejoin="round" d={props.d} />
			</svg>
			<p className=" text-3xl font-medium">{props.head}</p>
			<p>{props.desc}</p>
		</div>
	);
}
export default CardNumber;
