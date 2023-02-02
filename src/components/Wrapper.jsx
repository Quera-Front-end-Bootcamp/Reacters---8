import Header from "./Header";
import Footer from "./Footer/Footer";

const Wrapper = (props) => {
    return (
    <>
        {props.flag && <div className="absolute w-full z-10"><Header /></div>}
        {props.element}
        {props.flag && <Footer />}
    </>);
}

export default Wrapper;