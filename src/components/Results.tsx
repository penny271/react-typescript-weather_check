import { ResultsStateType } from "../App";

// importを使った場合
type ResultsPropsType = {
  // results: ResultsStateType;
  // 上記はApp.tsxで指定されているためその内容をコピペする必要あり
  results: ResultsStateType;
}

// type ResultsPropsType = {
//   // results: ResultsStateType;
//   // 上記はApp.tsxで指定されているためその内容をコピペする必要あり
//   results: {
//     country: string;
//     cityName: string;
//     temperature: string;
//     conditionText: string;
//     icon: string;
//   }
// }


// props = {results: {…}}
// const Results = (props: ResultsPropsType) => {
// 分割代入
const Results = ({results}: ResultsPropsType) => {

  // 分割代入
  const { country, cityName, temperature, conditionText, icon } = results;
  return (
    // classがないtagは <></>と書くことができる
    <>
      {/* ロジカルオペレーター */}
      {country &&
        <div className="results-country">{country}</div>
      }
      {cityName &&
        <div className="results-city">{cityName}</div>
      }
      {temperature &&
        <div className="results-temp">{temperature} <span>°C</span></div>
      }
      {conditionText &&
        <div className="results-condition">
              <img src={icon} alt="icon"/>
              <span>{conditionText}</span>
        </div>
      }
    </>
  );
}

export default Results;