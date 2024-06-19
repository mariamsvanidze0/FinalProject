import routes from "../constants/routes";
import AuthGuard from "../guards/AuthGuard";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import RecipeDetail from "../pages/RecipeDetail"; 

const appRoutes = [
  { path: routes.home, Component: Home },
  { path: routes.signIn, Component: SignIn },
  { path: routes.signUp, Component: SignUp },
  { path: routes.recipes, Component: Recipes, Guard: AuthGuard },
  { path: `${routes.recipes}/:id`, Component: RecipeDetail, Guard: AuthGuard } 
];

export default appRoutes;
