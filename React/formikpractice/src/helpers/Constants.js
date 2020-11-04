/* eslint-disable max-lines */
import strings from "../localisation";

export function numberWithCommas(x) {
  const parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}
export function convertDate(inputFormat) {
  function pad(s) {
    return s < 10 ? `0${s}` : s;
  }
  const d = new Date(inputFormat);
  return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join("/");
}

export function isObjectEmpty(obj) {
  let empty = true;
  if (JSON.stringify(obj) === JSON.stringify({})) {
    return empty;
  }
  Object.keys(obj).forEach(childObj => {
    if (JSON.stringify(obj[childObj]) !== JSON.stringify({})) {
      empty = false;
    }
  });

  return empty;
}

const Constants = {
  null: "",
  primary: "primary",
  secondary: "secondary",
  fab: "fab",
  nonFab: "nonFab",
  cardNumber: "cardNumber",
  ibanAccountNumber: "ibanAccountNumber",
  number: "number",
  alpha: "alpha",
  selectAll: "select-all",

  // token type drop down
  softToken: "softToken",
  hardToken: "hardToken",
  tokenType: "tokenType",

  // product drop down
  payrollNonWPS: "payrollNonWPS",
  payrollWPS: "payrollWPS",
  trade: "trade",

  // module access items
  accountServices: "accountServices",
  payments: "payments",
  payrollServices: "payrollServices",
  wps: "wps",
  salaryPayments: "salaryPayments",
  ratibiServices: "ratibiServices",
  gpssPayment: "gpssPayment",
  tradeFacility: "tradeFacility",
  importLettersOfCredit: "importLettersOfCredit",
  inwardAndOutwardGuarantees: "inwardAndOutwardGuarantees",
  exportLettersOfCredit: "exportLettersOfCredit",
  exportCollections: "exportCollections",
  financingRequest: "financingRequest",
  otherServices: "otherServices",
  remoteChequeDeposit: "remoteChequeDeposit",
  remoteChequePrinting: "remoteChequePrinting",
  collectionsModule: "collectionsModule",
  liquidity: "liquidity",
  reportDesigner: "reportDesigner",
  swiftMT101FundTransfer: "swiftMT101FundTransfer",
  importCollections: "importCollections",
  sequentialApproval: "sequentialApproval",
  parallelApproval: "parallelApproval",
  specialInstructions: "specialInstructions",
  // module Dropdown
  payroll: "payroll",
  ratibi: "ratibi",
  rcd: "rcd",
  rcp: "rcp",
  hostToHost: "hostToHost",
  gpssa: "gpssa",
  directDebit: "directDebit",
  mt101: "mt101",
  mt940: "mt940",

  // currency constants
  AED: "AED",
  USD: "USD",
  AUD: "AUD",
  BDT: "DBT",
  BHD: "BHD",
  CAD: "CAD",
  CHF: "CHF",
  DKK: "DKK",
  EGP: "EGP",
  EUR: "EUR",
  GBP: "GBP",
  HKD: "HKD",
  IDR: "IDR",
  INR: "INR",
  JOD: "JOD",
  JPY: "JPY",
  KWD: "KWD",
  LBP: "LBP",
  LKR: "LKR",
  MAD: "MAD",
  MYR: "MYR",
  NOK: "NOK",
  NZD: "NZD",
  OMR: "OMR",
  PHP: "PHP",
  PKR: "PKR",
  QAR: "QAR",
  SAR: "SAR",
  SDG: "SDG",
  SEK: "SEK",
  SGD: "SGD",
  SYP: "SYP",
  THB: "THB",
  YER: "YER",
  ZAR: "ZAR",
  courierToBeArrangedFab: "Courier to be arranged by FAB",
  courierToBeArrangedCustomer: "Courier to be arranged by the Customer",
  corporateDetails: "corporateDetails",
  accountSummary: "accountSummary",
  moduleAccess: "moduleAccess",
  accountsCardsAccess: "accountsCardsAccess",
  userSummary: "userSummary",
  transactionAuthorizationRules: "transactionAuthorizationRules",
  moduleSettings: "moduleSettings",
  authorisation: "authorisation"
};

export const productsList = [
  { label: "Account Services", value: "ACCOUNT_SERVICES" },
  { label: "Payments", value: "PAYMENTS" },
  { label: "Payroll (Non WPS)", value: "PAYROLL_NON_WPS" },
  { label: "Payroll (WPS)", value: "PAYROLL_WPS" },
  { label: "RCP", value: "RCP" },
  { label: "Trade", value: "Trade" }
];

export const rolesList = [
  { label: "Maker", value: "MAKER", class: "maker-menu-item" },
  { label: "Approver", value: "APPROVER", class: "approver-menu-item" },
  {
    label: "Self Authorizer",
    value: "SELF_AUTHORIZER",
    class: "self-auth-menu-item"
  },
  { label: "Releaser", value: "RELEASER", class: "releaser-menu-item" },
  {
    label: "Inquiry Only",
    value: "INQUIRY_ONLY",
    class: "inquiry-only-menu-item"
  },
  { label: "Verifier", value: "VERIFIER", class: "verifier-menu-item" }
];

export const enableLimitFieldList = ["MAKER", "APPROVER", "SELF_AUTHORIZER"];
export const summaryPanelsList = [
  Constants.corporateDetails,
  Constants.accountSummary,
  Constants.moduleAccess,
  Constants.accountsCardsAccess,
  Constants.userSummary,
  Constants.transactionAuthorizationRules,
  Constants.moduleSettings,
  Constants.specialInstructions,
  Constants.authorisation
];

export const stepsList = [
  { title: strings.registration, value: 0 },
  {
    title: strings.corporateDetails,
    value: 1
  },
  { title: strings.accountSummary, value: 2 },
  { title: strings.moduleAccess, value: 3 },
  { title: strings.AccountsCardsAccess, value: 4 },
  { title: strings.userSummary, value: 5 },
  {
    title: strings.authorisationRules,
    value: 6
  },
  { title: strings.moduleSettings, value: 7 },
  { title: strings.specialInstructions, value: 8 },
  { title: strings.authorisation, value: 9 },
  { title: strings.summary, value: 10 }
];

export const errorCodes = {
  tokenInvalid: "invalid_token"
};

export const corporateDetailsTabs = [
  { label: strings.newCustomer, value: 0 },
  { label: strings.existingCustomer, value: 1 }
];

export const accountSumaryTabs = [
  { label: strings.fabAccount, value: Constants.fab },
  { label: strings.nonFabAccount, value: Constants.nonFab }
];

export const moduleSettingsTabs = [
  Constants.wps,
  Constants.salaryPayments,
  Constants.gpssPayment,
  Constants.ratibiServices,
  Constants.remoteChequeDeposit,
  Constants.hostToHost,
  Constants.directDebit,
  Constants.swiftMT101FundTransfer
];
export const handleModuleSettingsTabs = modulesList => {
  const tabsArray = [];

  modulesList.forEach(mod => {
    if (moduleSettingsTabs.includes(mod)) {
      let item;
      switch (mod) {
        case Constants.wps:
          item = { label: strings.wps, value: Constants[mod] };
          break;
        case Constants.salaryPayments:
          item = { label: strings.payrollNonWPS, value: Constants[mod] };
          break;
        case Constants.gpssPayment:
          item = { label: strings.gpssPayment, value: Constants[mod] };
          break;
        case Constants.ratibiServices:
          item = { label: strings.ratibiServices, value: Constants[mod] };
          break;
        case Constants.remoteChequeDeposit:
          item = { label: strings.rcd, value: Constants[mod] };
          break;
        case Constants.hostToHost:
          item = { label: strings.hostToHost, value: Constants[mod] };
          break;
        case Constants.directDebit:
          item = { label: strings.directDebit, value: Constants[mod] };
          break;
        case Constants.swiftMT101FundTransfer:
          item = {
            label: strings.swift101Title,
            value: Constants[mod]
          };
          break;
        default:
          item = {};
      }
      tabsArray.push(item);
    }
  });
  return tabsArray;
};

export const accountTypeList = [
  { label: strings.ibanAccountNumber, value: Constants.ibanAccountNumber },
  { label: strings.cardNumber, value: Constants.cardNumber }
];
export const currencyList = [
  { label: strings.AED, value: Constants.AED },
  { label: strings.USD, value: Constants.USD },
  { label: strings.AUD, value: Constants.AUD },
  { label: strings.BDT, value: Constants.BDT },
  { label: strings.BHD, value: Constants.BHD },
  { label: strings.CAD, value: Constants.CAD },
  { label: strings.CHF, value: Constants.CHF },
  { label: strings.DKK, value: Constants.DKK },
  { label: strings.EGP, value: Constants.EGP },
  { label: strings.EUR, value: Constants.EUR },
  { label: strings.GBP, value: Constants.GBP },
  { label: strings.HKD, value: Constants.HKD },
  { label: strings.IDR, value: Constants.IDR },
  { label: strings.INR, value: Constants.INR },
  { label: strings.JOD, value: Constants.JOD },
  { label: strings.JPY, value: Constants.JPY },
  { label: strings.KWD, value: Constants.KWD },
  { label: strings.LBP, value: Constants.LBP },
  { label: strings.LKR, value: Constants.LKR },
  { label: strings.MAD, value: Constants.MAD },
  { label: strings.MYR, value: Constants.MYR },
  { label: strings.NOK, value: Constants.NOK },
  { label: strings.NZD, value: Constants.NZD },
  { label: strings.OMR, value: Constants.OMR },
  { label: strings.PHP, value: Constants.PHP },
  { label: strings.PKR, value: Constants.PKR },
  { label: strings.QAR, value: Constants.QAR },
  { label: strings.SAR, value: Constants.SAR },
  { label: strings.SDG, value: Constants.SDG },
  { label: strings.SEK, value: Constants.SEK },
  { label: strings.SGD, value: Constants.SGD },
  { label: strings.SYP, value: Constants.SYP },
  { label: strings.THB, value: Constants.THB },
  { label: strings.YER, value: Constants.YER },
  { label: strings.ZAR, value: Constants.ZAR }
];

export const servicesList = {
  payments: [],
  payrollServices: [
    {
      label: strings.remoteChequeDeposit,
      value: Constants.remoteChequeDeposit
    },
    {
      label: strings.remoteChequePrinting,
      value: Constants.remoteChequePrinting
    },
    { label: strings.hostToHost, value: Constants.hostToHost },
    { label: strings.directDebit, value: Constants.directDebit },
    { label: strings.collectionsModule, value: Constants.collectionsModule },
    { label: strings.liquidity, value: Constants.liquidity },
    { label: strings.reportDesigner, value: Constants.reportDesigner },
    {
      label: strings.swiftMT101FundTransfer,
      value: Constants.swiftMT101FundTransfer
    }
  ],
  tradeFacility: [
    {
      label: strings.importLettersOfCredit,
      value: Constants.importLettersOfCredit
    },
    { label: strings.importCollections, value: Constants.importCollections },
    {
      label: strings.inwardAndOutwardGuarantees,
      value: Constants.inwardAndOutwardGuarantees
    },
    {
      label: strings.exportLettersOfCredit,
      value: Constants.exportLettersOfCredit
    },
    { label: strings.exportCollections, value: Constants.exportCollections },
    { label: strings.financingRequest, value: Constants.financingRequest }
  ],
  otherServices: [
    { label: strings.wps, value: Constants.wps },
    { label: strings.salaryPayments, value: Constants.salaryPayments },
    { label: strings.ratibiServices, value: Constants.ratibiServices },
    { label: strings.gpssPayment, value: Constants.gpssPayment }
  ]
};
export const handleGroupSorting = (
  accountsObject,
  accountGroups,
  setAccountGroups
) => {
  // Get Accounts
  Object.keys(accountsObject).forEach(key => {
    const currentArray = accountsObject[key].sort();
    if (accountGroups.length === 0) {
      setAccountGroups([currentArray]);
    } else {
      let tempObject = [];
      // Get all moduels from account
      Object.keys(accountsObject).forEach(acc => {
        // eslint-disable-next-line operator-linebreak
        accountsObject[acc].length !== 0 &&
          tempObject.push(accountsObject[acc].sort());
      });
      // Remove Duplicate Modueles
      const set = new Set(tempObject.map(JSON.stringify));
      tempObject = Array.from(set).map(JSON.parse);
      setAccountGroups(tempObject);
    }
  });
};
export const convertArrayToObject = (array, value) => {
  const initialValue = {};
  return array.reduce(
    (obj, item) => ({
      ...obj,
      [item]: value
    }),
    initialValue
  );
};

export const handleUndefined = value => {
  if (value === undefined) {
    return false;
  }
  return value;
};

export const handleModuelsList = modules => {
  const modList = [];
  modList.push({ label: strings.mt940, value: Constants.mt940 });
  modules.forEach(item => {
    switch (item) {
      case Constants.wps:
        modList.push({ label: strings.payroll, value: Constants.payroll });
        break;
      case Constants.salaryPayments:
        modList.push({ label: strings.payroll, value: Constants.payroll });
        break;
      case Constants.payrollNonWPS:
        modList.push({ label: strings.payroll, value: Constants.payroll });
        break;
      case Constants.ratibiServices:
        modList.push({ label: strings.ratibi, value: Constants.ratibi });
        break;
      case Constants.gpssPayment:
        modList.push({ label: strings.gpssa, value: Constants.gpssa });
        modList.push({ label: strings.payroll, value: Constants.payroll });
        break;
      case Constants.remoteChequeDeposit:
        modList.push({ label: strings.rcd, value: Constants.rcd });
        break;
      case Constants.remoteChequePrinting:
        modList.push({ label: strings.rcp, value: Constants.rcp });
        break;
      case Constants.hostToHost:
        modList.push({
          label: strings.hostToHost,
          value: Constants.hostToHost
        });
        break;
      case Constants.directDebit:
        modList.push({
          label: strings.directDebit,
          value: Constants.directDebit
        });
        break;
      case Constants.swiftMT101FundTransfer:
        modList.push({ label: strings.mt101, value: Constants.mt101 });
        break;
      default:
        break;
    }
  });
  const uniqueModules = modList.filter(
    (mod => ({ value }) => !mod.has(value) && mod.add(value))(new Set())
  );
  return uniqueModules;
};
export const chequeDeliveryOptions = [
  {
    label: strings.courierToBeArrangedFab,
    value: Constants.courierToBeArrangedFab
  },
  {
    label: strings.courierToBeArrangedCustomer,
    value: Constants.courierToBeArrangedCustomer
  }
];
export const endDayFileOptions = [
  {
    label: strings.no,
    value: 0
  },
  {
    label: strings.yes,
    value: 1
  }
];
export const authRuleApprovalType = [
  { label: strings.sequentialApproval, value: Constants.sequentialApproval },
  { label: strings.parallelApproval, value: Constants.parallelApproval }
];

export const compareArray = (arr1, arr2) =>
  arr1.length === arr2.length &&
  arr1.sort().every((value, index) => value === arr2.sort()[index]);

export default Constants;
