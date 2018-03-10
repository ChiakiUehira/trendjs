<template>
  <div class="repository-card">
      <div class="title"></div>
      <div class="discription">
        <span></span>
        <span></span>
        <span></span>
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.repository-card {
  box-shadow: 0px 0px 4px 0px #d0d0d0;
  margin-bottom: 15px;
  border-radius: 5px;
  display: block;
  padding: 15px;
  color: #000;
  text-decoration: none;
}
.title {
  width: 50%;
  height: 12px;
  background: #eee;
  border-radius: 10px;
  margin-bottom: 10px;
}
.discription {
  font-size: 12px;
  line-height: 1.5;
}

.discription span {
  display: block;
  height: 10.25px;
  width: 100%;
  background: #eee;
  border-radius: 5px;
}
.discription span:not(:last-child) {
  margin-bottom: 5px;
}
</style>


