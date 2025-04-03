/**
 * Local variables for the P2P Trading Platform
 * This file contains configuration values and user information
 * that can be accessed throughout the application.
 */

// User information
// export const USER = {
//   id: 44,
//   nickname: "ernest",
//   token:
//     "eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiemlwIjoiREVGIn0.z6oVRfqY4z3dnr78avC1mMnJCCSPxa6EdUqWMLK1ejjptbKi4Ax-m5ceatnOLTdT3CACjGAXyeRZKk1Sa-ObPP-vsltPifx4.-XX5i1-7VKhLIfSlT9joTg.8NJUj93HGOHlc5o2V9BRmX0i60lRqAYf6pTMZvJjbP3d7LxVsZK_kdUWNy7mUmAQ7fJgw05IQA0kKaKWcaHW6EEd4UfxwVSWRSN8F7mwGJSRsMNIz0_6-Vh3axc5j_zzA15wOsWitnXKnnQUvYSn-A.5ooG4D1mUNgoPgVcf0GvTLd09nepqFCrSgR3cHZkuEk",
// }


export const USER = {
  id: 17,
  nickname: "Ameerul",
  token:
    "eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiemlwIjoiREVGIn0.Fjjin13lsFqTspPVh11OO0AWvO7w7rs5fOs4sgm7UBiXw4dsR_1eZdEcN2SfZx9oNqAnCaVRYsxDxvxZovPMWLNHo6AiQI9M.6bjBuJeph3_dumB5zer7Mw.rkFhWZ6wAVKApiw-0pqm6LzJ1qO0H6B5kFvb2lYeKnxNguuCqN8oeHRx2t_IURa0pdGcUnVIvEYJEJhizAjPfzIC3RmdQvBTT8OWgxn8cC07Fl7-DKZoZvZOPF-ZV1iT-xoHCegaw_ISkdxOmcdFYA.d69ZAu665_iznpX-e5qngm26RgaC171NZvH3c974l_g",
}

// API endpoints
export const API = {
  baseUrl: "https://x6pr-kqwm-lfqn.n7d.xano.io/api:iD2pm9AZ:master",
  endpoints: {
    ads: "/adverts",
    orders: "/orders",
    profile: "/profile",
    balance: "/balance",
    paymentMethods: "/payment-methods",
    advertisers: "/users",
    transactions: "/transactions",
    userFavourites: "/user-favourites",
    userBlocks: "/user-blocks",
  },
}

// Application settings
export const APP_SETTINGS = {
  defaultCurrency: "USD",
  supportedCurrencies: ["USD", "EUR", "GBP", "IDR"],
  defaultLanguage: "EN",
  supportedLanguages: ["EN", "ES", "FR", "ID"],
}

// Auth helper functions
export const AUTH = {
  getAuthHeader: () => ({
    Authorization: `Bearer ${USER.token}`,
    // Add any other required headers
    "X-Data-Source": "live",
    "X-Branch": "master"
  }),
  isAuthenticated: () => !!USER.token,
}

// Export all variables as a single object for convenience
export default {
  USER,
  API,
  APP_SETTINGS,
  AUTH,
}

