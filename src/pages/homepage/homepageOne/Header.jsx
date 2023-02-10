import SecondaryButton from "./components/SecBtn";
import "../style/homepage.css";

function Header() {
	return (
		<header className="intro h-[75vh] text-slate-50 flex flex-col justify-end">
			<section className="flex md:flex-row flex-col items-center justify-center md:justify-around h-[25rem] gap-4">
				<div dir="rtl" className="md:text-right text-center">
					<h1 className="md:text-4xl text-3xl font-semibold leading-[5rem] pb-4">
						باید راه بهتری برای آموزش ساخته میشد،
						<br /> پس ما ساختیمش...
					</h1>
					<p className="text-lg leading-8 max-w-2xl md:flex hidden">
						سایت بامبو با هدف تولید و انتشار محتوای باکیفیت آموزشی و همچنین
						آشنایی جامعه با فضای کسب و کار در فضای مجازی ایجاد شده و امید داریم
						بتوانیم با راهکارهای نوین، فرصتی برای افراد خواهان پیشرفت فراهم
						کنیم.
					</p>
				</div>
				<SecondaryButton anchorText="مشاهده دوره ها" />
			</section>
			<section className="sec-search flex justify-start gap-4 items-center px-8 py-2 h-16 text-slate-50">
				<svg xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					className="w-8 h-8">
					<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
				</svg>

				<input
					className="bg-transparent text-base placeholder:text-gray-100 border border-gray-400 p-2.5 rounded-md md:w-1/3 w-1/2"
					dir="rtl"
					placeholder="جستجو ..."
				/>
			</section>
		</header>
	);
}

export default Header;
