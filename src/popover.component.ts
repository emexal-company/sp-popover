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

import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import popoverStyles from './popover.styles';
import template from './popover.template';

export type MenuElement = { id: String, text: String, role: String, disabled: Boolean };
export type NestableMenuElement = MenuElement | { [k: string]: MenuElement };

@customElement('sp-popover')
export class Popover extends Base {
  public static componentStyles = [popoverStyles];

   @property({ type: Boolean }) open = false;
   @property({ type: Boolean }) disabled = false;


  constructor() {
    super();
  }

  firstUpdated() {
    if (!this.disabled) {
      document.addEventListener('click', this._handleDocumentClick.bind(this));
    }
  }

  protected _handleDocumentClick(e: any) {
    if ((!this.open) && e.path.some((el: any) => el === this) && (this != e.path[0])) {
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

  protected handleDisabledClick(e: Event) {}

  protected handleClick(e: any) {
    let changedEvent = new CustomEvent('changed', {
      detail: { target: e.currentTarget },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(changedEvent);
  }

  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-popover': Popover;
  }
}