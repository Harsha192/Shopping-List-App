import React, { Component } from "react";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";
import { Row, Col, Button } from "reactstrap";
import {
  getCustomerItems,
  deleteCustomerItem
} from "../actions/customerItemAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Fa } from "mdbreact";

class CustomerItems extends Component {
  state = {};
  showText() {
    if (this.props.item.length > 0) {
      return "Your Items";
    }
  }
  showLine() {
    if (this.props.item.length > 0) {
      return <hr style={{ height: 5, color: "red" }} className="ml-5 mr-5" />;
    }
  }
  componentDidMount() {
    this.props.getCustomerItems();
  }
  onRemoveSelectedItem = id => {
    this.props.deleteCustomerItem(id);
  };
  render() {
    const customerSelectedItems = this.props.item;
    return (
      <React.Fragment>
        <ListGroup className="mt-5 pt-5 ml-5 pl-5 mr-5 pr-5">
          <h3>{this.showText()}</h3>
          <Row>
            {customerSelectedItems.map(item => (
              <Col xs="6" sm="4" key={item._id}>
                <ListGroupItem className="justify-content-between">
                  <Button
                    size="sm"
                    color="danger"
                    style={{ margin: 0, width: 20, marginRight: 8 }}
                    // onClick={() => this.props.onRemoveItem(item)}
                    onClick={() => this.onRemoveSelectedItem(item._id)}
                  >
                    <Fa icon="trash" />
                  </Button>
                  {item.name} <Badge pill>{item.price}</Badge>
                </ListGroupItem>
              </Col>
            ))}
          </Row>
        </ListGroup>
        {this.showLine()}
      </React.Fragment>
    );
  }
}
CustomerItems.propTypes = {
  getCustomerItems: PropTypes.func.isRequired,
  deleteCustomerItem: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  item: state.customerItems.customerSelectedItems
});

export default connect(
  mapStateToProps,
  { getCustomerItems, deleteCustomerItem }
)(CustomerItems);
