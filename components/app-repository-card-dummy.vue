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
  height: 11px;
  border-radius: 10px;
  margin-bottom: 10px;
  background: -webkit-gradient(linear, left top, right top, from(rgba(207, 216, 220, 0.2)), color-stop(rgba(207, 216, 220, 0.4)), to(rgba(207, 216, 220, 0.2)));
  background: -webkit-linear-gradient(left, rgba(207, 216, 220, 0.2), rgba(207, 216, 220, 0.4), rgba(207, 216, 220, 0.2));
  background: linear-gradient(90deg, rgba(207, 216, 220, 0.2), rgba(207, 216, 220, 0.4), rgba(207, 216, 220, 0.2));
  animation: loading 1.4s ease infinite;
  background-size: 600% 600%;
}
.discription {
  font-size: 12px;
  line-height: 1.5;
}

.discription span {
  display: block;
  height: 10.7px;
  width: 100%;
  border-radius: 5px;
  background: linear-gradient(90deg, rgba(207, 216, 220, 0.2), rgba(207, 216, 220, 0.4), rgba(207, 216, 220, 0.2));
  animation: loading 1.4s ease infinite;
  background-size: 600% 600%;
}
.discription span:not(:last-child) {
  margin-bottom: 5px;
}
@keyframes loading {
  0%,
  100% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
</style>


