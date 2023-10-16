import Screens from "./Screens";
import TopBar from "./TopBar";
import "./Phone.css";

export default function Phone() {
    return (
        <div className="iphone">
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
    );
}
