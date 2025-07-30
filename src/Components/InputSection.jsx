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

  return (<>
    <h1>Input Field:</h1>
    <section>
      <form onSubmit={handleSubmit(handleClickSumbit)}>
        <label htmlFor="text">Input 1: </label>
        <input {...register("input1", {
          required: "This input is requierd.",
          minLength: { value: 4, message: "This input must have atleast 4 character." },
        }
        )} type="text" id="text" name="input1" placeholder="Text" />
        {errors.input1?.message}

        <br />

        <label htmlFor="number">Input 2: </label>
        <input {...register("input2", {
          required: "This input is requierd.",
          minLength: { value: 6, message: "This input must have atleast 6 character." }
        })} type="number" id="number" name="input2" placeholder="Number" />
        {errors.input2?.message}

        <br />

        <label>Input 3: </label>
        <Controller control={control} name="date" rules={{ required: "Date is required." }} render={({ field }) => (
          <DatePicker placeholderText="Choose a date" selected={field.value} onChange={(date) => field.onChange(date)} dateFormat="dd/MM/yyyy" isClearable showYearDropdown scrollableYearDropdown />
        )}>
        </Controller>
        {errors.date?.message}

        <br />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </section>
  </>)
}
