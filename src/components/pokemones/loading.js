import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
  return (
    <ClipLoader
      color={"black"}
      css={{ display: "block", margin: "0 auto" }}
      size={200}
    />
  );
};

export default Loading;
