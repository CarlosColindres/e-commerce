import React from "react";
import CollectionItem from "./CollectionItem";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherCollectionItems }) => (
            <CollectionItem key={id} {...otherCollectionItems} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
