import React, { Component } from "react";
import {
  // Container,
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Fa
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";
// import uuid from "uuid";

class AppNavBar extends Component {
  //   constructor(props) {
  //     super(props);
  state = {
    collapse: false,
    modal: false,
    name: "",
    price: "",
    imgURL: "",
    item: { name: "", price: "", imgURL: "" }
  };
  // this.onClick = this.onClick.bind(this);
  //   }
  onClick = () => {
    this.setState({
      collapse: !this.state.collapse
    });
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  handleNameChange = event => {
    const item = { ...this.state.item };
    item.name = event.target.value;
    this.setState({ item });
  };
  handlePriceChange = event => {
    const item = { ...this.state.item };
    console.log(item);
    item.price = event.target.value;
    this.setState({ item });
  };
  handleImgURLChange = event => {
    const item = { ...this.state.item };
    item.imgURL = event.target.value;
    this.setState({ item });
  };
  handleSubmit = event => {
    console.log(this.state);
    event.preventDefault();
    const item = { ...this.state.item };
    // item.id = uuid();
    this.setState({ item });
    // this.props.onAddShoppingListItem(this.state.item);
    this.props.addItem(this.state.item);
    // const item = { ...this.state.item };
    // item.id = "";
    item.name = "";
    item.price = "";
    item.imgURL = "";
    this.setState({ item });
    this.toggle();
  };
  render() {
    // const Background =
    //   "https://mdbootstrap.com/img/Photos/Others/img%20(51).jpg";
    const bgPink = { backgroundColor: "#ec407a" };
    // const container = {
    //   height: "500",
    //   width: "100%",
    //   backgroundImage: `url(${Background})`
    // };
    const { name, price, imgURL } = this.state.item;
    return (
      <div>
        <Router>
          <Navbar style={bgPink} dark expand="md" scrolling fixed="top">
            <NavbarBrand href="/" className="ml-5">
              <Fa className="mr-2" icon="shopping-cart" />
              <strong>Shopping List</strong>
            </NavbarBrand>
            <NavbarToggler onClick={this.onClick} />
            <Collapse isOpen={this.state.collapse} navbar>
              <NavbarNav left style={{ marginLeft: 720 }}>
                <NavItem active>
                  <NavLink to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="" onClick={this.toggle}>
                    Add Item
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#">Pricing</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#">Options</NavLink>
                </NavItem>
              </NavbarNav>
              <NavbarNav right>
                <NavItem>
                  <NavLink to="#">
                    <Fa icon="facebook" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#">
                    <Fa icon="twitter" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#">
                    <Fa icon="instagram" />
                  </NavLink>
                </NavItem>
              </NavbarNav>
            </Collapse>
          </Navbar>
        </Router>
        {/* <Container style={container} className="text-center mt-5 pt-5">
          <h2>This Navbar is fixed</h2>
          <h5>
            It will always stay visible on the top, even when you scroll do{" "}
          </h5>
          <br />
          <p>
            Full page intro with background image will be always displayfull
            screen mode, regardless of device{" "}
          </p>
        </Container> */}
        {/* Pop up window for add items */}

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Add Shopping Items</ModalHeader>
          <Form onSubmit={this.handleSubmit}>
            <ModalBody>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={this.handleNameChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="price">Price</Label>
                <Input
                  type="text"
                  name="price"
                  id="price"
                  value={price}
                  onChange={this.handlePriceChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="image">Image URL</Label>
                <Input
                  type="text"
                  name="image"
                  id="image"
                  value={imgURL}
                  onChange={this.handleImgURLChange}
                  required
                />
              </FormGroup>
              {/* <Button>Submit</Button> */}
            </ModalBody>
            <ModalFooter>
              <Button color="primary" type="submit">
                Add Item
              </Button>{" "}
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      </div>
    );
  }
}
// const mapStateToProps = state => ({
//   item: state.item
// });
export default connect(
  null,
  { addItem }
)(AppNavBar);
