<template>
  <nav class="mt-3 text-left">
    <ul class="mb-0">
    <li class="d-inline-block" v-for="item in menuItens" v-bind:key="item.id">
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
    this.$get_menu_itens('menu').then((response) => {
    this.menuItens = response;
    });
  }
};
</script>
