import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
// 进行懒加载
const layout = () => import("@/views/layout/index.vue");
const Home = () => import("@/views/home/Home.vue");
const Explore = () => import("@/views/explore/Explore.vue");
const Bookrack = () => import("@/views/bookrack/Bookrack.vue");
const My = () => import("@/views/my/My.vue");
const FirstPage = () => import("@/views/firstPage/index.vue");
const Science = () => import("@/views/home/content/science.vue");
const Search = () => import("@/views/search/index.vue");
const BookDetails = () => import("@/components/content/bookdetails");
const Comment = () => import("@/components/content/comment");
const AuthorRanking = () => import("@/views/home/AuthorRanking");
const AuthorDetails = () => import("@/views/authorDetails");
const BookArt = () => import("@/components/content/bookArt.vue");
const Classify = () => import("@/views/home/classify");
const Set = () => import("@/views/my/set");
const Balance = () => import("@/views/my/balance");
const BuyBook = () => import("@/components/content/buyBook/index.vue");

const routes = [
  {
    path: "",
    redirect: "/my",
    component: My
  },
  {
    path: "/science",
    name: "science",
    component: Science
  },
  {
    path: "",
    component: layout,
    children: [
      {
        path: "/home",
        name: "home",
        component: Home
      },
      {
        path: "/explore",
        name: "explore",
        component: Explore
      },
      {
        path: "/bookrack",
        name: "bookrack",
        component: Bookrack
      },
      {
        path: "/my",
        name: "my",
        component: My
      }
    ]
  },
  {
    path: "/firstPage",
    name: "firstPage",
    component: FirstPage
  },
  {
    path: "/search",
    name: "search",
    component: Search
  },
  {
    path: "/bookdetails",
    name: "bookdetails",
    component: BookDetails
  },
  {
    path: "/comment",
    name: "comment",
    component: Comment
  },
  {
    path: "/authorranking",
    name: "authorranking",
    component: AuthorRanking
  },
  {
    path: "/authorDetails",
    name: "authorDetails",
    component: AuthorDetails
  },
  {
    path: "/bookArt",
    name: "bookArt",
    component: BookArt
  },
  {
    path: "/classify",
    name: "classify",
    component: Classify
  },
  {
    path: "/set",
    name: "set",
    component: Set
  },
  {
    path: "/balance",
    name: "balance",
    component: Balance
  },
  {
    path: "/buybook",
    name: "buybook",
    component: BuyBook
  }
];

const router = new VueRouter({
  routes
});

export default router;
