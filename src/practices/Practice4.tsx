export const Practice4 = () => {
  // 引数の型を指定
  // tsconfig.jsonの"strict"をtrueにすると、
  // 引数numが暗黙的にany型になっていると警告を出してくれる
  const calcTotalFee = (num) => {
    const total = num * 1.1;
    console.log(total);
  };

  const onClickPractice = () => {
    calcTotalFee(1000);
  };

  return (
    <div>
      <p>練習問題：設定ファイルを触ってみる</p>
      <button onClick={onClickPractice}>練習問題4を実行</button>
    </div>
  );
};
