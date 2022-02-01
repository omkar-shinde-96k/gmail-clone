const DataReducer = (state = emails, action) => {
  switch (action.type) {
    case "STARTOGGLEACTION": {
      state = state.map((curr) => {
        if (curr.id === action.payload) curr.star = !curr.star;
        return curr;
      });
      return state;
    }

    case "READMAILACTION": {
      state = state.map((curr) => {
        if (curr.id === action.payload) curr.read = true;
        return curr;
      });
      return state;
    }

    default:
      return state;
  }
};

export default DataReducer;

const emails = [
  {
    id: 1,
    from: {
      name: "Omkar Shinde",
      email: "omkar.shinde@humancloud.biz",
      snooze: [],
    },
    to: {
      name: "xyz user",
      email: "xyz@gmail.com",
    },
    title: " Amazon Pay Reward Unlocked - Get Get 30% back on Uber .",
    discription:
      "Amazon Pay Reward Unlocked - Get Get 30% back on Uber - for your recent Add MoneyAmazon Pay Reward Unlocked - Get Get 30% back on Uber - for your recent Add Money",
    date: "2 Feb",
    star: true,
    important: false,
    category: "primary",
    checked: false,
    Archive: false,
    read: false,
    trash: false,
    date: "2 Feb",
  },

  {
    id: 2,
    from: {
      name: "PhonePe",
      email: "omkar.shinde@humancloud.biz",
      snooze: [],
    },
    to: {
      name: "xyz user",
      email: "xyz@gmail.com",
      snooze: false,
    },
    title: "Sent ₹ XYZ to Dnyaneshwar eknath mungase ",
    discription:
      "Hi OMKAR SHINDE If you have not made this transaction or notice any error please contact us at",
    star: false,
    important: false,
    category: "primary",
    checked: false,
    Archive: false,
    read: false,
    trash: false,
    date: "22 Dec",
  },

  {
    id: 3,
    from: {
      name: "vercel[bot]",
      email: "omkar.shinde@humancloud.biz",
      snooze: [],
    },
    to: {
      name: "xyz user",
      email: "xyz@gmail.com",
      snooze: false,
    },
    title: "Re: [omkar-shinde-96k/gmail-clone] mail filters UI added (c5a329e)",
    discription:
      "Successfully deployed to the following URLs: Successfully deployed to the following URLs:",
    star: false,
    important: false,
    category: "primary",
    checked: false,
    Archive: false,
    read: false,
    trash: false,
    date: "2 Feb",
  },

  {
    id: 4,
    from: {
      name: "Groww",
      email: "omkar.shinde@humancloud.biz",
      snooze: [],
    },
    to: {
      name: "xyz user",
      email: "xyz@gmail.com",
      snooze: false,
    },
    title: "Masterclass invite: All about debt funds | 30 Jan",
    discription:
      "No, not the Bond films. We are talking about dynamic bond funds that come under debt funds. No, not the Bond films. We are talking about dynamic bond funds that come under debt funds.  No, not the Bond films. We are talking about dynamic bond funds that come under debt funds.",
    star: false,
    important: false,
    category: "primary",
    checked: false,
    Archive: false,
    read: false,
    trash: false,
    date: "2 Feb",
  },
  {
    id: 5,
    from: {
      name: "WazirX",
      email: "omkar.shinde@humancloud.biz",
      snooze: [],
    },
    to: {
      name: "xyz user",
      email: "xyz@gmail.com",
      snooze: false,
    },
    title: "GLMR/USDT trading is live on WazirX",
    discription:
      "Moonbeam is an Ethereum-compatible smart contract parachain on Polkadot. Moonbeam is much more than just an EVM implementation: it’s a highly specialized parachain that mirrors Ethereum’s Web3 RPC, accounts, keys, subscriptions, logs, and more.",
    star: false,
    important: false,
    category: "primary",
    checked: false,
    Archive: false,
    read: false,
    trash: false,
    date: "2 Feb",
  },

  {
    id: 6,
    from: {
      name: "PhonePe",
      email: "omkar.shinde@humancloud.biz",
      snooze: [],
    },
    to: {
      name: "xyz user",
      email: "xyz@gmail.com",
      snooze: false,
    },
    title: "Sent ₹ XYZ to Dnyaneshwar eknath mungase ",
    discription:
      "Hi OMKAR SHINDE If you have not made this transaction or notice any error please contact us at",
    star: false,
    important: false,
    category: "primary",
    checked: false,
    Archive: false,
    read: false,
    trash: false,
    date: "2 Feb",
  },

  {
    id: 7,
    from: {
      name: "vercel[bot]",
      email: "omkar.shinde@humancloud.biz",
      snooze: [],
    },
    to: {
      name: "xyz user",
      email: "xyz@gmail.com",
      snooze: false,
    },
    title: "Re: [omkar-shinde-96k/gmail-clone] mail filters UI added (c5a329e)",
    discription:
      "Successfully deployed to the following URLs: Successfully deployed to the following URLs:",
    star: false,
    important: false,
    category: "primary",
    checked: false,
    Archive: false,
    read: false,
    trash: false,
    date: "2 Feb",
  },

  {
    id: 8,
    from: {
      name: "Groww",
      email: "omkar.shinde@humancloud.biz",
      snooze: [],
    },
    to: {
      name: "xyz user",
      email: "xyz@gmail.com",
      snooze: false,
    },
    title: "Masterclass invite: All about debt funds | 30 Jan",
    discription:
      "No, not the Bond films. We are talking about dynamic bond funds that come under debt funds. No, not the Bond films. We are talking about dynamic bond funds that come under debt funds.  No, not the Bond films. We are talking about dynamic bond funds that come under debt funds.",
    star: false,
    important: false,
    category: "primary",
    checked: false,
    Archive: false,
    read: false,
    trash: false,
    date: "2 Feb",
  },

  {
    id: 9,
    from: {
      name: "DevFest India",
      email: "omkar.shinde@humancloud.biz",
      snooze: [],
    },
    to: {
      name: "xyz user",
      email: "xyz@gmail.com",
      snooze: false,
    },
    title: " [DevFest India 2021] Share your success story.",
    discription:
      "Hi there,Thank you so much for attending DevFest India 2021 and showing your love and confidence in the event we planned for you!",
    star: false,
    important: false,
    category: "primary",
    checked: false,
    Archive: false,
    read: false,
    trash: false,
    date: "2 Feb",
  },

  {
    id: 10,
    from: {
      name: "WazirX",
      email: "omkar.shinde@humancloud.biz",
      snooze: [],
    },
    to: {
      name: "xyz user",
      email: "xyz@gmail.com",
      snooze: false,
    },
    title: "GLMR/USDT trading is live on WazirX",
    discription:
      "Moonbeam is an Ethereum-compatible smart contract parachain on Polkadot. Moonbeam is much more than just an EVM implementation: it’s a highly specialized parachain that mirrors Ethereum’s Web3 RPC, accounts, keys, subscriptions, logs, and more.",
    star: false,
    important: false,
    category: "primary",
    checked: false,
    Archive: false,
    read: false,
    trash: false,
    date: "2 Feb",
  },

  {
    id: 11,
    from: {
      name: "PhonePe",
      email: "omkar.shinde@humancloud.biz",
      snooze: [],
    },
    to: {
      name: "xyz user",
      email: "xyz@gmail.com",
      snooze: false,
    },
    title: "Sent ₹ XYZ to Dnyaneshwar eknath mungase ",
    discription:
      "Hi OMKAR SHINDE If you have not made this transaction or notice any error please contact us at",
    star: false,
    important: false,
    category: "primary",
    checked: false,
    Archive: false,
    read: false,
    trash: false,
    date: "2 Feb",
  },

  {
    id: 12,
    from: {
      name: "vercel[bot]",
      email: "omkar.shinde@humancloud.biz",
      snooze: [],
    },
    to: {
      name: "xyz user",
      email: "xyz@gmail.com",
      snooze: false,
    },
    title: "Re: [omkar-shinde-96k/gmail-clone] mail filters UI added (c5a329e)",
    discription:
      "Successfully deployed to the following URLs: Successfully deployed to the following URLs:",
    star: false,
    important: false,
    category: "primary",
    checked: false,
    Archive: false,
    read: false,
    trash: false,
    date: "2 Feb",
  },

  {
    id: 13,
    from: {
      name: "Groww",
      email: "omkar.shinde@humancloud.biz",
      snooze: [],
    },
    to: {
      name: "xyz user",
      email: "xyz@gmail.com",
      snooze: false,
    },
    title: "Masterclass invite: All about debt funds | 30 Jan",
    discription:
      "No, not the Bond films. We are talking about dynamic bond funds that come under debt funds. No, not the Bond films. We are talking about dynamic bond funds that come under debt funds.  No, not the Bond films. We are talking about dynamic bond funds that come under debt funds.",
    star: false,
    important: false,
    category: "primary",
    checked: false,
    Archive: false,
    read: false,
    trash: false,
    date: "2 Feb",
  },

  {
    id: 14,
    from: {
      name: "DevFest India",
      email: "omkar.shinde@humancloud.biz",
      snooze: [],
    },
    to: {
      name: "xyz user",
      email: "xyz@gmail.com",
      snooze: false,
    },
    title: " [DevFest India 2021] Share your success story.",
    discription:
      "Hi there,Thank you so much for attending DevFest India 2021 and showing your love and confidence in the event we planned for you!",
    star: false,
    important: false,
    category: "primary",
    checked: false,
    Archive: false,
    read: false,
    trash: false,
    date: "2 Feb",
  },

  {
    id: 15,
    from: {
      name: "Coding Ninjas",
      email: "omkar.shinde@humancloud.biz",
      snooze: [],
    },
    to: {
      name: "xyz user",
      email: "xyz@gmail.com",
      snooze: false,
    },
    title: "Scholarships don't last forever....",
    discription:
      "Hey Om, Is winning Google CodeJam, the Facebook Hacker Cup, and other such competitions the stuff of your dreams? And it comes with an Early Bird offer, too! Get 40% off on the Competitive Programming course for the next 1 week. So, Hurry Up! And register now. ",
    star: false,
    important: false,
    category: "primary",
    checked: false,
    Archive: false,
    read: false,
    trash: false,
    date: "2 Feb",
  },

  {
    id: 11,
    from: {
      name: "omkar shinde",
      email: "omkar.shinde@humancloud.biz",
      snooze: [],
    },
    to: {
      name: "xyz user",
      email: "xyz@gmail.com",
      snooze: false,
    },
    title: " Amazon Pay Reward Unlocked - Get Get 30% back on Uber .",
    discription:
      "Amazon Pay Reward Unlocked - Get Get 30% back on Uber - for your recent Add MoneyAmazon Pay Reward Unlocked - Get Get 30% back on Uber - for your recent Add Money",
    star: false,
    important: false,
    category: "promotions",
    checked: false,
    Archive: false,
    read: false,
    trash: false,
    date: "2 Feb",
  },

  {
    id: 12,
    from: {
      name: "omkar shinde",
      email: "omkar.shinde@humancloud.biz",
      snooze: [],
    },
    to: {
      name: "xyz user",
      email: "xyz@gmail.com",
      snooze: false,
    },
    title: " Amazon Pay Reward Unlocked - Get Get 30% back on Uber .",
    discription:
      "Amazon Pay Reward Unlocked - Get Get 30% back on Uber - for your recent Add MoneyAmazon Pay Reward Unlocked - Get Get 30% back on Uber - for your recent Add Money",
    star: false,
    important: false,
    category: "promotions",
    checked: false,
    Archive: false,
    read: false,
    trash: false,
    date: "2 Feb",
  },

  {
    id: 13,
    from: {
      name: "omkar shinde",
      email: "omkar.shinde@humancloud.biz",
      snooze: [],
    },
    to: {
      name: "xyz user",
      email: "xyz@gmail.com",
      snooze: false,
    },
    title: " Amazon Pay Reward Unlocked - Get Get 30% back on Uber .",
    discription:
      "Amazon Pay Reward Unlocked - Get Get 30% back on Uber - for your recent Add MoneyAmazon Pay Reward Unlocked - Get Get 30% back on Uber - for your recent Add Money",
    star: false,
    important: false,
    category: "promotions",
    checked: false,
    Archive: false,
    read: false,
    trash: false,
    date: "2 Feb",
  },

  {
    id: 14,
    from: {
      name: "omkar shinde",
      email: "omkar.shinde@humancloud.biz",
      snooze: [],
    },
    to: {
      name: "xyz user",
      email: "xyz@gmail.com",
      snooze: false,
    },
    title: " Amazon Pay Reward Unlocked - Get Get 30% back on Uber .",
    discription:
      "Amazon Pay Reward Unlocked - Get Get 30% back on Uber - for your recent Add MoneyAmazon Pay Reward Unlocked - Get Get 30% back on Uber - for your recent Add Money",
    star: false,
    important: false,
    category: "social",
    checked: false,
    Archive: false,
    read: false,
    trash: false,
    date: "2 Feb",
  },

  {
    id: 15,
    from: {
      name: "omkar shinde",
      email: "omkar.shinde@humancloud.biz",
      snooze: [],
    },
    to: {
      name: "xyz user",
      email: "xyz@gmail.com",
      snooze: false,
    },
    title: " Amazon Pay Reward Unlocked - Get Get 30% back on Uber .",
    discription:
      "Amazon Pay Reward Unlocked - Get Get 30% back on Uber - for your recent Add MoneyAmazon Pay Reward Unlocked - Get Get 30% back on Uber - for your recent Add Money",
    star: false,
    important: false,
    category: "social",
    checked: false,
    Archive: false,
    read: false,
    trash: false,
    date: "2 Feb",
  },

  {
    id: 15,
    from: {
      name: "omkar shinde",
      email: "omkar.shinde@humancloud.biz",
      snooze: [],
    },
    to: {
      name: "xyz user",
      email: "xyz@gmail.com",
      snooze: false,
    },
    title: " Amazon Pay Reward Unlocked - Get Get 30% back on Uber .",
    discription:
      "Amazon Pay Reward Unlocked - Get Get 30% back on Uber - for your recent Add MoneyAmazon Pay Reward Unlocked - Get Get 30% back on Uber - for your recent Add Money",
    star: false,
    important: false,
    category: "social",
    checked: false,
    Archive: false,
    read: false,
    trash: false,
    date: "2 Feb",
  },
  {
    id: 16,
    from: {
      name: "omkar shinde",
      email: "omkar.shinde@humancloud.biz",
      snooze: [],
    },
    to: {
      name: "xyz user",
      email: "xyz@gmail.com",
      snooze: false,
    },
    title: " Amazon Pay Reward Unlocked - Get Get 30% back on Uber .",
    discription:
      "Amazon Pay Reward Unlocked - Get Get 30% back on Uber - for your recent Add MoneyAmazon Pay Reward Unlocked - Get Get 30% back on Uber - for your recent Add Money",
    star: false,
    important: false,
    category: "social",
    checked: false,
    Archive: false,
    read: false,
    trash: false,
    date: "2 Feb",
  },
  {
    id: 17,
    from: {
      name: "omkar shinde",
      email: "omkar.shinde@humancloud.biz",
      snooze: [],
    },
    to: {
      name: "xyz user",
      email: "xyz@gmail.com",
      snooze: false,
    },
    title: " Amazon Pay Reward Unlocked - Get Get 30% back on Uber .",
    discription:
      "Amazon Pay Reward Unlocked - Get Get 30% back on Uber - for your recent Add MoneyAmazon Pay Reward Unlocked - Get Get 30% back on Uber - for your recent Add Money",
    star: false,
    important: false,
    category: "social",
    checked: false,
    Archive: false,
    read: false,
    trash: false,
    date: "2 Feb",
  },
];
