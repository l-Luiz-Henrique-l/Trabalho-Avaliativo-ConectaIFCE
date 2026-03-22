	import FeedPage from "@/components/homepage/FeedPage";
import AppLayout from "@/layouts/AppLayout";
import PublicLayout from "@/layouts/PublicLayout";
import Homepage from "@/pages/homepage";
import Loginpage from "@/pages/loginpage";
import Registerpage from "@/pages/registerpage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter(
	[
		{
			Component: PublicLayout,
			children: [
				{
						path: '/',
						Component: Homepage
				},
				{
					path: 'login',
					Component: Loginpage,
				},
				{
					path: 'register',
					Component: Registerpage
				},

			]
		},
		{
			Component: AppLayout,
			children: [
				{
					path: 'feed',
					Component: FeedPage
				}
			]
		}
	]
)
