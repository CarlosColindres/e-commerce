import React, { Component } from "react";
import CollectionPreview from "../components/CollectionPreview";
import SHOP_DATA from "../data/shop.data";

export default class ShopPage extends Component {
  state = {
    shopPreview: SHOP_DATA,
  };
  render() {
    return (
      <div className="shop-page">
        {this.state.shopPreview.map(({ id, ...collection }) => (
          <CollectionPreview key={id} {...collection} />
        ))}
      </div>
    );
  }
}
