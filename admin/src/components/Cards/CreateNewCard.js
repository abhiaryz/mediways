import Subtitle from "../Typography/Subtitle";
import { Link, useNavigate } from "react-router-dom";

function CreateNewCard() {
  const navigate = useNavigate();
  const campaignClick = (link) => {
    navigate(`/app/campaigns/${link}`);
  };
  return (
    <div className={"card w-full p-4 shadow-xl"}>
      <Link to="/app/campaign/new">
        <Subtitle>Create New Campaign</Subtitle>
        <div className="divider mt-2"></div>{" "}
        <img alt="add" src="/public/assets/icons/plus.svg" className="w-full" />
      </Link>
    </div>
  );
}

export default CreateNewCard;
