import Subtitle from "../Typography/Subtitle";
import { Link, useNavigate } from "react-router-dom";

function CampaignCard({ url, title, link }) {
  const navigate = useNavigate();
  const campaignClick = (link) => {
    navigate(`/app/campaigns/${link}`);
  };
  return (
    <div className={"card w-full p-4 shadow-xl"}>
      <Link to={`/app/campaigns/${link}`}>
        {/* Title for Card */}
        <Subtitle>{title}</Subtitle>
        <div className="divider mt-2"></div>
        <img src={url} className="w-full" />
        <button
          className="btn btn-primary w-full mt-4"
          onClick={() => campaignClick(link)}
        >
          Edit
        </button>{" "}
      </Link>
    </div>
  );
}

export default CampaignCard;
