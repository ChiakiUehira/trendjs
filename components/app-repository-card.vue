<template>
  <div class="repository-card" @click="handleClick(repository)">
    <div class="title">
      {{title}}
    </div>
    <div class="discription">
      <span>
        {{discription}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'repository',
  ],
  computed: {
    href () {
      return `${this.repository.author}@${this.repository.name}`
    },
    title () {
      return `${this.repository.author} / ${this.repository.name}`
    },
    discription () {
      return this.repository.discription
    },
  },
  methods: {
    handleClick (repository) {
      return this.$emit('handleClick', repository)
    }
  }
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
  cursor: pointer;
}
.title {
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 10px;
}
.discription {
  font-size: 12px;
  line-height: 1.5;
}
.discription {
  overflow: hidden;
  height: 36px;
}
.discription span{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>


