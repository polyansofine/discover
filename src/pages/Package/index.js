import PackageBanner from "../../components/banners/PackageBanner";
import PackageCard from "./PackageCard";
import { useEffect } from 'react';

export default function Package() {
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, []);
  
  return (
    <>
      <PackageBanner
        linkPage={[
          { type: "link", name: "Home", link: "/" },
          { name: "Adventure Package - Exclusive" },
        ]}
      />
      <PackageCard />
    </>
  );
}
