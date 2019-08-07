import Vue from "vue";
import {
    //   注册的组件名字
    Button,
    //布局
    Container,
    Header,
    Aside,
    Main,
    Row,
    //侧栏导航
    MenuItem,
    Col,
    Menu,
    Submenu,
    MenuItemGroup,
    Table,
    TableColumn,
    Pagination



} from "element-ui";





export default () => {
    // 使用
    Vue.use(Button);
    Vue.use(Container);
    Vue.use(Header);
    Vue.use(Aside);
    Vue.use(Main)
    Vue.use(Row)
    Vue.use(MenuItem)

    Vue.use(Col);
    Vue.use(Menu);
    Vue.use(Submenu);
    Vue.use(MenuItemGroup);
    Vue.use(Table);
    Vue.use(TableColumn);

    Vue.use(Pagination)
}