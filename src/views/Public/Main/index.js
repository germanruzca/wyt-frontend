import { LeftBox, PostsLayout, RigthBox } from "../../../components"
import { MainLayout } from "../../../components/Layouts"

const Main = ({children}) => {
  return (
    <>
      <MainLayout>
        <LeftBox/>
        <PostsLayout/>
        <RigthBox/>
      </MainLayout>
    </>
  );
};

export { Main };
export default Main;