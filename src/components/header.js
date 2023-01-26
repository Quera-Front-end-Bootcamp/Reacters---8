import "./header.css";
import SecondaryButton from "./secBtn";
function Header() {
	return (
		<header className="intro h-[75vh] text-slate-50 flex flex-col justify-end">
			<section className="flex items-end px-20 py-12">
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
				<SecondaryButton anchorText="مشاهده دوره ها" />
			</section>
			<section className=" sec-search flex gap-4 items-center px-20 py-2 text-slate-50">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-16 h-12"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
					/>
				</svg>
				<input
					className=" bg-transparent text-lg placeholder:text-slate-50"
					placeholder="جستجو..."
				/>
			</section>
		</header>
	);
}

export default Header;
