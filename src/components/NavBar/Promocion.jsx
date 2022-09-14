import React from "react";

const Promocion = ({bannerPromo}) =>{
    return(
        <div className="bannerPromocion text-muted text-center bg-dark">
            {bannerPromo}
        </div>
    );
};

export default Promocion;