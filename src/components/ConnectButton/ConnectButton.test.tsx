import { render, screen } from "@testing-library/react";
import ConnectButton from './ConnectButton'
import '@testing-library/jest-dom/extend-expect';

test("Button Must exists", () => {
    render(<ConnectButton isConnecting={false} onConnect={() => {}} error={null}/>);
    const buttonEl = screen.getByRole('button');

    expect(buttonEl).toBeDefined();
});

test("Button Must have connect text", () => {
    render(<ConnectButton isConnecting={false} onConnect={() => {}} error={null}/>);
    const buttonEl = screen.getByRole('button');

    expect(buttonEl).toHaveTextContent("Connect");
});