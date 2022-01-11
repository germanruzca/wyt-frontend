import { Textarea as Component } from "../../components";
import { TemplateStyled } from "../../utils/index"

export default {
  title: "Components/Textarea",
  component: Component,
  decorators: [TemplateStyled],
}

const Template = args => <Component {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Review',
  value: 1,
  placeholder: "Here you put your review..."
}