import { useState } from "react";
import ReactModal from "react-modal";
import Loading from "../../Loading/Loading";
import { Avatar } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { InputDatePicker } from "jalaali-react-date-picker";
import "jalaali-react-date-picker/lib/styles/index.css";

const EditModal = ({ data, isOpen, handleClose, handleEdit }) => {
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit } = useForm();

  console.log(data);

  const formHandler = (data) => data;

  const editHandler = () => {
    const dt = handleSubmit(formHandler);
    console.log('dt', dt);
    setIsLoading(true);
    console.log(dt);
    handleEdit({...dt, id:data._id}, setIsLoading);
  };
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleClose}
      ariaHideApp={false}
      contentLabel="Edit Modal"
      shouldCloseOnOverlayClick={true}
      className={
        "flex justify-center items-center outline-none w-3/5 md:w-1/3 h-[600px] pt-0 md:pt-20"
      }
      overlayClassName={
        "bg-[#d6d6d699] h-[102vh] w-full top-0 left-0 fixed flex justify-center items-center"
      }
    >
      <div className="h-full w-full bg-[#d1e2dc] rounded-md flex flex-col justify-between overflow-hidden">
        {!isLoading && (
          <div className="w-full">
            <p className="text-center bg-[#0d5a5f] hover:bg-[#093d41] text-black text-xl font-semibold p-3">
              ویرایش اطلاعات دانش آموز
            </p>
            <div className="w-full flex flex-col justify-evenly items-center pt-2">
              <Avatar src="" alt={data.fullName} sx={{ width: 30, height: 30 }}>
                {data.fullName[0].toUpperCase()}
              </Avatar>
              <div className="text-black w-full flex flex-col pt-3 gap-4">
                <div className="flex justify-between items-center px-3 gap-3">
                  <label>نام کاربری</label>
                  <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue={data.fullName}
                    name="fullName"
                    color="secondary"
                    {...register("name", { required: true }) }
                  />
                </div>
                <div className="flex justify-between items-center px-3 gap-3">
                  <label>ایمیل</label>
                  <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue={data.email}
                    type={"email"}
                    name="email"
                    color="primary"
                    {...register("email", { required: true }) }
                  />
                </div>
                <div className="flex justify-between items-center px-3 gap-3">
                  <label>شماره تلفن</label>
                  <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue={data.phoneNumber}
                    type={"text"}
                    name="phoneNumber"
                    color="primary"
                    {...register("phoneNumber", { required: true }) }
                  />
                </div>
                <div className="flex justify-between items-center px-3 gap-3">
                  <label>تاریخ تولد</label>
                  <InputDatePicker
                    placeholder="تاریخ تولد"
                    className="outline-none"
                    id="form-date"
                    name="birthDate"
                    // value={new Date(data.birthDate)}
                    {...register("birthDate", { required: true }) }
                  />
                </div>
                <div className="flex justify-between items-center px-3 gap-3">
                  <label>کد ملی</label>
                  <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue={data.nationalId}
                    type={"number"}
                    name="nationalId"
                    color="primary"
                    {...register("nationalId", { required: true }) }
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        {isLoading && (
          <div className="flex justify-center items-center h-full">
            <Loading />
          </div>
        )}
        <div className="w-full flex">
          <button
            className="text-white bg-[#0d5a5f] hover:bg-[#093d41] flex-grow p-3 hover:font-bold"
            onClick={editHandler}
          >
            ثبت اطلاعات
          </button>
        </div>
      </div>
    </ReactModal>
  );
};

export default EditModal;
