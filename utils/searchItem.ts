export const searchItem = () => {
  //それぞれのvalueを変数に入れる

  const inputUserId =
    document.querySelector(".js-searchUserId") &&
    (document.querySelector(".js-searchUserId") as HTMLInputElement).value;
  const selectedArticleId =
    document.querySelector(".js-searchArticleId") &&
    (document.querySelector(".js-searchArticleId") as HTMLSelectElement).value;
  const inputTitle =
    document.querySelector(".js-searchTitle") &&
    (document.querySelector(".js-searchTitle") as HTMLInputElement).value;

  //当てはまるデータが有るか探す
};
