import { useState } from "react";
import "./Screens.css";

export default function Screens() {
    const [screen, setScreen] = useState(0);
    const isleApps = ["messages", "mail", "safari", "phone"];
    const screens = [
        [
            "facetime",
            "calendar",
            "photos",
            "camera",
            "music",
            "notes",
            "reminders",
            "clock",
            "news",
            "tv",
            "podcasts",
            "app-store",
            "maps",
            "health",
            "wallet",
            "settings",
        ],
        [
            "mail",
            "mail",
            "mail",
            "mail",
            "mail",
            "mail",
            "mail",
            "mail",
            "mail",
            "mail",
            "mail",
            "mail",
            "mail",
            "mail",
            "mail",
            "mail",
            "mail",
            "mail",
            "mail",
            "mail",
            "mail",
            "mail",
        ],
    ];

    return (
        <main className="container">
            {screens.map((s, i) => {
                if (screen !== i) return null;

                return (
                    <>
                        <div>
                            <div className="apps">
                                {s.map((app, index) => (
                                    <div className={index === 22 ? "big" : ""}>
                                        <img
                                            draggable={false}
                                            src={`/assets/apps/${app}.png`}
                                            alt={`./assets/apps/${app}.png`}
                                        />
                                        <span>{app.charAt(0).toUpperCase() + app.slice(1)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="dots">
                            {screens.map((s, i) => (
                                <div className={`dot ${screen === i && "active"}`} onClick={() => setScreen(i)} />
                            ))}
                        </div>

                        <div className="isle">
                            {isleApps.map((app) => (
                                <img
                                    draggable={false}
                                    src={`/assets/apps/${app}.png`}
                                    alt={`./assets/apps/${app}.png`}
                                />
                            ))}
                        </div>
                    </>
                );
            })}
        </main>
    );
}
