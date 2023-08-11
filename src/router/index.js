import { createBrowserRouter } from "react-router-dom";

import Signup from "../views/Auth/Signup";
import Login from "../views/Auth/Login";
import SetNewPassword from "../views/Auth/Set-New-Password";
import ResetPassword from "../views/Auth/Reset-Password";

import Home from "../views/Home";

import PublicLayout from "../layouts/PublicLayout";
import Products from "../views/Products";
import Product from "../views/Products/product";
import Cart from "../views/Checkouts/Cart";
import MyProfile from "../views/Myprofile/details";
import WishList from "../views/Myprofile/wishlist";
import MyAddresses from "../views/Myprofile/addresses";
import MyPayment from "../views/Myprofile/payment";
import AddPayment from "../views/Myprofile/payment/add-payment";
import CountrySetting from "../views/Language & Country/country";
import LanguageSetting from "../views/Language & Country/language";
import Checkout from "../views/Checkouts/Checkout";
import Security from "../views/Myprofile/security";
import AddAddress from "../views/Myprofile/addresses/add-address";
import MyOrders from "../views/Myprofile/orders";
import ViewMyOrder from "../views/Myprofile/orders/viewmyorder";
import MemberLogin from "../views/Auth/member/member-login";

export const routes = createBrowserRouter([
  {
    path: "/signup",
    element: <PublicLayout view={<Signup />} />
  },
  {
    path: "/memberlogin",
    element: <PublicLayout view={<MemberLogin />} />
  },
  {
    path: "/login",
    element: <PublicLayout view={<Login />} />
  },
  {
    path: "/set-new-password",
    element: <PublicLayout view={<SetNewPassword />} />
  },
  {
    path: "/reset-password",
    element: <PublicLayout view={<ResetPassword />} />
  },
  {
    path: "/home",
    element: <PublicLayout view={<Home />} />
  },
  {
    path: "/",
    element: <PublicLayout view={<Home />} />
  },
  {
    path: "/products",
    element: <PublicLayout view={<Products />} />
  },
  {
    path: "/product/:id",
    element: <PublicLayout view={<Product />} />
  },
  {
    path: "/cart",
    element: <PublicLayout view={<Cart />} />
  },
  {
    path: "/checkout",
    element: <PublicLayout view={<Checkout />} />
  },
  {
    path: "/myprofile",
    element: <PublicLayout view={<MyProfile />} />
  },
  {
    path: "/myprofile/wishlist",
    element: <PublicLayout view={<WishList />} />
  },
  {
    path: "/myprofile/myaddresses",
    element: <PublicLayout view={<MyAddresses />}/>
  },
  {
    path: "/myprofile/myaddresses/addaddress",
    element: <PublicLayout view={<AddAddress />}/>
  },
  {
    path: "/myprofile/payment",
    element: <PublicLayout view={<MyPayment />}/>
  },
  {
    path: "/myprofile/payment/addpayment",
    element: <PublicLayout view={<AddPayment />}/>
  },
  {
    path: "/myprofile/security",
    element: <PublicLayout view={<Security />}/>
  },
  {
    path: "/myprofile/myorders",
    element: <PublicLayout view={<MyOrders />}/>
  },
  {
    path: "/myprofile/myorders/viewmyorder",
    element: <PublicLayout view={<ViewMyOrder />}/>
  },
  {
    path: "/countrysetting",
    element: <PublicLayout view={<CountrySetting />}/>
  },
  {
    path: "/languagesetting",
    element: <PublicLayout view={<LanguageSetting />}/>
  },
])