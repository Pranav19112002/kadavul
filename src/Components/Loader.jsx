import { css } from "@emotion/react";
import { Margin } from "@mui/icons-material";
import { border, borderColor, margin } from "@mui/system";
import { useState } from "react";
import { PacmanLoader } from "react-spinners";





function Loader() {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
    const override = css`
    display: "block",
  margin: "0 auto",
  borderColor: "red",`
        ;

    return(
        <div className="pagecenter-container">
            <PacmanLoader color="#9400D3" loading={loading} size={80} css={override}/>

        </div>
    )

}

export default Loader