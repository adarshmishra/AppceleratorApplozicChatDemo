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

	var loginBtn = Ti.UI.createButton({
		text : 'login',
		color : "#111",
		font : {
			fontSize : 20
		}
	});

	loginBtn.addEventListener('click', function() {
		console.log('Click event fired ');
		applozicUserLoginAnLaunchChat('ak101', '123', 'adarsh@applozic.com');
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
function ApplozicSettings(){
	
	var ALUserDefaultsHandler = require('Applozic/ALUserDefaultsHandler'); 
	var ALApplozicSettings = require('Applozic/ALApplozicSettings'); 

    var UIColor = require('UIKit/UIColor');
    /*********************************************  NAVIGATION SETTINGS  ********************************************/
    
    ALApplozicSettings.setStatusBarBGColor(UIColor.colorWithRedGreenBlueAlpha(66.0/255,173.0/255,247.0/255,1)); 
    //ALApplozicSettings.setStatusBarStyle(UIStatusBarStyleLightContent);
    /* BY DEFAULT Black:UIStatusBarStyleDefault IF REQ. White: UIStatusBarStyleLightContent  */
    /* ADD property in info.plist "View controller-based status bar appearance" type: BOOLEAN value: NO */
    
    ALApplozicSettings.setColorForNavigation(UIColor.colorWithRedGreenBlueAlpha(66.0/255,173.0/255,247.0/255,1));
    ALApplozicSettings.setColorForNavigationItem(UIColor.whiteColor);
    ALApplozicSettings.hideRefreshButton(false);
    ALUserDefaultsHandler.setNavigationRightButtonHidden(false);
   
    ALUserDefaultsHandler.setBottomTabBarHidden(false);
    ALApplozicSettings.setTitleForConversationScreen("Chats");
    ALApplozicSettings.setCustomNavRightButtonMsgVC(false);                 /*  SET VISIBILITY FOR REFRESH BUTTON (COMES FROM TOP IN MSG VC)   */
    ALApplozicSettings.setTitleForBackButtonMsgVC("Back");                /*  SET BACK BUTTON FOR MSG VC  */
    ALApplozicSettings.setTitleForBackButtonChatVC('Back');              /*  SET BACK BUTTON FOR CHAT VC */
    /****************************************************************************************************************/
    
    
    /***************************************  SEND RECEIVE MESSAGES SETTINGS  ***************************************/
    
    ALApplozicSettings.setSendMsgTextColor(UIColor.whiteColor);
    ALApplozicSettings.setReceiveMsgTextColor(UIColor.grayColor);
    ALApplozicSettings.setColorForReceiveMessages(UIColor.colorWithRedGreenBlueAlpha(255/255,255/255,255/255,1));
    ALApplozicSettings.setColorForSendMessages(UIColor.colorWithRedGreenBlueAlpha(66.0/255,173.0/255,247.0/255,1));
    
    ALApplozicSettings.setCustomMessageBackgroundColor(UIColor.lightGrayColor);              /*  SET CUSTOM MESSAGE COLOR */
    ALApplozicSettings.setCustomMessageFontSize(14);                                     /*  SET CUSTOM MESSAGE FONT SIZE */
    ALApplozicSettings.setCustomMessageFont("Helvetica");
    
    //****************** DATE COLOUR : AT THE BOTTOM OF MESSAGE BUBBLE ******************/
    ALApplozicSettings.setDateColor(UIColor.colorWithRedGreenBlueAlpha(51.0/255,51.0/255,51.0/255,0.5));
    
    //****************** MESSAGE SEPERATE DATE COLOUR : DATE MESSAGE ******************/
    ALApplozicSettings.setMsgDateColor(UIColor.blackColor);
     
    /***************  SEND MESSAGE ABUSE CHECK  ******************/

    ALApplozicSettings.setAbuseWarningText("AVOID USE OF ABUSE WORDS");
    ALApplozicSettings.setMessageAbuseMode(true);

    //****************** SHOW/HIDE RECEIVER USER PROFILE ******************/
    ALApplozicSettings.setReceiverUserProfileOption(false);
    
    /****************************************************************************************************************/
   


}

