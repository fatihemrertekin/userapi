import axios from "axios";
import {Component, Fragment} from "react";
import {Container, Row, Col, Alert} from "reactstrap";
import Loading from "./components/Loading";
import Users from "./components/Users";

export default class App extends Component {
  constructor(props) {
    super(props);

  

    this.state = {
      users: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        this.setState({users: res.data});
      })
      .catch((err) => {
        this.setState({
          errorMessage: `Fetch couldn't loaded correctly. ${err.message}`,
        });
      })
      .finally(() => {
        this.setState({isLoading: false});
      });
  }



  render() {
    return (
      <Fragment>
        {this.state.isLoading && (
          <Fragment>
            <Loading />
          </Fragment>
        )}
        {!this.state.isLoading && this.state.errorMessage && (
          <Fragment>
            <Alert color="danger">{this.state.errorMessage}</Alert>
          </Fragment>
        )}
        {!this.state.isLoading && !this.state.errorMessage && (
          <Fragment>
            <Container className="main-container">
              <Row>
                <Col></Col>
              </Row>
              <Row>
                <Users users={this.state.users} />
              </Row>
            </Container>
          </Fragment>
        )}
      </Fragment>
    );
  }
}
