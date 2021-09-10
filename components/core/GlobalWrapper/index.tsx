import {FunctionComponent, ReactChild} from "react";

interface GlobalWrapperProps {
    withLayout?: boolean;
    children: ReactChild[];
}

const GlobalWrapper: FunctionComponent<GlobalWrapperProps> = (props: GlobalWrapperProps) => {
    return (
        <>
            {props.children}
        </>
    );
}

export default GlobalWrapper;