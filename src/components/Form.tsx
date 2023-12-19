// The line import { useState } from 'react'; is a JavaScript import statement used in React applications. It imports the useState hook from the React library.
import { useState } from 'react';

// "https://api.weatherapi.com/v1/current.json?key=d8bda20153f64375b49221712231912&q=London&aqi=no"

const Form = () => {
  // 次に[] があって、その中に city と setCity が書かれています。最初の city が先ほど説明したstateで、ここにユーザーが入力した都市名が保管されます。次の setCity がstateにデータを書き込んだり操作したりする仕組みです。つまりこの setCity を使うことで city 内のデータを操作できるのです。 ここではわかりやすいように city、 setCity と名前をつけていますが、他の名前でも構いません。慣例的に[] の2つ目は「set + state名」と名前をつけます。文字通り、stateにデータをセット（set）するという意味です。
  const [city, setCity] = useState<string>(""); // 初期値ブランク
  const getWeather = (e: any) => {
    e.preventDefault(); // formでsubmitでreloadされないようにする
    fetch("https://api.weatherapi.com/v1/current.json?key=d8bda20153f64375b49221712231912&q=London&aqi=no")
      .then(res => res.json())
      .then(data => console.log('data :>> ', data))
  }
  return (
    <form>
      {/* onChangeハンドラー */}
      <input type="text" name="city" placeholder="都市名" onChange={e => setCity(e.target.value)} />
      <button type="submit" onClick={getWeather}>Get Weahter</button>
    </form>
  );
};

export default Form;