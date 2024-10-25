import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../Context";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const AddBlog = () => {
  const { formData, setFormData, isEdit, setIsEdit } =
    useContext(GlobalContext);
  const navigate = useNavigate();
  const location = useLocation();

  async function handlSaveToDatabase() {
    const response = isEdit
      ? await axios.put(
          `http://localhost:2000/api/blogs/update/${location.state.getCurrentBlog._id}`,
          {
            title: formData.title,
            description: formData.description,
          }
        )
      : await axios.post("http://localhost:2000/api/blogs/add", {
          title: formData.title,
          description: formData.description,
        });
    const result = await response.data;

    if (result) {
      setIsEdit(false);
      setFormData({
        title: "",
        description: "",
      });
      navigate("/");
    }
  }

  useEffect(() => {
    console.log(location);
    if (location.state) {
      const { getCurrentBlog } = location.state;
      setIsEdit(true);
      setFormData({
        title: getCurrentBlog.title,
        description: getCurrentBlog.description,
      });
    }
  }, []);

  return (
    <div className="p-5 flex flex-col items-center gap-5">
      <h1>{isEdit ? "Edit the Blog" : "Add a Blog"}</h1>
      <div className="flex flex-col  w-1/3 gap-5 p-1">
        {" "}
        <input
          type="text"
          placeholder="Blog Title"
          id="title"
          name="title"
          className="h-5 border-none p-3 rounded-lg shadow-md shadow-pink-300 "
          value={formData.title}
          onChange={(e) =>
            setFormData({
              ...formData,
              title: e.target.value,
            })
          }
        />
        <textarea
          name="description"
          placeholder="Blog Description"
          id="description"
          className="h-52 border-none p-3 rounded-lg shadow-md shadow-pink-300"
          value={formData.description}
          onChange={(e) =>
            setFormData({
              ...formData,
              description: e.target.value,
            })
          }
        />
        <button
          onClick={handlSaveToDatabase}
          className="  border-none p-2 bg-slate-400 hover:bg-slate-300  rounded-lg shadow-md shadow-pink-300"
        >
          {isEdit ? "Save" : "Add Blog"}
        </button>
      </div>
    </div>
  );
};

export default AddBlog;
