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
    // 表单
    Table,
    TableColumn,
    Pagination,
    Form,
    FormItem,
    Input,
    Select,
    Option,
    MessageBox,
    Message,
    Popover,
    Dialog,
    //加载
    Loading


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
    Vue.use(Form);
    Vue.use(FormItem);
    Vue.use(Input);
    Vue.use(Select);
    Vue.use(Option);
    Vue.component(MessageBox);
    Vue.component(MessageBox.confirm);
    // Vue.component(MessageBox.confirm, MessageBox)
    Vue.component(Message.name, Message);
    Vue.use(Popover);
    Vue.use(Dialog);
    Vue.use(Loading);
}