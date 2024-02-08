import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/Main.vue'
import postInfo from '@/pages/subPages/postInfo.vue'
import AboutInfo from '@/pages/AboutInfo.vue'
import SignUp from '@/pages/subPages/SignUp.vue'
import Signed from '@/pages/subPages/Signed.vue'
import SignIn from '@/pages/subPages/SignIn.vue'
import MyStories from '@/pages/MyStories.vue'
import Stories from '@/pages/subPages/Stories.vue'

const routes = [
	{
		path: '/',
		component: Main,
	},
	{
		path: '/:id',
		component: postInfo,
	},
	{
		path: '/about',
		component: AboutInfo,
	},
	{
		path: '/sign',
		component: SignUp,
	},
	{
		path: '/signed',
		component: Signed,
	},
	{
		path: '/sign-in',
		component: SignIn,
	},
	{
		path: '/stories',
		component: MyStories,
	},
	{
		path: '/stories/:id',
		component: Stories,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
