const ProgressBar = ({ data }) => {
    return (
        <div className="w-52">
            <div className="w-full h-7 bg-gray-200 rounded-sm border border-gray-400 relative">
                <div className="h-full rounded-sm bg-[#0d5a5f] text-black flex justify-center items-center absolute top-0 left-0" style={{ width: data.progress  + "%" }}></div>
                <p className="absolute top-0 left-0 w-full text-center">{data.progress} %</p>
            </div>
        </div >
    );
}
export default ProgressBar;