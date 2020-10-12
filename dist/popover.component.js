import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import popoverStyles from './popover.styles';
import template from './popover.template';
let Popover = class Popover extends Base {
    constructor() {
        super();
        this.open = false;
        this.disabled = false;
    }
    firstUpdated() {
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
    handleDisabledClick(e) { }
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
Popover = __decorate([
    customElement('sp-popover'),
    __metadata("design:paramtypes", [])
], Popover);
export { Popover };
//# sourceMappingURL=popover.component.js.map