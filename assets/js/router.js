import Stories from "./pages/stories.js";
import Comments from "./pages/Comments.js";
import Favorites from "./pages/favorites.js";
const router = new Navigo(null,true,"#");;

export default class RouteHandler{
    constructor(){
        this.createRoutes();
    }
    createRoutes(){
        const routes = [
            {path:"/",page : Stories},
            // {path:"/newcomments",page:Stories},
            {path:"/ask",page:Stories},
            {path:"/show",page:Stories},
            {path:"/jobs",page:Stories},
            {path:"/items",page:Comments},
            {path:"/favorites",page:Favorites},
        ];

        routes.forEach(route => {
            router.on(route.path,() => {
                route.page(route.path)
            }).resolve();
        })
    }
}