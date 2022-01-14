import glaucomaContent from './content';
import DropdownWindow from '../DropdownWindows';

export default function Glaucoma() {
  return (
    <>
      {glaucomaContent.map((glaucoma) => (
        <DropdownWindow
          key={glaucoma.id}
          title={glaucoma.title}
          content={glaucoma.content}
        />
      ))}
    </>
  );
}
