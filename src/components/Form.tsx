// "https://api.weatherapi.com/v1/current.json?key=d8bda20153f64375b49221712231912&q=London&aqi=no"

// ts: 指定するものが複数の場合、型を別のところに書いて当てはめる(例: props)
type FormPropsType = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
}
// App.tsx から渡された setCity と getWeather にアクセスするには props が必要なのでpropsを引数に入れる
// ※typeScriptでは propsとして渡したものにも型を設定する必要あり
// const Form = (props: any) => {
const Form = (props: FormPropsType) => {
  return (
    <form onSubmit={props.getWeather}>
      {/* onChangeハンドラー */}
      <input type="text" name="city" placeholder="都市名" onChange={e => props.setCity(e.target.value)} />
      {/* ! onClickだた動かないことがあるため formタグに onSubmitを使う */}
      {/* <button type="submit" onClick={props.getWeather}>Get Weahter</button> */}
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default Form;