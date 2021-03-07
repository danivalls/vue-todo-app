import { shallowMount } from "@vue/test-utils";
import TasksListItemLabel from "@/components/TasksListItemLabel";

describe("TasksListItemLabel", () => {
  const label = "This is a test";
  const linethrough = true;

  const wrapper = shallowMount(TasksListItemLabel, {
    propsData: { label, linethrough }
  });

  it("renders props.label when passed", () => {
    expect(wrapper.text()).toMatch(label);
  });

  it("sets item-label-line--active class when props.linethrough is passed", () => {
    expect(wrapper.find(".item-label-line--active").element).toBeInstanceOf(
      HTMLElement
    );
  });
});
