const NewsLetter = () => {
    return (
        <section className="table-cell align-middle ">
            <h1 className="mb-4 font-bold text-textcolor-900 text-xl">خبرنامه</h1>
            <div className="flex flex-col md:flex-row-reverse justify-center ml-4 mr-0 md:mb-4">
                <input placeholder="...ایمیل خود را وارد کنید" type="email"
                    className="rounded-tr-md rounded-br-md text-base py-4 px-4 sm:py-6 sm:px-8 mb-4
                    placeholder:font-light placeholder:text-gray-300 placeholder:text-right
                    md:placeholder:text-base text-right focus:bg-opacity-60 duration-150 outline-none bg-[#347479a9] basis-3/4"
                />
                <input type="submit" value="عضویت"
                    className="rounded-tl-md rounded-bl-md md:text-lg text-base py-4 px-4 sm:py-6 sm:px-8 mb-4 
                    font-bold cursor-pointer opacity-80 hover:opacity-60 duration-150 text-greencolor-200 bg-[#093d41] basis-1/4 "
                />
            </div>
        </section>)
};

export default NewsLetter;