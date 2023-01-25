import "./homepage.css";
function Homepage() {
	return (
		<header className="intro h-[75vh] text-slate-50 flex flex-col justify-end items-start px-20 pb-16">
			<div className="flex items-end">
				<div className="text-right ">
					<h1 className="text-5xl font-bold leading-[5rem]">
						باید راه بهتری برای آموزش ساخته میشد،
						<br /> پس ما ساختیمش...
					</h1>
					<p className="text-lg leading-8 max-w-2xl">
						سایت بامبو با هدف تولید و انتشار محتوای باکیفیت آموزشی و همچنین
						آشنایی جامعه با فضای کسب و کار در فضای مجازی ایجاد شده و امید داریم
						بتوانیم با راهکارهای نوین، فرصتی برای افراد خواهان پیشرفت فراهم
						کنیم.
					</p>
				</div>
				<a href="/courses" className="text-green-800 bg-slate-50 py-4 px-8">
					مشاهده دوره ها
				</a>
			</div>
		</header>
	);
}

export default Homepage;
