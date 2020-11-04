const initialState = {
  accounts: {
    fab: {
      4544444444444: {
        accountNumber: "4544444444444",
        bankName: "",
        checked: true,
        country: "AED",
        iban: "",
        name: "Farrukh Rashid",
        swift: "",
      },

      4644444444444: {
        accountNumber: "4544444444444",
        bankName: "",
        checked: true,
        country: "AED",
        iban: "",
        name: "Farrukh Rashid",
        swift: "",
      },
    },
  },

  modules: [
    "payments",
    "payrollServices",
    "remoteChequeDeposit",
    "remoteChequePrinting",
    "hostToHost",
    "directDebit",
    "collectionsModule",
    "liquidity",
    "reportDesigner",
    "swiftMT101FundTransfer",
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
