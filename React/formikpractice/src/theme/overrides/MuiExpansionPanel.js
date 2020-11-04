export default {
  root: {
    width: "100%",
    minHeight: 40,
    borderRadius: 4,
    boxShadow: "0 0 10px 0  rgba(0, 0, 0, 0.05)",
    border: "solid 1px #d9e2e8",
     marginBottom: 20,
    "&$expanded": {
      marginBottom: 20
    },
    "&:before" : {
       height:0
    }
  },
};
