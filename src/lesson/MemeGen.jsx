import React from "react";

import Header from "./components/Header";
import Meme from "./components/Meme"
import "./lesson.css"

export default function MemeGen() {
    return (
        <main className="lesson-main">
            <Header />
            <Meme />
        </main>
    )
}