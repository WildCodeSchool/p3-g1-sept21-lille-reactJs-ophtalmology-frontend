import cataractContent from './content';
import SCataract from './style';
import DropdownWindow from '../DropdownWindows/index';

function Cataract() {
  return (
    <SCataract>
      <>
        {cataractContent.map((cataract) => (
          <DropdownWindow
            key={cataract.id}
            title={cataract.title}
            content={cataract.content}
          />
        ))}
      </>
    </SCataract>
  );
}

export default Cataract;
