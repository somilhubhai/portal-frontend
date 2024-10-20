import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get("http://localhost:3000/feeder/category");
        if (res.data) {
          setCategories(res.data.categories); 
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategory();
  }, []);

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setSelectedCategory(selectedCategory);
    navigate(`/category/${selectedCategory}`);
  };

  return (
    <>
      <div className="md:mx-[40vw] md:my-[30vh] my-[20vh]">
        <h2 className="text-2xl text-center">Choose by Category</h2>
        <select
          name="category"
          id="category"
          className="mt-5 ml-20 bg-blue-400 px-3 rounded outline-none py-1 text-white"
          value={selectedCategory} // Controlled value
          onChange={handleCategoryChange} // handle category change
        >
          <option value="" disabled>
            Select a category
          </option>
          {categories.map((categoryObj) => (
            <option key={categoryObj._id} value={categoryObj.category}>
              {categoryObj.category}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default User;
