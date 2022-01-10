import { useState } from 'react';

function useFieldValues(initialFieldValues) {
  const [fieldValues, setFieldValues] = useState(initialFieldValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFieldValues((prevFieldValues) => ({
      ...prevFieldValues,
      [name]: value,
    }));
  };

  return [fieldValues, handleChange, setFieldValues];
}

export default useFieldValues;
