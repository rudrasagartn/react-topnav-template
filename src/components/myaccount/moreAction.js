import React from 'react'
import { Dropdown, DropdownButton } from "react-bootstrap";
import '../../css/moreAction.css'

class MoreAction extends React.Component {
    render() {
        return (
            <DropdownButton
                alignRight
                className="dropdown-menu-align-right ml-auto"
                title={<i className="fa fa-cog" style={{ fontSize: 25 }} />}
                style={{ fontSize: 25, color: "white" }}
            >
                <Dropdown.Item href="#">
                    <i
                        className="fa fa-user"
                        style={{ fontSize: 20, color: "black" }}
                    />
                    &nbsp;&nbsp;{this.props.username}
                </Dropdown.Item>
                {/* <Dropdown.Item divider /> */}
                <Dropdown.Item >
                    <i
                        className="fa fa-sign-out"
                        style={{ fontSize: 22, color: "black" }}
                    />{" "}
                    &nbsp;Logout
              </Dropdown.Item>
            </DropdownButton>


        );
    }
}

export default MoreAction;
