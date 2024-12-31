import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import Sell from "../components/sell";

const index = () => {
  return (
    <>
      <Seo pageTitle="Sell your property" />
      <Sell />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
