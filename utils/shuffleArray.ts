//配列をシャッフルする関数
export const shuffleArray = (array: any) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    //ランダムな整数
    const num = Math.floor(Math.random() * (i + 1));

    //一旦回ってきた配列の要素を格納
    let currentItem = newArray[i];
    //ランダムな要素と入れ替える
    newArray[i] = newArray[num];
    newArray[num] = currentItem;
  }

  return newArray;
};
