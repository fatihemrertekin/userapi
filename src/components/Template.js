import React, {Component} from "react";

export default class Template extends Component {
  render() {
    let user = this.props.user;

    return (
      <div className="mt-4">
        <div>
          <label>
            {user.username}: {user.name}
          </label>
        </div>
      </div>
    );
  }
}
