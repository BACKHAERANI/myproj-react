import Alert from 'components/Alert';

function Components() {
  return (
    <div>
      <h2 className="text-xl border-l-8 border-purple-300 pl-2 mb-1">
        Components
      </h2>
      <h3 className="text-lg border-l-8 border-yellow-300 pl-2 mb-1">Alerts</h3>
      <Alert type="ex" message="여기는 components에서 입력한 메세지가 나온다" />
    </div>
  );
}

export default Components;
