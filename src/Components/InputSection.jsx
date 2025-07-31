import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { storeData } from "./../Store/index.js";

export default function InputSection() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting }
  } = useForm();

  async function handleClickSumbit(data) {
    await new Promise(resolve => setTimeout(resolve, 1000));  //Fake delay
    dispatch(storeData({
      input1: data.input1,
      input2: data.input2,
      input3: data.date.toISOString().split("T")[0]
    }));

    reset();
  }

  let color = isSubmitting ? "bg-sky-950 text-stone-300" : "bg-amber-400 text-sky-900";

  return (
    <main className="h-full sm:w-1/2 bg-sky-950">
      <div className="p-8 flex flex-col">
        <h1 className="text-4xl font-bold text-rose-50 mb-8">Input Field</h1>
        <div className="flex justify-center items-center h-[70vh]">
          <section className="bg-sky-900 w-128 rounded-lg p-6">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit(handleClickSumbit)}>
              <div className="flex flex-col gap-2">
                <label className="text-amber-400 font-bold flex" htmlFor="text">Input 1 <p className="font-normal text-red-500 pl-2 text-sm mt-1">{errors.input1?.message}</p></label>
                <input className="bg-stone-300 placeholder-stone-600 text-sky-950 p-1.5 rounded-md" {...register("input1", {
                  required: "This input is requierd.",
                  minLength: { value: 4, message: "This input must have atleast 4 character." },
                }
                )} type="text" id="text" name="input1" placeholder="Text" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-amber-400 font-bold flex" htmlFor="number">Input 2 <p className="font-normal text-red-500 pl-2 text-sm mt-1">{errors.input2?.message}</p></label>
                <input className="bg-stone-300 placeholder-stone-600 text-sky-950 p-1.5 rounded-md" {...register("input2", {
                  required: "This input is requierd.",
                  minLength: { value: 6, message: "This input must have atleast 6 character." }
                })} type="number" id="number" name="input2" placeholder="Number" />
              </div>

              <div  className="flex flex-col gap-2">
                <label className="text-amber-400 font-bold flex">Input 3 <p className="font-normal text-red-500 pl-2 text-sm mt-1">{errors.date?.message}</p></label>
                <Controller control={control} name="date" rules={{ required: "Date is required." }} render={({ field }) => (
                  <DatePicker className="bg-stone-300 placeholder-stone-600 text-sky-950 p-1.5 rounded-md w-full" placeholderText="Choose a date" selected={field.value} onChange={(date) => field.onChange(date)} dateFormat="dd/MM/yyyy" isClearable showYearDropdown scrollableYearDropdown />
                )}>
                </Controller>
              </div>

              <button type="submit" disabled={isSubmitting} className={`${color} w-30 py-2 px-4 rounded-md mt-4 text-center`}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </section>
        </div>
      </div>
    </main >
  )
}
