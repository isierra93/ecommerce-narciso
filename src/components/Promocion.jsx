import React from "react";

const Promocion = ({bannerPromo}) =>{
    return(
        <div className="text-muted text-center navbar-dark bg-primary">
            {bannerPromo}
        </div>
    );
};

export default Promocion;