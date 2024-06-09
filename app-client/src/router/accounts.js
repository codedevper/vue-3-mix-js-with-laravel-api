import SignUp from "../views/accounts/SignUp.vue";
import SignIn from "../views/accounts/SignIn.vue";
import SignOut from "../views/accounts/SignOut.vue";

import ForgotPassword from "../views/accounts/ForgotPassword.vue";
import ResetPassword from "../views/accounts/ResetPassword.vue";
import ResendVerificationEmail from "../views/accounts/ResendVerificationEmail.vue";

import { useAuthStore } from "../stores/auth";

const redirectToHomeOnLoggedIn = (to, from, next) => {
  if (useAuthStore().loggedIn) next({ name: "page-home" });
  else next();
};

const pages = [
  {
    path: "/accounts/signup",
    name: "accounts-signup",
    component: SignUp,
    meta: { layout: "layout-auth" },
    beforeEnter: redirectToHomeOnLoggedIn,
  },
  {
    path: "/accounts/signin",
    name: "accounts-signin",
    component: SignIn,
    meta: { layout: "layout-auth" },
    beforeEnter: redirectToHomeOnLoggedIn,
  },
  {
    path: "/accounts/signout",
    name: "accounts-signout",
    component: SignOut,
    meta: { layout: "layout-auth" },
  },
  {
    path: "/accounts/forgot-password",
    name: "accounts-forgot-password",
    component: ForgotPassword,
    meta: { layout: "layout-auth" },
  },
  {
    path: "/accounts/reset-password/:token?",
    alias: '/password-reset/:token?',
    name: "accounts-reset-password",
    component: ResetPassword,
    meta: { layout: "layout-auth" },
  },
  {
    path: "/accounts/resend-verification-email",
    name: "accounts-resend-verification-email",
    component: ResendVerificationEmail,
    meta: { layout: "layout-auth" },
  },
];

export default pages;
