import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("lieu", "routes/lieu.tsx"),
  route("theme", "routes/theme.tsx"),
  route("journee", "routes/journee.tsx")
] satisfies RouteConfig;
