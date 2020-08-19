import React from 'react';
import { Route } from "react-router-dom";
import { routes } from './routers.config'


export default function AppRoutes() {
    return routes.map(route =>
        <Route key={route.key} path={route.path} exact strict render={route.component} />
    )
}

