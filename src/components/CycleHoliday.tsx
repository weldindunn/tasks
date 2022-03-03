import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "EID" | "NDDD" | "TLPD" | "LED" | "HWN";

const alphaOrder: Record<Holiday, Holiday> = {
    EID: "HWN",
    HWN: "LED",
    LED: "NDDD",
    NDDD: "TLPD",
    TLPD: "EID"
};
const chronOrder: Record<Holiday, Holiday> = {
    EID: "NDDD",
    NDDD: "TLPD",
    TLPD: "LED",
    LED: "HWN",
    HWN: "EID"
};
const fullName: Record<Holiday, string> = {
    EID: "Estonian Independence Day",
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
    4. Estonian Independence Day (Estonian Flag) Feb 24, x1F1EA
    5. No Dirty Dishes Day (Soap) May 18, x1F9FC
    */
    const [holiday, setHoliday] = useState<Holiday>("EID");

    function nextAlpha(): void {
        setHoliday(alphaOrder[holiday]);
    }

    function nextChron(): void {
        setHoliday(chronOrder[holiday]);
    }

    return (
        <div>
            <div>
                {fullName[holiday]}:{" "}
                {holiday === "EID" ? (
                    <span>&#x1F1FA;</span>
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
                )}
            </div>
            <Button onClick={nextAlpha}>Advance by Alphabet</Button>
            <Button onClick={nextChron}>Advance by Year</Button>
        </div>
    );
}
