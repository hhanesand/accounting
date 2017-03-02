### No changes for Charts

### Changes for Museai
 - 01813a08 2017-02-09 	Use promise kit to improve our initialization of audio components that could take some time.
 - 7ee4e008 2017-02-09 	Add super call and fix import.
 - 7772d137 2017-02-09 	Merge pull request #320 from Museai/feature/code_style
 - 642da6ff 2017-02-09 	Use @import.
 - c3ccab9c 2017-02-09 	move to frameworks and use install promise kit as an alternative to bolts
 - f9e31a84 2017-02-09 	Commenting, adding formatting, looking through code.
 - de558c5d 2017-02-09 	Merge pull request #318 from Museai/feature/fixes
 - 162570f5 2017-02-09 	fix #305 by using UIAlertActionStyleCancel in alert controller.
 - c3379b20 2017-02-08 	Checksum.
 - 6c40144a 2017-02-08 	Back out podfile.
 - c30306d2 2017-02-08 	Merge pull request #316 from Museai/feature/fixes
 - cae432ce 2017-02-08 	Xcode updates.
 - 0bbaf858 2017-02-08 	Update callback block for `displayAlertWithTwoButtonsWithTitle` to always report back to caller, but pass a bool indicating if we pressed ok or not.
 - 839f9513 2017-02-08 	fixes #272 fixes #273 by updating gramar
 - 0e2c0615 2017-02-08 	fixes #303 fixes #276 Enable automatic return for UITextFields and return yes for shouldReturn Disable automatic return for UITextViews
 - 7bbe4282 2017-02-08 	fix #288 fix #287 Add privacy descriptions.
 - 48c02df5 2017-02-08 	Xcode changes
 - c71ed340 2017-02-08 	Point app to back4app
 - 11e7abc0 2017-02-08 	Log information about error.
 - 993b89d3 2017-02-08 	Add privacy descriptions
 - accc7ca0 2017-02-08 	Enable automatic code signing, and xcode update of app icon
 - d5f5e4c9 2017-02-08 	Xcode updates to storyboard, moving files, organizing view controllers in storyboard.
 - 643957e0 2017-02-08 	Update crashlytics and fabric.
 - 52741cd4 2017-02-08 	Update to cocoa pods 1.2.0

### Changes for roomservice-cloud
 - 0866c45 2017-02-28 	simplify shema and print out validation if there were errors
 - b043166 2017-02-28 	remove logging
 - 33d14ca 2017-02-28 	Update get logged in drivers function to use location object on user.
 - 8cb2cfb 2017-02-28 	unlink from production endpoint to not mess things up
 - 41eacf0 2017-02-28 	Migrate configuration file.
 - f5eae8c 2017-02-28 	Revert "remove configuration file"
 - 3a5def5 2017-02-28 	Connect to staging endpoint.
 - 5b20f2e 2017-02-28 	remove configuration file
 - 5e9fce4 2017-02-28 	Test the getLogged in drivers function before changing it.
 - ec8ebbf 2017-02-27 	Add my phone number for future debugging.
 - 17b6a61 2017-02-27 	Playing around with testing functions.
 - ba145df 2017-02-21 	Add testing frameworks
 - 7efd728 2017-02-21 	Remove public folder
 - 8c4449a 2017-02-20 	Remove multiple var declarations on one line, remove unused variables, merge declarations and initializations.
 - e061fb7 2017-02-20 	Node modules
 - 0556ddb 2017-02-19 	Format code according to standard js
 - 82be512 2017-02-19 	Move to 2 space formatting as standard js requires.
 - fe4edfc 2017-02-19 	Move dev dependencies to correct place.
 - f716358 2017-02-19 	Use node.js and remove DS_Store
 - 8d0bfe1 2017-02-10 	Format js code.
 - 4a7b6ed 2017-02-10 	Code cleanup.
 - 8b6e708 2017-02-10 	Log change and fix wrong variable name.
 - b6cdd77 2017-02-10 	Add location save event and add it to main.js
 - 02a725d 2017-02-10 	Merge branch 'master' of https://github.com/heumn/RoomserviceCC
 - 8fb24dc 2017-02-10 	Apology sms and email functions.
 - 5901478 2017-02-02 	Fix image checking.
 - 64fd950 2017-02-02 	Fix image checking function in 2 more places
 - a7e2c07 2017-02-02 	fix image url checking
 - f088900 2017-02-02 	Log push failures.
 - 32c9aa6 2017-02-02 	Update use of master key.
 - b6494c7 2017-02-02 	Change path for bitly module.
 - 755d561 2017-02-02 	Stop tracking.

### Changes for roomservice-ios-driver
 - 459ea63 2017-02-23 	Update to new script.
 - 0509ae8 2017-02-21 	Update buddybuild script
 - 0efa408 2017-02-20 	Version and include iOS version in installation.
 - db5aeb0 2017-02-20 	Updating the api key seems to fix the issue...
 - 80ff2e5 2017-02-20 	Remove local google maps framework and install via pods
 - 4435bdb 2017-02-17 	Update build script.
 - d49051f 2017-02-17 	Update script to newest.
 - 77c6856 2017-02-16 	Update sed command.
 - 3a51b53 2017-02-16 	Remove comments and fix paths for info plist keys.
 - 11d47ff 2017-02-16 	Fix problem with NAME variable extraction, remove fabric, and update plist path.
 - e4010f1 2017-02-16 	Update script with newest data file generation and page creation.
 - 1566b00 2017-02-15 	Pod update and update buddy build post build script.
 - dbb6314 2017-02-13 	Fix target name and go back to iOS 8
 - 817e06a 2017-02-13 	Change the remaining names to roomservice-ios-driver
 - 11edf28 2017-02-13 	Update buddy build script.
 - 7922cdf 2017-02-13 	Fix receipt creation and change "Amount" to "Vape".
 - 3d019c6 2017-02-13 	Move buddy build file.
 - 1cd751d 2017-02-13 	Renames and add buddy build post clone script to upload builds to GitHub web server.
 - 7fd986f 2017-02-13 	Add private key for code signing and remove empty parse folder.
 - 8b46d6d 2017-02-13 	Rename project to roomservice-ios-driver and fix entitlements file.
 - f21937a 2017-02-13 	Install pods, remove unneeded lines from podfile.
 - 2346e72 2017-02-13 	Add provisioning folder to project, rename project.
 - c80ab6c 2017-02-13 	Fix libs path.
 - 76c0fce 2017-02-13 	Move files out of Roomservice2 folder, fix Xcode project paths, and run synx on project.
 - 70ba1f1 2017-02-09 	Add new mechanism for setting and displaying both the app's version and build number.
 - bcfee0f 2017-02-09 	Don't prevent crash, but still log information about it.
 - 11a5179 2017-02-09 	Be extra sure that nothing using user location outside app. #395
 - 3dde327 2017-02-09 	Add missing super calls.
 - 0dc34d6 2017-02-09 	Fix string that is initialized with garbage value.
 - 2de4082 2017-02-09 	Fix memory leak.
 - 5117bef 2017-02-07 	Version.
 - 0cbf3ca 2017-02-07 	Add code to prevent crashing seen in crashlytics and log information so we can fix it.
 - 9beb0b3 2017-02-07 	Remove parse crash reporting, apply Xcode modernization on static analyzer.
 - e7447d7 2017-02-07 	Use own version of TSMessages that loads from the correct path.
 - 02b5daf 2017-02-02 	update version
 - 6f9878e 2017-02-02 	Add missing entitlement.
 - 296e1d1 2017-02-01 	Automatic code signing and bump version.

### No changes for roomservice-ios-new-order

### Changes for roomservice-ios-receipt
 - 5840123 2017-02-21 	Pod install and update buddybuild post script
 - fd1acfe 2017-02-13 	Change info plist path.
 - 01f63e2 2017-02-13 	Back to ios8
 - df9e6e8 2017-02-13 	Change internal names to roomservice-ios-receipts
 - abc7495 2017-02-13 	Updates to receipt files and double check that they still work.
 - 99fc582 2017-02-13 	Remove early return used to send emails and sms to user.
 - a4c7edc 2017-02-13 	`pod install`
 - 56256bb 2017-02-13 	Add back receipt generation class.
 - 3275e96 2017-02-13 	Rename schemes, rename project.
 - 2cf3501 2017-02-13 	Pod update, organize folder structure, and remove HockeySDK, fix Xcode project pointing to main iOS app.
 - 5351628 2017-02-13 	Remove parse folder, and move regenerate receipts controller.
 - ad31a94 2017-02-13 	Version.
 - 66549b9 2017-02-13 	Make sure we don't create new receipts, only update existing ones.
 - b3b7afa 2017-02-02 	Build version and display name.
 - 98643fe 2017-02-01 	Automatic code sign because that's the only way I can get it to work....
 - 504d1af 2017-02-01 	Generate receipts
 - fd0df61 2017-02-01 	Breakpoints and names.
 - f63b9f2 2017-02-01 	Fix label text.

### Changes for roomservice-web
 - 91dbabd 2017-02-28 	Update to use new naming of response.
 - 027365f 2017-02-28 	formatting
 - 9a0c189 2017-02-28 	merge statements
 - c47e1e3 2017-02-28 	Encase marker information in div to fix display.
 - 57d1316 2017-02-27 	remove flatten directive in pipe to make handling paths easier, update paths so checkmark appears in production and development
 - c8d2dab 2017-02-27 	back to old color picker
 - 9dff6a0 2017-02-26 	Update font replacements and add gulp task for running production files locally
 - e30289b 2017-02-26 	Update run configuraitons
 - f13bbd0 2017-02-26 	back out changes.... causing issues
 - 0865012 2017-02-26 	Update build file, update package.json, formatting
 - 7b40421 2017-02-26 	Update to new color picker
 - a8705d2 2017-02-26 	Update name
 - 3c92e04 2017-02-26 	Add sentry error handling to application.
 - c67557d 2017-02-26 	Update to angular 1.6
 - 5d025b4 2017-02-26 	update to angular 1.5
 - 110188a 2017-02-26 	Change indentation and update spelling
 - a3adae7 2017-02-26 	Update to angular 1.4.x, and change name of controller
 - 3063793 2017-02-24 	Remove modules, update plugins
 - ac11c89 2017-02-24 	Update names and remove unused dependency
 - d709240 2017-02-24 	Change module name.
 - 36f5fb0 2017-02-24 	Format gulpfile, remove unused code, more formatting
 - a703422 2017-02-24 	Minor changes, delete some unused css
 - 4f4c41c 2017-02-24 	Plugin configuration
 - 24671db 2017-02-24 	Update syntax with es lint
 - b50a6aa 2017-02-24 	reformat code
 - 1dd4778 2017-02-24 	Ignore files
 - 33fad7f 2017-02-24 	Use plumber and log some files.
 - 5ff8b48 2017-02-23 	Update to newest useref and change build order slightly to align with new api
 - ee8712f 2017-02-23 	Update gulp-rev and gulp-rev-replace
 - ace37f2 2017-02-23 	Update inject and fix placement of read: false
 - bb49ee3 2017-02-23 	Update package.json
 - 2bb4415 2017-02-23 	Update gulp-ng-html2js, gulp-uglify, and require-dir. Remove uglify-save-licence and update configuration.
 - 96494fd 2017-02-23 	Update wiredep, gulp-size, and gulp-replace
 - 70c5dd1 2017-02-23 	Remove protractor and jshint
 - 824182f 2017-02-23 	Update image min
 - 7ae2419 2017-02-23 	Fix not setting restore: true and fix changing assets.restore() to assets.restore
 - 518d164 2017-02-23 	Restore default clean behavior and point gulp to default.
 - cc170f5 2017-02-23 	Update dependencies and update use
 - 0f0b798 2017-02-23 	Make all main gulp tasks dependent on cleaning the destination folder, update dest paths to automatically create folders if it does not exist. Update cache and autoprefixer plugins.
 - 3b0dac9 2017-02-23 	Dont quit on error and fix htmlmin call
 - ecc84a6 2017-02-23 	Don't break on standard error, update del, and update run configurations
 - f039353 2017-02-23 	configure web storm to use eslint
 - 29a4b34 2017-02-23 	Use JS standard.
 - 2e712f2 2017-02-23 	Remove more e2e tests and remove more dependencies
 - e1344bb 2017-02-23 	Manually load plugins so tools can tell if we are using them in code or not
 - b56a776 2017-02-23 	Remove node-sass and update minifyHTML usage
 - 184aa31 2017-02-23 	Greatly simplify browser sync for configurations we don't use. Update browser sync.
 - c309f32 2017-02-23 	Move to non deprecated html min
 - f1bc40c 2017-02-23 	Remove jshint and yo
 - 53160f5 2017-02-23 	Move to 2 spaces in package.json
 - 80a0563 2017-02-23 	Allign with js standard and set to 2 spaces
 - 88f481a 2017-02-23 	Remove tests that do nothing and some reformatting
 - 8bff4f7 2017-02-19 	npm install
 - d13d7f4 2017-02-16 	Formatting, removing redundant overrides, and remove building to outside folder.
 - fcfa66e 2017-02-16 	Format gulp and configuration files.
 - 507c702 2017-02-16 	Enable js coding assistance, and format remaining files.
 - 262ad97 2017-02-16 	Format.
 - 6cdb0af 2017-02-16 	Update angular-google-maps to latest version.
 - b6fbd32 2017-02-16 	Format source code according to new tab size.
 - 879246e 2017-02-16 	Increase tab size from 2 spaces to 4 spaces.
 - cdcce57 2017-02-16 	Fix css compilation so we can run webserver locally, and update import statements.
 - b3134b1 2017-02-16 	Add more missing semi colons, add api key
 - e25641d 2017-02-16 	Formatting and fixing errors and warnings.
 - 3513527 2017-02-16 	Run node install and include libraries for syntax checking
 - 8da3590 2017-02-16 	Add to gitignore
 - ee961ba 2017-02-16 	Update gitingore.
 - 2c16c01 2017-02-16 	Format code to make it easier to read and debug.

### No changes for HexColors

### Changes for TSMessages
 - 36af864 2017-02-07 	Get correct bundle since we're using frameworks.

### Changes for abellono.github.io
 - 29c1e47 2017-02-27 	remove old data files
 - 02e450d 2017-02-27 	link update
 - c4d388e 2017-02-27 	update manifest link
 - fdb6d39 2017-02-23 	Should be jsonpath not fastlane
 - b4f5740 2017-02-23 	remove uses of base name and update delimiter in sed command
 - 9690d06 2017-02-21 	Add pictures for receipt app and textrip
 - 599d1db 2017-02-21 	Added receipts app
 - 4b3a7d1 2017-02-21 	Added textrip app
 - 8176307 2017-02-21 	Added roomservice app
 - 47c1d9e 2017-02-21 	Use GitHub releases to host app pictures too.
 - 66f0ace 2017-02-21 	Update build script to use GitHub's releases on a public repository.
 - aac1cb2 2017-02-21 	Delete CNAME
 - 204c417 2017-02-21 	Fix apps page sort, update gems and update config.
 - 07a05da 2017-02-17 	Fix manifest link and add a json file.
 - 1bd2333 2017-02-17 	Insert default bundle id into script.
 - dbac9c4 2017-02-17 	Added textrip app
 - 674867e 2017-02-17 	Remove automatic app page creation and just exit if it doesnt exist. Exit if bundle ids do not match.
 - 8ce3cb9 2017-02-17 	Added textrip app
 - 6918777 2017-02-17 	fix not making changes to default file
 - a146982 2017-02-17 	Final cleaning.
 - b2acab7 2017-02-17 	Added roomservice app
 - 90879fc 2017-02-17 	Remove build script.
 - b7f553e 2017-02-17 	Clean up old files, remove references to abello-web, make the configure script insert the name into the build script, pre generate the build folder so the user can put images in it.
 - 458d8f6 2017-02-17 	Added roomservice app
 - 6c28375 2017-02-17 	Added roomservice2 app
 - c01174a 2017-02-16 	Create CNAME
 - a214760 2017-02-16 	Delete CNAME
 - 905cf64 2017-02-16 	Update CNAME
 - fcbf664 2017-02-16 	Update CNAME
 - ec3c473 2017-02-16 	Update CNAME
 - 67a451a 2017-02-16 	Create CNAME
 - f33e825 2017-02-16 	Delete CNAME
 - e992154 2017-02-16 	Update CNAME
 - 60149df 2017-02-16 	Create CNAME
 - 2d10b2a 2017-02-16 	Add instructions for adding app images and exclude the build folder from processing.
 - 2e3b678 2017-02-16 	Update gitingore.
 - da28d9f 2017-02-16 	Add missing assets and reformat css
 - 8cd766b 2017-02-16 	Update google analytics.
 - 720f597 2017-02-16 	Add files from abello.no
 - dccb515 2017-02-16 	Make exclude a list
 - eb8f0f3 2017-02-16 	Exclude defaults.
 - 675ccf6 2017-02-16 	Finish configuration script.
 - e58b465 2017-02-16 	remove app
 - 4348e9d 2017-02-16 	Added 1 app
 - 28de019 2017-02-16 	configuration script, and fix sed commands once and for all
 - c4d4b89 2017-02-16 	Update plist paths and sed command
 - a226df8 2017-02-16 	updates
 - 98a83fe 2017-02-16 	Update creation of data files on push to use new format.
 - 7400d00 2017-02-15 	Final updates to page, using layout from github
 - b038fb3 2017-02-15 	Fix collection path
 - d8e1588 2017-02-15 	Fix how we generate an app's version page and test with test data
 - 183eea5 2017-02-15 	updates to sample script and jekyll data file creation
 - 89d5a5c 2017-02-13 	Better explain where to put screenshots.
 - bee179e 2017-02-13 	Change a few things in the script.
 - 9d136f0 2017-02-13 	Add manifest and script.
 - 21e0cc7 2017-02-13 	Update README.md
 - db589dd 2017-02-13 	Set theme jekyll-theme-cayman
 - c85b615 2017-02-13 	Initial commit

### Changes for builds
 - 4851558 2017-02-21 	initial

### Changes for motor-detector-ios
 - 67aac44 2017-02-27 	Line chart.
 - 080f1e1 2017-02-27 	Reset graph when button is pressed.
 - e91b04d 2017-02-27 	Pod updates and add charts

### Changes for nettdating
 - b431030b 2017-02-23 	Tell apple that we don't use non-exempt encryption.
 - 87443693 2017-02-23 	Separate payment debug with a new environment variable and remove some un needed svprogress huds
 - 0faaf873 2017-02-22 	If running in debug mode, fake megaphone posts so we can test them better.
 - 945e1511 2017-02-20 	Bundle install and update version.
 - af5a67a3 2017-02-20 	Version
 - 3bc54776 2017-02-20 	Localization update.
 - 0b309e29 2017-02-20 	Fix megaphone purchase not setting the correct selected tab bar controller in shop. Reduce the amount of visible transitions and dismiss the whole shop in one step if the user makes a purchase. Make the verification and web purchase view controllers modal presentations to signify that they are the final step and remove the complexity surrounding the back button.
 - ddb7f974 2017-02-17 	Update localization and upload.
 - 3e83c646 2017-02-15 	Merge pull request #1294 from abellono/feature/fixes
 - 2ada07b8 2017-02-15 	build version.
 - 7ba9ff95 2017-02-15 	Look at what web view loads to determine if we should double check the user's status when we pop the view controller.
 - db16361f 2017-02-15 	Fix string files.
 - faf3a6d8 2017-02-15 	Localization additions for errors in payment flow.
 - 6e3a5abf 2017-02-15 	Fix displaying current values for things that are not set during profile completion. Fix character counter not hiding when we get to 20 characters.
 - 113316c1 2017-02-15 	Fix including debugging tools in release build.
 - e2b30302 2017-02-15 	Add right bar button for done with payment and fix calling the wrong method in the callback for user complete profile.
 - c377b773 2017-02-15 	Make sure that the settings view controller goes back to edit profile if you click it when your profile isn't complete. Make sure all calls that check if the user profile is complete use the same method.
 - 3f4aaf26 2017-02-15 	Update shemes.
 - 8b6df941 2017-02-10 	Fix spinner and bump build version, update deliver file, and remove missing test targets.
 - 697cae20 2017-02-07 	Update issue report.
 - dd1930c5 2017-02-07 	Version bump
 - aa256ad6 2017-02-07 	Update copyright.
 - 4d86ecc2 2017-02-07 	Update search filter button and text placing.
 - 12aefdaa 2017-02-07 	Update privacy text.
 - 0e0cccab 2017-02-07 	Fix color on last name signup, and fix background color for interests section profile header.
 - 049b1c73 2017-02-07 	Make sure to double check if we should actually present the next view controller after the user has completed his profile.
 - 88c93d6c 2017-02-07 	Make sure to dismiss shop controller in callback block.
 - eb579005 2017-02-07 	Add description on price manager.
 - 295f3a82 2017-02-07 	Remove status code checking.
 - b14ef5eb 2017-02-03 	Remove post-install scripts and update fastlane configuration.
 - fd76097a 2017-02-03 	Version bump.
 - 10293d4d 2017-02-03 	Final changes to payment analytics, fix setting delegate properly for completed profile checks, if buying membership - make sure the membership payment worked before we show the destination
 - ef2a8cd4 2017-02-03 	Pod updates.
 - e5b13ace 2017-02-03 	Update fabric scripts.
 - ea0f4e05 2017-02-03 	Make sure to send the correct analytic events at the right time.
 - f42c29e6 2017-02-03 	Remove unneeded copies and make sure to set completion block.
 - b1783d42 2017-02-03 	Make sure to dismiss the shop before we continue with the previous action.
 - 7191939f 2017-02-03 	Fix sending in wrong currency for analytics.
 - 04852901 2017-02-02 	Build version
 - e966db06 2017-02-02 	Fix retain cycles.
 - ff294c36 2017-02-02 	Build version.
 - 9957f7a6 2017-02-02 	Fix cancel button on membership screen not working, fix shop tab bar controller not responding to configutation correctly, and fix verification screen not responding.
 - 8adce85f 2017-02-01 	Build version.

### Changes for receipt-scanner-ios
 - e62c793 2017-02-21 	Update buddybuild script.
 - 178bd14 2017-02-17 	Merge branch 'develop'
 - 4160cd4 2017-02-17 	Add and clean up schemes.
 - c0a60c2 2017-02-17 	Add enterprise distribution script.

### Changes for tacx
 - cd2cf42 2017-02-28 	paper switch and changes to upload ui
 - efae719 2017-02-28 	Update labels and add unit labels

### No changes for Carts

### Changes for accounting
 - ff50fd7 2017-02-19 	Changes
 - c2efb2c 2017-02-19 	generate work changelog
 - cd2403c 2017-02-19 	Move code to function
 - fa62846 2017-02-19 	Write to google sheets.
 - 7a91ad8 2017-02-19 	Updates
 - f6d2b80 2017-02-18 	Updates.
 - c70954d 2017-02-18 	updade node
 - a8b7768 2017-02-18 	Update start point.
 - 694d906 2017-02-18 	returns minutes
 - 0ae16e5 2017-02-18 	Use eslint with standard
 - f39ee1c 2017-02-18 	Ignore more files
 - 60f9ba6 2017-02-18 	Ignore node_modules
 - 7bea6ae 2017-02-18 	Changes.
 - 5bdffce 2017-02-12 	update
 - 1c512b3 2017-02-12 	Initial files

### Changes for instacrate-api
 - 06986ff 2017-02-28 	fix patch problem for box.
 - c74b638 2017-02-24 	fix auth
 - 6f3db4f 2017-02-24 	Work around vapor bug and fix wrong auth error
 - 49fe4d6 2017-02-22 	no message
 - 617d028 2017-02-22 	update
 - ba9fb2d 2017-02-22 	update
 - de694ff 2017-02-22 	not workign
 - f5d3499 2017-02-22 	testing
 - c78ec9b 2017-02-22 	2
 - f7a0ee4 2017-02-22 	update script
 - 0007eaa 2017-02-22 	updates
 - 6651b2c 2017-02-22 	1
 - 25bf320 2017-02-22 	update script
 - 1255ad5 2017-02-22 	update.sh update
 - 2d7d7a1 2017-02-22 	Remove unused files and update script
 - 818ea16 2017-02-22 	do updates.
 - 0c446bd 2017-02-22 	More updates to file caching
 - efb76ce 2017-02-22 	caching
 - 0e99765 2017-02-22 	Updates to dependencies
 - 4797e5d 2017-02-22 	fix default boxes call not working
 - 226a180 2017-02-21 	Fixies
 - 916cdc1 2017-02-21 	fix subscribing
 - a7f67d2 2017-02-21 	fixes
 - 42bf50f 2017-02-21 	update permits
 - bfe76af 2017-02-21 	Create stripe customer and update scheme.
 - 7a07a40 2017-02-21 	Renaming
 - 887c9fa 2017-02-21 	Move stripe lib to local
 - 3eeebc4 2017-02-16 	update
 - df6d124 2017-02-16 	Fix return response.
 - d0bd489 2017-02-16 	syntax fixes
 - 866ba80 2017-02-11 	default card api
 - 5aae1e2 2017-02-10 	box type
 - d554a4d 2017-02-10 	update how featured boxes work
 - 49547c0 2017-02-07 	Add to resource
 - 03682c5 2017-02-07 	ignore project
 - 1042b6e 2017-02-07 	make sure we can get all categories
 - e0dc3c0 2017-02-04 	Remove sentry.
 - afce6e4 2017-02-04 	Remove more things because its not going to work.
 - 5ba0721 2017-02-04 	Add Sentry and KSCrash, remove other dependencies.
 - ef84df3 2017-02-04 	Better access controls.
 - 95b0f24 2017-02-02 	Change names
 - b5ced9e 2017-02-02 	Reduce room for api abuse.
 - 4c01629 2017-02-02 	Cupons.

### Changes for instacrate-api-firebase
 - 6bb24e2 2017-02-05 	intial
 - 5659ca5 2017-02-05 	Initial commit.

### No changes for instacrate-api-sentry

### Changes for instacrate-ios
 - 0227c74 2017-02-28 	more files
 - bbf9228 2017-02-26 	more updates
 - 482531e 2017-02-26 	changes
 - 2ad871a 2017-02-16 	Checkout fixes.
 - 7040c74 2017-02-16 	pod updates

### Changes for instacrate-web
 - 506dbf8 2017-02-22 	Serve bootstrap from a CDN.
 - 098a628 2017-02-22 	Idea files
 - 3940e5d 2017-02-22 	add gitignore
 - 6d781a0 2017-02-22 	Add idea folders

### No changes for Stripe

### Changes for Stripe
 - 6e948d0 2017-02-11 	update customer api
 - 7043348 2017-02-02 	change names
 - eb9f8ef 2017-02-02 	Cupons.

### No changes for json
