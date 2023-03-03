import {useState} from 'react';
import ReactModal from "react-modal";
import Loading from '../../Loading/Loading';
import { Avatar } from '@mui/material';


const DeleteModal = ({ data, isOpen, handleClose, handleDelete }) => {
    const [isLoading, setIsLoading] = useState(false);


    const deleteHandler = () =>{
            setIsLoading(true);
            handleDelete(data._id, setIsLoading);
    }
    return (
      <ReactModal
        isOpen={isOpen}
        onRequestClose={handleClose}
        ariaHideApp={false}
        contentLabel="Delete Modal"
        shouldCloseOnOverlayClick={true}
        className={
          "flex justify-center items-center outline-none w-3/5 md:w-1/3 h-[350px] pt-0 md:pt-20"
        }
        overlayClassName={
          "bg-[#d6d6d699] h-[108vh] w-full top-0 left-0 fixed flex justify-center items-center"
        }
      >
        <div className="h-full w-full bg-[#30916e] rounded-md flex flex-col justify-between overflow-hidden">
          {!isLoading && (
            <div>
              <p className="text-center text-white text-xl font-semibold pt-3">
                آیا از حذف این کاربر اطمینان دارید؟
              </p>
              <div className="flex flex-col justify-evenly items-center h-full">
                <Avatar
                  src=""
                  alt={data.fullName}
                  sx={{ width: 70, height: 70 }}
                >
                  {data.fullName[0].toUpperCase()}
                </Avatar>
                <p className="text-center text-white text-xl font-semibold pt-3">
                  {data.fullName}
                </p>
                <p className="text-center text-white text-xl font-semibold pt-3">
                  {data.email}
                </p>
              </div>
            </div>
          )}
          {isLoading && (
            <div className="flex h-1/2 w-1/2 justify-center items-center">
              <Loading />
            </div>
          )}
          <div className="w-full flex">
            <button
              className="text-white bg-red-600 flex-grow p-3"
              onClick={deleteHandler}
            >
              بله حذفش کن
            </button>
            <button
              className="text-white bg-black flex-grow p-3 "
              onClick={handleClose}
            >
              کنسل کن
            </button>
          </div>
        </div>
      </ReactModal>
    );
}

export default DeleteModal;