const LoadingComponent = () => {
  return (
    <>
      <div className="flex items-end gap-2">
        <div className="relative flex">
          <img
            src={"https://picsum.photos/200/300"}
            className="h-10 w-10 items-center justify-center rounded-full object-cover"
          />
        </div>
        <div className="lds-facebook w-40 rounded-br-xl rounded-tl-xl rounded-tr-xl bg-[#f2f6fa] p-4">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default LoadingComponent;
