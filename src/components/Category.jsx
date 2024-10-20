import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Category = () => {
  const [data, setData] = useState([]);
  const { categoryName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/feeder/${categoryName}`
        );
        if (res.data.feeder) {
          setData(res.data.feeder);
        }
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    };
    fetchCategory();
  }, [categoryName]);

  return (
    <div className="container mx-auto my-10 px-4">
      {/* Labels Start */}
      <div className="grid grid-cols-4 gap-4 text-center font-bold">
        <div>Name</div>
        <div>Phone Number</div>
        <div>Category</div>
        <div>Chapter Name</div>
      </div>
      {/* Labels End */}

      {/* Values Start */}
      {data.map((item, index) => (
        <div key={index} className="grid grid-cols-4 gap-4 mt-4 text-center">
          <div className="font-semibold">{item.name}</div>
          <div className="font-semibold">{item.phone}</div>
          <div className="font-semibold">{item.category}</div>
          <div className="font-semibold">{item.cname}</div>
        </div>
      ))}
      {/* Values End */}

      {/* Notes Start */}
      {data.length > 0 && ( // Check if there are items to avoid rendering empty notes
        <div className="mt-6">
          <h2 className="font-bold">Notes</h2>
          <div className="mt-2">
            {data.map((item, index) => (
              <div
                key={index}
                className="mt-2 p-2 border border-gray-300 rounded"
              >
                <h3 className="font-semibold">Notes</h3>
                <p>{item.notes || "No notes available."}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Notes End */}

      {/* Reaction Buttons Start */}
      <div className="mt-8 flex justify-center space-x-4">
        <button
          onClick={() => {
            alert("Thank you for your suggestion!");
            navigate("/user")
          }}
          className="bg-green-400 text-white px-4 py-2 rounded transition duration-300 hover:bg-green-500"
        >
          Positive
        </button>
        <button
          onClick={() => {
            alert("Thank you for your suggestion!");
            navigate("/user");
          }}
          className="bg-red-600 text-white px-4 py-2 rounded transition duration-300 hover:bg-red-700"
        >
          Negative
        </button>
      </div>
      {/* Reaction Buttons End */}
    </div>
  );
};

export default Category;
