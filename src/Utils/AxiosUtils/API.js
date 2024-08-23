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

//roles api
export const role = "role";

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
export const AgentTransactionHistoryAPI = "agent/deposit/withdraw/history";

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

//Report
export const ReportAPI = "/report";
