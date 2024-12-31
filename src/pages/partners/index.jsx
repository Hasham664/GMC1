import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import Partners from "../../components//agent-view/partners";

const index = () => {
  return (
    <>
      <Seo pageTitle="Simple Listing –Partners" />
      <Partners />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
