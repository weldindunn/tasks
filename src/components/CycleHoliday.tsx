import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "ISD" | "NDDD" | "TLPD" | "LED" | "HWN";

const alphaOrder: Record<Holiday, Holiday> = {
    HWN: "ISD",
    ISD: "LED",
    LED: "NDDD",
    NDDD: "TLPD",
    TLPD: "HWN"
};
const chronOrder: Record<Holiday, Holiday> = {
    ISD: "NDDD",
    NDDD: "TLPD",
    TLPD: "LED",
    LED: "HWN",
    HWN: "ISD"
};
const fullName: Record<Holiday, string> = {
    ISD: "International Spaghetti Day",
    NDDD: "No Dirty Dishes Day",
    TLPD: "Talk Like a Pirate Day",
    LED: "Leif Eriksson Day",
    HWN: "Halloween"
};

export function CycleHoliday(): JSX.Element {
    /*Favorite Holidays!
    1. Leif Eriksson Day (Sailboat) Oct 9, x26F5
    2. Halloween (Jack O'Lantern) Oct 31, x1F383
    3. Talk Like a Pirate Day (Pirate Flag) Sept 19, x1F3F4
    4. International Spaghetti Day (Aquarius) Jan 4, x2652
    5. No Dirty Dishes Day (Soap) May 18, x1F9FC
    */
    const [holiday, setHoliday] = useState<Holiday>("HWN");
    const [visible, setVisible] = useState<boolean>(false);

    function nextAlpha(): void {
        visible === false ? setHoliday("HWN") : setHoliday(alphaOrder[holiday]);
        setVisible(true);
    }

    function nextChron(): void {
        visible === false ? setHoliday("ISD") : setHoliday(chronOrder[holiday]);
        setVisible(true);
    }

    return (
        <div>
            <Button onClick={nextAlpha}>Advance by Alphabet</Button>
            <Button onClick={nextChron}>Advance by Year</Button>
            <div>
                {visible === true ? fullName[holiday] + ": " : <span></span>}
                {visible === true ? (
                    holiday === "ISD" ? (
                        <span>&#x2652;</span>
                    ) : holiday === "NDDD" ? (
                        <span>&#x1F9FC;</span>
                    ) : holiday === "TLPD" ? (
                        <span>&#x1F3F4;</span>
                    ) : holiday === "LED" ? (
                        <span>&#x26F5;</span>
                    ) : holiday === "HWN" ? (
                        <span>&#x1F383;</span>
                    ) : (
                        <span></span>
                    )
                ) : (
                    <span></span>
                )}
            </div>
        </div>
    );
}
