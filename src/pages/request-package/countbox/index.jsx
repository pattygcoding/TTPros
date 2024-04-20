import React from "react";
import "./style.css";

export const Countbox = ({id, formData, handler}) => {

return (
    <div className="countbox">
    <input
        id={`${id}_amount`}
        className="form-control"
        type="number"
        placeholder="Enter amount"
        value={formData}
        onChange={handler}
    />
    </div>
);

};