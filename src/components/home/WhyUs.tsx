const WhyUsImage = () => {
  return (
    <div className="w-full lg:min-h-screen min-h-[auto] flex justify-center items-center px-6 py-8 md:min-h-[auto]">
  
      <img
        src="https://zahabi-test-78997878.s3.ap-south-1.amazonaws.com/RWA+(3).png"
        alt="Why Us Desktop"
        className="hidden md:block w-auto h-5/6 object-contain"
      />

  
      <img
        src="https://zahabi-test-78997878.s3.ap-south-1.amazonaws.com/RWA+(4).png"
        alt="Why Us Mobile"
        className="block md:hidden w-full h-full object-contain"
      />
    </div>
  );
};




export default WhyUsImage;
