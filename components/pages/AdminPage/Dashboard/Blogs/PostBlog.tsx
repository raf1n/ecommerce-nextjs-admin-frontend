import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { IBlog, IBlogCategory } from "../../../../../interfaces/models";
import { EcommerceApi } from "../../../../../src/API/EcommerceApi";
import { controller } from "../../../../../src/state/StateController";
import DashboardBreadcrumb from "../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import SharedGoBackButton from "../../../../shared/SharedGoBackButton/SharedGoBackButton";
import SharedTiptap from "./SharedTiptap";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

interface Props {}

const PostBlog: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [selectedImage, setSelectedImage] = useState(null);
  const [categories, setCategories] = useState<IBlogCategory[]>([]);
  const router = useRouter();

  const FetchBlogCat = async () => {
    const { res, err } = await EcommerceApi.getAllBlogCategoriesForBlog();
    if (res) {
      setCategories(res);
    } else {
      console.log(err);
    }
  };
  useEffect(() => {
    FetchBlogCat();
  }, []);

  const imageChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      console.log(selectedImage);
    }
  };

  const editor = useEditor({
    extensions: [
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      //@ts-ignore
      TextStyle.configure({ types: [ListItem.name] }),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "prose prose-w-full dark:prose-invert prose-strong:text-black prose-headings:text-gray-700 prose-blockquote:text-gray-500 prose-base m-2 focus:outline-none leading-1 text-black",
      },
    },
  });

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
        imageUrl = "https://i.ibb.co/hFzX2M1/16211.jpg";
      }

      const blogData: IBlog = {
        imageURL: imageUrl,
        title: e.target.title.value,
        category: e.target.category.value,
        description: e.target.short_desc.value,
        long_description: editor?.getHTML() || "",
        isShowHomepage: e.target.show_homepage.value,
        status: e.target.status.value,
        seo_title: e.target.seo_title.value,
        seo_description: e.target.seo_description.value,
        postBy: states.currentUser?.slug,
      };

      const { res: postRes, err: postErr } = await EcommerceApi.addBlog(
        blogData
      );

      if (postRes) {
        toast.success("Successfully Blog Posted!");
        e.target.reset();
        editor?.commands.clearContent();
        setSelectedImage(null);
      }
    }

    controller.setApiLoading(false);
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
          <SharedGoBackButton title="Blogs" link="/admin/blogs/" />
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
                    id="title"
                    name="title"
                    className="form-control  rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                  />
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Category
                  </label>
                  <select
                    required
                    name="category"
                    id="category"
                    className="form-control h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                  >
                    <option value="">Select Category</option>
                    {categories.map((cat, indx) => (
                      <>
                        <option key={indx} value={cat.name}>
                          {cat.name}
                        </option>
                      </>
                    ))}
                  </select>
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Short Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    id="description"
                    name="short_desc"
                    className="form-control h-[100px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                  />
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Long Description <span className="text-red-500">*</span>
                  </label>
                  <SharedTiptap editor={editor} />
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Show Homepage ? <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full border rounded p-2 border-gray-200 bg-[#fdfdff] focus:outline-none"
                    name="show_homepage"
                    id="show_homepage"
                    required
                  >
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
                    required
                  >
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
                    name="seo_title"
                    className="form-control h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                  />
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    SEO Description
                  </label>
                  <textarea
                    id="seo_description"
                    name="seo_description"
                    className="form-control h-[100px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                  />
                </div>

                <div className="col-12">
                  <button
                    type="submit"
                    className="text-white rounded py-[.3rem] px-[.8rem] shadow-[0_2px_6px_#acb5f6] border border-[#6777ef] bg-[#2046DA]"
                  >
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

export default PostBlog;
