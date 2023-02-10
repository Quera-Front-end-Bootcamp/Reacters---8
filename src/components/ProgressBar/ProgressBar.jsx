const ProgressBar = ({ data }) => {
    return (
        <div className="w-52">
            <div className="w-full h-7 bg-gray-200 rounded-sm border border-gray-400">
                <div className="h-full rounded-sm bg-[#0d5a5f] text-white flex justify-center items-center" style={{ width: data.progress + "%" }}>{data.progress} %</div>
            </div>
        </div >
    );
}
export default ProgressBar;