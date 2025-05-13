const Launch = () => {
  return (
    <div className="w-[100%] ">
      <h1 className="  text-[33px]">Deploy</h1>

      <p className="text-[15px] text-muted-foreground mb-[15px]">
        <span className="text-[#00FFB2]">Launch</span> your new token on
        <span className="text-[#00FFB2]"> Ethereum Mainnet</span>
      </p>

      <div className="bg-[#171717] border border-[#383838] p-6 rounded-[12px] text-sm">
        <div className="flex flex-wrap items-center ">
          {/* Left Column */}
          <div className="w-full md:w-1/2  flex flex-col gap-4">
            <div>
              <label className="block mb-1 text-white text-xs">Name</label>
              <input className="lg:w-[78%] w-full bg-[#202020] text-white px-3 py-[7px] rounded-md outline-none border border-[#383838]" />
            </div>
            <div>
              <label className="block mb-1 text-white text-xs">Symbol</label>
              <input className="lg:w-[78%] w-full bg-[#202020] text-white px-3 py-[7px] rounded-md outline-none border border-[#383838]" />
            </div>
            <div>
              <label className="block mb-1 text-white text-xs">
                Total Supply
              </label>
              <input className="lg:w-[78%] w-full bg-[#202020] text-white px-3 py-[7px] rounded-md outline-none border border-[#383838]" />
            </div>
            <div>
              <label className="block mb-1 text-[#00FFB2] text-xs">
                Initial LP
              </label>
              <input className="lg:w-[78%] w-full bg-[#202020] text-white px-3 py-[7px] rounded-md outline-none border border-[#383838]" />
            </div>

            <div>
              <label className="block mb-1 text-white text-xs">
                Buy Tax (0–40%)
              </label>
              <input className="lg:w-[78%] w-full bg-[#202020] text-white px-3 py-[7px] rounded-md outline-none border border-[#383838]" />
            </div>
            <div>
              <label className="block mb-1 text-white text-xs">
                Sell Tax (0–40%)
              </label>
              <input className="lg:w-[78%] w-full bg-[#202020] text-white px-3 py-[7px] rounded-md outline-none border border-[#383838]" />
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2  flex flex-col gap-4 mt-4 lg:mt-0">
            <div>
              <label className="block mb-1 text-white text-xs">
                Telegram Link{" "}
                <span className="text-[#ffffff] text-[11px]">(optional)</span>
              </label>
              <input className="lg:w-[78%] w-full bg-[#202020] text-white px-3 py-[7px] rounded-md outline-none border border-[#383838]" />
            </div>
            <div>
              <label className="block mb-1 text-white text-xs">
                Twitter Link{" "}
                <span className="text-[#ffffff] text-[11px]">(optional)</span>
              </label>
              <input className="lg:w-[78%] w-full bg-[#202020] text-white px-3 py-[7px] rounded-md outline-none border border-[#383838]" />
            </div>
            <div>
              <label className="block mb-1 text-white text-xs">
                Website Link{" "}
                <span className="text-[#ffffff] text-[11px]">(optional)</span>
              </label>
              <input className="lg:w-[78%] w-full bg-[#202020] text-white px-3 py-[7px] rounded-md outline-none border border-[#383838]" />
            </div>
            <div className="opacity-0 hidden">
              <input className="lg:w-[78%] w-full bg-[#202020] text-white px-3 py-[7px] rounded-md outline-none border border-[#383838]" />
            </div>
            <div className="opacity-0 ">
              <label className="  text-white text-xs">
                Marketing Wallet{" "}
                <span className="text-[#ffffff]">(where tax is collected)</span>
              </label>
              <input className="lg:w-[78%] w-full bg-[#202020] text-white  rounded-md outline-none border border-[#383838]" />
            </div>
            <div>
              <label className="block mb-1 text-white text-xs">
                Marketing Wallet{" "}
                <span className="text-[#ffffff] text-[10px]">
                  (where tax is collected)
                </span>
              </label>
              <input className="lg:w-[78%] w-full bg-[#202020] text-white px-3 py-[7px] rounded-md outline-none border border-[#383838]" />
            </div>
            <div>
              <label className="block mb-1 text-white text-xs">
                Max Wallet{" "}
                <span className="text-[#ffffff] text-[10px]">
                  (max supply per wallet)
                </span>
              </label>
              <input className="lg:w-[78%] w-full bg-[#202020] text-white px-3 py-[7px] rounded-md outline-none border border-[#383838]" />
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs text-[#ffffff] mt-4">
        Cost: <span className="text-[#00FFB2]">0.08 eth</span> (+ Gas Fees and{" "}
        <span className="text-[#00FFB2]">Initial LP</span>)
      </p>

      <button className="mt-4 w-[100%] bg-[#00FFB2] text-black font-light py-[15px] rounded-[12px] hover:bg-green-300 transition cursor-pointer">
        DEPLOY TOKEN
      </button>
    </div>
  );
};

export default Launch;
