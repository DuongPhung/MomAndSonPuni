import { Blog } from "@/types/blog";

import Image from "next/image";
import Link from "next/link";
import styles from "./styles";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, publishDate } = blog;

  return (
    <div className={styles.single_warraper} data-wow-delay=".1s">
      <Link href="/blog-details" className={styles.single_link}>
        <img src={image} alt="image" style={{ width: "100%", height: 250, objectFit: "cover" }} />
      </Link>
      <div className={styles.single_body}>
        <h3>
          <Link href="/blog-details" className={styles.single_title}>
            {title}
          </Link>
        </h3>
        <p className={styles.single_subTitle}>
          {paragraph}
        </p>
        <div className={styles.single_footer}>
          <div className={styles.single_footer_left}>
            <div className="mr-4">
              <div className={styles.single_avatar}>
                <Image src={author.image} alt="author" fill />
              </div>
            </div>
            <div className="w-full">
              <h4 className={styles.single_title_date}>
                By: {author.name}
              </h4>
              <p className={styles.single_date}>{author.designation}</p>
            </div>
          </div>
          <div className={styles.single_footer_right}>
            <h4 className={styles.single_title_date}>
              Ngày:
            </h4>
            <p className={styles.single_date}>{publishDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
