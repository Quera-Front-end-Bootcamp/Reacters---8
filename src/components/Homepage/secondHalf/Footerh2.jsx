import React, { useState } from "react";
import {AXIOS} from '../../../config/axios.config';
import imgSec5 from "../../../assets/images/suggestion.jpeg";

const initialState = { email: "", text: "", name: "" };

export default function Fotter() {
	const [data, setData] = useState(initialState);
	const checkDataValidation = () => {
		return data.email.length > 0 && data.text.length > 0
	}
	const postData = () => {
		if (!checkDataValidation()) {
			alert("لطفا ورودی ها را پر کنید")
		}
		else{
			AXIOS
			.post("/api/contactUs", data)
			.then((response) => {
				if (response.status === 200) {
					alert(response.data.message[0].message);
					setData(initialState);
				}
			});
		}
	};
	return (
		<article className=" flex flex-col items-center justify-center w-full h-60v mt-52 md:mt-8">
			<div className="w-full h-full  flex relative overflow-hidden ">
				<div className="flex w-full md:w-3/5 ">
					<div className="w-full h-full bg-gradient-to-tr from-teal-900 to-teal-400 flex items-center justify-evenly flex-col ">
						<div className="flex justify-start font-semibold border border-[#093d41] py-4 px-10 mt-4 text-[#093d41] text-center text-xl md:text-lg rounded-md shadow-lg">
							پیشنهادات و انتقادات
						</div>

						<form action="#">
							<div className="flex flex-col pt-6 w-72 h-56 gap-12 md:gap-16">
								<input
									type="email"
									value={data.email}
									onChange={(event) =>
										setData({ ...data, email: event.target.value })
									}
									placeholder="... ایمیل خود را وارد کنید"
									className="text-white placeholder-gray-100 w-72 h-12 lg:w-96 lg:h-16 bg-transparent border-b border-gray-400 focus:border-b-teal-800 focus:border-b-3 outline-none text-end pr-5"
								/>

								<input
									type="text"
									value={data.text}
									onChange={(event) =>
										setData({ ...data, text: event.target.value })
									}
									placeholder="... متن خود را وارد کنید"
									className="text-white placeholder-gray-100 w-72 h-12 lg:w-96 lg:h-16 bg-transparent border-b border-gray-400 focus:border-b-teal-800 focus:border-b-3 outline-none text-end  pr-5"
								/>
							</div>
							<button
								onClick={postData}
								className="py-3 px-7 mb-4 border border-[#093d41] text-lg font-semibold text-[#052d30] lg:mt-8 bg-teal-700 hover:bg-[#093d41] hover:text-white rounded-md"
							>
								ارسال
							</button>
						</form>
					</div>
					<div className="lg:w-3/5 lg:h-32 lg:right-32 lg:top-52 bg-gradient-to-r from-teal-900 to-teal-400 xl:right-44 xl:top-40 xl:w-7/12 xl:h-52 rotate-77- absolute"></div>
				</div>
				<div className=" hidden md:flex md:w-2/5 ">
					<img
						src={imgSec5}
						className="hidden md:flex w-full h-full "
						alt="young-handsome"
					/>
				</div>
			</div>
		</article>
	);
}
