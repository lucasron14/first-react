import React from "react";


// Stateless Functional Component.
const ItemCount = ({totalCounters}) => {
    return (
      <div className="items-full mb-4">
        <span className="mx-2">Total item(s)</span>
        <span className="badge bg-secondary rounded-pill">
          {totalCounters}
        </span>
      </div>
    );
}
 
export default ItemCount;


