import { Stack } from "@mui/material";
import "./Column3.css";
import "./Header.css";
import Ethereum from "./Assets/Ethereum.png";
import wrappedbitcoin from "./Assets/wrappedbitcoin.png";
import Compound from "./Assets/Compound.png";
import uniswap from "./Assets/uniswap.png";
import chainlink from "./Assets/chainlink.png";

function Column3() {
  return (
    <>
      <div>
        <div className="main1">
          <div className="color1">
            <Stack direction="column" className="parent2">
              <Stack direction="row" className="text5">
                <div className="text6">Collateral Asset</div>
                <div className="text7">Total Supply</div>
                <div className="text7">Oracle Price</div>
                <div className="text7">Reserves</div>
                <div className="text7">Collateral Factor</div>
                <div className="text8">Liquidation Factor</div>
                <div className="text8">Liquidation Penalty</div>
              </Stack>
              <Stack direction="row" className="text5">
                <Stack direction="row" display="flex" alignContent="center">
                  <img className="image5" src={Ethereum} alt="Ethereum" />
                  <div className="text9">Ether</div>
                </Stack>
                <div>$381.34M</div>
                <div>$1,854.48</div>
                <div>$0.00</div>
                <div>83%</div>
                <div>90%</div>
                <div>5%</div>
              </Stack>
              <Stack direction="row" className="text5">
                <Stack direction="row" display="flex" alignContent="center">
                  <img
                    className="image5"
                    src={wrappedbitcoin}
                    alt="wrappedbitcoin"
                  />
                  <div className="text9">Wrapped Bitcoin</div>
                </Stack>
                <div>$227.20M</div>
                <div>$30,083.24</div>
                <div>$0.02</div>
                <div>70%</div>
                <div>77%</div>
                <div>5%</div>
              </Stack>
              <Stack direction="row" className="text5">
                <Stack direction="row" display="flex" alignContent="center">
                  <img className="image5" src={Compound} alt="Compound" />
                  <div className="text9">Compound</div>
                </Stack>
                <div>$50.82M</div>
                <div>$57.76</div>
                <div>$0.00</div>
                <div>65%</div>
                <div>70%</div>
                <div>12%</div>
              </Stack>
              <Stack direction="row" className="text5">
                <Stack direction="row" display="flex" alignContent="center">
                  <img className="image5" src={uniswap} alt="uniswap" />
                  <div className="text9">Uniswap</div>
                </Stack>
                <div>$11.61M</div>
                <div>$5.15</div>
                <div>$0.00</div>
                <div>75%</div>
                <div>81%</div>
                <div>7%</div>
              </Stack>
              <Stack direction="row" className="text5">
                <Stack direction="row" display="flex" alignContent="center">
                  <img className="image5" src={chainlink} alt="chainlink" />
                  <div className="text9">Chainlink</div>
                </Stack>
                <div>$4.20M</div>
                <div>$6.08</div>
                <div>$0.00</div>
                <div>79%</div>
                <div>85%</div>
                <div>7%</div>
              </Stack>
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
}

export default Column3;
