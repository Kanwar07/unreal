import { Stack } from "@mui/material";
import "./Column2.css";
import "./Header.css";
import USDC from "./Assets/USDC.png";
import Compound from "./Assets/Compound.png";
import blackline from "./Assets/blackline.png";
import greenline from "./Assets/greenline.png";
import purpleline from "./Assets/purpleline.png";

function Column2() {
  return (
    <>
      <div>
        <div className="main1">
          <Stack direction="row" className="color">
            <Stack direction="column" className="parent">
              <Stack direction="row" className="text">
                <div>
                  <div className="heading">Total Earning</div>
                  <div className="heading1">$311.32M</div>
                </div>
                <div>
                  <div className="heading">Earn APR</div>
                  <div className="heading1">
                    <img className="image2" src={USDC} alt="USDC" />
                    4.88%
                  </div>
                </div>
                <div>
                  <div className="heading">Earn Distribution</div>
                  <div className="heading1">
                    <img className="image2" src={Compound} alt="Compound" />
                    0.00%
                  </div>
                </div>
                <div>
                  <div className="heading">Reserves</div>
                  <div className="heading1">$1.34M</div>
                </div>
              </Stack>
              <Stack direction="row" className="text">
                <div>
                  <div className="heading">Total Borrowing</div>
                  <div className="heading1">$302.54M</div>
                </div>
                <div>
                  <div className="heading">Borrow APR</div>
                  <div className="heading1">
                    <img className="image2" src={USDC} alt="USDC" />
                    3.99%
                  </div>
                </div>
                <div>
                  <div className="heading">Borrow Distribution</div>
                  <div className="heading1">
                    <img className="image2" src={Compound} alt="Compound" />
                    3.04%
                  </div>
                </div>
                <div>
                  <div className="heading">Oracle Price</div>
                  <div className="heading1">$1.00</div>
                </div>
              </Stack>
            </Stack>
            <Stack direction="row" className="parent1">
              <Stack direction="column" className="text1">
                <div className="heading2">Utilization</div>
                <div className="heading3">Borrow APR</div>
                <div className="heading4">Earn APR</div>
              </Stack>
              <Stack direction="column">
                <div>
                  <img className="image3" src={blackline} alt="blackline" />
                </div>
                <div>
                  <img className="image4" src={purpleline} alt="purpleline" />
                </div>
                <div>
                  <img className="image4" src={greenline} alt="greenline" />
                </div>
              </Stack>
            </Stack>
          </Stack>
        </div>
      </div>
    </>
  );
}

export default Column2;
