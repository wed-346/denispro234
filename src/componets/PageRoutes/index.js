import { useDispatch, useSelector } from "react-redux";
import NoAccesPage from "../../pages/NoAcceessAutheficationRoutes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPage from "../../pages/UserPage";
import MainPage from "../../pages/MainPage";
import { useEffect } from "react";
import { getAuthorizedUser } from "../../redux/actions/users";
import { Bars } from "react-loader-spinner";
import './styles.css';

const authorizedRoutes = [
    { path: '/', element: <MainPage />, exact: true },
    { path: '/:id', element: <UserPage />, exact: true, },
];

const PageRoutes = () => {
    const authorizedUser = useSelector(state => state.users.authorizedUser);
    const isLoading = useSelector(state => state.users.isUserLoading);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAuthorizedUser());
        // eslint-disable-next-line
    }, []);

    if (isLoading) {
        return (
            <div className="cnPageRoutesMage">
            <Bars color="000BFF" width={80} height={80} />
            </div>
        )



    }

    return (


        <BrowserRouter>
            <Routes>

               {  authorizedUser ? authorizedRoutes.map((route) => <Route {...route} key={route.path} />) : <Route path="/" element={<NoAccesPage/>} exact/>}

            </Routes>

        </BrowserRouter>

    )
};


export default PageRoutes;