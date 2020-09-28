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

import { PageViewElement } from '@components/page-view-element';
import { customElement, query } from 'lit-element';

import styles from './demo-popover.styles';
import template from './demo-popover.template';

// These are the shared styles needed by this element.
import sharedStyles from '@components/shared.styles';
import { Popover } from '@spectrum/sp-popover';
import { Spectrum } from '@spectrum/config/spectrum-config';

import Prism from "prismjs";

@customElement('demo-popover')
export class DemoPopover extends PageViewElement {

  public static styles = [sharedStyles, styles];
  public open = true;

  protected _handleClick() {
    this.open = !this.open;
  }

  protected render() {
    return template.call(this);
  }



  protected firstUpdated() {
    Prism.highlightAllUnder(this.shadowRoot);
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'demo-popover': DemoPopover;
  }
}
