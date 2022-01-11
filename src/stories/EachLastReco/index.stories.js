import { EachLastReco as Component } from "../../components";
import { TemplateStyled } from "../../utils/index";

export default {
  title: "Components/EachLastReco",
  component: Component,
  decorators: [TemplateStyled],
}

const Template = args => <Component {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Spider-Man: No Way Home',
  value: 5,
  color: "#9DC865"
}