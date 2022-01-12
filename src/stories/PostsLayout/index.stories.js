import { PostsLayout as Component, Post } from "../../components";
import { TemplateStyled } from "../../utils/index";

export default {
  title: "Components/PostsLayout",
  component: Component,
  decorators: [TemplateStyled],
}

const Template = args => <Component {...args} />

export const Primary = Template.bind({})
Primary.args = {
  posts: [
    {
      title: "Just awesome!",
      body: "This is the best movie i've seen",
      rate: 5,
      mediaTitle: "Spider-Man: No Way Home",
      typeId: 1,
      User: {
        firstName: "Alex",
        lastName: "Malon",
        pictureId: "https://media.istockphoto.com/illustrations/blank-man-profile-head-icon-placeholder-illustration-id1298261537?k=20&m=1298261537&s=612x612&w=0&h=8plXnK6Ur3LGqG9s-Xt2ZZfKk6bI0IbzDZrNH9tr9Ok=",
        username: "alexmalon",
      }
    },
    {
      title: "Just awesome!",
      body: "This is the best movie i've seen",
      rate: 5,
      mediaTitle: "Spider-Man: No Way Home",
      typeId: 1,
      User: {
        firstName: "Alex",
        lastName: "Malon",
        pictureId: "https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Alien-512.png",
        username: "alexmalon",
      }
    }
  ]
}