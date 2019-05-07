<template>
  <div>
    <div id='demo' :class="[{'collapsed' : collapsed}]">
        <div>
          <div class="container">
            <Header></Header>
            <router-view></router-view>
          </div>
          <sidebar-menu
            :menu="menu"
            :collapsed="collapsed"
            :theme="selectedTheme"
            :show-one-child="true"
            @collapse="onCollapse"
            @itemClick="onItemClick"
          />
        </div>
    </div>
    <div class="footer">
      <font class="header-font">
        copyrightⓒ 2019 <a href="http://myriadip.com/" rel="nofollow noopener noreferrer" target="_blank">MYRIAD INTELLECTUAL PROPERTY</a>. all rights reserved.
      </font>
    </div>
  </div>
</template>

<script>
import Header from '../Header/Header';

const separator = {
    template: '<hr style="border-color: rgba(0, 0, 0, 0.1); margin: 20px;">',
};

export default {
    name: 'Layout',
    components: {
        Header,
    },
    data() {
        return {
            menu: [
                {
                    header: true,
                    title: 'Case Intelligence System',
                },
                {
                    header: true,
                    component: separator,
                    visibleOnCollapse: true,
                },
                {
                    href: '/dashboard',
                    title: 'Dashboard',
                    icon: 'fa fa-download',
                    disabled: false,
                },
                {
                    href: '/online',
                    title: 'Online',
                    icon: 'fa fa-code',
                    disabled: true,
                },
                {
                    href: '/customs',
                    title: 'Customs',
                    icon: 'fa fa-list-ul',
                    child: [
                        {
                            href: '/customs/recordal',
                            title: 'Recordal Status',
                            icon: 'fa fa-file-alt',
                        },
                        {
                            href: '/customs/training',
                            title: 'Training',
                            icon: 'fa fa-file-alt',
                        },
                        {
                            href: '/customs/case',
                            title: 'Case',
                            icon: 'fa fa-file-alt',
                        },
                        {
                            href: '/customs/intelligence',
                            title: 'Intelligence',
                            icon: 'fa fa-file-alt',
                        },
                    ],
                },
                {
                    href: '/market',
                    title: 'Market',
                    icon: 'fa fa-code',
                    disabled: true,
                },
                {
                    href: '/legal',
                    title: 'Legal',
                    icon: 'fa fa-code',
                    disabled: true,
                },
                {
                    href: '/intelligence',
                    title: 'Intelligence',
                    icon: 'fa fa-code',
                    disabled: true,
                },
            ],
            collapsed: false,
            themes: ['', 'white-theme'],
            selectedTheme: '',
        };
    },
    methods: {
        onCollapse(collapsed) {
            console.log(collapsed);
            this.collapsed = collapsed;
        },
        onItemClick(event, item) {
            console.log('onItemClick -> event: %s, item: %s', event, item);
            // console.log(event)
            // console.log(item)
        },
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');
body,
html {
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Source Sans Pro', sans-serif;
  background-color: #f2f4f7;
}
#demo {
  padding-left: 350px;
}
#demo.collapsed {
  padding-left: 50px;
}
.badge-danger {
  background-color: #ff2a2a;
  color: #fff;
}
.container {
  max-width: 100%;
}
pre {
  color: #2a2a2e;
  background: #fff;
  border-radius: 2px;
  padding: 10px;
  overflow: auto;
}

.footer {
    position:absolute;
    bottom:0;
    width:100%;
    height:70px;
    background:#343a40;
    text-align: center;
    clear: left;
}

.header-font {
    font-style:italic;
    font-weight:bold;
    font-family:arial;
    font-size:1.0em;
    color:white;
}

</style>
