import React, { useState } from "react";
import useInterval from "@use-it/interval";

export default function Dot() {
    const [dot, setDot] = useState("");
    useInterval(() => setDot(dot === "✓✓✓" ? "" : `${dot}✓`), 1000);

    return (
        <p>
            {dot}
        </p>
    );
}