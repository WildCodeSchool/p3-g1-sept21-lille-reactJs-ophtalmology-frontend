import DropdownWindow from 'components/DropdownWindows';
import refractiveContent from './content';

export default function Refractive() {
  return (
    <>
      {refractiveContent.map((refractive) => (
        <DropdownWindow
          key={refractive.id}
          title={refractive.title}
          content={refractive.content}
        />
      ))}
    </>
  );
}
