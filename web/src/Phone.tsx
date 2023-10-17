import styles from "./Phone.module.css";
import { themes } from "./config";
import Screens from "./Screens";
import TopBar from "./TopBar";

export default function Phone() {
    function modifyTheme(theme: string) {
        const el = document.querySelector(`.${styles.phone}`) as HTMLElement;

        if (el) {
            const item = themes[theme as keyof typeof themes];
            el.style.setProperty("--background", item.background);
            el.style.setProperty("--background2", item.background2);
            el.style.setProperty("--band", item.band);
            el.style.setProperty("--backgroud-image", item.image);
        }
    }

    return (
        <div>
            <div className={styles.themeButtons}>
                {Object.keys(themes).map((theme) => (
                    <button key={theme} onClick={() => modifyTheme(theme)}>
                        {theme}
                    </button>
                ))}
            </div>

            <div
                draggable={false}
                className={styles.phone}
                onDragStart={(e) => e.preventDefault()}
                onContextMenu={(e) => e.preventDefault()}
            >
                <div className={styles.buttons}>
                    <div />
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
        </div>
    );
}
