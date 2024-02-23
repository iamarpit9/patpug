import {
  ABlog,
  BlogApiResponse,
  SingleBlogApiResponse,
  blogID,
} from "@/types/types";
import useSWR from "swr";
const fetcher = (url: string) => fetch(url).then((r) => r.json());
const API_URL = "https://patpug-backend.onrender.com";

export const GetBlogs = () => {
  const { data, error, isLoading } = useSWR<BlogApiResponse>(
    `${API_URL}/api/blogs?populate=*`,
    fetcher,
  );
  const blogs = data?.data.sort((a: ABlog, b: ABlog) => {
    const dateA = new Date(a.attributes.createdAt);
    const dateB = new Date(b.attributes.createdAt);
    return dateB.getTime() - dateA.getTime();
  });

  return { blogs, error, isLoading };
};

export const GetBlog = (id: blogID) => {
  const { data, error, isLoading } = useSWR<SingleBlogApiResponse>(
    `${API_URL}/api/blogs/${id}?populate=*`,
    fetcher,
  );

  const title = data?.data?.attributes?.title;
  const description = data?.data?.attributes?.description;
  const createdAt = data?.data?.attributes?.createdAt;
  const imgUrl = data?.data?.attributes?.image?.data?.attributes.url;

  return { title, description, createdAt, imgUrl, error, isLoading };
};

export const Recentblogs = (currentBlogId: blogID) => {
  const { blogs } = GetBlogs();
  let recentBlogs: ABlog[] = [];

  if (blogs && blogs.length > 0) {
    // Filter out the current blog and then slice the first 3 blogs
    recentBlogs = blogs
      .filter((blog: ABlog) => blog.id != currentBlogId) // Assuming each blog has a unique 'id'
      .slice(0, 3);
  }

  return { recentBlogs };
};

export const truncatedDesc = (description: string) => {
  return description.length > 220
    ? description.substring(0, 220) + "..."
    : description;
};

export const truncatedTitle = (title: string) => {
  return title.length > 38 ? title.substring(0, 38) + "..." : title;
};

export const extractDateComponents = (dateString: string) => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthNames[date.getMonth()];
  const day = date.getDate();

  return { year, month: monthName, day };
};

export const giveShortDateComponent = (dateString: string) => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthName = monthNames[date.getMonth()];
  const day = date.getDate();

  return `${day} ${monthName} ${year}`;
};
