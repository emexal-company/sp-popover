/**
    @license
    Copyright 2020 EMEXAL All Rights Reserved.
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/
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
    maxHeight: number;
    popoverElement: HTMLElement;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected recomputeMaxHeight(): void;
    protected firstUpdated(): void;
    protected _handleDocumentClick(e: any): void;
    protected handleDisabledClick(_e: Event): void;
    protected handleClick(e: any): void;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-popover': Popover;
    }
}
