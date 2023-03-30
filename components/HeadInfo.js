import Head from "next/head";
const HeadInfo = ({ title, keyword, contents }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        {/* 페이지의 이름 변경 */}
        <meta keyword={keyword}></meta>
        <meta contents={contents}></meta>
      </Head>
    </div>
  );
};

HeadInfo.defaultProps = {
  title: "blog",
  keyword: "by next.js",
  contents: "practice",
};

export default HeadInfo;
