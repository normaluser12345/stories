import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import { QueryPage } from "../pages/QueryPage/QueryPage.styled";
  import { MainPage } from "../pages/MainPage/MainPage";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      children: [
        {
          path: '/media/:id',
          element: <QueryPage type="media"/>
        },
        {
          path: '/articles/:id',
          element: <QueryPage type="articles"/>
        },
        {
          path: '/courses/:id',
          element: <QueryPage type="courses"/>
        },
      ],
    },
  ]);

  export const AppRouter = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
  }