import { TypeLayout, LeftBox, RigthBox } from "../../../components"
import { MainLayout } from "../../../components/Layouts"

const Type = ({children}) => {
  return (
    <>
      <MainLayout>
        <LeftBox/>
        <TypeLayout/>
        <RigthBox/>
      </MainLayout>
    </>
  );
};

export { Type };
export default Type;