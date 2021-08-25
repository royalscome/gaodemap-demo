/*
 * @Description: 
 * @Autor: weiyang
 * @Date: 2021-08-25 15:57:50
 * @LastEditors: weiyang
 * @LastEditTime: 2021-08-25 16:16:38
 */
const publicRoutes = [
    {
        path: "/",
        redirect:"/test",
        component:()=>import("@/App.vue"),
        children: [
          {
            path: "/test",
            component: () => import("@/views/web/test/index.vue"),
            name: "Test",
            meta: { title: "test", hidden: true }
          }
        ]
      }
  ];
  const routes = [...publicRoutes];
  export default routes;