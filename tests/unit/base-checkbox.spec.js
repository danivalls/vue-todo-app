import { shallowMount } from "@vue/test-utils";
import BaseCheckbox from "@/components/ui/BaseCheckbox";

describe("BaseCheckbox", () => {
  const wrapper = shallowMount(BaseCheckbox);
  const input = wrapper.find("label").element;
  const initialValue = wrapper.find("input").element.checked;

  input.click();
  input.click();

  it("emits event when clicked", () => {
    expect(wrapper.emitted("input")).toBeTruthy();
    expect(wrapper.emitted("input").length).toBe(2);
  });

  it("emits propper value when clicked", () => {
    expect(wrapper.emitted("input")[0][0]).toBe(!initialValue);
    expect(wrapper.emitted("input")[1][0]).toBe(initialValue);
  });
});
