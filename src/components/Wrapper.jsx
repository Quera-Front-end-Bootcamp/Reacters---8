import Navbar from "./Navbar";
import Footer from "./Footer/Footer";

const Wrapper = (props) => {
    return (
        <div className="max-h-full">
            {props.flag && <div className="w-full z-10 fixed h-16"><Navbar /></div>}
            {!props.flag && props.className === "coursesPage" &&
                <div className="w-full z-10 bg-[#0d5a5f] fixed">
                    <Navbar />
                </div>}
            <div className="overflow-y-scroll h-[100vh]">
                {props.element}
                {(props.flag || props.className === "coursesPage") &&
                    <div><Footer /></div>
                }
            </div>
        </div>
    );
}

export default Wrapper;