<template>
  <div class="repository-card" @click="handleClick(repository)">
    <div v-if="isActive" class="active"></div>
    <div class="title">
      {{title}}
    </div>
    <div class="description">
      <span>
        {{description}}
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
      return `/repos?q=${this.repository.author}@${this.repository.name}`
    },
    title () {
      return `${this.repository.author} / ${this.repository.name}`
    },
    description () {
      return this.repository.description
    },
    isActive () {
      const key = `${this.repository.author}@${this.repository.name}`
      const value = window.localStorage.getItem(key)
      return !Boolean(value)
    }
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
  position: relative;
}
.active {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background: #e4e4e4;
}
.title {
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 10px;
}
.description {
  font-size: 12px;
  line-height: 1.5;
}
.description {
  overflow: hidden;
  height: 36px;
}
.description span{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>


