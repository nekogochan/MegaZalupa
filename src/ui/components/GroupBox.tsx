import React from "react";
import "src/ui/components/styles/GroupBox.scss";

export type GroupBox_props = {
    header: string,
    children: React.ReactElement | React.ReactElement[]
}

export function GroupBox({children, header}: GroupBox_props) {
    return <div className={"GroupBox"}>
        <header>{header}</header>
        <div className={"content"}>
            {children}
        </div>
    </div>
}