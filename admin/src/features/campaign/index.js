import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import TitleCard from "../../components/Cards/TitleCard";
import { showNotification } from "../common/headerSlice";
import { Link } from "react-router-dom";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import axios from "axios";
import CampaignCard from "../../components/Cards/CampaignCard";
import CreateNewCard from "../../components/Cards/CreateNewCard";
import Title from "../../components/Typography/Title";

function Campaigns() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const [campaigns, setcampaigns] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          setLoading(true);
          const response = await axios.get(
            `${import.meta.env.VITE_SERVER_URL}/admin/get-all-campaigns`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setcampaigns(response.data.campaigns);
        }
      } catch (error) {
        console.log(error);

        if (error.response && error.response.status === 401) {
          return navigate(`/`);
        }
        NotificationManager.error(
          "Failed to fetch campaigns",
          "Error",
          5000,
          () => {
            alert(error.response.data.error);
          }
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  return (
    <>
      <NotificationContainer />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <CreateNewCard />
      </div>
      <br /> <br />
      <br />
      <Title children="Existing Campaigns" />
      <br />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {campaigns &&
          campaigns.length > 0 &&
          campaigns.map((i, k) => {
            return (
              <CampaignCard
                key={k}
                title={i.title}
                url={i.thumbnail}
                link={i.id}
              />
            );
          })}
      </div>
    </>
  );
}

export default Campaigns;
