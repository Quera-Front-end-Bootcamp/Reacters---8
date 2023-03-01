import HomePageSearch from "../../Search/HomePageSearch"
import SecondaryButton from "./SecBtn";
import "../style/homepages.css";

function Header() {
	return (
		<header className="intro h-[75vh] text-slate-50 flex flex-col justify-end">
			<section className="flex md:flex-row flex-col items-center justify-center md:justify-around h-[25rem] gap-4">
				<div dir="rtl" className="md:text-right text-center pr-10">
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
			<div className="sec-search"><HomePageSearch /></div>
		</header>
	);
}

export default Header;
