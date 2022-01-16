import React from "react";
import { Button, Typography } from "@bigbinary/neetoui/v2"
import { Home } from "@bigbinary/neeto-icons";


class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex flex-col bg-gray-700 text-white justify-center items-center min-h-screen">
                    <Typography style="h3">You have landed somewhere unknown.</Typography>
                    <a href="/">
                        <Button
                            className="mt-5"
                            icon={Home}
                            label="Take me home"
                            style="secondary"
                            size="large"
                            iconPosition="left"
                        />
                    </a>
                </div>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary