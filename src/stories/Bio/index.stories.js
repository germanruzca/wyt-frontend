import { Bio as Component } from "../../components";
import { TemplateStyled } from "../../utils/index"

export default {
  title: "Components/Bio",
  component: Component,
  decorators: [TemplateStyled],
}

const Template = args => <Component {...args} />

export const Primary = Template.bind({})