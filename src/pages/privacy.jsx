import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import Privacy from "../components/privacy";

const index = () => {
  return (
    <>
      <Seo pageTitle="privacy your property" />
      <Privacy />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
