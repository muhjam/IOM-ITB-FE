import { createRouter, createWebHistory } from "vue-router";
import store from "@/store"; // Import your Vuex store instance
import { FETCH_JWT } from "@/store/auth.module";

const routes = [
  {
    path: "/",
    component: () => import("@/views/layout/LayoutView.vue"),
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("@/views/HomeView.vue"),
        meta: { haveAuthenticated: true },
      },
      {
        path: "/policy",
        name: "Policy",
        component: () => import("@/views/pages/PolicyView.vue"),
        meta: { haveAuthenticated: false },
      },
      {
        path: "/merchendise",
        name: "Store",
        component: () => import("@/views/pages/StoreView.vue"),
        meta: { haveAuthenticated: false },
      },
      {
        path: "/merchandise/:id",
        name: "Store Detail",
        component: () => import("@/views/pages/StoreDetail.vue"),
        meta: { haveAuthenticated: false },
      },
      {
        path: "/transaksi",
        name: "Transaction",
        component: () => import("@/views/pages/TransactionView.vue"),
        meta: { haveAuthenticated: false },
      },
      {
        path: "/tentang-kami",
        name: "About",
        component: () => import("@/views/pages/AboutView.vue"),
        meta: { haveAuthenticated: true },
      },
      {
        path: "/pendaftaran-anggota",
        name: "Register",
        component: () => import("@/views/pages/RegisterView.vue"),
        meta: { haveAuthenticated: true },
      },
      {
        path: "/form1",
        name: "Regis",
        component: () => import("@/views/pages/FormView.vue"),
        meta: { haveAuthenticated: true },
      },
      {
        path: "/form2",
        name: "Help",
        component: () => import("@/views/pages/FormView.vue"),
        meta: { haveAuthenticated: true },
      },
      {
        path: "/kegiatan",
        name: "Activity",
        component: () => import("@/views/pages/ActivityView.vue"),
        meta: { haveAuthenticated: true },
      },
      {
        path: "/donasi",
        name: "Donasi",
        component: () => import("@/views/pages/DonationView.vue"),
        meta: { haveAuthenticated: true },
      },
      {
        path: "/donation",
        name: "Donation",
        component: () => import("@/views/pages/DonationView.vue"),
        meta: { haveAuthenticated: true },
      },
      {
        path: "/pengajuan-bantuan",
        name: "Submission",
        component: () => import("@/views/pages/SubmissionView.vue"),
        meta: { haveAuthenticated: true },
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/views/layout/LayoutNonNavbar.vue"),
    children: [],
  },
  {
    path: "/",
    component: () => import("@/views/layout/LayoutBlank.vue"),
    children: [
      {
        path: "/:pathMatch(.*)*",
        name: "404",
        component: () => import("@/views/pages/Error/404.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Navigation guard to protect routes
router.beforeEach(async (to, from, next) => {
  try {
    // if (to?.query?.token) {
    //   await store.dispatch(FETCH_JWT, to.query.token);
    // } else {
    //   const jwtResult = await store.dispatch(FETCH_JWT);
    // }
  } catch (e) {
    console.log(e);
  }

  next();
});

export default router;
