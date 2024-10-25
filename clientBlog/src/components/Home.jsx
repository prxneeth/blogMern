import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../Context";
import axios from "axios";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { blogList, setBlogList, pending, setPending } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  async function fetchBlogList() {
    setPending(true);
    const response = await axios.get("http://localhost:2000/api/blogs");
    const result = await response.data;

    if (result && result.blogList && result.blogList.length) {
      setBlogList(result.blogList);
      setPending(false);
    } else {
      setPending(false);
      setBlogList([]);
    }
  }

  useEffect(() => {
    fetchBlogList();
  }, []);

  function handleEditBlog(getCurrentBlog) {
    console.log(getCurrentBlog);
    navigate("/components/AddBlog", { state: { getCurrentBlog } });
  }

  async function handleDeleteBlog(getCurrentId) {
    const response = await axios.delete(
      `http://localhost:2000/api/blogs/delete/${getCurrentId}`
    );
    const result = await response.data;

    if (result?.message) {
      fetchBlogList();
      // navigate(0);
    }
  }

  return (
    <div className="p-5">
      <h1 className="text-center "> YOUR BLOGS</h1>
      {pending ? (
        <h1>Loading blogs. Please wait.</h1>
      ) : (
        <div className="grid grid-cols-3 gap-5 p-7 mt-3 mb-4 mr-4 ">
          {blogList && blogList.length ? (
            blogList.map((blogItem) => {
              return (
                <div
                  key={blogItem._id}
                  className="bg-blue-500 min-h-20 min-w-16 gap-3 p-4 flex flex-col justify-center rounded-lg hover:scale-105 duration-150"
                >
                  <p>{blogItem.title}</p>
                  <p>{blogItem.description}</p>
                  <div className="flex justify-end gap-5">
                    <EditIcon
                      onClick={() => handleEditBlog(blogItem)}
                      className="  hover:text-black"
                    />
                    <DeleteOutlineIcon
                      onClick={() => handleDeleteBlog(blogItem._id)}
                      className=" hover:text-black "
                    />
                  </div>
                </div>
              );
            })
          ) : (
            <div className=" ">
              {" "}
              <h3 className="text-center items-center">No Blogs Added.</h3>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
