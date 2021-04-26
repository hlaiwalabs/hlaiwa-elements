import {LitElement, html, css, adoptStyles} from "lit";
import {customElement, property} from "lit/decorators";

/**
 * A button element.
 *
 * @slot - This element has a slot
 */
@customElement("button-element")
export class ButtonElement extends LitElement {
  static styles = css`
    :host(:hover) {
      padding: 0;
      border: 9px solid blue;
    }

    :host {
      display: inline-block;
      border: 1px solid blue;
      padding: 8px;
      max-width: 800px;
    }
    button:hover {
      background: white;
      color: blue;
      margin: 2px;
      border: 1px solid blue;
    }
    button {
      display: block;
      border: none;
      background: blue;
      color: white;
      padding: 16px;
      width: 100%;
      height: inherit;
    }
  `;

  render() {
    return html`
      <button>
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "button-element": ButtonElement;
  }
}
