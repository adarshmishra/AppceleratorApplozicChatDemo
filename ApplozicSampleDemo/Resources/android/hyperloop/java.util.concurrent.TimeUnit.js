/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.util.concurrent.TimeUnit
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('./java.util.concurrent');

/**
 * @class java.util.concurrent.TimeUnit
 * @extends java.lang.Enum 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/util/concurrent/TimeUnit.html}
 **/
var TimeUnit = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.util.concurrent.TimeUnit')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.util.concurrent.TimeUnit. Create a subclass using java.util.concurrent.TimeUnit.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('./java.lang.Enum');
TimeUnit.prototype = Object.create(SuperClass.prototype);
TimeUnit.prototype.constructor = TimeUnit;

Object.defineProperty(TimeUnit.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new TimeUnit(this.$native.super);
	},
	enumerable: true
});

TimeUnit.className = 'java.util.concurrent.TimeUnit';
TimeUnit.prototype.className = 'java.util.concurrent.TimeUnit';

// class property
Object.defineProperty(TimeUnit, 'class', {
	get: function() {
		return Hyperloop.getClass('java.util.concurrent.TimeUnit');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
TimeUnit.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('java.util.concurrent.TimeUnit');

	// Generate a JS wrapper for our dynamic subclass
	var SubClass = function() {
		var result = subclassProxy.newInstance(arguments),
			instance = this,
			copy = overrides,
			modified = {};

		function _wrapArg(arg) {
			if (arg.apiName && arg.isNativeProxy && arg.isInstanceProxy) { // Assume hyperloop proxy, wrap in JS wrapper
				var other = require('./' + arg.apiName);
				return new other(arg);
			}
			return arg;
		}

		function _wrapArgs() {
			var newArgs = [];
			for (var i = 0; i < arguments.length; i++) {
				newArgs[i] = _wrapArg(arguments[i]);
			}
			return newArgs;
		};

		Object.keys(copy).forEach(function (each) {
			// Hang the original override method on the JS wrapper object
			instance[each] = function() {
				return copy[each].apply(instance, arguments);
			};

			// Hang a delegate on the "overrides" object we pass into Java.
			// This one wraps hyperloop proxies from Java in their JS wrapper before forwarding on
			modified[each] = function() {
				return instance[each].apply(instance, _wrapArgs.apply(this, arguments));
			}
		});
		result.setOverrides(modified);

		this.$native = result;
		this._hasPointer = result != null;
		this._private = {};
	};
	// it extends the JS wrapper for the parent type
	SubClass.prototype = Object.create(TimeUnit.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
TimeUnit.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new TimeUnit(Hyperloop.cast('java.util.concurrent.TimeUnit', object.$native));
};

// Constants

// Inner classes

// Static fields
// http://developer.android.com/reference/java/util/concurrent/TimeUnit.html#MILLISECONDS
Object.defineProperty(TimeUnit, 'MILLISECONDS', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('MILLISECONDS');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.concurrent.TimeUnit') {
				return new TimeUnit(result);
			} else {
				var ctor = require('./' + result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/concurrent/TimeUnit.html#MICROSECONDS
Object.defineProperty(TimeUnit, 'MICROSECONDS', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('MICROSECONDS');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.concurrent.TimeUnit') {
				return new TimeUnit(result);
			} else {
				var ctor = require('./' + result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/concurrent/TimeUnit.html#HOURS
Object.defineProperty(TimeUnit, 'HOURS', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('HOURS');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.concurrent.TimeUnit') {
				return new TimeUnit(result);
			} else {
				var ctor = require('./' + result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/concurrent/TimeUnit.html#SECONDS
Object.defineProperty(TimeUnit, 'SECONDS', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('SECONDS');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.concurrent.TimeUnit') {
				return new TimeUnit(result);
			} else {
				var ctor = require('./' + result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/concurrent/TimeUnit.html#NANOSECONDS
Object.defineProperty(TimeUnit, 'NANOSECONDS', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('NANOSECONDS');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.concurrent.TimeUnit') {
				return new TimeUnit(result);
			} else {
				var ctor = require('./' + result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/concurrent/TimeUnit.html#DAYS
Object.defineProperty(TimeUnit, 'DAYS', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('DAYS');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.concurrent.TimeUnit') {
				return new TimeUnit(result);
			} else {
				var ctor = require('./' + result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/concurrent/TimeUnit.html#MINUTES
Object.defineProperty(TimeUnit, 'MINUTES', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('MINUTES');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.concurrent.TimeUnit') {
				return new TimeUnit(result);
			} else {
				var ctor = require('./' + result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function valueOf
 * @static
 * @see {@link http://developer.android.com/reference/java/util/concurrent/TimeUnit.html#valueOf(java.lang.String)}
 **/
TimeUnit.valueOf = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'valueOf',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.concurrent.TimeUnit') {
			return new TimeUnit(result);
		} else {
			var ctor = require('./' + result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function values
 * @static
 * @see {@link http://developer.android.com/reference/java/util/concurrent/TimeUnit.html#values()}
 **/
TimeUnit.values = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'values',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.concurrent.TimeUnit') {
			return new TimeUnit(result);
		} else {
			var ctor = require('./' + result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods
/**
 * TODO Fill out docs more...
 * @function timedJoin
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/concurrent/TimeUnit.html#timedJoin(java.lang.Thread, long)}
 **/
TimeUnit.prototype.timedJoin = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'timedJoin',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.concurrent.TimeUnit') {
			return new TimeUnit(result);
		} else {
			var ctor = require('./' + result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function timedWait
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/concurrent/TimeUnit.html#timedWait(java.lang.Object, long)}
 **/
TimeUnit.prototype.timedWait = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'timedWait',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.concurrent.TimeUnit') {
			return new TimeUnit(result);
		} else {
			var ctor = require('./' + result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function convert
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/concurrent/TimeUnit.html#convert(long, java.util.concurrent.TimeUnit)}
 **/
TimeUnit.prototype.convert = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'convert',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.concurrent.TimeUnit') {
			return new TimeUnit(result);
		} else {
			var ctor = require('./' + result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toSeconds
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/concurrent/TimeUnit.html#toSeconds(long)}
 **/
TimeUnit.prototype.toSeconds = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toSeconds',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.concurrent.TimeUnit') {
			return new TimeUnit(result);
		} else {
			var ctor = require('./' + result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sleep
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/concurrent/TimeUnit.html#sleep(long)}
 **/
TimeUnit.prototype.sleep = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sleep',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.concurrent.TimeUnit') {
			return new TimeUnit(result);
		} else {
			var ctor = require('./' + result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toNanos
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/concurrent/TimeUnit.html#toNanos(long)}
 **/
TimeUnit.prototype.toNanos = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toNanos',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.concurrent.TimeUnit') {
			return new TimeUnit(result);
		} else {
			var ctor = require('./' + result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toMinutes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/concurrent/TimeUnit.html#toMinutes(long)}
 **/
TimeUnit.prototype.toMinutes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toMinutes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.concurrent.TimeUnit') {
			return new TimeUnit(result);
		} else {
			var ctor = require('./' + result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toHours
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/concurrent/TimeUnit.html#toHours(long)}
 **/
TimeUnit.prototype.toHours = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toHours',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.concurrent.TimeUnit') {
			return new TimeUnit(result);
		} else {
			var ctor = require('./' + result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toMillis
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/concurrent/TimeUnit.html#toMillis(long)}
 **/
TimeUnit.prototype.toMillis = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toMillis',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.concurrent.TimeUnit') {
			return new TimeUnit(result);
		} else {
			var ctor = require('./' + result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toDays
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/concurrent/TimeUnit.html#toDays(long)}
 **/
TimeUnit.prototype.toDays = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toDays',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.concurrent.TimeUnit') {
			return new TimeUnit(result);
		} else {
			var ctor = require('./' + result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toMicros
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/concurrent/TimeUnit.html#toMicros(long)}
 **/
TimeUnit.prototype.toMicros = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toMicros',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.concurrent.TimeUnit') {
			return new TimeUnit(result);
		} else {
			var ctor = require('./' + result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = TimeUnit;
