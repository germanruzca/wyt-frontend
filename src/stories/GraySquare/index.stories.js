import { GraySquare as Component } from "../../components";
import { TemplateStyled } from "../../utils/index";

export default {
  title: "Components/GraySquare",
  component: Component,
  decorators: [TemplateStyled],
}

const Template = args => <Component {...args} />

export const Primary = Template.bind({})