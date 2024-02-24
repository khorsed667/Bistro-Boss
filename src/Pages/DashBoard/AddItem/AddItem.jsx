import React from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import Headings from "../../../Components/Headings/Headings";

const AddItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const imgToken = import.meta.env.VITE_img_token;
  const imgHostingUrl = `https://api.imgbb.com/1/upload?key=${imgToken}`;
  const [, refetch] = useMenu();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(imgHostingUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const imgUrl = imgData.data.display_url;
          console.log(imgUrl);
          const { name, recipe, category, price } = data;
          const newItem = {
            name,
            recipe,
            image: imgUrl,
            category,
            price: parseFloat(price),
          };
          console.log(newItem);

          fetch("https://bistro-server-psi.vercel.app/menu", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newItem),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                refetch();
                Swal.fire({
                  icon: "success",
                  title: "Item Successfully added to cart",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
        }
      });
  };
  console.log(errors);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Helmet>
        <title>Add item | Bistro Boss</title>
      </Helmet>
      <Headings subHeading={'Whats new?'} headings={'Add Item'}></Headings>
      <div className="w-5/6 bg-white px-4 py-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control my-3 w-full">
            <div className="label">
              <span className="label-text font-semibold">Recipe Name*</span>
            </div>
            <input
              type="text"
              placeholder="Recipe Name"
              {...register("name", { required: true })}
              className="input input-bordered w-full"
            />
          </label>
          <div className="flex">
            <label className="form-control w-full me-2">
              <div className="label">
                <span className="label-text font-semibold">Category*</span>
              </div>
              <select
                defaultValue={"Salad"}
                {...register("category", { required: true })}
                className="select select-bordered"
              >
                <option disabled>Category</option>
                <option>salad</option>
                <option>soup</option>
                <option>pizza</option>
                <option>dessert</option>
                <option>drinks</option>
              </select>
            </label>
            <label className="form-control w-full ms-2">
              <div className="label">
                <span className="label-text font-semibold">Price*</span>
              </div>
              <input
                type="number"
                placeholder="Price"
                {...register("price", { required: true })}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <label className="form-control my-3">
            <div className="label">
              <span className="label-text font-semibold">Recipe Details*</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              {...register("recipe", { required: true })}
              placeholder="Recipe Details"
            ></textarea>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input my-4 w-full"
          />
          <input
            type="submit"
            className="btn  bg-gradient-to-r from-[#835d23] to-[#b3802f] p-2 text-white"
            value="Add Item"
          />
        </form>
      </div>
    </div>
  );
};

export default AddItem;
