import {render, screen} from "@testing-library/react";
import WalletCard from './WalletCard'
import '@testing-library/jest-dom/extend-expect';
import {BigNumber} from "ethers";
import {createMemoryHistory} from 'history'
import {MemoryRouter, Route } from "react-router-dom";
import userEvent from "@testing-library/user-event";

let WalletCardComp: JSX.Element;
beforeEach(() => {
    WalletCardComp = <WalletCard loading={false} error={null} onTransfer={() => {
    }} symbol={"DUMMY"} address={'0xf39Fd6e51aad88F6F4ce6aB8827279cffFb52269'} balance={BigNumber.from(1000)}/>
})



test("Must have address text strong", () => {
    render(WalletCardComp);
    const labelEl = screen.getByText(/address/i);

    expect(labelEl.tagName).toEqual("STRONG");
});

test("Must have balance text strong", () => {
    render(WalletCardComp);
    const labelEl = screen.getByText(/balance/i);

    expect(labelEl.tagName).toEqual("STRONG");
});

test("Must have transfer button", () => {
    render(WalletCardComp);
    const buttonEl = screen.getByRole('button');

    expect(buttonEl).toBeDefined();
    expect(buttonEl).toHaveTextContent(/transfer/i);
});

