import React from "react";
import { Button, Typography } from "@bigbinary/neetoui/v2"
import { Home } from "@bigbinary/neeto-icons";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-700 text-white">
            <Typography style="h3" className="text-center">404!<br />Page Not Found</Typography>
            <Link to={{ pathname: "/" }}>
                <Button
                    className="mt-5"
                    icon={Home}
                    label="Take me home"
                    style="secondary"
                    size="large"
                    iconPosition="left"
                />
            </Link>
        </div>
    )
}

export default PageNotFound