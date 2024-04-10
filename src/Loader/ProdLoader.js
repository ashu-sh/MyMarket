import React from "react";
import ContentLoader from "react-content-loader";

function ProdLoader() {
  return (
    <div>
      <ContentLoader
        speed={2}
        width={300}
        height={400}
        viewBox="0 0 300 400"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="5" ry="5" width="300" height="200" />
        <rect x="0" y="220" rx="4" ry="4" width="300" height="20" />
        <rect x="0" y="250" rx="3" ry="3" width="200" height="15" />
        <rect x="0" y="280" rx="3" ry="3" width="100" height="15" />
        <rect x="0" y="310" rx="3" ry="3" width="100" height="15" />
      </ContentLoader>
    </div>
  );
}

export default ProdLoader;
