import { Post as Component } from "../../components";

export default {
  title: "Components/Post",
  component: Component
}

const Template = args => <Component {...args} />

export const Primary = Template.bind({})