import { ButtonElement } from "../button-element.js";
import { fixture, html } from "@open-wc/testing";
const assert = chai.assert;
describe("my-element", () => {
    it("is defined", () => {
        const el = document.createElement("my-element");
        assert.instanceOf(el, ButtonElement);
    });
    it("renders with default values", async () => {
        const el = await fixture(html `<my-element></my-element>`);
        assert.shadowDom.equal(el, `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `);
    });
    it("renders with a set name", async () => {
        const el = await fixture(html `<my-element name="it"></my-element>`);
        assert.shadowDom.equal(el, `
      <h1>Hello, it!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `);
    });
    it("handles a click", async () => {
        const el = (await fixture(html `<my-element></my-element>`));
        const button = el.shadowRoot.querySelector("button");
        button.click();
        await el.updateComplete;
        assert.shadowDom.equal(el, `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 1</button>
      <slot></slot>
    `);
    });
});
//# sourceMappingURL=button-element_test.js.map