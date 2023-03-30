import HeadInfo from "../components/HeadInfo";
import Image from "next/image";
import photosStyle from "../styles/Photos.module.css";
import Link from "next/link";
const photos = ({ photos }) => {
  return (
    <div>
      <HeadInfo title="My blog photos" />
      <h1>photo pages</h1>
      <ul className={photosStyle.photos}>
        {photos.map((photo) => (
          <li key={photo.id}>
            <Link href={`/photos/${photo.id}`}>
              <Image
                src={photo.thumbnailUrl} // 가져오는 이미지가 외부이미지일 경우 next.config.js에서 추가설정 필요
                width={100}
                height={100}
                alt={photo.title}
              />
              <span>{photo.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_start=0&_end=10"
  );
  const photos = await res.json();
  return {
    props: {
      photos,
    },
  };
};

export default photos;
// 라우터 설정 할필요없음
// 해당 컴포넌트명을 주소창에 입력해주면 열림
