
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    role: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

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
        "http://localhost:3000/user/login",
        formData
      );
      console.log(res.data);

      if (res.data.user) {
        if (res.data.user.role === "feeder") {
          navigate("/feeder");
        } else {
          navigate("/user");
        }
      } else {
        setErrorMessage("Login failed. Invalid credentials or role.");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("An error occurred during login. Please try again.");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="text-black p-4 md:mx-[35vw] mx-10 my-10 md:my-[8vh] bg-slate-200 font-semibold rounded"
      >
        <br />
        ID :
        <input
          type="text"
          className="mt-2 mb-3 border-b-[1px] border-black rounded w-full px-2 py-1 bg-transparent outline-none"
          placeholder="Enter your ID"
          name="id"
          value={formData.id} 
          onChange={handleChange}
        />
        <br />
        Password :
        <input
          className="mt-2 mb-3 border-b-[1px] border-black rounded w-full px-2 py-1 bg-transparent outline-none"
          type="password"
          value={formData.password}
          onChange={handleChange}
          name="password"
          placeholder="Enter your password"
        />
        <br />
        Role :
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="mt-2 mb-3 border-b-[1px] border-black rounded w-full px-2 py-1 bg-transparent outline-none"
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="feeder">Feeder</option>
          <option value="user">User</option>
        </select>
        {errorMessage && (
          <p className="text-red-500 mt-2">{errorMessage}</p> // Display error message
        )}
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

export default Login;
