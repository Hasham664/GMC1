import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import sellform from "../components/sellform";

const index = () => {
  return (
    <>
      <Seo pageTitle="sellform" />
      <sellform />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
