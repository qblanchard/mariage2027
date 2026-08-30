import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("Le programme", "routes/journee.tsx"),
  route("lieu", "routes/lieu.tsx"),
  route("theme", "routes/theme.tsx"),
  route("logement", "routes/logement.tsx")
] satisfies RouteConfig;
