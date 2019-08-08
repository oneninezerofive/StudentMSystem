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
    Pagination,
    // 引入弹框
    MessageBox,
    //引入对话框
    Dialog,
    //引入输入框 表单
    Input,
    Form,
    FormItem,



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

    Vue.use(Pagination);
    Vue.use(Dialog);
    Vue.use(Input);
    Vue.use(Form);
    Vue.use(FormItem);
    Vue.prototype.$msgbox = MessageBox;
    Vue.prototype.$alert = MessageBox.alert;
    Vue.prototype.$confirm = MessageBox.confirm;
    Vue.prototype.$prompt = MessageBox.prompt;
    Vue.prototype.$notify = Notification;
}