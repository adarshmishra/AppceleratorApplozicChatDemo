# AppceleratorApplozicChatDemo
AppceleratorApplozicChatDemo

### Android Integration

##### STEP 1: Copy All jars and res folder to your app's platform--> android folder from sample app.
##### STEP 2: Copy below to your tiapp.xml within android's menifest tag:

User permission:
```
<uses-permission android:name="com.applozic.customer.demo.permission.MAPS_RECEIVE"/>
<permission android:name="com.applozic.customer.demo.permission.MAPS_RECEIVE" android:protectionLevel="signature"/>
<uses-permission android:name="android.permission.INTERNET"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.READ_CONTACTS"/>
<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED"/>
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.CALL_PHONE"/>
<uses-permission android:name="android.permission.CAMERA"/>
<uses-permission android:name="android.permission.RECORD_AUDIO"/>
<uses-permission android:name="android.permission.READ_PHONE_STATE"/>
<uses-permission android:name="android.permission.VIBRATE"/>
```
Within <application> tag add below activities and services:

```
<activity
                    android:configChanges="keyboardHidden|screenSize|smallestScreenSize|screenLayout|orientation"
                    android:label="@string/app_name"
                    android:name="com.applozic.mobicomkit.uiwidgets.conversation.activity.ConversationActivity"
                    android:parentActivityName="Your app main activity" android:theme="@style/ApplozicTheme">
                    <!-- Parent activity meta-data to support API level 7+ -->
                    <meta-data
                        android:name="android.support.PARENT_ACTIVITY" android:value="Your app main activity"/>
                </activity>
                <activity
                    android:configChanges="keyboardHidden|screenSize|smallestScreenSize|screenLayout|orientation"
                    android:label="@string/app_name"
                    android:name="com.applozic.mobicomkit.uiwidgets.people.activity.MobiComKitPeopleActivity"
                    android:parentActivityName="com.applozic.mobicomkit.uiwidgets.conversation.activity.ConversationActivity"
                    android:theme="@style/ApplozicTheme" android:windowSoftInputMode="adjustResize">
                    <!-- Parent activity meta-data to support API level 7+ -->
                    <meta-data
                        android:name="android.support.PARENT_ACTIVITY" android:value="com.applozic.mobicomkit.uiwidgets.conversation.activity.ConversationActivity"/>
                    <intent-filter>
                        <action android:name="android.intent.action.SEARCH"/>
                    </intent-filter>
                    <intent-filter>
                        <action android:name="android.intent.action.SEND"/>
                        <category android:name="android.intent.category.DEFAULT"/>
                        <data android:mimeType="image/*"/>
                        <data android:mimeType="audio/*"/>
                        <data android:mimeType="video/*"/>
                        <data android:mimeType="text/plain"/>
                    </intent-filter>
                    <meta-data android:name="android.app.searchable" android:resource="@xml/searchable_contacts"/>
                </activity>
                <activity
                    android:configChanges="keyboardHidden|orientation|screenSize"
                    android:label="Image"
                    android:name="com.applozic.mobicomkit.uiwidgets.conversation.activity.FullScreenImageActivity"
                    android:parentActivityName="com.applozic.mobicomkit.uiwidgets.conversation.activity.ConversationActivity" android:theme="@style/Applozic_FullScreen_Theme">
                    <!-- Parent activity meta-data to support API level 7+ -->
                    <meta-data
                        android:name="android.support.PARENT_ACTIVITY" android:value="com.applozic.mobicomkit.uiwidgets.conversation.activity.ConversationActivity"/>
                </activity>
                <activity
                    android:configChanges="keyboardHidden|screenSize|smallestScreenSize|screenLayout|orientation"
                    android:name="com.applozic.mobicomkit.uiwidgets.conversation.activity.ContactSelectionActivity"
                    android:parentActivityName="com.applozic.mobicomkit.uiwidgets.conversation.activity.ConversationActivity" android:theme="@style/ApplozicTheme">
                    <meta-data
                        android:name="android.support.PARENT_ACTIVITY" android:value="com.applozic.mobicomkit.uiwidgets.conversation.activity.ConversationActivity"/>
                </activity>
                <activity
                    android:configChanges="keyboardHidden|screenSize|smallestScreenSize|screenLayout|orientation"
                    android:name="com.applozic.mobicomkit.uiwidgets.conversation.activity.ChannelCreateActivity"
                    android:parentActivityName="com.applozic.mobicomkit.uiwidgets.conversation.activity.ConversationActivity" android:theme="@style/ApplozicTheme">
                    <meta-data
                        android:name="android.support.PARENT_ACTIVITY" android:value="com.applozic.mobicomkit.uiwidgets.conversation.activity.ConversationActivity"/>
                </activity>
                <activity
                    android:configChanges="keyboardHidden|screenSize|smallestScreenSize|screenLayout|orientation"
                    android:name="com.applozic.mobicomkit.uiwidgets.conversation.activity.ChannelNameActivity"
                    android:parentActivityName="com.applozic.mobicomkit.uiwidgets.conversation.activity.ConversationActivity" android:theme="@style/ApplozicTheme"/>
                <activity
                    android:configChanges="keyboardHidden|screenSize|smallestScreenSize|screenLayout|orientation"
                    android:name="com.applozic.mobicomkit.uiwidgets.conversation.activity.ChannelInfoActivity"
                    android:parentActivityName="com.applozic.mobicomkit.uiwidgets.conversation.activity.ConversationActivity" android:theme="@style/ApplozicTheme">
                    <meta-data
                        android:name="android.support.PARENT_ACTIVITY" android:value="com.applozic.mobicomkit.uiwidgets.conversation.activity.ConversationActivity"/>
                </activity>
                <activity
                    android:configChanges="keyboardHidden|screenSize|smallestScreenSize|screenLayout|orientation"
                    android:name="com.applozic.mobicomkit.uiwidgets.conversation.activity.MobiComAttachmentSelectorActivity"
                    android:parentActivityName="com.applozic.mobicomkit.uiwidgets.conversation.activity.ConversationActivity"
                    android:theme="@style/ApplozicTheme" android:windowSoftInputMode="stateHidden|adjustResize">
                    <meta-data
                        android:name="android.support.PARENT_ACTIVITY" android:value=""/>
                </activity>
                <activity
                    android:configChanges="keyboardHidden|screenSize|smallestScreenSize|screenLayout|orientation"
                    android:name="com.applozic.mobicomkit.uiwidgets.conversation.activity.MobicomLocationActivity"
                    android:parentActivityName="com.applozic.mobicomkit.uiwidgets.conversation.activity.ConversationActivity"
                    android:theme="@style/ApplozicTheme" android:windowSoftInputMode="adjustResize">
                    <meta-data
                        android:name="android.support.PARENT_ACTIVITY" android:value=""/>
                </activity>
                <activity
                    android:name="com.theartofdev.edmodo.cropper.CropImageActivity" android:theme="@style/Base.Theme.AppCompat"/>
                <service android:exported="false" android:name="com.applozic.mobicomkit.api.conversation.MessageIntentService"/>
                <service android:name="org.eclipse.paho.android.service.MqttService"/>
                <service android:exported="false" android:name="com.applozic.mobicomkit.api.conversation.ApplozicIntentService"/>
                <service android:exported="false" android:name="com.applozic.mobicomkit.api.conversation.ApplozicMqttIntentService"/>
                <service android:exported="false" android:name="com.applozic.mobicomkit.api.people.UserIntentService"/>
                <service android:exported="false" android:name="com.applozic.mobicomkit.api.conversation.ConversationIntentService"/>
                <service android:exported="false" android:name="com.applozic.mobicomkit.api.conversation.ConversationReadService"/>
                <service android:exported="false" android:name="com.applozic.mobicomkit.uiwidgets.notification.NotificationIntentService"/>
                <receiver android:name="com.applozic.mobicomkit.broadcast.TimeChangeBroadcastReceiver">
                    <intent-filter>
                        <action android:name="android.intent.action.TIME_SET"/>
                        <action android:name="android.intent.action.TIMEZONE_CHANGED"/>
                    </intent-filter>
                </receiver>
                <receiver android:enabled="true" android:exported="true" android:name="com.applozic.mobicomkit.broadcast.ConnectivityReceiver">
                    <intent-filter>
                        <action android:name="android.intent.action.BOOT_COMPLETED"/>
                    </intent-filter>
                </receiver>
                <meta-data android:name="com.applozic.application.key" android:value="<Your applozic application key>"/>
                <!-- Applozic Application Key -->
                <!-- Launcher white Icon -->
                <meta-data android:name="main_folder_name" android:value="applozic"/>
                <!-- Attachment Folder Name -->
                <meta-data android:name="com.google.android.geo.API_KEY" android:value="AIzaSyC5Nn-61WKBCckpsy0KmiaaqVW2mqAO1V0"/>
                <!--Replace with your geo api key from google developer console  -->
                <!-- For testing purpose use AIzaSyAYB1vPc4cpn_FJv68eS_ZGe1UasBNwxLI
				To disable the location sharing via map add this line ApplozicSetting.getInstance(context).disableLocationSharingViaMap(); in onSuccess of Applozic UserLoginTask -->
                <meta-data android:name="activity.open.on.notification" android:value="com.applozic.mobicomkit.uiwidgets.conversation.activity.ConversationActivity"/>
                <!-- NOTE : Do NOT change this value -->
                <meta-data android:name="com.package.name" android:value="Your app package name"/>
                <meta-data android:name="com.google.android.gms.version" android:value="@integer/google_play_services_version"/>
                <!-- NOTE: Do NOT change this, it should remain same i.e 'com.package.name' -->
                <provider
                    android:authorities="<Your app package name>.provider"
                    android:exported="false"
                    android:grantUriPermissions="true" android:name="android.support.v4.content.FileProvider">
                    <meta-data
                        android:name="android.support.FILE_PROVIDER_PATHS" android:resource="@xml/applozic_provider_paths"/>
                </provider>
```

