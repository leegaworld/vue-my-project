<template>
  <div class="filtered-table-display">
    <div class="filters">
      <input type="text" v-model="filter.param1"/>
      <input type="text" v-model="filter.param2"/>
      <input type="text" v-model="filter.param3"/>
    </div>
    <table border="1" cellspacing="0" cellpadding="0">
      <thead>
        <tr>
          <th>param1</th>
          <th>param2</th>
          <th>param3</th>
        </tr>
      </thead>
      <tr v-for="row in filteredData" :key="row.param1">
        <td>{{ row.param1 }}</td>
        <td>{{ row.param2 }}</td>
        <td>{{ row.param3 }}</td>
      </tr>
    </table>
    <button v-on:click='show'>Alert Modal</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filter: {
        param1: 'a',
        param2: 'b',
        param3: 'c',
      },
      rawData: [
        {
          param1: 'c',
          param2: 'd',
          param3: 'e',
        },
        {
          param1: 'c',
          param2: 'a',
          param3: 'd',
        },
        {
          param1: 'e',
          param2: 'a',
          param3: 'c',
        },
      ],
    };
  },
  methods: {
    show() {
      AlertModal.show ('알림', 'Hello, Vue.js!');
    }
  },
  computed: {
    filteredData() {
      return this.$filter(this.rawData, this.filter);
    },
  },
};
</script>
