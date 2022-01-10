import { LeftBox as Component } from "../../components";

export default {
  title: "Components/LeftBox",
  component: Component
}

const Template = args => <Component {...args}/>

export const Primary = Template.bind({})
Primary.args = {
  much: 4
}