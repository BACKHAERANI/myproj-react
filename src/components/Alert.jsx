//https://tailwind-elements.com/docs/standard/components/alerts/
import Info from './icons/Info';
import Check from './icons/Check';
import Ex from './icons/Ex';
import Warning from './icons/Warning';
import Heartlight from './icons/Heartlight';

const MAPPING = {
  info: ['blue', <Info />],
  check: ['green', <Check />],
  ex: ['red', <Ex />],
  warning: ['yellow', <Warning />],
  Heartlight: ['gray', <Heartlight />],
};

function Alert({ type, message }) {
  const [colorCode, icon] = MAPPING[type];

  return (
    <div
      className={`bg-${colorCode}-100 rounded-lg py-5 px-6 mb-3 text-base text-${colorCode}-700 inline-flex items-center w-full`}
      role="alert"
    >
      <span className="mr-2">{icon}</span>
      {message}
    </div>
  );
}

function Cheat() {
  return (
    <div className="bg-blue-100 text-blue-700 bg-green-100 text-green-700" />
  );
}

export default Alert;
