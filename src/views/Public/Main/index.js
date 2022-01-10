import { LeftBox, PostsLayout, RigthBox } from "../../../components"
import { MainLayout } from "../../../components/Layouts"

const Main = () => {
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