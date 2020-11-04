export default {
  root: {
    border: 0,
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.05)",
    padding: 0,
    "&$focused": {
      border: 0,
    },
    "&$focused $notchedOutline": {
      borderWidth: 1,
    },
  },

  multiline: {
    height: 90,
  },

  notchedOutline: {
    borderColor: "#d9e2e8!important",
  },

  inputMultiline: {
    padding: 0,
    paddingTop: 40,

  },
};
