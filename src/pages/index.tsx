import Image from "next/image";
import { Inter } from "next/font/google";
// import { UseSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { fetchData } from "@/redux/action";
import { RootState } from "@/redux/rootReducer";
import dynamic from "next/dynamic";
import logo from "../../public/Logo.png";

// import { MapContainer, TileLayer, useMap } from "react-leaflet";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  {
    ssr: false;
  }
  const Map = dynamic(() => import("@/components/map"));
  const firstRender = useRef(true);
  const data = useSelector((state: RootState) => state.dataReducer.data);
  const dispatch = useDispatch();
  useEffect(() => {
    if (firstRender.current && !data?.length) {
      firstRender.current = false;
      dispatch(fetchData());
    }
  }, []);

  if (data?.length) {
    console.log(data);
    let arr: string[] = [];
    for (let i = 0; arr.length < 9; i++) {
      arr = [
        ...arr,
        ...data[i]?.category_title?.filter(
          (item: string) => !arr.includes(item)
        ),
      ];
    }
  }
  const routesList = [
    "Services",
    "Portfolio",
    "Company",
    "Event & Media",
    "Blogs",
  ];
  return (
    <>
      <header className="w-full h-59 header">
        <div className="container flex justify-between items-center w-full mx-auto h-full">
          <Link href={"/"} className="logo">
            <Image src={logo} alt="" className="image" />
          </Link>
          <ul className="routesList flex">
            {routesList.map((data: string, index: number) => (
              <li key={index}>
                <Link href={`/Key-Highlights`}>{data}</Link>
              </li>
            ))}
          </ul>
          <Link href={""} className="letsTalk">
            Let's talk
          </Link>
        </div>
      </header>
      <main style={{ maxHeight: "100%", maxWidth: "100%", overflow: "hidden" }}>
        <div id="map" style={{ height: "400px", width: "100%" }}></div>
        <Map />
      </main>
    </>
  );
}
