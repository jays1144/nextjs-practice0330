import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/router";
const index = ({ photo }) => {
  //   const router = useRouter();
  //   console.log(router);
  const { title, url } = photo;
  return (
    <div>
      <h2>image {title}</h2>
      <Image src={url} width={500} height={500}></Image>
      <Link href="/photos">go back</Link>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const photo = await res.json();
  return {
    props: {
      photo,
    },
  };
};
export const getStaticPaths = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`
  );
  const photos = await res.json();
  const id = photos.map((photo) => photo.id);
  const paths = id.map((id) => {
    return {
      params: { id: id.toString() },
    };
  });
  return {
    paths: paths,
    // fallback: "blocking",
    fallback: false,
  };
};

export default index;
