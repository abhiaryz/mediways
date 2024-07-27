// All components mapping with path for internal routes

import { lazy } from "react";

const Dashboard = lazy(() => import("../pages/protected/Dashboard"));
const Page404 = lazy(() => import("../pages/protected/404"));
const Blank = lazy(() => import("../pages/protected/Blank"));
const Specialities = lazy(() => import("../pages/protected/Specialities"));
const SpecialitiesNew = lazy(() => import("../pages/protected/SpecialitiesNew"));
const SpecialityDetail = lazy(() => import("../pages/protected/SpecialityDetail"));
const Campaigns = lazy(() => import("../pages/protected/Campaigns"));
const CampaignNew = lazy(() => import("../pages/protected/CampaignNew"));
const CampaignDetail = lazy(() => import("../pages/protected/CampaignDetail"));
const Team = lazy(() => import("../pages/protected/Team"));
const Bills = lazy(() => import("../pages/protected/Bills"));
const ProfileSettings = lazy(() =>
  import("../pages/protected/ProfileSettings")
);

const routes = [
  {
    path: "/dashboard", // the url
    component: Dashboard, // view rendered
  },
  {
    path: "/specialities",
    component: Specialities,
  },
  {
    path: "/specialities/new",
    component: SpecialitiesNew,
  },
  {
    path: `/specialities/:link`,
    component: SpecialityDetail,
  },
  {
    path: "/settings-team",
    component: Team,
  },
  {
    path: "/settings-profile",
    component: ProfileSettings,
  },
  {
    path: "/settings-billing",
    component: Bills,
  },
  {
    path: "/campaigns",
    component: Campaigns,
  },
  {
    path: "/campaign/new",
    component: CampaignNew,
  },
  {
    path: `/campaigns/:link`,
    component: CampaignDetail,
  },
  {
    path: "/404",
    component: Page404,
  },
  {
    path: "/blank",
    component: Blank,
  },
];

export default routes;
