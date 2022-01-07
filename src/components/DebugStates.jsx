function DebugStates(props) {
  return (
    <div>
      <pre className="text-xs bg-gray-100 p-1 border border-gray-600 overflow-x-scroll h-30">
        {JSON.stringify(props, null, 2)}
      </pre>
    </div>
  );
}

export default DebugStates;
