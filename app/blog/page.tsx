import React from 'react';
import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Pagination from '@/components/Pagination';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Spa Mẹ và Bé | Puni",
  description: "Những kinh nghiệm và kiến thức liên quan đến mẹ và bé tại Puni",
};

const Blog = () => {
  return (
    <React.Fragment>
      <Breadcrumb
        pageName="Blog Spa Mẹ và Bé"
        description="Những kinh nghiệm và kiến thức liên quan đến mẹ và bé tại Puni"
      />

      <section className="pb-[120px] pt-[20px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
          <Pagination />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Blog;
