import { useEffect, useState } from "react";
import styles from "./Phone.module.css";
// import { themes } from "./config";
import Screens from "./Screens";
import TopBar from "./TopBar";

export default function Phone() {
    const [show, setShow] = useState(true);

    // function modifyTheme(theme: string) {
    //     const el = document.querySelector(`.${styles.phone}`) as HTMLElement;

    //     if (el) {
    //         const item = themes[theme as keyof typeof themes];
    //         el.style.setProperty("--background", item.background);
    //         el.style.setProperty("--background2", item.background2);
    //         el.style.setProperty("--band", item.band);
    //         el.style.setProperty("--backgroud-image", item.image);
    //     }
    // }

    // useEffect(() => {
    //     const handleKeyDown = (e: KeyboardEvent) => {
    //         if ((e.key === "F1" || e.key === "Escape") && show) {
    //             fetch(`https://phone/close`, {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json; charset=UTF-8",
    //                 },
    //                 body: JSON.stringify({}),
    //             })
    //                 .then((resp) => resp.json())
    //                 .then((resp) => console.log(resp));
    //         }
    //     };

    //     const handleMessages = (e: MessageEvent) => {
    //         if (e.data.show) {
    //             setShow(true);
    //         } else {
    //             setShow(false);
    //         }
    //     };

    //     window.addEventListener("keydown", handleKeyDown);
    //     window.addEventListener("message", handleMessages);

    //     return () => {
    //         window.removeEventListener("keydown", handleKeyDown);
    //         window.removeEventListener("message", handleMessages);
    //     };
    // }, [show]);

    return (
        <div>
            {/* <div className={styles.themeButtons}>
                {Object.keys(themes).map((theme) => (
                    <button key={theme} onClick={() => modifyTheme(theme)}>
                        {theme}
                    </button>
                ))}
            </div> */}

            {show && (
                <div
                    draggable={false}
                    className={styles.phone}
                    onDragStart={(e) => e.preventDefault()}
                    onContextMenu={(e) => e.preventDefault()}
                >
                    <div className={styles.buttons}>
                        <div onClick={() => setShow(false)} />
                        <div />
                        <div />
                    </div>

                    <div className={styles.display}>
                        <div />
                        <div />
                        <div />
                        <div />

                        <div className={styles.bezel}>
                            <div className={styles.screen}>
                                <TopBar />
                                <Screens />
                            </div>
                        </div>
                    </div>

                    <div className={styles.shadow} />
                </div>
            )}
        </div>
    );
}
