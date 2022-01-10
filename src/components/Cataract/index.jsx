import cataractContent from './content';
import DropdownWindow from '../DropdownWindows/index';

function Cataract() {
  return (
    <>
      {cataractContent.map((cataract) => (
        <DropdownWindow
          key={cataract.id}
          title={cataract.title}
          content={cataract.content}
        />
      ))}
    </>
  );
}

export default Cataract;
