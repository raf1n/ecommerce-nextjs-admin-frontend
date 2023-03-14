import React, { useState } from "react";
import { useSelector } from "react-redux";
import { EcommerceApi } from "../../../../../src/API/EcommerceApi";
import { controller } from "../../../../../src/state/StateController";
import DashboardBreadcrumb from "../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import SharedGoBackButton from "../../../../shared/SharedGoBackButton/SharedGoBackButton";
interface Props {}
const Blogs: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [selectedImage, setSelectedImage] = useState(null);

  const imageChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      console.log(selectedImage);
    }
  };
  //--------------------------- handle ----------------

  const handleBlogAdd = async (e: any) => {
    e.preventDefault();
    const image = e.target.imageURL.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const { res, err } = await EcommerceApi.uploadImage(formData);
    if (res?.data?.url || !res?.data?.url) {
      let imageUrl;
      imageUrl = res?.data?.url;
      if (res?.data?.url === undefined || null) {
        imageUrl = "";
      }

      const blogData = {
        imageURL: imageUrl,
        title: e.target.title.value,
        catSlug: e.target.category.value,
        description: e.target.description.value,
        isShowHomepage: e.target.show_homepage.value,
        status: e.target.status.value,
        seo_title: e.target.seo_title.value,
        seo_description: e.target.seo_description.value,
        // postBy: states.currentUser?.slug,
        postBy: "admin",
      };
      console.log(blogData);
      EcommerceApi.addBlog(blogData);
      // e.target.reset();
      setSelectedImage(null);
    }
  };

  return (
    <div>
      <DashboardBreadcrumb
        headline="Create Blog"
        link="/Blog/create-blog"
        slug="Create Blog"
      />
      <div className="m-6">
        <div className="section-body">
          <SharedGoBackButton title="Blogs" link="/blogs" />
        </div>
      </div>
      {/*************************************/}
      <div className="px-[25px] w-full relative">
        <div className="mt-4">
          <div className="mt-6 shadow-md bg-white rounded relative mb-7 border-0">
            <div className="p-5 leading-6 mt-7">
              <form onSubmit={handleBlogAdd}>
                <div className="form-group col-12 mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Thumbnail Image Preview
                  </label>
                  {selectedImage ? (
                    <div>
                      <picture>
                        <img
                          id="preview-img"
                          className="admin-img border border-[#ddd] p-0 m-0 max-w-[180px] h-[150px] object-cover"
                          src={URL.createObjectURL(selectedImage)}
                          alt=""
                        />
                      </picture>
                    </div>
                  ) : (
                    <div>
                      <picture>
                        <img
                          id="preview-img"
                          className="admin-img border border-[#ddd] p-0 m-0 max-w-[180px] h-[150px] object-cover"
                          src="https://api.websolutionus.com/shopo/uploads/website-images/preview.png"
                          alt=""
                        />
                      </picture>
                    </div>
                  )}
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Thumbnail Image for blog
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    name="imageURL"
                    type="file"
                    onChange={imageChange}
                    className="form-control-file"
                  />
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    className="form-control  rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                    name="title"
                  />
                </div>
                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    name="category"
                    id="category"
                    className="form-control h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]">
                    <option value="">Select Category</option>
                    <option value="blog-cat-1">Blog Category 1</option>
                    <option value="blog-cat-2">Blog Category 2</option>
                    <option value="blog-cat-3">Blog Category 3</option>
                  </select>
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    id="description"
                    className="form-control h-[100px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                    name="description"
                  />
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Show Homepage ? <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full border rounded p-2 border-gray-200 bg-[#fdfdff] focus:outline-none"
                    name="show_homepage"
                    id="show_homepage"
                    required>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Status <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full border rounded p-2 border-gray-200 bg-[#fdfdff] focus:outline-none"
                    name="status"
                    id="status"
                    required>
                    <option value="active">Active</option>
                    <option value="inactive">InActive</option>
                  </select>
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    SEO Title
                  </label>
                  <input
                    type="text"
                    id="seo_title"
                    className="form-control h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                    name="seo_title"
                  />
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    SEO Description
                  </label>
                  <textarea
                    id="seo_description"
                    className="form-control h-[100px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                    name="seo_description"
                  />
                </div>

                <div className="col-12">
                  <button className="text-white rounded py-[.3rem] px-[.8rem] shadow-[0_2px_6px_#acb5f6] border border-[#6777ef] bg-[#2046DA]">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
