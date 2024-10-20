import { useState } from "react";
import axios from "axios";

const Feeder = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: Number,
    address: "",
    cname: "",
    chapter: "",
    category: "",
    notes: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/feeder/add-new",
        formData
      );
      console.log(res.data);    
    } catch (error) {
      console.log(error);
    }
    alert("Your feed recorded!")
    window.location.href = "/";
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="text-black p-4 mx-10 my-5 md:mx-[20vw] md:my-[8vh] bg-slate-200 font-semibold rounded"
      >
        Name :
        <input
          type="text"
          className="mt-2 mb-3 border-b-[1px] border-black rounded w-full px-2 py-1 bg-transparent outline-none"
          placeholder="Enter your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        Phone Number :
        <input
          className="mt-2 mb-3 border-b-[1px] border-black rounded w-full px-2 py-1 bg-transparent outline-none"
          type="phone"
          value={formData.number}
          onChange={handleChange}
          name="phone"
          placeholder="Enter your Phone Number"
        />
        <br />
        Address :
        <br />
        <textarea
          className="mt-2 mb-3 border-b-[1px] border-black rounded w-full px-2 py-1 bg-transparent outline-none"
          name="address"
          placeholder="Enter your address"
          value={formData.address}
          onChange={handleChange}
        />
        <br />
        Company Name :
        <br />
        <input
          type="text"
          className="mt-2 mb-3 border-b-[1px] border-black rounded w-full px-2 py-1 bg-transparent outline-none"
          placeholder="Enter your company name"
          value={formData.cname}
          name="cname"
          onChange={handleChange}
        />
        <br />
        Chapter Name :
        <br />
        <input
          type="text"
          className="mt-2 mb-3 border-b-[1px] border-black rounded w-full px-2 py-1 bg-transparent outline-none"
          placeholder="Enter your Chapter name"
          name="chapter"
          value={formData.chapter}
          onChange={handleChange}
        />
        <br />
        Category :
        <br />
        <input
          type="text"
          className="mt-2 mb-3 border-b-[1px] border-black rounded w-full px-2 py-1 bg-transparent outline-none"
          placeholder="Enter Category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
        <br />
        Notes :
        <br />
        <textarea
          className="mt-2 mb-3 border-b-[1px] border-black rounded w-full px-2 py-1 bg-transparent outline-none"
          placeholder="Enter your Notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="px-2 py-1 ml-5 border-[1px] hover:bg-transparent hover:border-[1px] text-white hover:text-black border-white rounded mt-4 transition-all bg-green-500"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Feeder;
