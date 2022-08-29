import React, { useState } from "react";

const HeadTailPage = () => {
  const [optionsValue, setOptionsValue] = useState("");
  const [finalArr, setFinalArr] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  // on selection of option
  const handleSelectCHange = (e) => {
    setOptionsValue(e.target.value);
    setErrorMsg("");
  };

  // on click of submit
  const handleSubmit = () => {
    if (optionsValue == '' || optionsValue == null) {
        setErrorMsg("Please select any option to continue");
        // alert("Please select any option to continue");
    } else {
        if (finalArr.length == 0) {
            setFinalArr([{ column: [optionsValue] }]);
          } else {
            let temp = finalArr[finalArr.length - 1].column;
            if (temp[temp.length - 1] == optionsValue) {
              let newArr = finalArr;
              newArr[newArr.length - 1].column.push(optionsValue);
              setFinalArr(newArr);
            } else {
              let newObj = { column: [optionsValue] };
              const newData = [...finalArr, newObj];
              setFinalArr(newData);
            }
          }
          setOptionsValue("");
          setErrorMsg("");
    }
    
  };

  return (
    <>
      <h1>Head and tail Page</h1>
      <div>
        <label>
          Please select from "H" & "T" :  
          <select value={optionsValue} onChange={handleSelectCHange}>
            <option value="" disabled>
              Select value
            </option>
            <option value="H">H</option>
            <option value="T">T</option>
          </select>
        </label>
        <p>{errorMsg}</p>
      </div>
      <button onClick={handleSubmit}>Submit</button>

      <table>
        <tr>
          {finalArr.map((item) => {
            return (
              <>
                <td></td>
                {item.column.map((val) => (<tr>{val}</tr>
                ))}
              </>
            );
          })}
        </tr>
      </table>
    </>
  );
};

export default HeadTailPage;
