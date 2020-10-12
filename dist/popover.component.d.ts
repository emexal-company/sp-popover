import { Base } from '@spectrum/sp-base';
export declare type MenuElement = {
    id: String;
    text: String;
    role: String;
    disabled: Boolean;
};
export declare type NestableMenuElement = MenuElement | {
    [k: string]: MenuElement;
};
export declare class Popover extends Base {
    static componentStyles: import("lit-element").CSSResult[];
    open: boolean;
    disabled: boolean;
    constructor();
    firstUpdated(): void;
    protected _handleDocumentClick(e: any): void;
    protected handleDisabledClick(e: Event): void;
    protected handleClick(e: any): void;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-popover': Popover;
    }
}
