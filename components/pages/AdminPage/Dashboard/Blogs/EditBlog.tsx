import Color from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import ListItem from "@tiptap/extension-list-item";
import { useEditor } from "@tiptap/react";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { IBlog, IBlogCategory } from "../../../../../interfaces/models";
import { EcommerceApi } from "../../../../../src/API/EcommerceApi";
import { controller } from "../../../../../src/state/StateController";
import StarterKit from "@tiptap/starter-kit";
import DashboardBreadcrumb from "../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import SharedGoBackButton from "../../../../shared/SharedGoBackButton/SharedGoBackButton";
import SharedTiptap from "./SharedTiptap";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

interface Props {}

const EditBlog: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [selectedImage, setSelectedImage] = useState(null);
  const [categories, setCategories] = useState<IBlogCategory[]>([]);
  const [blogData, setBlogData] = useState<IBlog>();
  const { asPath } = useRouter();
  const blogSlug = asPath.split("/")[3];

  const router = useRouter();

  useEffect(() => {
    const getSingleBlog = async () => {
      if (blogSlug !== "[id]") {
        const { res, err } = await EcommerceApi.getSingleBlog(blogSlug);
        if (res) {
          setBlogData(res);
          editor?.commands.setContent(res.long_description);
        } else {
          console.log(err);
        }
      }
    };

    getSingleBlog();
  }, [blogSlug, categories]);
  console.log(blogData);

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

  const defaultValueSelected = categories.find(
    (blog_cat) => blog_cat.slug === blogData?.category_slug
  );

  const imageChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      console.log(selectedImage);
    }
  };

  const handleBlogUpdate = async (e: any) => {
    e.preventDefault();
    controller.setApiLoading(true);

    const image = e.target.imageURL.files[0];
    const formData = new FormData();
    formData.append("image", image);

    const { res, err } = await EcommerceApi.uploadImage(formData);
    if (res?.data?.url || !res?.data?.url) {
      let imageUrl;
      imageUrl = res?.data?.url;
      if (res?.data?.url === undefined || null) {
        imageUrl = blogData?.imageURL;
      }

      const updatedBlogData = {
        imageURL: imageUrl,
        title: e.target.title.value,
        category: e.target.category.value,
        description: e.target.short_desc.value,
        long_description: editor?.getHTML(),
        isShowHomepage: e.target.show_homepage.value,
        status: e.target.status.value,
        seo_title: e.target.seo_title.value,
        seo_description: e.target.seo_description.value,
        postBy: states.currentUser?.slug,
        // postBy: "admin",
      };

      const { res: editRes, err: editErr } = await EcommerceApi.editBlogs(
        updatedBlogData,
        blogSlug
      );
      if (editRes) {
        toast.success("Successfully Updated !");
      }
    }

    controller.setApiLoading(false);
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
        headline="Edit Blog"
        link="/Blog/edit-blog"
        slug="edit Blog"
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
              <form onSubmit={handleBlogUpdate}>
                <div className="form-group col-12 mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Thumbnail Image Preview
                  </label>
                  <div>
                    <picture>
                      {selectedImage ? (
                        <img
                          id="preview-img"
                          className="admin-img border border-[#ddd] p-0 m-0 max-w-[180px] h-[150px] object-cover"
                          src={URL.createObjectURL(selectedImage)}
                          alt=""
                        />
                      ) : (
                        <img
                          id="preview-img"
                          className="admin-img border border-[#ddd] p-0 m-0 max-w-[180px] h-[150px] object-cover"
                          src={blogData?.imageURL ? blogData.imageURL : ""}
                          alt=""
                        />
                      )}
                    </picture>
                  </div>
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
                    id="name"
                    className="form-control  rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                    name="title"
                    defaultValue={blogData?.title}
                  />
                </div>
                {/*  */}
                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Category
                  </label>
                  <select
                    required
                    name="category"
                    id="category"
                    className="form-control h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]">
                    <option value="">Select Category</option>
                    {categories.map((cat: IBlogCategory, indx) => (
                      <>
                        <option
                          selected={blogData?.category_slug === cat.name}
                          key={indx}
                          value={cat.name}>
                          {cat.name}
                        </option>
                      </>
                    ))}
                  </select>
                </div>
                {/*  */}

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Short Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    id="description"
                    className="form-control h-[100px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                    name="short_desc"
                    defaultValue={blogData?.description}
                  />
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Long Description <span className="text-red-500">*</span>
                  </label>
                  {blogData && <SharedTiptap editor={editor} />}
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
                    <option
                      selected={blogData?.isShowHomepage === "yes"}
                      value="yes">
                      Yes
                    </option>
                    <option
                      selected={blogData?.isShowHomepage === "no"}
                      value="no">
                      No
                    </option>
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
                    <option
                      selected={blogData?.status === "active"}
                      value="active">
                      Active
                    </option>
                    <option
                      selected={blogData?.status === "inactive"}
                      value="inactive">
                      In Active
                    </option>
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
                    defaultValue={blogData?.seo_title}
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
                    defaultValue={blogData?.seo_description}
                  />
                </div>

                <div className="col-12">
                  <button
                    type="submit"
                    className="text-white rounded py-[.3rem] px-[.8rem] shadow-[0_2px_6px_#acb5f6] border border-[#6777ef] bg-[#2046DA]">
                    Update
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

export default EditBlog;
