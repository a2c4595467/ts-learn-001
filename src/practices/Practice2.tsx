export const Practice2 = () => {
  // 引数と返却値に型を指定
  // 改修するなかで誤ってstringで返却するよう
  // コーディングしてしまった際には、エディタ上に
  // エラーを表示してくれる。
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };

  const onClickPractice = () => {
    console.log(getTotalFee(1000));
  };

  return (
    <div>
      <p>練習問題：返却値の型指定</p>
      <button onClick={onClickPractice}>練習問題２を実行</button>
    </div>
  );
};
