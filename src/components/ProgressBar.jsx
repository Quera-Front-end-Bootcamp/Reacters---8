const ProgressBar = ({ data }) => {
    return (
        <div className={`w-[${data.width}%]`}>
            <div className="w-full h-6 bg-gray-200 rounded-sm border border-gray-400">
                <div className="h-full rounded-sm bg-[#066649] text-white flex justify-center"  style={{ width: data.progress + "%" }}>{data.progress} %</div>
            </div>
        </div >
    );
}
export default ProgressBar;