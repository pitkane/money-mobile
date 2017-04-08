// import axios from "axios";

// export const fetchTransactions = async () => {
//   axios
//     .get(`http://localhost:5001/api/transactions`)
//     .then(res => {
//       console.log(res);
//       return res.data;
//     })
//     .catch(err => console.log(err));
// };

import axios from "axios";
import { Platform } from "react-native";

let url;

// Cause of genymotion we need to change the url here
// http://stackoverflow.com/questions/5528850/how-to-connect-localhost-in-android-emulator
if (Platform.OS !== "ios") {
  url = "http://10.0.3.2:5001/api";
} else {
  url = "http://localhost:5001/api";
}

axios.defaults.baseURL = url;

const fakeGroupId = "58ad10b7dbeef9575d00b376";

class MoneyApi {
  constructor() {
    this.groupId = fakeGroupId;
    this.path = `/groups/${this.groupId}/meetups`;
  }

  async fetchTransactions() {
    try {
      console.log("Yep");
      const { data } = await axios.get("/transactions");
      return data.transactions;
    } catch (err) {
      console.log(err);
    }
  }

  // async createGroupMeetups(args) {
  //   try {
  //     const res = await axios.post(`${this.path}/new`, { ...args });
  //     console.log(res);
  //     return res;
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
}

export { MoneyApi };
