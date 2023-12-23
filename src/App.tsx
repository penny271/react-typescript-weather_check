// The line import { useState } from 'react'; is a JavaScript import statement used in React applications. It imports the useState hook from the React library.
import { useState } from 'react';
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";
import Loading from "./components/Loading";
import './App.css';

// ts: 複数の型の指定
export type ResultsStateType = {
    country: string;
    cityName: string;
    temperature: string;
    conditionText: string;
    icon: string;
}

function App() {
  const [loading, setLoading] = useState<boolean>(false);
    // 次に[] があって、その中に city と setCity が書かれています。最初の city が先ほど説明したstateで、ここにユーザーが入力した都市名が保管されます。次の setCity がstateにデータを書き込んだり操作したりする仕組みです。つまりこの setCity を使うことで city 内のデータを操作できるのです。 ここではわかりやすいように city、 setCity と名前をつけていますが、他の名前でも構いません。慣例的に[] の2つ目は「set + state名」と名前をつけます。文字通り、stateにデータをセット（set）するという意味です。
    const [city, setCity] = useState<string>(""); // 初期値ブランク
    const [results, setResults] = useState<ResultsStateType>({
        country: "",
        cityName: "",
        temperature: "",
        conditionText: "",
        icon: ""
    });
    const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
        setLoading(true);
        fetch(`https://api.weatherapi.com/v1/current.json?key=d8bda20153f64375b49221712231912&q=${city}&aqi=no`)
            .then(res => res.json())
            .then(data => {
                setResults({
                    country: data.location.country,
                    cityName: data.location.name,
                    temperature: data.current.temp_c,
                    conditionText: data.current.condition.text,
                    icon: data.current.condition.icon
                })
              setCity(''); // 検索文字の初期化
              setLoading(false);
            })
            .catch(err => alert('エラーが発生しました。ページをリロードして、もう一度トライしてください。'))
    }
    return (
      <div className="wrapper">
        <div className="container">
          <Title />
            {/* タグの中に「渡すもの」、そしてその「名前」を書くと、そのコンポーネントに props を渡せます。 */}
          <Form getWeather={getWeather} setCity={setCity} city={city} />
          {/* <Results results={results} /> */}
          {loading ? <Loading /> : <Results results={results} />}
        </div>
      </div>
    );
}

export default App;