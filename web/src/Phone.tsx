import Screens from "./Screens";
import TopBar from "./TopBar";
import "./Phone.css";

export default function Phone() {
    const themes = {
        natural: {
            background: "#9e9992",
            background2: "#5f5a54",
            band: "#232220",
            image: "url('/assets/backgrounds/wallpaper1.webp')",
        },
        blue: {
            background: "#3a4252",
            background2: "#1e232e",
            band: "#1c1c1f",
            image: "url('/assets/backgrounds/wallpaper2.jpeg')",
        },
        white: {
            background: "#b6b3af",
            background2: "#2e2d2a",
            band: "#575753",
            image: "url('/assets/backgrounds/wallpaper3.webp')",
        },
        black: {
            background: "#393a3d",
            background2: "#1d1d1f",
            band: "#1e1e1e",
            image: "url('/assets/backgrounds/wallpaper4.webp')",
        },
    };

    function modifyTheme(theme: string) {
        const el = document.querySelector(".iphone");

        if (el) {
            el.style.setProperty("--background", themes[theme as keyof typeof themes].background);
            el.style.setProperty("--background2", themes[theme as keyof typeof themes].background2);
            el.style.setProperty("--band", themes[theme as keyof typeof themes].band);
            el.style.setProperty("--backgroud-image", themes[theme as keyof typeof themes].image);
        }
    }

    return (
        <div>
            <div className="colorButtons">
                {Object.keys(themes).map((theme) => (
                    <button key={theme} onClick={() => modifyTheme(theme)}>
                        {theme}
                    </button>
                ))}
            </div>

            <div
                className="iphone"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
            >
                <div className="buttons">
                    <div />
                    <div />
                    <div />
                </div>

                <div className="front">
                    <div className="antenna antenna-1"></div>
                    <div className="antenna antenna-2"></div>

                    <div className="antenna-vertical antenna-v-1"></div>
                    <div className="antenna-vertical antenna-v-2"></div>

                    <div className="border">
                        <div className="screen">
                            <TopBar />
                            <Screens />
                        </div>
                    </div>
                </div>

                <div className="phone-back"></div>
            </div>
        </div>
    );
}
