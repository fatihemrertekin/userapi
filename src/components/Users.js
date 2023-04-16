import React, {Component, Fragment} from "react";
import Template from "./Template";

export default class Users extends Component {
  render() {
    return (
      <Fragment>
        {this.props.users.map((user, index) => {
          return <Template key={index} user={user} />;
        })}
      </Fragment>
    );
  }
}
