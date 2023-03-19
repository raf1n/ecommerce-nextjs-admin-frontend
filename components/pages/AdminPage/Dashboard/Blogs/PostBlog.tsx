import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { Editor, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { IBlogCategory } from "../../../../../interfaces/models";
import { EcommerceApi } from "../../../../../src/API/EcommerceApi";
import { controller } from "../../../../../src/state/StateController";
import DashboardBreadcrumb from "../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import SharedGoBackButton from "../../../../shared/SharedGoBackButton/SharedGoBackButton";
import SharedTiptap from "./SharedTiptap";
interface Props {}

const PostBlog: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [selectedImage, setSelectedImage] = useState(null);
  const [categories, setCategories] = useState<IBlogCategory[]>([]);

  const FetchBlogCat = async () => {
    const { res, err } = await EcommerceApi.getAllBlogCategories();
    if (res) {
      setCategories(res);
    } else {
      console.log(err);
    }
  };
  useEffect(() => {
    FetchBlogCat();
  }, []);
  // console.log("categories", categories);

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
        category: e.target.category.value,
        // description: e.target.description.value,
        description: editor?.getHTML(),
        isShowHomepage: e.target.show_homepage.value,
        status: e.target.status.value,
        seo_title: e.target.seo_title.value,
        seo_description: e.target.seo_description.value,
        // postBy: states.currentUser?.slug,
        postBy: "admin",
      };
      console.log(blogData);
      EcommerceApi.addBlog(blogData);
      e.target.reset();
      // !need to figure out better method than destroy to reset tiptap 
      //@ts-ignore
      editor.destroy();
      setSelectedImage(null);
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
                {/*  */}
                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Sub Category
                  </label>
                  <select
                    name="category"
                    id="category"
                    className="form-control h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]">
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
                {/*  */}

                {/* <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    id="description"
                    className="form-control h-[100px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                    name="description"
                  />
                </div> */}

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Description <span className="text-red-500">*</span>
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

export default PostBlog;
