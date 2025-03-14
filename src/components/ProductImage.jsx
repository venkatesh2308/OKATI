import React from "react";

const ProductImage = React.memo(({ src, alt }) => {
    console.log(src)
    return <img src={src} alt={alt} style={{ width: "150px", height: "150px", objectFit: "cover" }} />;
  });
  

export default ProductImage;
