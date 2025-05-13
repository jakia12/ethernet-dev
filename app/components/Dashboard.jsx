import { HiDuplicate } from "react-icons/hi";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4 text-white">
      <h1 className="  text-[33px]">Dashboard</h1>
      <p className="text-[15px] text-muted-foreground">
        Statistics and <span className="text-[#00FFB2]">wallet</span>{" "}
        information.
      </p>

      {/* Boxes Container */}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-[13px] w-full  bg-[#171717] p-[12px] border border-[#383838] rounded-[12px]">
        {/* Wallet Balance Box */}
        <div className="bg-[#202020] border border-[#383838] rounded-[12px] p-4 flex flex-col justify-between ">
          <div>
            <div className="flex justify-between">
              <p className="text-[13px] text-[#fff]">Wallet Balance</p>
              <div className="flex justify-between items-center gap-2 cursor-pointer">
                <span className="text-[11px] text-[#969696]">
                  7B4fY...j62mZ
                </span>
                <span className="text-[11px] text-[#fff]">
                  <HiDuplicate />
                </span>
              </div>
            </div>
            <div className="flex  items-center gap-1 mt-[17px]">
              <img
                src="/images/usdc.svg"
                alt=""
                className="w-[15px] h-[15px]"
              />
              <span className="text-[11px] text-[#ffffffde] font-normal">
                USDC
              </span>
            </div>

            <p className="text-[17px] font-bold  text-[#fff]">$28,994</p>
            <div className="mt-[17px]">
              <p className="text-[13px] text-[#ffffffde] font-normal">
                <span className="text-[11px] text-[#00FFB2] font-normal">
                  Ξ
                </span>
                16.432
              </p>
            </div>
            <p className="text-[25px] font-bold ">$41,208.87</p>
          </div>
        </div>

        {/* Chain Health Box */}
        <div className="bg-[#202020] border border-[#383838] rounded-[12px] p-4 ">
          <p className="text-[13px] text-[#fff]">Chain Health</p>
          <div className="mt-[59px]">
            <p className="text-[13px] text-[#ffffffde] font-normal">
              Gas (gwei)
            </p>

            <p className="text-2xl font-bold">2.72</p>
            <p className="text-[13px] text-[#00FFB2] mt-1  ">Low Traffic</p>
          </div>
        </div>

        {/* Launch Prompt Box */}
        <div className="col-span-1 lg:col-span-2 bg-[#202020] border border-[#383838] rounded-[12px] px-4 py-7">
          <p className="text-[15px] text-[#fff]">
            <span className="text-[#00FFB2]"> Deploy successful tokens</span> on
            our
          </p>
          <p className="text-[15px] text-[#fff]">
            launchpad to <span className="text-[#00FFB2]"> earn points</span>{" "}
            toward a
          </p>
          <p className="text-[15px] text-[#fff]">
            potential <span className="text-[#00FFB2]"> $NET airdrop!</span>
          </p>
          <button className="mt-4 px-6 py-1 border border-[#00FFB2] text-[#00FFB2] rounded-[30px]">
            LAUNCH
          </button>
        </div>
      </div>

      {/* bottom text */}
      <div>
        <p className="text-[13px] text-[#fff]">
          To launch tokens, press the{" "}
          <span className="text-[#00FFB2]">LAUNCH</span> tab in the top nav bar.
        </p>
        <p className="text-[13px] text-[#fff]">
          Visit the <span className="text-[#00FFB2]">documentation</span> to
          learn about our available APIs and other information.
        </p>
      </div>
    </div>
  );
}
