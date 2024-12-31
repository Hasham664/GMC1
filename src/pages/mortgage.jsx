import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import Mortgage from "../components/mortgage";

const index = () => {
  return (
    <>
      <Seo pageTitle="Mortgage Calculator" />
      <Mortgage />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
