import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { Breadcrumbs, Typography } from "@mui/material";
import { callAPI } from "../App";
import parse from "html-react-parser";
import Loading from "react-loading";

const SpecialitiesPage = () => {
  const [detailData, setDetailData] = useState();

  const [parsedData, setParsedData] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const { link } = useParams();

  const navigate = useNavigate();

  function capitalizeWords(str) {
    return str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = localStorage.getItem("Specialities");
      if (data) {
        const paramData = JSON.parse(data).specialities;
        setParsedData(paramData);
      } else {
        const paramData = await callAPI();
        setParsedData(paramData);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchDetailedData = async () => {
      setIsLoading(true);
      try {
        if (link) {
          const response = await axios.get(
            `https://mediways-server.vercel.app/user/get-speciality-details/${link}`,
          );
          await setDetailData(response.data.speciality);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    console.log(isLoading);

    fetchDetailedData();
  }, [link]);

  console.log(parsedData);

  return (
    <div className="flex pt-24">
      <aside className="hidden h-screen p-5 md:block">
        <div className="flex w-[17rem] flex-col flex-wrap space-y-6 rounded-lg border-2 border-lightBlue bg-transparent px-3 py-3">
          {parsedData?.map((item, index) => (
            <Link key={index} to={`/specialities/${item.link}`}>
              <div
                key={index}
                className="mr-[1rem] flex w-fit flex-initial cursor-pointer items-center space-x-3 rounded-lg border border-black bg-white py-3 pl-2 pr-9"
              >
                <img src={item.icon} className="h-[1.584rem] w-[1.584rem]" />
                <h1 className="family-sora bg-white py-1 text-[0.9rem] font-bold text-darkBlue">
                  {item.title}
                </h1>
              </div>
            </Link>
          ))}
        </div>
      </aside>
      <div className="h-full p-5">
        <Breadcrumbs aria-label="breadcrumb" separator="›">
          {isLoading && <h1>Hello</h1>}
          <h1 onClick={() => navigate("/")} className="cursor-pointer">
            Home
          </h1>
          <h1 onClick={() => navigate("/")} className="cursor-pointer">
            Specialities
          </h1>
          <Typography color="text.primary">{capitalizeWords(link)}</Typography>
        </Breadcrumbs>
        {isLoading && (
          <div className="flex h-screen items-center justify-center">
            <Loading type="spin" color="#00367d" height={42} width={42} />
          </div>
        )}
        <h1 className="family-sora py-2 text-[2.5rem] font-semibold md:text-[3.5rem]">
          {detailData?.title}
        </h1>
        <img
          src={detailData?.wallpaperimg}
          className="relative h-[30rem] w-full rounded-2xl object-cover md:mt-5"
        />
        <div className="py-5">{parse(`${detailData?.content}`)}</div>
      </div>
    </div>
  );
};

export default SpecialitiesPage;
