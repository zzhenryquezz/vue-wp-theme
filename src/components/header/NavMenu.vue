<template>
  <nav class="vue-theme-navmenu mt-3 text-center">
    <ul class="mb-0 row">
    <li class="col-3 col-md-2" v-for="item in menuItens" v-bind:key="item.id">
      <a v-bind:href="item.url">{{ item.title }}</a>
      <ul class="m-0 p-0" v-if="item.has_children" >
          <li v-for="dropdown in item.dropdown_item">
            <a v-bind:href="dropdown.url"> {{ dropdown.title }}</a>
          </li>
      </ul>
    </li>
    </ul>
  </nav>
</template>

<script>

export default {
  data() {
    return {
      menuItens: [],
      subMenuItens: [],
    };
  },
  created(){
    let menuItens = this.$get_menu_itens();
    this.menuItens = menuItens;
  }
};
</script>

<style scoped>
  .vue-theme-navmenu li{
    list-style: none;
  }
  .vue-theme-navmenu li a{
    text-decoration: none;
    padding: 5px;
    border: 1px solid;
    border-radius: 15px;
    margin: 10px;
    padding: 5px;
    display: block;
    color: #fff;
    font-weight: bold;
    transition: all 320ms;
  }
  .vue-theme-navmenu li a:hover{
    background-color: #fff;
    color: #4fc08d;
  }
</style>
