// authentication
export const login = "/agent/login";
export const register = "register";
export const forgotPassword = "forgot-password";
export const verifyToken = "verify-token";
export const updatePassword = "update-password";
export const LogoutAPI = "/agent/logout";

// self data (get)
export const selfData = "/agent/profile";
export const updateProfile = "/updateProfile";
export const updateProfilePassword = "/agent/profile/change/password";

//dashboard data (get)
export const AgentdashboardAPI = "/agent/dashboard";

//roles api
export const role = "role";

//rules and regulations
export const agentRulesAPI = "/agent/rules";

//users api
export const user = "user";
export const UserImportAPI = "user/csv/import";
export const UserExportAPI = "user/csv/export";

// attributes api
export const attribute = "attribute";
export const AttributeImportAPI = "attribute/csv/import";
export const AttributeExportAPI = "attribute/csv/export";

// themes api
export const theme = "/theme";

// setting api
export const setting = "/backend/settings";
export const updateSetting = "/settings";

// setting api
export const checkout = "/checkout";

// Notifications
export const NotificationsAPI = "/notifications";
export const MarkAsRead = NotificationsAPI + "/markAsRead";

// Theme Option
export const ThemeOptions = "/themeOptions";

// Pages
export const PagesAPI = "/page";

// Orders
export const OrderAPI = "/order";
export const OrderStatusAPI = "/orderStatus";

// Home Pages
export const HomePageAPI = "/home";

// Dashboard API
export const StatisticsCountAPI = "/statistics/count";
export const DashboardChartAPI = "/dashboard/chart";

//All Bet Slips
export const AllBetSlipsAPI = "/products";

//Agent Management
export const AgentListAPI = "/agent/list";
export const AgentCreateAPI = "/agent/create";
export const AgentBalanceAPI = "/agent/deposit/withdraw";
export const AgentBlockAPI = "/agent/block";
export const AgentDetailAPI = "/agent/details";
export const AgentGeneralAPI = "/agent/update/general";
export const AgentCommissionAPI = "/agent/update/commission";
export const AgentPasswordAPI = "/agent/change/password";
export const AgentTransactionHistoryAPI = "/agent/deposit/withdraw/history";
export const AgentEachBetSlipAPI = "/agent/byagent/betslips";
export const AgentReportAPI = "/agent/byagent/report";
export const AgentCommissionHistoryAPI = "/agent/commission/list";

//User Management
export const userListAPI = "/agent/user/list";
export const userCreateAPI = "/agent/user/create";
export const userBalanceAPI = "/agent/user/deposit/withdraw";
export const userBlockAPI = "/agent/user/block";
export const userDetailAPI = "/agent/user/details";
export const userGeneralAPI = "/agent/user/update/general";
export const userCommissionAPI = "/agent/user/update/commission";
export const userPasswordAPI = "/agent/user/change/password";
export const userTransactionHistoryAPI = "/agent/user/deposit/withdraw/history";
export const userEachBetSlipAPI = "/agent/user/betslip";
export const userReportAPI = "/agent/user/report";

//Report
export const ReportAPI = "/report";

//Bets Single
export const singleBetAllAPI = "/agent/user/all/betslips/single?type=all";
export const singleBetPendingAPI =
  "/agent/user/all/betslips/single?type=pending";
export const singleBetWonAPI = "/agent/user/all/betslips/single?type=win";
export const singleBetLostAPI = "/agent/user/all/betslips/single?type=loss";
export const singleBetRefundedAPI =
  "/agent/user/all/betslips/single?type=refund";

//Bets Multi
export const multipleBetAllAPI = "/agent/user/all/betslips/multiple?type=all";
export const multipleBetPendingAPI =
  "/agent/user/all/betslips/multiple?type=pending";
export const multipleBetWonAPI = "/agent/user/all/betslips/multiple?type=win";
export const multipleBetLostAPI = "/agent/user/all/betslips/multiple?type=loss";
export const multipleBetRefundedAPI =
  "/agent/user/all/betslips/multiple?type=refund";

//self
export const selfTransactionAPI = "/agent/user/self/deposit/withdraw/history";
export const selfCommissionAPI = "/agent/user/self/commission/history";

//USER LIST
export const agentEachAgentList = "/agent/byagent/agentList";
export const agentEachUserList = "/agent/byagent/userList";

//REPORT
export const agentDailyReport = "/agent/daily";
export const agentReportUsernameApi = "/agent/report/agent";
export const agentReportMain = "/agent/main/agent/report";
export const agentUserByOneSlips = "/agent/user/report/byOneSlip";

//REPORT USER
export const userDailyReport = "/agent/user/self/daily";
export const userReportMain = "/agent/user/self/report";

//Transaction
export const agentMainTransaction = "/agent/main/transaction";
export const userMainTransaction = "/user/main/transaction";
