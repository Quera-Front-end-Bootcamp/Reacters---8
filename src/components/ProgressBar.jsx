const ProgressBar = ({ data }) => {
    return (
        <div className="w-48">
            <div className="w-full h-6 bg-gray-200 rounded-md border border-gray-400">
                <div className="h-full rounded-md bg-[#066649]" style={{ width: data.progress + "%" }}></div>
                <span className='flex w-full text-sm mt-1'>{data.progress} %</span>
            </div>
        </div >
    );
}
export default ProgressBar;