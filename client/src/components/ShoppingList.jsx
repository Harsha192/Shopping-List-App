import React, { Component } from "react";
import uuid from "uuid";
import { Container, Row, Col } from "reactstrap";
import {
  Button,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText,
  Fa
} from "mdbreact";
import { connect } from "react-redux";
import { getItems } from "../actions/itemActions";
import { addCustomerItem } from "../actions/customerItemAction";
import { PropTypes } from "prop-types";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

class ShoppingList extends Component {
  // state = {
  //   items: [
  //     {
  //       id: uuid(),
  //       name: "Milk - 1L bottle",
  //       price: "LKR 375.00",
  //       imgURL:
  //         "https://www.anchormilk.com/wp-content/uploads/2016/08/anchor-milk.png"
  //     },
  //     {
  //       id: uuid(),
  //       name: "Rice - 1kg",
  //       price: "LKR 75.00",
  //       imgURL:
  //         "http://www.ehorana.com/product_image/NIPUNA-SAMBA-RAW-5KG1450351931.jpg"
  //     },
  //     {
  //       id: uuid(),
  //       name: "Sugar - 1kg",
  //       price: "LKR 120.00",
  //       imgURL:
  //         "https://www.kapruka.com/shops/specialGifts/productImages/CS71356.jpg"
  //     },
  //     {
  //       id: uuid(),
  //       name: "Butter - 500g",
  //       price: "LKR 530.00",
  //       imgURL: "http://globalfoodcity.com/wp-content/uploads/2018/02/32-2.jpg"
  //     },
  //     {
  //       id: uuid(),
  //       name: "Dhal - 1kg",
  //       price: "LKR 105.00",
  //       imgURL:
  //         "https://www.kapruka.com/shops/specialGifts/productImages/CS71347.jpg"
  //     },
  //     {
  //       id: uuid(),
  //       name: "Sunlight Soap - 75g",
  //       price: "LKR 55.00",
  //       imgURL: "http://globalfoodcity.com/wp-content/uploads/2018/01/1-18.jpg"
  //     }
  //   ]
  // };
  state = {
    collapse: false,
    modal: false,
    quantity: "",
    selectedItem: { id: "", name: "", price: "", quantity: "" }
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  componentDidMount() {
    // console.log(parseInt("LKR 100"));
    this.props.getItems();
  }
  addNewShoppingListItems(item) {
    item.id = uuid();
    console.log(item);
    const items = [...this.state.items, item];
    this.setState({ items });
  }
  onAddCustomerItem = item => {
    console.log(item);
    this.props.addCustomerItem(item);
  };
  handleNameChange = event => {
    console.log(event.target.value);
    const item = { ...this.state.item };
    item.name = event.target.value;
    this.setState({ item });
  };
  handleGetSelectedItem = item => {
    console.log(item);
    const selectedItem = { id: "", name: "", price: "", quantity: "" };
    selectedItem.id = uuid();
    selectedItem.name = item.name;
    selectedItem.price = item.price;
    // selectedItem.quantity = this.quantity;
    this.setState({ selectedItem });
  };
  handleSubmit = event => {
    console.log(this.state.selectedItem);
    const selectedItem = { ...this.state.selectedItem };
    selectedItem.quantity = this.state.quantity;

    this.props.addCustomerItem(selectedItem);
    this.toggle();
  };
  render() {
    const { items } = this.props.item;
    return (
      <Container className="mt-5">
        <Row>
          {items.map(item => (
            <Col xs="6" sm="3" key={item._id}>
              <Card className="mb-4">
                <CardImage
                  className="img-fluid"
                  src={item.imgURL}
                  waves
                  style={{ height: 170, padding: 5 }}
                />
                <CardBody>
                  <CardTitle>{item.name}</CardTitle>
                  <h5>{item.price}</h5>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                  <Button
                    color="primary"
                    // onClick={() => this.props.onAddItem(item)}
                    onClick={() => this.onAddCustomerItem(item)}
                    // onClick={() => {
                    //   this.toggle();
                    //   this.handleGetSelectedItem(item);
                    // }}
                  >
                    <Fa className="mr-2" icon="shopping-bag" />
                    Add Item
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Add Shopping Items</ModalHeader>
          <Form onSubmit={this.handleSubmit}>
            <ModalBody>
              <FormGroup>
                <Label for="quantity">Quantity</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  value={this.quantity}
                  onChange={this.handleNameChange}
                  required
                />
              </FormGroup>
              {/* <Button>Submit</Button> */}
            </ModalBody>
            <ModalFooter>
              <Button color="primary" type="submit">
                Add Item
              </Button>
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      </Container>
    );
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  addCustomerItem: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  item: state.item
});
export default connect(
  mapStateToProps,
  { getItems, addCustomerItem }
)(ShoppingList);
