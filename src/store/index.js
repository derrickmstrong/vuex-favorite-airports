import { createStore } from "vuex";
import UserModule from './user.module'
import AirportsModule from "./airports.module";

export default createStore({
  modules: {
    user: UserModule,
    airports: AirportsModule,
  }
});