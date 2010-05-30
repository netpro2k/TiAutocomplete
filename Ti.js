/**
 * <p>The top level Titanium module.</p>
 */
Titanium = {
	/**
	 * <p>the user-agent string used by Titanium</p>
	 * @type string
	 * @final
	 */
	userAgent: 0,

	/**
	 * <p>the version of Titanium that is executing</p>
	 * @type string
	 * @final
	 */
	version: 0,

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * <p>one or more filenames to include as if the Javascript code was written in place.  This is similar to a C <tt>#include</tt> function.</p>
	 *
	 * @type void
	 * @param (string) filename to include
	 */
	 include: function(name) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {}
};


/**
 * <p>The top level API module.  The API module is mainly used for logging.</p>
 */
Titanium.API = {
	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * <p>function for logging debug messages</p>
	 *
	 * @type void
	 * @param (string) the message to log
	 */
	 debug: function(message) {},

	/**
	 * <p>function for logging error messages</p>
	 *
	 * @type void
	 * @param (string) the message to log
	 */
	 error: function(message) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * <p>function for logging informational messages</p>
	 *
	 * @type void
	 * @param (string) the message to log
	 */
	 info: function(message) {},

	/**
	 * <p>function for logging custom severity messages</p>
	 *
	 * @type void
	 * @param (string) the log level
	 * @param (string) the message to log
	 */
	 log: function(level, message) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * <p>function for logging warning messages</p>
	 *
	 * @type void
	 * @param (string) the message to log
	 */
	 warn: function(message) {}
};


/**
 * <p>The top level Accelerometer module.  The Accelerometer modules contains methods and properties for using the device accelerometer.</p>
 */
Titanium.Accelerometer = {
	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {}
};


/**
 * <p>The top level Analytics module.  The Analytics module is used for transmitting developer-defined Analytics event for your application to the Appcelerator Analytics product. It can be used to augment additional context or application-specific information which can then be accessed during analysis using Analytics.</p>
 */
Titanium.Analytics = {
	/**
	 * <p>send a generic event for the application session</p>
	 *
	 * @type void
	 * @param (string) the event type
	 * @param (string) the event name
	 * @param (object) event data or null if not specified. the object must be serializable as JSON
	 */
	 addEvent: function(type, name, data) {},

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * <p>send an analytics feature event for the application session</p>
	 *
	 * @type void
	 * @param (string) the event name
	 * @param (object) event data or null if not specified. the object must be serializable as JSON
	 */
	 featureEvent: function(name, data) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * <p>send an analytics nav event for the application session</p>
	 *
	 * @type void
	 * @param (string) the <tt>from</tt> location in the nav event
	 * @param (string) the <tt>to</tt> location in the nav event
	 * @param (string) the event name
	 * @param (object) event data or null if not specified. the object must be serializable as JSON
	 */
	 navEvent: function(from, to, name, data) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * <p>send a analytics settings event for the application session</p>
	 *
	 * @type void
	 * @param (string) the event name
	 * @param (object) event data or null if not specified. the object must be serializable as JSON
	 */
	 settingsEvent: function(name, data) {},

	/**
	 * <p>send an analytics timed event for the application session</p>
	 *
	 * @type void
	 * @param (string) the event name
	 * @param (date) the event start as a Date object
	 * @param (date) the event end as a Date object
	 * @param (float) the event duration
	 * @param (object) event data or null if not specified. the object must be serializable as JSON
	 */
	 timedEvent: function(name, start, stop, duration, data) {},

	/**
	 * <p>send an analytics user event for the application session</p>
	 *
	 * @type void
	 * @param (string) the event name
	 * @param (object) event data or null if not specified. the object must be serializable as JSON
	 */
	 userEvent: function(name, data) {}
};


/**
 * <p>The top level App module.  The App module is mainly used for accessing information about the application at runtime.</p>
 */
Titanium.App = {
	/**
	 * <p>the application's copyright</p>
	 * @type string
	 * @final
	 */
	copyright: 0,

	/**
	 * <p>the application's description</p>
	 * @type string
	 * @final
	 */
	description: 0,

	/**
	 * <p>the application's globally unique id (this is system generated and consistent through all versions)</p>
	 * @type string
	 * @final
	 */
	guid: 0,

	/**
	 * <p>the application's app id as specified in Titanium Developer</p>
	 * @type string
	 * @final
	 */
	id: 0,

	/**
	 * <p>property for controlling whether the phone screen will be locked on idle time. Can be set to true to disable the timer</p>
	 * @type boolean
	 * @final
	 */
	idleTimerDisabled: 0,

	/**
	 * <p>the application's name</p>
	 * @type string
	 * @final
	 */
	name: 0,

	/**
	 * <p>a boolean to indicate whether proximity detection is enabled</p>
	 * @type boolean
	 * @final
	 */
	proximityDetection: 0,

	/**
	 * <p>the state of the device's proximity detector</p>
	 * @type int
	 * @final
	 */
	proximityState: 0,

	/**
	 * <p>the application's publisher</p>
	 * @type string
	 * @final
	 */
	publisher: 0,

	/**
	 * <p>the application url</p>
	 * @type string
	 * @final
	 */
	url: 0,

	/**
	 * <p>the application's version</p>
	 * @type string
	 * @final
	 */
	version: 0,

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * <p>fire a cross-context application event.  listeners in any Javascript context can receive these events if they have added themselves as a listener with the event name.  NOTE: you can only pass JSON serializable data in the data payload of the event object since the data must be transportable between contexts.</p>
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 * @param (string) the event name
	 * @param (object) optional data payload for the event. NOTE: you can only pass JSON serializable data since the data must be transportable between contexts.
	 */
	 fireEvent: function(name, event, name, data) {},

	/**
	 * <p>return the arguments passed to the application on startup as a dictionary</p>
	 *
	 * @type object
	 */
	 getArguments: function() {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {}
};


/**
 * <p>The App Properties module is used for storing application related property/value pairs which persist beyond application sessions.</p>
 */
Titanium.App.Properties = {
	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * <p>return a boolean value</p>
	 *
	 * @type boolean
	 * @param (string) return a boolean value for property
	 * @param (boolean) optional default value if property is not found
	 */
	 getBool: function(property, def) {},

	/**
	 * <p>return a double value</p>
	 *
	 * @type double
	 * @param (string) return a double value for property
	 * @param (double) optional default value if property is not found
	 */
	 getDouble: function(property, def) {},

	/**
	 * <p>return an integer value</p>
	 *
	 * @type int
	 * @param (string) return a integer value for property
	 * @param (int) optional default value if property is not found
	 */
	 getInt: function(property, def) {},

	/**
	 * <p>return a value as an array</p>
	 *
	 * @type array
	 * @param (string) return an array value for property
	 * @param (array) optional default value if property is not found
	 */
	 getList: function(property, def) {},

	/**
	 * <p>return a string value</p>
	 *
	 * @type string
	 * @param (string) return a string value for property
	 * @param (string) optional default value if property is not found
	 */
	 getString: function(property, def) {},

	/**
	 * <p>returns true if the property exists</p>
	 *
	 * @type boolean
	 * @param (string) property name to check
	 */
	 hasProperty: function(property) {},

	/**
	 * <p>return an array of property propertys</p>
	 *
	 * @type array
	 */
	 listProperties: function() {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * <p>remove an existing property</p>
	 *
	 * @type void
	 * @param (string) property name to remove
	 */
	 removeProperty: function(property) {},

	/**
	 * <p>set a property as a boolean value</p>
	 *
	 * @type void
	 * @param (string) property name
	 * @param (boolean) value
	 */
	 setBool: function(property, value) {},

	/**
	 * <p>set a property as a double value</p>
	 *
	 * @type void
	 * @param (string) property name
	 * @param (double) value
	 */
	 setDouble: function(property, value) {},

	/**
	 * <p>set a property as an integer value</p>
	 *
	 * @type void
	 * @param (string) property name
	 * @param (int) value
	 * @param (string) property name
	 * @param (int) value
	 */
	 setInt: function(property, value, property, value) {},

	/**
	 * <p>set a property as an array value</p>
	 *
	 * @type void
	 * @param (string) property name
	 * @param (array) value
	 */
	 setList: function(property, value) {},

	/**
	 * <p>set a property as a string value</p>
	 *
	 * @type void
	 * @param (string) property name
	 * @param (string) value
	 */
	 setString: function(property, value) {}
};


/**
 * <p>The top level Contacts module.  The Contacts module is used accessing the device Address Book.</p>
 */
Titanium.Contacts = {
	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {}
};


/**
 * <p>The top level Database module.  The Database module is used for creating and accessing the in-application Database. </p>
 */
Titanium.Database = {
	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * <p>install a database from the application Resources folder (at build time) and return a reference to the opened database. it is safe to call this method multiple times since this method will only install once if it doesn't already exist on the device.</p>
	 *
	 * @type object
	 * @param (string) the path (relative to the main application Resources folder at build time) to the db to install. this file must be in the SQLite 3 file format.
	 * @param (string) the name of the database
	 */
	 install: function(path, name) {},

	/**
	 * <p>open a database. if it doesn't yet exist, create it.</p>
	 *
	 * @type object
	 * @param (string) the name of the database
	 */
	 open: function(name) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {}
};


/**
 * <p>The Database instance returned by <a href="Titanium.Database.open-method.html">Titanium.Database.open</a> or <a href="Titanium.Database.install-method.html">Titanium.Database.install</a>. </p>
 */
Titanium.Database.DB = {
	/**
	 * <p>the last row identifier by the last INSERT query</p>
	 * @type int
	 * @final
	 */
	lastInsertRowId: 0,

	/**
	 * <p>the name of the database</p>
	 * @type string
	 * @final
	 */
	name: 0,

	/**
	 * <p>the number of rows affected by the last query</p>
	 * @type int
	 * @final
	 */
	rowsAffected: 0,

	/**
	 * <p>close the database and release resources from memory. once closed, this instance is no longer valid and must no longer be used.</p>
	 *
	 * @type void
	 */
	 close: function() {},

	/**
	 * <p>execute a SQL statement against the database and returns a ResultSet</p>
	 *
	 * @type object
	 * @param (string) the SQL to execute
	 * @param (array,...) one or more optional variable arguments passed to this function or an array of objects to be replaced in the query using <tt>?</tt> substitution.
	 */
	 execute: function(sql, vararg) {},

	/**
	 * <p>remove the database files for this instance from disk. WARNING: this is a destructive operation and cannot be reversed. All data in the database will be lost upon calling this function. Use with caution.</p>
	 *
	 * @type void
	 */
	 remove: function() {}
};


/**
 * <p>The ResultSet instance returned by invoking a database SQL <tt>execute</tt>.</p>
 */
Titanium.Database.ResultSet = {
	/**
	 * <p>the number of rows in the result set</p>
	 * @type int
	 * @final
	 */
	rowCount: 0,

	/**
	 * <p>returns true if the current row is still valid</p>
	 * @type boolean
	 * @final
	 */
	validRow: 0,

	/**
	 * <p>close the result set and release resources. once closed, this result set must no longer be used</p>
	 *
	 * @type void
	 */
	 close: function() {},

	/**
	 * <p>retrieve a row value by field index</p>
	 *
	 * @type object
	 * @param (int) column index (which is zero based)
	 */
	 field: function(index) {},

	/**
	 * <p>retrieve a row value by field name</p>
	 *
	 * @type object
	 * @param (string) column name from SQL query
	 */
	 fieldByName: function(name) {},

	/**
	 * <p>return the number of columns in the result set</p>
	 *
	 * @type int
	 */
	 fieldCount: function() {},

	/**
	 * <p>return the field name for field index</p>
	 *
	 * @type string
	 * @param (int) field name column index (which is zero based)
	 */
	 fieldName: function(index) {},

	/**
	 * <p>return true if the row is a valid row</p>
	 *
	 * @type boolean
	 */
	 isValidRow: function() {},

	/**
	 * <p>iterate to the next row in the result set. returns false if no more results are available</p>
	 *
	 * @type boolean
	 */
	 next: function() {}
};


/**
 * <p>The top level Facebook module.  The Facebook module is used for connecting your application with 
Facebook through Facebook Connect.</p>
 */
Titanium.Facebook = {
	/**
	 * <p>return true if the user has logged in</p>
	 * @type boolean
	 * @final
	 */
	loggedIn: 0,

	/**
	 * <p>return a dictionary of permissions with the keys being the name of the permission and the value being a boolean of true if granted, false if not granted</p>
	 * @type object
	 * @final
	 */
	permissions: 0,

	/**
	 * <p>return the special properties of the session</p>
	 * @type object
	 * @final
	 */
	session: 0,

	/**
	 * <p>the unique user id returned from Facebook. returns 0 if not logged in</p>
	 * @type long
	 * @final
	 */
	userId: 0,

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * create and return an instance of <a href="Titanium.Facebook.LoginButton.html">Titanium.Facebook.LoginButton</a>
	 *
	 * @type object
	 * @param (object) the parameters for the request. the following keys are valid: <tt>apikey</tt> (the application API key), <tt>secret</tt> (the application API secret or null if using a session proxy), <tt>sessionProxy</tt> (the URL to the application session proxy), <tt>style</tt> (the button style - which is either <tt>normal</tt> or <tt>wide</tt>).
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.Facebook.LoginButton.html">Titanium.Facebook.LoginButton</a>
	 */
	 createLoginButton: function(params, parameters) {},

	/**
	 * <p>execute a FB API execute request</p>
	 *
	 * @type void
	 * @param (string) method to execute
	 * @param (object) JSON serializable object or null (if no parameters) to send with the request
	 * @param (function) the callback function to execute upon receiving a response. the result object will contain a <tt>success</tt> boolean to indicate the result.  if <tt>success</tt> is false, the <tt>error</tt> property will give the error message.  the <tt>data</tt> property will contain the result if successfully executed.
	 * @param (object) the data payload for the request. Must either null, a string or a Blob object.
	 */
	 execute: function(method, params, callback, data) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * <p>checks the existing permission and returns true if the user has granted the requested permission</p>
	 *
	 * @type boolean
	 * @param (string) the permission to check
	 */
	 hasPermission: function(permission) {},

	/**
	 * <p>return true if the user has logged in</p>
	 *
	 * @type void
	 */
	 isLoggedIn: function() {},

	/**
	 * <p>execute a stream request to FB</p>
	 *
	 * @type void
	 * @param (string) the title of the stream post
	 * @param (object) the data to include in the post. Must be JSON serializable or null.
	 * @param (string) the target user id to publish the stream or null if the logged in users account
	 * @param (function) the callback function to execute upon receiving a response. the result object will contain a <tt>success</tt> boolean to indicate the result.  if <tt>success</tt> is false, the <tt>error</tt> property will give the error message.  the <tt>data</tt> property will contain the result if successfully executed. the <tt>cancel</tt> property will be set to true if the user cancelled the dialog.
	 */
	 publishStream: function(title, data, target, callback) {},

	/**
	 * <p>execute a FQL query against the FB API</p>
	 *
	 * @type void
	 * @param (string) the FQL query to execute
	 * @param (function) the callback to execute with results once the query is completed. the result object will contain a <tt>success</tt> boolean to indicate the result.  if <tt>success</tt> is false, the <tt>error</tt> property will give the error message.  the <tt>data</tt> property will contain the result if successfully executed.
	 */
	 query: function(fql, callback) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * <p>request a special permission from the user</p>
	 *
	 * @type void
	 * @param (string) name of the permission
	 * @param (function) the callback function to execute upon receiving a response. the result object will contain a <tt>success</tt> boolean to indicate the result.  if <tt>success</tt> is false, the <tt>error</tt> property will give the error message.  the <tt>data</tt> property will contain the result if successfully executed. the <tt>cancel</tt> property will be set to true if the user cancelled the dialog.
	 */
	 requestPermission: function(permission, callback) {}
};


/**
 * <p>The Login Button created by <a href="Titanium.Facebook.createLoginButton-method.html">Titanium.Facebook.createLoginButton</a>.</p>
 */
Titanium.Facebook.LoginButton = {
	/**
	 * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
	 * @type object
	 * @final
	 */
	anchorPoint: 0,

	/**
	 * read-only object with x and y properties of where the view is during animation
	 * @type object
	 * @final
	 */
	animatedCenterPoint: 0,

	/**
	 * the background color of the view
	 * @type string
	 * @final
	 */
	backgroundColor: 0,

	/**
	 * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
	 * @type object
	 * @final
	 */
	backgroundGradient: 0,

	/**
	 * the background image url of the view
	 * @type string
	 * @final
	 */
	backgroundImage: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
	 * @type float
	 * @final
	 */
	backgroundLeftCap: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
	 * @type float
	 * @final
	 */
	backgroundTopCap: 0,

	/**
	 * the border color of the view
	 * @type string
	 * @final
	 */
	borderColor: 0,

	/**
	 * the border radius of the view
	 * @type float
	 * @final
	 */
	borderRadius: 0,

	/**
	 * the border width of the view
	 * @type float
	 * @final
	 */
	borderWidth: 0,

	/**
	 * property for the view bottom position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	bottom: 0,

	/**
	 * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
	 * @type object
	 * @final
	 */
	center: 0,

	/**
	 * property for the view height. can be either float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	height: 0,

	/**
	 * property for the view left position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	left: 0,

	/**
	 * the opacity from 0.0-1.0
	 * @type float
	 * @final
	 */
	opacity: 0,

	/**
	 * property for the view right position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	right: 0,

	/**
	 * the size of the view as a dictionary of width and height properties
	 * @type object
	 * @final
	 */
	size: 0,

	/**
	 * property for the view top position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	top: 0,

	/**
	 * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
	 * @type boolean
	 * @final
	 */
	touchEnabled: 0,

	/**
	 * the transformation matrix to apply to the view
	 * @type object
	 * @final
	 */
	transform: 0,

	/**
	 * a boolean of the visibility of the view
	 * @type boolean
	 * @final
	 */
	visible: 0,

	/**
	 * property for the view width. can either be `auto`, a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	width: 0,

	/**
	 * the z index position relative to other sibling views
	 * @type int
	 * @final
	 */
	zIndex: 0,

	/**
	 * add a child to the view hierarchy
	 *
	 * @type void
	 * @param (object) the view to add to this views hiearchy
	 */
	 add: function(view) {},

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * animate the view
	 *
	 * @type void
	 * @param (object) either a dictionary of animation properties or an Animation object
	 * @param (function) function to be invoked upon completion of the animation
	 */
	 animate: function(obj, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * hide the view
	 *
	 * @type void
	 */
	 hide: function() {},

	/**
	 * remove a previously add view from the view hiearchy
	 *
	 * @type void
	 * @param (object) the view to remove from this views hiearchy
	 */
	 remove: function(view) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * make the view visible
	 *
	 * @type void
	 */
	 show: function() {},

	/**
	 * return a Blob image of the rendered view
	 *
	 * @type object
	 * @param (function) function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
	 */
	 toImage: function(f) {}
};


/**
 * <p>The top level Filesystem module.  The Filesystem module is used for reading and saving files and 
directories on the device.</p>
 */
Titanium.Filesystem = {
	/**
	 * <p>constant for append mode for file operations</p>
	 * @type int
	 * @final
	 */
	MODE_APPEND: 0,

	/**
	 * <p>constant for read mode for file operations</p>
	 * @type int
	 * @final
	 */
	MODE_READ: 0,

	/**
	 * <p>constant for write mode for file operations</p>
	 * @type int
	 * @final
	 */
	MODE_WRITE: 0,

	/**
	 * <p>readonly constant where your application data directory is located. this directory should be used to place applications-specific files. on iPhone, this directory is also backed up.</p>
	 * @type string
	 * @final
	 */
	applicationDataDirectory: 0,

	/**
	 * <p>readonly constant where your application is located</p>
	 * @type string
	 * @final
	 */
	applicationDirectory: 0,

	/**
	 * <p>readonly platform specific line ending constant</p>
	 * @type string
	 * @final
	 */
	lineEnding: 0,

	/**
	 * <p>readonly constant where your application resources are located</p>
	 * @type string
	 * @final
	 */
	resourcesDirectory: 0,

	/**
	 * <p>readonly path separator constant</p>
	 * @type string
	 * @final
	 */
	separator: 0,

	/**
	 * <p>readonly constant where your application can place temporary files</p>
	 * @type string
	 * @final
	 */
	tempDirectory: 0,

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * <p>create temp file and return a <a href="Titanium.Filesystem.File.html">Titanium.Filesystem.File</a></p>
	 *
	 * @type Titanium.Filesystem.File
	 */
	 createTempDirectory: function() {},

	/**
	 * <p>create a temp file and return a <a href="Titanium.Filesystem.File.html">Titanium.Filesystem.File</a></p>
	 *
	 * @type Titanium.Filesystem.File
	 */
	 createTempFile: function() {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * <p>return a fully formed file path as a <a href="Titanium.Filesystem.File.html">Titanium.Filesystem.File</a> object</p>
	 *
	 * @type Titanium.Filesystem.File
	 * @param (string) one or more path arguments to form the full path joined together with the platform specific path separator. if a relative path is passed, the full path will be relative to the application resource folder.
	 */
	 getFile: function(path) {},

	/**
	 * <p>returns true if the device supports external storage such as an SD card</p>
	 *
	 * @type boolean
	 */
	 isExteralStoragePresent: function() {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {}
};


/**
 * <p>The top level Geolocation module.  The Geolocation module is used for accessing device location based information.</p>
 */
Titanium.Geolocation = {
	/**
	 * <p>accuracy constant</p>
	 * @type int
	 * @final
	 */
	ACCURACY_BEST: 0,

	/**
	 * <p>accuracy constant</p>
	 * @type int
	 * @final
	 */
	ACCURACY_HUNDRED_METERS: 0,

	/**
	 * <p>accuracy constant</p>
	 * @type int
	 * @final
	 */
	ACCURACY_KILOMETER: 0,

	/**
	 * <p>accuracy constant</p>
	 * @type int
	 * @final
	 */
	ACCURACY_NEAREST_TEN_METERS: 0,

	/**
	 * <p>accuracy constant</p>
	 * @type int
	 * @final
	 */
	ACCURACY_THREE_KILOMETERS: 0,

	/**
	 * <p>returns true if the user has enabled or disable location services for the device (not the application).  This is an iPhone only property.</p>
	 * @type boolean
	 * @final
	 */
	locationServicesEnabled: 0,

	/**
	 * <p>returns true if the calibration UI can show</p>
	 * @type boolean
	 * @final
	 */
	showCalibration: 0,

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * <p>configure the calibration UI. set the false to disable the calibration display.</p>
	 *
	 * @type void
	 */
	 setShowCalibration: function() {}
};


/**
 * <p>The top level Gestures module.  The Gesture module is responsible for high level device gestures that are device-wide.</p>
 */
Titanium.Gesture = {
	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {}
};


/**
 * <p>The top level Map module.  The Map module is used for creating in-application native maps.</p>
 */
Titanium.Map = {
	/**
	 * <p>The head of the pin is green. Green pins indicate starting points on the map.</p>
	 * @type int
	 * @final
	 */
	ANNOTATION_GREEN: 0,

	/**
	 * <p>The head of the pin is purple. Purple pins indicate user-specified points on the map.</p>
	 * @type int
	 * @final
	 */
	ANNOTATION_PURPLE: 0,

	/**
	 * <p>The head of the pin is red. Red pins indicate destination points on the map.</p>
	 * @type int
	 * @final
	 */
	ANNOTATION_RED: 0,

	/**
	 * <p>Displays a satellite image of the area with road and road name information layered on top.</p>
	 * @type int
	 * @final
	 */
	HYBRID_TYPE: 0,

	/**
	 * <p>Displays satellite imagery of the area.</p>
	 * @type int
	 * @final
	 */
	SATELLITE_TYPE: 0,

	/**
	 * <p>Displays a street map that shows the position of all roads and some road names.</p>
	 * @type int
	 * @final
	 */
	STANDARD_TYPE: 0,

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * create and return an instance of <a href="Titanium.Map.Annotation.html">Titanium.Map.Annotation</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.Map.Annotation.html">Titanium.Map.Annotation</a>
	 */
	 createAnnotation: function(parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.Map.MapView.html">Titanium.Map.MapView</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.Map.MapView.html">Titanium.Map.MapView</a>
	 */
	 createMapView: function(parameters) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {}
};


/**
 * <p>An Annotation object that is created by the method <a href="Titanium.Map.createAnnotation.html">Titanium.Map.createAnnotation</a>. This object gives you low level control over annotations that can be added to a Map View.</p>
 */
Titanium.Map.Annotation = {
	/**
	 * <p>boolean to indicate whether the pin should animate when dropped</p>
	 * @type boolean
	 * @final
	 */
	animate: 0,

	/**
	 * <p>the left button image on the annotation. must either be a button type constant or url</p>
	 * @type int,string
	 * @final
	 */
	leftButton: 0,

	/**
	 * <p>a left view that is displayed on the annotation</p>
	 * @type object
	 * @final
	 */
	leftView: 0,

	/**
	 * <p>the pin color as one of <a href="Titanium.Map.ANNOTATION_RED.html">Titanium.Map.ANNOTATION_RED</a>, <a href="Titanium.Map.ANNOTATION_GREEN.html">Titanium.Map.ANNOTATION_GREEN</a> or <a href="Titanium.Map.ANNOTATION_PURPLE.html">Titanium.Map.ANNOTATION_PURPLE</a>.</p>
	 * @type int
	 * @final
	 */
	pincolor: 0,

	/**
	 * <p>the right button image on the annotation. must either be a button type constant or url</p>
	 * @type int,string
	 * @final
	 */
	rightButton: 0,

	/**
	 * <p>a right view that is displayed on the annotation</p>
	 * @type object
	 * @final
	 */
	rightView: 0,

	/**
	 * <p>the secondary title of the annotation view</p>
	 * @type string
	 * @final
	 */
	subtitle: 0,

	/**
	 * <p>the primary title of the annotation view</p>
	 * @type string
	 * @final
	 */
	title: 0,

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {}
};


/**
 * <p>The MapView is an object created by <a href="Titanium.Map.createView">Titanium.Map.createView</a> and is used for embedding native mapping capabilities as a view in your application.  With native maps, you can control the mapping location, the type of map, the zoom level and you can add custom annotations directly to the map.</p>
 */
Titanium.Map.MapView = {
	/**
	 * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
	 * @type object
	 * @final
	 */
	anchorPoint: 0,

	/**
	 * <p>boolean is mapping actions should be animated</p>
	 * @type boolean
	 * @final
	 */
	animate: 0,

	/**
	 * read-only object with x and y properties of where the view is during animation
	 * @type object
	 * @final
	 */
	animatedCenterPoint: 0,

	/**
	 * <p>an array of annotations to add to the map</p>
	 * @type array
	 * @final
	 */
	annotations: 0,

	/**
	 * the background color of the view
	 * @type string
	 * @final
	 */
	backgroundColor: 0,

	/**
	 * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
	 * @type object
	 * @final
	 */
	backgroundGradient: 0,

	/**
	 * the background image url of the view
	 * @type string
	 * @final
	 */
	backgroundImage: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
	 * @type float
	 * @final
	 */
	backgroundLeftCap: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
	 * @type float
	 * @final
	 */
	backgroundTopCap: 0,

	/**
	 * the border color of the view
	 * @type string
	 * @final
	 */
	borderColor: 0,

	/**
	 * the border radius of the view
	 * @type float
	 * @final
	 */
	borderRadius: 0,

	/**
	 * the border width of the view
	 * @type float
	 * @final
	 */
	borderWidth: 0,

	/**
	 * property for the view bottom position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	bottom: 0,

	/**
	 * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
	 * @type object
	 * @final
	 */
	center: 0,

	/**
	 * property for the view height. can be either float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	height: 0,

	/**
	 * property for the view left position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	left: 0,

	/**
	 * <p>a dictionary that specifies the following properties specifying the region location to set the map: <tt>latitudeDelta</tt>, <tt>longitudeDelta</tt>, <tt>latitude</tt>, <tt>longitude</tt>.</p>
	 * @type object
	 * @final
	 */
	location: 0,

	/**
	 * <p>the map type constant of either <a href="Titanium.Map.STANDARD_TYPE-property.html">Titanium.Map.STANDARD_TYPE</a>, <a href="Titanium.Map.SATELLITE_TYPE-property.html">Titanium.Map.SATELLITE_TYPE</a> or <a href="Titanium.Map.HYBRID_TYPE-property.html">Titanium.Map.HYBRID_TYPE</a>.</p>
	 * @type int
	 * @final
	 */
	mapType: 0,

	/**
	 * the opacity from 0.0-1.0
	 * @type float
	 * @final
	 */
	opacity: 0,

	/**
	 * <p>a dictionary that specifies the following properties specifying the region location to set the map: <tt>latitudeDelta</tt>, <tt>longitudeDelta</tt>, <tt>latitude</tt>, <tt>longitude</tt>.</p>
	 * @type object
	 * @final
	 */
	region: 0,

	/**
	 * <p>boolean to indicate if the map should attempt to fit the map view into the region in the visible view</p>
	 * @type boolean
	 * @final
	 */
	regionFit: 0,

	/**
	 * property for the view right position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	right: 0,

	/**
	 * the size of the view as a dictionary of width and height properties
	 * @type object
	 * @final
	 */
	size: 0,

	/**
	 * property for the view top position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	top: 0,

	/**
	 * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
	 * @type boolean
	 * @final
	 */
	touchEnabled: 0,

	/**
	 * the transformation matrix to apply to the view
	 * @type object
	 * @final
	 */
	transform: 0,

	/**
	 * <p>boolean to indicate if the map should show the user's current device location as a pin on the map</p>
	 * @type boolean
	 * @final
	 */
	userLocation: 0,

	/**
	 * a boolean of the visibility of the view
	 * @type boolean
	 * @final
	 */
	visible: 0,

	/**
	 * property for the view width. can either be `auto`, a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	width: 0,

	/**
	 * the z index position relative to other sibling views
	 * @type int
	 * @final
	 */
	zIndex: 0,

	/**
	 * add a child to the view hierarchy
	 *
	 * @type void
	 * @param (object) the view to add to this views hiearchy
	 */
	 add: function(view) {},

	/**
	 * <p>add a new annotation to the map</p>
	 *
	 * @type void
	 * @param (object) either a dictionary of properties for the annotation or a [Titanium.Map.Annotation](Titanium.Map.Annotation) instance.
	 */
	 addAnnotation: function(annotation) {},

	/**
	 * <p>add one or more new annotation to the map</p>
	 *
	 * @type void
	 * @param (array) an array of either a dictionary of properties for the annotation or a [Titanium.Map.Annotation](Titanium.Map.Annotation) instance.
	 */
	 addAnnotations: function(annotations) {},

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * animate the view
	 *
	 * @type void
	 * @param (object) either a dictionary of animation properties or an Animation object
	 * @param (function) function to be invoked upon completion of the animation
	 */
	 animate: function(obj, callback) {},

	/**
	 * <p>cause the annotation to be deselected (hidden)</p>
	 *
	 * @type void
	 * @param (string,object) either a string of the annotation title or a [Titanium.Map.Annotation](Titanium.Map.Annotation) reference.
	 */
	 deselectAnnotation: function(annotation) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * hide the view
	 *
	 * @type void
	 */
	 hide: function() {},

	/**
	 * remove a previously add view from the view hiearchy
	 *
	 * @type void
	 * @param (object) the view to remove from this views hiearchy
	 */
	 remove: function(view) {},

	/**
	 * <p>removes all annotations added to the map</p>
	 *
	 * @type void
	 */
	 removeAllAnnotations: function() {},

	/**
	 * <p>remove an existing annotation from the map</p>
	 *
	 * @type void
	 * @param (string,object) either a string of the annotation title or a [Titanium.Map.Annotation](Titanium.Map.Annotation) reference.
	 */
	 removeAnnotation: function(annotation) {},

	/**
	 * <p>remove one or more existing annotations from the map</p>
	 *
	 * @type void
	 * @param (array) an array of either a string of the annotation title or a [Titanium.Map.Annotation](Titanium.Map.Annotation) reference.
	 */
	 removeAnnotations: function(annotation) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * <p>cause the annotation to be selected (shown)</p>
	 *
	 * @type void
	 * @param (string,object) either a string of the annotation title or a [Titanium.Map.Annotation](Titanium.Map.Annotation) reference.
	 */
	 selectAnnotation: function(annotation) {},

	/**
	 * make the view visible
	 *
	 * @type void
	 */
	 show: function() {},

	/**
	 * return a Blob image of the rendered view
	 *
	 * @type object
	 * @param (function) function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
	 */
	 toImage: function(f) {},

	/**
	 * <p>zoom in or out of the map</p>
	 *
	 * @type void
	 * @param (double) zoom level (can be positive or negative)
	 */
	 zoom: function(level) {}
};


/**
 * <p>The top level Media module.  The Media module is used accessing the device's media related  functionality such as playing audio or recording video.</p>
 */
Titanium.Media = {
	/**
	 * <p>audio file format 3GPP-2</p>
	 * @type int
	 * @final
	 */
	AUDIO_FILEFORMAT_3GP2: 0,

	/**
	 * <p>audio file format 3GPP</p>
	 * @type int
	 * @final
	 */
	AUDIO_FILEFORMAT_3GPP: 0,

	/**
	 * <p>audio file format AIFF</p>
	 * @type int
	 * @final
	 */
	AUDIO_FILEFORMAT_AIFF: 0,

	/**
	 * <p>audio file format AMR</p>
	 * @type int
	 * @final
	 */
	AUDIO_FILEFORMAT_AMR: 0,

	/**
	 * <p>audio file format Apple Compressed Audio Format (CAF)</p>
	 * @type int
	 * @final
	 */
	AUDIO_FILEFORMAT_CAF: 0,

	/**
	 * <p>audio file format MP3</p>
	 * @type int
	 * @final
	 */
	AUDIO_FILEFORMAT_MP3: 0,

	/**
	 * <p>audio file format MP4</p>
	 * @type int
	 * @final
	 */
	AUDIO_FILEFORMAT_MP4: 0,

	/**
	 * <p>audio file format MP4A</p>
	 * @type int
	 * @final
	 */
	AUDIO_FILEFORMAT_MP4A: 0,

	/**
	 * <p>audio file format WAVE</p>
	 * @type int
	 * @final
	 */
	AUDIO_FILEFORMAT_WAVE: 0,

	/**
	 * <p>audio format MPEG4 AAC encoding</p>
	 * @type int
	 * @final
	 */
	AUDIO_FORMAT_AAC: 0,

	/**
	 * <p>audio format 8-bit aLaw encoding</p>
	 * @type int
	 * @final
	 */
	AUDIO_FORMAT_ALAW: 0,

	/**
	 * <p>audio format apple lossless encoding</p>
	 * @type int
	 * @final
	 */
	AUDIO_FORMAT_APPLE_LOSSLESS: 0,

	/**
	 * <p>audio format iLBC encoding</p>
	 * @type int
	 * @final
	 */
	AUDIO_FORMAT_ILBC: 0,

	/**
	 * <p>audio format Apple IMA4 encoding</p>
	 * @type int
	 * @final
	 */
	AUDIO_FORMAT_IMA4: 0,

	/**
	 * <p>audio format Linear 16-bit, PCM encoding</p>
	 * @type int
	 * @final
	 */
	AUDIO_FORMAT_LINEAR_PCM: 0,

	/**
	 * <p>audio format 8-bit muLaw encoding</p>
	 * @type int
	 * @final
	 */
	AUDIO_FORMAT_ULAW: 0,

	/**
	 * <p>constant for line type headphones</p>
	 * @type int
	 * @final
	 */
	AUDIO_HEADPHONES: 0,

	/**
	 * <p>constant line type headphones and microphone</p>
	 * @type int
	 * @final
	 */
	AUDIO_HEADPHONES_AND_MIC: 0,

	/**
	 * <p>constant line type headset in/out</p>
	 * @type int
	 * @final
	 */
	AUDIO_HEADSET_INOUT: 0,

	/**
	 * <p>constant line type line out</p>
	 * @type int
	 * @final
	 */
	AUDIO_LINEOUT: 0,

	/**
	 * <p>constant line type microphone</p>
	 * @type int
	 * @final
	 */
	AUDIO_MICROPHONE: 0,

	/**
	 * <p>constant line type muted switch is on</p>
	 * @type int
	 * @final
	 */
	AUDIO_MUTED: 0,

	/**
	 * <p>constant line type receiver and microphone</p>
	 * @type int
	 * @final
	 */
	AUDIO_RECEIVER_AND_MIC: 0,

	/**
	 * <p>For long-duration sounds such as rain, car engine noise, and so on. It is also for 'play along' style applications, such a virtual piano that a user plays over iPod audio.</p>
	 * @type int
	 * @final
	 */
	AUDIO_SESSION_MODE_AMBIENT: 0,

	/**
	 * <p>For playing recorded music or other sounds that are central to the successful use of your application. When using this mode, your application audio continues with the Ring/Silent switch set to silent or when the screen locks. This property normally disallows iPod audio to mix with application audio</p>
	 * @type int
	 * @final
	 */
	AUDIO_SESSION_MODE_PLAYBACK: 0,

	/**
	 * <p>Allows recording (input) and playback (output) of audio, such as for a VOIP (voice over IP) application. This category is appropriate for simultaneous recording and playback, and also for applications that record and play back but not simultaneously. If you want to ensure that sounds such as Messages alerts do not play while your application is recording, use  <a href="Titanium.Media.AUDIO_SESSION_MODE_RECORD-property.html">Titanium.Media.AUDIO_SESSION_MODE_RECORD</a> instead. This category normally disallows iPod audio to mix with application audio.</p>
	 * @type int
	 * @final
	 */
	AUDIO_SESSION_MODE_PLAY_AND_RECORD: 0,

	/**
	 * <p>For recording audio; it silences playback audio.</p>
	 * @type int
	 * @final
	 */
	AUDIO_SESSION_MODE_RECORD: 0,

	/**
	 * <p>The solo ambient sound category is for long-duration sounds such as rain, car engine noise, and so on. When you use this category, audio from built-in applications, such as the iPod, is silenced. Your audio is silenced when the Ring/Silent switch is set to <tt>silent</tt> or when the screen locks.</p>
	 * @type int
	 * @final
	 */
	AUDIO_SESSION_MODE_SOLO_AMBIENT: 0,

	/**
	 * <p>constant line type speaker</p>
	 * @type int
	 * @final
	 */
	AUDIO_SPEAKER: 0,

	/**
	 * <p>constant line type unavailable</p>
	 * @type int
	 * @final
	 */
	AUDIO_UNAVAILABLE: 0,

	/**
	 * <p>constant line type unknown or not determined</p>
	 * @type int
	 * @final
	 */
	AUDIO_UNKNOWN: 0,

	/**
	 * <p>constant for media device busy error</p>
	 * @type int
	 * @final
	 */
	DEVICE_BUSY: 0,

	/**
	 * <p>media type constant to signify photo</p>
	 * @type int
	 * @final
	 */
	MEDIA_TYPE_PHOTO: 0,

	/**
	 * <p>media type constant to signify video</p>
	 * @type int
	 * @final
	 */
	MEDIA_TYPE_VIDEO: 0,

	/**
	 * <p>constant for media no camera error</p>
	 * @type int
	 * @final
	 */
	NO_CAMERA: 0,

	/**
	 * <p>constant for media no video error</p>
	 * @type int
	 * @final
	 */
	NO_VIDEO: 0,

	/**
	 * <p>media type constant to use high-quality video recording. Recorded files are suitable for on-device playback and for wired transfer to the Desktop using Image Capture; they are likely to be too large for transfer using Wi-Fi.</p>
	 * @type int
	 * @final
	 */
	QUALITY_HIGH: 0,

	/**
	 * <p>media type constant to use use low-quality video recording. Recorded files can usually be transferred over the cellular network.</p>
	 * @type int
	 * @final
	 */
	QUALITY_LOW: 0,

	/**
	 * <p>media type constant to use medium-quality video recording. Recorded files can usually be transferred using Wi-Fi. This is the default video quality setting.</p>
	 * @type int
	 * @final
	 */
	QUALITY_MEDIUM: 0,

	/**
	 * <p>constant for unknown media error</p>
	 * @type int
	 * @final
	 */
	UNKNOWN_ERROR: 0,

	/**
	 * <p>constant for video controls default</p>
	 * @type int
	 * @final
	 */
	VIDEO_CONTROL_DEFAULT: 0,

	/**
	 * <p>Controls for an embedded view. Used in conjunction with movieControlStyle property of <a href="Titanium.Media.VideoPlayer.html">Titanium.Media.VideoPlayer</a> in iPhone 3.2+</p>
	 * @type int
	 * @final
	 */
	VIDEO_CONTROL_EMBEDDED: 0,

	/**
	 * <p>Controls for fullscreen. Used in conjunction with movieControlStyle property of <a href="Titanium.Media.VideoPlayer.html">Titanium.Media.VideoPlayer</a> in iPhone 3.2+</p>
	 * @type int
	 * @final
	 */
	VIDEO_CONTROL_FULLSCREEN: 0,

	/**
	 * <p>constant for video controls hidden</p>
	 * @type int
	 * @final
	 */
	VIDEO_CONTROL_HIDDEN: 0,

	/**
	 * <p>No controls. Used in conjunction with movieControlStyle property of <a href="Titanium.Media.VideoPlayer.html">Titanium.Media.VideoPlayer</a> in iPhone 3.2+</p>
	 * @type int
	 * @final
	 */
	VIDEO_CONTROL_NONE: 0,

	/**
	 * <p>constant for video controls volume only</p>
	 * @type int
	 * @final
	 */
	VIDEO_CONTROL_VOLUME_ONLY: 0,

	/**
	 * <p>the video playback ended normally</p>
	 * @type int
	 * @final
	 */
	VIDEO_FINISH_REASON_PLAYBACK_ENDED: 0,

	/**
	 * <p>the video playback ended abnormally</p>
	 * @type int
	 * @final
	 */
	VIDEO_FINISH_REASON_PLAYBACK_ERROR: 0,

	/**
	 * <p>the video playback ended by user action (such as clicking the <tt>Done</tt> button)</p>
	 * @type int
	 * @final
	 */
	VIDEO_FINISH_REASON_USER_EXITED: 0,

	/**
	 * <p>the current media is playable</p>
	 * @type int
	 * @final
	 */
	VIDEO_LOAD_STATE_PLAYABLE: 0,

	/**
	 * <p>playback will be automatically started in this state when <tt>autoplay</tt> is true</p>
	 * @type int
	 * @final
	 */
	VIDEO_LOAD_STATE_PLAYTHROUGH_OK: 0,

	/**
	 * <p>playback will be automatically paused in this state, if started</p>
	 * @type int
	 * @final
	 */
	VIDEO_LOAD_STATE_STALLED: 0,

	/**
	 * <p>the current load state is not known</p>
	 * @type int
	 * @final
	 */
	VIDEO_LOAD_STATE_UNKNOWN: 0,

	/**
	 * <p>A audio type of media in the movie returned by <a href="Titanium.Media.VideoPlayer.html">Titanium.Media.VideoPlayer</a> <tt>mediaTypes</tt> property</p>
	 * @type int
	 * @final
	 */
	VIDEO_MEDIA_TYPE_AUDIO: 0,

	/**
	 * <p>An unknown type of media in the movie returned by <a href="Titanium.Media.VideoPlayer.html">Titanium.Media.VideoPlayer</a> <tt>mediaTypes</tt> property.</p>
	 * @type int
	 * @final
	 */
	VIDEO_MEDIA_TYPE_NONE: 0,

	/**
	 * <p>A video type of media in the movie returned by <a href="Titanium.Media.VideoPlayer.html">Titanium.Media.VideoPlayer</a> <tt>mediaTypes</tt> property</p>
	 * @type int
	 * @final
	 */
	VIDEO_MEDIA_TYPE_VIDEO: 0,

	/**
	 * <p>playback has been interrupted</p>
	 * @type int
	 * @final
	 */
	VIDEO_PLAYBACK_STATE_INTERRUPTED: 0,

	/**
	 * <p>playback is paused</p>
	 * @type int
	 * @final
	 */
	VIDEO_PLAYBACK_STATE_PAUSED: 0,

	/**
	 * <p>playback is playing</p>
	 * @type int
	 * @final
	 */
	VIDEO_PLAYBACK_STATE_PLAYING: 0,

	/**
	 * <p>playback is rewinding</p>
	 * @type int
	 * @final
	 */
	VIDEO_PLAYBACK_STATE_SEEKING_BACKWARD: 0,

	/**
	 * <p>playback is seeking forward</p>
	 * @type int
	 * @final
	 */
	VIDEO_PLAYBACK_STATE_SEEKING_FORWARD: 0,

	/**
	 * <p>playback has stopped</p>
	 * @type int
	 * @final
	 */
	VIDEO_PLAYBACK_STATE_STOPPED: 0,

	/**
	 * <p>the video will not repeat</p>
	 * @type int
	 * @final
	 */
	VIDEO_REPEAT_MODE_NONE: 0,

	/**
	 * <p>the video will repeat once</p>
	 * @type int
	 * @final
	 */
	VIDEO_REPEAT_MODE_ONE: 0,

	/**
	 * <p>constant for video aspect where the movie will be scaled until the movie fills the entire screen. Content at the edges of the larger of the two dimensions is clipped so that the other dimension fits the screen exactly. The aspect ratio of the movie is preserved.</p>
	 * @type int
	 * @final
	 */
	VIDEO_SCALING_ASPECT_FILL: 0,

	/**
	 * <p>constant for video aspect fit where the movie will be scaled until one dimension fits on the screen exactly. In the other dimension, the region between the edge of the movie and the edge of the screen is filled with a black bar. The aspect ratio of the movie is preserved.</p>
	 * @type int
	 * @final
	 */
	VIDEO_SCALING_ASPECT_FIT: 0,

	/**
	 * <p>constant for video aspect where the movie will be scaled until both dimensions fit the screen exactly. The aspect ratio of the movie is not preserved.</p>
	 * @type int
	 * @final
	 */
	VIDEO_SCALING_MODE_FILL: 0,

	/**
	 * <p>constant for video scaling where the scaling is turn off. The movie will not be scaled.</p>
	 * @type int
	 * @final
	 */
	VIDEO_SCALING_NONE: 0,

	/**
	 * <p>the video source type is a file. Related to the <tt>sourceType</tt> property of <a href="Titanium.Media.VideoPlayer.html">Titanium.Media.VideoPlayer</a></p>
	 * @type int
	 * @final
	 */
	VIDEO_SOURCE_TYPE_FILE: 0,

	/**
	 * <p>the video source type is a remote stream. Related to the <tt>sourceType</tt> property of <a href="Titanium.Media.VideoPlayer.html">Titanium.Media.VideoPlayer</a></p>
	 * @type int
	 * @final
	 */
	VIDEO_SOURCE_TYPE_STREAMING: 0,

	/**
	 * <p>the video source type is unknown. Related to the <tt>sourceType</tt> property of <a href="Titanium.Media.VideoPlayer.html">Titanium.Media.VideoPlayer</a></p>
	 * @type int
	 * @final
	 */
	VIDEO_SOURCE_TYPE_UNKNOWN: 0,

	/**
	 * <p>use the exact time</p>
	 * @type int
	 * @final
	 */
	VIDEO_TIME_OPTION_EXACT: 0,

	/**
	 * <p>use the closest keyframe in the time</p>
	 * @type int
	 * @final
	 */
	VIDEO_TIME_OPTION_NEAREST_KEYFRAME: 0,

	/**
	 * <p>returns the line type constant for the current line type</p>
	 * @type int
	 * @final
	 */
	audioLineType: 0,

	/**
	 * <p>returns true if the device is playing audio</p>
	 * @type boolean
	 * @final
	 */
	audioPlaying: 0,

	/**
	 * <p>return an array of media type constants supported for the camera</p>
	 * @type array
	 * @final
	 */
	availableCameraMediaTypes: 0,

	/**
	 * <p>return an array of media type constants supported for saving to the photo gallery</p>
	 * @type array
	 * @final
	 */
	availablePhotoGalleryMediaTypes: 0,

	/**
	 * <p>return an array of media type constants supported for the photo</p>
	 * @type array
	 * @final
	 */
	availablePhotoMediaTypes: 0,

	/**
	 * <p>return the current average microphone level in dB or -1 if microphone monitoring is disabled</p>
	 * @type float
	 * @final
	 */
	averageMicrophonePower: 0,

	/**
	 * <p>a constant for the default audio session mode to be used. One of <a href="Titanium.Media.AUDIO_SESSION_MODE_AMBIENT-property.html">Titanium.Media.AUDIO_SESSION_MODE_AMBIENT</a>, <a href="Titanium.Media.AUDIO_SESSION_MODE_SOLO_AMBIENT-property.html">Titanium.Media.AUDIO_SESSION_MODE_SOLO_AMBIENT</a> <a href="Titanium.Media.AUDIO_SESSION_MODE_PLAYBACK-property.html">Titanium.Media.AUDIO_SESSION_MODE_PLAYBACK</a> <a href="Titanium.Media.AUDIO_SESSION_MODE_RECORD-property.html">Titanium.Media.AUDIO_SESSION_MODE_RECORD</a>, <a href="Titanium.Media.AUDIO_SESSION_MODE_PLAY_AND_RECORD-property.html">Titanium.Media.AUDIO_SESSION_MODE_PLAY_AND_RECORD</a>.</p>
	 * @type int
	 * @final
	 */
	defaultAudioSessionMode: 0,

	/**
	 * <p>return the current microphone level peak power in dB or -1 if microphone monitoring is disabled</p>
	 * @type float
	 * @final
	 */
	peakMicrophonePower: 0,

	/**
	 * <p>the current volume of the playback device</p>
	 * @type float
	 * @final
	 */
	volume: 0,

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * <p>play a device beep notification</p>
	 *
	 * @type void
	 */
	 beep: function() {},

	/**
	 * create and return an instance of <a href="Titanium.Media.AudioPlayer.html">Titanium.Media.AudioPlayer</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.Media.AudioPlayer.html">Titanium.Media.AudioPlayer</a>
	 */
	 createAudioPlayer: function(parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.Media.AudioRecorder.html">Titanium.Media.AudioRecorder</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.Media.AudioRecorder.html">Titanium.Media.AudioRecorder</a>
	 */
	 createAudioRecorder: function(parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.Media.Sound.html">Titanium.Media.Sound</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.Media.Sound.html">Titanium.Media.Sound</a>
	 */
	 createSound: function(parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.Media.VideoPlayer.html">Titanium.Media.VideoPlayer</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.Media.VideoPlayer.html">Titanium.Media.VideoPlayer</a>
	 */
	 createVideoPlayer: function(parameters) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * <p>hide the device camera UI. this must be called after calling <tt>showCamera</tt> and only when <tt>autohide</tt> is set to false. this method will cause the media capture device be hidden.</p>
	 *
	 * @type void
	 */
	 hideCamera: function() {},

	/**
	 * <p>return boolean to indicate if the device has camera support</p>
	 *
	 * @type boolean
	 */
	 isCameraSupported: function() {},

	/**
	 * <p>return boolean to indicate if the media type is supported</p>
	 *
	 * @type boolean
	 * @param (string) media type as a string of either <tt>camera</tt>, <tt>photo</tt> or <tt>photogallery</tt>.
	 * @param (string) the type of media to check
	 */
	 isMediaTypeSupported: function(media, type) {},

	/**
	 * <p>open the photo gallery picker</p>
	 *
	 * @type void
	 * @param (object) pass a dictionary with the following supported keys: <tt>success</tt> a function that will be called when the camera is completed, <tt>error</tt> a function that will be called upon receiving an error, <tt>cancel</tt> a function that will be called if the user presses the cancel button, <tt>autohide</tt> boolean if the camera should auto hide after the media capture is completed (defaults to true), <tt>animated</tt> boolean if the dialog should be animated (defaults to true) upon showing and hiding, <tt>saveToPhotoGallery</tt> boolean if the media should be saved to the photo gallery upon successful capture, <tt>allowEditing</tt> boolean if the media should be editable after capture in the UI interface, <tt>mediaTypes</tt> an array of media type constants supported by the capture device UI, <tt>showControls</tt> boolean to indicate if the built-in UI controls should be displayed, <tt>overlay</tt> view which is added as an overlay to the UI (on top), <tt>transform</tt> an transformation matrix that applies to the UI transform. For iPad, <tt>popoverView</tt> can be provided to position the photo gallery popover a specific view and <tt>arrowDirection</tt> can be provided to control the type of arrow and position of the gallery.
	 */
	 openPhotoGallery: function(options) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * <p>save media to photo gallery / camera roll</p>
	 *
	 * @type void
	 * @param (object) save the media passed to the cameras photo roll/media gallery. must be one of Blob object or File object or an error will be generated.
	 */
	 saveToPhotoGallery: function(media) {},

	/**
	 * <p>show the camera</p>
	 *
	 * @type void
	 * @param (object) pass a dictionary with the following supported keys: <tt>success</tt> a function that will be called when the camera is completed, <tt>error</tt> a function that will be called upon receiving an error, <tt>cancel</tt> a function that will be called if the user presses the cancel button, <tt>autohide</tt> boolean if the camera should auto hide after the media capture is completed (defaults to true), <tt>animated</tt> boolean if the dialog should be animated (defaults to true) upon showing and hiding, <tt>saveToPhotoGallery</tt> boolean if the media should be saved to the photo gallery upon successful capture, <tt>allowEditing</tt> boolean if the media should be editable after capture in the UI interface, <tt>mediaTypes</tt> an array of media type constants supported by the capture device UI, <tt>videoMaximumDuration</tt> float duration on how long in milliseconds to allow capture before completing, <tt>videoQuality</tt> constant to indicate the video quality during capture, <tt>showControls</tt> boolean to indicate if the built-in UI controls should be displayed, <tt>overlay</tt> view which is added as an overlay to the camera UI (on top), <tt>transform</tt> an transformation matrix that applies to the camera UI transform.
	 */
	 showCamera: function(options) {},

	/**
	 * <p>start the monitoring of microphone sound level</p>
	 *
	 * @type void
	 */
	 startMicrophoneMonitor: function() {},

	/**
	 * <p>stop the monitoring of microphone sound level</p>
	 *
	 * @type void
	 */
	 stopMicrophoneMonitor: function() {},

	/**
	 * <p>use the device camera to capture a photo. this must be called after calling <tt>showCamera</tt> and only when <tt>autohide</tt> is set to false. this method will cause the media capture device to capture a photo and call the <tt>success</tt> callback.</p>
	 *
	 * @type void
	 */
	 takePicture: function() {},

	/**
	 * <p>take a screen shot of the visible UI on the device</p>
	 *
	 * @type void
	 * @param (function) function that will be called upon capture. the event property <tt>media</tt> will contain an image Blob object of the screenshot
	 */
	 takeScreenshot: function(callback) {},

	/**
	 * <p>play a device vibration</p>
	 *
	 * @type void
	 */
	 vibrate: function() {}
};


/**
 * <p>The AudioPlayer object is returned by <a href="Titanium.Media.createAudioPlayer.html">Titanium.Media.createAudioPlayer</a> and is used for streaming audio to the device and low-level control of the audio playback.</p>
 */
Titanium.Media.AudioPlayer = {
	/**
	 * <p>current playback is in the buffering from the network state</p>
	 * @type int
	 * @final
	 */
	STATE_BUFFERING: 0,

	/**
	 * <p>current playback is in the initialization state</p>
	 * @type int
	 * @final
	 */
	STATE_INITIALIZED: 0,

	/**
	 * <p>current playback is in the paused state</p>
	 * @type int
	 * @final
	 */
	STATE_PAUSED: 0,

	/**
	 * <p>current playback is in the playing state</p>
	 * @type int
	 * @final
	 */
	STATE_PLAYING: 0,

	/**
	 * <p>current playback is in the starting playback state</p>
	 * @type int
	 * @final
	 */
	STATE_STARTING: 0,

	/**
	 * <p>current playback is in the stopped state</p>
	 * @type int
	 * @final
	 */
	STATE_STOPPED: 0,

	/**
	 * <p>current playback is in the stopping state</p>
	 * @type int
	 * @final
	 */
	STATE_STOPPING: 0,

	/**
	 * <p>current playback is in the waiting for audio data from the network state</p>
	 * @type int
	 * @final
	 */
	STATE_WAITING_FOR_DATA: 0,

	/**
	 * <p>current playback is in the waiting for audio data to fill the queue state</p>
	 * @type int
	 * @final
	 */
	STATE_WAITING_FOR_QUEUE: 0,

	/**
	 * <p>boolean to indicate if audio should continue playing even if Activity is paused (Android only as of 1.3.0)</p>
	 * @type boolean
	 * @final
	 */
	allowBackground: 0,

	/**
	 * <p>the default audio session mode to be used for this player. One of <a href="Titanium.Media.AUDIO_SESSION_MODE_AMBIENT.html">Titanium.Media.AUDIO_SESSION_MODE_AMBIENT</a>, <a href="Titanium.Media.AUDIO_SESSION_MODE_SOLO_AMBIENT.html">Titanium.Media.AUDIO_SESSION_MODE_SOLO_AMBIENT</a> <a href="Titanium.Media.AUDIO_SESSION_MODE_PLAYBACK.html">Titanium.Media.AUDIO_SESSION_MODE_PLAYBACK</a> <a href="Titanium.Media.AUDIO_SESSION_MODE_RECORD.html">Titanium.Media.AUDIO_SESSION_MODE_RECORD</a>, <a href="Titanium.Media.AUDIO_SESSION_MODE_PLAY_AND_RECORD.html">Titanium.Media.AUDIO_SESSION_MODE_PLAY_AND_RECORD</a>.</p>
	 * @type int
	 * @final
	 */
	audioSessionMode: 0,

	/**
	 * <p>bit rate of the current playback stream</p>
	 * @type double
	 * @final
	 */
	bitRate: 0,

	/**
	 * <p>returns boolean indicating if the playback is idle</p>
	 * @type boolean
	 * @final
	 */
	idle: 0,

	/**
	 * <p>returns boolean indicating if the playback is paused</p>
	 * @type boolean
	 * @final
	 */
	paused: 0,

	/**
	 * <p>returns boolean indicating if the playback is streaming audio</p>
	 * @type boolean
	 * @final
	 */
	playing: 0,

	/**
	 * <p>returns the current playback progress. Will return zero if sampleRate has not yet been detected</p>
	 * @type double
	 * @final
	 */
	progress: 0,

	/**
	 * <p>returns int for the current state of playback</p>
	 * @type int
	 * @final
	 */
	state: 0,

	/**
	 * <p>returns the url for the current playback</p>
	 * @type string
	 * @final
	 */
	url: 0,

	/**
	 * <p>returns boolean indicating if the playback is waiting for audio data from the network</p>
	 * @type boolean
	 * @final
	 */
	waiting: 0,

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * <p>pause playback</p>
	 *
	 * @type void
	 */
	 pause: function() {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * <p>control the playback of the audio</p>
	 *
	 * @type void
	 * @param (boolean) pass true to pause the current playback temporarily, false to unpause it
	 */
	 setPaused: function(paused) {},

	/**
	 * <p>change the url of the audio playback</p>
	 *
	 * @type void
	 * @param (string) the new url
	 */
	 setUrl: function(url) {},

	/**
	 * <p>start playback</p>
	 *
	 * @type void
	 */
	 start: function() {},

	/**
	 * <p>convert a state into a textual description suitable for display</p>
	 *
	 * @type string
	 */
	 stateDescription: function() {},

	/**
	 * <p>stop playback</p>
	 *
	 * @type void
	 */
	 stop: function() {}
};


/**
 * <p>The AudioRecorder object is returned by <a href="Titanium.Media.createAudioRecorder.html">Titanium.Media.createAudioRecorder</a> and is used for recording audio from the device microphone.</p>
 */
Titanium.Media.AudioRecorder = {
	/**
	 * <p>the default audio session mode to be used for this recorder. One of <a href="Titanium.Media.AUDIO_SESSION_MODE_AMBIENT.html">Titanium.Media.AUDIO_SESSION_MODE_AMBIENT</a>, <a href="Titanium.Media.AUDIO_SESSION_MODE_SOLO_AMBIENT.html">Titanium.Media.AUDIO_SESSION_MODE_SOLO_AMBIENT</a> <a href="Titanium.Media.AUDIO_SESSION_MODE_PLAYBACK.html">Titanium.Media.AUDIO_SESSION_MODE_PLAYBACK</a> <a href="Titanium.Media.AUDIO_SESSION_MODE_RECORD.html">Titanium.Media.AUDIO_SESSION_MODE_RECORD</a>, <a href="Titanium.Media.AUDIO_SESSION_MODE_PLAY_AND_RECORD.html">Titanium.Media.AUDIO_SESSION_MODE_PLAY_AND_RECORD</a>.</p>
	 * @type int
	 * @final
	 */
	audioSessionMode: 0,

	/**
	 * <p>audio compression constant to be used for the recording</p>
	 * @type int
	 * @final
	 */
	compression: 0,

	/**
	 * <p>audio format constant for used for the recording</p>
	 * @type int
	 * @final
	 */
	format: 0,

	/**
	 * <p>readonly property to indicate if paused</p>
	 * @type boolean
	 * @final
	 */
	paused: 0,

	/**
	 * <p>readonly property to indicate if recording</p>
	 * @type boolean
	 * @final
	 */
	recording: 0,

	/**
	 * <p>readonly property to indicate if stopped</p>
	 * @type boolean
	 * @final
	 */
	stopped: 0,

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * <p>called to temporarily pause recording</p>
	 *
	 * @type void
	 */
	 pause: function() {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * <p>called to resume audio recording</p>
	 *
	 * @type void
	 */
	 resume: function() {},

	/**
	 * <p>called to start recording audio</p>
	 *
	 * @type void
	 */
	 start: function() {},

	/**
	 * <p>called to stop recording audio</p>
	 *
	 * @type void
	 */
	 stop: function() {}
};


/**
 * <p>The Sound object is returned by <a href="Titanium.Media.createSound.html">Titanium.Media.createSound</a> and is useful for playing basic sounds. The Sound object loads the entire media resource in memory before playing.  If you need to support streaming, use the <a href="Titanium.Media.createAudioPlayer.html">Titanium.Media.createAudioPlayer</a> API.</p>
 */
Titanium.Media.Sound = {
	/**
	 * <p>boolean to indicate if audio should continue playing even if Activity is paused (Android only as of 1.3.0)</p>
	 * @type boolean
	 * @final
	 */
	allowBackground: 0,

	/**
	 * <p>the default audio session mode to be used for this player. One of <a href="Titanium.Media.AUDIO_SESSION_MODE_AMBIENT-property.html">Titanium.Media.AUDIO_SESSION_MODE_AMBIENT</a>, <a href="Titanium.Media.AUDIO_SESSION_MODE_SOLO_AMBIENT-property.html">Titanium.Media.AUDIO_SESSION_MODE_SOLO_AMBIENT</a> <a href="Titanium.Media.AUDIO_SESSION_MODE_PLAYBACK-property.html">Titanium.Media.AUDIO_SESSION_MODE_PLAYBACK</a> <a href="Titanium.Media.AUDIO_SESSION_MODE_RECORD-property.html">Titanium.Media.AUDIO_SESSION_MODE_RECORD</a>, <a href="Titanium.Media.AUDIO_SESSION_MODE_PLAY_AND_RECORD-property.html">Titanium.Media.AUDIO_SESSION_MODE_PLAY_AND_RECORD</a>.</p>
	 * @type int
	 * @final
	 */
	audioSessionMode: 0,

	/**
	 * <p>the duration of the audio.</p>
	 * @type float
	 * @final
	 */
	duration: 0,

	/**
	 * <p>boolean to indicate if the audio should loop upon completion</p>
	 * @type boolean
	 * @final
	 */
	looping: 0,

	/**
	 * <p>boolean to indicate if the audio is paused</p>
	 * @type boolean
	 * @final
	 */
	paused: 0,

	/**
	 * <p>boolean to indicate if the audio is playing</p>
	 * @type boolean
	 * @final
	 */
	playing: 0,

	/**
	 * <p>the time position of the audio.</p>
	 * @type float
	 * @final
	 */
	time: 0,

	/**
	 * <p>url to the audio</p>
	 * @type string
	 * @final
	 */
	url: 0,

	/**
	 * <p>the volume of the audio. this volume only affects the media, not the device audio.</p>
	 * @type float
	 * @final
	 */
	volume: 0,

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * <p>return the current time position of the audio</p>
	 *
	 * @type double
	 */
	 getTime: function() {},

	/**
	 * <p>return the value of the audio</p>
	 *
	 * @type float
	 */
	 getVolume: function() {},

	/**
	 * <p>returns true if the audio will loop</p>
	 *
	 * @type boolean
	 */
	 isLooping: function() {},

	/**
	 * <p>returns true if the audio is paused</p>
	 *
	 * @type boolean
	 */
	 isPaused: function() {},

	/**
	 * <p>returns true if the audio is playing</p>
	 *
	 * @type boolean
	 */
	 isPlaying: function() {},

	/**
	 * <p>temporarily pause the audio. to resume, invoke <tt>play</tt>.</p>
	 *
	 * @type void
	 */
	 pause: function() {},

	/**
	 * <p>starting playing the source. if paused, will resume.</p>
	 *
	 * @type void
	 */
	 play: function() {},

	/**
	 * <p>release all internal resources. this is typically unnecessary but can be useful if you load a large audio file in <tt>app.js</tt> and play it only once and you would like to release all releases after your final play to reduce memory.</p>
	 *
	 * @type void
	 */
	 release: function() {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * <p>reset the audio to the beginning.</p>
	 *
	 * @type void
	 */
	 reset: function() {},

	/**
	 * <p>control whether the audio should loop</p>
	 *
	 * @type void
	 */
	 setLooping: function() {},

	/**
	 * <p>control whether the audio is paused</p>
	 *
	 * @type void
	 */
	 setPaused: function() {},

	/**
	 * <p>set the time position of the audio</p>
	 *
	 * @type void
	 */
	 setTime: function() {},

	/**
	 * <p>set the volume of the audio</p>
	 *
	 * @type void
	 */
	 setVolume: function() {},

	/**
	 * <p>stop playing the audio and reset it to the beginning.</p>
	 *
	 * @type void
	 */
	 stop: function() {}
};


/**
 * <p>The VideoPlayer object is returned by <a href="Titanium.Media.createVideoPlayer.html">Titanium.Media.createVideoPlayer</a> and is useful for playing videos. </p>
 */
Titanium.Media.VideoPlayer = {
	/**
	 * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
	 * @type object
	 * @final
	 */
	anchorPoint: 0,

	/**
	 * read-only object with x and y properties of where the view is during animation
	 * @type object
	 * @final
	 */
	animatedCenterPoint: 0,

	/**
	 * <p>indicates if a movie should automatically start playback when it is likely to finish uninterrupted based on e.g. network conditions. Defaults to true.</p>
	 * @type boolean
	 * @final
	 */
	autoplay: 0,

	/**
	 * <p>background color for the view. deprecated, set the background color on the view.</p>
	 * @type string
	 * @final
	 */
	backgroundColor: 0,

	/**
	 * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
	 * @type object
	 * @final
	 */
	backgroundGradient: 0,

	/**
	 * the background image url of the view
	 * @type string
	 * @final
	 */
	backgroundImage: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
	 * @type float
	 * @final
	 */
	backgroundLeftCap: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
	 * @type float
	 * @final
	 */
	backgroundTopCap: 0,

	/**
	 * the border color of the view
	 * @type string
	 * @final
	 */
	borderColor: 0,

	/**
	 * the border radius of the view
	 * @type float
	 * @final
	 */
	borderRadius: 0,

	/**
	 * the border width of the view
	 * @type float
	 * @final
	 */
	borderWidth: 0,

	/**
	 * property for the view bottom position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	bottom: 0,

	/**
	 * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
	 * @type object
	 * @final
	 */
	center: 0,

	/**
	 * <p>deprecated. use url property instead.</p>
	 * @type string
	 * @final
	 */
	contentURL: 0,

	/**
	 * <p>The duration of the movie, or 0.0 if not known.</p>
	 * @type double
	 * @final
	 */
	duration: 0,

	/**
	 * <p>The end time of movie playback. Defaults to NaN, which indicates natural end time of the movie.</p>
	 * @type double
	 * @final
	 */
	endPlaybackTime: 0,

	/**
	 * <p>Determines if the movie is presented in the entire screen (obscuring all other application content). Default is false. Setting this property to true before the movie player's view is visible will have no effect.</p>
	 * @type boolean
	 * @final
	 */
	fullscreen: 0,

	/**
	 * property for the view height. can be either float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	height: 0,

	/**
	 * <p>The start time of movie playback. Defaults to NaN, indicating the natural start time of the movie.</p>
	 * @type double
	 * @final
	 */
	initialPlaybackTime: 0,

	/**
	 * property for the view left position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	left: 0,

	/**
	 * <p>Returns the network load state of the movie player.</p>
	 * @type int
	 * @final
	 */
	loadState: 0,

	/**
	 * <p>the media object, either a File or Blob.</p>
	 * @type object
	 * @final
	 */
	media: 0,

	/**
	 * <p>The style of the playback controls. Defaults to <a href="Titanium.Media.VIDEO_CONTROL_DEFAULT-property.html">Titanium.Media.VIDEO_CONTROL_DEFAULT</a></p>
	 * @type int
	 * @final
	 */
	mediaControlStyle: 0,

	/**
	 * <p>The types of media in the movie, or <a href="Titanium.Media.VIDEO_MEDIA_TYPE_NONE-property.html">Titanium.Media.VIDEO_MEDIA_TYPE_NONE</a> if not known.</p>
	 * @type int
	 * @final
	 */
	mediaTypes: 0,

	/**
	 * <p>deprecated in 3.2+ of the iPhone SDK - use <tt>mediaControlStyle</tt>. Provides the ability to set the control mode of the movie player. Defaults to <a href="Titanium.Media.VIDEO_CONTROL_DEFAULT-property.html">Titanium.Media.VIDEO_CONTROL_DEFAULT</a>.</p>
	 * @type int
	 * @final
	 */
	movieControlMode: 0,

	/**
	 * <p>returns a dictionary with properties <tt>width</tt> and <tt>height</tt>. Returns the natural size of the movie or 0 for both properties if not known or applicable.</p>
	 * @type object
	 * @final
	 */
	naturalSize: 0,

	/**
	 * the opacity from 0.0-1.0
	 * @type float
	 * @final
	 */
	opacity: 0,

	/**
	 * <p>The currently playable duration of the movie, for progressively downloaded network content.</p>
	 * @type double
	 * @final
	 */
	playableDuration: 0,

	/**
	 * <p>Returns the current playback state of the music player</p>
	 * @type int
	 * @final
	 */
	playbackState: 0,

	/**
	 * <p>Boolean to indicate if the player has started playing.</p>
	 * @type boolean
	 * @final
	 */
	playing: 0,

	/**
	 * <p>Determines how the movie player repeats when reaching the end of playback. Defaults to <a href="Titanium.Media.VIDEO_REPEAT_MODE_NONE-property.html">Titanium.Media.VIDEO_REPEAT_MODE_NONE</a>.</p>
	 * @type int
	 * @final
	 */
	repeatMode: 0,

	/**
	 * property for the view right position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	right: 0,

	/**
	 * <p>Determines how the content scales to fit the view. Defaults to <a href="Titanium.Media.VIDEO_SCALING_ASPECT_FIT-property.html">Titanium.Media.VIDEO_SCALING_ASPECT_FIT</a>.</p>
	 * @type int
	 * @final
	 */
	scalingMode: 0,

	/**
	 * the size of the view as a dictionary of width and height properties
	 * @type object
	 * @final
	 */
	size: 0,

	/**
	 * <p>The playback type of the movie. Defaults to <a href="Titanium.Media.VIDEO_SOURCE_TYPE_UNKNOWN-property.html">Titanium.Media.VIDEO_SOURCE_TYPE_UNKNOWN</a>. Specifying a playback type before playing the movie can result in faster load times.</p>
	 * @type int
	 * @final
	 */
	sourceType: 0,

	/**
	 * property for the view top position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	top: 0,

	/**
	 * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
	 * @type boolean
	 * @final
	 */
	touchEnabled: 0,

	/**
	 * the transformation matrix to apply to the view
	 * @type object
	 * @final
	 */
	transform: 0,

	/**
	 * <p>url of the media.</p>
	 * @type string
	 * @final
	 */
	url: 0,

	/**
	 * <p>Indicates if the movie player should inherit the application's audio session instead of creating a new session (which would interrupt the application's session). Defaults to true. Setting this property during playback will not take effect until playback is stopped and started again.</p>
	 * @type boolean
	 * @final
	 */
	useApplicationAudioSession: 0,

	/**
	 * a boolean of the visibility of the view
	 * @type boolean
	 * @final
	 */
	visible: 0,

	/**
	 * property for the view width. can either be `auto`, a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	width: 0,

	/**
	 * the z index position relative to other sibling views
	 * @type int
	 * @final
	 */
	zIndex: 0,

	/**
	 * add a child to the view hierarchy
	 *
	 * @type void
	 * @param (object) the view to add to this views hiearchy
	 */
	 add: function(view) {},

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * animate the view
	 *
	 * @type void
	 * @param (object) either a dictionary of animation properties or an Animation object
	 * @param (function) function to be invoked upon completion of the animation
	 */
	 animate: function(obj, callback) {},

	/**
	 * <p>Cancels all pending asynchronous thumbnail requests.</p>
	 *
	 * @type void
	 */
	 cancelAllThumbnailImageRequests: function() {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * hide the view
	 *
	 * @type void
	 */
	 hide: function() {},

	/**
	 * <p>start playing the video</p>
	 *
	 * @type void
	 */
	 play: function() {},

	/**
	 * <p>release the internal video resources immediately.  this is not usually necessary but can help if you no longer need to use the player after it is used to help converse memory.</p>
	 *
	 * @type void
	 */
	 release: function() {},

	/**
	 * remove a previously add view from the view hiearchy
	 *
	 * @type void
	 * @param (object) the view to remove from this views hiearchy
	 */
	 remove: function(view) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * <p>Asynchronously request thumbnails for one or more times, provided as an array of numbers (double). Fires a <tt>thumbnail</tt> event on completion. Optionally invokes the callback function passed in the method.</p>
	 *
	 * @type void
	 * @param (array) array of doubles for each time to request
	 * @param (int) either [[Titanium.Media.VIDEO_TIME_OPTION_NEAREST_KEYFRAME]] or [[Titanium.Media.VIDEO_TIME_OPTION_EXACT]].
	 */
	 requestThumbnailImagesAtTimes: function(times, option) {},

	/**
	 * <p>A view for customization which is always displayed behind movie content.</p>
	 *
	 * @type void
	 * @param (object) view to set
	 */
	 setBackgroundView: function(view) {},

	/**
	 * <p>the a non-url based media to play, either a File or Blob.</p>
	 *
	 * @type void
	 * @param (object) media to play
	 */
	 setMedia: function(media) {},

	/**
	 * <p>the url to play</p>
	 *
	 * @type void
	 * @param (string) the url to play
	 */
	 setUrl: function(url) {},

	/**
	 * make the view visible
	 *
	 * @type void
	 */
	 show: function() {},

	/**
	 * <p>stop playing the video</p>
	 *
	 * @type void
	 */
	 stop: function() {},

	/**
	 * <p>Returns a thumbnail at the given time as a blob.</p>
	 *
	 * @type object
	 * @param (double) playback time
	 * @param (int) either [[Titanium.Media.VIDEO_TIME_OPTION_NEAREST_KEYFRAME]] or [[Titanium.Media.VIDEO_TIME_OPTION_EXACT]]
	 */
	 thumbnailImageAtTime: function(time, option) {},

	/**
	 * return a Blob image of the rendered view
	 *
	 * @type object
	 * @param (function) function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
	 */
	 toImage: function(f) {}
};


/**
 * <p>The top level Network module.  The Network module is used accessing Networking related functionality.</p>
 */
Titanium.Network = {
	/**
	 * <p>constant value representing the ability for sockets to listen on any locally available network device</p>
	 * @type string
	 * @final
	 */
	INADDR_ANY: 0,

	/**
	 * <p>constant value to indicate that the network is LAN</p>
	 * @type int
	 * @final
	 */
	NETWORK_LAN: 0,

	/**
	 * <p>constant value to indicate that the network is MOBILE</p>
	 * @type int
	 * @final
	 */
	NETWORK_MOBILE: 0,

	/**
	 * <p>constant value to indicate that the network is not available</p>
	 * @type int
	 * @final
	 */
	NETWORK_NONE: 0,

	/**
	 * <p>constant value to indicate that the network is not known</p>
	 * @type int
	 * @final
	 */
	NETWORK_UNKNOWN: 0,

	/**
	 * <p>constant value to indicate that the network is WIFI</p>
	 * @type int
	 * @final
	 */
	NETWORK_WIFI: 0,

	/**
	 * <p>constant value for the push notification alert type</p>
	 * @type int
	 * @final
	 */
	NOTIFICATION_TYPE_ALERT: 0,

	/**
	 * <p>constant value for the push notification badge type</p>
	 * @type int
	 * @final
	 */
	NOTIFICATION_TYPE_BADGE: 0,

	/**
	 * <p>constant value for the push notification sound type</p>
	 * @type int
	 * @final
	 */
	NOTIFICATION_TYPE_SOUND: 0,

	/**
	 * <p>constant value specifying read-only mode for sockets</p>
	 * @type int
	 * @final
	 */
	READ_MODE: 0,

	/**
	 * <p>constant value specifying read-write mode for sockets</p>
	 * @type int
	 * @final
	 */
	READ_WRITE_MODE: 0,

	/**
	 * <p>constant value specifying write-only mode for sockets</p>
	 * @type int
	 * @final
	 */
	WRITE_MODE: 0,

	/**
	 * <p>the network type value as a constant.</p>
	 * @type int
	 * @final
	 */
	networkType: 0,

	/**
	 * <p>the network type name constant. Returns one of <tt>NONE</tt>, <tt>WIFI</tt>, <tt>LAN</tt> or <tt>MOBILE</tt>.</p>
	 * @type string
	 * @final
	 */
	networkTypeName: 0,

	/**
	 * <p>readonly boolean value that indicates if the network is reachable to the Internet either via WIFI or Carrier network</p>
	 * @type boolean
	 * @final
	 */
	online: 0,

	/**
	 * <p>the remote device UUID if the device was registered with the Apple Push Notification Service or null if not set. Only available on iPhone.</p>
	 * @type string
	 * @final
	 */
	remoteDeviceUUID: 0,

	/**
	 * <p>returns an array of network type constants enabled for the application. Only available on iPhone.</p>
	 * @type array
	 * @final
	 */
	remoteNotificationTypes: 0,

	/**
	 * <p>returns true if remote notifications have been enabled. Only available on iPhone.</p>
	 * @type boolean
	 * @final
	 */
	remoteNotificationsEnabled: 0,

	/**
	 * <p>adds a connectivity listener to listen for network changes. This method has been deprecated in favor of listening for a <tt>change</tt> event.</p>
	 *
	 * @type void
	 * @param (function) callback function to invoke upon network connectivity changes
	 */
	 addConnectivityListener: function(callback) {},

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * create and return an instance of <a href="Titanium.Network.BonjourBrowser.html">Titanium.Network.BonjourBrowser</a>
	 *
	 * @type object
	 * @param (string) service to search for, must include the protocol type suffix (._tcp)
	 * @param (string) the Bonjour service domain to conduct the search in.  Default value is 'local.'
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.Network.BonjourBrowser.html">Titanium.Network.BonjourBrowser</a>
	 */
	 createBonjourBrowser: function(serviceType, domain, parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.Network.BonjourService.html">Titanium.Network.BonjourService</a>
	 *
	 * @type object
	 * @param (string) the name of the service.  Must be a unique identifier for this service type and domain.
	 * @param (string) the type of service.  Must include the protocol identifier (._tcp)
	 * @param (string) the domain to publish the service in.  Default value is 'local.'
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.Network.BonjourService.html">Titanium.Network.BonjourService</a>
	 */
	 createBonjourService: function(name, type, domain, parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.Network.HTTPClient.html">Titanium.Network.HTTPClient</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.Network.HTTPClient.html">Titanium.Network.HTTPClient</a>
	 */
	 createHTTPClient: function(parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.Network.TCPSocket.html">Titanium.Network.TCPSocket</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.Network.TCPSocket.html">Titanium.Network.TCPSocket</a>
	 */
	 createTCPSocket: function(parameters) {},

	/**
	 * <p>decode a URI component part using URI encoding</p>
	 *
	 * @type string
	 * @param (string) input value to be decoded
	 */
	 decodeURIComponent: function(value) {},

	/**
	 * <p>encode a URI component part using URI encoding</p>
	 *
	 * @type string
	 * @param (string) input value to be encoded
	 */
	 encodeURIComponent: function(value) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * <p>register for push notifications with the Apple Push Notification Service. Only available on iPhone.</p>
	 *
	 * @type void
	 * @param (object) dictionary of the following: <tt>types</tt> is an array of type constants that the application would like to receive, <tt>success</tt> is a callback function that is called when the push registration is successfully completed, <tt>error</tt> is a callback function that is called when an error is received during registration and <tt>callback</tt> is a callback function that is invoked upon receiving a new push notification. This method should be called at application startup.
	 */
	 registerForPushNotifications: function(config) {},

	/**
	 * <p>removes a connectivity listener. This method has been deprecated in favor of listening for a <tt>change</tt> event.</p>
	 *
	 * @type void
	 * @param (function) callback function to remove
	 */
	 removeConnectivityListener: function(callback) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {}
};


/**
 * <p>The BonjourBrowser instance returned from <a href="Titanium.Network.createBonjourBrowser.html">Titanium.Network.createBonjourBrowser</a>.  This object is a browser for the discovery and retrieval of Bonjour services available on the network.<br>
</p>
 */
Titanium.Network.BonjourBrowser = {
	/**
	 * <p>The domain the browser is searching in</p>
	 * @type string
	 * @final
	 */
	domain: 0,

	/**
	 * <p>Whether or not the browser is currently searching</p>
	 * @type boolean
	 * @final
	 */
	isSearching: 0,

	/**
	 * <p>The type of the service the browser searches for</p>
	 * @type string
	 * @final
	 */
	serviceType: 0,

	/**
	 * <p>Conduct a search for Bonjour services matching the type and domain specified during creation</p>
	 *
	 * @type void
	 */
	 search: function() {},

	/**
	 * <p>Halt an ongoing search</p>
	 *
	 * @type void
	 */
	 stopSearch: function() {}
};


/**
 * <p>The BonjourService instance returned either from <a href="Titanium.Network.createBonjourService.html">Titanium.Network.createBonjourService</a> or via the service list from a BonjourBrowser <tt>updatedServices</tt> event.  This object describes a service on the network which is published by Bonjour.</p>
 */
Titanium.Network.BonjourService = {
	/**
	 * <p>the domain of the service</p>
	 * @type string
	 * @final
	 */
	domain: 0,

	/**
	 * <p>the name of the service</p>
	 * @type string
	 * @final
	 */
	name: 0,

	/**
	 * <p>the TCPSocket object that is used to connect to the service</p>
	 * @type object
	 * @final
	 */
	socket: 0,

	/**
	 * <p>the type of the service</p>
	 * @type string
	 * @final
	 */
	type: 0,

	/**
	 * <p>whether or not the service is local to the device</p>
	 *
	 * @type void
	 */
	 isLocal: function() {},

	/**
	 * <p>Publish a Bonjour service to the network.  Only works if isLocal is TRUE</p>
	 *
	 * @type void
	 * @param (object) a TCPSocket object to associate with the Bonjour service.
	 */
	 publish: function(socket) {},

	/**
	 * <p>Resolve a Bonjour service from the network.  Must be done before attempting to access the service's socket information, if a remote service.  You cannot resolve a locally published service.</p>
	 *
	 * @type void
	 * @param (double) the timeout for service resolution, in seconds.  Optional, default is 120s.
	 */
	 resolve: function(timeout) {},

	/**
	 * <p>Halts publication of a service.</p>
	 *
	 * @type void
	 */
	 stop: function() {}
};


/**
 * <p>The HttpClient instance returned from <a href="Titanium.Network.createHTTPClient.html">Titanium.Network.createHTTPClient</a>. This object (mostly) implements the XMLHttpRequest specification.</p>
 */
Titanium.Network.HTTPClient = {
	/**
	 * <p>the DONE readyState constant</p>
	 * @type int
	 * @final
	 */
	DONE: 0,

	/**
	 * <p>the HEADERS_RECEIVED readyState constant</p>
	 * @type int
	 * @final
	 */
	HEADERS_RECEIVED: 0,

	/**
	 * <p>the LOADING readyState constant</p>
	 * @type int
	 * @final
	 */
	LOADING: 0,

	/**
	 * <p>the OPENED readyState constant</p>
	 * @type int
	 * @final
	 */
	OPENED: 0,

	/**
	 * <p>the UNSET readyState constant</p>
	 * @type int
	 * @final
	 */
	UNSENT: 0,

	/**
	 * <p>boolean to indicate that the response was successful</p>
	 * @type boolean
	 * @final
	 */
	connected: 0,

	/**
	 * <p>the connection type, normally either <tt>GET</tt> or <tt>POST</tt>.</p>
	 * @type string
	 * @final
	 */
	connectionType: 0,

	/**
	 * <p>the absolute URL of the request</p>
	 * @type string
	 * @final
	 */
	location: 0,

	/**
	 * <p>set this to a function before calling open to cause the function to be called at regular intervals as the request data is being received. the <tt>progress</tt> property of the event will contain a value from 0.0-1.0 with the progress.</p>
	 * @type function
	 * @final
	 */
	ondatastream: 0,

	/**
	 * <p>set this to a function before calling open to cause the function to be called upon a error response</p>
	 * @type function
	 * @final
	 */
	onerror: 0,

	/**
	 * <p>set this to a function before calling open to cause the function to be called upon a successful response</p>
	 * @type function
	 * @final
	 */
	onload: 0,

	/**
	 * <p>set this to a function before calling open to cause the function to be called for each readyState change</p>
	 * @type function
	 * @final
	 */
	onreadystatechange: 0,

	/**
	 * <p>set this to a function before calling open to cause the function to be called at regular intervals as the request data is being transmitted. the <tt>progress</tt> property of the event will contain a value from 0.0-1.0 with the progress.</p>
	 * @type function
	 * @final
	 */
	onsendstream: 0,

	/**
	 * <p>the readyState value</p>
	 * @type int
	 * @final
	 */
	readyState: 0,

	/**
	 * <p>the response data as a Blob object.</p>
	 * @type object
	 * @final
	 */
	responseData: 0,

	/**
	 * <p>the response as text or null if an error was received or no data was returned</p>
	 * @type string
	 * @final
	 */
	responseText: 0,

	/**
	 * <p>the response object as an XML DOMDocument object. returns null if the content type returned by the server was not XML or the content could not be parsed</p>
	 * @type object
	 * @final
	 */
	responseXML: 0,

	/**
	 * <p>the response HTTP status code</p>
	 * @type int
	 * @final
	 */
	status: 0,

	/**
	 * <p>timeout is milliseconds when the connection should be aborted</p>
	 * @type int
	 * @final
	 */
	timeout: 0,

	/**
	 * <p>set this to control how SSL certification validation is performed on connection.  defaults to false if in simulator or device testing and true if release for distribution mode.</p>
	 * @type boolean
	 * @final
	 */
	validatesSecureCertificate: 0,

	/**
	 * <p>abort a pending request</p>
	 *
	 * @type void
	 */
	 abort: function() {},

	/**
	 * <p>return the response header.</p>
	 *
	 * @type string
	 * @param (string) the header name
	 */
	 getResponseHeader: function(name) {},

	/**
	 * <p>open the request and ready the connection</p>
	 *
	 * @type void
	 * @param (string) the HTTP method
	 * @param (string) the URL for the request
	 * @param (boolean) optional property to indicate if asynchronous (default) or not
	 */
	 open: function(method, url, async) {},

	/**
	 * <p>send the request</p>
	 *
	 * @type void
	 * @param (object) the data to send in the request. can either be null, dictionary, string, File object or Blob.
	 */
	 send: function(data) {},

	/**
	 * <p>set the request header. Must be called after <tt>open</tt> but before <tt>send</tt>.</p>
	 *
	 * @type void
	 * @param (string) name of the header
	 * @param (string) value of the header
	 */
	 setRequestHeader: function(name, value) {},

	/**
	 * <p>set the request timeout</p>
	 *
	 * @type void
	 * @param (double) the timeout in milliseconds
	 */
	 setTimeout: function(timeout) {}
};


/**
 * <p>The TCPSocket instance returned from <a href="Titanium.Network.createTCPSocket.html">Titanium.Network.createTCPSocket</a>.  This object represents a socket which either listens locally on the device for connections, or connects to a remote machine.</p>
 */
Titanium.Network.TCPSocket = {
	/**
	 * <p>the host name to connect to.  Must be INADDR_ANY or an identifier for the local device in order to listen</p>
	 * @type string
	 * @final
	 */
	hostName: 0,

	/**
	 * <p>the socket's mode</p>
	 * @type int
	 * @final
	 */
	mode: 0,

	/**
	 * <p>the port to connect/listen on</p>
	 * @type int
	 * @final
	 */
	port: 0,

	/**
	 * <p>close the socket</p>
	 *
	 * @type void
	 */
	 close: function() {},

	/**
	 * <p>connect the scocket to a TCP server</p>
	 *
	 * @type void
	 */
	 connect: function() {},

	/**
	 * <p>whether or not the socket is valid</p>
	 *
	 * @type void
	 */
	 isValid: function() {},

	/**
	 * <p>set up the socket to receive connections</p>
	 *
	 * @type void
	 */
	 listen: function() {},

	/**
	 * <p>write data to the socket, if the mode is WRITE_MODE or READ_WRITE_MODE</p>
	 *
	 * @type void
	 * @param (object,string) either a string or blob object representing the data to be transferred
	 * @param (int) the socket reference to send the data to.  Default is to send to all connected sockets
	 */
	 write: function(data, sendTo) {}
};


/**
 * <p>The top level Platform module.  The Platform module is used accessing the device's platform
related functionality.</p>
 */
Titanium.Platform = {
	/**
	 * <p>the device is plugged in and currently being charged</p>
	 * @type int
	 * @final
	 */
	BATTERY_STATE_CHARGING: 0,

	/**
	 * <p>the battery is fully charged</p>
	 * @type int
	 * @final
	 */
	BATTERY_STATE_FULL: 0,

	/**
	 * <p>the battery state is unknown or not monitoring is not enabled</p>
	 * @type int
	 * @final
	 */
	BATTERY_STATE_UNKNOWN: 0,

	/**
	 * <p>the device is unplugged</p>
	 * @type int
	 * @final
	 */
	BATTERY_STATE_UNPLUGGED: 0,

	/**
	 * <p>the ip address that the device reports (only applicable on WIFI network)</p>
	 * @type string
	 * @final
	 */
	address: 0,

	/**
	 * <p>the processor architecture that the device reports</p>
	 * @type string
	 * @final
	 */
	architecture: 0,

	/**
	 * <p>return the amount of memory available on the device in bytes</p>
	 * @type double
	 * @final
	 */
	availableMemory: 0,

	/**
	 * <p>the current device battery level. this property is only accessible if <tt>batteryMonitoring</tt> is enabled. on iPhone, this level only changes at 5% intervals.</p>
	 * @type float
	 * @final
	 */
	batteryLevel: 0,

	/**
	 * <p>boolean to indicate if battery monitoring is enabled</p>
	 * @type boolean
	 * @final
	 */
	batteryMonitoring: 0,

	/**
	 * <p>constant that represents the state of the battery. this property is only accessible if <tt>batteryMonitoring</tt> is enabled</p>
	 * @type int
	 * @final
	 */
	batteryState: 0,

	/**
	 * <p>return the DisplayCaps object for platform</p>
	 * @type object
	 * @final
	 */
	displayCaps: 0,

	/**
	 * <p>the unique id of the device</p>
	 * @type string
	 * @final
	 */
	id: 0,

	/**
	 * <p>the primary language of the device that the user has enabled</p>
	 * @type string
	 * @final
	 */
	locale: 0,

	/**
	 * <p>this property will return a unique identifier for the device</p>
	 * @type string
	 * @final
	 */
	macaddress: 0,

	/**
	 * <p>the model of the phone that the device reports</p>
	 * @type string
	 * @final
	 */
	model: 0,

	/**
	 * <p>the name of the platform returned by the device</p>
	 * @type string
	 * @final
	 */
	name: 0,

	/**
	 * <p>the network mask that the device reports (only applicable on WIFI network)</p>
	 * @type string
	 * @final
	 */
	netmask: 0,

	/**
	 * <p>the shortname of the operating system. for example, on an iPhone, will return <tt>iphone</tt>, iPad will return <tt>ipad</tt> and Android will return <tt>android</tt>.</p>
	 * @type string
	 * @final
	 */
	osname: 0,

	/**
	 * <p>the OS architecture, such as 32 bit</p>
	 * @type string
	 * @final
	 */
	ostype: 0,

	/**
	 * <p>the number of processors the device reports</p>
	 * @type int
	 * @final
	 */
	processorCount: 0,

	/**
	 * <p>the username of the device, if set</p>
	 * @type string
	 * @final
	 */
	username: 0,

	/**
	 * <p>the version of the platform returned by the device</p>
	 * @type string
	 * @final
	 */
	version: 0,

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * <p>create a globally unique identifier</p>
	 *
	 * @type string
	 */
	 createUUID: function() {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * <p>open a URL in the system default manner</p>
	 *
	 * @type void
	 * @param (string) the url to open
	 */
	 openURL: function(url) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {}
};


/**
 * <p>The Display Caps object returned by the <a href="Titanium.Platform.displayCaps.html">Titanium.Platform.displayCaps</a> property.</p>
 */
Titanium.Platform.DisplayCaps = {
	/**
	 * <p>returns the density property of the display device.</p>
	 * @type string
	 * @final
	 */
	density: 0,

	/**
	 * <p>the DPI of the display device.</p>
	 * @type int
	 * @final
	 */
	dpi: 0,

	/**
	 * <p>the height of the device screen</p>
	 * @type float
	 * @final
	 */
	platformHeight: 0,

	/**
	 * <p>the width of the device screen</p>
	 * @type float
	 * @final
	 */
	platformWidth: 0
};


/**
 * <p>The main <a href="Titanium.UI-module.html">Titanium.UI</a> module.  The UI module is responsible for native user-interface components and interaction inside Titanium.  The goal of the UI module is to provide a native experience along with native performance by compiling Javascript code into their native counterparts as part of the build process. </p>
 */
Titanium.UI = {
	/**
	 * <p>animation curve constant</p>
	 * @type int
	 * @final
	 */
	ANIMATION_CURVE_EASE_IN: 0,

	/**
	 * <p>animation curve constant</p>
	 * @type int
	 * @final
	 */
	ANIMATION_CURVE_EASE_IN_OUT: 0,

	/**
	 * <p>animation curve constant</p>
	 * @type int
	 * @final
	 */
	ANIMATION_CURVE_EASE_OUT: 0,

	/**
	 * <p>animation curve constant</p>
	 * @type int
	 * @final
	 */
	ANIMATION_CURVE_LINEAR: 0,

	/**
	 * <p>image mode constant</p>
	 * @type int
	 * @final
	 */
	BLEND_MODE_CLEAR: 0,

	/**
	 * <p>image mode constant</p>
	 * @type int
	 * @final
	 */
	BLEND_MODE_COLOR: 0,

	/**
	 * <p>image mode constant</p>
	 * @type int
	 * @final
	 */
	BLEND_MODE_COLOR_BURN: 0,

	/**
	 * <p>image mode constant</p>
	 * @type int
	 * @final
	 */
	BLEND_MODE_COLOR_DODGE: 0,

	/**
	 * <p>image mode constant</p>
	 * @type int
	 * @final
	 */
	BLEND_MODE_COPY: 0,

	/**
	 * <p>image mode constant</p>
	 * @type int
	 * @final
	 */
	BLEND_MODE_DARKEN: 0,

	/**
	 * <p>image mode constant</p>
	 * @type int
	 * @final
	 */
	BLEND_MODE_DESTINATION_ATOP: 0,

	/**
	 * <p>image mode constant</p>
	 * @type int
	 * @final
	 */
	BLEND_MODE_DESTINATION_IN: 0,

	/**
	 * <p>image mode constant</p>
	 * @type int
	 * @final
	 */
	BLEND_MODE_DESTINATION_OUT: 0,

	/**
	 * <p>image mode constant</p>
	 * @type int
	 * @final
	 */
	BLEND_MODE_DESTINATION_OVER: 0,

	/**
	 * <p>image mode constant</p>
	 * @type int
	 * @final
	 */
	BLEND_MODE_DIFFERENCE: 0,

	/**
	 * <p>image mode constant</p>
	 * @type int
	 * @final
	 */
	BLEND_MODE_EXCLUSION: 0,

	/**
	 * <p>image mode constant</p>
	 * @type int
	 * @final
	 */
	BLEND_MODE_HARD_LIGHT: 0,

	/**
	 * <p>image mode constant</p>
	 * @type int
	 * @final
	 */
	BLEND_MODE_HUE: 0,

	/**
	 * <p>image mode constant</p>
	 * @type int
	 * @final
	 */
	BLEND_MODE_LIGHTEN: 0,

	/**
	 * <p>image mode constant</p>
	 * @type int
	 * @final
	 */
	BLEND_MODE_LUMINOSITY: 0,

	/**
	 * <p>image mode constant</p>
	 * @type int
	 * @final
	 */
	BLEND_MODE_MULTIPLY: 0,

	/**
	 * <p>image mode constant</p>
	 * @type int
	 * @final
	 */
	BLEND_MODE_NORMAL: 0,

	/**
	 * <p>image mode constant</p>
	 * @type int
	 * @final
	 */
	BLEND_MODE_OVERLAY: 0,

	/**
	 * <p>image mode constant</p>
	 * @type int
	 * @final
	 */
	BLEND_MODE_PLUS_DARKER: 0,

	/**
	 * <p>image mode constant</p>
	 * @type int
	 * @final
	 */
	BLEND_MODE_PLUS_LIGHTER: 0,

	/**
	 * <p>image mode constant</p>
	 * @type int
	 * @final
	 */
	BLEND_MODE_SATURATION: 0,

	/**
	 * <p>image mode constant</p>
	 * @type int
	 * @final
	 */
	BLEND_MODE_SCREEN: 0,

	/**
	 * <p>image mode constant</p>
	 * @type int
	 * @final
	 */
	BLEND_MODE_SOFT_LIGHT: 0,

	/**
	 * <p>image mode constant</p>
	 * @type int
	 * @final
	 */
	BLEND_MODE_SOURCE_ATOP: 0,

	/**
	 * <p>image mode constant</p>
	 * @type int
	 * @final
	 */
	BLEND_MODE_SOURCE_IN: 0,

	/**
	 * <p>image mode constant</p>
	 * @type int
	 * @final
	 */
	BLEND_MODE_SOURCE_OUT: 0,

	/**
	 * <p>image mode constant</p>
	 * @type int
	 * @final
	 */
	BLEND_MODE_XOR: 0,

	/**
	 * <p>orientation constant</p>
	 * @type int
	 * @final
	 */
	FACE_DOWN: 0,

	/**
	 * <p>orientation constant</p>
	 * @type int
	 * @final
	 */
	FACE_UP: 0,

	/**
	 * <p>input border style constant</p>
	 * @type int
	 * @final
	 */
	INPUT_BORDERSTYLE_BEZEL: 0,

	/**
	 * <p>input border style constant</p>
	 * @type int
	 * @final
	 */
	INPUT_BORDERSTYLE_LINE: 0,

	/**
	 * <p>input border style constant</p>
	 * @type int
	 * @final
	 */
	INPUT_BORDERSTYLE_NONE: 0,

	/**
	 * <p>input border style constant</p>
	 * @type int
	 * @final
	 */
	INPUT_BORDERSTYLE_ROUNDED: 0,

	/**
	 * <p>input button mode constant</p>
	 * @type int
	 * @final
	 */
	INPUT_BUTTONMODE_ALWAYS: 0,

	/**
	 * <p>input button mode constant</p>
	 * @type int
	 * @final
	 */
	INPUT_BUTTONMODE_NEVER: 0,

	/**
	 * <p>input button mode constant</p>
	 * @type int
	 * @final
	 */
	INPUT_BUTTONMODE_ONBLUR: 0,

	/**
	 * <p>input button mode constant</p>
	 * @type int
	 * @final
	 */
	INPUT_BUTTONMODE_ONFOCUS: 0,

	/**
	 * <p>textfield keyboard appearance constant</p>
	 * @type int
	 * @final
	 */
	KEYBOARD_APPEARANCE_ALERT: 0,

	/**
	 * <p>textfield keyboard appearance constant</p>
	 * @type int
	 * @final
	 */
	KEYBOARD_APPEARANCE_DEFAULT: 0,

	/**
	 * <p>textfield keyboard constant</p>
	 * @type int
	 * @final
	 */
	KEYBOARD_ASCII: 0,

	/**
	 * <p>textfield keyboard constant</p>
	 * @type int
	 * @final
	 */
	KEYBOARD_DEFAULT: 0,

	/**
	 * <p>textfield keyboard constant</p>
	 * @type int
	 * @final
	 */
	KEYBOARD_EMAIL: 0,

	/**
	 * <p>textfield keyboard constant</p>
	 * @type int
	 * @final
	 */
	KEYBOARD_NAMEPHONE_PAD: 0,

	/**
	 * <p>textfield keyboard constant</p>
	 * @type int
	 * @final
	 */
	KEYBOARD_NUMBERS_PUNCTUATION: 0,

	/**
	 * <p>textfield keyboard constant</p>
	 * @type int
	 * @final
	 */
	KEYBOARD_NUMBER_PAD: 0,

	/**
	 * <p>textfield keyboard constant</p>
	 * @type int
	 * @final
	 */
	KEYBOARD_PHONE_PAD: 0,

	/**
	 * <p>textfield keyboard constant</p>
	 * @type int
	 * @final
	 */
	KEYBOARD_URL: 0,

	/**
	 * <p>orientation constant</p>
	 * @type int
	 * @final
	 */
	LANDSCAPE_LEFT: 0,

	/**
	 * <p>orientation constant</p>
	 * @type int
	 * @final
	 */
	LANDSCAPE_RIGHT: 0,

	/**
	 * <p>picker type constant</p>
	 * @type int
	 * @final
	 */
	PICKER_TYPE_COUNT_DOWN_TIMER: 0,

	/**
	 * <p>picker type constant</p>
	 * @type int
	 * @final
	 */
	PICKER_TYPE_DATE: 0,

	/**
	 * <p>picker type constant</p>
	 * @type int
	 * @final
	 */
	PICKER_TYPE_DATE_AND_TIME: 0,

	/**
	 * <p>picker type constant</p>
	 * @type int
	 * @final
	 */
	PICKER_TYPE_PLAIN: 0,

	/**
	 * <p>picker type constant</p>
	 * @type int
	 * @final
	 */
	PICKER_TYPE_TIME: 0,

	/**
	 * <p>orientation constant</p>
	 * @type int
	 * @final
	 */
	PORTRAIT: 0,

	/**
	 * <p>textfield return key constant</p>
	 * @type int
	 * @final
	 */
	RETURNKEY_DEFAULT: 0,

	/**
	 * <p>textfield return key constant</p>
	 * @type int
	 * @final
	 */
	RETURNKEY_DONE: 0,

	/**
	 * <p>textfield return key constant</p>
	 * @type int
	 * @final
	 */
	RETURNKEY_EMERGENCY_CALL: 0,

	/**
	 * <p>textfield return key constant</p>
	 * @type int
	 * @final
	 */
	RETURNKEY_GO: 0,

	/**
	 * <p>textfield return key constant</p>
	 * @type int
	 * @final
	 */
	RETURNKEY_GOOGLE: 0,

	/**
	 * <p>textfield return key constant</p>
	 * @type int
	 * @final
	 */
	RETURNKEY_JOIN: 0,

	/**
	 * <p>textfield return key constant</p>
	 * @type int
	 * @final
	 */
	RETURNKEY_NEXT: 0,

	/**
	 * <p>textfield return key constant</p>
	 * @type int
	 * @final
	 */
	RETURNKEY_ROUTE: 0,

	/**
	 * <p>textfield return key constant</p>
	 * @type int
	 * @final
	 */
	RETURNKEY_SEARCH: 0,

	/**
	 * <p>textfield return key constant</p>
	 * @type int
	 * @final
	 */
	RETURNKEY_SEND: 0,

	/**
	 * <p>textfield return key constant</p>
	 * @type int
	 * @final
	 */
	RETURNKEY_YAHOO: 0,

	/**
	 * <p>text align constant</p>
	 * @type int
	 * @final
	 */
	TEXT_ALIGNMENT_CENTER: 0,

	/**
	 * <p>text align constant</p>
	 * @type int
	 * @final
	 */
	TEXT_ALIGNMENT_LEFT: 0,

	/**
	 * <p>text align constant</p>
	 * @type int
	 * @final
	 */
	TEXT_ALIGNMENT_RIGHT: 0,

	/**
	 * <p>text capitalization constant</p>
	 * @type int
	 * @final
	 */
	TEXT_AUTOCAPITALIZATION_ALL: 0,

	/**
	 * <p>text capitalization constant</p>
	 * @type int
	 * @final
	 */
	TEXT_AUTOCAPITALIZATION_NONE: 0,

	/**
	 * <p>text capitalization constant</p>
	 * @type int
	 * @final
	 */
	TEXT_AUTOCAPITALIZATION_SENTENCES: 0,

	/**
	 * <p>text capitalization constant</p>
	 * @type int
	 * @final
	 */
	TEXT_AUTOCAPITALIZATION_WORDS: 0,

	/**
	 * <p>text vertical align constant</p>
	 * @type int
	 * @final
	 */
	TEXT_VERTICAL_ALIGNMENT_BOTTOM: 0,

	/**
	 * <p>text vertical align constant</p>
	 * @type int
	 * @final
	 */
	TEXT_VERTICAL_ALIGNMENT_CENTER: 0,

	/**
	 * <p>text vertical align constant</p>
	 * @type int
	 * @final
	 */
	TEXT_VERTICAL_ALIGNMENT_TOP: 0,

	/**
	 * <p>orientation constant</p>
	 * @type int
	 * @final
	 */
	UNKNOWN: 0,

	/**
	 * <p>orientation constant</p>
	 * @type int
	 * @final
	 */
	UPSIDE_PORTRAIT: 0,

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * create and return an instance of <a href="Titanium.UI.2DMatrix.html">Titanium.UI.2DMatrix</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.UI.2DMatrix.html">Titanium.UI.2DMatrix</a>
	 */
	 create2DMatrix: function(parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.UI.3DMatrix.html">Titanium.UI.3DMatrix</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.UI.3DMatrix.html">Titanium.UI.3DMatrix</a>
	 */
	 create3DMatrix: function(parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.UI.ActivityIndicator.html">Titanium.UI.ActivityIndicator</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.UI.ActivityIndicator.html">Titanium.UI.ActivityIndicator</a>
	 */
	 createActivityIndicator: function(parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.UI.AlertDialog.html">Titanium.UI.AlertDialog</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.UI.AlertDialog.html">Titanium.UI.AlertDialog</a>
	 */
	 createAlertDialog: function(parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.UI.Animation.html">Titanium.UI.Animation</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.UI.Animation.html">Titanium.UI.Animation</a>
	 */
	 createAnimation: function(parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.UI.Button.html">Titanium.UI.Button</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.UI.Button.html">Titanium.UI.Button</a>
	 */
	 createButton: function(parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.UI.ButtonBar.html">Titanium.UI.ButtonBar</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.UI.ButtonBar.html">Titanium.UI.ButtonBar</a>
	 */
	 createButtonBar: function(parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.UI.CoverFlowView.html">Titanium.UI.CoverFlowView</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.UI.CoverFlowView.html">Titanium.UI.CoverFlowView</a>
	 */
	 createCoverFlowView: function(parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.UI.DashboardItem.html">Titanium.UI.DashboardItem</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.UI.DashboardItem.html">Titanium.UI.DashboardItem</a>
	 */
	 createDashboardItem: function(parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.UI.DashboardView.html">Titanium.UI.DashboardView</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.UI.DashboardView.html">Titanium.UI.DashboardView</a>
	 */
	 createDashboardView: function(parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.UI.EmailDialog.html">Titanium.UI.EmailDialog</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.UI.EmailDialog.html">Titanium.UI.EmailDialog</a>
	 */
	 createEmailDialog: function(parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.UI.ImageView.html">Titanium.UI.ImageView</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.UI.ImageView.html">Titanium.UI.ImageView</a>
	 */
	 createImageView: function(parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.UI.Label.html">Titanium.UI.Label</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.UI.Label.html">Titanium.UI.Label</a>
	 */
	 createLabel: function(parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.UI.OptionDialog.html">Titanium.UI.OptionDialog</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.UI.OptionDialog.html">Titanium.UI.OptionDialog</a>
	 */
	 createOptionDialog: function(parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.UI.Picker.html">Titanium.UI.Picker</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.UI.Picker.html">Titanium.UI.Picker</a>
	 */
	 createPicker: function(parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.UI.PickerColumn.html">Titanium.UI.PickerColumn</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.UI.PickerColumn.html">Titanium.UI.PickerColumn</a>
	 */
	 createPickerColumn: function(parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.UI.PickerRow.html">Titanium.UI.PickerRow</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.UI.PickerRow.html">Titanium.UI.PickerRow</a>
	 */
	 createPickerRow: function(parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.UI.ProgressBar.html">Titanium.UI.ProgressBar</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.UI.ProgressBar.html">Titanium.UI.ProgressBar</a>
	 */
	 createProgressBar: function(parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.UI.ScrollView.html">Titanium.UI.ScrollView</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.UI.ScrollView.html">Titanium.UI.ScrollView</a>
	 */
	 createScrollView: function(parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.UI.ScrollableView.html">Titanium.UI.ScrollableView</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.UI.ScrollableView.html">Titanium.UI.ScrollableView</a>
	 */
	 createScrollableView: function(parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.UI.SearchBar.html">Titanium.UI.SearchBar</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.UI.SearchBar.html">Titanium.UI.SearchBar</a>
	 */
	 createSearchBar: function(parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.UI.Slider.html">Titanium.UI.Slider</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.UI.Slider.html">Titanium.UI.Slider</a>
	 */
	 createSlider: function(parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.UI.Switch.html">Titanium.UI.Switch</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.UI.Switch.html">Titanium.UI.Switch</a>
	 */
	 createSwitch: function(parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.UI.Tab.html">Titanium.UI.Tab</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.UI.Tab.html">Titanium.UI.Tab</a>
	 */
	 createTab: function(parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.UI.TabGroup.html">Titanium.UI.TabGroup</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.UI.TabGroup.html">Titanium.UI.TabGroup</a>
	 */
	 createTabGroup: function(parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.UI.TabbedBar.html">Titanium.UI.TabbedBar</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.UI.TabbedBar.html">Titanium.UI.TabbedBar</a>
	 */
	 createTabbedBar: function(parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.UI.TableView.html">Titanium.UI.TableView</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.UI.TableView.html">Titanium.UI.TableView</a>
	 */
	 createTableView: function(parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.UI.TableViewRow.html">Titanium.UI.TableViewRow</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.UI.TableViewRow.html">Titanium.UI.TableViewRow</a>
	 */
	 createTableViewRow: function(parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.UI.TableViewSection.html">Titanium.UI.TableViewSection</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.UI.TableViewSection.html">Titanium.UI.TableViewSection</a>
	 */
	 createTableViewSection: function(parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.UI.TextArea.html">Titanium.UI.TextArea</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.UI.TextArea.html">Titanium.UI.TextArea</a>
	 */
	 createTextArea: function(parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.UI.TextField.html">Titanium.UI.TextField</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.UI.TextField.html">Titanium.UI.TextField</a>
	 */
	 createTextField: function(parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.UI.Toolbar.html">Titanium.UI.Toolbar</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.UI.Toolbar.html">Titanium.UI.Toolbar</a>
	 */
	 createToolbar: function(parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.UI.View.html">Titanium.UI.View</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.UI.View.html">Titanium.UI.View</a>
	 */
	 createView: function(parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.UI.WebView.html">Titanium.UI.WebView</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.UI.WebView.html">Titanium.UI.WebView</a>
	 */
	 createWebView: function(parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.UI.Window.html">Titanium.UI.Window</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.UI.Window.html">Titanium.UI.Window</a>
	 */
	 createWindow: function(parameters) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {}
};


/**
 * <p>An Activity Indicator is created by the method <a href="Titanium.UI.createActivityIndicator.html">Titanium.UI.createActivityIndicator</a>.  An activity indicator can be used to show the progress of an operation in the UI to let the user know some action is taking place.</p>
 */
Titanium.UI.ActivityIndicator = {
	/**
	 * <p>the color of the message label</p>
	 * @type string
	 * @final
	 */
	color: 0,

	/**
	 * <p>the font object for the activity message label</p>
	 * @type object
	 * @final
	 */
	font: 0,

	/**
	 * <p>the activity message label text</p>
	 * @type string
	 * @final
	 */
	message: 0,

	/**
	 * <p>the style constant of the activity indicator</p>
	 * @type int
	 * @final
	 */
	style: 0,

	/**
	 * <p>call hide to make the activity indicator hidden and stop spinning</p>
	 *
	 * @type void
	 */
	 hide: function() {},

	/**
	 * <p>call show to make the activity indicator visible and start spinning</p>
	 *
	 * @type void
	 */
	 show: function() {}
};


/**
 * <p>The Alert Dialog is created by <a href="Titanium.UI.createAlertDialog.html">Titanium.UI.createAlertDialog</a> and allows you to show a modal application dialog.</p>
 */
Titanium.UI.AlertDialog = {
	/**
	 * <p>array of button names as strings</p>
	 * @type array
	 * @final
	 */
	buttonNames: 0,

	/**
	 * <p>an index to indicate which button should be the cancel button.</p>
	 * @type int
	 * @final
	 */
	cancel: 0,

	/**
	 * <p>the message of the dialog</p>
	 * @type string
	 * @final
	 */
	message: 0,

	/**
	 * <p>the title of the dialog</p>
	 * @type string
	 * @final
	 */
	title: 0,

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * <p>cause the dialog to become visible</p>
	 *
	 * @type void
	 */
	 show: function() {}
};


/**
 * <p>The Android specific UI capabilities. All properties, methods and events in this namespace will only work on Android related devices.</p>
 */
Titanium.UI.Android = {
	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {}
};


/**
 * <p>The menu that appears at the lower portion of the display when the device's <em>Menu</em> button is pressed.</p>
 */
Titanium.UI.Android.OptionMenu = {
	/**
	 * <p>The <a href="Titanium.UI.Android.OptionMenu.Menu-object.html">Titanium.UI.Android.OptionMenu.Menu</a> for this context.</p>
	 * @type object
	 * @final
	 */
	menu: 0,

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * create and return an instance of <a href="Titanium.UI.Android.OptionMenu.Menu.html">Titanium.UI.Android.OptionMenu.Menu</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.UI.Android.OptionMenu.Menu.html">Titanium.UI.Android.OptionMenu.Menu</a>
	 */
	 createMenu: function(parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.UI.Android.OptionMenu.MenuItem.html">Titanium.UI.Android.OptionMenu.MenuItem</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.UI.Android.OptionMenu.MenuItem.html">Titanium.UI.Android.OptionMenu.MenuItem</a>
	 */
	 createMenuItem: function(parameters) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {}
};


/**
 * <p>A Menu allows you to provide a selection of options that appear when the <strong>menu</strong> button is pressed on device. The Menu is created by the method <a href="Titanium.UI.Android.OptionMenu.createMenu.html">Titanium.UI.Android.OptionMenu.createMenu</a></p>
 */
Titanium.UI.Android.OptionMenu.Menu = {
	/**
	 * <p>add a menu item. Items will be displayed in the menu based on insertion order.</p>
	 *
	 * @type void
	 * @param (object) the menu item to add. Must be a <a href="Titanium.UI.Android.OptionMenu.MenuItem.html">Titanium.UI.Android.OptionMenu.MenuItem</a>.
	 */
	 add: function(menuitem) {},

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {}
};


/**
 * <p>A MenuItem allows you provide a selectable option with a graphic and titel. The Menu Item is created by the method <a href="Titanium.UI.Android.OptionMenu.createMenuItem.html">Titanium.UI.Android.OptionMenu.createMenuItem</a></p>
 */
Titanium.UI.Android.OptionMenu.MenuItem = {
	/**
	 * <p>the path to the image to display on the menu option</p>
	 * @type string
	 * @final
	 */
	icon: 0,

	/**
	 * <p>the text for the menu option</p>
	 * @type string
	 * @final
	 */
	title: 0,

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {}
};


/**
 * <p>The Animation object is used for specifying lower-level animation properties and more low-level control of events during an animation. The Animation is created by the method <a href="Titanium.UI.createAnimation.html">Titanium.UI.createAnimation</a>.</p>
 */
Titanium.UI.Animation = {
	/**
	 * <p>the property specifies if the animation should be replayed in reverse upon completion</p>
	 * @type boolean
	 * @final
	 */
	autoreverse: 0,

	/**
	 * <p>value of the backgroundColor property to change during animation</p>
	 * @type string
	 * @final
	 */
	backgroundColor: 0,

	/**
	 * <p>value of the bottom property to change during animation</p>
	 * @type float
	 * @final
	 */
	bottom: 0,

	/**
	 * <p>value of the center property to change during animation</p>
	 * @type object
	 * @final
	 */
	center: 0,

	/**
	 * <p>value of the color property to change during animation</p>
	 * @type string
	 * @final
	 */
	color: 0,

	/**
	 * <p>the curve of the animation</p>
	 * @type int
	 * @final
	 */
	curve: 0,

	/**
	 * <p>the duration of time in milliseconds before starting the animation</p>
	 * @type float
	 * @final
	 */
	delay: 0,

	/**
	 * <p>the duration of time in milliseconds to perform the animation</p>
	 * @type float
	 * @final
	 */
	duration: 0,

	/**
	 * <p>value of the height property to change during animation</p>
	 * @type float
	 * @final
	 */
	height: 0,

	/**
	 * <p>value of the left property to change during animation</p>
	 * @type float
	 * @final
	 */
	left: 0,

	/**
	 * <p>value of the opacity property to change during animation</p>
	 * @type float
	 * @final
	 */
	opacity: 0,

	/**
	 * <p>value of the opaque property to change during animation</p>
	 * @type boolean
	 * @final
	 */
	opaque: 0,

	/**
	 * <p>the number of times the animation should be performed</p>
	 * @type int
	 * @final
	 */
	repeat: 0,

	/**
	 * <p>value of the right property to change during animation</p>
	 * @type float
	 * @final
	 */
	right: 0,

	/**
	 * <p>value of the top property to change during animation</p>
	 * @type float
	 * @final
	 */
	top: 0,

	/**
	 * <p>value of the transform property to change during animation</p>
	 * @type object
	 * @final
	 */
	transform: 0,

	/**
	 * <p>during a transition animation, this is the constant to the type of transition to use</p>
	 * @type int
	 * @final
	 */
	transition: 0,

	/**
	 * <p>value of the visible property to change during animation</p>
	 * @type boolean
	 * @final
	 */
	visible: 0,

	/**
	 * <p>value of the width property to change during animation</p>
	 * @type float
	 * @final
	 */
	width: 0,

	/**
	 * <p>value of the zIndex property to change during animation</p>
	 * @type int
	 * @final
	 */
	zIndex: 0,

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {}
};


/**
 * <p>A Button is created by the method <a href="Titanium.UI.createButton.html">Titanium.UI.createButton</a>.</p>
 */
Titanium.UI.Button = {
	/**
	 * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
	 * @type object
	 * @final
	 */
	anchorPoint: 0,

	/**
	 * read-only object with x and y properties of where the view is during animation
	 * @type object
	 * @final
	 */
	animatedCenterPoint: 0,

	/**
	 * <p>the buttons background color</p>
	 * @type string
	 * @final
	 */
	backgroundColor: 0,

	/**
	 * <p>url to a button image that is drawn as the background of the button when the button is in the disabled state</p>
	 * @type string
	 * @final
	 */
	backgroundDisabledImage: 0,

	/**
	 * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
	 * @type object
	 * @final
	 */
	backgroundGradient: 0,

	/**
	 * <p>url to a button image that is drawn as the background of the button</p>
	 * @type string
	 * @final
	 */
	backgroundImage: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
	 * @type float
	 * @final
	 */
	backgroundLeftCap: 0,

	/**
	 * <p>url to a button image that is drawn as the background of the button when the button is in the selected state</p>
	 * @type string
	 * @final
	 */
	backgroundSelectedImage: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
	 * @type float
	 * @final
	 */
	backgroundTopCap: 0,

	/**
	 * the border color of the view
	 * @type string
	 * @final
	 */
	borderColor: 0,

	/**
	 * the border radius of the view
	 * @type float
	 * @final
	 */
	borderRadius: 0,

	/**
	 * the border width of the view
	 * @type float
	 * @final
	 */
	borderWidth: 0,

	/**
	 * property for the view bottom position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	bottom: 0,

	/**
	 * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
	 * @type object
	 * @final
	 */
	center: 0,

	/**
	 * <p>the foreground color of the button text</p>
	 * @type string
	 * @final
	 */
	color: 0,

	/**
	 * <p>boolean that indicates if the button is enabled or not</p>
	 * @type boolean
	 * @final
	 */
	enabled: 0,

	/**
	 * <p>the font properties of the button</p>
	 * @type object
	 * @final
	 */
	font: 0,

	/**
	 * property for the view height. can be either float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	height: 0,

	/**
	 * <p>the image to display on the button to the left of the title</p>
	 * @type string
	 * @final
	 */
	image: 0,

	/**
	 * property for the view left position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	left: 0,

	/**
	 * the opacity from 0.0-1.0
	 * @type float
	 * @final
	 */
	opacity: 0,

	/**
	 * property for the view right position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	right: 0,

	/**
	 * <p>the selected color of the button text when the button is in the selected state</p>
	 * @type string
	 * @final
	 */
	selectedColor: 0,

	/**
	 * the size of the view as a dictionary of width and height properties
	 * @type object
	 * @final
	 */
	size: 0,

	/**
	 * <p>style constant for the type of button</p>
	 * @type int
	 * @final
	 */
	style: 0,

	/**
	 * <p>button title</p>
	 * @type string
	 * @final
	 */
	title: 0,

	/**
	 * property for the view top position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	top: 0,

	/**
	 * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
	 * @type boolean
	 * @final
	 */
	touchEnabled: 0,

	/**
	 * the transformation matrix to apply to the view
	 * @type object
	 * @final
	 */
	transform: 0,

	/**
	 * a boolean of the visibility of the view
	 * @type boolean
	 * @final
	 */
	visible: 0,

	/**
	 * property for the view width. can either be `auto`, a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	width: 0,

	/**
	 * the z index position relative to other sibling views
	 * @type int
	 * @final
	 */
	zIndex: 0,

	/**
	 * add a child to the view hierarchy
	 *
	 * @type void
	 * @param (object) the view to add to this views hiearchy
	 */
	 add: function(view) {},

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * animate the view
	 *
	 * @type void
	 * @param (object) either a dictionary of animation properties or an Animation object
	 * @param (function) function to be invoked upon completion of the animation
	 */
	 animate: function(obj, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * hide the view
	 *
	 * @type void
	 */
	 hide: function() {},

	/**
	 * remove a previously add view from the view hiearchy
	 *
	 * @type void
	 * @param (object) the view to remove from this views hiearchy
	 */
	 remove: function(view) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * make the view visible
	 *
	 * @type void
	 */
	 show: function() {},

	/**
	 * return a Blob image of the rendered view
	 *
	 * @type object
	 * @param (function) function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
	 */
	 toImage: function(f) {}
};


/**
 * <p>A Button Bar is created by the method <a href="Titanium.UI.createButtonBar.html">Titanium.UI.createButtonBar</a>.</p>
 */
Titanium.UI.ButtonBar = {
	/**
	 * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
	 * @type object
	 * @final
	 */
	anchorPoint: 0,

	/**
	 * read-only object with x and y properties of where the view is during animation
	 * @type object
	 * @final
	 */
	animatedCenterPoint: 0,

	/**
	 * <p>the background color of the button bar</p>
	 * @type string
	 * @final
	 */
	backgroundColor: 0,

	/**
	 * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
	 * @type object
	 * @final
	 */
	backgroundGradient: 0,

	/**
	 * the background image url of the view
	 * @type string
	 * @final
	 */
	backgroundImage: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
	 * @type float
	 * @final
	 */
	backgroundLeftCap: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
	 * @type float
	 * @final
	 */
	backgroundTopCap: 0,

	/**
	 * the border color of the view
	 * @type string
	 * @final
	 */
	borderColor: 0,

	/**
	 * the border radius of the view
	 * @type float
	 * @final
	 */
	borderRadius: 0,

	/**
	 * the border width of the view
	 * @type float
	 * @final
	 */
	borderWidth: 0,

	/**
	 * property for the view bottom position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	bottom: 0,

	/**
	 * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
	 * @type object
	 * @final
	 */
	center: 0,

	/**
	 * property for the view height. can be either float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	height: 0,

	/**
	 * <p>the selected index</p>
	 * @type int
	 * @final
	 */
	index: 0,

	/**
	 * <p>the array of labels for the button bar. each object should have the properties <tt>title</tt>, <tt>image</tt>, <tt>width</tt> and <tt>enabled</tt>.</p>
	 * @type array
	 * @final
	 */
	labels: 0,

	/**
	 * property for the view left position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	left: 0,

	/**
	 * the opacity from 0.0-1.0
	 * @type float
	 * @final
	 */
	opacity: 0,

	/**
	 * property for the view right position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	right: 0,

	/**
	 * the size of the view as a dictionary of width and height properties
	 * @type object
	 * @final
	 */
	size: 0,

	/**
	 * <p>the style of the button bar</p>
	 * @type int
	 * @final
	 */
	style: 0,

	/**
	 * property for the view top position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	top: 0,

	/**
	 * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
	 * @type boolean
	 * @final
	 */
	touchEnabled: 0,

	/**
	 * the transformation matrix to apply to the view
	 * @type object
	 * @final
	 */
	transform: 0,

	/**
	 * a boolean of the visibility of the view
	 * @type boolean
	 * @final
	 */
	visible: 0,

	/**
	 * property for the view width. can either be `auto`, a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	width: 0,

	/**
	 * the z index position relative to other sibling views
	 * @type int
	 * @final
	 */
	zIndex: 0,

	/**
	 * add a child to the view hierarchy
	 *
	 * @type void
	 * @param (object) the view to add to this views hiearchy
	 */
	 add: function(view) {},

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * animate the view
	 *
	 * @type void
	 * @param (object) either a dictionary of animation properties or an Animation object
	 * @param (function) function to be invoked upon completion of the animation
	 */
	 animate: function(obj, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * hide the view
	 *
	 * @type void
	 */
	 hide: function() {},

	/**
	 * remove a previously add view from the view hiearchy
	 *
	 * @type void
	 * @param (object) the view to remove from this views hiearchy
	 */
	 remove: function(view) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * make the view visible
	 *
	 * @type void
	 */
	 show: function() {},

	/**
	 * return a Blob image of the rendered view
	 *
	 * @type object
	 * @param (function) function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
	 */
	 toImage: function(f) {}
};


/**
 * <p>The Cover Flow view is container for showing  animated, three dimensional images in a nice UI. The Cover Flow view is created by the method <a href="Titanium.UI.createCoverFlowView.html">Titanium.UI.createCoverFlowView</a>.</p>
 */
Titanium.UI.CoverFlowView = {
	/**
	 * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
	 * @type object
	 * @final
	 */
	anchorPoint: 0,

	/**
	 * read-only object with x and y properties of where the view is during animation
	 * @type object
	 * @final
	 */
	animatedCenterPoint: 0,

	/**
	 * the background color of the view
	 * @type string
	 * @final
	 */
	backgroundColor: 0,

	/**
	 * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
	 * @type object
	 * @final
	 */
	backgroundGradient: 0,

	/**
	 * the background image url of the view
	 * @type string
	 * @final
	 */
	backgroundImage: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
	 * @type float
	 * @final
	 */
	backgroundLeftCap: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
	 * @type float
	 * @final
	 */
	backgroundTopCap: 0,

	/**
	 * the border color of the view
	 * @type string
	 * @final
	 */
	borderColor: 0,

	/**
	 * the border radius of the view
	 * @type float
	 * @final
	 */
	borderRadius: 0,

	/**
	 * the border width of the view
	 * @type float
	 * @final
	 */
	borderWidth: 0,

	/**
	 * property for the view bottom position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	bottom: 0,

	/**
	 * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
	 * @type object
	 * @final
	 */
	center: 0,

	/**
	 * property for the view height. can be either float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	height: 0,

	/**
	 * <p>array of images to display in the view</p>
	 * @type array
	 * @final
	 */
	images: 0,

	/**
	 * property for the view left position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	left: 0,

	/**
	 * the opacity from 0.0-1.0
	 * @type float
	 * @final
	 */
	opacity: 0,

	/**
	 * property for the view right position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	right: 0,

	/**
	 * <p>index to make selected</p>
	 * @type int
	 * @final
	 */
	selected: 0,

	/**
	 * the size of the view as a dictionary of width and height properties
	 * @type object
	 * @final
	 */
	size: 0,

	/**
	 * property for the view top position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	top: 0,

	/**
	 * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
	 * @type boolean
	 * @final
	 */
	touchEnabled: 0,

	/**
	 * the transformation matrix to apply to the view
	 * @type object
	 * @final
	 */
	transform: 0,

	/**
	 * a boolean of the visibility of the view
	 * @type boolean
	 * @final
	 */
	visible: 0,

	/**
	 * property for the view width. can either be `auto`, a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	width: 0,

	/**
	 * the z index position relative to other sibling views
	 * @type int
	 * @final
	 */
	zIndex: 0,

	/**
	 * add a child to the view hierarchy
	 *
	 * @type void
	 * @param (object) the view to add to this views hiearchy
	 */
	 add: function(view) {},

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * animate the view
	 *
	 * @type void
	 * @param (object) either a dictionary of animation properties or an Animation object
	 * @param (function) function to be invoked upon completion of the animation
	 */
	 animate: function(obj, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * hide the view
	 *
	 * @type void
	 */
	 hide: function() {},

	/**
	 * remove a previously add view from the view hiearchy
	 *
	 * @type void
	 * @param (object) the view to remove from this views hiearchy
	 */
	 remove: function(view) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * <p>change an image for a index</p>
	 *
	 * @type void
	 * @param (int) index to change
	 * @param (string) url to the new image
	 */
	 setURL: function(index, url) {},

	/**
	 * make the view visible
	 *
	 * @type void
	 */
	 show: function() {},

	/**
	 * return a Blob image of the rendered view
	 *
	 * @type object
	 * @param (function) function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
	 */
	 toImage: function(f) {}
};


/**
 * <p>An item that represents a visual icon in the <a href="Titanium.UI.DashboardView.html">Titanium.UI.DashboardView</a>. The Dashboard Item is created by the method <a href="Titanium.UI.createDashboardItem.html">Titanium.UI.createDashboardItem</a>.</p>
 */
Titanium.UI.DashboardItem = {
	/**
	 * <p>the badge value or <tt>0</tt> to remove the badge</p>
	 * @type int
	 * @final
	 */
	badge: 0,

	/**
	 * <p>a boolean to indicate if this item can be deleted when it edit mode</p>
	 * @type boolean
	 * @final
	 */
	canDelete: 0,

	/**
	 * <p>the URL to the image</p>
	 * @type string
	 * @final
	 */
	image: 0,

	/**
	 * <p>the URL to the image to display when the item is depressed (clicked)</p>
	 * @type string
	 * @final
	 */
	selectedImage: 0,

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {}
};


/**
 * <p>The Dashboard View provides a view that supports the ability to have Springboard-like view of icons which can be reordered by dragging and can contain multiple pages of icons in a scrollable view. The Dashboard View is created by the method <a href="Titanium.UI.createDashboardView.html">Titanium.UI.createDashboardView</a>.</p>
 */
Titanium.UI.DashboardView = {
	/**
	 * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
	 * @type object
	 * @final
	 */
	anchorPoint: 0,

	/**
	 * read-only object with x and y properties of where the view is during animation
	 * @type object
	 * @final
	 */
	animatedCenterPoint: 0,

	/**
	 * the background color of the view
	 * @type string
	 * @final
	 */
	backgroundColor: 0,

	/**
	 * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
	 * @type object
	 * @final
	 */
	backgroundGradient: 0,

	/**
	 * the background image url of the view
	 * @type string
	 * @final
	 */
	backgroundImage: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
	 * @type float
	 * @final
	 */
	backgroundLeftCap: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
	 * @type float
	 * @final
	 */
	backgroundTopCap: 0,

	/**
	 * the border color of the view
	 * @type string
	 * @final
	 */
	borderColor: 0,

	/**
	 * the border radius of the view
	 * @type float
	 * @final
	 */
	borderRadius: 0,

	/**
	 * the border width of the view
	 * @type float
	 * @final
	 */
	borderWidth: 0,

	/**
	 * property for the view bottom position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	bottom: 0,

	/**
	 * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
	 * @type object
	 * @final
	 */
	center: 0,

	/**
	 * <p>an array of <a href="Titanium.UI.DashboardItem-object.html">Titanium.UI.DashboardItem</a> objects to display in the view</p>
	 * @type array
	 * @final
	 */
	data: 0,

	/**
	 * property for the view height. can be either float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	height: 0,

	/**
	 * property for the view left position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	left: 0,

	/**
	 * the opacity from 0.0-1.0
	 * @type float
	 * @final
	 */
	opacity: 0,

	/**
	 * property for the view right position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	right: 0,

	/**
	 * the size of the view as a dictionary of width and height properties
	 * @type object
	 * @final
	 */
	size: 0,

	/**
	 * property for the view top position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	top: 0,

	/**
	 * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
	 * @type boolean
	 * @final
	 */
	touchEnabled: 0,

	/**
	 * the transformation matrix to apply to the view
	 * @type object
	 * @final
	 */
	transform: 0,

	/**
	 * a boolean of the visibility of the view
	 * @type boolean
	 * @final
	 */
	visible: 0,

	/**
	 * property for the view width. can either be `auto`, a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	width: 0,

	/**
	 * the z index position relative to other sibling views
	 * @type int
	 * @final
	 */
	zIndex: 0,

	/**
	 * add a child to the view hierarchy
	 *
	 * @type void
	 * @param (object) the view to add to this views hiearchy
	 */
	 add: function(view) {},

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * animate the view
	 *
	 * @type void
	 * @param (object) either a dictionary of animation properties or an Animation object
	 * @param (function) function to be invoked upon completion of the animation
	 */
	 animate: function(obj, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * hide the view
	 *
	 * @type void
	 */
	 hide: function() {},

	/**
	 * remove a previously add view from the view hiearchy
	 *
	 * @type void
	 * @param (object) the view to remove from this views hiearchy
	 */
	 remove: function(view) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * make the view visible
	 *
	 * @type void
	 */
	 show: function() {},

	/**
	 * <p>put the dashboard in edit mode</p>
	 *
	 * @type void
	 */
	 startEditing: function() {},

	/**
	 * <p>cancel editing</p>
	 *
	 * @type void
	 */
	 stopEditing: function() {},

	/**
	 * return a Blob image of the rendered view
	 *
	 * @type object
	 * @param (function) function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
	 */
	 toImage: function(f) {}
};


/**
 * <p>The Email Dialog is created by <a href="Titanium.UI.createEmailDialog.html">Titanium.UI.createEmailDialog</a> and allows you to send in application emails on behalf of the application user.</p>
 */
Titanium.UI.EmailDialog = {
	/**
	 * <p>constant for the CANCELLED status result</p>
	 * @type int
	 * @final
	 */
	CANCELLED: 0,

	/**
	 * <p>constant for the FAILED status result</p>
	 * @type int
	 * @final
	 */
	FAILED: 0,

	/**
	 * <p>constant for the SAVED status result</p>
	 * @type int
	 * @final
	 */
	SAVED: 0,

	/**
	 * <p>constant for the SENT status result</p>
	 * @type int
	 * @final
	 */
	SENT: 0,

	/**
	 * <p>the bar color of the email dialog window when opened</p>
	 * @type string
	 * @final
	 */
	barColor: 0,

	/**
	 * <p>array of email BCC: recipients</p>
	 * @type array
	 * @final
	 */
	bccRecipients: 0,

	/**
	 * <p>array of email CC: recipients</p>
	 * @type array
	 * @final
	 */
	ccRecipients: 0,

	/**
	 * <p>boolean to indicate whether the email messageBody should be sent as HTML content type. defaults to false</p>
	 * @type boolean
	 * @final
	 */
	html: 0,

	/**
	 * <p>the email message body</p>
	 * @type string
	 * @final
	 */
	messageBody: 0,

	/**
	 * <p>the subject line for the email</p>
	 * @type string
	 * @final
	 */
	subject: 0,

	/**
	 * <p>array of email recipients</p>
	 * @type array
	 * @final
	 */
	toRecipients: 0,

	/**
	 * <p>add an attachment to the email. the attachment can either be a Blob or File object. (Note: Android will only accept one attachment at this time.)</p>
	 *
	 * @type void
	 * @param (object) attachment object as either a Blob or File object
	 */
	 addAttachment: function(attachment) {},

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * <p>open the email dialog. the email dialog itself is a modal window</p>
	 *
	 * @type void
	 * @param (object) object of animation properties. pass <tt>animated</tt> property (as boolean) to indicate if the dialog should be animated on open.
	 */
	 open: function(properties) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {}
};


/**
 * <p>An Image View is used to display an image or a series of images in an animation. The Image View is created by the method <a href="Titanium.UI.createImageView.html">Titanium.UI.createImageView</a>.</p>
 */
Titanium.UI.ImageView = {
	/**
	 * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
	 * @type object
	 * @final
	 */
	anchorPoint: 0,

	/**
	 * read-only object with x and y properties of where the view is during animation
	 * @type object
	 * @final
	 */
	animatedCenterPoint: 0,

	/**
	 * <p>readonly boolean to indicate if the animation is animating</p>
	 * @type boolean
	 * @final
	 */
	animating: 0,

	/**
	 * the background color of the view
	 * @type string
	 * @final
	 */
	backgroundColor: 0,

	/**
	 * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
	 * @type object
	 * @final
	 */
	backgroundGradient: 0,

	/**
	 * the background image url of the view
	 * @type string
	 * @final
	 */
	backgroundImage: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
	 * @type float
	 * @final
	 */
	backgroundLeftCap: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
	 * @type float
	 * @final
	 */
	backgroundTopCap: 0,

	/**
	 * the border color of the view
	 * @type string
	 * @final
	 */
	borderColor: 0,

	/**
	 * the border radius of the view
	 * @type float
	 * @final
	 */
	borderRadius: 0,

	/**
	 * the border width of the view
	 * @type float
	 * @final
	 */
	borderWidth: 0,

	/**
	 * property for the view bottom position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	bottom: 0,

	/**
	 * <p>allow image to scale (Android)</p>
	 * @type boolean
	 * @final
	 */
	canScale: 0,

	/**
	 * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
	 * @type object
	 * @final
	 */
	center: 0,

	/**
	 * <p>url to the default image to display while loading a remote image</p>
	 * @type string
	 * @final
	 */
	defaultImage: 0,

	/**
	 * <p>amount of time in milliseconds to animate one cycle</p>
	 * @type float
	 * @final
	 */
	duration: 0,

	/**
	 * <p>enable zoom controls on Android. Default is true for backward compatibility. (1.3.0)</p>
	 * @type boolean
	 * @final
	 */
	enableZoomControls: 0,

	/**
	 * <p>height of the image display</p>
	 * @type float
	 * @final
	 */
	height: 0,

	/**
	 * <p>image to display either as string url, Blob or File</p>
	 * @type object
	 * @final
	 */
	image: 0,

	/**
	 * <p>array of images (either as string url, Blob or File) to display in an animation</p>
	 * @type array
	 * @final
	 */
	images: 0,

	/**
	 * property for the view left position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	left: 0,

	/**
	 * the opacity from 0.0-1.0
	 * @type float
	 * @final
	 */
	opacity: 0,

	/**
	 * <p>readonly boolean to indicate if the animation is paused</p>
	 * @type boolean
	 * @final
	 */
	paused: 0,

	/**
	 * <p>boolean to indicate if the default image should be displaying while loading a remote image</p>
	 * @type boolean
	 * @final
	 */
	preventDefaultImage: 0,

	/**
	 * <p>number of times to repeat the image animation</p>
	 * @type int
	 * @final
	 */
	repeatCount: 0,

	/**
	 * <p>boolean to indicate if the animation should happen in reverse (from last to first)</p>
	 * @type boolean
	 * @final
	 */
	reverse: 0,

	/**
	 * property for the view right position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	right: 0,

	/**
	 * the size of the view as a dictionary of width and height properties
	 * @type object
	 * @final
	 */
	size: 0,

	/**
	 * property for the view top position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	top: 0,

	/**
	 * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
	 * @type boolean
	 * @final
	 */
	touchEnabled: 0,

	/**
	 * the transformation matrix to apply to the view
	 * @type object
	 * @final
	 */
	transform: 0,

	/**
	 * <p>url to the image to display</p>
	 * @type string
	 * @final
	 */
	url: 0,

	/**
	 * a boolean of the visibility of the view
	 * @type boolean
	 * @final
	 */
	visible: 0,

	/**
	 * <p>width of the image display</p>
	 * @type float
	 * @final
	 */
	width: 0,

	/**
	 * the z index position relative to other sibling views
	 * @type int
	 * @final
	 */
	zIndex: 0,

	/**
	 * add a child to the view hierarchy
	 *
	 * @type void
	 * @param (object) the view to add to this views hiearchy
	 */
	 add: function(view) {},

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * animate the view
	 *
	 * @type void
	 * @param (object) either a dictionary of animation properties or an Animation object
	 * @param (function) function to be invoked upon completion of the animation
	 */
	 animate: function(obj, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * hide the view
	 *
	 * @type void
	 */
	 hide: function() {},

	/**
	 * <p>pause a started animation.</p>
	 *
	 * @type void
	 */
	 pause: function() {},

	/**
	 * remove a previously add view from the view hiearchy
	 *
	 * @type void
	 * @param (object) the view to remove from this views hiearchy
	 */
	 remove: function(view) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * make the view visible
	 *
	 * @type void
	 */
	 show: function() {},

	/**
	 * <p>start the image animation. this method only works if you set multiple images</p>
	 *
	 * @type void
	 */
	 start: function() {},

	/**
	 * <p>stop a started animation and reset the index to the first image</p>
	 *
	 * @type void
	 */
	 stop: function() {},

	/**
	 * <p>return the image as a Blob object</p>
	 *
	 * @type void
	 */
	 toBlob: function() {},

	/**
	 * return a Blob image of the rendered view
	 *
	 * @type object
	 * @param (function) function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
	 */
	 toImage: function(f) {}
};


/**
 * <p>A Label is created by the method <a href="Titanium.UI.createLabel.html">Titanium.UI.createLabel</a>.</p>
 */
Titanium.UI.Label = {
	/**
	 * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
	 * @type object
	 * @final
	 */
	anchorPoint: 0,

	/**
	 * read-only object with x and y properties of where the view is during animation
	 * @type object
	 * @final
	 */
	animatedCenterPoint: 0,

	/**
	 * the background color of the view
	 * @type string
	 * @final
	 */
	backgroundColor: 0,

	/**
	 * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
	 * @type object
	 * @final
	 */
	backgroundGradient: 0,

	/**
	 * <p>background image for the label</p>
	 * @type string
	 * @final
	 */
	backgroundImage: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
	 * @type float
	 * @final
	 */
	backgroundLeftCap: 0,

	/**
	 * <p>the number of pixels to extend the background image past the label on the bottom</p>
	 * @type int
	 * @final
	 */
	backgroundPaddingBottom: 0,

	/**
	 * <p>the number of pixels to extend the background image past the label on the left</p>
	 * @type int
	 * @final
	 */
	backgroundPaddingLeft: 0,

	/**
	 * <p>the number of pixels to extend the background image past the label on the right</p>
	 * @type int
	 * @final
	 */
	backgroundPaddingRight: 0,

	/**
	 * <p>the number of pixels to extend the background image past the label on the top</p>
	 * @type int
	 * @final
	 */
	backgroundPaddingTop: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
	 * @type float
	 * @final
	 */
	backgroundTopCap: 0,

	/**
	 * the border color of the view
	 * @type string
	 * @final
	 */
	borderColor: 0,

	/**
	 * the border radius of the view
	 * @type float
	 * @final
	 */
	borderRadius: 0,

	/**
	 * the border width of the view
	 * @type float
	 * @final
	 */
	borderWidth: 0,

	/**
	 * property for the view bottom position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	bottom: 0,

	/**
	 * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
	 * @type object
	 * @final
	 */
	center: 0,

	/**
	 * <p>the color of the label</p>
	 * @type string
	 * @final
	 */
	color: 0,

	/**
	 * <p>the label font object properties</p>
	 * @type object
	 * @final
	 */
	font: 0,

	/**
	 * property for the view height. can be either float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	height: 0,

	/**
	 * <p>the color of the label when in the highlighted state</p>
	 * @type string
	 * @final
	 */
	highlightedColor: 0,

	/**
	 * property for the view left position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	left: 0,

	/**
	 * <p>the minimum font size if the label is auto-adjusting based on its contents</p>
	 * @type int
	 * @final
	 */
	minimumFontSize: 0,

	/**
	 * the opacity from 0.0-1.0
	 * @type float
	 * @final
	 */
	opacity: 0,

	/**
	 * property for the view right position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	right: 0,

	/**
	 * <p>the text shadow color</p>
	 * @type string
	 * @final
	 */
	shadowColor: 0,

	/**
	 * <p>the shadow offset as a dictionary with the properties <tt>x</tt> and <tt>y</tt></p>
	 * @type object
	 * @final
	 */
	shadowOffset: 0,

	/**
	 * the size of the view as a dictionary of width and height properties
	 * @type object
	 * @final
	 */
	size: 0,

	/**
	 * <p>the text of the label</p>
	 * @type string
	 * @final
	 */
	text: 0,

	/**
	 * <p>the alignment constant or string value such as <tt>left</tt>, <tt>center</tt> or <tt>right</tt></p>
	 * @type string,int
	 * @final
	 */
	textAlign: 0,

	/**
	 * property for the view top position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	top: 0,

	/**
	 * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
	 * @type boolean
	 * @final
	 */
	touchEnabled: 0,

	/**
	 * the transformation matrix to apply to the view
	 * @type object
	 * @final
	 */
	transform: 0,

	/**
	 * a boolean of the visibility of the view
	 * @type boolean
	 * @final
	 */
	visible: 0,

	/**
	 * property for the view width. can either be `auto`, a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	width: 0,

	/**
	 * the z index position relative to other sibling views
	 * @type int
	 * @final
	 */
	zIndex: 0,

	/**
	 * add a child to the view hierarchy
	 *
	 * @type void
	 * @param (object) the view to add to this views hiearchy
	 */
	 add: function(view) {},

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * animate the view
	 *
	 * @type void
	 * @param (object) either a dictionary of animation properties or an Animation object
	 * @param (function) function to be invoked upon completion of the animation
	 */
	 animate: function(obj, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * hide the view
	 *
	 * @type void
	 */
	 hide: function() {},

	/**
	 * remove a previously add view from the view hiearchy
	 *
	 * @type void
	 * @param (object) the view to remove from this views hiearchy
	 */
	 remove: function(view) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * make the view visible
	 *
	 * @type void
	 */
	 show: function() {},

	/**
	 * return a Blob image of the rendered view
	 *
	 * @type object
	 * @param (function) function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
	 */
	 toImage: function(f) {}
};


/**
 * <p>The Option Dialog is created by <a href="Titanium.UI.createOptionDialog.html">Titanium.UI.createOptionDialog</a> and allows you to show a modal dialog of one or more options to the user.</p>
 */
Titanium.UI.OptionDialog = {
	/**
	 * <p>an index to indicate which button should be the cancel button</p>
	 * @type int
	 * @final
	 */
	cancel: 0,

	/**
	 * <p>the destructive button (indicated by a visual clue in the UI)</p>
	 * @type int
	 * @final
	 */
	destructive: 0,

	/**
	 * <p>array of button names as strings</p>
	 * @type array
	 * @final
	 */
	options: 0,

	/**
	 * <p>the title of the dialog</p>
	 * @type string
	 * @final
	 */
	title: 0,

	/**
	 * <p>cause the dialog to become visible</p>
	 *
	 * @type void
	 */
	 show: function() {}
};


/**
 * <p>A Picker is created by the method <a href="Titanium.UI.createPicker">Titanium.UI.createPicker</a>.  A Picker can be used to select one or more fixed values.</p>
 */
Titanium.UI.Picker = {
	/**
	 * <p>array of column values</p>
	 * @type array
	 * @final
	 */
	columns: 0,

	/**
	 * <p>the duration value in milliseconds for count down timer pickers</p>
	 * @type double
	 * @final
	 */
	countDownDuration: 0,

	/**
	 * <p>the locale used for displaying Date/Time pickers values</p>
	 * @type string
	 * @final
	 */
	locale: 0,

	/**
	 * <p>the maximum Date/Time for value for date pickers</p>
	 * @type date
	 * @final
	 */
	maxDate: 0,

	/**
	 * <p>the minimum Date/Time for value for date pickers</p>
	 * @type date
	 * @final
	 */
	minDate: 0,

	/**
	 * <p>property to set the interval displayed by the minutes wheel (for example, 15 minutes). The interval value must be evenly divided into 60; if it is not, the default value is used. The default and minimum values are 1; the maximum value is 30.</p>
	 * @type int
	 * @final
	 */
	minuteInterval: 0,

	/**
	 * <p>for basic picker, boolean value to indicate whether the visual selection style is shown. On the iPhone, this is a blue selected bar.</p>
	 * @type boolean
	 * @final
	 */
	selectionIndicator: 0,

	/**
	 * <p>the type constant for the picker. One of <a href="Titanium.UI.PICKER_TYPE_PLAIN.html">Titanium.UI.PICKER_TYPE_PLAIN</a> (default), <a href="Titanium.UI.PICKER_TYPE_DATE_AND_TIME.html">Titanium.UI.PICKER_TYPE_DATE_AND_TIME</a>, <a href="Titanium.UI.PICKER_TYPE_DATE.html">Titanium.UI.PICKER_TYPE_DATE</a>, <a href="Titanium.UI.PICKER_TYPE_TIME.html">Titanium.UI.PICKER_TYPE_TIME</a> or <a href="Titanium.UI.PICKER_TYPE_COUNT_DOWN_TIMER.html">Titanium.UI.PICKER_TYPE_COUNT_DOWN_TIMER</a>.</p>
	 * @type int
	 * @final
	 */
	type: 0,

	/**
	 * <p>the Date/Time value for date pickers</p>
	 * @type date
	 * @final
	 */
	value: 0,

	/**
	 * <p>add an array of rows, a single row or a column to the picker</p>
	 *
	 * @type void
	 * @param (array,object) add an array of rows, a single row or a column to the picker
	 */
	 add: function(data) {},

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * <p>get the selected row object for column</p>
	 *
	 * @type object
	 * @param (int) for the column index, return the row object or nil if not found
	 */
	 getSelectedRow: function(index) {},

	/**
	 * <p>causes the picker to reload the values from the new column</p>
	 *
	 * @type void
	 * @param (object) new column to load
	 */
	 reloadColumn: function(column) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * <p>set the column's row to the selected state</p>
	 *
	 * @type void
	 * @param (int) the column index
	 * @param (int) the row index
	 * @param (boolean) boolean to indicate if the selection should be animated (default)
	 */
	 setSelectedRow: function(column, row, animated) {}
};


/**
 * <p>The picker row object created by <a href="Titanium.UI.createPickerColumn">Titanium.UI.createPickerColumn</a>.</p>
 */
Titanium.UI.PickerColumn = {
	/**
	 * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
	 * @type object
	 * @final
	 */
	anchorPoint: 0,

	/**
	 * read-only object with x and y properties of where the view is during animation
	 * @type object
	 * @final
	 */
	animatedCenterPoint: 0,

	/**
	 * the background color of the view
	 * @type string
	 * @final
	 */
	backgroundColor: 0,

	/**
	 * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
	 * @type object
	 * @final
	 */
	backgroundGradient: 0,

	/**
	 * the background image url of the view
	 * @type string
	 * @final
	 */
	backgroundImage: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
	 * @type float
	 * @final
	 */
	backgroundLeftCap: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
	 * @type float
	 * @final
	 */
	backgroundTopCap: 0,

	/**
	 * the border color of the view
	 * @type string
	 * @final
	 */
	borderColor: 0,

	/**
	 * the border radius of the view
	 * @type float
	 * @final
	 */
	borderRadius: 0,

	/**
	 * the border width of the view
	 * @type float
	 * @final
	 */
	borderWidth: 0,

	/**
	 * property for the view bottom position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	bottom: 0,

	/**
	 * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
	 * @type object
	 * @final
	 */
	center: 0,

	/**
	 * property for the view height. can be either float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	height: 0,

	/**
	 * property for the view left position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	left: 0,

	/**
	 * the opacity from 0.0-1.0
	 * @type float
	 * @final
	 */
	opacity: 0,

	/**
	 * property for the view right position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	right: 0,

	/**
	 * <p>number of rows in the column (readonly)</p>
	 * @type int
	 * @final
	 */
	rowCount: 0,

	/**
	 * <p>an array of rows</p>
	 * @type array
	 * @final
	 */
	rows: 0,

	/**
	 * the size of the view as a dictionary of width and height properties
	 * @type object
	 * @final
	 */
	size: 0,

	/**
	 * property for the view top position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	top: 0,

	/**
	 * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
	 * @type boolean
	 * @final
	 */
	touchEnabled: 0,

	/**
	 * the transformation matrix to apply to the view
	 * @type object
	 * @final
	 */
	transform: 0,

	/**
	 * a boolean of the visibility of the view
	 * @type boolean
	 * @final
	 */
	visible: 0,

	/**
	 * property for the view width. can either be `auto`, a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	width: 0,

	/**
	 * the z index position relative to other sibling views
	 * @type int
	 * @final
	 */
	zIndex: 0,

	/**
	 * add a child to the view hierarchy
	 *
	 * @type void
	 * @param (object) the view to add to this views hiearchy
	 */
	 add: function(view) {},

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * <p>a <a href="Titanium.UI.PickerRow">Titanium.UI.PickerRow</a> object to add to the column</p>
	 *
	 * @type void
	 */
	 addRow: function() {},

	/**
	 * animate the view
	 *
	 * @type void
	 * @param (object) either a dictionary of animation properties or an Animation object
	 * @param (function) function to be invoked upon completion of the animation
	 */
	 animate: function(obj, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * hide the view
	 *
	 * @type void
	 */
	 hide: function() {},

	/**
	 * remove a previously add view from the view hiearchy
	 *
	 * @type void
	 * @param (object) the view to remove from this views hiearchy
	 */
	 remove: function(view) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * <p>a <a href="Titanium.UI.PickerRow">Titanium.UI.PickerRow</a> object to remove</p>
	 *
	 * @type void
	 */
	 removeRow: function() {},

	/**
	 * make the view visible
	 *
	 * @type void
	 */
	 show: function() {},

	/**
	 * return a Blob image of the rendered view
	 *
	 * @type object
	 * @param (function) function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
	 */
	 toImage: function(f) {}
};


/**
 * <p>The picker row object created by <a href="Titanium.UI.createPickerRow">Titanium.UI.createPickerRow</a>.</p>
 */
Titanium.UI.PickerRow = {
	/**
	 * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
	 * @type object
	 * @final
	 */
	anchorPoint: 0,

	/**
	 * read-only object with x and y properties of where the view is during animation
	 * @type object
	 * @final
	 */
	animatedCenterPoint: 0,

	/**
	 * the background color of the view
	 * @type string
	 * @final
	 */
	backgroundColor: 0,

	/**
	 * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
	 * @type object
	 * @final
	 */
	backgroundGradient: 0,

	/**
	 * the background image url of the view
	 * @type string
	 * @final
	 */
	backgroundImage: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
	 * @type float
	 * @final
	 */
	backgroundLeftCap: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
	 * @type float
	 * @final
	 */
	backgroundTopCap: 0,

	/**
	 * the border color of the view
	 * @type string
	 * @final
	 */
	borderColor: 0,

	/**
	 * the border radius of the view
	 * @type float
	 * @final
	 */
	borderRadius: 0,

	/**
	 * the border width of the view
	 * @type float
	 * @final
	 */
	borderWidth: 0,

	/**
	 * property for the view bottom position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	bottom: 0,

	/**
	 * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
	 * @type object
	 * @final
	 */
	center: 0,

	/**
	 * <p>the font size when displaying the text. ignored when using a custom view</p>
	 * @type int
	 * @final
	 */
	fontSize: 0,

	/**
	 * property for the view height. can be either float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	height: 0,

	/**
	 * property for the view left position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	left: 0,

	/**
	 * the opacity from 0.0-1.0
	 * @type float
	 * @final
	 */
	opacity: 0,

	/**
	 * property for the view right position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	right: 0,

	/**
	 * <p>when used in the constructor, set the row to selected on initial display</p>
	 * @type boolean
	 * @final
	 */
	selected: 0,

	/**
	 * the size of the view as a dictionary of width and height properties
	 * @type object
	 * @final
	 */
	size: 0,

	/**
	 * <p>the display text</p>
	 * @type string
	 * @final
	 */
	title: 0,

	/**
	 * property for the view top position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	top: 0,

	/**
	 * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
	 * @type boolean
	 * @final
	 */
	touchEnabled: 0,

	/**
	 * the transformation matrix to apply to the view
	 * @type object
	 * @final
	 */
	transform: 0,

	/**
	 * a boolean of the visibility of the view
	 * @type boolean
	 * @final
	 */
	visible: 0,

	/**
	 * property for the view width. can either be `auto`, a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	width: 0,

	/**
	 * the z index position relative to other sibling views
	 * @type int
	 * @final
	 */
	zIndex: 0,

	/**
	 * add a child to the view hierarchy
	 *
	 * @type void
	 * @param (object) the view to add to this views hiearchy
	 */
	 add: function(view) {},

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * animate the view
	 *
	 * @type void
	 * @param (object) either a dictionary of animation properties or an Animation object
	 * @param (function) function to be invoked upon completion of the animation
	 */
	 animate: function(obj, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * hide the view
	 *
	 * @type void
	 */
	 hide: function() {},

	/**
	 * remove a previously add view from the view hiearchy
	 *
	 * @type void
	 * @param (object) the view to remove from this views hiearchy
	 */
	 remove: function(view) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * make the view visible
	 *
	 * @type void
	 */
	 show: function() {},

	/**
	 * return a Blob image of the rendered view
	 *
	 * @type object
	 * @param (function) function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
	 */
	 toImage: function(f) {}
};


/**
 * <p>A Progress Bar is created by the method <a href="Titanium.UI.createProgressBar.html">Titanium.UI.createProgressBar</a>.</p>
 */
Titanium.UI.ProgressBar = {
	/**
	 * <p>the color of the progress bar text</p>
	 * @type string
	 * @final
	 */
	color: 0,

	/**
	 * <p>the font object for the progress bar text</p>
	 * @type object
	 * @final
	 */
	font: 0,

	/**
	 * <p>the maximum value of the progress bar</p>
	 * @type float
	 * @final
	 */
	max: 0,

	/**
	 * <p>the progress bar message</p>
	 * @type string
	 * @final
	 */
	message: 0,

	/**
	 * <p>the minimum value of the progress bar</p>
	 * @type float
	 * @final
	 */
	min: 0,

	/**
	 * <p>the style of the progress bar</p>
	 * @type int
	 * @final
	 */
	style: 0,

	/**
	 * <p>the current value of the progress bar</p>
	 * @type float
	 * @final
	 */
	value: 0
};


/**
 * <p>A Scroll View is used to create a scrollable region of content.  Views added to the Scroll View will be scrolled based on the content size of the Scroll View. The Scroll View is created by the method <a href="Titanium.UI.createScrollView.html">Titanium.UI.createScrollView</a>. Note: In Android, Scroll Views can only scroll in one direction, either vertical or horizontal, but not both at the same time. See the <a href="Titanium.UI.ScrollView.scrollType.html">Titanium.UI.ScrollView.scrollType</a> property</p>
 */
Titanium.UI.ScrollView = {
	/**
	 * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
	 * @type object
	 * @final
	 */
	anchorPoint: 0,

	/**
	 * read-only object with x and y properties of where the view is during animation
	 * @type object
	 * @final
	 */
	animatedCenterPoint: 0,

	/**
	 * the background color of the view
	 * @type string
	 * @final
	 */
	backgroundColor: 0,

	/**
	 * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
	 * @type object
	 * @final
	 */
	backgroundGradient: 0,

	/**
	 * the background image url of the view
	 * @type string
	 * @final
	 */
	backgroundImage: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
	 * @type float
	 * @final
	 */
	backgroundLeftCap: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
	 * @type float
	 * @final
	 */
	backgroundTopCap: 0,

	/**
	 * the border color of the view
	 * @type string
	 * @final
	 */
	borderColor: 0,

	/**
	 * the border radius of the view
	 * @type float
	 * @final
	 */
	borderRadius: 0,

	/**
	 * the border width of the view
	 * @type float
	 * @final
	 */
	borderWidth: 0,

	/**
	 * property for the view bottom position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	bottom: 0,

	/**
	 * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
	 * @type object
	 * @final
	 */
	center: 0,

	/**
	 * <p>the height of the scrollable area</p>
	 * @type float
	 * @final
	 */
	contentHeight: 0,

	/**
	 * <p>an object (with x and y properties) to indicate the offset of the content area</p>
	 * @type object
	 * @final
	 */
	contentOffset: 0,

	/**
	 * <p>the width of the scrollable area</p>
	 * @type float
	 * @final
	 */
	contentWidth: 0,

	/**
	 * <p>boolean to control bounce during scrolling</p>
	 * @type boolean
	 * @final
	 */
	disableBounce: 0,

	/**
	 * property for the view height. can be either float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	height: 0,

	/**
	 * <p>boolean to control the horizontal bounce during scrolling</p>
	 * @type boolean
	 * @final
	 */
	horizontalBounce: 0,

	/**
	 * property for the view left position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	left: 0,

	/**
	 * <p>the maximum scale of the content</p>
	 * @type float
	 * @final
	 */
	maxZoomScale: 0,

	/**
	 * <p>the minimum scale of the content</p>
	 * @type float
	 * @final
	 */
	minZoomScale: 0,

	/**
	 * the opacity from 0.0-1.0
	 * @type float
	 * @final
	 */
	opacity: 0,

	/**
	 * property for the view right position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	right: 0,

	/**
	 * <p>(Android only) the type of ScrollView: "vertical" or "horizontal"</p>
	 * @type string
	 * @final
	 */
	scrollType: 0,

	/**
	 * <p>boolean to indicate whether the horizontal scroll indicator is visible</p>
	 * @type boolean
	 * @final
	 */
	showHorizontalScrollIndicator: 0,

	/**
	 * <p>boolean to indicate whether the vertical scroll indicator is visible</p>
	 * @type boolean
	 * @final
	 */
	showVerticalScrollIndicator: 0,

	/**
	 * the size of the view as a dictionary of width and height properties
	 * @type object
	 * @final
	 */
	size: 0,

	/**
	 * property for the view top position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	top: 0,

	/**
	 * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
	 * @type boolean
	 * @final
	 */
	touchEnabled: 0,

	/**
	 * the transformation matrix to apply to the view
	 * @type object
	 * @final
	 */
	transform: 0,

	/**
	 * <p>boolean to control the vertical bounce during scrolling</p>
	 * @type boolean
	 * @final
	 */
	verticalBounce: 0,

	/**
	 * a boolean of the visibility of the view
	 * @type boolean
	 * @final
	 */
	visible: 0,

	/**
	 * property for the view width. can either be `auto`, a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	width: 0,

	/**
	 * the z index position relative to other sibling views
	 * @type int
	 * @final
	 */
	zIndex: 0,

	/**
	 * <p>set the zoom scale for the current content area</p>
	 * @type float
	 * @final
	 */
	zoomScale: 0,

	/**
	 * add a child to the view hierarchy
	 *
	 * @type void
	 * @param (object) the view to add to this views hiearchy
	 */
	 add: function(view) {},

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * animate the view
	 *
	 * @type void
	 * @param (object) either a dictionary of animation properties or an Animation object
	 * @param (function) function to be invoked upon completion of the animation
	 */
	 animate: function(obj, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * hide the view
	 *
	 * @type void
	 */
	 hide: function() {},

	/**
	 * remove a previously add view from the view hiearchy
	 *
	 * @type void
	 * @param (object) the view to remove from this views hiearchy
	 */
	 remove: function(view) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * <p>scrollTo a particular point</p>
	 *
	 * @type void
	 * @param (float) the x point within the view
	 * @param (float) the y point within the view
	 */
	 scrollTo: function(x, y) {},

	/**
	 * make the view visible
	 *
	 * @type void
	 */
	 show: function() {},

	/**
	 * return a Blob image of the rendered view
	 *
	 * @type object
	 * @param (function) function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
	 */
	 toImage: function(f) {}
};


/**
 * <p>The Scrollable View provides a view that supports horizontal scrolling on one or more views in a gesture motion.  The Scrollable View also optionally supports a visual paging control to indicate the page that the view is visible. The Scrollable View is created by the method <a href="Titanium.UI.createScrollableView.html">Titanium.UI.createScrollableView</a>.</p>
 */
Titanium.UI.ScrollableView = {
	/**
	 * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
	 * @type object
	 * @final
	 */
	anchorPoint: 0,

	/**
	 * read-only object with x and y properties of where the view is during animation
	 * @type object
	 * @final
	 */
	animatedCenterPoint: 0,

	/**
	 * the background color of the view
	 * @type string
	 * @final
	 */
	backgroundColor: 0,

	/**
	 * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
	 * @type object
	 * @final
	 */
	backgroundGradient: 0,

	/**
	 * the background image url of the view
	 * @type string
	 * @final
	 */
	backgroundImage: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
	 * @type float
	 * @final
	 */
	backgroundLeftCap: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
	 * @type float
	 * @final
	 */
	backgroundTopCap: 0,

	/**
	 * the border color of the view
	 * @type string
	 * @final
	 */
	borderColor: 0,

	/**
	 * the border radius of the view
	 * @type float
	 * @final
	 */
	borderRadius: 0,

	/**
	 * the border width of the view
	 * @type float
	 * @final
	 */
	borderWidth: 0,

	/**
	 * property for the view bottom position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	bottom: 0,

	/**
	 * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
	 * @type object
	 * @final
	 */
	center: 0,

	/**
	 * <p>the current page visible in the view</p>
	 * @type int
	 * @final
	 */
	currentPage: 0,

	/**
	 * property for the view height. can be either float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	height: 0,

	/**
	 * property for the view left position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	left: 0,

	/**
	 * <p>the maximum zoom scale for the view</p>
	 * @type float
	 * @final
	 */
	maxZoomScale: 0,

	/**
	 * <p>the minimum zoom scale for the view</p>
	 * @type float
	 * @final
	 */
	minZoomScale: 0,

	/**
	 * the opacity from 0.0-1.0
	 * @type float
	 * @final
	 */
	opacity: 0,

	/**
	 * <p>the color of the paging control. defaults to black.</p>
	 * @type string
	 * @final
	 */
	pagingControlColor: 0,

	/**
	 * <p>the height in pixels of the paging control, if visible. defaults to 20</p>
	 * @type float
	 * @final
	 */
	pagingControlHeight: 0,

	/**
	 * property for the view right position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	right: 0,

	/**
	 * <p>boolean to indicate whether the paging control UI is visible</p>
	 * @type boolean
	 * @final
	 */
	showPagingControl: 0,

	/**
	 * the size of the view as a dictionary of width and height properties
	 * @type object
	 * @final
	 */
	size: 0,

	/**
	 * property for the view top position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	top: 0,

	/**
	 * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
	 * @type boolean
	 * @final
	 */
	touchEnabled: 0,

	/**
	 * the transformation matrix to apply to the view
	 * @type object
	 * @final
	 */
	transform: 0,

	/**
	 * <p>array of view objects to place in the view</p>
	 * @type array
	 * @final
	 */
	views: 0,

	/**
	 * a boolean of the visibility of the view
	 * @type boolean
	 * @final
	 */
	visible: 0,

	/**
	 * property for the view width. can either be `auto`, a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	width: 0,

	/**
	 * the z index position relative to other sibling views
	 * @type int
	 * @final
	 */
	zIndex: 0,

	/**
	 * add a child to the view hierarchy
	 *
	 * @type void
	 * @param (object) the view to add to this views hiearchy
	 */
	 add: function(view) {},

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * <p>add a new view to the Scrollable View</p>
	 *
	 * @type void
	 * @param (object) the view to add
	 */
	 addView: function(view) {},

	/**
	 * animate the view
	 *
	 * @type void
	 * @param (object) either a dictionary of animation properties or an Animation object
	 * @param (function) function to be invoked upon completion of the animation
	 */
	 animate: function(obj, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * hide the view
	 *
	 * @type void
	 */
	 hide: function() {},

	/**
	 * remove a previously add view from the view hiearchy
	 *
	 * @type void
	 * @param (object) the view to remove from this views hiearchy
	 */
	 remove: function(view) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * <p>remove an existing view from the Scrollable View</p>
	 *
	 * @type void
	 * @param (object) the view to remove
	 */
	 removeView: function(view) {},

	/**
	 * <p>scroll to a specific view</p>
	 *
	 * @type void
	 * @param (int,object) either an integer index or the view object to bring into view as the currentPage
	 */
	 scrollToView: function(view) {},

	/**
	 * make the view visible
	 *
	 * @type void
	 */
	 show: function() {},

	/**
	 * return a Blob image of the rendered view
	 *
	 * @type object
	 * @param (function) function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
	 */
	 toImage: function(f) {}
};


/**
 * <p>A Search Bar is created by the method <a href="Titanium.UI.createSearchBar.html">Titanium.UI.createSearchBar</a>.</p>
 */
Titanium.UI.SearchBar = {
	/**
	 * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
	 * @type object
	 * @final
	 */
	anchorPoint: 0,

	/**
	 * read-only object with x and y properties of where the view is during animation
	 * @type object
	 * @final
	 */
	animatedCenterPoint: 0,

	/**
	 * <p>boolean to indicate if the text in the field should be autocapitalized as typed</p>
	 * @type boolean
	 * @final
	 */
	autocapitalization: 0,

	/**
	 * <p>boolean to indicate if the text in the field should be autocorrected as typed</p>
	 * @type boolean
	 * @final
	 */
	autocorrect: 0,

	/**
	 * the background color of the view
	 * @type string
	 * @final
	 */
	backgroundColor: 0,

	/**
	 * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
	 * @type object
	 * @final
	 */
	backgroundGradient: 0,

	/**
	 * the background image url of the view
	 * @type string
	 * @final
	 */
	backgroundImage: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
	 * @type float
	 * @final
	 */
	backgroundLeftCap: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
	 * @type float
	 * @final
	 */
	backgroundTopCap: 0,

	/**
	 * <p>the bar color of the search bar view</p>
	 * @type string
	 * @final
	 */
	barColor: 0,

	/**
	 * the border color of the view
	 * @type string
	 * @final
	 */
	borderColor: 0,

	/**
	 * the border radius of the view
	 * @type float
	 * @final
	 */
	borderRadius: 0,

	/**
	 * the border width of the view
	 * @type float
	 * @final
	 */
	borderWidth: 0,

	/**
	 * property for the view bottom position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	bottom: 0,

	/**
	 * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
	 * @type object
	 * @final
	 */
	center: 0,

	/**
	 * property for the view height. can be either float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	height: 0,

	/**
	 * <p>the text to show when the search bar field is not focused</p>
	 * @type string
	 * @final
	 */
	hintText: 0,

	/**
	 * <p>the keyboard type constant to use when the field is focused</p>
	 * @type int
	 * @final
	 */
	keyboardType: 0,

	/**
	 * property for the view left position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	left: 0,

	/**
	 * the opacity from 0.0-1.0
	 * @type float
	 * @final
	 */
	opacity: 0,

	/**
	 * <p>a single line of text displayed at the top of the search bar</p>
	 * @type string
	 * @final
	 */
	prompt: 0,

	/**
	 * property for the view right position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	right: 0,

	/**
	 * <p>boolean indicates whether the cancel button is displayed</p>
	 * @type boolean
	 * @final
	 */
	showCancel: 0,

	/**
	 * the size of the view as a dictionary of width and height properties
	 * @type object
	 * @final
	 */
	size: 0,

	/**
	 * property for the view top position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	top: 0,

	/**
	 * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
	 * @type boolean
	 * @final
	 */
	touchEnabled: 0,

	/**
	 * the transformation matrix to apply to the view
	 * @type object
	 * @final
	 */
	transform: 0,

	/**
	 * <p>the value of the search bar</p>
	 * @type string
	 * @final
	 */
	value: 0,

	/**
	 * a boolean of the visibility of the view
	 * @type boolean
	 * @final
	 */
	visible: 0,

	/**
	 * property for the view width. can either be `auto`, a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	width: 0,

	/**
	 * the z index position relative to other sibling views
	 * @type int
	 * @final
	 */
	zIndex: 0,

	/**
	 * add a child to the view hierarchy
	 *
	 * @type void
	 * @param (object) the view to add to this views hiearchy
	 */
	 add: function(view) {},

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * animate the view
	 *
	 * @type void
	 * @param (object) either a dictionary of animation properties or an Animation object
	 * @param (function) function to be invoked upon completion of the animation
	 */
	 animate: function(obj, callback) {},

	/**
	 * <p>called to force the search bar to lose focus</p>
	 *
	 * @type void
	 */
	 blur: function() {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * <p>called to force the search bar to focus</p>
	 *
	 * @type void
	 */
	 focus: function() {},

	/**
	 * hide the view
	 *
	 * @type void
	 */
	 hide: function() {},

	/**
	 * remove a previously add view from the view hiearchy
	 *
	 * @type void
	 * @param (object) the view to remove from this views hiearchy
	 */
	 remove: function(view) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * make the view visible
	 *
	 * @type void
	 */
	 show: function() {},

	/**
	 * return a Blob image of the rendered view
	 *
	 * @type object
	 * @param (function) function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
	 */
	 toImage: function(f) {}
};


/**
 * <p>A Slider is created by the method <a href="Titanium.UI.createSlider.html">Titanium.UI.createSlider</a>.</p>
 */
Titanium.UI.Slider = {
	/**
	 * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
	 * @type object
	 * @final
	 */
	anchorPoint: 0,

	/**
	 * read-only object with x and y properties of where the view is during animation
	 * @type object
	 * @final
	 */
	animatedCenterPoint: 0,

	/**
	 * the background color of the view
	 * @type string
	 * @final
	 */
	backgroundColor: 0,

	/**
	 * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
	 * @type object
	 * @final
	 */
	backgroundGradient: 0,

	/**
	 * the background image url of the view
	 * @type string
	 * @final
	 */
	backgroundImage: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
	 * @type float
	 * @final
	 */
	backgroundLeftCap: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
	 * @type float
	 * @final
	 */
	backgroundTopCap: 0,

	/**
	 * the border color of the view
	 * @type string
	 * @final
	 */
	borderColor: 0,

	/**
	 * the border radius of the view
	 * @type float
	 * @final
	 */
	borderRadius: 0,

	/**
	 * the border width of the view
	 * @type float
	 * @final
	 */
	borderWidth: 0,

	/**
	 * property for the view bottom position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	bottom: 0,

	/**
	 * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
	 * @type object
	 * @final
	 */
	center: 0,

	/**
	 * <p>the image url of the slider left track when in the disabled state</p>
	 * @type string
	 * @final
	 */
	disabledLeftTrackImage: 0,

	/**
	 * <p>the image url of the slider right track when in the disabled state</p>
	 * @type string
	 * @final
	 */
	disabledRightTrackImage: 0,

	/**
	 * <p>the image url of the slider thumb when in the disabled state</p>
	 * @type string
	 * @final
	 */
	disabledThumbImage: 0,

	/**
	 * <p>boolean to indicate the enabled state of the slider</p>
	 * @type boolean
	 * @final
	 */
	enabled: 0,

	/**
	 * property for the view height. can be either float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	height: 0,

	/**
	 * <p>the image url of the slider left track when in the highlighted state</p>
	 * @type string
	 * @final
	 */
	highlightedLeftTrackImage: 0,

	/**
	 * <p>the image url of the slider right track when in the highlighted state</p>
	 * @type string
	 * @final
	 */
	highlightedRightTrackImage: 0,

	/**
	 * <p>the image url of the slider thumb when in the highlighted state</p>
	 * @type string
	 * @final
	 */
	highlightedThumbImage: 0,

	/**
	 * property for the view left position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	left: 0,

	/**
	 * <p>the image url of the slider left track</p>
	 * @type string
	 * @final
	 */
	leftTrackImage: 0,

	/**
	 * <p>the maximum slider value</p>
	 * @type float
	 * @final
	 */
	max: 0,

	/**
	 * <p>the minimum slider value</p>
	 * @type float
	 * @final
	 */
	min: 0,

	/**
	 * the opacity from 0.0-1.0
	 * @type float
	 * @final
	 */
	opacity: 0,

	/**
	 * property for the view right position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	right: 0,

	/**
	 * <p>the image url of the slider right track</p>
	 * @type string
	 * @final
	 */
	rightTrackImage: 0,

	/**
	 * <p>the image url of the slider left track when in the selected state</p>
	 * @type string
	 * @final
	 */
	selectedLeftTrackImage: 0,

	/**
	 * <p>the image url of the slider right track when in the selected state</p>
	 * @type string
	 * @final
	 */
	selectedRightTrackImage: 0,

	/**
	 * <p>the image url of the slider thumb when in the selected state</p>
	 * @type string
	 * @final
	 */
	selectedThumbImage: 0,

	/**
	 * the size of the view as a dictionary of width and height properties
	 * @type object
	 * @final
	 */
	size: 0,

	/**
	 * <p>the image url to the slider thumb</p>
	 * @type string
	 * @final
	 */
	thumbImage: 0,

	/**
	 * property for the view top position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	top: 0,

	/**
	 * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
	 * @type boolean
	 * @final
	 */
	touchEnabled: 0,

	/**
	 * the transformation matrix to apply to the view
	 * @type object
	 * @final
	 */
	transform: 0,

	/**
	 * <p>the value of the slider</p>
	 * @type string
	 * @final
	 */
	value: 0,

	/**
	 * a boolean of the visibility of the view
	 * @type boolean
	 * @final
	 */
	visible: 0,

	/**
	 * property for the view width. can either be `auto`, a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	width: 0,

	/**
	 * the z index position relative to other sibling views
	 * @type int
	 * @final
	 */
	zIndex: 0,

	/**
	 * add a child to the view hierarchy
	 *
	 * @type void
	 * @param (object) the view to add to this views hiearchy
	 */
	 add: function(view) {},

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * animate the view
	 *
	 * @type void
	 * @param (object) either a dictionary of animation properties or an Animation object
	 * @param (function) function to be invoked upon completion of the animation
	 */
	 animate: function(obj, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * hide the view
	 *
	 * @type void
	 */
	 hide: function() {},

	/**
	 * remove a previously add view from the view hiearchy
	 *
	 * @type void
	 * @param (object) the view to remove from this views hiearchy
	 */
	 remove: function(view) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * make the view visible
	 *
	 * @type void
	 */
	 show: function() {},

	/**
	 * return a Blob image of the rendered view
	 *
	 * @type object
	 * @param (function) function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
	 */
	 toImage: function(f) {}
};


/**
 * <p>A Switch is created by the method <a href="Titanium.UI.createSwitch.html">Titanium.UI.createSwitch</a>.</p>
 */
Titanium.UI.Switch = {
	/**
	 * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
	 * @type object
	 * @final
	 */
	anchorPoint: 0,

	/**
	 * read-only object with x and y properties of where the view is during animation
	 * @type object
	 * @final
	 */
	animatedCenterPoint: 0,

	/**
	 * the background color of the view
	 * @type string
	 * @final
	 */
	backgroundColor: 0,

	/**
	 * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
	 * @type object
	 * @final
	 */
	backgroundGradient: 0,

	/**
	 * the background image url of the view
	 * @type string
	 * @final
	 */
	backgroundImage: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
	 * @type float
	 * @final
	 */
	backgroundLeftCap: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
	 * @type float
	 * @final
	 */
	backgroundTopCap: 0,

	/**
	 * the border color of the view
	 * @type string
	 * @final
	 */
	borderColor: 0,

	/**
	 * the border radius of the view
	 * @type float
	 * @final
	 */
	borderRadius: 0,

	/**
	 * the border width of the view
	 * @type float
	 * @final
	 */
	borderWidth: 0,

	/**
	 * property for the view bottom position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	bottom: 0,

	/**
	 * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
	 * @type object
	 * @final
	 */
	center: 0,

	/**
	 * <p>boolean for the state of the switch</p>
	 * @type boolean
	 * @final
	 */
	enabled: 0,

	/**
	 * property for the view height. can be either float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	height: 0,

	/**
	 * property for the view left position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	left: 0,

	/**
	 * the opacity from 0.0-1.0
	 * @type float
	 * @final
	 */
	opacity: 0,

	/**
	 * property for the view right position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	right: 0,

	/**
	 * the size of the view as a dictionary of width and height properties
	 * @type object
	 * @final
	 */
	size: 0,

	/**
	 * property for the view top position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	top: 0,

	/**
	 * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
	 * @type boolean
	 * @final
	 */
	touchEnabled: 0,

	/**
	 * the transformation matrix to apply to the view
	 * @type object
	 * @final
	 */
	transform: 0,

	/**
	 * <p>boolean value of the switch where true is the switch is <tt>on</tt> and false the switch if <tt>off</tt></p>
	 * @type boolean
	 * @final
	 */
	value: 0,

	/**
	 * a boolean of the visibility of the view
	 * @type boolean
	 * @final
	 */
	visible: 0,

	/**
	 * property for the view width. can either be `auto`, a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	width: 0,

	/**
	 * the z index position relative to other sibling views
	 * @type int
	 * @final
	 */
	zIndex: 0,

	/**
	 * add a child to the view hierarchy
	 *
	 * @type void
	 * @param (object) the view to add to this views hiearchy
	 */
	 add: function(view) {},

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * animate the view
	 *
	 * @type void
	 * @param (object) either a dictionary of animation properties or an Animation object
	 * @param (function) function to be invoked upon completion of the animation
	 */
	 animate: function(obj, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * hide the view
	 *
	 * @type void
	 */
	 hide: function() {},

	/**
	 * remove a previously add view from the view hiearchy
	 *
	 * @type void
	 * @param (object) the view to remove from this views hiearchy
	 */
	 remove: function(view) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * make the view visible
	 *
	 * @type void
	 */
	 show: function() {},

	/**
	 * return a Blob image of the rendered view
	 *
	 * @type object
	 * @param (function) function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
	 */
	 toImage: function(f) {}
};


/**
 * <p>A TabGroup Tab instance.  Each Tab instance maintains a stack of tab windows. Only one window within in the Tab can be visible at a time.  When a window is closed, either by the user or by code, the window is removed from the stack, make the previous window visible. The root tab window cannot be removed. The Tab Group is created by the method <a href="Titanium.UI.createTab.html">Titanium.UI.createTab</a>.</p>
 */
Titanium.UI.Tab = {
	/**
	 * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
	 * @type object
	 * @final
	 */
	anchorPoint: 0,

	/**
	 * read-only object with x and y properties of where the view is during animation
	 * @type object
	 * @final
	 */
	animatedCenterPoint: 0,

	/**
	 * the background color of the view
	 * @type string
	 * @final
	 */
	backgroundColor: 0,

	/**
	 * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
	 * @type object
	 * @final
	 */
	backgroundGradient: 0,

	/**
	 * the background image url of the view
	 * @type string
	 * @final
	 */
	backgroundImage: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
	 * @type float
	 * @final
	 */
	backgroundLeftCap: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
	 * @type float
	 * @final
	 */
	backgroundTopCap: 0,

	/**
	 * <p>the badge value for the tab group for this tab. null indicates no badge is value</p>
	 * @type string
	 * @final
	 */
	badge: 0,

	/**
	 * the border color of the view
	 * @type string
	 * @final
	 */
	borderColor: 0,

	/**
	 * the border radius of the view
	 * @type float
	 * @final
	 */
	borderRadius: 0,

	/**
	 * the border width of the view
	 * @type float
	 * @final
	 */
	borderWidth: 0,

	/**
	 * property for the view bottom position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	bottom: 0,

	/**
	 * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
	 * @type object
	 * @final
	 */
	center: 0,

	/**
	 * property for the view height. can be either float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	height: 0,

	/**
	 * <p>the icon url for the tab group for this tab</p>
	 * @type string
	 * @final
	 */
	icon: 0,

	/**
	 * property for the view left position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	left: 0,

	/**
	 * the opacity from 0.0-1.0
	 * @type float
	 * @final
	 */
	opacity: 0,

	/**
	 * property for the view right position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	right: 0,

	/**
	 * the size of the view as a dictionary of width and height properties
	 * @type object
	 * @final
	 */
	size: 0,

	/**
	 * <p>the title for the tab group for this tab</p>
	 * @type string
	 * @final
	 */
	title: 0,

	/**
	 * property for the view top position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	top: 0,

	/**
	 * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
	 * @type boolean
	 * @final
	 */
	touchEnabled: 0,

	/**
	 * the transformation matrix to apply to the view
	 * @type object
	 * @final
	 */
	transform: 0,

	/**
	 * a boolean of the visibility of the view
	 * @type boolean
	 * @final
	 */
	visible: 0,

	/**
	 * property for the view width. can either be `auto`, a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	width: 0,

	/**
	 * <p>the root level tab window.  all tabs must have at least one root level tab window.</p>
	 * @type object
	 * @final
	 */
	window: 0,

	/**
	 * the z index position relative to other sibling views
	 * @type int
	 * @final
	 */
	zIndex: 0,

	/**
	 * add a child to the view hierarchy
	 *
	 * @type void
	 * @param (object) the view to add to this views hiearchy
	 */
	 add: function(view) {},

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * animate the view
	 *
	 * @type void
	 * @param (object) either a dictionary of animation properties or an Animation object
	 * @param (function) function to be invoked upon completion of the animation
	 */
	 animate: function(obj, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * hide the view
	 *
	 * @type void
	 */
	 hide: function() {},

	/**
	 * remove a previously add view from the view hiearchy
	 *
	 * @type void
	 * @param (object) the view to remove from this views hiearchy
	 */
	 remove: function(view) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * make the view visible
	 *
	 * @type void
	 */
	 show: function() {},

	/**
	 * return a Blob image of the rendered view
	 *
	 * @type object
	 * @param (function) function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
	 */
	 toImage: function(f) {}
};


/**
 * <p>The Tab Group allows you to manage a tabbed UI of one or more windows. The Tab Group is created by the method <a href="Titanium.UI.createTabGroup.html">Titanium.UI.createTabGroup</a>.</p>
 */
Titanium.UI.TabGroup = {
	/**
	 * <p>the active tab</p>
	 * @type object
	 * @final
	 */
	activeTab: 0,

	/**
	 * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
	 * @type object
	 * @final
	 */
	anchorPoint: 0,

	/**
	 * read-only object with x and y properties of where the view is during animation
	 * @type object
	 * @final
	 */
	animatedCenterPoint: 0,

	/**
	 * the background color of the view
	 * @type string
	 * @final
	 */
	backgroundColor: 0,

	/**
	 * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
	 * @type object
	 * @final
	 */
	backgroundGradient: 0,

	/**
	 * the background image url of the view
	 * @type string
	 * @final
	 */
	backgroundImage: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
	 * @type float
	 * @final
	 */
	backgroundLeftCap: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
	 * @type float
	 * @final
	 */
	backgroundTopCap: 0,

	/**
	 * <p>the bar color</p>
	 * @type string
	 * @final
	 */
	barColor: 0,

	/**
	 * the border color of the view
	 * @type string
	 * @final
	 */
	borderColor: 0,

	/**
	 * the border radius of the view
	 * @type float
	 * @final
	 */
	borderRadius: 0,

	/**
	 * the border width of the view
	 * @type float
	 * @final
	 */
	borderWidth: 0,

	/**
	 * property for the view bottom position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	bottom: 0,

	/**
	 * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
	 * @type object
	 * @final
	 */
	center: 0,

	/**
	 * property for the view height. can be either float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	height: 0,

	/**
	 * property for the view left position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	left: 0,

	/**
	 * the opacity from 0.0-1.0
	 * @type float
	 * @final
	 */
	opacity: 0,

	/**
	 * property for the view right position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	right: 0,

	/**
	 * the size of the view as a dictionary of width and height properties
	 * @type object
	 * @final
	 */
	size: 0,

	/**
	 * <p>array of tab objects that are managed by the tab group</p>
	 * @type array
	 * @final
	 */
	tabs: 0,

	/**
	 * property for the view top position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	top: 0,

	/**
	 * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
	 * @type boolean
	 * @final
	 */
	touchEnabled: 0,

	/**
	 * the transformation matrix to apply to the view
	 * @type object
	 * @final
	 */
	transform: 0,

	/**
	 * a boolean of the visibility of the view
	 * @type boolean
	 * @final
	 */
	visible: 0,

	/**
	 * property for the view width. can either be `auto`, a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	width: 0,

	/**
	 * the z index position relative to other sibling views
	 * @type int
	 * @final
	 */
	zIndex: 0,

	/**
	 * add a child to the view hierarchy
	 *
	 * @type void
	 * @param (object) the view to add to this views hiearchy
	 */
	 add: function(view) {},

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * <p>add a tab to the tab group</p>
	 *
	 * @type void
	 */
	 addTab: function() {},

	/**
	 * animate the view
	 *
	 * @type void
	 * @param (object) either a dictionary of animation properties or an Animation object
	 * @param (function) function to be invoked upon completion of the animation
	 */
	 animate: function(obj, callback) {},

	/**
	 * <p>close the tab group and remove it from the UI</p>
	 *
	 * @type void
	 */
	 close: function() {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * hide the view
	 *
	 * @type void
	 */
	 hide: function() {},

	/**
	 * <p>open the tab group and make it visible</p>
	 *
	 * @type void
	 */
	 open: function() {},

	/**
	 * remove a previously add view from the view hiearchy
	 *
	 * @type void
	 * @param (object) the view to remove from this views hiearchy
	 */
	 remove: function(view) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * <p>remove a tab from the tab group</p>
	 *
	 * @type void
	 */
	 removeTab: function() {},

	/**
	 * make the view visible
	 *
	 * @type void
	 */
	 show: function() {},

	/**
	 * return a Blob image of the rendered view
	 *
	 * @type object
	 * @param (function) function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
	 */
	 toImage: function(f) {}
};


/**
 * <p>A Tabbed Bar is created by the method <a href="Titanium.UI.createTabbedBar.html">Titanium.UI.createTabbedBar</a>. The difference between the Tabbed Bar and the Button Bar is that the tabbed bar visually maintains a state (visually distinguished as a pressed or selected look).</p>
 */
Titanium.UI.TabbedBar = {
	/**
	 * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
	 * @type object
	 * @final
	 */
	anchorPoint: 0,

	/**
	 * read-only object with x and y properties of where the view is during animation
	 * @type object
	 * @final
	 */
	animatedCenterPoint: 0,

	/**
	 * <p>the background color of the tabbed bar</p>
	 * @type string
	 * @final
	 */
	backgroundColor: 0,

	/**
	 * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
	 * @type object
	 * @final
	 */
	backgroundGradient: 0,

	/**
	 * the background image url of the view
	 * @type string
	 * @final
	 */
	backgroundImage: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
	 * @type float
	 * @final
	 */
	backgroundLeftCap: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
	 * @type float
	 * @final
	 */
	backgroundTopCap: 0,

	/**
	 * the border color of the view
	 * @type string
	 * @final
	 */
	borderColor: 0,

	/**
	 * the border radius of the view
	 * @type float
	 * @final
	 */
	borderRadius: 0,

	/**
	 * the border width of the view
	 * @type float
	 * @final
	 */
	borderWidth: 0,

	/**
	 * property for the view bottom position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	bottom: 0,

	/**
	 * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
	 * @type object
	 * @final
	 */
	center: 0,

	/**
	 * property for the view height. can be either float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	height: 0,

	/**
	 * <p>the selected index</p>
	 * @type int
	 * @final
	 */
	index: 0,

	/**
	 * <p>the array of labels for the tabbed bar. each object should have the properties <tt>title</tt>, <tt>image</tt>, <tt>width</tt> and <tt>enabled</tt>.</p>
	 * @type array
	 * @final
	 */
	labels: 0,

	/**
	 * property for the view left position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	left: 0,

	/**
	 * the opacity from 0.0-1.0
	 * @type float
	 * @final
	 */
	opacity: 0,

	/**
	 * property for the view right position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	right: 0,

	/**
	 * the size of the view as a dictionary of width and height properties
	 * @type object
	 * @final
	 */
	size: 0,

	/**
	 * <p>the style of the tabbed bar</p>
	 * @type int
	 * @final
	 */
	style: 0,

	/**
	 * property for the view top position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	top: 0,

	/**
	 * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
	 * @type boolean
	 * @final
	 */
	touchEnabled: 0,

	/**
	 * the transformation matrix to apply to the view
	 * @type object
	 * @final
	 */
	transform: 0,

	/**
	 * a boolean of the visibility of the view
	 * @type boolean
	 * @final
	 */
	visible: 0,

	/**
	 * property for the view width. can either be `auto`, a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	width: 0,

	/**
	 * the z index position relative to other sibling views
	 * @type int
	 * @final
	 */
	zIndex: 0,

	/**
	 * add a child to the view hierarchy
	 *
	 * @type void
	 * @param (object) the view to add to this views hiearchy
	 */
	 add: function(view) {},

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * animate the view
	 *
	 * @type void
	 * @param (object) either a dictionary of animation properties or an Animation object
	 * @param (function) function to be invoked upon completion of the animation
	 */
	 animate: function(obj, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * hide the view
	 *
	 * @type void
	 */
	 hide: function() {},

	/**
	 * remove a previously add view from the view hiearchy
	 *
	 * @type void
	 * @param (object) the view to remove from this views hiearchy
	 */
	 remove: function(view) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * make the view visible
	 *
	 * @type void
	 */
	 show: function() {},

	/**
	 * return a Blob image of the rendered view
	 *
	 * @type object
	 * @param (function) function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
	 */
	 toImage: function(f) {}
};


/**
 * <p>A Table View allows you to create a scrollable table of content in a list-based fashion. The Table View is created by the method <a href="Titanium.UI.createTableView.html">Titanium.UI.createTableView</a>.</p>
 */
Titanium.UI.TableView = {
	/**
	 * <p>true if the rows can be selected</p>
	 * @type boolean
	 * @final
	 */
	allowsSelection: 0,

	/**
	 * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
	 * @type object
	 * @final
	 */
	anchorPoint: 0,

	/**
	 * read-only object with x and y properties of where the view is during animation
	 * @type object
	 * @final
	 */
	animatedCenterPoint: 0,

	/**
	 * <p>the background color of the table view</p>
	 * @type string
	 * @final
	 */
	backgroundColor: 0,

	/**
	 * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
	 * @type object
	 * @final
	 */
	backgroundGradient: 0,

	/**
	 * <p>the background image to render in the background of the table view</p>
	 * @type string
	 * @final
	 */
	backgroundImage: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
	 * @type float
	 * @final
	 */
	backgroundLeftCap: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
	 * @type float
	 * @final
	 */
	backgroundTopCap: 0,

	/**
	 * the border color of the view
	 * @type string
	 * @final
	 */
	borderColor: 0,

	/**
	 * the border radius of the view
	 * @type float
	 * @final
	 */
	borderRadius: 0,

	/**
	 * the border width of the view
	 * @type float
	 * @final
	 */
	borderWidth: 0,

	/**
	 * property for the view bottom position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	bottom: 0,

	/**
	 * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
	 * @type object
	 * @final
	 */
	center: 0,

	/**
	 * <p>the data array of objects to be used for the rows of the table view</p>
	 * @type array
	 * @final
	 */
	data: 0,

	/**
	 * <p>allow the table view to be editable (this must be true for swipe-to-delete)</p>
	 * @type boolean
	 * @final
	 */
	editable: 0,

	/**
	 * <p>boolean to control the editing state of the table view</p>
	 * @type boolean
	 * @final
	 */
	editing: 0,

	/**
	 * <p>the filter attribute to be used when searching. this property maps to your data object or a property on the row object</p>
	 * @type string
	 * @final
	 */
	filterAttribute: 0,

	/**
	 * <p>boolean to indicate if the search should be case sensitive or case insensitive (default)</p>
	 * @type boolean
	 * @final
	 */
	filterCaseInsensitive: 0,

	/**
	 * <p>the table view footer title</p>
	 * @type string
	 * @final
	 */
	footerTitle: 0,

	/**
	 * <p>the table view footer as a view that will be rendered instead of a label</p>
	 * @type object
	 * @final
	 */
	footerView: 0,

	/**
	 * <p>the table view header title</p>
	 * @type string
	 * @final
	 */
	headerTitle: 0,

	/**
	 * <p>the table view header as a view that will be rendered instead of a label</p>
	 * @type object
	 * @final
	 */
	headerView: 0,

	/**
	 * property for the view height. can be either float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	height: 0,

	/**
	 * <p>an array of objects (with title and index properties) to control the table view index</p>
	 * @type array
	 * @final
	 */
	index: 0,

	/**
	 * property for the view left position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	left: 0,

	/**
	 * <p>max row height for table view rows</p>
	 * @type float
	 * @final
	 */
	maxRowHeight: 0,

	/**
	 * <p>min row height for table view rows</p>
	 * @type float
	 * @final
	 */
	minRowHeight: 0,

	/**
	 * <p>boolean to control the moveable state of the table view</p>
	 * @type boolean
	 * @final
	 */
	moving: 0,

	/**
	 * the opacity from 0.0-1.0
	 * @type float
	 * @final
	 */
	opacity: 0,

	/**
	 * property for the view right position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	right: 0,

	/**
	 * <p>default row height for table view rows</p>
	 * @type float
	 * @final
	 */
	rowHeight: 0,

	/**
	 * <p>the search field to use for the table view</p>
	 * @type object
	 * @final
	 */
	search: 0,

	/**
	 * <p>boolean to control the visibility of the search field</p>
	 * @type boolean
	 * @final
	 */
	searchHidden: 0,

	/**
	 * <p>the separator color color as a hex or named value</p>
	 * @type string
	 * @final
	 */
	separatorColor: 0,

	/**
	 * <p>the separator style constant. For iPhone, Titanium.UI.iPhone.TableViewSeparatorStyle</p>
	 * @type int
	 * @final
	 */
	separatorStyle: 0,

	/**
	 * the size of the view as a dictionary of width and height properties
	 * @type object
	 * @final
	 */
	size: 0,

	/**
	 * <p>iPhone only. the style of the table view. constant from <a href="Titanium.UI.iPhone.TableViewStyle">Titanium.UI.iPhone.TableViewStyle</a></p>
	 * @type int
	 * @final
	 */
	style: 0,

	/**
	 * property for the view top position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	top: 0,

	/**
	 * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
	 * @type boolean
	 * @final
	 */
	touchEnabled: 0,

	/**
	 * the transformation matrix to apply to the view
	 * @type object
	 * @final
	 */
	transform: 0,

	/**
	 * a boolean of the visibility of the view
	 * @type boolean
	 * @final
	 */
	visible: 0,

	/**
	 * property for the view width. can either be `auto`, a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	width: 0,

	/**
	 * the z index position relative to other sibling views
	 * @type int
	 * @final
	 */
	zIndex: 0,

	/**
	 * add a child to the view hierarchy
	 *
	 * @type void
	 * @param (object) the view to add to this views hiearchy
	 */
	 add: function(view) {},

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * animate the view
	 *
	 * @type void
	 * @param (object) either a dictionary of animation properties or an Animation object
	 * @param (function) function to be invoked upon completion of the animation
	 */
	 animate: function(obj, callback) {},

	/**
	 * <p>append a row to the table, optionally with animation</p>
	 *
	 * @type void
	 * @param (object) row to append
	 * @param (object) animation properties
	 */
	 appendRow: function(row, properties) {},

	/**
	 * <p>delete an existing row, optionally with animation</p>
	 *
	 * @type void
	 * @param (object) row to delete
	 * @param (object) animation properties
	 */
	 deleteRow: function(row, properties) {},

	/**
	 * <p>programmatically deselect a row</p>
	 *
	 * @type void
	 * @param (int) row index to deselect
	 */
	 deselectRow: function(row) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * hide the view
	 *
	 * @type void
	 */
	 hide: function() {},

	/**
	 * <p>insert a row before another row, optionally with animation</p>
	 *
	 * @type void
	 * @param (int) index
	 * @param (object) row to insert
	 * @param (object) animation properties
	 */
	 insertRowAfter: function(index, row, properties) {},

	/**
	 * <p>insert a row after another row, optionally with animation</p>
	 *
	 * @type void
	 * @param (int) index
	 * @param (object) row to insert
	 * @param (object) animation properties
	 */
	 insertRowBefore: function(index, row, properties) {},

	/**
	 * remove a previously add view from the view hiearchy
	 *
	 * @type void
	 * @param (object) the view to remove from this views hiearchy
	 */
	 remove: function(view) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * <p>scroll to a specific row index and ensure that that row is on screen</p>
	 *
	 * @type void
	 * @param (int) index
	 * @param (object) animation properties. <tt>position</tt> property controls the position constant to use for position (on iPhone, use constants from Titanium.UI.iPhone.TableViewScrollPosition).
	 */
	 scrollToIndex: function(index, properties) {},

	/**
	 * <p>scroll the table to a specific top position where 0 is the topmost y position in the table view</p>
	 *
	 * @type void
	 * @param (float) y position
	 * @param (object) optional dictionary with the key <tt>animated</tt> (default, true) as boolean to indicate if the scroll should be animated or immediate
	 */
	 scrollToTop: function(top, properties) {},

	/**
	 * <p>programmatically select a row</p>
	 *
	 * @type void
	 * @param (int) row index to select
	 */
	 selectRow: function(row) {},

	/**
	 * <p>set the data in the table, optionally with animation</p>
	 *
	 * @type void
	 * @param (array) data array of rows either as objects or row objects
	 * @param (object) animation properties
	 */
	 setData: function(data, properties) {},

	/**
	 * make the view visible
	 *
	 * @type void
	 */
	 show: function() {},

	/**
	 * return a Blob image of the rendered view
	 *
	 * @type object
	 * @param (function) function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
	 */
	 toImage: function(f) {},

	/**
	 * <p>update an existing row, optionally with animation</p>
	 *
	 * @type void
	 * @param (object) row data to update
	 * @param (object) animation properties
	 */
	 updateRow: function(row, properties) {}
};


/**
 * <p>A TableView row object created by the method <a href="Titanium.UI.createTableViewRow.html">Titanium.UI.createTableViewRow</a>.</p>
 */
Titanium.UI.TableViewRow = {
	/**
	 * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
	 * @type object
	 * @final
	 */
	anchorPoint: 0,

	/**
	 * read-only object with x and y properties of where the view is during animation
	 * @type object
	 * @final
	 */
	animatedCenterPoint: 0,

	/**
	 * <p>the background cell color</p>
	 * @type string
	 * @final
	 */
	backgroundColor: 0,

	/**
	 * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
	 * @type object
	 * @final
	 */
	backgroundGradient: 0,

	/**
	 * <p>the background cell image</p>
	 * @type string
	 * @final
	 */
	backgroundImage: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
	 * @type float
	 * @final
	 */
	backgroundLeftCap: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
	 * @type float
	 * @final
	 */
	backgroundTopCap: 0,

	/**
	 * the border color of the view
	 * @type string
	 * @final
	 */
	borderColor: 0,

	/**
	 * the border radius of the view
	 * @type float
	 * @final
	 */
	borderRadius: 0,

	/**
	 * the border width of the view
	 * @type float
	 * @final
	 */
	borderWidth: 0,

	/**
	 * property for the view bottom position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	bottom: 0,

	/**
	 * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
	 * @type object
	 * @final
	 */
	center: 0,

	/**
	 * <p>the class name of the table. each table view cell must have a unique class name if the cell layout is different. however, use the same name for rows that have the same structural layout (even if the content is different) to provide maximum rendering performance.</p>
	 * @type string
	 * @final
	 */
	className: 0,

	/**
	 * <p>default color of the row when not selected</p>
	 * @type string
	 * @final
	 */
	color: 0,

	/**
	 * <p>render a system provided check mark in the right image area of the row cell</p>
	 * @type boolean
	 * @final
	 */
	hasCheck: 0,

	/**
	 * <p>render a system provided right arrow in the right image area of the row cell</p>
	 * @type boolean
	 * @final
	 */
	hasChild: 0,

	/**
	 * <p>render a system provided blue indicator icon in the right image area of the row cell</p>
	 * @type boolean
	 * @final
	 */
	hasDetail: 0,

	/**
	 * <p>the height of the row. specify <tt>auto</tt> to calculate the row height based on the size of the child views of the row</p>
	 * @type float
	 * @final
	 */
	height: 0,

	/**
	 * <p>the indention level for the cell (defaults to 0)</p>
	 * @type int
	 * @final
	 */
	indentionLevel: 0,

	/**
	 * <p>the layout algorithm to use for the layout. either absolute (default) or vertical.</p>
	 * @type string
	 * @final
	 */
	layout: 0,

	/**
	 * property for the view left position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	left: 0,

	/**
	 * <p>image url to render in the left image area of the row cell</p>
	 * @type string
	 * @final
	 */
	leftImage: 0,

	/**
	 * the opacity from 0.0-1.0
	 * @type float
	 * @final
	 */
	opacity: 0,

	/**
	 * property for the view right position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	right: 0,

	/**
	 * <p>image url to render in the right image area of the row cell</p>
	 * @type string
	 * @final
	 */
	rightImage: 0,

	/**
	 * <p>the background color to render when the row cell is selected</p>
	 * @type string
	 * @final
	 */
	selectedBackgroundColor: 0,

	/**
	 * <p>the background image to render when the row cell is selected</p>
	 * @type string
	 * @final
	 */
	selectedBackgroundImage: 0,

	/**
	 * <p>color of the row during selection</p>
	 * @type string
	 * @final
	 */
	selectedColor: 0,

	/**
	 * <p>a selection style constant to control the selection color. For iPhone, use the constants from Titanium.UI.iPhone.TableViewCellSelectionStyle</p>
	 * @type int
	 * @final
	 */
	selectionStyle: 0,

	/**
	 * the size of the view as a dictionary of width and height properties
	 * @type object
	 * @final
	 */
	size: 0,

	/**
	 * <p>the title cell value. do not specify if using views as children of the row</p>
	 * @type string
	 * @final
	 */
	title: 0,

	/**
	 * property for the view top position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	top: 0,

	/**
	 * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
	 * @type boolean
	 * @final
	 */
	touchEnabled: 0,

	/**
	 * the transformation matrix to apply to the view
	 * @type object
	 * @final
	 */
	transform: 0,

	/**
	 * a boolean of the visibility of the view
	 * @type boolean
	 * @final
	 */
	visible: 0,

	/**
	 * property for the view width. can either be `auto`, a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	width: 0,

	/**
	 * the z index position relative to other sibling views
	 * @type int
	 * @final
	 */
	zIndex: 0,

	/**
	 * add a child to the view hierarchy
	 *
	 * @type void
	 * @param (object) the view to add to this views hiearchy
	 */
	 add: function(view) {},

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * animate the view
	 *
	 * @type void
	 * @param (object) either a dictionary of animation properties or an Animation object
	 * @param (function) function to be invoked upon completion of the animation
	 */
	 animate: function(obj, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * hide the view
	 *
	 * @type void
	 */
	 hide: function() {},

	/**
	 * remove a previously add view from the view hiearchy
	 *
	 * @type void
	 * @param (object) the view to remove from this views hiearchy
	 */
	 remove: function(view) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * make the view visible
	 *
	 * @type void
	 */
	 show: function() {},

	/**
	 * return a Blob image of the rendered view
	 *
	 * @type object
	 * @param (function) function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
	 */
	 toImage: function(f) {}
};


/**
 * <p>A TableView section object created by the method <a href="Titanium.UI.createTableViewSection.html">Titanium.UI.createTableViewSection</a>.</p>
 */
Titanium.UI.TableViewSection = {
	/**
	 * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
	 * @type object
	 * @final
	 */
	anchorPoint: 0,

	/**
	 * read-only object with x and y properties of where the view is during animation
	 * @type object
	 * @final
	 */
	animatedCenterPoint: 0,

	/**
	 * the background color of the view
	 * @type string
	 * @final
	 */
	backgroundColor: 0,

	/**
	 * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
	 * @type object
	 * @final
	 */
	backgroundGradient: 0,

	/**
	 * the background image url of the view
	 * @type string
	 * @final
	 */
	backgroundImage: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
	 * @type float
	 * @final
	 */
	backgroundLeftCap: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
	 * @type float
	 * @final
	 */
	backgroundTopCap: 0,

	/**
	 * the border color of the view
	 * @type string
	 * @final
	 */
	borderColor: 0,

	/**
	 * the border radius of the view
	 * @type float
	 * @final
	 */
	borderRadius: 0,

	/**
	 * the border width of the view
	 * @type float
	 * @final
	 */
	borderWidth: 0,

	/**
	 * property for the view bottom position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	bottom: 0,

	/**
	 * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
	 * @type object
	 * @final
	 */
	center: 0,

	/**
	 * <p>the title of the section footer</p>
	 * @type string
	 * @final
	 */
	footerTitle: 0,

	/**
	 * <p>a view to use instead of the default label when rendering the section footer</p>
	 * @type object
	 * @final
	 */
	footerView: 0,

	/**
	 * <p>the title of the section header</p>
	 * @type string
	 * @final
	 */
	headerTitle: 0,

	/**
	 * <p>a view to use instead of the default label when rendering the section header</p>
	 * @type object
	 * @final
	 */
	headerView: 0,

	/**
	 * property for the view height. can be either float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	height: 0,

	/**
	 * property for the view left position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	left: 0,

	/**
	 * the opacity from 0.0-1.0
	 * @type float
	 * @final
	 */
	opacity: 0,

	/**
	 * property for the view right position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	right: 0,

	/**
	 * <p>the (readonly) number of rows in the section</p>
	 * @type int
	 * @final
	 */
	rowCount: 0,

	/**
	 * the size of the view as a dictionary of width and height properties
	 * @type object
	 * @final
	 */
	size: 0,

	/**
	 * property for the view top position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	top: 0,

	/**
	 * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
	 * @type boolean
	 * @final
	 */
	touchEnabled: 0,

	/**
	 * the transformation matrix to apply to the view
	 * @type object
	 * @final
	 */
	transform: 0,

	/**
	 * a boolean of the visibility of the view
	 * @type boolean
	 * @final
	 */
	visible: 0,

	/**
	 * property for the view width. can either be `auto`, a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	width: 0,

	/**
	 * the z index position relative to other sibling views
	 * @type int
	 * @final
	 */
	zIndex: 0,

	/**
	 * <p>add a row to the section</p>
	 *
	 * @type void
	 * @param (object) the view to add to this views hiearchy
	 * @param (object) the row object to add to the section
	 */
	 add: function(view, row) {},

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * animate the view
	 *
	 * @type void
	 * @param (object) either a dictionary of animation properties or an Animation object
	 * @param (function) function to be invoked upon completion of the animation
	 */
	 animate: function(obj, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * hide the view
	 *
	 * @type void
	 */
	 hide: function() {},

	/**
	 * <p>remove a remove from the section</p>
	 *
	 * @type void
	 * @param (object) the view to remove from this views hiearchy
	 * @param (object) the row object to remove from the section
	 */
	 remove: function(view, row) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * <p>retrieve the row object at a specific index</p>
	 *
	 * @type void
	 */
	 rowAtIndex: function() {},

	/**
	 * make the view visible
	 *
	 * @type void
	 */
	 show: function() {},

	/**
	 * return a Blob image of the rendered view
	 *
	 * @type object
	 * @param (function) function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
	 */
	 toImage: function(f) {}
};


/**
 * <p>A Text Area is created by the method <a href="Titanium.UI.createTextArea.html">Titanium.UI.createTextArea</a>. The Text Area is a multiline field.</p>
 */
Titanium.UI.TextArea = {
	/**
	 * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
	 * @type object
	 * @final
	 */
	anchorPoint: 0,

	/**
	 * read-only object with x and y properties of where the view is during animation
	 * @type object
	 * @final
	 */
	animatedCenterPoint: 0,

	/**
	 * <p>value of the background color of the field</p>
	 * @type string
	 * @final
	 */
	backgroundColor: 0,

	/**
	 * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
	 * @type object
	 * @final
	 */
	backgroundGradient: 0,

	/**
	 * the background image url of the view
	 * @type string
	 * @final
	 */
	backgroundImage: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
	 * @type float
	 * @final
	 */
	backgroundLeftCap: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
	 * @type float
	 * @final
	 */
	backgroundTopCap: 0,

	/**
	 * the border color of the view
	 * @type string
	 * @final
	 */
	borderColor: 0,

	/**
	 * the border radius of the view
	 * @type float
	 * @final
	 */
	borderRadius: 0,

	/**
	 * the border width of the view
	 * @type float
	 * @final
	 */
	borderWidth: 0,

	/**
	 * property for the view bottom position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	bottom: 0,

	/**
	 * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
	 * @type object
	 * @final
	 */
	center: 0,

	/**
	 * <p>boolean indicating if the field is editable</p>
	 * @type boolean
	 * @final
	 */
	editable: 0,

	/**
	 * <p>boolean indicating the enabled state of the field</p>
	 * @type boolean
	 * @final
	 */
	enabled: 0,

	/**
	 * property for the view height. can be either float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	height: 0,

	/**
	 * <p>array of toolbar button objects to be used when the keyboard is displayed</p>
	 * @type array
	 * @final
	 */
	keyboardToolbar: 0,

	/**
	 * <p>the color of the keyboard toolbar</p>
	 * @type string
	 * @final
	 */
	keyboardToolbarColor: 0,

	/**
	 * <p>the height of the keyboard toolbar</p>
	 * @type float
	 * @final
	 */
	keyboardToolbarHeight: 0,

	/**
	 * property for the view left position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	left: 0,

	/**
	 * the opacity from 0.0-1.0
	 * @type float
	 * @final
	 */
	opacity: 0,

	/**
	 * property for the view right position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	right: 0,

	/**
	 * the size of the view as a dictionary of width and height properties
	 * @type object
	 * @final
	 */
	size: 0,

	/**
	 * <p>boolean to indicate if the return key should be suppressed during entry</p>
	 * @type boolean
	 * @final
	 */
	suppressReturn: 0,

	/**
	 * property for the view top position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	top: 0,

	/**
	 * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
	 * @type boolean
	 * @final
	 */
	touchEnabled: 0,

	/**
	 * the transformation matrix to apply to the view
	 * @type object
	 * @final
	 */
	transform: 0,

	/**
	 * <p>value of the field</p>
	 * @type string
	 * @final
	 */
	value: 0,

	/**
	 * a boolean of the visibility of the view
	 * @type boolean
	 * @final
	 */
	visible: 0,

	/**
	 * property for the view width. can either be `auto`, a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	width: 0,

	/**
	 * the z index position relative to other sibling views
	 * @type int
	 * @final
	 */
	zIndex: 0,

	/**
	 * add a child to the view hierarchy
	 *
	 * @type void
	 * @param (object) the view to add to this views hiearchy
	 */
	 add: function(view) {},

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * animate the view
	 *
	 * @type void
	 * @param (object) either a dictionary of animation properties or an Animation object
	 * @param (function) function to be invoked upon completion of the animation
	 */
	 animate: function(obj, callback) {},

	/**
	 * <p>force the field to lose focus</p>
	 *
	 * @type void
	 */
	 blur: function() {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * <p>force the field to gain focus</p>
	 *
	 * @type void
	 */
	 focus: function() {},

	/**
	 * <p>return boolean (true) if the field has text</p>
	 *
	 * @type void
	 */
	 hasText: function() {},

	/**
	 * hide the view
	 *
	 * @type void
	 */
	 hide: function() {},

	/**
	 * remove a previously add view from the view hiearchy
	 *
	 * @type void
	 * @param (object) the view to remove from this views hiearchy
	 */
	 remove: function(view) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * make the view visible
	 *
	 * @type void
	 */
	 show: function() {},

	/**
	 * return a Blob image of the rendered view
	 *
	 * @type object
	 * @param (function) function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
	 */
	 toImage: function(f) {}
};


/**
 * <p>A Text Area is created by the method <a href="Titanium.UI.createTextField.html">Titanium.UI.createTextField</a>. The Text Field is a single line field.</p>
 */
Titanium.UI.TextField = {
	/**
	 * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
	 * @type object
	 * @final
	 */
	anchorPoint: 0,

	/**
	 * read-only object with x and y properties of where the view is during animation
	 * @type object
	 * @final
	 */
	animatedCenterPoint: 0,

	/**
	 * <p>value of the background color of the field</p>
	 * @type string
	 * @final
	 */
	backgroundColor: 0,

	/**
	 * <p>the image url to the background image of the field when in the disabled state</p>
	 * @type string
	 * @final
	 */
	backgroundDisabledImage: 0,

	/**
	 * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
	 * @type object
	 * @final
	 */
	backgroundGradient: 0,

	/**
	 * <p>the image url to the background image of the field</p>
	 * @type string
	 * @final
	 */
	backgroundImage: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
	 * @type float
	 * @final
	 */
	backgroundLeftCap: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
	 * @type float
	 * @final
	 */
	backgroundTopCap: 0,

	/**
	 * the border color of the view
	 * @type string
	 * @final
	 */
	borderColor: 0,

	/**
	 * the border radius of the view
	 * @type float
	 * @final
	 */
	borderRadius: 0,

	/**
	 * <p>the border style constant for the field</p>
	 * @type int
	 * @final
	 */
	borderStyle: 0,

	/**
	 * the border width of the view
	 * @type float
	 * @final
	 */
	borderWidth: 0,

	/**
	 * property for the view bottom position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	bottom: 0,

	/**
	 * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
	 * @type object
	 * @final
	 */
	center: 0,

	/**
	 * <p>the mode constant for how to handle displaying the clear button</p>
	 * @type int
	 * @final
	 */
	clearButtonMode: 0,

	/**
	 * <p>boolean that indicates if the value of the field is cleared upon editing</p>
	 * @type boolean
	 * @final
	 */
	clearOnEdit: 0,

	/**
	 * <p>boolean indicating if the field is editable</p>
	 * @type boolean
	 * @final
	 */
	editable: 0,

	/**
	 * <p>boolean indicating the enabled state of the field</p>
	 * @type boolean
	 * @final
	 */
	enabled: 0,

	/**
	 * property for the view height. can be either float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	height: 0,

	/**
	 * <p>the hint text to display when the field is unfocused</p>
	 * @type string
	 * @final
	 */
	hintText: 0,

	/**
	 * <p>array of toolbar button objects to be used when the keyboard is displayed</p>
	 * @type array
	 * @final
	 */
	keyboardToolbar: 0,

	/**
	 * <p>the color of the keyboard toolbar</p>
	 * @type string
	 * @final
	 */
	keyboardToolbarColor: 0,

	/**
	 * <p>the height of the keyboard toolbar</p>
	 * @type float
	 * @final
	 */
	keyboardToolbarHeight: 0,

	/**
	 * property for the view left position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	left: 0,

	/**
	 * <p>the left button view</p>
	 * @type object
	 * @final
	 */
	leftButton: 0,

	/**
	 * <p>the mode of the left button view</p>
	 * @type int
	 * @final
	 */
	leftButtonMode: 0,

	/**
	 * <p>the left padding of the space between the button and the edge of the field</p>
	 * @type float
	 * @final
	 */
	leftButtonPadding: 0,

	/**
	 * <p>the minimum size of the font when the font is sized based on the contents</p>
	 * @type int
	 * @final
	 */
	minimumFontSize: 0,

	/**
	 * the opacity from 0.0-1.0
	 * @type float
	 * @final
	 */
	opacity: 0,

	/**
	 * <p>the left padding of the text field</p>
	 * @type float
	 * @final
	 */
	paddingLeft: 0,

	/**
	 * <p>the right padding of the text field</p>
	 * @type float
	 * @final
	 */
	paddingRight: 0,

	/**
	 * property for the view right position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	right: 0,

	/**
	 * <p>the right button view</p>
	 * @type object
	 * @final
	 */
	rightButton: 0,

	/**
	 * <p>the mode of the right button view</p>
	 * @type int
	 * @final
	 */
	rightButtonMode: 0,

	/**
	 * <p>the right padding of the space between the button and the edge of the field</p>
	 * @type float
	 * @final
	 */
	rightButtonPadding: 0,

	/**
	 * the size of the view as a dictionary of width and height properties
	 * @type object
	 * @final
	 */
	size: 0,

	/**
	 * <p>boolean to indicate if the return key should be suppressed during entry</p>
	 * @type boolean
	 * @final
	 */
	suppressReturn: 0,

	/**
	 * property for the view top position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	top: 0,

	/**
	 * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
	 * @type boolean
	 * @final
	 */
	touchEnabled: 0,

	/**
	 * the transformation matrix to apply to the view
	 * @type object
	 * @final
	 */
	transform: 0,

	/**
	 * <p>value of the field</p>
	 * @type string
	 * @final
	 */
	value: 0,

	/**
	 * <p>the constant or string value for the fields vertical alignment.</p>
	 * @type int,string
	 * @final
	 */
	verticalAlign: 0,

	/**
	 * a boolean of the visibility of the view
	 * @type boolean
	 * @final
	 */
	visible: 0,

	/**
	 * property for the view width. can either be `auto`, a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	width: 0,

	/**
	 * the z index position relative to other sibling views
	 * @type int
	 * @final
	 */
	zIndex: 0,

	/**
	 * add a child to the view hierarchy
	 *
	 * @type void
	 * @param (object) the view to add to this views hiearchy
	 */
	 add: function(view) {},

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * animate the view
	 *
	 * @type void
	 * @param (object) either a dictionary of animation properties or an Animation object
	 * @param (function) function to be invoked upon completion of the animation
	 */
	 animate: function(obj, callback) {},

	/**
	 * <p>force the field to lose focus</p>
	 *
	 * @type void
	 */
	 blur: function() {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * <p>force the field to gain focus</p>
	 *
	 * @type void
	 */
	 focus: function() {},

	/**
	 * <p>return boolean (true) if the field has text</p>
	 *
	 * @type void
	 */
	 hasText: function() {},

	/**
	 * hide the view
	 *
	 * @type void
	 */
	 hide: function() {},

	/**
	 * remove a previously add view from the view hiearchy
	 *
	 * @type void
	 * @param (object) the view to remove from this views hiearchy
	 */
	 remove: function(view) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * make the view visible
	 *
	 * @type void
	 */
	 show: function() {},

	/**
	 * return a Blob image of the rendered view
	 *
	 * @type object
	 * @param (function) function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
	 */
	 toImage: function(f) {}
};


/**
 * <p>A Toolbar is created by the method <a href="Titanium.UI.createToolbar.html">Titanium.UI.createToolbar</a>.  A Toolbar can be placed at the bottom of a window and contain buttons.</p>
 */
Titanium.UI.Toolbar = {
	/**
	 * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
	 * @type object
	 * @final
	 */
	anchorPoint: 0,

	/**
	 * read-only object with x and y properties of where the view is during animation
	 * @type object
	 * @final
	 */
	animatedCenterPoint: 0,

	/**
	 * the background color of the view
	 * @type string
	 * @final
	 */
	backgroundColor: 0,

	/**
	 * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
	 * @type object
	 * @final
	 */
	backgroundGradient: 0,

	/**
	 * the background image url of the view
	 * @type string
	 * @final
	 */
	backgroundImage: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
	 * @type float
	 * @final
	 */
	backgroundLeftCap: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
	 * @type float
	 * @final
	 */
	backgroundTopCap: 0,

	/**
	 * the border color of the view
	 * @type string
	 * @final
	 */
	borderColor: 0,

	/**
	 * the border radius of the view
	 * @type float
	 * @final
	 */
	borderRadius: 0,

	/**
	 * the border width of the view
	 * @type float
	 * @final
	 */
	borderWidth: 0,

	/**
	 * property for the view bottom position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	bottom: 0,

	/**
	 * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
	 * @type object
	 * @final
	 */
	center: 0,

	/**
	 * property for the view height. can be either float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	height: 0,

	/**
	 * property for the view left position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	left: 0,

	/**
	 * the opacity from 0.0-1.0
	 * @type float
	 * @final
	 */
	opacity: 0,

	/**
	 * property for the view right position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	right: 0,

	/**
	 * the size of the view as a dictionary of width and height properties
	 * @type object
	 * @final
	 */
	size: 0,

	/**
	 * property for the view top position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	top: 0,

	/**
	 * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
	 * @type boolean
	 * @final
	 */
	touchEnabled: 0,

	/**
	 * the transformation matrix to apply to the view
	 * @type object
	 * @final
	 */
	transform: 0,

	/**
	 * a boolean of the visibility of the view
	 * @type boolean
	 * @final
	 */
	visible: 0,

	/**
	 * property for the view width. can either be `auto`, a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	width: 0,

	/**
	 * the z index position relative to other sibling views
	 * @type int
	 * @final
	 */
	zIndex: 0,

	/**
	 * add a child to the view hierarchy
	 *
	 * @type void
	 * @param (object) the view to add to this views hiearchy
	 */
	 add: function(view) {},

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * animate the view
	 *
	 * @type void
	 * @param (object) either a dictionary of animation properties or an Animation object
	 * @param (function) function to be invoked upon completion of the animation
	 */
	 animate: function(obj, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * hide the view
	 *
	 * @type void
	 */
	 hide: function() {},

	/**
	 * remove a previously add view from the view hiearchy
	 *
	 * @type void
	 * @param (object) the view to remove from this views hiearchy
	 */
	 remove: function(view) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * make the view visible
	 *
	 * @type void
	 */
	 show: function() {},

	/**
	 * return a Blob image of the rendered view
	 *
	 * @type object
	 * @param (function) function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
	 */
	 toImage: function(f) {}
};


/**
 * <p>The View is an empty drawing surface or container. The View is created by the method <a href="Titanium.UI.createView.html">Titanium.UI.createView</a>.</p>
 */
Titanium.UI.View = {
	/**
	 * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
	 * @type object
	 * @final
	 */
	anchorPoint: 0,

	/**
	 * read-only object with x and y properties of where the view is during animation
	 * @type object
	 * @final
	 */
	animatedCenterPoint: 0,

	/**
	 * the background color of the view
	 * @type string
	 * @final
	 */
	backgroundColor: 0,

	/**
	 * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
	 * @type object
	 * @final
	 */
	backgroundGradient: 0,

	/**
	 * the background image url of the view
	 * @type string
	 * @final
	 */
	backgroundImage: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
	 * @type float
	 * @final
	 */
	backgroundLeftCap: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
	 * @type float
	 * @final
	 */
	backgroundTopCap: 0,

	/**
	 * the border color of the view
	 * @type string
	 * @final
	 */
	borderColor: 0,

	/**
	 * the border radius of the view
	 * @type float
	 * @final
	 */
	borderRadius: 0,

	/**
	 * the border width of the view
	 * @type float
	 * @final
	 */
	borderWidth: 0,

	/**
	 * property for the view bottom position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	bottom: 0,

	/**
	 * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
	 * @type object
	 * @final
	 */
	center: 0,

	/**
	 * property for the view height. can be either float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	height: 0,

	/**
	 * property for the view left position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	left: 0,

	/**
	 * the opacity from 0.0-1.0
	 * @type float
	 * @final
	 */
	opacity: 0,

	/**
	 * property for the view right position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	right: 0,

	/**
	 * the size of the view as a dictionary of width and height properties
	 * @type object
	 * @final
	 */
	size: 0,

	/**
	 * property for the view top position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	top: 0,

	/**
	 * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
	 * @type boolean
	 * @final
	 */
	touchEnabled: 0,

	/**
	 * the transformation matrix to apply to the view
	 * @type object
	 * @final
	 */
	transform: 0,

	/**
	 * a boolean of the visibility of the view
	 * @type boolean
	 * @final
	 */
	visible: 0,

	/**
	 * property for the view width. can either be `auto`, a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	width: 0,

	/**
	 * the z index position relative to other sibling views
	 * @type int
	 * @final
	 */
	zIndex: 0,

	/**
	 * add a child to the view hierarchy
	 *
	 * @type void
	 * @param (object) the view to add to this views hiearchy
	 */
	 add: function(view) {},

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * animate the view
	 *
	 * @type void
	 * @param (object) either a dictionary of animation properties or an Animation object
	 * @param (function) function to be invoked upon completion of the animation
	 */
	 animate: function(obj, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * hide the view
	 *
	 * @type void
	 */
	 hide: function() {},

	/**
	 * remove a previously add view from the view hiearchy
	 *
	 * @type void
	 * @param (object) the view to remove from this views hiearchy
	 */
	 remove: function(view) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * make the view visible
	 *
	 * @type void
	 */
	 show: function() {},

	/**
	 * return a Blob image of the rendered view
	 *
	 * @type object
	 * @param (function) function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
	 */
	 toImage: function(f) {}
};


/**
 * <p>The Web View allows you to open an HTML5 based view which can load either local or remote content. The content can be any valid web content such as HTML, PDF, SVG or other WebKit supported content types. The Web View is created by the method <a href="Titanium.UI.createWebView.html">Titanium.UI.createWebView</a>.</p>
 */
Titanium.UI.WebView = {
	/**
	 * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
	 * @type object
	 * @final
	 */
	anchorPoint: 0,

	/**
	 * read-only object with x and y properties of where the view is during animation
	 * @type object
	 * @final
	 */
	animatedCenterPoint: 0,

	/**
	 * <p>the background color for the webview</p>
	 * @type string
	 * @final
	 */
	backgroundColor: 0,

	/**
	 * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
	 * @type object
	 * @final
	 */
	backgroundGradient: 0,

	/**
	 * the background image url of the view
	 * @type string
	 * @final
	 */
	backgroundImage: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
	 * @type float
	 * @final
	 */
	backgroundLeftCap: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
	 * @type float
	 * @final
	 */
	backgroundTopCap: 0,

	/**
	 * the border color of the view
	 * @type string
	 * @final
	 */
	borderColor: 0,

	/**
	 * the border radius of the view
	 * @type float
	 * @final
	 */
	borderRadius: 0,

	/**
	 * the border width of the view
	 * @type float
	 * @final
	 */
	borderWidth: 0,

	/**
	 * property for the view bottom position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	bottom: 0,

	/**
	 * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
	 * @type object
	 * @final
	 */
	center: 0,

	/**
	 * <p>a data blob or file that is used to load the web document</p>
	 * @type object
	 * @final
	 */
	data: 0,

	/**
	 * property for the view height. can be either float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	height: 0,

	/**
	 * <p>the html content of the web document</p>
	 * @type string
	 * @final
	 */
	html: 0,

	/**
	 * property for the view left position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	left: 0,

	/**
	 * <p>boolean indicating if the webview is loading content</p>
	 * @type boolean
	 * @final
	 */
	loading: 0,

	/**
	 * the opacity from 0.0-1.0
	 * @type float
	 * @final
	 */
	opacity: 0,

	/**
	 * property for the view right position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	right: 0,

	/**
	 * <p>whether the webview should scale it's contents or not</p>
	 * @type boolean
	 * @final
	 */
	scalesPageToFit: 0,

	/**
	 * the size of the view as a dictionary of width and height properties
	 * @type object
	 * @final
	 */
	size: 0,

	/**
	 * property for the view top position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	top: 0,

	/**
	 * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
	 * @type boolean
	 * @final
	 */
	touchEnabled: 0,

	/**
	 * the transformation matrix to apply to the view
	 * @type object
	 * @final
	 */
	transform: 0,

	/**
	 * <p>the url to the web document. this property will change as the content of the webview changes (such as from internal hyperlinks, etc)</p>
	 * @type string
	 * @final
	 */
	url: 0,

	/**
	 * a boolean of the visibility of the view
	 * @type boolean
	 * @final
	 */
	visible: 0,

	/**
	 * property for the view width. can either be `auto`, a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	width: 0,

	/**
	 * the z index position relative to other sibling views
	 * @type int
	 * @final
	 */
	zIndex: 0,

	/**
	 * add a child to the view hierarchy
	 *
	 * @type void
	 * @param (object) the view to add to this views hiearchy
	 */
	 add: function(view) {},

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * animate the view
	 *
	 * @type void
	 * @param (object) either a dictionary of animation properties or an Animation object
	 * @param (function) function to be invoked upon completion of the animation
	 */
	 animate: function(obj, callback) {},

	/**
	 * <p>returns true if the webview can go back in history</p>
	 *
	 * @type boolean
	 */
	 canGoBack: function() {},

	/**
	 * <p>returns true if the webview can go forward in history</p>
	 *
	 * @type boolean
	 */
	 canGoForward: function() {},

	/**
	 * <p>invoke JavaScript inside the context of the webview and optionally, return a result</p>
	 *
	 * @type string
	 * @param (string) JavaScript code as a string. The code will be evaluated inside the webview context.
	 */
	 evalJS: function(content) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * <p>go back one entry in history to the previous page</p>
	 *
	 * @type void
	 */
	 goBack: function() {},

	/**
	 * <p>go forward one entry in history to the page before the current page</p>
	 *
	 * @type void
	 */
	 goForward: function() {},

	/**
	 * hide the view
	 *
	 * @type void
	 */
	 hide: function() {},

	/**
	 * <p>reload the current webpage</p>
	 *
	 * @type void
	 */
	 reload: function() {},

	/**
	 * remove a previously add view from the view hiearchy
	 *
	 * @type void
	 * @param (object) the view to remove from this views hiearchy
	 */
	 remove: function(view) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * <p>force the webview to repaint its contents</p>
	 *
	 * @type void
	 */
	 repaint: function() {},

	/**
	 * <p>set the basic authentication for the webview instance to be used on subsequent url requests</p>
	 *
	 * @type void
	 * @param (string) the username
	 * @param (string) the password
	 */
	 setBasicAuthentication: function(username, password) {},

	/**
	 * make the view visible
	 *
	 * @type void
	 */
	 show: function() {},

	/**
	 * <p>stop loading a currently loading page</p>
	 *
	 * @type void
	 */
	 stopLoading: function() {},

	/**
	 * return a Blob image of the rendered view
	 *
	 * @type object
	 * @param (function) function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
	 */
	 toImage: function(f) {}
};


/**
 * <p>The Window is an empty drawing surface or container. The Window is created by the method <a href="Titanium.UI.createWindow.html">Titanium.UI.createWindow</a>. Unlike <a href="Titanium.UI.View">Views</a>, Windows can be opened and closed and can have special display properties such as <tt>fullscreen</tt> or <tt>modal</tt>.</p>
 */
Titanium.UI.Window = {
	/**
	 * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
	 * @type object
	 * @final
	 */
	anchorPoint: 0,

	/**
	 * read-only object with x and y properties of where the view is during animation
	 * @type object
	 * @final
	 */
	animatedCenterPoint: 0,

	/**
	 * <p>title for the back button. only available in iPhone. this is only valid when the window is a child of a tab.</p>
	 * @type string
	 * @final
	 */
	backButtonTitle: 0,

	/**
	 * <p>url to an image to show as the back button.  only available in iPhone. this is only valid when the window is a child of a tab.</p>
	 * @type string
	 * @final
	 */
	backButtonTitleImage: 0,

	/**
	 * the background color of the view
	 * @type string
	 * @final
	 */
	backgroundColor: 0,

	/**
	 * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
	 * @type object
	 * @final
	 */
	backgroundGradient: 0,

	/**
	 * the background image url of the view
	 * @type string
	 * @final
	 */
	backgroundImage: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
	 * @type float
	 * @final
	 */
	backgroundLeftCap: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
	 * @type float
	 * @final
	 */
	backgroundTopCap: 0,

	/**
	 * <p>web named color or hex value for the color of the nav bar. only available in iPhone.</p>
	 * @type string
	 * @final
	 */
	barColor: 0,

	/**
	 * the border color of the view
	 * @type string
	 * @final
	 */
	borderColor: 0,

	/**
	 * the border radius of the view
	 * @type float
	 * @final
	 */
	borderRadius: 0,

	/**
	 * the border width of the view
	 * @type float
	 * @final
	 */
	borderWidth: 0,

	/**
	 * property for the view bottom position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	bottom: 0,

	/**
	 * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
	 * @type object
	 * @final
	 */
	center: 0,

	/**
	 * <p>boolean indicates if the window is fullscreen (no device chrome)</p>
	 * @type boolean
	 * @final
	 */
	fullscreen: 0,

	/**
	 * property for the view height. can be either float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	height: 0,

	/**
	 * property for the view left position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	left: 0,

	/**
	 * <p>view to show in the left nav bar area. only available in iPhone.</p>
	 * @type object
	 * @final
	 */
	leftNavButton: 0,

	/**
	 * <p>boolean to indicate if the window should be opened modal in front of other windows</p>
	 * @type boolean
	 * @final
	 */
	modal: 0,

	/**
	 * <p>for modal windows, hide the nav bar (true) or show the nav bar (false, default).</p>
	 * @type boolean
	 * @final
	 */
	navBarHidden: 0,

	/**
	 * the opacity from 0.0-1.0
	 * @type float
	 * @final
	 */
	opacity: 0,

	/**
	 * <p>array of orientation mode constants defined in [Titanium.UI]</p>
	 * @type array
	 * @final
	 */
	orientationModes: 0,

	/**
	 * property for the view right position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	right: 0,

	/**
	 * <p>view to show in the right nav bar area. only available in iPhone.</p>
	 * @type object
	 * @final
	 */
	rightNavButton: 0,

	/**
	 * the size of the view as a dictionary of width and height properties
	 * @type object
	 * @final
	 */
	size: 0,

	/**
	 * <p>boolean to indicate if the tab bar should be hidden. this is only valid when the window is a child of a tab.</p>
	 * @type boolean
	 * @final
	 */
	tabBarHidden: 0,

	/**
	 * <p>title of the window.</p>
	 * @type string
	 * @final
	 */
	title: 0,

	/**
	 * <p>view to show in the title area. only available in iPhone.</p>
	 * @type object
	 * @final
	 */
	titleControl: 0,

	/**
	 * <p>url to a image that show in the title area. only available in iPhone.</p>
	 * @type string
	 * @final
	 */
	titleImage: 0,

	/**
	 * <p>title prompt for the window. only available in iPhone.</p>
	 * @type string
	 * @final
	 */
	titlePrompt: 0,

	/**
	 * <p>array of button objects to show in the toolbar of the window. only available in iPhone. this is only valid when the window is a child of a tab.</p>
	 * @type array
	 * @final
	 */
	toolbar: 0,

	/**
	 * property for the view top position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	top: 0,

	/**
	 * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
	 * @type boolean
	 * @final
	 */
	touchEnabled: 0,

	/**
	 * the transformation matrix to apply to the view
	 * @type object
	 * @final
	 */
	transform: 0,

	/**
	 * <p>boolean to indicate if the nav bar is translucent. only available in iPhone.</p>
	 * @type boolean
	 * @final
	 */
	translucent: 0,

	/**
	 * <p>url to a JavaScript file with the windows instructions. this window will create a new JavaScript sub-context that will run in its own thread and global variable space.</p>
	 * @type string
	 * @final
	 */
	url: 0,

	/**
	 * a boolean of the visibility of the view
	 * @type boolean
	 * @final
	 */
	visible: 0,

	/**
	 * property for the view width. can either be `auto`, a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	width: 0,

	/**
	 * the z index position relative to other sibling views
	 * @type int
	 * @final
	 */
	zIndex: 0,

	/**
	 * add a child to the view hierarchy
	 *
	 * @type void
	 * @param (object) the view to add to this views hiearchy
	 */
	 add: function(view) {},

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * animate the view
	 *
	 * @type void
	 * @param (object) either a dictionary of animation properties or an Animation object
	 * @param (function) function to be invoked upon completion of the animation
	 */
	 animate: function(obj, callback) {},

	/**
	 * <p>close the window</p>
	 *
	 * @type void
	 * @param (object) close the window with optional animation or display properties
	 */
	 close: function(options) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * hide the view
	 *
	 * @type void
	 */
	 hide: function() {},

	/**
	 * <p>open the window</p>
	 *
	 * @type void
	 * @param (object) open the window with optional animation or display properties
	 */
	 open: function(options) {},

	/**
	 * remove a previously add view from the view hiearchy
	 *
	 * @type void
	 * @param (object) the view to remove from this views hiearchy
	 */
	 remove: function(view) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * make the view visible
	 *
	 * @type void
	 */
	 show: function() {},

	/**
	 * return a Blob image of the rendered view
	 *
	 * @type object
	 * @param (function) function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
	 */
	 toImage: function(f) {}
};


/**
 * <p>The iPad specific UI capabilities.  All properties, methods and events in this namespace will only work on the Apple iPad related devices.  To develop for iPad, you will need the Apple iPhone SDK 3.2 or later and Titanium Mobile SDK 1.2 or later. </p>
<p>For iPad UI programming guidelines, please review the <a href="http://developer.apple.com/iphone/library/documentation/General/Conceptual/iPadHIG/Introduction/Introduction.html">iPad Human Interface Guidelines</a>. </p>
 */
Titanium.UI.iPad = {
	/**
	 * <p>An arrow that points in any direction.</p>
	 * @type int
	 * @final
	 */
	POPOVER_ARROW_DIRECTION_ANY: 0,

	/**
	 * <p>An arrow that points downward.</p>
	 * @type int
	 * @final
	 */
	POPOVER_ARROW_DIRECTION_DOWN: 0,

	/**
	 * <p>An arrow that points toward the left.</p>
	 * @type int
	 * @final
	 */
	POPOVER_ARROW_DIRECTION_LEFT: 0,

	/**
	 * <p>An arrow that points toward the right.</p>
	 * @type int
	 * @final
	 */
	POPOVER_ARROW_DIRECTION_RIGHT: 0,

	/**
	 * <p>The status of the arrow is currently unknown.</p>
	 * @type int
	 * @final
	 */
	POPOVER_ARROW_DIRECTION_UNKNOWN: 0,

	/**
	 * <p>An arrow that points upward.</p>
	 * @type int
	 * @final
	 */
	POPOVER_ARROW_DIRECTION_UP: 0,

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * create and return an instance of <a href="Titanium.UI.iPad.Popover.html">Titanium.UI.iPad.Popover</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.UI.iPad.Popover.html">Titanium.UI.iPad.Popover</a>
	 */
	 createPopover: function(parameters) {},

	/**
	 * create and return an instance of <a href="Titanium.UI.iPad.SplitWindow.html">Titanium.UI.iPad.SplitWindow</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.UI.iPad.SplitWindow.html">Titanium.UI.iPad.SplitWindow</a>
	 */
	 createSplitWindow: function(parameters) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {}
};


/**
 * <p>A Popover is used to manage the presentation of content in a popover. You use popovers to present information temporarily but in a way that does not take over the entire screen like a modal view does. The popover content is layered on top of your existing content in a special type of window. The popover remains visible until the user taps outside of the popover window or you explicitly dismiss it. The Popover is created by the method <a href="Titanium.UI.iPad.createPopover-method.html">Titanium.UI.iPad.createPopover</a>.</p>
<p><img alt="popover" src="http://img.skitch.com/20100406-pmssjk1a3a65s6ui8qnbqi59c4.png"></p>
 */
Titanium.UI.iPad.Popover = {
	/**
	 * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
	 * @type object
	 * @final
	 */
	anchorPoint: 0,

	/**
	 * read-only object with x and y properties of where the view is during animation
	 * @type object
	 * @final
	 */
	animatedCenterPoint: 0,

	/**
	 * <p>return the arrow direction of the popover</p>
	 * @type int
	 * @final
	 */
	arrowDirection: 0,

	/**
	 * the background color of the view
	 * @type string
	 * @final
	 */
	backgroundColor: 0,

	/**
	 * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
	 * @type object
	 * @final
	 */
	backgroundGradient: 0,

	/**
	 * the background image url of the view
	 * @type string
	 * @final
	 */
	backgroundImage: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
	 * @type float
	 * @final
	 */
	backgroundLeftCap: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
	 * @type float
	 * @final
	 */
	backgroundTopCap: 0,

	/**
	 * the border color of the view
	 * @type string
	 * @final
	 */
	borderColor: 0,

	/**
	 * the border radius of the view
	 * @type float
	 * @final
	 */
	borderRadius: 0,

	/**
	 * the border width of the view
	 * @type float
	 * @final
	 */
	borderWidth: 0,

	/**
	 * property for the view bottom position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	bottom: 0,

	/**
	 * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
	 * @type object
	 * @final
	 */
	center: 0,

	/**
	 * <p>height of the popover</p>
	 * @type float
	 * @final
	 */
	height: 0,

	/**
	 * property for the view left position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	left: 0,

	/**
	 * <p>the left button in the nav area of the popover</p>
	 * @type object
	 * @final
	 */
	leftNavButton: 0,

	/**
	 * the opacity from 0.0-1.0
	 * @type float
	 * @final
	 */
	opacity: 0,

	/**
	 * property for the view right position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	right: 0,

	/**
	 * <p>the right button in the nav area of the popover</p>
	 * @type object
	 * @final
	 */
	rightNavButton: 0,

	/**
	 * the size of the view as a dictionary of width and height properties
	 * @type object
	 * @final
	 */
	size: 0,

	/**
	 * <p>the title of the nav area of the popover</p>
	 * @type string
	 * @final
	 */
	title: 0,

	/**
	 * property for the view top position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	top: 0,

	/**
	 * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
	 * @type boolean
	 * @final
	 */
	touchEnabled: 0,

	/**
	 * the transformation matrix to apply to the view
	 * @type object
	 * @final
	 */
	transform: 0,

	/**
	 * <p>boolean to indicate if the popover is visible</p>
	 * @type boolean
	 * @final
	 */
	visible: 0,

	/**
	 * <p>width of the popover</p>
	 * @type float
	 * @final
	 */
	width: 0,

	/**
	 * the z index position relative to other sibling views
	 * @type int
	 * @final
	 */
	zIndex: 0,

	/**
	 * add a child to the view hierarchy
	 *
	 * @type void
	 * @param (object) the view to add to this views hiearchy
	 */
	 add: function(view) {},

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * animate the view
	 *
	 * @type void
	 * @param (object) either a dictionary of animation properties or an Animation object
	 * @param (function) function to be invoked upon completion of the animation
	 */
	 animate: function(obj, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * <p>hide the popover</p>
	 *
	 * @type void
	 * @param (object) dictionary with optional boolean property <tt>animated</tt> which indicates if the popover should be hidden with animation (defaults to true) or not
	 */
	 hide: function(options) {},

	/**
	 * remove a previously add view from the view hiearchy
	 *
	 * @type void
	 * @param (object) the view to remove from this views hiearchy
	 */
	 remove: function(view) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * <p>change the height of the popover</p>
	 *
	 * @type void
	 * @param (int,string) height of the popover
	 */
	 setHeight: function(height) {},

	/**
	 * <p>change the width of the popover</p>
	 *
	 * @type void
	 * @param (int,string) width of the popover
	 */
	 setWidth: function(width) {},

	/**
	 * <p>show the popover</p>
	 *
	 * @type void
	 * @param (object) dictionary of the following properties: <tt>rect</tt>, <tt>animated</tt> and <tt>view</tt>. The <tt>view</tt> property should specify the view relative to where the popover should display.  <tt>animated</tt> is a boolean indicating if the showing of the popover should be animated, defaults to true. The property <tt>rect</tt> is a dictionary with the following properties: <tt>x</tt>, <tt>y</tt>, <tt>width</tt> and <tt>height</tt>, where the rectangle in <tt>view</tt> at which to anchor the popover.
	 */
	 show: function(options) {},

	/**
	 * return a Blob image of the rendered view
	 *
	 * @type object
	 * @param (function) function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
	 */
	 toImage: function(f) {}
};


/**
 * <p>A SplitWindow is a window that manages the presentation of two side-by-side view controllers. You use this class to implement a master-detail interface, in which the left-side view presents a list of items and the right-side presents details of the selected item. The SplitView is for use exclusively on iPad devices. The SplitWindow is created by the method <a href="Titanium.UI.iPad.createSplitWindow-method.html">Titanium.UI.iPad.createSplitWindow</a>.</p>
<p><img alt="splitview" src="http://img.skitch.com/20100406-1f85bm9cx8t768xgsjqax1ng6y.png"></p>
 */
Titanium.UI.iPad.SplitWindow = {
	/**
	 * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
	 * @type object
	 * @final
	 */
	anchorPoint: 0,

	/**
	 * read-only object with x and y properties of where the view is during animation
	 * @type object
	 * @final
	 */
	animatedCenterPoint: 0,

	/**
	 * the background color of the view
	 * @type string
	 * @final
	 */
	backgroundColor: 0,

	/**
	 * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
	 * @type object
	 * @final
	 */
	backgroundGradient: 0,

	/**
	 * the background image url of the view
	 * @type string
	 * @final
	 */
	backgroundImage: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
	 * @type float
	 * @final
	 */
	backgroundLeftCap: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
	 * @type float
	 * @final
	 */
	backgroundTopCap: 0,

	/**
	 * the border color of the view
	 * @type string
	 * @final
	 */
	borderColor: 0,

	/**
	 * the border radius of the view
	 * @type float
	 * @final
	 */
	borderRadius: 0,

	/**
	 * the border width of the view
	 * @type float
	 * @final
	 */
	borderWidth: 0,

	/**
	 * property for the view bottom position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	bottom: 0,

	/**
	 * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
	 * @type object
	 * @final
	 */
	center: 0,

	/**
	 * <p>view for the detail view section of the SplitWindow</p>
	 * @type object
	 * @final
	 */
	detailView: 0,

	/**
	 * property for the view height. can be either float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	height: 0,

	/**
	 * property for the view left position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	left: 0,

	/**
	 * <p>view for the master view section of the SplitWindow</p>
	 * @type object
	 * @final
	 */
	masterView: 0,

	/**
	 * the opacity from 0.0-1.0
	 * @type float
	 * @final
	 */
	opacity: 0,

	/**
	 * property for the view right position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	right: 0,

	/**
	 * the size of the view as a dictionary of width and height properties
	 * @type object
	 * @final
	 */
	size: 0,

	/**
	 * property for the view top position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	top: 0,

	/**
	 * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
	 * @type boolean
	 * @final
	 */
	touchEnabled: 0,

	/**
	 * the transformation matrix to apply to the view
	 * @type object
	 * @final
	 */
	transform: 0,

	/**
	 * a boolean of the visibility of the view
	 * @type boolean
	 * @final
	 */
	visible: 0,

	/**
	 * property for the view width. can either be `auto`, a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	width: 0,

	/**
	 * the z index position relative to other sibling views
	 * @type int
	 * @final
	 */
	zIndex: 0,

	/**
	 * add a child to the view hierarchy
	 *
	 * @type void
	 * @param (object) the view to add to this views hiearchy
	 */
	 add: function(view) {},

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * animate the view
	 *
	 * @type void
	 * @param (object) either a dictionary of animation properties or an Animation object
	 * @param (function) function to be invoked upon completion of the animation
	 */
	 animate: function(obj, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * hide the view
	 *
	 * @type void
	 */
	 hide: function() {},

	/**
	 * remove a previously add view from the view hiearchy
	 *
	 * @type void
	 * @param (object) the view to remove from this views hiearchy
	 */
	 remove: function(view) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * make the view visible
	 *
	 * @type void
	 */
	 show: function() {},

	/**
	 * return a Blob image of the rendered view
	 *
	 * @type object
	 * @param (function) function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
	 */
	 toImage: function(f) {}
};


/**
 * <p>The iPhone/iPad specific UI capabilities.  All properties, methods and events in this namespace will only work on the Apple iPhone or iPad related devices.</p>
 */
Titanium.UI.iPhone = {
	/**
	 * <p>The view is presented using the same style as its parent window. This is currently only available currently on iPhone/iPad and SDK 3.2+.</p>
	 * @type int
	 * @final
	 */
	MODAL_PRESENTATION_CURRENT_CONTEXT: 0,

	/**
	 * <p>The width and height of the presented window are smaller than those of the screen and the view is centered on the screen. If the device is in a landscape orientation and the keyboard is visible, the position of the view is adjusted upward so that the view remains visible. All uncovered areas are dimmed to prevent the user from interacting with them. This is currently only available currently on iPhone/iPad and SDK 3.2+.</p>
	 * @type int
	 * @final
	 */
	MODAL_PRESENTATION_FORMSHEET: 0,

	/**
	 * <p>The presented window covers the screen. This is currently only available currently on iPhone/iPad and SDK 3.2+.</p>
	 * @type int
	 * @final
	 */
	MODAL_PRESENTATION_FULLSCREEN: 0,

	/**
	 * <p>The height of the presented window is set to the height of the screen and the view's width is set to the width of the screen in a portrait orientation. Any uncovered areas are dimmed to prevent the user from interacting with them. (In portrait orientations, this option is essentially the same as <a href="Titanium.UI.iPhone.MODAL_PRESENTATION_FULLSCREEN-property.html">Titanium.UI.iPhone.MODAL_PRESENTATION_FULLSCREEN</a>). This is currently only available currently on iPhone/iPad and SDK 3.2+.</p>
	 * @type int
	 * @final
	 */
	MODAL_PRESENTATION_PAGESHEET: 0,

	/**
	 * <p>When the window is presented, its view slides up from the bottom of the screen. On dismissal, the view slides back down. This is the default transition style. This is currently only available currently on iPhone/iPad.</p>
	 * @type int
	 * @final
	 */
	MODAL_TRANSITION_STYLE_COVER_VERTICAL: 0,

	/**
	 * <p>When the window is presented, the current view fades out while the new view fades in at the same time. On dismissal, a similar type of cross-fade is used to return to the original view. This is currently only available currently on iPhone/iPad.</p>
	 * @type int
	 * @final
	 */
	MODAL_TRANSITION_STYLE_CROSS_DISSOLVE: 0,

	/**
	 * <p>When the window is presented, the current view initiates a horizontal 3D flip from right-to-left, resulting in the revealing of the new view as if it were on the back of the previous view. On dismissal, the flip occurs from left-to-right, returning to the original view. This is currently only available currently on iPhone/iPad.</p>
	 * @type int
	 * @final
	 */
	MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL: 0,

	/**
	 * <p>When the window is presented, one corner of the current view curls up to reveal the modal view underneath. On dismissal, the curled up page unfurls itself back on top of the modal view. A modal view presented using this transition is itself prevented from presenting any additional modal views. This transition style is supported only if the window is presenting a <a href="Titanium.UI.iPhone.MODAL_PRESENTATION_FULLSCREEN.html">Titanium.UI.iPhone.MODAL_PRESENTATION_FULLSCREEN</a> modal presentation style.  This is currently only available currently on iPhone/iPad and SDK 3.2+.</p>
	 * @type int
	 * @final
	 */
	MODAL_TRANSITION_STYLE_PARTIAL_CURL: 0,

	/**
	 * <p>set the application badge for the application's icon in the springboard</p>
	 * @type string
	 * @final
	 */
	appBadge: 0,

	/**
	 * <p>control whether the shake to edit system wide capability is enabled</p>
	 * @type boolean
	 * @final
	 */
	appSupportsShakeToEdit: 0,

	/**
	 * <p>control the status bar visibility</p>
	 * @type boolean
	 * @final
	 */
	statusBarHidden: 0,

	/**
	 * <p>constant that controls the status bar color style</p>
	 * @type int
	 * @final
	 */
	statusBarStyle: 0,

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * create and return an instance of <a href="Titanium.UI.iPhone.NavigationGroup.html">Titanium.UI.iPhone.NavigationGroup</a>
	 *
	 * @type object
	 * @param (object) (optional) a dictionary object properties defined in <a href="Titanium.UI.iPhone.NavigationGroup.html">Titanium.UI.iPhone.NavigationGroup</a>
	 */
	 createNavigationGroup: function(parameters) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * <p>convenience method to hide the status bar</p>
	 *
	 * @type void
	 * @param (boolean) boolean to indicate if the action should be animated
	 * @param (int) the animation style
	 */
	 hideStatusBar: function(animated, animationStyle) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * <p>convenience method to show the status bar</p>
	 *
	 * @type void
	 * @param (boolean) boolean to indicate if the action should be animated
	 * @param (int) the animation style
	 */
	 showStatusBar: function(animated, animationStyle) {}
};


/**
 * <p>A set of constants for the styles available for <a href="Titanium.UI.ActivityIndicator-object.html">Titanium.UI.ActivityIndicator</a> objects.</p>
 */
Titanium.UI.iPhone.ActivityIndicatorStyle = {
	/**
	 * <p>The large white style of indicator.</p>
	 * @type int
	 * @final
	 */
	BIG: 0,

	/**
	 * <p>The standard gray style of indicator.</p>
	 * @type int
	 * @final
	 */
	DARK: 0,

	/**
	 * <p>The standard white style of indicator (the default).</p>
	 * @type int
	 * @final
	 */
	PLAIN: 0
};


/**
 * <p>A set of constants for the Animation Styles used for transitions.</p>
 */
Titanium.UI.iPhone.AnimationStyle = {
	/**
	 * <p>Curl downwards during a transition animation</p>
	 * @type int
	 * @final
	 */
	CURL_DOWN: 0,

	/**
	 * <p>Curl upwards during a transition animation</p>
	 * @type int
	 * @final
	 */
	CURL_UP: 0,

	/**
	 * <p>Flip from left to right during a transition animation</p>
	 * @type int
	 * @final
	 */
	FLIP_FROM_LEFT: 0,

	/**
	 * <p>Flip from right to left during a transition animation</p>
	 * @type int
	 * @final
	 */
	FLIP_FROM_RIGHT: 0,

	/**
	 * <p>No animation</p>
	 * @type int
	 * @final
	 */
	NONE: 0
};


/**
 * <p>A Navigation Group implements a specialized view that manages the navigation of hierarchical content. The Navigation Group is created by the method <a href="Titanium.UI.iPhone.NavigationGroup-object.html">Titanium.UI.iPhone.NavigationGroup</a>.</p>
<p><img alt="navgroup" src="http://img.skitch.com/20100406-rwe44533tkd94fdnbqqudxynpe.png"></p>
<p>A Navigation Group is very similar to Tab Bars with the exception that they do not maintain a group of windows with a interface bar at the bottom.</p>
 */
Titanium.UI.iPhone.NavigationGroup = {
	/**
	 * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
	 * @type object
	 * @final
	 */
	anchorPoint: 0,

	/**
	 * read-only object with x and y properties of where the view is during animation
	 * @type object
	 * @final
	 */
	animatedCenterPoint: 0,

	/**
	 * the background color of the view
	 * @type string
	 * @final
	 */
	backgroundColor: 0,

	/**
	 * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
	 * @type object
	 * @final
	 */
	backgroundGradient: 0,

	/**
	 * the background image url of the view
	 * @type string
	 * @final
	 */
	backgroundImage: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
	 * @type float
	 * @final
	 */
	backgroundLeftCap: 0,

	/**
	 * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
	 * @type float
	 * @final
	 */
	backgroundTopCap: 0,

	/**
	 * the border color of the view
	 * @type string
	 * @final
	 */
	borderColor: 0,

	/**
	 * the border radius of the view
	 * @type float
	 * @final
	 */
	borderRadius: 0,

	/**
	 * the border width of the view
	 * @type float
	 * @final
	 */
	borderWidth: 0,

	/**
	 * property for the view bottom position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	bottom: 0,

	/**
	 * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
	 * @type object
	 * @final
	 */
	center: 0,

	/**
	 * property for the view height. can be either float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	height: 0,

	/**
	 * property for the view left position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	left: 0,

	/**
	 * the opacity from 0.0-1.0
	 * @type float
	 * @final
	 */
	opacity: 0,

	/**
	 * property for the view right position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	right: 0,

	/**
	 * the size of the view as a dictionary of width and height properties
	 * @type object
	 * @final
	 */
	size: 0,

	/**
	 * property for the view top position. this position is relative to the views parent. can be either a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	top: 0,

	/**
	 * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
	 * @type boolean
	 * @final
	 */
	touchEnabled: 0,

	/**
	 * the transformation matrix to apply to the view
	 * @type object
	 * @final
	 */
	transform: 0,

	/**
	 * a boolean of the visibility of the view
	 * @type boolean
	 * @final
	 */
	visible: 0,

	/**
	 * property for the view width. can either be `auto`, a float value or a string of the width.
	 * @type float,string
	 * @final
	 */
	width: 0,

	/**
	 * the z index position relative to other sibling views
	 * @type int
	 * @final
	 */
	zIndex: 0,

	/**
	 * add a child to the view hierarchy
	 *
	 * @type void
	 * @param (object) the view to add to this views hiearchy
	 */
	 add: function(view) {},

	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * animate the view
	 *
	 * @type void
	 * @param (object) either a dictionary of animation properties or an Animation object
	 * @param (function) function to be invoked upon completion of the animation
	 */
	 animate: function(obj, callback) {},

	/**
	 * <p>close a window and remove it from the navigation group</p>
	 *
	 * @type void
	 * @param (object) window to close
	 * @param (object) optional dictionary. the only current property supported is <tt>animated</tt> which is a boolean to indicate if the window should be closed animated (default) or not.
	 */
	 close: function(window, properties) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * hide the view
	 *
	 * @type void
	 */
	 hide: function() {},

	/**
	 * <p>open a window within the navigation group</p>
	 *
	 * @type void
	 * @param (object) window to open within the tab group
	 * @param (object) optional dictionary. the only current property supported is <tt>animated</tt> which is a boolean to indicate if the window should be opened animated (default) or not.
	 */
	 open: function(window, properties) {},

	/**
	 * remove a previously add view from the view hiearchy
	 *
	 * @type void
	 * @param (object) the view to remove from this views hiearchy
	 */
	 remove: function(view) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * make the view visible
	 *
	 * @type void
	 */
	 show: function() {},

	/**
	 * return a Blob image of the rendered view
	 *
	 * @type object
	 * @param (function) function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
	 */
	 toImage: function(f) {}
};


/**
 * <p>A set of constants for the bar styles used on the <tt>style</tt> property of <a href="Titanium.UI.ProgressBar-object.html">Titanium.UI.ProgressBar</a>.</p>
 */
Titanium.UI.iPhone.ProgressBarStyle = {
	/**
	 * <p>The style of progress view that is used in a toolbar.</p>
	 * @type int
	 * @final
	 */
	BAR: 0,

	/**
	 * <p>he standard progress-view style. This is the default.</p>
	 * @type int
	 * @final
	 */
	DEFAULT: 0,

	/**
	 * <p>The standard progress-view style. Same as <tt>DEFAULT</tt>.</p>
	 * @type int
	 * @final
	 */
	PLAIN: 0
};


/**
 * <p>A set of constants for the Animation Styles used for transition on table view rows.</p>
 */
Titanium.UI.iPhone.RowAnimationStyle = {
	/**
	 * <p>The inserted row or rows slides in from the bottom; the deleted row or rows slides out toward the bottom.</p>
	 * @type int
	 * @final
	 */
	BOTTOM: 0,

	/**
	 * <p>The inserted or deleted row or rows fades into or out of the table view.</p>
	 * @type int
	 * @final
	 */
	FADE: 0,

	/**
	 * <p>The inserted row or rows slides in from the left; the deleted row or rows slides out to the left.</p>
	 * @type int
	 * @final
	 */
	LEFT: 0,

	/**
	 * <p>No animation is performed. The new cell value appears as if the cell had just been reloaded.</p>
	 * @type int
	 * @final
	 */
	NONE: 0,

	/**
	 * <p>The inserted row or rows slides in from the right; the deleted row or rows slides out to the right.</p>
	 * @type int
	 * @final
	 */
	RIGHT: 0,

	/**
	 * <p>The inserted row or rows slides in from the top; the deleted row or rows slides out toward the top.</p>
	 * @type int
	 * @final
	 */
	TOP: 0
};


/**
 * <p>A set of constants for the styles available for <a href="Titanium.UI.ActivityIndicator-object.html">Titanium.UI.ActivityIndicator</a> objects.</p>
 */
Titanium.UI.iPhone.ScrollIndicatorStyle = {
	/**
	 * <p>A style of indicator which is black smaller than the default style. This style is good against a white content background.</p>
	 * @type int
	 * @final
	 */
	BLACK: 0,

	/**
	 * <p>The default style of scroll indicator, which is black with a white border. This style is good against any content background.</p>
	 * @type int
	 * @final
	 */
	DEFAULT: 0,

	/**
	 * <p>A style of indicator is white and smaller than the default style. This style is good against a black content background.</p>
	 * @type int
	 * @final
	 */
	WHITE: 0
};


/**
 * <p>A set of constants for the status bar style.</p>
 */
Titanium.UI.iPhone.StatusBar = {
	/**
	 * <p>The default status bar style</p>
	 * @type int
	 * @final
	 */
	DEFAULT: 0,

	/**
	 * <p>The gray colored status bar style</p>
	 * @type int
	 * @final
	 */
	GRAY: 0,

	/**
	 * <p>The opaque black status bar style.</p>
	 * @type int
	 * @final
	 */
	OPAQUE_BLACK: 0,

	/**
	 * <p>The translucent black status bar style. This style provides some level of transparency to the device background.</p>
	 * @type int
	 * @final
	 */
	TRANSLUCENT_BLACK: 0
};


/**
 * <p>A set of constants for the system button styles that can be used for the button <tt>style</tt> property.</p>
 */
Titanium.UI.iPhone.SystemButtonStyle = {
	/**
	 * <p>A simple button style with a border.</p>
	 * @type int
	 * @final
	 */
	BORDERED: 0,

	/**
	 * <p>The style for a done button - for example, a button that completes some task and returns to the previous view.</p>
	 * @type int
	 * @final
	 */
	DONE: 0,

	/**
	 * <p>Glows when tapped. The default item style.</p>
	 * @type int
	 * @final
	 */
	PLAIN: 0
};


/**
 * <p>A set of constants for the system icon styles that can be used on a tab group tab.</p>
 */
Titanium.UI.iPhone.SystemIcon = {
	/**
	 * <p>Bookmark style icon</p>
	 * @type int
	 * @final
	 */
	BOOKMARKS: 0,

	/**
	 * <p>Contacts style icon</p>
	 * @type int
	 * @final
	 */
	CONTACTS: 0,

	/**
	 * <p>Downloads style icon</p>
	 * @type int
	 * @final
	 */
	DOWNLOADS: 0,

	/**
	 * <p>Favorites style icon</p>
	 * @type int
	 * @final
	 */
	FAVORITES: 0,

	/**
	 * <p>Featured style icon</p>
	 * @type int
	 * @final
	 */
	FEATURED: 0,

	/**
	 * <p>History style icon</p>
	 * @type int
	 * @final
	 */
	HISTORY: 0,

	/**
	 * <p>More style icon</p>
	 * @type int
	 * @final
	 */
	MORE: 0,

	/**
	 * <p>Most recent style icon</p>
	 * @type int
	 * @final
	 */
	MOST_RECENT: 0,

	/**
	 * <p>Most viewed style icon</p>
	 * @type int
	 * @final
	 */
	MOST_VIEWED: 0,

	/**
	 * <p>Recents style icon</p>
	 * @type int
	 * @final
	 */
	RECENTS: 0,

	/**
	 * <p>Search style icon</p>
	 * @type int
	 * @final
	 */
	SEARCH: 0,

	/**
	 * <p>Top rated style icon</p>
	 * @type int
	 * @final
	 */
	TOP_RATED: 0
};


/**
 * <p>A set of constants for the style that can be used for the <tt>selectionStyle</tt> property of <a href="Titanium.UI.TableViewRow-object.html">Titanium.UI.TableViewRow</a>.</p>
 */
Titanium.UI.iPhone.TableViewCellSelectionStyle = {
	/**
	 * <p>The cell when selected has a blue background. This is the default value.</p>
	 * @type int
	 * @final
	 */
	BLUE: 0,

	/**
	 * <p>Then cell when selected has a gray background.</p>
	 * @type int
	 * @final
	 */
	GRAY: 0,

	/**
	 * <p>The cell has no distinct style for when it is selected.</p>
	 * @type int
	 * @final
	 */
	NONE: 0
};


/**
 * <p>A set of constants for the position value that can be used for the <tt>position</tt> property of <a href="Titanium.UI.TableView-object.html">Titanium.UI.TableView</a> when invoking <tt>scrollToIndex</tt>.</p>
 */
Titanium.UI.iPhone.TableViewScrollPosition = {
	/**
	 * <p>The table view scrolls the row of interest to the bottom of the visible table view.</p>
	 * @type int
	 * @final
	 */
	BOTTOM: 0,

	/**
	 * <p>The table view scrolls the row of interest to the middle of the visible table view.</p>
	 * @type int
	 * @final
	 */
	MIDDLE: 0,

	/**
	 * <p>The table view scrolls the row of interest to be fully visible with a minimum of movement. If the row is already fully visible, no scrolling occurs. For example, if the row is above the visible area, the behavior is identical to that specified by <tt>TOP</tt>. This is the default.</p>
	 * @type int
	 * @final
	 */
	NONE: 0,

	/**
	 * <p>The table view scrolls the row of interest to the top of the visible table view.</p>
	 * @type int
	 * @final
	 */
	TOP: 0
};


/**
 * <p>A set of constants for the style that can be used for the <tt>separatorStyle</tt> property of <a href="Titanium.UI.TableView-object.html">Titanium.UI.TableView</a>.</p>
 */
Titanium.UI.iPhone.TableViewSeparatorStyle = {
	/**
	 * <p>The separator cell has no distinct style.</p>
	 * @type int
	 * @final
	 */
	NONE: 0,

	/**
	 * <p>The separator cell has a single line running across its width. This is the default value.</p>
	 * @type int
	 * @final
	 */
	SINGLE_LINE: 0
};


/**
 * <p>A set of constants for the style that can be used for the button <tt>style</tt> property of <a href="Titanium.UI.TableView-object.html">Titanium.UI.TableView</a>.</p>
 */
Titanium.UI.iPhone.TableViewStyle = {
	/**
	 * <p>A table view whose sections present distinct groups of rows. The section headers and footers do not float.</p>
	 * @type int
	 * @final
	 */
	GROUPED: 0,

	/**
	 * <p>A plain table view. Any section headers or footers are displayed as inline separators and float when the table view is scrolled.</p>
	 * @type int
	 * @final
	 */
	PLAIN: 0
};


/**
 * <p>The top level Utils module.  The Utils module is a set of common JavaScript functions that are 
useful for applications.</p>
 */
Titanium.Utils = {
	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * <p>decode a Base64 string</p>
	 *
	 * @type string
	 * @param (string) the string to use for the input
	 */
	 base64decode: function(str) {},

	/**
	 * <p>encode a string into Base64</p>
	 *
	 * @type string
	 * @param (string) the string to use for the input
	 */
	 base64encode: function(str) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * <p>compute a MD5 hash algorithm against the input and return a hex-based string</p>
	 *
	 * @type string
	 * @param (string) the string to use for the input
	 */
	 md5HexDigest: function(str) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {}
};


/**
 * <p>The top level XML module.  The XML module is used parsing and processing XML-based content.</p>
 */
Titanium.XML = {
	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * <p>parse an XML string into a DOMDocument</p>
	 *
	 * @type object
	 * @param (string) the XML content as a string
	 */
	 parseString: function(xml) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {}
};


/**
 * <p>The DOMDocument returned from <a href="Titanium.XML.parseString.html">Titanium.XML.parseString</a>. The result is an object that implementes the DOM Level 2 API.</p>
 */
Titanium.XML.DOMDocument = {
};


/**
 * <p>The top level Yahoo module.  The Yahoo module is used for accessing Yahoo related API services.</p>
 */
Titanium.Yahoo = {
	/**
	 * add an event listener for the instance to receive view triggered events
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function to invoke when the event is fired
	 */
	 addEventListener: function(name, callback) {},

	/**
	 * fire a synthesized event to the views listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (object) event object
	 */
	 fireEvent: function(name, event) {},

	/**
	 * remove a previously added event listener
	 *
	 * @type void
	 * @param (string) name of the event
	 * @param (function) callback function passed in addEventListener
	 */
	 removeEventListener: function(name, callback) {},

	/**
	 * <p>invoke a Yahoo YQL query</p>
	 *
	 * @type void
	 * @param (string) the YQL query to execute
	 * @param (function) the function to execute when the query completes. The event will contain the boolean property <tt>success</tt> if successful. If <tt>success</tt> is false, the <tt>message</tt> property will contain the error message. If <tt>success</tt> is true, the <tt>data</tt> property will contain the data payload received from the YQL.
	 */
	 yql: function(yql, callback) {}
};


Ti = Titanium;
