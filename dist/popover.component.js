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
import { __decorate, __metadata } from "tslib";
import { customElement, property, query } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import popoverStyles from './popover.styles';
import template from './popover.template';
let Popover = class Popover extends Base {
    constructor() {
        super();
        this.open = false;
        this.disabled = false;
        this.maxHeight = undefined;
        window.addEventListener('scroll', this.recomputeMaxHeight.bind(this));
    }
    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('resize', this.recomputeMaxHeight.bind(this));
        window.addEventListener('scroll', this.recomputeMaxHeight.bind(this));
    }
    disconnectedCallback() {
        window.removeEventListener('resize', this.recomputeMaxHeight.bind(this));
        window.removeEventListener('scroll', this.recomputeMaxHeight.bind(this));
        super.disconnectedCallback();
    }
    recomputeMaxHeight() {
        const elRect = this.popoverElement.getBoundingClientRect();
        const docHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        this.maxHeight = docHeight - elRect.top - 30;
    }
    firstUpdated() {
        this.recomputeMaxHeight();
        if (!this.disabled) {
            document.addEventListener('click', this._handleDocumentClick.bind(this));
        }
    }
    _handleDocumentClick(e) {
        if ((!this.open) && e.path.some((el) => el === this) && (this != e.path[0])) {
            this.open = true;
            let openEvent = new CustomEvent('open', {
                bubbles: true,
                composed: true
            });
            this.dispatchEvent(openEvent);
        }
        else {
            this.open = false;
        }
    }
    handleDisabledClick(_e) { }
    handleClick(e) {
        let changedEvent = new CustomEvent('changed', {
            detail: { target: e.currentTarget },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(changedEvent);
    }
    render() {
        return template.call(this);
    }
};
Popover.componentStyles = [popoverStyles];
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Popover.prototype, "open", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Popover.prototype, "disabled", void 0);
__decorate([
    property({ type: Number }),
    __metadata("design:type", Number)
], Popover.prototype, "maxHeight", void 0);
__decorate([
    query('#popover-element'),
    __metadata("design:type", HTMLElement)
], Popover.prototype, "popoverElement", void 0);
Popover = __decorate([
    customElement('sp-popover'),
    __metadata("design:paramtypes", [])
], Popover);
export { Popover };
//# sourceMappingURL=popover.component.js.map