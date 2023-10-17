import { defaultApps, defaultIsleApps } from "./config";
import { useEffect, useState } from "react";
import "./Screens.css";

export default function Screens() {
    const [screen, setScreen] = useState(0);
    const [move, setMove] = useState(false);
    const [start, setStart] = useState({
        x: 0,
        y: 0,
    });

    const isleApps = defaultIsleApps;
    const screens = defaultApps;
    const delta = 20;

    const leftToRight = () => {
        console.log("leftToRight");
        if (screen === 0) return;
        setScreen(screen - 1);
    };

    const rightToLeft = () => {
        console.log("rightToLeft");
        if (screen === screens.length - 1) return;
        setScreen(screen + 1);
    };

    const topToBottom = () => {
        console.log("topToBottom");
    };

    const bottomToTop = () => {
        console.log("bottomToTop");
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") leftToRight();
            if (e.key === "ArrowRight") rightToLeft();
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [screen]);

    return (
        <main
            className="container"
            onMouseDown={(e) => {
                setStart({
                    x: e.pageX,
                    y: e.pageY,
                });
            }}
            onMouseUp={(e) => {
                const endX = e.pageX;
                const endY = e.pageY;

                const diffX = endX - start.x;
                const diffY = endY - start.y;

                const absDiffX = Math.abs(diffX);
                const absDiffY = Math.abs(diffY);

                if (absDiffX > delta || absDiffY > delta) {
                    if (absDiffX > absDiffY) {
                        if (diffX > 0) leftToRight();
                        else rightToLeft();
                    } else {
                        if (diffY > 0) topToBottom();
                        else bottomToTop();
                    }
                }
            }}
            onContextMenu={(e) => {
                if (move) setMove(false);
                else setMove(true);
            }}
        >
            {screens.map((s, i) => {
                if (screen !== i) return null;

                return (
                    <>
                        <div>
                            <div className="apps">
                                {s.map((app, index) => (
                                    <div className={`${index === 22 ? "big" : ""} ${move ? "move" : ""}`} key={app}>
                                        <img
                                            draggable={false}
                                            src={`/assets/apps/${app}.png`}
                                            alt={`./assets/apps/${app}.png`}
                                        />

                                        <span>{app.charAt(0).toUpperCase() + app.slice(1)}</span>

                                        {move && (
                                            <div
                                                onClick={() => {
                                                    console.log("delete");
                                                }}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="dots">
                            {screens.map((s, i) => (
                                <div
                                    key={i}
                                    onClick={() => setScreen(i)}
                                    className={`dot ${screen === i && "active"}`}
                                />
                            ))}
                        </div>

                        <div className="isle">
                            {isleApps.map((app) => (
                                <div className={`${move ? "move" : ""}`}>
                                    <img
                                        key={app}
                                        draggable={false}
                                        src={`/assets/apps/${app}.png`}
                                        alt={`./assets/apps/${app}.png`}
                                    />

                                    {move && <div></div>}
                                </div>
                            ))}
                        </div>
                    </>
                );
            })}
        </main>
    );
}
