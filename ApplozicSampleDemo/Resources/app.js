/**
 * Create a new `Ti.UI.TabGroup`.
 */
var tabGroup = Ti.UI.createTabGroup();

/**
 * Add the two created tabs to the tabGroup object.
 */
tabGroup.addTab(createTab("Tab 1", "I am Window 1", "assets/images/tab1.png"));
tabGroup.addTab(createTab("Tab 2", "I am Window 2", "assets/images/tab2.png"));

/**
 * Open the tabGroup
 */
tabGroup.open();

/**
 * Creates a new Tab and configures it.
 *
 * @param  {String} title The title used in the `Ti.UI.Tab` and it's included `Ti.UI.Window`
 * @param  {String} message The title displayed in the `Ti.UI.Label`
 * @return {String} icon The icon used in the `Ti.UI.Tab`
 */
function createTab(title, message, icon) {
	var win = Ti.UI.createWindow({
		title : title,
		backgroundColor : '#fff'
	});

	var label = Ti.UI.createLabel({
		text : message,
		color : "#333",
		font : {
			fontSize : 20
		}
	});

	var loginBtn = Titanium.UI.createButton({
		title : 'Launch Chat',
		top : 100,
		width : 100,
		height : 50
	});

	loginBtn.addEventListener('click', function() {
		console.log('Click event fired ');
		applozicUserLoginAnLaunchChat('tiTest', '123', 'adarsh@applozic.com');
	});

	win.add(label);
	win.add(loginBtn);

	var tab = Ti.UI.createTab({
		title : title,
		icon : icon,
		window : win
	});

	return tab;
}

// added during app creation. this will automatically login to
// ACS for your application and then fire an event (see below)
// when connected or errored. if you do not use ACS in your
// application as a client, you should remove this block
(function() {
	var ACS = require('ti.cloud'),
	    env = Ti.App.deployType.toLowerCase() === 'production' ? 'production' : 'development',
	    username = Ti.App.Properties.getString('acs-username-' + env),
	    password = Ti.App.Properties.getString('acs-password-' + env);

	// if not configured, just return
	if (!env || !username || !password) {
		return;
	}
	/**
	 * Appcelerator Cloud (ACS) Admin User Login Logic
	 *
	 * fires login.success with the user as argument on success
	 * fires login.failed with the result as argument on error
	 */
	ACS.Users.login({
		login : username,
		password : password,
	}, function(result) {
		if (env === 'development') {
			Ti.API.info('ACS Login Results for environment `' + env + '`:');
			Ti.API.info(result);
		}
		if (result && result.success && result.users && result.users.length) {
			Ti.App.fireEvent('login.success', result.users[0], env);
		} else {
			Ti.App.fireEvent('login.failed', result, env);
		}
	});

})();
/*
 * Applozic functions to login and launching chat...
 */
function applozicUserLoginAnLaunchChat(userId, password, emaiId) {

	ApplozicSettings();
	var ALUserDefaultsHandler = require('Applozic/ALUserDefaultsHandler');
	var ALPushAssist = require('Applozic/ALPushAssist');
	var pushAssist = new ALPushAssist();
	var ALChatLauncher = require('Applozic/ALChatLauncher');
	var chatLauncher = new ALChatLauncher().initWithApplicationId("applozic-sample-app");

	if (ALUserDefaultsHandler.isLoggedIn()) {

		console.log('user registration already done directly launching chat');
		chatLauncher.launchChatListAndViewControllerObject('<Back', pushAssist.topViewController);

	} else {

		var ApplozicRegisterClient = require('Applozic/ALRegisterUserClientService');
		var ALUser = require('Applozic/ALUser');
		var ALRegistrationResponse = require('Applozic/ALRegistrationResponse');
		// //
		var applozicClient = new ApplozicRegisterClient();
		var alUser = new ALUser();
		var response = new ALRegistrationResponse();
		// //
		alUser.userId = userId;
		alUser.applicationId = "applozic-sample-app";
		alUser.password = password;

		applozicClient.initWithCompletionWithCompletion(alUser, function(response, abc) {
			console.log("response::" + response.isRegisteredSuccessfully());

			if (response.isRegisteredSuccessfully()) {
				var ALChatLauncher = require('Applozic/ALChatLauncher');
				var chatLauncher = new ALChatLauncher().initWithApplicationId(alUser.applicationId);
				console.log("chatLauncher:::" + chatLauncher);
				chatLauncher.launchChatListAndViewControllerObject('<Back', pushAssist.topViewController);

			}
		});
	}
}

/**
 * AppLogic Settings..
 *
 */
function ApplozicSettings() {

	var ALUserDefaultsHandler = require('Applozic/ALUserDefaultsHandler');
	var ALApplozicSettings = require('Applozic/ALApplozicSettings');

	var UIColor = require('UIKit/UIColor');
	/*********************************************  NAVIGATION SETTINGS  ********************************************/

	ALApplozicSettings.setStatusBarBGColor(UIColor.colorWithRedGreenBlueAlpha(66.0 / 255, 173.0 / 255, 247.0 / 255, 1));
	//ALApplozicSettings.setStatusBarStyle(UIStatusBarStyleLightContent);
	/* BY DEFAULT Black:UIStatusBarStyleDefault IF REQ. White: UIStatusBarStyleLightContent  */
	/* ADD property in info.plist "View controller-based status bar appearance" type: BOOLEAN value: NO */

	ALApplozicSettings.setColorForNavigation(UIColor.colorWithRedGreenBlueAlpha(66.0 / 255, 173.0 / 255, 247.0 / 255, 1));
	ALApplozicSettings.setColorForNavigationItem(UIColor.whiteColor);
	ALApplozicSettings.hideRefreshButton(false);
	ALUserDefaultsHandler.setNavigationRightButtonHidden(false);

	ALUserDefaultsHandler.setBottomTabBarHidden(false);
	ALApplozicSettings.setTitleForConversationScreen("Chats");
	ALApplozicSettings.setCustomNavRightButtonMsgVC(false);
	/*  SET VISIBILITY FOR REFRESH BUTTON (COMES FROM TOP IN MSG VC)   */
	ALApplozicSettings.setTitleForBackButtonMsgVC("Back");
	/*  SET BACK BUTTON FOR MSG VC  */
	ALApplozicSettings.setTitleForBackButtonChatVC('Back');
	/*  SET BACK BUTTON FOR CHAT VC */
	/****************************************************************************************************************/

	/***************************************  SEND RECEIVE MESSAGES SETTINGS  ***************************************/

	ALApplozicSettings.setSendMsgTextColor(UIColor.whiteColor);
	ALApplozicSettings.setReceiveMsgTextColor(UIColor.grayColor);
	ALApplozicSettings.setColorForReceiveMessages(UIColor.colorWithRedGreenBlueAlpha(255 / 255, 255 / 255, 255 / 255, 1));
	ALApplozicSettings.setColorForSendMessages(UIColor.colorWithRedGreenBlueAlpha(66.0 / 255, 173.0 / 255, 247.0 / 255, 1));

	ALApplozicSettings.setCustomMessageBackgroundColor(UIColor.lightGrayColor);
	/*  SET CUSTOM MESSAGE COLOR */
	ALApplozicSettings.setCustomMessageFontSize(14);
	/*  SET CUSTOM MESSAGE FONT SIZE */
	ALApplozicSettings.setCustomMessageFont("Helvetica");

	//****************** DATE COLOUR : AT THE BOTTOM OF MESSAGE BUBBLE ******************/
	ALApplozicSettings.setDateColor(UIColor.colorWithRedGreenBlueAlpha(51.0 / 255, 51.0 / 255, 51.0 / 255, 0.5));

	//****************** MESSAGE SEPERATE DATE COLOUR : DATE MESSAGE ******************/
	ALApplozicSettings.setMsgDateColor(UIColor.blackColor);

	/***************  SEND MESSAGE ABUSE CHECK  ******************/

	ALApplozicSettings.setAbuseWarningText("AVOID USE OF ABUSE WORDS");
	ALApplozicSettings.setMessageAbuseMode(true);

	//****************** SHOW/HIDE RECEIVER USER PROFILE ******************/
	ALApplozicSettings.setReceiverUserProfileOption(false);

	//***********************************************************************/
	//**********************************************  IMAGE SETTINGS  ************************************************/

	ALApplozicSettings.setMaxCompressionFactor(0.1);
	ALApplozicSettings.setMaxImageSizeForUploadInMB(3);
	ALApplozicSettings.setMultipleAttachmentMaxLimit(5);

	//*********************************************  GROUP SETTINGS  ************************************************/

	ALApplozicSettings.setGroupOption(true);
	ALApplozicSettings.setGroupExitOption(true);
	ALApplozicSettings.setGroupMemberAddOption(true);
	ALApplozicSettings.setGroupMemberRemoveOption(true);

	ALApplozicSettings.setGroupInfoDisabled(false);
	ALApplozicSettings.setGroupInfoEditDisabled(false);

	//******************************************** NOTIIFCATION SETTINGS  ********************************************/

	ALUserDefaultsHandler.setDeviceApnsType(0);
	//For Distribution CERT::
	//ALUserDefaultsHandler.setDeviceApnsType(APNS_TYPE_DISTRIBUTION)

	ALApplozicSettings.enableNotification();
	//0
	//    ALApplozicSettings.disableNotification(); //2
	//    ALApplozicSettings.disableNotificationSound(); //1                /*  IF NOTIFICATION SOUND NOT NEEDED  */
	//    ALApplozicSettings.enableNotificationSound(); //0                   /*  IF NOTIFICATION SOUND NEEDED    */
	//****************************************************************************************************************/

	//********************************************* CHAT VIEW SETTINGS  **********************************************/

	ALApplozicSettings.setVisibilityForNoMoreConversationMsgVC(false);
	/*  SET VISIBILITY NO MORE CONVERSATION (COMES FROM TOP IN MSG VC)  */
	ALApplozicSettings.setEmptyConversationText("You have no conversations yet");
	/*  SET TEXT FOR EMPTY CONVERSATION    */
	ALApplozicSettings.setVisibilityForOnlineIndicator(true);
	/*  SET VISIBILITY FOR ONLINE INDICATOR */

	ALApplozicSettings.setColorForSendButton(UIColor.colorWithRedGreenBlueAlpha(66.0 / 255, 173.0 / 255, 247.0 / 255, 1));

	ALApplozicSettings.setColorForTypeMsgBackground(UIColor.clear);
	/*  SET COLOR FOR TYPE MESSAGE OUTER VIEW */
	ALApplozicSettings.setMsgTextViewBGColor(UIColor.lightGray);
	/*  SET BG COLOR FOR MESSAGE TEXT VIEW */
	ALApplozicSettings.setPlaceHolderColor(UIColor.gray);
	/*  SET COLOR FOR PLACEHOLDER TEXT */
	ALApplozicSettings.setVisibilityNoConversationLabelChatVC(true);
	/*  SET NO CONVERSATION LABEL IN CHAT VC    */
	ALApplozicSettings.setBGColorForTypingLabel(UIColor.colorWithRedGreenBlueAlpha(242 / 255.0, 242 / 255.0, 242 / 255.0, 1));
	/*  SET COLOR FOR TYPING LABEL  */
	ALApplozicSettings.setTextColorForTypingLabel(UIColor.colorWithRedGreenBlueAlpha(51.0 / 255, 51.0 / 255, 51.0 / 255, 0.5));
	/*  SET COLOR FOR TEXT TYPING LABEL  */
	//****************************************************************************************************************/

	//********************************************** CHAT TYPE SETTINGS  *********************************************/

	ALApplozicSettings.setContextualChat(true);
	/*  IF CONTEXTUAL NEEDED    */
	/*  Note: Please uncomment below setter to use app_module_name */
	//   ALUserDefaultsHandler.setAppModuleName("<APP_MODULE_NAME>")
	//   ALUserDefaultsHandler.setAppModuleName("SELLER")
	//****************************************************************************************************************/

	//*********************************************** CONTACT SETTINGS  **********************************************/

	ALApplozicSettings.setFilterContactsStatus(true);
	/*  IF NEEDED ALL REGISTERED CONTACTS   */
	ALApplozicSettings.setOnlineContactLimit(0);
	/*  IF NEEDED ONLINE USERS WITH LIMIT   */
	ALApplozicSettings.setSubGroupLaunchFlag(false);
	/*  IF NEEDED SUB GROUP LAUNCH   */
	//****************************************************************************************************************/

	//***************************************** TOAST + CALL OPTION SETTINGS  ****************************************/

	ALApplozicSettings.setColorForToastText(UIColor.black);
	/*  SET COLOR FOR TOAST TEXT    */
	ALApplozicSettings.setColorForToastBackground(UIColor.gray);
	/*  SET COLOR FOR TOAST BG      */
	ALApplozicSettings.setCallOption(true);
	/*  IF CALL OPTION NEEDED   */
	/****************************************************************************************************************/

	/********************************************* DEMAND/MISC SETTINGS  ********************************************/

	ALApplozicSettings.setUnreadCountLabelBGColor(UIColor.purple);
	ALApplozicSettings.setCustomClassName("ALChatManager");
	/*  SET 3rd Party Class Name OR ALChatManager */
	ALUserDefaultsHandler.setFetchConversationPageSize(20);
	/*  SET MESSAGE LIST PAGE SIZE  */ // DEFAULT VALUE 20
	ALUserDefaultsHandler.setUnreadCountType(1);
	/*  SET UNRAED COUNT TYPE   */ // DEFAULT VALUE 0
	ALApplozicSettings.setMaxTextViewLines(4);
	ALUserDefaultsHandler.setDebugLogsRequire(true);
	/*   ENABLE / DISABLE LOGS   */
	ALUserDefaultsHandler.setLoginUserConatactVisibility(false);
	ALApplozicSettings.setUserProfileHidden(false);
	ALApplozicSettings.setFontFace("Helvetica");
	//ALApplozicSettings.setChatWallpaperImageName("<WALLPAPER NAME>");
	//****************************************************************************************************************/

	//***************************************** APPLICATION URL CONFIGURATION + ENCRYPTION  ***************************************/

	ALUserDefaultsHandler.setEnableEncryption(false);
	/* Note: PLEASE DO YES (IF NEEDED)  */
	//****************************************************************************************************************/

	ALUserDefaultsHandler.setGoogleMapAPIKey("AIzaSyBnWMTGs1uTFuf8fqQtsmLk-vsWM7OrIXk");
	/*Note: REPLEACE WITH YOUR GOOGLE MAP KEY  */

	//ALApplozicSettings.setMsgContainerVC("sampleapp_swift.DVChatViewController");  // appname.ClassName i.e. sampleapp_swift.DVChatViewController

	//**********************************************************************************************************************/

	ALApplozicSettings.setUserDeletedText("User has been deleted");
	/*  SET DELETED USER NOTIFICATION TITLE   */

	//******************************************** CUSTOM TAB BAR ITEM : ICON && TEXT ************************************************/
	ALApplozicSettings.setChatListTabIcon("");
	ALApplozicSettings.setProfileTabIcon("");

	ALApplozicSettings.setChatListTabTitle("");
	ALApplozicSettings.setProfileTabTitle("");

}

