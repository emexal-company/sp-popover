import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
export default function template() {
    const classes = {
        'is-open': this.open,
    };
    return html `
    <slot name="dropdown-trigger"></slot>
    <slot name="return-toline"></slot>
    <div class="spectrum-Popover spectrum-Popover--bottom spectrum-Dropdown-popover ${classMap(classes)}" style="max-width: fit-content; padding: 0px 8px 0px 8px" @click="${(!this.disabled) ? this.handleClick : this.handleDisabledClick}">
        <slot name="dropdown-content"></slot>
    </div>
    `;
}
//# sourceMappingURL=popover.template.js.map