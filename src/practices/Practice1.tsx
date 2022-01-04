export const Practice1 = () => {
  // const calcTotalFee = (num) => {
  //   const total = num * 1.1;
  //   console.log(total);
  // };
  // 引数の型を指定
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };

  const onClickPractice = () => {
    calcTotalFee(1000);

    // JSは暗黙の了解で数字として解釈されるので、計算が実行される。
    //calcTotalFee('1000');

    // 計算できない(NaN)
    // 関数の宣言側で引数のデータ型を指定している場合、
    // コーディング時にエラーメッセージを表示してくれる。
    //calcTotalFee("1,000");
  };

  return (
    <div>
      <p>練習問題：引数の型指定</p>
      <button onClick={onClickPractice}>練習問題１を実行</button>
    </div>
  );
};
