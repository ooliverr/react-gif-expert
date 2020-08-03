import React, { useState } from "react";
import { AddCategoty } from "./AddCategoty";
import { GifGrid } from "./GifGrid";

export const GifExpert = () => {
    let [categories, setCategories] = useState(["One Punch Man"]);

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategoty setCategory={setCategories} />
            <hr />
            <ol>
                {categories.map((cat, i) => (
                    <GifGrid key={cat} category={cat} />
                ))}
            </ol>
        </>
    );
};
