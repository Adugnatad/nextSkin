import Slider from "../components/slider";

const Products = () => {
  return (
    <>
      <Slider main={"Product"} />
      <div className="flex flex-col items-center md:mt-[20px] w-full">
        <div className="flex flex-col items-center my-5">
          <span className="text-[36px] font-bold mb-2 uppercase">
            aftercare products
          </span>
          <img src="/assets/colorfulBorder.svg" />
        </div>
        <div className="flex flex-row overflow-x-auto scrolling-touch scrollbar-hide p-3 w-full tb:w-fit tb:grid tb:grid-cols-3">
          <div className="flex flex-row items-center mr-[25px]">
            <div className="flex flex-col items-start  w-[365px] px-3 py-4 hover:bg-[#E1C75C1A] rounded-[20px] border-[1px] border-transparent border-solid hover:border-[#E1C75C] mb-[30px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer">
              <img src="/assets/aftercareProduct.svg" className="mb-3" />
              <span className="text-[20px] font-bold uppercase">Revolax</span>
              <span className="text-[#000] text-[14px]">
                deep with Lidocaine
              </span>
              <div className="flex flex-row items-center justify-between mt-3 w-full mb-2">
                <div className="flex flex-row items-center space-x-3">
                  <img src="/assets/fullStars.svg" />
                  <span className="text-[#C6C6C6]">4.5/5</span>
                </div>
                <div>
                  <s className="text-[#C6C6C6] text-[19px]">£249.99</s>
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-between">
                <button className="bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-white font-bold text-[17px] w-[170px] px-2 py-1 rounded-[50px] hover:bg-gradient-to-l">
                  ADD TO CART
                </button>
                <span className="font-semibold text-transparent text-[25px] bg-clip-text bg-gradient-to-b from-[#9D90D5] to-[#796AB8]">
                  £199.99
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 items-center mr-[25px]">
            <div className="flex flex-col items-start w-[365px] px-3 py-4 hover:bg-[#E1C75C1A] rounded-[20px] border-[1px] border-transparent border-solid hover:border-[#E1C75C]  mb-[30px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer">
              <img src="/assets/aftercareProduct.svg" className="mb-3" />
              <span className="text-[20px] font-bold uppercase">Revolax</span>
              <span className="text-[#000] text-[14px]">
                deep with Lidocaine
              </span>
              <div className="flex flex-row items-center justify-between mt-3 w-full mb-2">
                <div className="flex flex-row items-center space-x-3">
                  <img src="/assets/fullStars.svg" />
                  <span className="text-[#C6C6C6]">4.5/5</span>
                </div>
                <div>
                  <s className="text-[#C6C6C6] text-[19px]">£249.99</s>
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-between">
                <button className="bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-white font-bold text-[17px] w-[170px] px-2 py-1 rounded-[50px] hover:bg-gradient-to-l">
                  ADD TO CART
                </button>
                <span className="font-semibold text-transparent text-[25px] bg-clip-text bg-gradient-to-b from-[#9D90D5] to-[#796AB8]">
                  £199.99
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 items-center md:pr-4 pr-1">
            <div className="flex flex-col items-start w-[365px] px-3 py-4 hover:bg-[#E1C75C1A] rounded-[20px] border-[1px] border-transparent border-solid hover:border-[#E1C75C]  mb-[30px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer">
              <img src="/assets/aftercareProduct.svg" className="mb-3" />
              <span className="text-[20px] font-bold uppercase">Revolax</span>
              <span className="text-[#000] text-[14px]">
                deep with Lidocaine
              </span>
              <div className="flex flex-row items-center justify-between mt-3 w-full mb-2">
                <div className="flex flex-row items-center space-x-3">
                  <img src="/assets/fullStars.svg" />
                  <span className="text-[#C6C6C6]">4.5/5</span>
                </div>
                <div>
                  <s className="text-[#C6C6C6] text-[19px]">£249.99</s>
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-between">
                <button className="bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-white font-bold text-[17px] w-[170px] px-2 py-1 rounded-[50px] hover:bg-gradient-to-l">
                  ADD TO CART
                </button>
                <span className="font-semibold text-transparent text-[25px] bg-clip-text bg-gradient-to-b from-[#9D90D5] to-[#796AB8]">
                  £199.99
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 items-center md:pr-4 pr-1">
            <div className="flex flex-col items-start w-[365px] px-3 py-4 hover:bg-[#E1C75C1A] rounded-[20px] border-[1px] border-transparent border-solid hover:border-[#E1C75C]  mb-[30px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer">
              <img src="/assets/aftercareProduct.svg" className="mb-3" />
              <span className="text-[20px] font-bold uppercase">REVOLAX</span>
              <span className="text-[#000] text-[14px]">
                deep with Lidocaine
              </span>
              <div className="flex flex-row items-center justify-between mt-3 w-full mb-2">
                <div className="flex flex-row items-center space-x-3">
                  <img src="/assets/fullStars.svg" />
                  <span className="text-[#C6C6C6]">4.5/5</span>
                </div>
                <div>
                  <s className="text-[#C6C6C6] text-[19px]">£249.99</s>
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-between">
                <button className="bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-white font-bold text-[17px] w-[170px] px-2 py-1 rounded-[50px] hover:bg-gradient-to-l">
                  ADD TO CART
                </button>
                <span className="font-semibold text-transparent text-[25px] bg-clip-text bg-gradient-to-b from-[#9D90D5] to-[#796AB8]">
                  £199.99
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
