// import { getUser,createUser } from "./userUtils/user-actions.js"; using named import

import * as actions from "../userUtils/user-actions";

    const user1=actions.createUser('Ankur Verma',28,'Male');
    console.log(user1);
    console.log(actions.getUser())

