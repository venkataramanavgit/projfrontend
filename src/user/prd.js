import React, { useEffect } from "react";

function Pre() {

  useEffect(() => {
    window.location.href = "http://127.0.0.1:5500/lcodev/projfrontend/public/pd/index.html";
  }, []);

  return (
    <div>
      <h2>Prediction</h2>
    </div>
  );
}

export default Pre;