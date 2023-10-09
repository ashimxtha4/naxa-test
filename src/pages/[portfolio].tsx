import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { fetchData } from "@/redux/action";
import { RootState } from "@/redux/rootReducer";
import { singleData } from "@/redux/reducer";
import { useRouter } from "next/router";
import Image from "next/image";
import background from "../../public/backgroundImage.svg";
import KeyHiglights from "@/components/keyHiglights";
import DataCard from "@/components/dataCards";
import rightArrow from "../../public/arrow-right-light.svg";
import logo from "../../public/Logo.png"

export type dynamicDes = {
  title: string;
  description: string;
};

export default function Portfolio() {
  const router = useRouter();
  const firstRender = useRef(true);
  const [links, setLinks] = useState<dynamicDes[]>([]);
  const [routerLink, setRouter] = useState<string>("");
  const data = useSelector((state: RootState) => state.dataReducer.data);
  const dispatch = useDispatch();
  useEffect(() => {
    if (firstRender.current && !data?.length) {
      firstRender.current = false;
      dispatch(fetchData());
    }
  }, []);
  useEffect(() => {
    if (router.isReady) {
      if (typeof router.query.portfolio === "string")
        setRouter(router.query.portfolio);
    }
  }, [router.isReady, router]);

  if (data?.length && !links.length) {
    // console.log(data);
    let arr: string[] = [];
    let des: string[] = [];
    let finalArray: dynamicDes[] = [];

    for (let i = 0; arr.length < 9; i++) {
      arr = [
        ...arr,
        ...data[i]?.category_title?.filter(
          (item: string) => !arr.includes(item)
        ),
      ];
      des = [
        ...des,
        ...data[i]?.category_description?.filter(
          (item: string) => !des.includes(item)
        ),
      ];
    }
    for (let i = 0; i < 9; i++) {
      finalArray = [...finalArray, { title: arr[i], description: des[i] }];
    }
    setLinks(finalArray);
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
        <div className="container relative flex justify-between items-center w-full mx-auto h-full">
          <Link href={"/"} className="logo"><Image src={logo} alt="" className="image" /></Link>
          <ul className="routesList flex">
            {routesList.map((data: string, index: number) => (
              <li key={index}>
                <Link href={"/Key-Highlights"}>{data}</Link>
              </li>
            ))}
          </ul>
          <Link href={""} className="letsTalk">
            Let's talk
            <Image src={rightArrow} alt="" />
          </Link>
        </div>
      </header>
      <section className="bannerBackground absolute w-full top-0">
        <div className="imageDiv">
          <Image className="image" src={background} alt="" />
        </div>
      </section>
      <main className="min-h-screen">
        <div className="container relative  w-full mx-auto">
          <section className="captionDiv">
            <div className="captionContainer">
              <h6>PORTFOLIO</h6>
              <h1 className="bannerText">
                Diverse, <span className="blue">Impactful,</span> and Reliable.
              </h1>
            </div>
          </section>
          <section className="linkWrapper is-bg is-shadow flex justify-between p-0.5rem flex-wrap is-lg">
            <Link
              className={
                "Key-Highlights" == routerLink ? "links active" : "links"
              }
              href={`/Key-Highlights`}
            >
              <div>Key Highlights</div>
            </Link>
            {links?.map((data: dynamicDes) => (
              <Link
                className={
                  data?.title?.replace(/ /g, "-") == routerLink
                    ? "links active"
                    : "links"
                }
                href={`/${data?.title?.replace(/ /g, "-")}`}
              >
                <div>{data.title}</div>
              </Link>
            ))}
          </section>
          <section className="content relative p-2.5 mt-16 flex flex-col">
            {routerLink === "Key-Highlights" ? (
              <div className="keyHighlightsContainer ">
                {data?.map(
                  (props: singleData, index: number) =>
                    props.is_key_highlight && (
                      <KeyHiglights props={props} index={index} />
                    )
                )}
              </div>
            ) : (
              <>
                <div className="description">
                  {links
                    ?.find((obj) => obj.title == routerLink?.replace(/-/g, " "))
                    ?.description?.replace(/[`<p>``</p>`]/g, "")}
                </div>
                <div className="datasDiv">
                  {data?.map((values: singleData, index: number) => (
                    <>
                      {values?.category_title?.includes(
                        //@ts-ignore
                        router.query.portfolio.replace(/-/g, " ")
                      ) && <DataCard props={values} />}
                    </>
                  ))}
                </div>
              </>
            )}
          </section>
        </div>
      </main>
    </>
  );
}
