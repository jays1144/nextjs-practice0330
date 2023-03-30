export default function Home({ posts }) {
  console.log(posts);
  return (
    <div>
      <h1>Welcome to my blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

// export const getServerSideProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`);
//   const posts = await res.json();
//   // 서버에서 데이터가 바뀔때 바로적용됨

//   return {
//     props: {
//       posts,
//     },
//   };
// };

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`
  );
  const posts = await res.json();
  // 서버에서 데이터가 바뀌어도 바로적용되지않음
  // bulid할때 데이터를 index.html에 미리 생성해서 그걸 바탕으로 페이지를 보여주게함
  // 페이지가 긴급하게 바뀌지 않아도 될때
  // 데이터가 들어간 상태에서 그 html만 보여주면 되니까 렌더링등 속도면에서 효율이 좋음

  return {
    props: {
      posts,
    },
    revalidate: 5, // 처음 접속하고 설정한 시간후에 새롭게 값을 받아서 파일을 생성할수있도록 / build해야 적용됨
  };
};
