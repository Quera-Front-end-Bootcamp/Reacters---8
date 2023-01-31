const ProgressBar = ({ data }) => {
    return (
        <div>
            <div class="w-full h-6 bg-gray-200 rounded-md border border-gray-400">
                <div class="h-full rounded-md bg-[#066649]" style={{ width: data.progress + "%" }}></div>
            </div>
        </div >
    );
}
export default ProgressBar;