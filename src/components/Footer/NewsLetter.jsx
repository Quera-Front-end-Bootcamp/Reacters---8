const NewsLetter = () => {
    return (
        <section className="text-sm table-cell align-middle ">
            <h1 className="mb-4 font-bold text-textcolor-900 text-xl">خبرنامه</h1>
            <div className="flex flex-col md:flex-row-reverse justify-center mb-4 ">
                <input placeholder="...ایمیل خود را وارد کنید" type="email"
                    className="rounded-tr-md rounded-br-md text-base placeholder:text-textcolor-300 placeholder:text-right
                    py-4 px-4 md:px-6 lg:py-6 lg:px-8  mb-4 md:mb-0 text-right w-full
                    bg-greencolor-500  focus:bg-opacity-60 duration-150  outline-none"
                />
                <input type="submit" value="عضویت"
                    className="rounded-tl-md rounded-bl-md bg-primary text-lg py-4 px-6 md:px-10 lg:py-6 lg:px-12 
                    font-bold uppercase cursor-pointer opacity-80 hover:opacity-60 duration-150
                    bg-[#093d41] text-greencolor-200"
                />
            </div>

        </section>)
};



export default NewsLetter;