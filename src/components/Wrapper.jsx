import Header from "./Header";
import Footer from "./Footer/Footer";

const Wrapper = (props) => {
    return (
        <>
            {props.flag && <div className="absolute w-full z-10 pt-2 px-2"><Header /></div>}
            {props.flag && props.className === "coursesPage" &&
                <div className="absolute w-full z-10 bg-[#0d5a5f] pt-4 px-2">
                    <Header />
                </div>}
            {props.element}
            {props.flag && <Footer />}
        </>
    );
}

export default Wrapper;