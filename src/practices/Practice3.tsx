export const Practice3 = () => {
  // 引数と返却値に型を指定
  // 改修するなかで誤ってstringで返却するよう
  // コーディングしてしまった際には、エディタ上に
  // エラーを表示してくれる。
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };

  const onClickPractice = () => {
    // 変数に型指定を行う
    let total: number = 0;
    // もしgetTotalFee()の戻り値が文字列だった場合、
    // ここでのtotal変数はnumber型に指定しているので
    // エディタ上でエラーが表示される。
    total = getTotalFee(1000);
    console.log(total);
  };

  return (
    <div>
      <p>練習問題：変数の型指定</p>
      <button onClick={onClickPractice}>練習問題２を実行</button>
    </div>
  );
};
