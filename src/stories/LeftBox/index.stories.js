import { LeftBox as Component } from "../../components";
import { TemplateStyled } from "../../utils/index";

export default {
  title: "Components/LeftBox",
  component: Component,
  decorators: [TemplateStyled],
}

const Template = args => <Component {...args}/>

export const Primary = Template.bind({})
Primary.args = {
  much: 4
}