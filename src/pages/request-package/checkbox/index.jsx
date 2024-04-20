import React from "react";

export const Checkbox = ({id, formData, handler, date, name, price, perGame}) => {
return (
    <>
        {date ? (
            <label htmlFor={id}>
                <input
                    id={id}
                    type="checkbox"
                    checked={formData.include_season}
                    onChange={handler}
                />{" "}
                {date} {name} - ${price}
            </label>
        ) : perGame ? (
            <label htmlFor={id}>
                <input
                    id={id}
                    type="checkbox"
                    checked={formData.include_season}
                    onChange={handler}
                />{" "}
                {name} - ${price}{perGame}
            </label>
        ) : (
            <label htmlFor={id}>
                <input
                    id={id}
                    type="checkbox"
                    checked={formData.include_season}
                    onChange={handler}
                />{" "}
                {name} - ${price}
            </label>
        )}
    </>
);

};