import {getProgressValue} from "../../utils/utils"

const ProgressBar = ({ data }) => {
    return (
        <div className="w-52">
            <div className="w-full h-7 bg-gray-200 rounded-sm border border-gray-400 relative">
                <div className="h-full rounded-sm bg-[#0d5a5f] text-black flex justify-center items-center absolute top-0 left-0"
                    style={{ width: `${getProgressValue(data)}`  + "%" }}>    
                </div>
                <p className="absolute top-0 left-0 w-full text-center">{getProgressValue(data)} %</p>
            </div>
        </div >
    );
}
export default ProgressBar;