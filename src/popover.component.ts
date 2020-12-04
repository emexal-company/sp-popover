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

import { customElement, property, query } from 'lit-element';
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
  @property({ type: Number }) maxHeight: number = undefined;
  @query('#popover-element') popoverElement: HTMLElement;

  constructor() {
    super();
  }

  public connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this.recomputeMaxHeight.bind(this));
    window.addEventListener('scroll', this.recomputeMaxHeight.bind(this));
  }

  public disconnectedCallback() {
    window.removeEventListener('resize', this.recomputeMaxHeight.bind(this));
    window.removeEventListener('scroll', this.recomputeMaxHeight.bind(this));
    super.disconnectedCallback();
  }

  protected recomputeMaxHeight() {
    if (this.popoverElement) {
      const elRect = this.popoverElement.getBoundingClientRect();
      const docHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

      this.maxHeight = docHeight - elRect.top - 25;
    }
  }

  protected firstUpdated() {
    if (!this.disabled) {
      document.addEventListener('click', this._handleDocumentClick.bind(this));
    }
  }

  protected handleSlotChange() {
    this.recomputeMaxHeight();

    this.requestUpdate();
  }

  protected _handleDocumentClick(e: any) {
    if ((!this.open) && e.path.some((el: any) => el === this) && (this != e.path[0])) {
      this.open = true;
      let openEvent = new CustomEvent('open', {
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(openEvent);
    } else {
      this.open = false;
    }
  }

  protected handleDisabledClick(_e: Event) { }

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
