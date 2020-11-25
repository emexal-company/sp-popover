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

import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { styleMap } from 'lit-html/directives/style-map.js';

import { Popover } from './popover.component';

export default function template(this: Popover) {
    const classes = {
        'is-open': this.open,
    }

    const styles = {
        'max-height': this.maxHeight + 'px',
        'max-width': 'fit-content',
        'padding': '0px 8px 0px 8px',
        'overflow-y': 'auto',
        'overflow-x': 'hidden',
    }

    return html`
    <slot name="dropdown-trigger"></slot>
    <slot name="return-toline"></slot>
    <div id="popover-element" class="spectrum-Popover spectrum-Popover--bottom spectrum-Dropdown-popover ${classMap(classes)}" style="${styleMap(styles)}" @click="${(!this.disabled)? this.handleClick: this.handleDisabledClick}">
        <slot name="dropdown-content"></slot>
    </div>
    `;
}
