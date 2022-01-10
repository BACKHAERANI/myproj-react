<<<<<<< HEAD
import { useCallback, useState } from 'react';
=======
import { useState } from 'react';
>>>>>>> homework/39

function useFieldValues(initialFieldValues) {
  const [fieldValues, setFieldValues] = useState(initialFieldValues);

<<<<<<< HEAD
  // 함수 객체를 생성할 때, 의존성이 걸린 값이 변경시에만 함수를 재생성

  const handleChange = useCallback((e) => {
=======
  const handleChange = (e) => {
>>>>>>> homework/39
    const { name, value } = e.target;
    setFieldValues((prevFieldValues) => ({
      ...prevFieldValues,
      [name]: value,
    }));
<<<<<<< HEAD
  }, []);

  const clearFieldValues = useCallback(() => {
    setFieldValues(initialFieldValues);
  }, []);

  return { fieldValues, handleChange, clearFieldValues, setFieldValues };
=======
  };

  return [fieldValues, handleChange, setFieldValues];
>>>>>>> homework/39
}

export default useFieldValues;
