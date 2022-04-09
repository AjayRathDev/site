import Home from "../pages/home";
import Profile from "../pages/profile";
import Progress from "../pages/progess";
import ProfileTest from "../pages/ProfileTest";

export const ROUTES = [
  {
    name: "Home",
    url: "/",
    private: false,
    component: Home,
    exact: true,
    header: true,
  },
  {
    name: "Progress",
    url: "plan/:plan",
    private: false,
    component: Progress,
    exact: true,
    header: true,
  },
  {
    name: "Profile",
    url: "/profile",
    private: false,
    component: Profile,
    exact: true,
    header: true,
  },
  {
    name: "Profile",
    url: "/profiletest",
    private: false,
    component: ProfileTest,
    exact: true,
    header: true,
  },
];
