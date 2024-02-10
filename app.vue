<template>
  <div>
    <Header />
    <div class="content">
      <Left class="left" />
      <Right class="right" />
    </div>
  </div>
</template>

<style>
html body {
  margin: 0 auto;
  background-color: rgba(37, 41, 53);
  color: rgba(200, 198, 191);
}
.content {
  display: flex;
  justify-content: flex-start;
}
.left {
  padding: 0.5rem;
  margin-top: 0.5rem;
  margin-left: 1vw;
  margin-right: 0.5vw;
  outline: solid;
  outline-color: rgba(122, 202, 225);
  width: 49vw;
  height: calc(100vh - 5rem);
}
.right {
  padding: 0.5rem;
  margin-top: 0.5rem;
  margin-left: 0.5vw;
  margin-right: 1vw;
  outline: solid;
  outline-color: rgba(142, 198, 111);
  width: 49vw;
  height: calc(100vh - 5rem);
}
</style>
