import Image from "next/image";
import React from "react";

const loading = () => {
  return (
    <div>
      <Image
        src={"/assets/icons/loader.svg"}
        width={50}
        height={3000}
        alt="loading..."
        className="animate-spin"
      />
    </div>
  );
};

export default loading;
