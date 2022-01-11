import { TypeLayout as Component } from "../../components";
import { TemplateStyled } from "../../utils/index"

export default {
  title: "Components/TypeLayout",
  component: Component,
  decorators: [TemplateStyled],
}

const Template = args => <Component {...args} />

export const Primary = Template.bind({})