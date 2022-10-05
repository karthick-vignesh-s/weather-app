import React, {FunctionComponent} from "react";
import {Dropdown} from "react-bootstrap";
import "./index.scss";

export type DropdownMenuProps = {
    dropdownItems: Array<{
        label: string,
        value: unknown,
    }>;
    onClick: (item: any) => void;
    children: JSX.Element | string;
    ariaLabel?: string;
};

const DropdownMenu: FunctionComponent<DropdownMenuProps> = (props: DropdownMenuProps) => {
    function renderMenuItem(item: DropdownMenuProps["dropdownItems"][number]) {
        return (
            <Dropdown.Item
                as={"button"}
                onClick={() => props.onClick(item.value)}
            >
                {item.label}
            </Dropdown.Item>
        );
    }

    function renderMenuItems() {
        return props.dropdownItems.map((item, index) => (
            <div key={'item' + index}>
                {renderMenuItem(item)}
            </div>
        ));
    }

    return (
        <Dropdown
            className={`DropdownMenu`}
        >
            <Dropdown.Toggle
                id="dropdown-toggle-button"
                bsPrefix="p-0"
                aria-label={props.ariaLabel}
            >
                {props.children}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {renderMenuItems()}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default DropdownMenu;
