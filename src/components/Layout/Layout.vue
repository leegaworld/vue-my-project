<template>
    <div>
        <Sidebar></Sidebar>
        <router-view></router-view>
    </div>
</template>

<script>
import Sidebar from '../Sidebar/Sidebar';

export default {
  name: 'Layout',
  components: {
    Sidebar,
  },
};
</script>
