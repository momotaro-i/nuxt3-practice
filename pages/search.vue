<script setup lang='ts'>

const posts = useState("posts")
</script>

<template>
  <TemplatesContainer>
    <h1>絞り込み検索</h1>
    <div class="row">
      <label for="userId">userId : </label>
      <input class="input js-searchUserId" type="text" name="userId" id="userId">
    </div>
    <div class="row">
      <label for="articleId">articleId : </label>
      <select name="articleId" id="articleId" class="js-searchArticleId">
        <option value="1">1~20</option>
        <option value="2">21~40</option>
        <option value="3">41~60</option>
        <option value="4">61~80</option>
        <option value="5">81~100</option>
      </select>
    </div>
    <div class="row">
      <label for="title">タイトル検索 : </label>
      <input class="input js-searchTitle" type="text" name="title" id="title">
    </div>
    <AtomsSearchButton label="検索する" />
    <li v-for="post in posts" :key="post.id" class="card">
      <p>userId :{{ post.userId }}</p>
      <p>articleId :{{ post.id }}</p>
      <p class="title">title :<br>{{ post.title }}</p>
    </li>
  </TemplatesContainer>
</template>

<style lang='scss' scoped>
.row {
  font-size: 20px;
}

.input {
  background-color: $white;
  font-size: 20px;
}
</style>