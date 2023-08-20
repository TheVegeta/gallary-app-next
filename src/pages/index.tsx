import dynamic from "next/dynamic";
// import ImageGallary from "../componenet/ImageGallary";
import LayoutProvider from "../componenet/LayoutProvider";
import UploadButton from "../componenet/UploadButton";
import { useGetAllGalleryQuery } from "../generated/graphql";

const ImageGallary = dynamic(() => import("../componenet/ImageGallary"), {
  ssr: false,
});

const index = () => {
  const { data, refetch } = useGetAllGalleryQuery({ variables: { pageNo: 0 } });

  const reFetchData = async () => {
    refetch();
  };

  return (
    <LayoutProvider>
      <UploadButton reFetchData={reFetchData} />
      {data?.getAllGallery && <ImageGallary data={data.getAllGallery} />}
    </LayoutProvider>
  );
};

export default index;
