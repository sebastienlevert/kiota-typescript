function deserializeIntoCategory(category = {}) {
    return {
        "id": n => { category.id = n.getNumberValue(); },
        "name": n => { category.name = n.getStringValue(); },
    };
}

function deserializeIntoTag(tag = {}) {
    return {
        "id": n => { tag.id = n.getNumberValue(); },
        "name": n => { tag.name = n.getStringValue(); },
    };
}

var Pet_status;
(function (Pet_status) {
    Pet_status["Available"] = "available";
    Pet_status["Pending"] = "pending";
    Pet_status["Sold"] = "sold";
})(Pet_status || (Pet_status = {}));

function deserializeIntoPet(pet = {}) {
    return {
        "category": n => { pet.category = n.getObject(deserializeIntoCategory); },
        "id": n => { pet.id = n.getNumberValue(); },
        "name": n => { pet.name = n.getStringValue(); },
        "photoUrls": n => { pet.photoUrls = n.getCollectionOfPrimitiveValues(); },
        "status": n => { pet.status = n.getEnumValue(Pet_status); },
        "tags": n => { pet.tags = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTag); },
    };
}

function deserializeIntoApiResponse(apiResponse = {}) {
    return {
        "code": n => { apiResponse.code = n.getNumberValue(); },
        "message": n => { apiResponse.message = n.getStringValue(); },
        "type": n => { apiResponse.type = n.getStringValue(); },
    };
}

/**
 * This factory holds a list of all the registered factories for the various types of nodes.
 */
class ParseNodeFactoryRegistry {
    constructor() {
        /** List of factories that are registered by content type. */
        this.contentTypeAssociatedFactories = new Map();
    }
    getValidContentType() {
        throw new Error("The registry supports multiple content types. Get the registered factory instead.");
    }
    getRootParseNode(contentType, content) {
        if (!contentType) {
            throw new Error("content type cannot be undefined or empty");
        }
        if (!content) {
            throw new Error("content cannot be undefined or empty");
        }
        const vendorSpecificContentType = contentType.split(";")[0];
        let factory = this.contentTypeAssociatedFactories.get(vendorSpecificContentType);
        if (factory) {
            return factory.getRootParseNode(vendorSpecificContentType, content);
        }
        const cleanedContentType = vendorSpecificContentType.replace(/[^/]+\+/gi, "");
        factory = this.contentTypeAssociatedFactories.get(cleanedContentType);
        if (factory) {
            return factory.getRootParseNode(cleanedContentType, content);
        }
        throw new Error(`Content type ${cleanedContentType} does not have a factory registered to be parsed`);
    }
}
/** Default singleton instance of the registry to be used when registring new factories that should be available by default. */
ParseNodeFactoryRegistry.defaultInstance = new ParseNodeFactoryRegistry();

/** Proxy factory that allows the composition of before and after callbacks on existing factories. */
class ParseNodeProxyFactory {
    /**
     * Creates a new proxy factory that wraps the specified concrete factory while composing the before and after callbacks.
     * @param _concrete the concrete factory to wrap
     * @param _onBefore the callback to invoke before the deserialization of any model object.
     * @param _onAfter the callback to invoke after the deserialization of any model object.
     */
    constructor(_concrete, _onBefore, _onAfter) {
        this._concrete = _concrete;
        this._onBefore = _onBefore;
        this._onAfter = _onAfter;
        if (!_concrete) {
            throw new Error("_concrete cannot be undefined");
        }
    }
    getValidContentType() {
        return this._concrete.getValidContentType();
    }
    getRootParseNode(contentType, content) {
        const node = this._concrete.getRootParseNode(contentType, content);
        const originalBefore = node.onBeforeAssignFieldValues;
        const originalAfter = node.onAfterAssignFieldValues;
        node.onBeforeAssignFieldValues = (value) => {
            this._onBefore && this._onBefore(value);
            originalBefore && originalBefore(value);
        };
        node.onAfterAssignFieldValues = (value) => {
            this._onAfter && this._onAfter(value);
            originalAfter && originalAfter(value);
        };
        return node;
    }
}

/** This factory holds a list of all the registered factories for the various types of nodes. */
class SerializationWriterFactoryRegistry {
    constructor() {
        /** List of factories that are registered by content type. */
        this.contentTypeAssociatedFactories = new Map();
    }
    getValidContentType() {
        throw new Error("The registry supports multiple content types. Get the registered factory instead.");
    }
    getSerializationWriter(contentType) {
        if (!contentType) {
            throw new Error("content type cannot be undefined or empty");
        }
        const vendorSpecificContentType = contentType.split(";")[0];
        let factory = this.contentTypeAssociatedFactories.get(vendorSpecificContentType);
        if (factory) {
            return factory.getSerializationWriter(vendorSpecificContentType);
        }
        const cleanedContentType = vendorSpecificContentType.replace(/[^/]+\+/gi, "");
        factory = this.contentTypeAssociatedFactories.get(cleanedContentType);
        if (factory) {
            return factory.getSerializationWriter(cleanedContentType);
        }
        throw new Error(`Content type ${cleanedContentType} does not have a factory registered to be serialized`);
    }
}
/** Default singleton instance of the registry to be used when registring new factories that should be available by default. */
SerializationWriterFactoryRegistry.defaultInstance = new SerializationWriterFactoryRegistry();

/** Proxy factory that allows the composition of before and after callbacks on existing factories. */
class SerializationWriterProxyFactory {
    /**
     * Creates a new proxy factory that wraps the specified concrete factory while composing the before and after callbacks.
     * @param _concrete the concrete factory to wrap
     * @param _onBefore the callback to invoke before the serialization of any model object.
     * @param _onAfter the callback to invoke after the serialization of any model object.
     * @param _onStart the callback to invoke when the serialization of a model object starts
     */
    constructor(_concrete, _onBefore, _onAfter, _onStart) {
        this._concrete = _concrete;
        this._onBefore = _onBefore;
        this._onAfter = _onAfter;
        this._onStart = _onStart;
        if (!_concrete) {
            throw new Error("_concrete cannot be undefined");
        }
    }
    getValidContentType() {
        return this._concrete.getValidContentType();
    }
    getSerializationWriter(contentType) {
        const writer = this._concrete.getSerializationWriter(contentType);
        const originalBefore = writer.onBeforeObjectSerialization;
        const originalAfter = writer.onAfterObjectSerialization;
        const originalStart = writer.onStartObjectSerialization;
        writer.onBeforeObjectSerialization = (value) => {
            this._onBefore && this._onBefore(value);
            originalBefore && originalBefore(value);
        };
        writer.onAfterObjectSerialization = (value) => {
            this._onAfter && this._onAfter(value);
            originalAfter && originalAfter(value);
        };
        writer.onStartObjectSerialization = (value, writer) => {
            this._onStart && this._onStart(value, writer);
            originalStart && originalStart(value, writer);
        };
        return writer;
    }
}

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues$1;
const rnds8$1 = new Uint8Array(16);
function rng$1() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues$1) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues$1 = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues$1) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues$1(rnds8$1);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex$1 = [];

for (let i = 0; i < 256; ++i) {
  byteToHex$1.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex$1[arr[offset + 0]] + byteToHex$1[arr[offset + 1]] + byteToHex$1[arr[offset + 2]] + byteToHex$1[arr[offset + 3]] + '-' + byteToHex$1[arr[offset + 4]] + byteToHex$1[arr[offset + 5]] + '-' + byteToHex$1[arr[offset + 6]] + byteToHex$1[arr[offset + 7]] + '-' + byteToHex$1[arr[offset + 8]] + byteToHex$1[arr[offset + 9]] + '-' + byteToHex$1[arr[offset + 10]] + byteToHex$1[arr[offset + 11]] + byteToHex$1[arr[offset + 12]] + byteToHex$1[arr[offset + 13]] + byteToHex$1[arr[offset + 14]] + byteToHex$1[arr[offset + 15]]).toLowerCase();
}

const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native = {
  randomUUID
};

function v4$1(options, buf, offset) {
  if (native.randomUUID && !buf && !options) {
    return native.randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || rng$1)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return unsafeStringify(rnds);
}

/** In-memory implementation of the backing store. Allows for dirty tracking of changes. */
class InMemoryBackingStore {
    constructor() {
        this.subscriptions = new Map();
        this.store = new Map();
        this.returnOnlyChangedValues = false;
        this._initializationCompleted = true;
    }
    get(key) {
        const wrapper = this.store.get(key);
        if (wrapper &&
            ((this.returnOnlyChangedValues && wrapper.changed) ||
                !this.returnOnlyChangedValues)) {
            return wrapper.value;
        }
        return undefined;
    }
    set(key, value) {
        const oldValueWrapper = this.store.get(key);
        const oldValue = oldValueWrapper === null || oldValueWrapper === void 0 ? void 0 : oldValueWrapper.value;
        if (oldValueWrapper) {
            oldValueWrapper.value = value;
            oldValueWrapper.changed = this.initializationCompleted;
        }
        else {
            this.store.set(key, {
                changed: this.initializationCompleted,
                value,
            });
        }
        this.subscriptions.forEach((sub) => {
            sub(key, oldValue, value);
        });
    }
    enumerate() {
        let filterableArray = [...this.store.entries()];
        if (this.returnOnlyChangedValues) {
            filterableArray = filterableArray.filter(([_, v]) => v.changed);
        }
        return filterableArray.map(([key, value]) => {
            return { key, value };
        });
    }
    enumerateKeysForValuesChangedToNull() {
        const keys = [];
        for (const [key, entry] of this.store) {
            if (entry.changed && !entry.value) {
                keys.push(key);
            }
        }
        return keys;
    }
    subscribe(callback, subscriptionId) {
        if (!callback) {
            throw new Error("callback cannot be undefined");
        }
        subscriptionId = subscriptionId !== null && subscriptionId !== void 0 ? subscriptionId : v4$1();
        this.subscriptions.set(subscriptionId, callback);
        return subscriptionId;
    }
    unsubscribe(subscriptionId) {
        this.subscriptions.delete(subscriptionId);
    }
    clear() {
        this.store.clear();
    }
    set initializationCompleted(value) {
        this._initializationCompleted = value;
        this.store.forEach((v) => {
            v.changed = !value;
        });
    }
    get initializationCompleted() {
        return this._initializationCompleted;
    }
}

/** This class is used to create instances of InMemoryBackingStore */
class InMemoryBackingStoreFactory {
    createBackingStore() {
        return new InMemoryBackingStore();
    }
}

class BackingStoreFactorySingleton {
}
BackingStoreFactorySingleton.instance = new InMemoryBackingStoreFactory();

/** Proxy implementation of ParseNodeFactory for the backing store that automatically sets the state of the backing store when deserializing. */
class BackingStoreParseNodeFactory extends ParseNodeProxyFactory {
    /**
     * Initializes a new instance of the BackingStoreParseNodeFactory class given the concrete implementation.
     * @param concrete the concrete implementation of the ParseNodeFactory
     */
    constructor(concrete) {
        super(concrete, (value) => {
            const backedModel = value;
            if (backedModel && backedModel.backingStore) {
                backedModel.backingStore.initializationCompleted = false;
            }
        }, (value) => {
            const backedModel = value;
            if (backedModel && backedModel.backingStore) {
                backedModel.backingStore.initializationCompleted = true;
            }
        });
    }
}

/**Proxy implementation of SerializationWriterFactory for the backing store that automatically sets the state of the backing store when serializing. */
class BackingStoreSerializationWriterProxyFactory extends SerializationWriterProxyFactory {
    /**
     * Initializes a new instance of the BackingStoreSerializationWriterProxyFactory class given a concrete implementation of SerializationWriterFactory.
     * @param concrete a concrete implementation of SerializationWriterFactory to wrap.
     */
    constructor(concrete) {
        super(concrete, (value) => {
            const backedModel = value;
            if (backedModel && backedModel.backingStore) {
                backedModel.backingStore.returnOnlyChangedValues = true;
            }
        }, (value) => {
            const backedModel = value;
            if (backedModel && backedModel.backingStore) {
                backedModel.backingStore.returnOnlyChangedValues = false;
                backedModel.backingStore.initializationCompleted = true;
            }
        }, (value, writer) => {
            const backedModel = value;
            if (backedModel && backedModel.backingStore) {
                const keys = backedModel.backingStore.enumerateKeysForValuesChangedToNull();
                for (const key of keys) {
                    writer.writeNullValue(key);
                }
            }
        });
    }
}

/**
 * Registers the default serializer to the registry.
 * @param type the class of the factory to be registered.
 */
function registerDefaultSerializer(type) {
    if (!type)
        throw new Error("Type is required");
    const serializer = new type();
    SerializationWriterFactoryRegistry.defaultInstance.contentTypeAssociatedFactories.set(serializer.getValidContentType(), serializer);
}
/**
 * Registers the default deserializer to the registry.
 * @param type the class of the factory to be registered.
 */
function registerDefaultDeserializer(type) {
    if (!type)
        throw new Error("Type is required");
    const deserializer = new type();
    ParseNodeFactoryRegistry.defaultInstance.contentTypeAssociatedFactories.set(deserializer.getValidContentType(), deserializer);
}
/**
 * Enables the backing store on default serialization writers and the given serialization writer.
 * @param original The serialization writer to enable the backing store on.
 * @return A new serialization writer with the backing store enabled.
 */
function enableBackingStoreForSerializationWriterFactory(original) {
    if (!original)
        throw new Error("Original must be specified");
    let result = original;
    if (original instanceof SerializationWriterFactoryRegistry) {
        enableBackingStoreForSerializationRegistry(original);
    }
    else {
        result = new BackingStoreSerializationWriterProxyFactory(original);
    }
    enableBackingStoreForSerializationRegistry(SerializationWriterFactoryRegistry.defaultInstance);
    enableBackingStoreForParseNodeRegistry(ParseNodeFactoryRegistry.defaultInstance);
    return result;
}
/**
 * Enables the backing store on default parse node factories and the given parse node factory.
 * @param original The parse node factory to enable the backing store on.
 * @return A new parse node factory with the backing store enabled.
 */
function enableBackingStoreForParseNodeFactory(original) {
    if (!original)
        throw new Error("Original must be specified");
    let result = original;
    if (original instanceof ParseNodeFactoryRegistry) {
        enableBackingStoreForParseNodeRegistry(original);
    }
    else {
        result = new BackingStoreParseNodeFactory(original);
    }
    enableBackingStoreForParseNodeRegistry(ParseNodeFactoryRegistry.defaultInstance);
    return result;
}
function enableBackingStoreForParseNodeRegistry(registry) {
    for (const [k, v] of registry.contentTypeAssociatedFactories) {
        if (!(v instanceof BackingStoreParseNodeFactory ||
            v instanceof ParseNodeFactoryRegistry)) {
            registry.contentTypeAssociatedFactories.set(k, new BackingStoreParseNodeFactory(v));
        }
    }
}
function enableBackingStoreForSerializationRegistry(registry) {
    for (const [k, v] of registry.contentTypeAssociatedFactories) {
        if (!(v instanceof BackingStoreSerializationWriterProxyFactory ||
            v instanceof SerializationWriterFactoryRegistry)) {
            registry.contentTypeAssociatedFactories.set(k, new BackingStoreSerializationWriterProxyFactory(v));
        }
    }
}

/** Parent interface for errors thrown by the client when receiving failed responses to its requests. */
class ApiError extends Error {
    constructor(message) {
        super(message);
    }
}

/** Maintains a list of valid hosts and allows authentication providers to check whether a host is valid before authenticating a request */
class AllowedHostsValidator {
    /**
     * Creates a new AllowedHostsValidator object with provided values.
     * @param allowedHosts A list of valid hosts.  If the list is empty, all hosts are valid.
     */
    constructor(allowedHosts = new Set()) {
        this.allowedHosts = allowedHosts !== null && allowedHosts !== void 0 ? allowedHosts : new Set();
    }
    /**
     * Gets the list of valid hosts.  If the list is empty, all hosts are valid.
     * @returns A list of valid hosts.  If the list is empty, all hosts are valid.
     */
    getAllowedHosts() {
        return Array.from(this.allowedHosts);
    }
    /**
     * Sets the list of valid hosts.  If the list is empty, all hosts are valid.
     * @param allowedHosts A list of valid hosts.  If the list is empty, all hosts are valid.
     */
    setAllowedHosts(allowedHosts) {
        this.allowedHosts = allowedHosts;
    }
    /**
     * Checks whether the provided host is valid.
     * @param url The url to check.
     */
    isUrlHostValid(url) {
        var _a;
        if (!url)
            return false;
        if (this.allowedHosts.size === 0)
            return true;
        const schemeAndRest = url.split("://");
        if (schemeAndRest.length >= 2) {
            const rest = schemeAndRest[1];
            if (rest) {
                return this.isHostAndPathValid(rest);
            }
        }
        else if (!url.startsWith("http")) {
            // protocol relative URL domain.tld/path
            return this.isHostAndPathValid(url);
        }
        //@ts-ignore
        if (window && window.location && window.location.host) {
            // we're in a browser, and we're using paths only ../path, ./path, /path, etc.
            //@ts-ignore
            return this.allowedHosts.has((_a = window.location.host) === null || _a === void 0 ? void 0 : _a.toLowerCase());
        }
        return false;
    }
    isHostAndPathValid(rest) {
        const hostAndRest = rest.split("/");
        if (hostAndRest.length >= 2) {
            const host = hostAndRest[0];
            if (host) {
                return this.allowedHosts.has(host.toLowerCase());
            }
        }
        return false;
    }
}

function validateProtocol(url) {
    if (!url.toLocaleLowerCase().startsWith('https://') && !windowUrlStartsWithHttps()) {
        throw new Error('Authentication scheme can only be used with https requests');
    }
}
function windowUrlStartsWithHttps() {
    // @ts-ignore
    return window && window.location && window.location.protocol.toLowerCase() !== 'https:';
}

/** Authenticate a request by using an API Key */
class ApiKeyAuthenticationProvider {
    /**
     * @constructor Creates an instance of ApiKeyAuthenticationProvider
     * @param apiKey The API Key to use for authentication
     * @param parameterName The name of the parameter to use for authentication
     * @param location The location of the parameter to use for authentication
     * @param validHosts The hosts that are allowed to use this authentication provider
     */
    constructor(apiKey, parameterName, location, validHosts) {
        this.apiKey = apiKey;
        this.parameterName = parameterName;
        this.location = location;
        if (apiKey === undefined || apiKey === "") {
            throw new Error("apiKey cannot be null or empty");
        }
        if (parameterName === undefined || parameterName === "") {
            throw new Error("parameterName cannot be null or empty");
        }
        if (location !== ApiKeyLocation.QueryParameter &&
            location !== ApiKeyLocation.Header) {
            throw new Error("location must be either QueryParameter or Header");
        }
        this.validator = new AllowedHostsValidator(validHosts);
    }
    authenticateRequest(request, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    additionalAuthenticationContext) {
        const url = request.URL;
        if (!url || !this.validator.isUrlHostValid(url)) {
            return Promise.resolve();
        }
        validateProtocol(url);
        switch (this.location) {
            case ApiKeyLocation.QueryParameter:
                request.URL +=
                    (url.indexOf("?") === -1 ? "?" : "&") +
                        this.parameterName +
                        "=" +
                        this.apiKey;
                break;
            case ApiKeyLocation.Header:
                request.headers[this.parameterName] = this.apiKey;
                break;
        }
        return Promise.resolve();
    }
}
/** The location for the API key */
var ApiKeyLocation;
(function (ApiKeyLocation) {
    /** The API key is in the query parameters */
    ApiKeyLocation[ApiKeyLocation["QueryParameter"] = 0] = "QueryParameter";
    /** The API key is in the headers */
    ApiKeyLocation[ApiKeyLocation["Header"] = 1] = "Header";
})(ApiKeyLocation || (ApiKeyLocation = {}));

/** This authentication provider does not perform any authentication.   */
class AnonymousAuthenticationProvider {
    constructor() {
        this.authenticateRequest = (
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        _, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        _2) => {
            return Promise.resolve();
        };
    }
}

/** Provides a base class for implementing AuthenticationProvider for Bearer token scheme. */
class BaseBearerTokenAuthenticationProvider {
    /**
     *
     * @param accessTokenProvider
     */
    constructor(accessTokenProvider) {
        this.accessTokenProvider = accessTokenProvider;
        this.authenticateRequest = async (request, additionalAuthenticationContext) => {
            if (!request) {
                throw new Error("request info cannot be null");
            }
            if (additionalAuthenticationContext &&
                additionalAuthenticationContext["claims"] &&
                request.headers[BaseBearerTokenAuthenticationProvider.authorizationHeaderKey]) {
                delete request.headers[BaseBearerTokenAuthenticationProvider.authorizationHeaderKey];
            }
            if (!request.headers ||
                !request.headers[BaseBearerTokenAuthenticationProvider.authorizationHeaderKey]) {
                const token = await this.accessTokenProvider.getAuthorizationToken(request.URL, additionalAuthenticationContext);
                if (!request.headers) {
                    request.headers = {};
                }
                if (token) {
                    request.headers[BaseBearerTokenAuthenticationProvider.authorizationHeaderKey] = `Bearer ${token}`;
                }
            }
        };
    }
}
BaseBearerTokenAuthenticationProvider.authorizationHeaderKey = "Authorization";

/**
 * Represents a date only. ISO 8601.
 */
class DateOnly {
    /**
     * Creates a new DateOnly from the given string.
     * @returns The new DateOnly
     * @throws An error if the year is invalid
     * @throws An error if the month is invalid
     * @throws An error if the day is invalid
     */
    constructor({ year = 0, month = 1, day = 1, }) {
        this.date = new Date(year, month - 1, day);
    }
    get year() {
        return this.date.getFullYear();
    }
    set year(value) {
        this.date.setFullYear(value);
    }
    get month() {
        return this.date.getMonth() + 1;
    }
    set month(value) {
        this.date.setMonth(value - 1);
    }
    get day() {
        return this.date.getDate();
    }
    set day(value) {
        this.date.setDate(value);
    }
    /**
     * Creates a new DateOnly from the given date.
     * @param date The date
     * @returns The new DateOnly
     * @throws An error if the date is invalid
     */
    static fromDate(date) {
        if (!date) {
            throw new Error("Date cannot be undefined");
        }
        const result = new DateOnly({});
        result.date = new Date(date);
        return result;
    }
    /**
     * Parses a string into a DateOnly. The string can be of the ISO 8601 time only format or a number representing the ticks of a Date.
     * @param value The value to parse
     * @returns The parsed DateOnly.
     * @throws An error if the value is invalid
     */
    static parse(value) {
        var _a, _b, _c, _d, _e, _f;
        if (!value || value.length === 0) {
            return undefined;
        }
        const ticks = Date.parse(value);
        if (isNaN(ticks)) {
            const exec = /^(?<year>\d{4,})-(?<month>0[1-9]|1[012])-(?<day>0[1-9]|[12]\d|3[01])$/gi.exec(value);
            if (exec) {
                const year = parseInt((_b = (_a = exec.groups) === null || _a === void 0 ? void 0 : _a.year) !== null && _b !== void 0 ? _b : "");
                const month = parseInt((_d = (_c = exec.groups) === null || _c === void 0 ? void 0 : _c.month) !== null && _d !== void 0 ? _d : "");
                const day = parseInt((_f = (_e = exec.groups) === null || _e === void 0 ? void 0 : _e.day) !== null && _f !== void 0 ? _f : "");
                return new DateOnly({ year, month, day });
            }
            else {
                throw new Error("Value is not a valid date-only representation");
            }
        }
        else {
            const date = new Date(ticks);
            return this.fromDate(date);
        }
    }
    /**
     *  Returns a string representation of the date in the format YYYY-MM-DD
     * @returns The date in the format YYYY-MM-DD ISO 8601
     */
    toString() {
        return `${formatSegment(this.year, 4)}-${formatSegment(this.month)}-${formatSegment(this.day)}`;
    }
}
function formatSegment(segment, digits = 2) {
    return segment.toString().padStart(digits, "0");
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getAugmentedNamespace(n) {
  var f = n.default;
	if (typeof f == "function") {
		var a = function () {
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var dist = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.serialize = exports.parse = exports.InvalidDurationError = void 0;
	const units = [
	    { unit: 'years', symbol: 'Y' },
	    { unit: 'months', symbol: 'M' },
	    { unit: 'weeks', symbol: 'W' },
	    { unit: 'days', symbol: 'D' },
	    { unit: 'hours', symbol: 'H' },
	    { unit: 'minutes', symbol: 'M' },
	    { unit: 'seconds', symbol: 'S' },
	];
	// Construction of the duration regex
	const r = (name, unit) => `((?<${name}>-?\\d*[\\.,]?\\d+)${unit})?`;
	const durationRegex = new RegExp([
	    '(?<negative>-)?P',
	    r('years', 'Y'),
	    r('months', 'M'),
	    r('weeks', 'W'),
	    r('days', 'D'),
	    '(T',
	    r('hours', 'H'),
	    r('minutes', 'M'),
	    r('seconds', 'S'),
	    ')?', // end optional time
	].join(''));
	function parseNum(s) {
	    if (s === '' || s === undefined || s === null) {
	        return undefined;
	    }
	    return parseFloat(s.replace(',', '.'));
	}
	exports.InvalidDurationError = new Error('Invalid duration');
	function parse(durationStr) {
	    const match = durationRegex.exec(durationStr);
	    if (!match || !match.groups) {
	        throw exports.InvalidDurationError;
	    }
	    let empty = true;
	    const values = {};
	    for (const { unit } of units) {
	        if (match.groups[unit]) {
	            empty = false;
	            values[unit] = parseNum(match.groups[unit]);
	        }
	    }
	    if (empty) {
	        throw exports.InvalidDurationError;
	    }
	    const duration = values;
	    if (match.groups.negative) {
	        duration.negative = true;
	    }
	    return duration;
	}
	exports.parse = parse;
	const s = (number, component) => {
	    if (!number) {
	        return undefined;
	    }
	    let numberAsString = number.toString();
	    const exponentIndex = numberAsString.indexOf('e');
	    if (exponentIndex > -1) {
	        const magnitude = parseInt(numberAsString.slice(exponentIndex + 2), 10);
	        numberAsString = number.toFixed(magnitude + exponentIndex - 2);
	    }
	    return numberAsString + component;
	};
	function serialize(duration) {
	    if (!duration.years &&
	        !duration.months &&
	        !duration.weeks &&
	        !duration.days &&
	        !duration.hours &&
	        !duration.minutes &&
	        !duration.seconds) {
	        return 'PT0S';
	    }
	    return [
	        duration.negative && '-',
	        'P',
	        s(duration.years, 'Y'),
	        s(duration.months, 'M'),
	        s(duration.weeks, 'W'),
	        s(duration.days, 'D'),
	        (duration.hours || duration.minutes || duration.seconds) && 'T',
	        s(duration.hours, 'H'),
	        s(duration.minutes, 'M'),
	        s(duration.seconds, 'S'),
	    ]
	        .filter(Boolean)
	        .join('');
	}
	exports.serialize = serialize;
	
} (dist));

/**
 * Represents a duration value. ISO 8601.
 */
class Duration {
    /**
     * Creates a new Duration value from the given parameters.
     * @returns The new Duration
     * @throws An error if years is invalid
     * @throws An error if months is invalid
     * @throws An error if weeks is invalid
     * @throws An error if days is invalid
     * @throws An error if hours is invalid
     * @throws An error if minutes is invalid
     * @throws An error if seconds is invalid
     * @throws An error if weeks is used in combination with years or months
     */
    constructor({ years = 0, months = 0, weeks = 0, days = 0, hours = 0, minutes = 0, seconds = 0, negative = false, }) {
        if (years < 0 || years > 9999) {
            throw new Error("Year must be between 0 and 9999");
        }
        if (months < 0 || months > 11) {
            throw new Error("Month must be between 0 and 11");
        }
        if (weeks < 0 || weeks > 53) {
            throw new Error("Week must be between 0 and 53");
        }
        if (days < 0 || days > 6) {
            throw new Error("Day must be between 0 and 6");
        }
        if (hours < 0 || hours > 23) {
            throw new Error("Hour must be between 0 and 23");
        }
        if (minutes < 0 || minutes > 59) {
            throw new Error("Minute must be between 0 and 59");
        }
        if (seconds < 0 || seconds > 59) {
            throw new Error("Second must be between 0 and 59");
        }
        if ((years > 0 || months > 0) && weeks > 0) {
            throw new Error("Cannot have weeks and months or weeks and years");
        }
        this.years = years;
        this.months = months;
        this.weeks = weeks;
        this.days = days;
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.negative = negative;
    }
    /**
     * Parses a string into a Duration. The string can be of the ISO 8601 duration format.
     * @param value The value to parse
     * @returns The parsed Duration.
     * @throws An error if the value is invalid
     */
    static parse(value) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (!value || value.length === 0) {
            return undefined;
        }
        const duration = dist.parse(value);
        return new Duration({
            years: (_a = duration.years) !== null && _a !== void 0 ? _a : 0,
            months: (_b = duration.months) !== null && _b !== void 0 ? _b : 0,
            weeks: (_c = duration.weeks) !== null && _c !== void 0 ? _c : 0,
            days: (_d = duration.days) !== null && _d !== void 0 ? _d : 0,
            hours: (_e = duration.hours) !== null && _e !== void 0 ? _e : 0,
            minutes: (_f = duration.minutes) !== null && _f !== void 0 ? _f : 0,
            seconds: (_g = duration.seconds) !== null && _g !== void 0 ? _g : 0,
            negative: (_h = duration.negative) !== null && _h !== void 0 ? _h : false,
        });
    }
    /**
     * Serializes the duration to a string in the ISO 8601 duration format.
     * @returns The serialized duration.
     */
    toString() {
        return dist.serialize(this);
    }
}

var uriTemplateLite = {};

/**
 * @version    20.5.0
 * @author     Lauri Rooden <lauri@rooden.ee>
 * @license    MIT License
 */



!function(URI) {

	/**
	 * URI Template
	 * @see http://tools.ietf.org/html/rfc6570
	 */

	var RESERVED = /[!'()]/g
	// /[[\]:\/!#$&()*+,;='?@]/g
	, SEPARATORS = {"": ",", "+": ",", "#": ",", "?": "&"}
	, escapeRe = /[$-/?[-^{|}]/g
	, expandRe = /\{([#&+./;?]?)((?:[-\w%.]+(\*|:\d+)?(?:,|(?=})))+)\}/g
	, parseRe  = RegExp(expandRe.source + "|.[^{]*?", "g");

	URI.encoder = encodeURIComponent;
	URI.decoder = decodeURIComponent;

	/*** EXPAND ***/
	function encodeNormal(val) {
		return URI.encoder(val).replace(RESERVED, escape)
	}

	function notNull(s) {
		return s != null
	}

	function mapCleanJoin(arr, mapFn, joinStr) {
		arr = arr.map(mapFn).filter(notNull);
		return arr.length && arr.join(joinStr)
	}

	function expand(template, data) {
		return template.replace(expandRe, function(_, op, vals) {
			var sep = SEPARATORS[op] || op
			, named = sep == ";" || sep == "&"
			, enc = op && sep == "," ? encodeURI : encodeNormal
			, out = mapCleanJoin(vals.split(","), function(_name) {
				var mod = _name.split(/[*:]/)
				, name = mod[0]
				, val = data[name];

				if (val == null) return

				if (typeof val == "object") {
					mod = name != _name;
					if (Array.isArray(val)) {
						val = mapCleanJoin(val, enc, mod ? named ? sep + name + "=" : sep : "," );
					} else {
						val = mapCleanJoin(Object.keys(val), function(key) {
							return enc(key) + (mod ? "=" : ",") + enc(val[key])
						}, mod && (named || sep == "/") ? sep : ",");
						if (mod) named = 0;
					}
					if (!val) return
				} else {
					val = enc(mod[1] ? val.slice(0, mod[1]) : val);
				}

				return (
					named ?
					name + (val || sep == "&" ? "=" + val : val) :
					val
				)
			}, sep);

			return out || out === "" ? (op != "+" ? op + out : out) : ""
		}
	)}

	URI.expand = expand;
	/**/

	URI.Template = function Template(template) {
		var self = this
		//if (!(self instanceof Template)) return new Template(template)
		/*** PARSE ***/
		, pos = 0
		, lengths = {}
		, fnStr = ""
		, reStr = "^" + template.replace(parseRe, function(_, op, vals) {
			if (!vals) return escapeRegExp(_)

			var sep = SEPARATORS[op] || op
			, named = sep == ";" || sep == "&";
			return vals.split(",").map(function(_name, i) {
				var mod = _name.split(/[*:]/)
				, name = mod[0]
				, re = (lengths[name] || "(") + ".*?)";

				pos++;
				if (mod[1]) {
					re = "((?:%..|.){1," + mod[1] + "})";
					lengths[name] = "(\\" + pos;
				}
				fnStr += "t=($[" + pos + "]||'').split('" + (mod ? named ? sep + name + "=" : sep : ",") + "').map(d);";
				fnStr += "o[\"" + name + "\"]=" + (mod[1] === "" ? "t;" : "t.length>1?t:t[0];");
				re = escapeRegExp(i === 0 ? op === "+" ? "" : op : sep) + (
					named ?
					escapeRegExp(name) + "(?:=" + re + ")?" :
					sep == "&" ?
					escapeRegExp(name + "=") + re :
					re
				);
				return mod[1] === "" ? "(?:" + re + ")?" : re
			}).join("")
		}) + "$"
		, re = RegExp(reStr)
		, fn = Function("$,d", "var t,o={};" + fnStr + "return o");

		self.template = template;
		self.match = function(uri) {
			var match = re.exec(uri);
			return match && fn(match, URI.decoder)
		};

		function escapeRegExp(string) {
			return string.replace(escapeRe, "\\$&")
		}
		/**/
		/*** EXPAND ***/
		self.expand = expand.bind(self, template);
		/**/
	};

// `this` is `exports` in NodeJS and `window` in browser.
}(commonjsGlobal.URI || (commonjsGlobal.URI = {})); // jshint ignore:line

/*
 * Represents a time only. ISO 8601.
 */
class TimeOnly {
    /**
     * Creates a new TimeOnly from the given parameters.
     * @returns The new TimeOnly
     * @throws An error if the milliseconds are invalid
     * @throws An error if the seconds are invalid
     * @throws An error if the minutes are invalid
     * @throws An error if the hours are invalid
     * @throws An error if the milliseconds are invalid
     */
    constructor({ hours = 0, minutes = 0, seconds = 0, picoseconds = 0, }) {
        if (hours < 0 || hours > 23) {
            throw new Error("Hour must be between 0 and 23");
        }
        if (minutes < 0 || minutes > 59) {
            throw new Error("Minute must be between 0 and 59");
        }
        if (seconds < 0 || seconds > 59) {
            throw new Error("Second must be between 0 and 59");
        }
        if (picoseconds < 0 || picoseconds > 999999999999) {
            throw new Error("Millisecond must be between 0 and 999999999999");
        }
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.picoseconds = picoseconds;
    }
    /**
     * Creates a new TimeOnly from the given date.
     * @param date The date
     * @returns The new TimeOnly
     * @throws An error if the date is invalid
     */
    static fromDate(date) {
        if (!date) {
            throw new Error("Date cannot be undefined");
        }
        return new TimeOnly({
            hours: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds(),
            picoseconds: date.getMilliseconds() * 1000000000,
        });
    }
    /**
     * Parses a string into a TimeOnly. The string can be of the ISO 8601 time only format or a number representing the ticks of a Date.
     * @param value The value to parse
     * @returns The parsed TimeOnly.
     * @throws An error if the value is invalid
     */
    static parse(value) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (!value || value.length === 0) {
            return undefined;
        }
        const ticks = Date.parse(value);
        if (isNaN(ticks)) {
            const exec = /^(?<hours>[01]\d|2[0-3]):(?<minutes>[0-5]\d):(?<seconds>[0-5]\d)(?:[.](?<milliseconds>\d{1,12}))?$/gi.exec(value);
            if (exec) {
                const hours = parseInt((_b = (_a = exec.groups) === null || _a === void 0 ? void 0 : _a.hours) !== null && _b !== void 0 ? _b : "");
                const minutes = parseInt((_d = (_c = exec.groups) === null || _c === void 0 ? void 0 : _c.minutes) !== null && _d !== void 0 ? _d : "");
                const seconds = parseInt((_f = (_e = exec.groups) === null || _e === void 0 ? void 0 : _e.seconds) !== null && _f !== void 0 ? _f : "");
                const milliseconds = parseInt((_h = (_g = exec.groups) === null || _g === void 0 ? void 0 : _g.milliseconds) !== null && _h !== void 0 ? _h : "0");
                return new TimeOnly({
                    hours,
                    minutes,
                    seconds,
                    picoseconds: milliseconds,
                });
            }
            else {
                throw new Error("Value is not a valid time-only representation");
            }
        }
        else {
            const date = new Date(ticks);
            return this.fromDate(date);
        }
    }
    /**
     * Returns a string representation of the time in the format HH:MM:SS.SSSSSSSSSSSSSS
     * @returns The time in the format HH:MM:SS.SSSSSSSSSSSSSS
     * @throws An error if the time is invalid
     */
    toString() {
        return `${formatSegment(this.hours, 2)}:${formatSegment(this.minutes, 2)}:${formatSegment(this.seconds, 2)}.${formatSegment(this.picoseconds, 12)}`;
    }
}

/** This class represents an abstract HTTP request. */
class RequestInformation {
    constructor() {
        /** The path parameters for the request. */
        this.pathParameters = {};
        /** The Query Parameters of the request. */
        this.queryParameters = {}; //TODO: case insensitive
        /** The Request Headers. */
        this.headers = {}; //TODO: case insensitive
        this._requestOptions = {}; //TODO: case insensitive
        /**
         * Sets the request body from a model with the specified content type.
         * @param value the models.
         * @param contentType the content type.
         * @param requestAdapter The adapter service to get the serialization writer from.
         * @typeParam T the model type.
         */
        this.setContentFromParsable = (requestAdapter, contentType, value, serializerMethod) => {
            const writer = this.getSerializationWriter(requestAdapter, contentType, value);
            if (!this.headers) {
                this.headers = {};
            }
            if (Array.isArray(value)) {
                writer.writeCollectionOfObjectValuesFromMethod(undefined, value, 
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                serializerMethod);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                writer.writeObjectValueFromMethod(undefined, value, serializerMethod);
            }
            this.setContentAndContentType(writer, contentType);
        };
        this.setContentAndContentType = (writer, contentType) => {
            if (contentType) {
                this.headers[RequestInformation.contentTypeHeader] = contentType;
            }
            this.content = writer.getSerializedContent();
        };
        this.getSerializationWriter = (requestAdapter, contentType, ...values) => {
            if (!requestAdapter)
                throw new Error("httpCore cannot be undefined");
            if (!contentType)
                throw new Error("contentType cannot be undefined");
            if (!values || values.length === 0) {
                throw new Error("values cannot be undefined or empty");
            }
            return requestAdapter
                .getSerializationWriterFactory()
                .getSerializationWriter(contentType);
        };
        /**
         * Sets the request body from a model with the specified content type.
         * @param value the scalar values to serialize.
         * @param contentType the content type.
         * @param requestAdapter The adapter service to get the serialization writer from.
         * @typeParam T the model type.
         */
        this.setContentFromScalar = (requestAdapter, contentType, value) => {
            const writer = this.getSerializationWriter(requestAdapter, contentType, value);
            if (!this.headers) {
                this.headers = {};
            }
            if (Array.isArray(value)) {
                writer.writeCollectionOfPrimitiveValues(undefined, value);
            }
            else {
                const valueType = typeof value;
                if (!value) {
                    writer.writeNullValue(undefined);
                }
                else if (valueType === "boolean") {
                    writer.writeBooleanValue(undefined, value);
                }
                else if (valueType === "string") {
                    writer.writeStringValue(undefined, value);
                }
                else if (value instanceof Date) {
                    writer.writeDateValue(undefined, value);
                }
                else if (value instanceof DateOnly) {
                    writer.writeDateOnlyValue(undefined, value);
                }
                else if (value instanceof TimeOnly) {
                    writer.writeTimeOnlyValue(undefined, value);
                }
                else if (value instanceof Duration) {
                    writer.writeDurationValue(undefined, value);
                }
                else if (valueType === "number") {
                    writer.writeNumberValue(undefined, value);
                }
                else if (Array.isArray(value)) {
                    writer.writeCollectionOfPrimitiveValues(undefined, value);
                }
                else {
                    throw new Error(`encountered unknown value type during serialization ${valueType}`);
                }
            }
            this.setContentAndContentType(writer, contentType);
        };
        /**
         * Sets the request body to be a binary stream.
         * @param value the binary stream
         */
        this.setStreamContent = (value) => {
            this.headers[RequestInformation.contentTypeHeader] =
                RequestInformation.binaryContentType;
            this.content = value;
        };
        /**
         * Sets the query string parameters from a raw object.
         * @param parameters the parameters.
         */
        this.setQueryStringParametersFromRawObject = (q) => {
            if (!q)
                return;
            Object.entries(q).forEach(([k, v]) => {
                let key = k;
                if (q.getQueryParameter) {
                    const serializationKey = q.getQueryParameter(key);
                    if (serializationKey) {
                        key = serializationKey;
                    }
                }
                this.queryParameters[key] = v;
            });
        };
    }
    /** Gets the URL of the request  */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    get URL() {
        const rawUrl = this.pathParameters[RequestInformation.raw_url_key];
        if (this.uri) {
            return this.uri;
        }
        else if (rawUrl) {
            this.URL = rawUrl;
            return rawUrl;
        }
        else if (!this.queryParameters) {
            throw new Error("queryParameters cannot be undefined");
        }
        else if (!this.pathParameters) {
            throw new Error("pathParameters cannot be undefined");
        }
        else if (!this.urlTemplate) {
            throw new Error("urlTemplate cannot be undefined");
        }
        else {
            const template = new uriTemplateLite.URI.Template(this.urlTemplate);
            const data = {};
            for (const key in this.queryParameters) {
                if (this.queryParameters[key]) {
                    data[key] = this.queryParameters[key];
                }
            }
            for (const key in this.pathParameters) {
                if (this.pathParameters[key]) {
                    data[key] = this.pathParameters[key];
                }
            }
            return template.expand(data);
        }
    }
    /** Sets the URL of the request */
    set URL(url) {
        if (!url)
            throw new Error("URL cannot be undefined");
        this.uri = url;
        this.queryParameters = {};
        this.pathParameters = {};
    }
    /** Gets the request options for the request. */
    getRequestOptions() {
        return this._requestOptions;
    }
    /** Adds the headers for the request. */
    addRequestHeaders(source) {
        if (!source)
            return;
        for (const key in source) {
            this.headers[key] = source[key];
        }
    }
    /** Adds the request options for the request. */
    addRequestOptions(options) {
        if (!options || options.length === 0)
            return;
        options.forEach((option) => {
            this._requestOptions[option.getKey()] = option;
        });
    }
    /** Removes the request options for the request. */
    removeRequestOptions(...options) {
        if (!options || options.length === 0)
            return;
        options.forEach((option) => {
            delete this._requestOptions[option.getKey()];
        });
    }
}
RequestInformation.raw_url_key = "request-raw-url";
RequestInformation.binaryContentType = "application/octet-stream";
RequestInformation.contentTypeHeader = "Content-Type";

function getPathParameters(parameters) {
    const result = {};
    if (typeof parameters === "string") {
        result[RequestInformation.raw_url_key] = parameters;
    }
    else if (parameters) {
        for (const key in parameters) {
            result[key] = parameters[key];
        }
    }
    return result;
}

/**
 * Represents the HTTP method used by a request.
 */
var HttpMethod;
(function (HttpMethod) {
    /** The HTTP GET method */
    HttpMethod["GET"] = "GET";
    /** The HTTP POST method */
    HttpMethod["POST"] = "POST";
    /** The HTTP PATCH method */
    HttpMethod["PATCH"] = "PATCH";
    /** The HTTP DELETE method */
    HttpMethod["DELETE"] = "DELETE";
    /** The HTTP OPTIONS method */
    HttpMethod["OPTIONS"] = "OPTIONS";
    /** The HTTP CONNECT method */
    HttpMethod["CONNECT"] = "CONNECT";
    /** The HTTP TRACE method */
    HttpMethod["TRACE"] = "TRACE";
    /** The HTTP HEAD method */
    HttpMethod["HEAD"] = "HEAD";
    /** The HTTP PUT method */
    HttpMethod["PUT"] = "PUT";
})(HttpMethod || (HttpMethod = {}));

/** Default response handler to access the native response object. */
class NativeResponseHandler {
    handleResponseAsync(response, errorMappings) {
        this.value = response;
        this.errorMappings = errorMappings;
        return Promise.resolve(undefined);
    }
}

/** This class can be used to wrap a request using the fluent API and get the native response object in return. */
class NativeResponseWrapper {
}
NativeResponseWrapper.CallAndGetNative = async (originalCall, q, h, o) => {
    const responseHandler = new NativeResponseHandler();
    await originalCall(q, h, o, responseHandler);
    return responseHandler.value;
};
NativeResponseWrapper.CallAndGetNativeWithBody = async (originalCall, requestBody, q, h, o) => {
    const responseHandler = new NativeResponseHandler();
    await originalCall(requestBody, q, h, o, responseHandler);
    return responseHandler.value;
};

function toFirstCharacterUpper(source) {
    if (source && source.length > 0) {
        return source.substring(0, 1).toLocaleUpperCase() + source.substring(1);
    }
    else {
        return "";
    }
}

var src$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    registerDefaultSerializer: registerDefaultSerializer,
    registerDefaultDeserializer: registerDefaultDeserializer,
    enableBackingStoreForSerializationWriterFactory: enableBackingStoreForSerializationWriterFactory,
    enableBackingStoreForParseNodeFactory: enableBackingStoreForParseNodeFactory,
    ApiError: ApiError,
    AllowedHostsValidator: AllowedHostsValidator,
    ApiKeyAuthenticationProvider: ApiKeyAuthenticationProvider,
    get ApiKeyLocation () { return ApiKeyLocation; },
    AnonymousAuthenticationProvider: AnonymousAuthenticationProvider,
    BaseBearerTokenAuthenticationProvider: BaseBearerTokenAuthenticationProvider,
    validateProtocol: validateProtocol,
    DateOnly: DateOnly,
    formatSegment: formatSegment,
    Duration: Duration,
    getPathParameters: getPathParameters,
    get HttpMethod () { return HttpMethod; },
    NativeResponseHandler: NativeResponseHandler,
    NativeResponseWrapper: NativeResponseWrapper,
    RequestInformation: RequestInformation,
    ParseNodeFactoryRegistry: ParseNodeFactoryRegistry,
    ParseNodeProxyFactory: ParseNodeProxyFactory,
    SerializationWriterFactoryRegistry: SerializationWriterFactoryRegistry,
    SerializationWriterProxyFactory: SerializationWriterProxyFactory,
    BackingStoreFactorySingleton: BackingStoreFactorySingleton,
    BackingStoreParseNodeFactory: BackingStoreParseNodeFactory,
    BackingStoreSerializationWriterProxyFactory: BackingStoreSerializationWriterProxyFactory,
    InMemoryBackingStore: InMemoryBackingStore,
    InMemoryBackingStoreFactory: InMemoryBackingStoreFactory,
    TimeOnly: TimeOnly,
    toFirstCharacterUpper: toFirstCharacterUpper
});

/** Builds and executes requests for operations under /pet/{petId}/uploadImage */
class UploadImageRequestBuilder {
    /**
     * Instantiates a new UploadImageRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters, requestAdapter) {
        if (!pathParameters)
            throw new Error("pathParameters cannot be undefined");
        if (!requestAdapter)
            throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/pet/{petId}/uploadImage{?additionalMetadata*}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    }
    ;
    createPostRequestInformation(body, requestConfiguration) {
        if (!body)
            throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setStreamContent(body);
        return requestInfo;
    }
    ;
    post(body, requestConfiguration, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(body, requestConfiguration);
        return (_b = (_a = this.requestAdapter) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, deserializeIntoApiResponse, responseHandler, {})) !== null && _b !== void 0 ? _b : Promise.reject(new Error('request adapter is null'));
    }
    ;
}

/** Builds and executes requests for operations under /pet/{petId} */
class WithPetItemRequestBuilder {
    /**
     * Instantiates a new WithPetItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters, requestAdapter) {
        if (!pathParameters)
            throw new Error("pathParameters cannot be undefined");
        if (!requestAdapter)
            throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/pet/{petId}{?name*,status*}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    }
    /** The uploadImage property */
    get uploadImage() {
        return new UploadImageRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    ;
    createDeleteRequestInformation(requestConfiguration) {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    }
    ;
    /**
     * Returns a single pet
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    createGetRequestInformation(requestConfiguration) {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = "application/xml";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    }
    ;
    createPostRequestInformation(requestConfiguration) {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    }
    ;
    delete(requestConfiguration, responseHandler) {
        var _a, _b;
        const requestInfo = this.createDeleteRequestInformation(requestConfiguration);
        return (_b = (_a = this.requestAdapter) === null || _a === void 0 ? void 0 : _a.sendPrimitiveAsync(requestInfo, "ArrayBuffer", responseHandler, {})) !== null && _b !== void 0 ? _b : Promise.reject(new Error('request adapter is null'));
    }
    ;
    /**
     * Returns a single pet
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Pet
     */
    get(requestConfiguration, responseHandler) {
        var _a, _b;
        const requestInfo = this.createGetRequestInformation(requestConfiguration);
        return (_b = (_a = this.requestAdapter) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, deserializeIntoPet, responseHandler, {})) !== null && _b !== void 0 ? _b : Promise.reject(new Error('request adapter is null'));
    }
    ;
    post(requestConfiguration, responseHandler) {
        var _a, _b;
        const requestInfo = this.createPostRequestInformation(requestConfiguration);
        return (_b = (_a = this.requestAdapter) === null || _a === void 0 ? void 0 : _a.sendPrimitiveAsync(requestInfo, "ArrayBuffer", responseHandler, {})) !== null && _b !== void 0 ? _b : Promise.reject(new Error('request adapter is null'));
    }
    ;
}

function serializeCategory(writer, category = {}) {
    writer.writeNumberValue("id", category.id);
    writer.writeStringValue("name", category.name);
}

function serializeTag(writer, tag = {}) {
    writer.writeNumberValue("id", tag.id);
    writer.writeStringValue("name", tag.name);
}

function serializePet(writer, pet = {}) {
    writer.writeObjectValueFromMethod("category", pet.category, serializeCategory);
    writer.writeNumberValue("id", pet.id);
    writer.writeStringValue("name", pet.name);
    writer.writeCollectionOfPrimitiveValues("photoUrls", pet.photoUrls);
    writer.writeEnumValue("status", pet.status);
    writer.writeCollectionOfObjectValuesFromMethod("tags", pet.tags, serializeTag);
}

/** Builds and executes requests for operations under /pet/findByStatus */
class FindByStatusRequestBuilder {
    /**
     * Instantiates a new FindByStatusRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters, requestAdapter) {
        if (!pathParameters)
            throw new Error("pathParameters cannot be undefined");
        if (!requestAdapter)
            throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/pet/findByStatus{?status*}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    }
    ;
    /**
     * Multiple status values can be provided with comma separated strings
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    createGetRequestInformation(requestConfiguration) {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = "application/xml";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    }
    ;
    /**
     * Multiple status values can be provided with comma separated strings
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Pet
     */
    get(requestConfiguration, responseHandler) {
        var _a, _b;
        const requestInfo = this.createGetRequestInformation(requestConfiguration);
        return (_b = (_a = this.requestAdapter) === null || _a === void 0 ? void 0 : _a.sendCollectionAsync(requestInfo, deserializeIntoPet, responseHandler, {})) !== null && _b !== void 0 ? _b : Promise.reject(new Error('request adapter is null'));
    }
    ;
}

/** Builds and executes requests for operations under /pet/findByTags */
class FindByTagsRequestBuilder {
    /**
     * Instantiates a new FindByTagsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters, requestAdapter) {
        if (!pathParameters)
            throw new Error("pathParameters cannot be undefined");
        if (!requestAdapter)
            throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/pet/findByTags{?tags*}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    }
    ;
    /**
     * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    createGetRequestInformation(requestConfiguration) {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = "application/xml";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    }
    ;
    /**
     * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Pet
     */
    get(requestConfiguration, responseHandler) {
        var _a, _b;
        const requestInfo = this.createGetRequestInformation(requestConfiguration);
        return (_b = (_a = this.requestAdapter) === null || _a === void 0 ? void 0 : _a.sendCollectionAsync(requestInfo, deserializeIntoPet, responseHandler, {})) !== null && _b !== void 0 ? _b : Promise.reject(new Error('request adapter is null'));
    }
    ;
}

/** Builds and executes requests for operations under /pet */
class PetRequestBuilder {
    /**
     * Instantiates a new PetRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters, requestAdapter) {
        if (!pathParameters)
            throw new Error("pathParameters cannot be undefined");
        if (!requestAdapter)
            throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/pet";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    }
    /** The findByStatus property */
    get findByStatus() {
        return new FindByStatusRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The findByTags property */
    get findByTags() {
        return new FindByTagsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    ;
    /**
     * Add a new pet to the store
     * @param body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    createPostRequestInformation(body, requestConfiguration) {
        if (!body)
            throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = "application/xml";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePet);
        return requestInfo;
    }
    ;
    /**
     * Update an existing pet by Id
     * @param body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    createPutRequestInformation(body, requestConfiguration) {
        if (!body)
            throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PUT;
        requestInfo.headers["Accept"] = "application/xml";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePet);
        return requestInfo;
    }
    ;
    /**
     * Add a new pet to the store
     * @param body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Pet
     */
    post(body, requestConfiguration, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(body, requestConfiguration);
        return (_b = (_a = this.requestAdapter) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, deserializeIntoPet, responseHandler, {})) !== null && _b !== void 0 ? _b : Promise.reject(new Error('request adapter is null'));
    }
    ;
    /**
     * Update an existing pet by Id
     * @param body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Pet
     */
    put(body, requestConfiguration, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        const requestInfo = this.createPutRequestInformation(body, requestConfiguration);
        return (_b = (_a = this.requestAdapter) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, deserializeIntoPet, responseHandler, {})) !== null && _b !== void 0 ? _b : Promise.reject(new Error('request adapter is null'));
    }
    ;
}

function deserializeIntoInventoryResponse(inventoryResponse = {}) {
    return {};
}

/** Builds and executes requests for operations under /store/inventory */
class InventoryRequestBuilder {
    /**
     * Instantiates a new InventoryRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters, requestAdapter) {
        if (!pathParameters)
            throw new Error("pathParameters cannot be undefined");
        if (!requestAdapter)
            throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/store/inventory";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    }
    ;
    /**
     * Returns a map of status codes to quantities
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    createGetRequestInformation(requestConfiguration) {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    }
    ;
    /**
     * Returns a map of status codes to quantities
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of InventoryResponse
     */
    get(requestConfiguration, responseHandler) {
        var _a, _b;
        const requestInfo = this.createGetRequestInformation(requestConfiguration);
        return (_b = (_a = this.requestAdapter) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, deserializeIntoInventoryResponse, responseHandler, {})) !== null && _b !== void 0 ? _b : Promise.reject(new Error('request adapter is null'));
    }
    ;
}

var Order_status;
(function (Order_status) {
    Order_status["Placed"] = "placed";
    Order_status["Approved"] = "approved";
    Order_status["Delivered"] = "delivered";
})(Order_status || (Order_status = {}));

function deserializeIntoOrder(order = {}) {
    return {
        "complete": n => { order.complete = n.getBooleanValue(); },
        "id": n => { order.id = n.getNumberValue(); },
        "petId": n => { order.petId = n.getNumberValue(); },
        "quantity": n => { order.quantity = n.getNumberValue(); },
        "shipDate": n => { order.shipDate = n.getDateValue(); },
        "status": n => { order.status = n.getEnumValue(Order_status); },
    };
}

/** Builds and executes requests for operations under /store/order/{orderId} */
class WithOrderItemRequestBuilder {
    /**
     * Instantiates a new WithOrderItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters, requestAdapter) {
        if (!pathParameters)
            throw new Error("pathParameters cannot be undefined");
        if (!requestAdapter)
            throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/store/order/{orderId}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    }
    ;
    /**
     * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    createDeleteRequestInformation(requestConfiguration) {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    }
    ;
    /**
     * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    createGetRequestInformation(requestConfiguration) {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = "application/xml";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    }
    ;
    /**
     * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ArrayBuffer
     */
    delete(requestConfiguration, responseHandler) {
        var _a, _b;
        const requestInfo = this.createDeleteRequestInformation(requestConfiguration);
        return (_b = (_a = this.requestAdapter) === null || _a === void 0 ? void 0 : _a.sendPrimitiveAsync(requestInfo, "ArrayBuffer", responseHandler, {})) !== null && _b !== void 0 ? _b : Promise.reject(new Error('request adapter is null'));
    }
    ;
    /**
     * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Order
     */
    get(requestConfiguration, responseHandler) {
        var _a, _b;
        const requestInfo = this.createGetRequestInformation(requestConfiguration);
        return (_b = (_a = this.requestAdapter) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, deserializeIntoOrder, responseHandler, {})) !== null && _b !== void 0 ? _b : Promise.reject(new Error('request adapter is null'));
    }
    ;
}

function serializeOrder(writer, order = {}) {
    writer.writeBooleanValue("complete", order.complete);
    writer.writeNumberValue("id", order.id);
    writer.writeNumberValue("petId", order.petId);
    writer.writeNumberValue("quantity", order.quantity);
    writer.writeDateValue("shipDate", order.shipDate);
    writer.writeEnumValue("status", order.status);
}

/** Builds and executes requests for operations under /store/order */
class OrderRequestBuilder {
    /**
     * Instantiates a new OrderRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters, requestAdapter) {
        if (!pathParameters)
            throw new Error("pathParameters cannot be undefined");
        if (!requestAdapter)
            throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/store/order";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    }
    ;
    /**
     * Place a new order in the store
     * @param body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    createPostRequestInformation(body, requestConfiguration) {
        if (!body)
            throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeOrder);
        return requestInfo;
    }
    ;
    /**
     * Place a new order in the store
     * @param body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Order
     */
    post(body, requestConfiguration, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(body, requestConfiguration);
        return (_b = (_a = this.requestAdapter) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, deserializeIntoOrder, responseHandler, {})) !== null && _b !== void 0 ? _b : Promise.reject(new Error('request adapter is null'));
    }
    ;
}

/** Builds and executes requests for operations under /store */
class StoreRequestBuilder {
    /**
     * Instantiates a new StoreRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters, requestAdapter) {
        if (!pathParameters)
            throw new Error("pathParameters cannot be undefined");
        if (!requestAdapter)
            throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/store";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    }
    /** The inventory property */
    get inventory() {
        return new InventoryRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The order property */
    get order() {
        return new OrderRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    ;
    /**
     * Gets an item from the ApiSdk.store.order.item collection
     * @param id Unique identifier of the item
     * @returns a WithOrderItemRequestBuilder
     */
    orderById(id) {
        if (!id)
            throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["orderId"] = id;
        return new WithOrderItemRequestBuilder(urlTplParams, this.requestAdapter);
    }
    ;
}

function deserializeIntoUser(user = {}) {
    return {
        "email": n => { user.email = n.getStringValue(); },
        "firstName": n => { user.firstName = n.getStringValue(); },
        "id": n => { user.id = n.getNumberValue(); },
        "lastName": n => { user.lastName = n.getStringValue(); },
        "password": n => { user.password = n.getStringValue(); },
        "phone": n => { user.phone = n.getStringValue(); },
        "username": n => { user.username = n.getStringValue(); },
        "userStatus": n => { user.userStatus = n.getNumberValue(); },
    };
}

function serializeUser(writer, user = {}) {
    writer.writeStringValue("email", user.email);
    writer.writeStringValue("firstName", user.firstName);
    writer.writeNumberValue("id", user.id);
    writer.writeStringValue("lastName", user.lastName);
    writer.writeStringValue("password", user.password);
    writer.writeStringValue("phone", user.phone);
    writer.writeStringValue("username", user.username);
    writer.writeNumberValue("userStatus", user.userStatus);
}

/** Builds and executes requests for operations under /user/{username} */
class WithUsernameItemRequestBuilder {
    /**
     * Instantiates a new WithUsernameItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters, requestAdapter) {
        if (!pathParameters)
            throw new Error("pathParameters cannot be undefined");
        if (!requestAdapter)
            throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/user/{username}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    }
    ;
    /**
     * This can only be done by the logged in user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    createDeleteRequestInformation(requestConfiguration) {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    }
    ;
    createGetRequestInformation(requestConfiguration) {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = "application/xml";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    }
    ;
    /**
     * This can only be done by the logged in user.
     * @param body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    createPutRequestInformation(body, requestConfiguration) {
        if (!body)
            throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PUT;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUser);
        return requestInfo;
    }
    ;
    /**
     * This can only be done by the logged in user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ArrayBuffer
     */
    delete(requestConfiguration, responseHandler) {
        var _a, _b;
        const requestInfo = this.createDeleteRequestInformation(requestConfiguration);
        return (_b = (_a = this.requestAdapter) === null || _a === void 0 ? void 0 : _a.sendPrimitiveAsync(requestInfo, "ArrayBuffer", responseHandler, {})) !== null && _b !== void 0 ? _b : Promise.reject(new Error('request adapter is null'));
    }
    ;
    get(requestConfiguration, responseHandler) {
        var _a, _b;
        const requestInfo = this.createGetRequestInformation(requestConfiguration);
        return (_b = (_a = this.requestAdapter) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, deserializeIntoUser, responseHandler, {})) !== null && _b !== void 0 ? _b : Promise.reject(new Error('request adapter is null'));
    }
    ;
    /**
     * This can only be done by the logged in user.
     * @param body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ArrayBuffer
     */
    put(body, requestConfiguration, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        const requestInfo = this.createPutRequestInformation(body, requestConfiguration);
        return (_b = (_a = this.requestAdapter) === null || _a === void 0 ? void 0 : _a.sendPrimitiveAsync(requestInfo, "ArrayBuffer", responseHandler, {})) !== null && _b !== void 0 ? _b : Promise.reject(new Error('request adapter is null'));
    }
    ;
}

/** Builds and executes requests for operations under /user/createWithList */
class CreateWithListRequestBuilder {
    /**
     * Instantiates a new CreateWithListRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters, requestAdapter) {
        if (!pathParameters)
            throw new Error("pathParameters cannot be undefined");
        if (!requestAdapter)
            throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/user/createWithList";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    }
    ;
    /**
     * Creates list of users with given input array
     * @param body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    createPostRequestInformation(body, requestConfiguration) {
        if (!body)
            throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = "application/xml";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUser);
        return requestInfo;
    }
    ;
    /**
     * Creates list of users with given input array
     * @param body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of User
     */
    post(body, requestConfiguration, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(body, requestConfiguration);
        return (_b = (_a = this.requestAdapter) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, deserializeIntoUser, responseHandler, {})) !== null && _b !== void 0 ? _b : Promise.reject(new Error('request adapter is null'));
    }
    ;
}

/** Builds and executes requests for operations under /user/login */
class LoginRequestBuilder {
    /**
     * Instantiates a new LoginRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters, requestAdapter) {
        if (!pathParameters)
            throw new Error("pathParameters cannot be undefined");
        if (!requestAdapter)
            throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/user/login{?username*,password*}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    }
    ;
    createGetRequestInformation(requestConfiguration) {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = "application/xml";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    }
    ;
    get(requestConfiguration, responseHandler) {
        var _a, _b;
        const requestInfo = this.createGetRequestInformation(requestConfiguration);
        return (_b = (_a = this.requestAdapter) === null || _a === void 0 ? void 0 : _a.sendPrimitiveAsync(requestInfo, "string", responseHandler, {})) !== null && _b !== void 0 ? _b : Promise.reject(new Error('request adapter is null'));
    }
    ;
}

/** Builds and executes requests for operations under /user/logout */
class LogoutRequestBuilder {
    /**
     * Instantiates a new LogoutRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters, requestAdapter) {
        if (!pathParameters)
            throw new Error("pathParameters cannot be undefined");
        if (!requestAdapter)
            throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/user/logout";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    }
    ;
    createGetRequestInformation(requestConfiguration) {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    }
    ;
    get(requestConfiguration, responseHandler) {
        var _a, _b;
        const requestInfo = this.createGetRequestInformation(requestConfiguration);
        return (_b = (_a = this.requestAdapter) === null || _a === void 0 ? void 0 : _a.sendPrimitiveAsync(requestInfo, "ArrayBuffer", responseHandler, {})) !== null && _b !== void 0 ? _b : Promise.reject(new Error('request adapter is null'));
    }
    ;
}

/** Builds and executes requests for operations under /user */
class UserRequestBuilder {
    /**
     * Instantiates a new UserRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters, requestAdapter) {
        if (!pathParameters)
            throw new Error("pathParameters cannot be undefined");
        if (!requestAdapter)
            throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/user";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    }
    /** The createWithList property */
    get createWithList() {
        return new CreateWithListRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The login property */
    get login() {
        return new LoginRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The logout property */
    get logout() {
        return new LogoutRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    ;
    /**
     * This can only be done by the logged in user.
     * @param body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    createPostRequestInformation(body, requestConfiguration) {
        if (!body)
            throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUser);
        return requestInfo;
    }
    ;
    /**
     * This can only be done by the logged in user.
     * @param body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ArrayBuffer
     */
    post(body, requestConfiguration, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(body, requestConfiguration);
        return (_b = (_a = this.requestAdapter) === null || _a === void 0 ? void 0 : _a.sendPrimitiveAsync(requestInfo, "ArrayBuffer", responseHandler, {})) !== null && _b !== void 0 ? _b : Promise.reject(new Error('request adapter is null'));
    }
    ;
}

class JsonParseNode {
    /**
     *
     */
    constructor(_jsonNode) {
        this._jsonNode = _jsonNode;
        this.getStringValue = () => this._jsonNode;
        this.getChildNode = (identifier) => new JsonParseNode(this._jsonNode[identifier]);
        this.getBooleanValue = () => this._jsonNode;
        this.getNumberValue = () => this._jsonNode;
        this.getGuidValue = () => this._jsonNode;
        this.getDateValue = () => this._jsonNode;
        this.getDateOnlyValue = () => DateOnly.parse(this.getStringValue());
        this.getTimeOnlyValue = () => TimeOnly.parse(this.getStringValue());
        this.getDurationValue = () => Duration.parse(this.getStringValue());
        this.getCollectionOfPrimitiveValues = () => {
            return this._jsonNode.map((x) => {
                const currentParseNode = new JsonParseNode(x);
                const typeOfX = typeof x;
                if (typeOfX === "boolean") {
                    return currentParseNode.getBooleanValue();
                }
                else if (typeOfX === "string") {
                    return currentParseNode.getStringValue();
                }
                else if (typeOfX === "number") {
                    return currentParseNode.getNumberValue();
                }
                else if (x instanceof Date) {
                    return currentParseNode.getDateValue();
                }
                else if (x instanceof DateOnly) {
                    return currentParseNode.getDateValue();
                }
                else if (x instanceof TimeOnly) {
                    return currentParseNode.getDateValue();
                }
                else if (x instanceof Duration) {
                    return currentParseNode.getDateValue();
                }
                else {
                    throw new Error(`encountered an unknown type during deserialization ${typeof x}`);
                }
            });
        };
        this.getCollectionOfObjectValues = (type) => {
            return this._jsonNode
                .map((x) => new JsonParseNode(x))
                .map((x) => x.getObjectValue(type));
        };
        this.getObjectValue = (type) => {
            const result = type(this);
            if (this.onBeforeAssignFieldValues) {
                this.onBeforeAssignFieldValues(result);
            }
            this.assignFieldValues(result);
            if (this.onAfterAssignFieldValues) {
                this.onAfterAssignFieldValues(result);
            }
            return result;
        };
        this.getCollectionOfObjectValuesFromMethod = (method) => {
            return this._jsonNode
                .map((x) => new JsonParseNode(x))
                .map((x) => x.getObject(method)); // test this
        };
        this.getObject = (deserializerFunction) => {
            const model = {};
            // if (this.onBeforeAssignFieldValues) {
            //   this.onBeforeAssignFieldValues(result);
            // }
            this.aF(model, deserializerFunction);
            // if (this.onAfterAssignFieldValues) {
            //   this.onAfterAssignFieldValues(result);
            // }
            return model;
        };
        this.aF = (model, deserializerFunction) => {
            const fields = deserializerFunction(model);
            // const holder = item as unknown as AdditionalDataHolder;
            // if (holder && holder.additionalData) {
            //   itemAdditionalData = holder.additionalData;
            // }
            if (!this._jsonNode)
                return;
            Object.entries(this._jsonNode).forEach(([k, v]) => {
                const deserializer = fields[k];
                if (deserializer) {
                    deserializer(new JsonParseNode(v));
                }
            });
        };
        this.getEnumValues = (type) => {
            const rawValues = this.getStringValue();
            if (!rawValues) {
                return [];
            }
            return rawValues.split(",").map((x) => type[toFirstCharacterUpper(x)]);
        };
        this.getEnumValue = (type) => {
            const values = this.getEnumValues(type);
            if (values.length > 0) {
                return values[0];
            }
            else {
                return undefined;
            }
        };
        this.assignFieldValues = (item) => {
            const fields = item.getFieldDeserializers();
            let itemAdditionalData;
            const holder = item;
            if (holder && holder.additionalData) {
                itemAdditionalData = holder.additionalData;
            }
            if (!this._jsonNode)
                return;
            Object.entries(this._jsonNode).forEach(([k, v]) => {
                const deserializer = fields[k];
                if (deserializer) {
                    deserializer(new JsonParseNode(v));
                }
                else if (itemAdditionalData) {
                    itemAdditionalData[k] = v;
                }
            });
        };
    }
}

/* eslint-disable @typescript-eslint/no-unused-expressions */
class JsonSerializationWriter {
    constructor() {
        this.writer = [];
        this.writeStringValue = (key, value) => {
            key && value && this.writePropertyName(key);
            value && this.writer.push(`"${value}"`);
            key && value && this.writer.push(JsonSerializationWriter.propertySeparator);
        };
        this.writePropertyName = (key) => {
            this.writer.push(`"${key}":`);
        };
        this.writeBooleanValue = (key, value) => {
            key && value && this.writePropertyName(key);
            value && this.writer.push(`${value}`);
            key && value && this.writer.push(JsonSerializationWriter.propertySeparator);
        };
        this.writeNumberValue = (key, value) => {
            key && value && this.writePropertyName(key);
            value && this.writer.push(`${value}`);
            key && value && this.writer.push(JsonSerializationWriter.propertySeparator);
        };
        this.writeGuidValue = (key, value) => {
            key && value && this.writePropertyName(key);
            value && this.writer.push(`"${value}"`);
            key && value && this.writer.push(JsonSerializationWriter.propertySeparator);
        };
        this.writeDateValue = (key, value) => {
            key && value && this.writePropertyName(key);
            value && this.writer.push(`"${value.toISOString()}"`);
            key && value && this.writer.push(JsonSerializationWriter.propertySeparator);
        };
        this.writeDateOnlyValue = (key, value) => {
            key && value && this.writePropertyName(key);
            value && this.writer.push(`"${value.toString()}"`);
            key && value && this.writer.push(JsonSerializationWriter.propertySeparator);
        };
        this.writeTimeOnlyValue = (key, value) => {
            key && value && this.writePropertyName(key);
            value && this.writer.push(`"${value.toString()}"`);
            key && value && this.writer.push(JsonSerializationWriter.propertySeparator);
        };
        this.writeDurationValue = (key, value) => {
            key && value && this.writePropertyName(key);
            value && this.writer.push(`"${value.toString()}"`);
            key && value && this.writer.push(JsonSerializationWriter.propertySeparator);
        };
        this.writeNullValue = (key) => {
            key && this.writePropertyName(key);
            this.writer.push(`null`);
            key && this.writer.push(JsonSerializationWriter.propertySeparator);
        };
        this.writeCollectionOfPrimitiveValues = (key, values) => {
            if (values) {
                key && this.writePropertyName(key);
                this.writer.push(`[`);
                values.forEach((v, idx) => {
                    this.writeAnyValue(undefined, v);
                    idx + 1 < values.length &&
                        this.writer.push(JsonSerializationWriter.propertySeparator);
                });
                this.writer.push(`]`);
                key && this.writer.push(JsonSerializationWriter.propertySeparator);
            }
        };
        this.writeCollectionOfObjectValuesFromMethod = (key, values, serializerMethod) => {
            if (values) {
                key && this.writePropertyName(key);
                this.writer.push(`[`);
                values.forEach((v) => {
                    this.writeObjectValueFromMethod(undefined, v, serializerMethod);
                    this.writer.push(JsonSerializationWriter.propertySeparator);
                });
                if (values.length > 0) {
                    //removing the last separator
                    this.writer.pop();
                }
                this.writer.push(`]`);
                key && this.writer.push(JsonSerializationWriter.propertySeparator);
            }
        };
        this.writeCollectionOfObjectValues = (key, values) => {
            if (values) {
                key && this.writePropertyName(key);
                this.writer.push(`[`);
                values.forEach((v) => {
                    this.writeObjectValue(undefined, v);
                    this.writer.push(JsonSerializationWriter.propertySeparator);
                });
                if (values.length > 0) {
                    //removing the last separator
                    this.writer.pop();
                }
                this.writer.push(`]`);
                key && this.writer.push(JsonSerializationWriter.propertySeparator);
            }
        };
        this.writeObjectValue = (key, value) => {
            if (value) {
                if (key) {
                    this.writePropertyName(key);
                }
                this.onBeforeObjectSerialization &&
                    this.onBeforeObjectSerialization(value);
                this.writer.push(`{`);
                this.onStartObjectSerialization &&
                    this.onStartObjectSerialization(value, this);
                value.serialize(this);
                this.onAfterObjectSerialization && this.onAfterObjectSerialization(value);
                if (this.writer.length > 0 &&
                    this.writer[this.writer.length - 1] ===
                        JsonSerializationWriter.propertySeparator) {
                    //removing the last separator
                    this.writer.pop();
                }
                this.writer.push(`}`);
                key && this.writer.push(JsonSerializationWriter.propertySeparator);
            }
        };
        this.writeEnumValue = (key, ...values) => {
            if (values.length > 0) {
                const rawValues = values
                    .filter((x) => x !== undefined)
                    .map((x) => `${x}`);
                if (rawValues.length > 0) {
                    this.writeStringValue(key, rawValues.reduce((x, y) => `${x}, ${y}`));
                }
            }
        };
        this.getSerializedContent = () => {
            console.log("this.writer");
            console.log(this.writer);
            console.log("this.writer");
            return this.convertStringToArrayBuffer(this.writer.join(``));
        };
        this.convertStringToArrayBuffer = (str) => {
            const arrayBuffer = new ArrayBuffer(str.length);
            const uint8Array = new Uint8Array(arrayBuffer);
            for (let i = 0; i < str.length; i++) {
                uint8Array[i] = str.charCodeAt(i);
            }
            return arrayBuffer;
        };
        this.writeAdditionalData = (value) => {
            if (!value)
                return;
            for (const key in value) {
                this.writeAnyValue(key, value[key]);
            }
        };
        this.writeNonParsableObjectValue = (key, value) => {
            if (key) {
                this.writePropertyName(key);
            }
            this.writer.push(JSON.stringify(value), JsonSerializationWriter.propertySeparator);
        };
        this.writeAnyValue = (key, value) => {
            if (value) {
                const valueType = typeof value;
                if (!value) {
                    this.writeNullValue(key);
                }
                else if (valueType === "boolean") {
                    this.writeBooleanValue(key, value);
                }
                else if (valueType === "string") {
                    this.writeStringValue(key, value);
                }
                else if (value instanceof Date) {
                    this.writeDateValue(key, value);
                }
                else if (value instanceof DateOnly) {
                    this.writeDateOnlyValue(key, value);
                }
                else if (value instanceof TimeOnly) {
                    this.writeTimeOnlyValue(key, value);
                }
                else if (value instanceof Duration) {
                    this.writeDurationValue(key, value);
                }
                else if (valueType === "number") {
                    this.writeNumberValue(key, value);
                }
                else if (Array.isArray(value)) {
                    this.writeCollectionOfPrimitiveValues(key, value);
                }
                else if (valueType === "object") {
                    this.writeNonParsableObjectValue(key, value);
                }
                else {
                    throw new Error(`encountered unknown value type during serialization ${valueType}`);
                }
            }
            else {
                if (key)
                    this.writePropertyName(key);
                this.writer.push("null");
            }
        };
    }
    writeObjectValueFromMethod(key, value, serializerMethod) {
        this.onBeforeObjectSerialization &&
            this.onBeforeObjectSerialization(value);
        this.writer.push(`{`);
        this.onStartObjectSerialization &&
            this.onStartObjectSerialization(value, this);
        serializerMethod(this, value);
        this.onAfterObjectSerialization &&
            this.onAfterObjectSerialization(value);
        if (this.writer.length > 0 &&
            this.writer[this.writer.length - 1] ===
                JsonSerializationWriter.propertySeparator) {
            //removing the last separator
            this.writer.pop();
        }
        this.writer.push(`}`);
        key && this.writer.push(JsonSerializationWriter.propertySeparator);
    }
}
JsonSerializationWriter.propertySeparator = `,`;

class JsonParseNodeFactory {
    getValidContentType() {
        return "application/json";
    }
    getRootParseNode(contentType, content) {
        if (!content) {
            throw new Error("content cannot be undefined of empty");
        }
        else if (!contentType) {
            throw new Error("content type cannot be undefined or empty");
        }
        else if (this.getValidContentType() !== contentType) {
            throw new Error(`expected a ${this.getValidContentType()} content type`);
        }
        return new JsonParseNode(this.convertArrayBufferToJson(content));
    }
    convertArrayBufferToJson(content) {
        const decoder = new TextDecoder();
        const contentAsStr = decoder.decode(content);
        return JSON.parse(contentAsStr);
    }
}

class JsonSerializationWriterFactory {
    getValidContentType() {
        return "application/json";
    }
    getSerializationWriter(contentType) {
        if (!contentType) {
            throw new Error("content type cannot be undefined or empty");
        }
        else if (this.getValidContentType() !== contentType) {
            throw new Error(`expected a ${this.getValidContentType()} content type`);
        }
        return new JsonSerializationWriter();
    }
}

/* eslint-disable @typescript-eslint/no-unused-vars */
class TextParseNode {
    /**
     *
     */
    constructor(text) {
        this.text = text;
        this.getStringValue = () => this.text;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this.getChildNode = (identifier) => {
            throw new Error(TextParseNode.noStructuredDataMessage);
        };
        this.getBooleanValue = () => (this.text && this.text.toLowerCase() === "true") || this.text === "1";
        this.getNumberValue = () => Number(this.text);
        this.getGuidValue = () => this.text;
        this.getDateValue = () => new Date(Date.parse(this.text));
        this.getDateOnlyValue = () => DateOnly.parse(this.getStringValue());
        this.getTimeOnlyValue = () => TimeOnly.parse(this.getStringValue());
        this.getDurationValue = () => Duration.parse(this.getStringValue());
        this.getCollectionOfPrimitiveValues = () => {
            throw new Error(TextParseNode.noStructuredDataMessage);
        };
        this.getCollectionOfObjectValues = (
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        type) => {
            throw new Error(TextParseNode.noStructuredDataMessage);
        };
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this.getObjectValue = (type) => {
            throw new Error(TextParseNode.noStructuredDataMessage);
        };
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this.getEnumValues = (type) => {
            throw new Error(TextParseNode.noStructuredDataMessage);
        };
        this.getEnumValue = (type) => {
            return type[toFirstCharacterUpper(this.text)];
        };
        this.text =
            this.text &&
                this.text.length > 1 &&
                this.text.charAt(0) === '"' &&
                this.text.charAt(this.text.length - 1) === '"'
                ? this.text.substring(1, this.text.length - 2)
                : this.text;
    }
    getCollectionOfObjectValuesFromMethod(method) {
        throw new Error(TextParseNode.noStructuredDataMessage);
    }
    getObject(deserializerFunction) {
        throw new Error(TextParseNode.noStructuredDataMessage);
    }
}
TextParseNode.noStructuredDataMessage = "text does not support structured data";

class TextSerializationWriter {
    constructor() {
        this.writer = [];
        this.writeStringValue = (key, value) => {
            if (key || key !== "") {
                throw new Error(TextSerializationWriter.noStructuredDataMessage);
            }
            if (value) {
                if (this.writer.length > 0) {
                    throw new Error("a value was already written for this serialization writer, text content only supports a single value");
                }
                else {
                    this.writer.push(value);
                }
            }
        };
        this.writeBooleanValue = (key, value) => {
            if (value) {
                this.writeStringValue(key, `${value}`);
            }
        };
        this.writeNumberValue = (key, value) => {
            if (value) {
                this.writeStringValue(key, `${value}`);
            }
        };
        this.writeGuidValue = (key, value) => {
            if (value) {
                this.writeStringValue(key, `"${value}"`);
            }
        };
        this.writeDateValue = (key, value) => {
            if (value) {
                this.writeStringValue(key, `"${value.toISOString()}"`);
            }
        };
        this.writeDateOnlyValue = (key, value) => {
            if (value) {
                this.writeStringValue(key, `"${value.toString()}"`);
            }
        };
        this.writeTimeOnlyValue = (key, value) => {
            if (value) {
                this.writeStringValue(key, `"${value.toString()}"`);
            }
        };
        this.writeDurationValue = (key, value) => {
            if (value) {
                this.writeStringValue(key, `"${value.toString()}"`);
            }
        };
        this.writeNullValue = (key) => {
            this.writeStringValue(key, `null`);
        };
        this.writeCollectionOfPrimitiveValues = (
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        key, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        values) => {
            throw new Error(TextSerializationWriter.noStructuredDataMessage);
        };
        this.writeCollectionOfObjectValues = (
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        key, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        values) => {
            throw new Error(TextSerializationWriter.noStructuredDataMessage);
        };
        this.writeObjectValue = (
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        key, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        value) => {
            throw new Error(TextSerializationWriter.noStructuredDataMessage);
        };
        this.writeEnumValue = (key, ...values) => {
            if (values.length > 0) {
                const rawValues = values
                    .filter((x) => x !== undefined)
                    .map((x) => `${x}`);
                if (rawValues.length > 0) {
                    this.writeStringValue(key, rawValues.reduce((x, y) => `${x}, ${y}`));
                }
            }
        };
        this.getSerializedContent = () => {
            return this.convertStringToArrayBuffer(this.writer.join(``));
        };
        this.convertStringToArrayBuffer = (str) => {
            const arrayBuffer = new ArrayBuffer(str.length);
            const uint8Array = new Uint8Array(arrayBuffer);
            for (let i = 0; i < str.length; i++) {
                uint8Array[i] = str.charCodeAt(i);
            }
            return arrayBuffer;
        };
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this.writeAdditionalData = (value) => {
            throw new Error(TextSerializationWriter.noStructuredDataMessage);
        };
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    writeObjectValueFromMethod(key, value, serializerMethod) {
        throw new Error("Method not implemented.");
    }
    writeCollectionOfObjectValuesFromMethod(key, values, serializerMethod) {
        throw new Error("Method not implemented.");
    }
}
TextSerializationWriter.noStructuredDataMessage = "text does not support structured data";

class TextParseNodeFactory {
    getValidContentType() {
        return "text/plain";
    }
    getRootParseNode(contentType, content) {
        if (!content) {
            throw new Error("content cannot be undefined of empty");
        }
        else if (!contentType) {
            throw new Error("content type cannot be undefined or empty");
        }
        else if (this.getValidContentType() !== contentType) {
            throw new Error(`expected a ${this.getValidContentType()} content type`);
        }
        return new TextParseNode(this.convertArrayBufferToText(content));
    }
    convertArrayBufferToText(arrayBuffer) {
        const decoder = new TextDecoder();
        return decoder.decode(arrayBuffer);
    }
}

class TextSerializationWriterFactory {
    getValidContentType() {
        return "text/plain";
    }
    getSerializationWriter(contentType) {
        if (!contentType) {
            throw new Error("content type cannot be undefined or empty");
        }
        else if (this.getValidContentType() !== contentType) {
            throw new Error(`expected a ${this.getValidContentType()} content type`);
        }
        return new TextSerializationWriter();
    }
}

/** The main entry point of the SDK, exposes the configuration and the fluent API. */
class ApiClient {
    /**
     * Instantiates a new ApiClient and sets the default values.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(requestAdapter) {
        if (!requestAdapter)
            throw new Error("requestAdapter cannot be undefined");
        this.pathParameters = {};
        this.urlTemplate = "{+baseurl}";
        this.requestAdapter = requestAdapter;
        registerDefaultSerializer(JsonSerializationWriterFactory);
        registerDefaultSerializer(TextSerializationWriterFactory);
        registerDefaultDeserializer(JsonParseNodeFactory);
        registerDefaultDeserializer(TextParseNodeFactory);
        if (requestAdapter.baseUrl === undefined || requestAdapter.baseUrl === "") {
            requestAdapter.baseUrl = "/v3";
        }
    }
    /** The pet property */
    get pet() {
        return new PetRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The store property */
    get store() {
        return new StoreRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The user property */
    get user() {
        return new UserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    ;
    /**
     * Gets an item from the ApiSdk.pet.item collection
     * @param id Unique identifier of the item
     * @returns a WithPetItemRequestBuilder
     */
    petById(id) {
        if (!id)
            throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["petId"] = id;
        return new WithPetItemRequestBuilder(urlTplParams, this.requestAdapter);
    }
    ;
    /**
     * Gets an item from the ApiSdk.user.item collection
     * @param id Unique identifier of the item
     * @returns a WithUsernameItemRequestBuilder
     */
    userById(id) {
        if (!id)
            throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["username"] = id;
        return new WithUsernameItemRequestBuilder(urlTplParams, this.requestAdapter);
    }
    ;
}

var src = {};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}
var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}

var tslib_es6 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __extends: __extends,
    get __assign () { return __assign; },
    __rest: __rest,
    __decorate: __decorate,
    __param: __param,
    __metadata: __metadata,
    __awaiter: __awaiter,
    __generator: __generator,
    __createBinding: __createBinding,
    __exportStar: __exportStar,
    __values: __values,
    __read: __read,
    __spread: __spread,
    __spreadArrays: __spreadArrays,
    __spreadArray: __spreadArray,
    __await: __await,
    __asyncGenerator: __asyncGenerator,
    __asyncDelegator: __asyncDelegator,
    __asyncValues: __asyncValues,
    __makeTemplateObject: __makeTemplateObject,
    __importStar: __importStar,
    __importDefault: __importDefault,
    __classPrivateFieldGet: __classPrivateFieldGet,
    __classPrivateFieldSet: __classPrivateFieldSet,
    __classPrivateFieldIn: __classPrivateFieldIn
});

var require$$0 = /*@__PURE__*/getAugmentedNamespace(tslib_es6);

var fetchRequestAdapter$1 = {};

var require$$1 = /*@__PURE__*/getAugmentedNamespace(src$1);

var httpClient = {};

var customFetchHandler = {};

var hasRequiredCustomFetchHandler;

function requireCustomFetchHandler () {
	if (hasRequiredCustomFetchHandler) return customFetchHandler;
	hasRequiredCustomFetchHandler = 1;
	/**
	 * -------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
	 * See License in the project root for license information.
	 * -------------------------------------------------------------------------------------------
	 */
	Object.defineProperty(customFetchHandler, "__esModule", { value: true });
	customFetchHandler.CustomFetchHandler = void 0;
	const tslib_1 = require$$0;
	/**
	 * @class
	 * @implements Middleware
	 * Class for FetchHandler
	 */
	class CustomFetchHandler {
	    constructor(customFetch) {
	        this.customFetch = customFetch;
	    }
	    /**
	     * @public
	     * @async
	     * To execute the current middleware
	     * @param {Context} context - The request context object
	     * @returns A promise that resolves to nothing
	     */
	    execute(url, requestInit) {
	        return tslib_1.__awaiter(this, void 0, void 0, function* () {
	            const response = yield this.customFetch(url, requestInit);
	            console.log(response);
	            return response;
	        });
	    }
	}
	customFetchHandler.CustomFetchHandler = CustomFetchHandler;
	return customFetchHandler;
}

var middlewareFactory = {};

var browser = {exports: {}};

var hasRequiredBrowser;

function requireBrowser () {
	if (hasRequiredBrowser) return browser.exports;
	hasRequiredBrowser = 1;
	(function (module, exports) {

		// ref: https://github.com/tc39/proposal-global
		var getGlobal = function () {
			// the only reliable means to get the global object is
			// `Function('return this')()`
			// However, this causes CSP violations in Chrome apps.
			if (typeof self !== 'undefined') { return self; }
			if (typeof window !== 'undefined') { return window; }
			if (typeof global !== 'undefined') { return global; }
			throw new Error('unable to locate global object');
		};

		var global = getGlobal();

		module.exports = exports = global.fetch;

		// Needed for TypeScript and Webpack.
		if (global.fetch) {
			exports.default = global.fetch.bind(global);
		}

		exports.Headers = global.Headers;
		exports.Request = global.Request;
		exports.Response = global.Response;
} (browser, browser.exports));
	return browser.exports;
}

var parametersNameDecodingHandler = {};

var parametersNameDecodingOptions = {};

var hasRequiredParametersNameDecodingOptions;

function requireParametersNameDecodingOptions () {
	if (hasRequiredParametersNameDecodingOptions) return parametersNameDecodingOptions;
	hasRequiredParametersNameDecodingOptions = 1;
	(function (exports) {
		/**
		 * -------------------------------------------------------------------------------------------
		 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
		 * See License in the project root for license information.
		 * -------------------------------------------------------------------------------------------
		 */
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.ParametersNameDecodingHandlerOptions = exports.ParametersNameDecodingHandlerOptionsKey = void 0;
		exports.ParametersNameDecodingHandlerOptionsKey = "RetryHandlerOptionKey";
		/** The ParametersNameDecodingOptions request class */
		class ParametersNameDecodingHandlerOptions {
		    /**
		     * @public
		     * @constructor
		     * To create an instance of ParametersNameDecodingHandlerOptions
		     * @param {boolean} [enable = true] - Whether to decode the specified characters in the request query parameters names
		     * @param {string[]} [charactersToDecode = [".", "-", "~", "$"]] - The characters to decode
		     */
		    constructor(enable = true, charactersToDecode = [".", "-", "~", "$"]) {
		        this.enable = enable;
		        this.charactersToDecode = charactersToDecode;
		    }
		    getKey() {
		        return exports.ParametersNameDecodingHandlerOptionsKey;
		    }
		}
		exports.ParametersNameDecodingHandlerOptions = ParametersNameDecodingHandlerOptions;
} (parametersNameDecodingOptions));
	return parametersNameDecodingOptions;
}

var hasRequiredParametersNameDecodingHandler;

function requireParametersNameDecodingHandler () {
	if (hasRequiredParametersNameDecodingHandler) return parametersNameDecodingHandler;
	hasRequiredParametersNameDecodingHandler = 1;
	/**
	 * -------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
	 * See License in the project root for license information.
	 * -------------------------------------------------------------------------------------------
	 */
	Object.defineProperty(parametersNameDecodingHandler, "__esModule", { value: true });
	parametersNameDecodingHandler.ParametersNameDecodingHandler = void 0;
	const parametersNameDecodingOptions_1 = requireParametersNameDecodingOptions();
	/**
	 * @module ParametersNameDecodingHandler
	 */
	class ParametersNameDecodingHandler {
	    /**
	     * @public
	     * @constructor
	     * To create an instance of ParametersNameDecodingHandler
	     * @param {ParametersNameDecodingHandlerOptions} [options = new ParametersNameDecodingHandlerOptions()] - The parameters name decoding handler options value
	     */
	    constructor(options = new parametersNameDecodingOptions_1.ParametersNameDecodingHandlerOptions()) {
	        this.options = options;
	        if (!options) {
	            throw new Error("The options parameter is required.");
	        }
	    }
	    /**
	     * @public
	     * @async
	     * To execute the current middleware
	     * @param {string} url - The url to be fetched
	     * @param {FetchRequestInit} requestInit - The request init object
	     * @param {Record<string, RequestOption>} [requestOptions] - The request options
	     * @returns A Promise that resolves to nothing
	     */
	    execute(url, requestInit, requestOptions) {
	        var _a, _b;
	        let currentOptions = this.options;
	        if (requestOptions && requestOptions[parametersNameDecodingOptions_1.ParametersNameDecodingHandlerOptionsKey]) {
	            currentOptions = requestOptions[parametersNameDecodingOptions_1.ParametersNameDecodingHandlerOptionsKey];
	        }
	        let updatedUrl = url;
	        if (currentOptions && currentOptions.enable && url.indexOf("%") > -1 && currentOptions.charactersToDecode && currentOptions.charactersToDecode.length > 0) {
	            currentOptions.charactersToDecode.forEach((character) => {
	                updatedUrl = updatedUrl.replace(new RegExp(`%${character.charCodeAt(0).toString(16)}`, "gi"), character);
	            });
	        }
	        return (_b = (_a = this.next) === null || _a === void 0 ? void 0 : _a.execute(updatedUrl, requestInit, requestOptions)) !== null && _b !== void 0 ? _b : Promise.reject(new Error("The next middleware is not set."));
	    }
	}
	parametersNameDecodingHandler.ParametersNameDecodingHandler = ParametersNameDecodingHandler;
	return parametersNameDecodingHandler;
}

var redirectHandler = {};

var redirectHandlerOptions = {};

var hasRequiredRedirectHandlerOptions;

function requireRedirectHandlerOptions () {
	if (hasRequiredRedirectHandlerOptions) return redirectHandlerOptions;
	hasRequiredRedirectHandlerOptions = 1;
	(function (exports) {
		/**
		 * -------------------------------------------------------------------------------------------
		 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
		 * See License in the project root for license information.
		 * -------------------------------------------------------------------------------------------
		 */
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.RedirectHandlerOptions = exports.RedirectHandlerOptionKey = void 0;
		exports.RedirectHandlerOptionKey = "RedirectHandlerOption";
		/**
		 * @class
		 * @implements MiddlewareOptions
		 * A class representing RedirectHandlerOptions
		 */
		class RedirectHandlerOptions {
		    /**
		     * @public
		     * @constructor
		     * To create an instance of RedirectHandlerOptions
		     * @param {number} [maxRedirects = RedirectHandlerOptions.DEFAULT_MAX_REDIRECTS] - The max redirects value
		     * @param {ShouldRedirect} [shouldRedirect = RedirectHandlerOptions.DEFAULT_SHOULD_RETRY] - The should redirect callback
		     * @returns An instance of RedirectHandlerOptions
		     */
		    constructor(maxRedirects = RedirectHandlerOptions.DEFAULT_MAX_REDIRECTS, shouldRedirect = RedirectHandlerOptions.defaultShouldRetry) {
		        this.maxRedirects = maxRedirects;
		        this.shouldRedirect = shouldRedirect;
		        if (maxRedirects > RedirectHandlerOptions.MAX_MAX_REDIRECTS) {
		            const error = new Error(`MaxRedirects should not be more than ${RedirectHandlerOptions.MAX_MAX_REDIRECTS}`);
		            error.name = "MaxLimitExceeded";
		            throw error;
		        }
		        if (maxRedirects < 0) {
		            const error = new Error(`MaxRedirects should not be negative`);
		            error.name = "MinExpectationNotMet";
		            throw error;
		        }
		        this.maxRedirects = maxRedirects;
		        this.shouldRedirect = shouldRedirect;
		    }
		    getKey() {
		        return exports.RedirectHandlerOptionKey;
		    }
		}
		exports.RedirectHandlerOptions = RedirectHandlerOptions;
		/**
		 * @private
		 * @static
		 * A member holding default max redirects value
		 */
		RedirectHandlerOptions.DEFAULT_MAX_REDIRECTS = 5;
		/**
		 * @private
		 * @static
		 * A member holding maximum max redirects value
		 */
		RedirectHandlerOptions.MAX_MAX_REDIRECTS = 20;
		/**
		 * @private
		 * A member holding default shouldRedirect callback
		 */
		RedirectHandlerOptions.defaultShouldRetry = () => true;
} (redirectHandlerOptions));
	return redirectHandlerOptions;
}

var hasRequiredRedirectHandler;

function requireRedirectHandler () {
	if (hasRequiredRedirectHandler) return redirectHandler;
	hasRequiredRedirectHandler = 1;
	/**
	 * -------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
	 * See License in the project root for license information.
	 * -------------------------------------------------------------------------------------------
	 */
	Object.defineProperty(redirectHandler, "__esModule", { value: true });
	redirectHandler.RedirectHandler = void 0;
	const tslib_1 = require$$0;
	/**
	 * @module RedirectHandler
	 */
	const kiota_abstractions_1 = require$$1;
	const redirectHandlerOptions_1 = requireRedirectHandlerOptions();
	/**
	 * @class
	 * Class
	 * @implements Middleware
	 * Class representing RedirectHandler
	 */
	class RedirectHandler {
	    /**
	     *
	     * @public
	     * @constructor
	     * To create an instance of RedirectHandler
	     * @param {RedirectHandlerOptions} [options = new RedirectHandlerOptions()] - The redirect handler options instance
	     * @returns An instance of RedirectHandler
	     */
	    constructor(options = new redirectHandlerOptions_1.RedirectHandlerOptions()) {
	        this.options = options;
	        if (!options) {
	            throw new Error("The options parameter is required.");
	        }
	    }
	    /**
	     * @private
	     * To check whether the response has the redirect status code or not
	     * @param {Response} response - The response object
	     * @returns A boolean representing whether the response contains the redirect status code or not
	     */
	    isRedirect(response) {
	        return RedirectHandler.REDIRECT_STATUS_CODES.has(response.status);
	    }
	    /**
	     * @private
	     * To check whether the response has location header or not
	     * @param {Response} response - The response object
	     * @returns A boolean representing the whether the response has location header or not
	     */
	    hasLocationHeader(response) {
	        return response.headers.has(RedirectHandler.LOCATION_HEADER);
	    }
	    /**
	     * @private
	     * To get the redirect url from location header in response object
	     * @param {Response} response - The response object
	     * @returns A redirect url from location header
	     */
	    getLocationHeader(response) {
	        return response.headers.get(RedirectHandler.LOCATION_HEADER);
	    }
	    /**
	     * @private
	     * To check whether the given url is a relative url or not
	     * @param {string} url - The url string value
	     * @returns A boolean representing whether the given url is a relative url or not
	     */
	    isRelativeURL(url) {
	        return url.indexOf("://") === -1;
	    }
	    /**
	     * @private
	     * To check whether the authorization header in the request should be dropped for consequent redirected requests
	     * @param {string} requestUrl - The request url value
	     * @param {string} redirectUrl - The redirect url value
	     * @returns A boolean representing whether the authorization header in the request should be dropped for consequent redirected requests
	     */
	    shouldDropAuthorizationHeader(requestUrl, redirectUrl) {
	        const schemeHostRegex = /^[A-Za-z].+?:\/\/.+?(?=\/|$)/;
	        const requestMatches = schemeHostRegex.exec(requestUrl);
	        let requestAuthority;
	        let redirectAuthority;
	        if (requestMatches !== null) {
	            requestAuthority = requestMatches[0];
	        }
	        const redirectMatches = schemeHostRegex.exec(redirectUrl);
	        if (redirectMatches !== null) {
	            redirectAuthority = redirectMatches[0];
	        }
	        return typeof requestAuthority !== "undefined" && typeof redirectAuthority !== "undefined" && requestAuthority !== redirectAuthority;
	    }
	    /**
	     * @private
	     * @async
	     * To execute the next middleware and to handle in case of redirect response returned by the server
	     * @param {Context} context - The context object
	     * @param {number} redirectCount - The redirect count value
	     * @param {Record<string, RequestOption>} [requestOptions = {}] - The request options
	     * @param {RedirectHandlerOptions} currentOptions - The redirect handler options instance
	     * @returns A promise that resolves to nothing
	     */
	    executeWithRedirect(url, fetchRequestInit, redirectCount, currentOptions, requestOptions) {
	        var _a;
	        return tslib_1.__awaiter(this, void 0, void 0, function* () {
	            const response = yield ((_a = this.next) === null || _a === void 0 ? void 0 : _a.execute(url, fetchRequestInit, requestOptions));
	            if (!response) {
	                throw new Error("Response is undefined");
	            }
	            if (redirectCount < currentOptions.maxRedirects && this.isRedirect(response) && this.hasLocationHeader(response) && currentOptions.shouldRedirect(response)) {
	                ++redirectCount;
	                if (response.status === RedirectHandler.STATUS_CODE_SEE_OTHER) {
	                    fetchRequestInit["method"] = kiota_abstractions_1.HttpMethod.GET;
	                    delete fetchRequestInit.body;
	                }
	                else {
	                    const redirectUrl = this.getLocationHeader(response);
	                    if (redirectUrl) {
	                        if (fetchRequestInit.headers && !this.isRelativeURL(redirectUrl) && this.shouldDropAuthorizationHeader(url, redirectUrl)) {
	                            delete fetchRequestInit.headers[RedirectHandler.AUTHORIZATION_HEADER];
	                        }
	                        url = redirectUrl;
	                    }
	                }
	                return yield this.executeWithRedirect(url, fetchRequestInit, redirectCount, currentOptions, requestOptions);
	            }
	            else {
	                return response;
	            }
	        });
	    }
	    /**
	     * @public
	     * @async
	     * To execute the current middleware
	     * @param {Context} context - The context object of the request
	     * @returns A Promise that resolves to nothing
	     */
	    execute(url, requestInit, requestOptions) {
	        const redirectCount = 0;
	        let currentOptions = this.options;
	        if (requestOptions && requestOptions[redirectHandlerOptions_1.RedirectHandlerOptionKey]) {
	            currentOptions = requestOptions[redirectHandlerOptions_1.RedirectHandlerOptionKey];
	        }
	        requestInit.redirect = RedirectHandler.MANUAL_REDIRECT;
	        return this.executeWithRedirect(url, requestInit, redirectCount, currentOptions, requestOptions);
	    }
	}
	redirectHandler.RedirectHandler = RedirectHandler;
	/**
	 * @private
	 * @static
	 * A member holding the array of redirect status codes
	 */
	RedirectHandler.REDIRECT_STATUS_CODES = new Set([
	    301,
	    302,
	    303,
	    307,
	    308, // Moved Permanently
	]);
	/**
	 * @private
	 * @static
	 * A member holding SeeOther status code
	 */
	RedirectHandler.STATUS_CODE_SEE_OTHER = 303;
	/**
	 * @private
	 * @static
	 * A member holding the name of the location header
	 */
	RedirectHandler.LOCATION_HEADER = "Location";
	/**
	 * @private
	 * @static
	 * A member representing the authorization header name
	 */
	RedirectHandler.AUTHORIZATION_HEADER = "Authorization";
	/**
	 * @private
	 * @static
	 * A member holding the manual redirect value
	 */
	RedirectHandler.MANUAL_REDIRECT = "manual";
	return redirectHandler;
}

var retryHandler = {};

var headersUtil = {};

var hasRequiredHeadersUtil;

function requireHeadersUtil () {
	if (hasRequiredHeadersUtil) return headersUtil;
	hasRequiredHeadersUtil = 1;
	/**
	 * -------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
	 * See License in the project root for license information.
	 * -------------------------------------------------------------------------------------------
	 */
	Object.defineProperty(headersUtil, "__esModule", { value: true });
	headersUtil.appendRequestHeader = headersUtil.setRequestHeader = headersUtil.getRequestHeader = void 0;
	/**
	 * @module MiddlewareUtil
	 */
	/**
	 * @constant
	 * To get the request header from the request
	 * @param {RequestInfo} request - The request object or the url string
	 * @param {FetchOptions|undefined} options - The request options object
	 * @param {string} key - The header key string
	 * @returns A header value for the given key from the request
	 */
	const getRequestHeader = (options, key) => {
	    if (options && options.headers) {
	        return options.headers[key];
	    }
	    return undefined;
	};
	headersUtil.getRequestHeader = getRequestHeader;
	/**
	 * @constant
	 * To set the header value to the given request
	 * @param {RequestInfo} request - The request object or the url string
	 * @param {FetchOptions|undefined} options - The request options object
	 * @param {string} key - The header key string
	 * @param {string } value - The header value string
	 * @returns Nothing
	 */
	const setRequestHeader = (options, key, value) => {
	    if (options) {
	        if (!options.headers) {
	            options.headers = {};
	        }
	        options.headers[key] = value;
	    }
	};
	headersUtil.setRequestHeader = setRequestHeader;
	/**
	 * @constant
	 * To append the header value to the given request
	 * @param {RequestInfo} request - The request object or the url string
	 * @param {FetchOptions|undefined} options - The request options object
	 * @param {string} key - The header key string
	 * @param {string } value - The header value string
	 * @returns Nothing
	 */
	const appendRequestHeader = (options, key, value) => {
	    if (options) {
	        if (!options.headers) {
	            options.headers = {};
	        }
	        if (!options.headers[key]) {
	            options.headers[key] = value;
	        }
	        else {
	            options.headers[key] += `, ${value}`;
	        }
	    }
	};
	headersUtil.appendRequestHeader = appendRequestHeader;
	return headersUtil;
}

var retryHandlerOptions = {};

var hasRequiredRetryHandlerOptions;

function requireRetryHandlerOptions () {
	if (hasRequiredRetryHandlerOptions) return retryHandlerOptions;
	hasRequiredRetryHandlerOptions = 1;
	(function (exports) {
		/**
		 * -------------------------------------------------------------------------------------------
		 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
		 * See License in the project root for license information.
		 * -------------------------------------------------------------------------------------------
		 */
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.RetryHandlerOptions = exports.RetryHandlerOptionKey = void 0;
		exports.RetryHandlerOptionKey = "RetryHandlerOptionKey";
		/**
		 * @class
		 * @implements Middleware
		 * Options
		 * Class for RetryHandlerOptions
		 */
		class RetryHandlerOptions {
		    /**
		     * @public
		     * @constructor
		     * To create an instance of RetryHandlerOptions
		     * @param {number} [delay = RetryHandlerOptions.DEFAULT_DELAY] - The delay value in seconds
		     * @param {number} [maxRetries = RetryHandlerOptions.DEFAULT_MAX_RETRIES] - The maxRetries value
		     * @param {ShouldRetry} [shouldRetry = RetryHandlerOptions.DEFAULT_SHOULD_RETRY] - The shouldRetry callback function
		     * @returns An instance of RetryHandlerOptions
		     */
		    constructor(delay = RetryHandlerOptions.DEFAULT_DELAY, maxRetries = RetryHandlerOptions.DEFAULT_MAX_RETRIES, shouldRetry = RetryHandlerOptions.defaultShouldRetry) {
		        this.delay = delay;
		        this.maxRetries = maxRetries;
		        this.shouldRetry = shouldRetry;
		        if (delay > RetryHandlerOptions.MAX_DELAY && maxRetries > RetryHandlerOptions.MAX_MAX_RETRIES) {
		            const error = new Error(`Delay and MaxRetries should not be more than ${RetryHandlerOptions.MAX_DELAY} and ${RetryHandlerOptions.MAX_MAX_RETRIES}`);
		            error.name = "MaxLimitExceeded";
		            throw error;
		        }
		        else if (delay > RetryHandlerOptions.MAX_DELAY) {
		            const error = new Error(`Delay should not be more than ${RetryHandlerOptions.MAX_DELAY}`);
		            error.name = "MaxLimitExceeded";
		            throw error;
		        }
		        else if (maxRetries > RetryHandlerOptions.MAX_MAX_RETRIES) {
		            const error = new Error(`MaxRetries should not be more than ${RetryHandlerOptions.MAX_MAX_RETRIES}`);
		            error.name = "MaxLimitExceeded";
		            throw error;
		        }
		        else if (delay < 0 && maxRetries < 0) {
		            const error = new Error(`Delay and MaxRetries should not be negative`);
		            error.name = "MinExpectationNotMet";
		            throw error;
		        }
		        else if (delay < 0) {
		            const error = new Error(`Delay should not be negative`);
		            error.name = "MinExpectationNotMet";
		            throw error;
		        }
		        else if (maxRetries < 0) {
		            const error = new Error(`MaxRetries should not be negative`);
		            error.name = "MinExpectationNotMet";
		            throw error;
		        }
		        this.delay = Math.min(delay, RetryHandlerOptions.MAX_DELAY);
		        this.maxRetries = Math.min(maxRetries, RetryHandlerOptions.MAX_MAX_RETRIES);
		        this.shouldRetry = shouldRetry;
		    }
		    /**
		     * @public
		     * To get the maximum delay
		     * @returns A maximum delay
		     */
		    getMaxDelay() {
		        return RetryHandlerOptions.MAX_DELAY;
		    }
		    getKey() {
		        return exports.RetryHandlerOptionKey;
		    }
		}
		exports.RetryHandlerOptions = RetryHandlerOptions;
		/**
		 * @private
		 * @static
		 * A member holding default delay value in seconds
		 */
		RetryHandlerOptions.DEFAULT_DELAY = 3;
		/**
		 * @private
		 * @static
		 * A member holding default maxRetries value
		 */
		RetryHandlerOptions.DEFAULT_MAX_RETRIES = 3;
		/**
		 * @private
		 * @static
		 * A member holding maximum delay value in seconds
		 */
		RetryHandlerOptions.MAX_DELAY = 180;
		/**
		 * @private
		 * @static
		 * A member holding maximum maxRetries value
		 */
		RetryHandlerOptions.MAX_MAX_RETRIES = 10;
		/**
		 * @private
		 * A member holding default shouldRetry callback
		 */
		RetryHandlerOptions.defaultShouldRetry = () => true;
} (retryHandlerOptions));
	return retryHandlerOptions;
}

var hasRequiredRetryHandler;

function requireRetryHandler () {
	if (hasRequiredRetryHandler) return retryHandler;
	hasRequiredRetryHandler = 1;
	/**
	 * -------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
	 * See License in the project root for license information.
	 * -------------------------------------------------------------------------------------------
	 */
	Object.defineProperty(retryHandler, "__esModule", { value: true });
	retryHandler.RetryHandler = void 0;
	const tslib_1 = require$$0;
	/**
	 * @module RetryHandler
	 */
	const kiota_abstractions_1 = require$$1;
	const headersUtil_1 = requireHeadersUtil();
	const retryHandlerOptions_1 = requireRetryHandlerOptions();
	/**
	 * @class
	 * @implements Middleware
	 * Class for RetryHandler
	 */
	class RetryHandler {
	    /**
	     * @public
	     * @constructor
	     * To create an instance of RetryHandler
	     * @param {RetryHandlerOptions} [options = new RetryHandlerOptions()] - The retry handler options value
	     * @returns An instance of RetryHandler
	     */
	    constructor(options = new retryHandlerOptions_1.RetryHandlerOptions()) {
	        this.options = options;
	        if (!options) {
	            throw new Error("The options parameter is required.");
	        }
	    }
	    /**
	     *
	     * @private
	     * To check whether the response has the retry status code
	     * @param {Response} response - The response object
	     * @returns Whether the response has retry status code or not
	     */
	    isRetry(response) {
	        return RetryHandler.RETRY_STATUS_CODES.has(response.status);
	    }
	    /**
	     * @private
	     * To check whether the payload is buffered or not
	     * @param {RequestInit} options - The options of a request
	     * @returns Whether the payload is buffered or not
	     */
	    isBuffered(options) {
	        var _a;
	        const method = options.method;
	        const isPutPatchOrPost = method === kiota_abstractions_1.HttpMethod.PUT || method === kiota_abstractions_1.HttpMethod.PATCH || method === kiota_abstractions_1.HttpMethod.POST;
	        if (isPutPatchOrPost) {
	            const isStream = ((_a = (0, headersUtil_1.getRequestHeader)(options, "content-type")) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === "application/octet-stream";
	            if (isStream) {
	                return false;
	            }
	        }
	        return true;
	    }
	    /**
	     * @private
	     * To get the delay for a retry
	     * @param {Response} response - The response object
	     * @param {number} retryAttempts - The current attempt count
	     * @param {number} delay - The delay value in seconds
	     * @returns A delay for a retry
	     */
	    getDelay(response, retryAttempts, delay) {
	        const getRandomness = () => Number(Math.random().toFixed(3));
	        const retryAfter = response.headers !== undefined ? response.headers.get(RetryHandler.RETRY_AFTER_HEADER) : null;
	        let newDelay;
	        if (retryAfter !== null) {
	            // Retry-After: <http-date>
	            if (Number.isNaN(Number(retryAfter))) {
	                newDelay = Math.round((new Date(retryAfter).getTime() - Date.now()) / 1000);
	            }
	            else {
	                // Retry-After: <delay-seconds>
	                newDelay = Number(retryAfter);
	            }
	        }
	        else {
	            // Adding randomness to avoid retrying at a same
	            newDelay = retryAttempts >= 2 ? this.getExponentialBackOffTime(retryAttempts) + delay + getRandomness() : delay + getRandomness();
	        }
	        return Math.min(newDelay, this.options.getMaxDelay() + getRandomness());
	    }
	    /**
	     * @private
	     * To get an exponential back off value
	     * @param {number} attempts - The current attempt count
	     * @returns An exponential back off value
	     */
	    getExponentialBackOffTime(attempts) {
	        return Math.round((1 / 2) * (Math.pow(2, attempts) - 1));
	    }
	    /**
	     * @private
	     * @async
	     * To add delay for the execution
	     * @param {number} delaySeconds - The delay value in seconds
	     * @returns Nothing
	     */
	    sleep(delaySeconds) {
	        return tslib_1.__awaiter(this, void 0, void 0, function* () {
	            const delayMilliseconds = delaySeconds * 1000;
	            return new Promise((resolve) => setTimeout(resolve, delayMilliseconds)); // browser or node
	        });
	    }
	    /**
	     * @private
	     * @async
	     * To execute the middleware with retries
	     * @param {Context} context - The context object
	     * @param {number} retryAttempts - The current attempt count
	     * @param {Record<string, RequestOption>} [requestOptions = {}] - The request options
	     * @param {RetryHandlerOptions} currentOptions - The retry middleware options instance
	     * @returns A Promise that resolves to nothing
	     */
	    executeWithRetry(url, fetchRequestInit, retryAttempts, currentOptions, requestOptions) {
	        var _a;
	        return tslib_1.__awaiter(this, void 0, void 0, function* () {
	            const response = yield ((_a = this.next) === null || _a === void 0 ? void 0 : _a.execute(url, fetchRequestInit, requestOptions));
	            if (!response) {
	                throw new Error("Response is undefined");
	            }
	            if (retryAttempts < currentOptions.maxRetries && this.isRetry(response) && this.isBuffered(fetchRequestInit) && currentOptions.shouldRetry(currentOptions.delay, retryAttempts, url, fetchRequestInit, response)) {
	                ++retryAttempts;
	                (0, headersUtil_1.setRequestHeader)(fetchRequestInit, RetryHandler.RETRY_ATTEMPT_HEADER, retryAttempts.toString());
	                if (response) {
	                    const delay = this.getDelay(response, retryAttempts, currentOptions.delay);
	                    yield this.sleep(delay);
	                }
	                return yield this.executeWithRetry(url, fetchRequestInit, retryAttempts, currentOptions, requestOptions);
	            }
	            else {
	                return response;
	            }
	        });
	    }
	    /**
	     * @public
	     * @async
	     * To execute the current middleware
	     * @param {Context} context - The context object of the request
	     * @returns A Promise that resolves to nothing
	     */
	    execute(url, requestInit, requestOptions) {
	        const retryAttempts = 0;
	        let currentOptions = this.options;
	        if (requestOptions && requestOptions[retryHandlerOptions_1.RetryHandlerOptionKey]) {
	            currentOptions = requestOptions[retryHandlerOptions_1.RetryHandlerOptionKey];
	        }
	        return this.executeWithRetry(url, requestInit, retryAttempts, currentOptions, requestOptions);
	    }
	}
	retryHandler.RetryHandler = RetryHandler;
	/**
	 * @private
	 * @static
	 * A list of status codes that needs to be retried
	 */
	RetryHandler.RETRY_STATUS_CODES = new Set([
	    429,
	    503,
	    504, // Gateway timeout
	]);
	/**
	 * @private
	 * @static
	 * A member holding the name of retry attempt header
	 */
	RetryHandler.RETRY_ATTEMPT_HEADER = "Retry-Attempt";
	/**
	 * @private
	 * @static
	 * A member holding the name of retry after header
	 */
	RetryHandler.RETRY_AFTER_HEADER = "Retry-After";
	return retryHandler;
}

var hasRequiredMiddlewareFactory;

function requireMiddlewareFactory () {
	if (hasRequiredMiddlewareFactory) return middlewareFactory;
	hasRequiredMiddlewareFactory = 1;
	/**
	 * -------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
	 * See License in the project root for license information.
	 * -------------------------------------------------------------------------------------------
	 */
	Object.defineProperty(middlewareFactory, "__esModule", { value: true });
	middlewareFactory.MiddlewareFactory = void 0;
	/**
	 * @module MiddlewareFactory
	 */
	const node_fetch_1 = requireBrowser();
	const customFetchHandler_1 = requireCustomFetchHandler();
	const parametersNameDecodingHandler_1 = requireParametersNameDecodingHandler();
	const redirectHandler_1 = requireRedirectHandler();
	const retryHandler_1 = requireRetryHandler();
	/**
	 * @class
	 * Class containing function(s) related to the middleware pipelines.
	 */
	class MiddlewareFactory {
	    /**
	     * @public
	     * @static
	     * Returns the default middleware chain an array with the  middleware handlers
	     * @param {AuthenticationProvider} authProvider - The authentication provider instance
	     * @returns an array of the middleware handlers of the default middleware chain
	     */
	    static getDefaultMiddlewareChain(customFetch = node_fetch_1.default) {
	        const middlewareArray = [new retryHandler_1.RetryHandler(), new redirectHandler_1.RedirectHandler(), new parametersNameDecodingHandler_1.ParametersNameDecodingHandler(), new customFetchHandler_1.CustomFetchHandler(customFetch)];
	        return middlewareArray;
	    }
	}
	middlewareFactory.MiddlewareFactory = MiddlewareFactory;
	return middlewareFactory;
}

var hasRequiredHttpClient;

function requireHttpClient () {
	if (hasRequiredHttpClient) return httpClient;
	hasRequiredHttpClient = 1;
	/**
	 * -------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
	 * See License in the project root for license information.
	 * -------------------------------------------------------------------------------------------
	 */
	Object.defineProperty(httpClient, "__esModule", { value: true });
	httpClient.HttpClient = void 0;
	const tslib_1 = require$$0;
	const customFetchHandler_1 = requireCustomFetchHandler();
	const middlewareFactory_1 = requireMiddlewareFactory();
	class HttpClient {
	    /**
	     * @public
	     * @constructor
	     * Creates an instance of a HttpClient which contains the middlewares and fetch implementation for request execution.
	     * @param {...Middleware} middleware - The first middleware of the middleware chain or a sequence of all the Middleware handlers
	     * If middlewares param is undefined, the httpClient instance will use the default array of middlewares.
	     * Set middlewares to `null` if you do not wish to use middlewares.
	     * If custom fetch is undefined, the httpClient instance uses the `DefaultFetchHandler`
	     * @param {(request: string, init?: RequestInit) => Promise < Response >} custom fetch function - a Fetch API implementation
	     *
	     */
	    constructor(customFetch, ...middlewares) {
	        this.customFetch = customFetch;
	        // Use default middleware chain if middlewares and custom fetch function are  undefined
	        if (!middlewares.length || !middlewares[0]) {
	            this.setMiddleware(...middlewareFactory_1.MiddlewareFactory.getDefaultMiddlewareChain(customFetch));
	        }
	        else {
	            if (this.customFetch) {
	                this.setMiddleware(...middlewares, new customFetchHandler_1.CustomFetchHandler(customFetch));
	            }
	            else {
	                this.setMiddleware(...middlewares);
	            }
	        }
	    }
	    /**
	     * @private
	     * Processes the middleware parameter passed to set this.middleware property
	     * The calling function should validate if middleware is not undefined or not empty.
	     * @param {...Middleware} middleware - The middleware passed
	     * @returns Nothing
	     */
	    setMiddleware(...middleware) {
	        middleware.forEach((element, index) => {
	            if (index < middleware.length - 1) {
	                element.next = middleware[index + 1];
	            }
	        });
	        this.middleware = middleware[0];
	    }
	    /**
	     * Executes a request and returns a promise resolving the response.
	     * @param url the request url.
	     * @param options request options.
	     * @returns the promise resolving the response.
	     */
	    executeFetch(url, requestInit, requestOptions) {
	        return tslib_1.__awaiter(this, void 0, void 0, function* () {
	            if (this.customFetch && !this.middleware) {
	                return this.customFetch(url, requestInit);
	            }
	            if (this.middleware) {
	                return yield this.middleware.execute(url, requestInit, requestOptions);
	            }
	            else {
	                throw new Error("Please provide middlewares or a custom fetch function to execute the request");
	            }
	        });
	    }
	}
	httpClient.HttpClient = HttpClient;
	return httpClient;
}

var hasRequiredFetchRequestAdapter;

function requireFetchRequestAdapter () {
	if (hasRequiredFetchRequestAdapter) return fetchRequestAdapter$1;
	hasRequiredFetchRequestAdapter = 1;
	Object.defineProperty(fetchRequestAdapter$1, "__esModule", { value: true });
	fetchRequestAdapter$1.FetchRequestAdapter = void 0;
	const tslib_1 = require$$0;
	const kiota_abstractions_1 = require$$1;
	const httpClient_1 = requireHttpClient();
	class FetchRequestAdapter {
	    /**
	     * Instantiates a new http core service
	     * @param authenticationProvider the authentication provider to use.
	     * @param parseNodeFactory the parse node factory to deserialize responses.
	     * @param serializationWriterFactory the serialization writer factory to use to serialize request bodies.
	     * @param httpClient the http client to use to execute requests.
	     */
	    constructor(authenticationProvider, parseNodeFactory = kiota_abstractions_1.ParseNodeFactoryRegistry.defaultInstance, serializationWriterFactory = kiota_abstractions_1.SerializationWriterFactoryRegistry.defaultInstance, httpClient = new httpClient_1.HttpClient()) {
	        this.authenticationProvider = authenticationProvider;
	        this.parseNodeFactory = parseNodeFactory;
	        this.serializationWriterFactory = serializationWriterFactory;
	        this.httpClient = httpClient;
	        /** The base url for every request. */
	        this.baseUrl = "";
	        this.getResponseContentType = (response) => {
	            var _a;
	            const header = (_a = response.headers.get("content-type")) === null || _a === void 0 ? void 0 : _a.toLowerCase();
	            if (!header)
	                return undefined;
	            const segments = header.split(";");
	            if (segments.length === 0)
	                return undefined;
	            else
	                return segments[0];
	        };
	        this.sendCollectionOfPrimitiveAsync = (requestInfo, responseType, responseHandler, errorMappings) => tslib_1.__awaiter(this, void 0, void 0, function* () {
	            if (!requestInfo) {
	                throw new Error("requestInfo cannot be null");
	            }
	            const response = yield this.getHttpResponseMessage(requestInfo);
	            if (responseHandler) {
	                return yield responseHandler.handleResponseAsync(response, errorMappings);
	            }
	            else {
	                try {
	                    yield this.throwFailedResponses(response, errorMappings);
	                    if (this.shouldReturnUndefined(response))
	                        return undefined;
	                    switch (responseType) {
	                        case "string":
	                        case "number":
	                        case "boolean":
	                        case "Date":
	                            // eslint-disable-next-line no-case-declarations
	                            const rootNode = yield this.getRootParseNode(response);
	                            if (responseType === "string") {
	                                return rootNode.getCollectionOfPrimitiveValues();
	                            }
	                            else if (responseType === "number") {
	                                return rootNode.getCollectionOfPrimitiveValues();
	                            }
	                            else if (responseType === "boolean") {
	                                return rootNode.getCollectionOfPrimitiveValues();
	                            }
	                            else if (responseType === "Date") {
	                                return rootNode.getCollectionOfPrimitiveValues();
	                            }
	                            else if (responseType === "Duration") {
	                                return rootNode.getCollectionOfPrimitiveValues();
	                            }
	                            else if (responseType === "DateOnly") {
	                                return rootNode.getCollectionOfPrimitiveValues();
	                            }
	                            else if (responseType === "TimeOnly") {
	                                return rootNode.getCollectionOfPrimitiveValues();
	                            }
	                            else {
	                                throw new Error("unexpected type to deserialize");
	                            }
	                    }
	                }
	                finally {
	                    yield this.purgeResponseBody(response);
	                }
	            }
	        });
	        this.sendCollectionAsync = (requestInfo, deserialization, responseHandler, errorMappings) => tslib_1.__awaiter(this, void 0, void 0, function* () {
	            if (!requestInfo) {
	                throw new Error("requestInfo cannot be null");
	            }
	            const response = yield this.getHttpResponseMessage(requestInfo);
	            if (responseHandler) {
	                return yield responseHandler.handleResponseAsync(response, errorMappings);
	            }
	            else {
	                try {
	                    yield this.throwFailedResponses(response, errorMappings);
	                    if (this.shouldReturnUndefined(response))
	                        return undefined;
	                    const rootNode = yield this.getRootParseNode(response);
	                    const result = rootNode.getCollectionOfObjectValuesFromMethod(deserialization);
	                    return result;
	                }
	                finally {
	                    yield this.purgeResponseBody(response);
	                }
	            }
	        });
	        this.sendAsync = (requestInfo, deserializer, responseHandler, errorMappings) => tslib_1.__awaiter(this, void 0, void 0, function* () {
	            if (!requestInfo) {
	                throw new Error("requestInfo cannot be null");
	            }
	            const response = yield this.getHttpResponseMessage(requestInfo);
	            if (responseHandler) {
	                return yield responseHandler.handleResponseAsync(response, errorMappings);
	            }
	            else {
	                try {
	                    yield this.throwFailedResponses(response, errorMappings);
	                    if (this.shouldReturnUndefined(response))
	                        return undefined;
	                    const rootNode = yield this.getRootParseNode(response);
	                    const result = rootNode.getObject(deserializer);
	                    return result;
	                }
	                finally {
	                    yield this.purgeResponseBody(response);
	                }
	            }
	        });
	        this.sendPrimitiveAsync = (requestInfo, responseType, responseHandler, errorMappings) => tslib_1.__awaiter(this, void 0, void 0, function* () {
	            if (!requestInfo) {
	                throw new Error("requestInfo cannot be null");
	            }
	            const response = yield this.getHttpResponseMessage(requestInfo);
	            if (responseHandler) {
	                return yield responseHandler.handleResponseAsync(response, errorMappings);
	            }
	            else {
	                try {
	                    yield this.throwFailedResponses(response, errorMappings);
	                    if (this.shouldReturnUndefined(response))
	                        return undefined;
	                    switch (responseType) {
	                        case "ArrayBuffer":
	                            // eslint-disable-next-line no-case-declarations
	                            if (!response.body) {
	                                return undefined;
	                            }
	                            return (yield response.arrayBuffer());
	                        case "string":
	                        case "number":
	                        case "boolean":
	                        case "Date":
	                            // eslint-disable-next-line no-case-declarations
	                            const rootNode = yield this.getRootParseNode(response);
	                            if (responseType === "string") {
	                                return rootNode.getStringValue();
	                            }
	                            else if (responseType === "number") {
	                                return rootNode.getNumberValue();
	                            }
	                            else if (responseType === "boolean") {
	                                return rootNode.getBooleanValue();
	                            }
	                            else if (responseType === "Date") {
	                                return rootNode.getDateValue();
	                            }
	                            else if (responseType === "Duration") {
	                                return rootNode.getDurationValue();
	                            }
	                            else if (responseType === "DateOnly") {
	                                return rootNode.getDateOnlyValue();
	                            }
	                            else if (responseType === "TimeOnly") {
	                                return rootNode.getTimeOnlyValue();
	                            }
	                            else {
	                                throw new Error("unexpected type to deserialize");
	                            }
	                    }
	                }
	                finally {
	                    yield this.purgeResponseBody(response);
	                }
	            }
	        });
	        this.sendNoResponseContentAsync = (requestInfo, responseHandler, errorMappings) => tslib_1.__awaiter(this, void 0, void 0, function* () {
	            if (!requestInfo) {
	                throw new Error("requestInfo cannot be null");
	            }
	            const response = yield this.getHttpResponseMessage(requestInfo);
	            if (responseHandler) {
	                return yield responseHandler.handleResponseAsync(response, errorMappings);
	            }
	            try {
	                yield this.throwFailedResponses(response, errorMappings);
	            }
	            finally {
	                yield this.purgeResponseBody(response);
	            }
	        });
	        this.enableBackingStore = (backingStoreFactory) => {
	            this.parseNodeFactory = (0, kiota_abstractions_1.enableBackingStoreForParseNodeFactory)(this.parseNodeFactory);
	            this.serializationWriterFactory = (0, kiota_abstractions_1.enableBackingStoreForSerializationWriterFactory)(this.serializationWriterFactory);
	            if (!this.serializationWriterFactory || !this.parseNodeFactory)
	                throw new Error("unable to enable backing store");
	            if (backingStoreFactory) {
	                kiota_abstractions_1.BackingStoreFactorySingleton.instance = backingStoreFactory;
	            }
	        };
	        this.getRootParseNode = (response) => tslib_1.__awaiter(this, void 0, void 0, function* () {
	            const payload = yield response.arrayBuffer();
	            const responseContentType = this.getResponseContentType(response);
	            if (!responseContentType)
	                throw new Error("no response content type found for deserialization");
	            return this.parseNodeFactory.getRootParseNode(responseContentType, payload);
	        });
	        this.shouldReturnUndefined = (response) => {
	            return response.status === 204 || !response.body;
	        };
	        /** purges the response body if it hasn't been read to release the connection to the server */
	        this.purgeResponseBody = (response) => tslib_1.__awaiter(this, void 0, void 0, function* () {
	            if (!response.bodyUsed && response.body) {
	                yield response.arrayBuffer();
	            }
	        });
	        this.throwFailedResponses = (response, errorMappings) => tslib_1.__awaiter(this, void 0, void 0, function* () {
	            var _a, _b;
	            if (response.ok)
	                return;
	            const statusCode = response.status;
	            const statusCodeAsString = statusCode.toString();
	            if (!errorMappings || (!errorMappings[statusCodeAsString] && !(statusCode >= 400 && statusCode < 500 && errorMappings["4XX"]) && !(statusCode >= 500 && statusCode < 600 && errorMappings["5XX"])))
	                throw new kiota_abstractions_1.ApiError("the server returned an unexpected status code and no error class is registered for this code " + statusCode);
	            const factory = (_b = (_a = errorMappings[statusCodeAsString]) !== null && _a !== void 0 ? _a : (statusCode >= 400 && statusCode < 500 ? errorMappings["4XX"] : undefined)) !== null && _b !== void 0 ? _b : (statusCode >= 500 && statusCode < 600 ? errorMappings["5XX"] : undefined);
	            const rootNode = yield this.getRootParseNode(response);
	            const error = rootNode.getObjectValue(factory);
	            if (error)
	                throw error;
	            else
	                throw new kiota_abstractions_1.ApiError("unexpected error type" + typeof error);
	        });
	        this.getHttpResponseMessage = (requestInfo, claims) => tslib_1.__awaiter(this, void 0, void 0, function* () {
	            if (!requestInfo) {
	                throw new Error("requestInfo cannot be null");
	            }
	            this.setBaseUrlForRequestInformation(requestInfo);
	            const additionalContext = {};
	            if (claims) {
	                additionalContext["claims"] = claims;
	            }
	            yield this.authenticationProvider.authenticateRequest(requestInfo, additionalContext);
	            const request = this.getRequestFromRequestInformation(requestInfo);
	            const response = yield this.httpClient.executeFetch(requestInfo.URL, request, requestInfo.getRequestOptions());
	            return yield this.retryCAEResponseIfRequired(requestInfo, response, claims);
	        });
	        this.retryCAEResponseIfRequired = (requestInfo, response, claims) => tslib_1.__awaiter(this, void 0, void 0, function* () {
	            const responseClaims = this.getClaimsFromResponse(response, claims);
	            if (responseClaims) {
	                yield this.purgeResponseBody(response);
	                return yield this.getHttpResponseMessage(requestInfo, responseClaims);
	            }
	            return response;
	        });
	        this.getClaimsFromResponse = (response, claims) => {
	            if (response.status === 401 && !claims) {
	                // avoid infinite loop, we only retry once
	                // no need to check for the content since it's an array and it doesn't need to be rewound
	                const rawAuthenticateHeader = response.headers.get("WWW-Authenticate");
	                if (rawAuthenticateHeader && /^Bearer /gi.test(rawAuthenticateHeader)) {
	                    const rawParameters = rawAuthenticateHeader.replace(/^Bearer /gi, "").split(",");
	                    for (const rawParameter of rawParameters) {
	                        const trimmedParameter = rawParameter.trim();
	                        if (/claims="[^"]+"/gi.test(trimmedParameter)) {
	                            return trimmedParameter.replace(/claims="([^"]+)"/gi, "$1");
	                        }
	                    }
	                }
	            }
	            return undefined;
	        };
	        this.setBaseUrlForRequestInformation = (requestInfo) => {
	            requestInfo.pathParameters["baseurl"] = this.baseUrl;
	        };
	        this.getRequestFromRequestInformation = (requestInfo) => {
	            var _a;
	            const request = {
	                method: (_a = requestInfo.httpMethod) === null || _a === void 0 ? void 0 : _a.toString(),
	                headers: requestInfo.headers,
	                body: requestInfo.content,
	            };
	            return request;
	        };
	        if (!authenticationProvider) {
	            throw new Error("authentication provider cannot be null");
	        }
	        if (!parseNodeFactory) {
	            throw new Error("parse node factory cannot be null");
	        }
	        if (!serializationWriterFactory) {
	            throw new Error("serialization writer factory cannot be null");
	        }
	        if (!httpClient) {
	            throw new Error("http client cannot be null");
	        }
	    }
	    getSerializationWriterFactory() {
	        return this.serializationWriterFactory;
	    }
	}
	fetchRequestAdapter$1.FetchRequestAdapter = FetchRequestAdapter;
	return fetchRequestAdapter$1;
}

var middleware = {};

var hasRequiredMiddleware;

function requireMiddleware () {
	if (hasRequiredMiddleware) return middleware;
	hasRequiredMiddleware = 1;
	Object.defineProperty(middleware, "__esModule", { value: true });
	return middleware;
}

var chaosHandler = {};

var ChaosHandlerData = {};

var hasRequiredChaosHandlerData;

function requireChaosHandlerData () {
	if (hasRequiredChaosHandlerData) return ChaosHandlerData;
	hasRequiredChaosHandlerData = 1;
	/**
	 * -------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
	 * See License in the project root for license information.
	 * -------------------------------------------------------------------------------------------
	 */
	Object.defineProperty(ChaosHandlerData, "__esModule", { value: true });
	ChaosHandlerData.httpStatusCode = ChaosHandlerData.methodStatusCode = void 0;
	/**
	 * Contains RequestMethod to corresponding array of possible status codes, used for Random mode
	 */
	ChaosHandlerData.methodStatusCode = {
	    GET: [429, 500, 502, 503, 504],
	    POST: [429, 500, 502, 503, 504, 507],
	    PUT: [429, 500, 502, 503, 504, 507],
	    PATCH: [429, 500, 502, 503, 504],
	    DELETE: [429, 500, 502, 503, 504, 507],
	};
	/**
	 * Contains statusCode to statusMessage map
	 */
	ChaosHandlerData.httpStatusCode = {
	    100: "Continue",
	    101: "Switching Protocols",
	    102: "Processing",
	    103: "Early Hints",
	    200: "OK",
	    201: "Created",
	    202: "Accepted",
	    203: "Non-Authoritative Information",
	    204: "No Content",
	    205: "Reset Content",
	    206: "Partial Content",
	    207: "Multi-Status",
	    208: "Already Reported",
	    226: "IM Used",
	    300: "Multiple Choices",
	    301: "Moved Permanently",
	    302: "Found",
	    303: "See Other",
	    304: "Not Modified",
	    305: "Use Proxy",
	    307: "Temporary Redirect",
	    308: "Permanent Redirect",
	    400: "Bad Request",
	    401: "Unauthorized",
	    402: "Payment Required",
	    403: "Forbidden",
	    404: "Not Found",
	    405: "Method Not Allowed",
	    406: "Not Acceptable",
	    407: "Proxy Authentication Required",
	    408: "Request Timeout",
	    409: "Conflict",
	    410: "Gone",
	    411: "Length Required",
	    412: "Precondition Failed",
	    413: "Payload Too Large",
	    414: "URI Too Long",
	    415: "Unsupported Media Type",
	    416: "Range Not Satisfiable",
	    417: "Expectation Failed",
	    421: "Misdirected Request",
	    422: "Unprocessable Entity",
	    423: "Locked",
	    424: "Failed Dependency",
	    425: "Too Early",
	    426: "Upgrade Required",
	    428: "Precondition Required",
	    429: "Too Many Requests",
	    431: "Request Header Fields Too Large",
	    451: "Unavailable For Legal Reasons",
	    500: "Internal Server Error",
	    501: "Not Implemented",
	    502: "Bad Gateway",
	    503: "Service Unavailable",
	    504: "Gateway Timeout",
	    505: "HTTP Version Not Supported",
	    506: "Variant Also Negotiates",
	    507: "Insufficient Storage",
	    508: "Loop Detected",
	    510: "Not Extended",
	    511: "Network Authentication Required",
	};
	return ChaosHandlerData;
}

var chaosStrategy = {};

var hasRequiredChaosStrategy;

function requireChaosStrategy () {
	if (hasRequiredChaosStrategy) return chaosStrategy;
	hasRequiredChaosStrategy = 1;
	(function (exports) {
		/**
		 * -------------------------------------------------------------------------------------------
		 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
		 * See License in the project root for license information.
		 * -------------------------------------------------------------------------------------------
		 */
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.ChaosStrategy = void 0;
		(function (ChaosStrategy) {
		    ChaosStrategy[ChaosStrategy["MANUAL"] = 0] = "MANUAL";
		    ChaosStrategy[ChaosStrategy["RANDOM"] = 1] = "RANDOM";
		})(exports.ChaosStrategy || (exports.ChaosStrategy = {}));
} (chaosStrategy));
	return chaosStrategy;
}

var hasRequiredChaosHandler;

function requireChaosHandler () {
	if (hasRequiredChaosHandler) return chaosHandler;
	hasRequiredChaosHandler = 1;
	/**
	 * -------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
	 * See License in the project root for license information.
	 * -------------------------------------------------------------------------------------------
	 */
	Object.defineProperty(chaosHandler, "__esModule", { value: true });
	chaosHandler.ChaosHandler = void 0;
	const tslib_1 = require$$0;
	const ChaosHandlerData_1 = requireChaosHandlerData();
	const chaosStrategy_1 = requireChaosStrategy();
	/**
	 * @class
	 * Class
	 * @implements Middleware
	 * Class representing RedirectHandler
	 */
	class ChaosHandler {
	    /**
	     * @public
	     * @constructor
	     * To create an instance of ChaosHandler
	     * @param {ChaosHandlerOptions} [options = new ChaosHandlerOptions()] - The chaos handler options instance
	     * @param manualMap - The Map passed by user containing url-statusCode info
	     */
	    constructor(options, manualMap) {
	        /**
	         * A member holding options to customize the handler behavior
	         *
	         * @private
	         */
	        this.options = {
	            chaosStrategy: chaosStrategy_1.ChaosStrategy.RANDOM,
	            statusMessage: "A random status message",
	            chaosPercentage: 10,
	        };
	        const chaosOptions = Object.assign(this.options, options);
	        if (chaosOptions.chaosPercentage > 100 || chaosOptions.chaosPercentage < 0) {
	            throw new Error("Chaos Percentage must be set to a value between 0 and 100.");
	        }
	        this.options = chaosOptions;
	        this.manualMap = manualMap !== null && manualMap !== void 0 ? manualMap : new Map();
	    }
	    /**
	     * Fetches a random status code for the RANDOM mode from the predefined array
	     * @private
	     * @param {string} requestMethod - the API method for the request
	     * @returns a random status code from a given set of status codes
	     */
	    generateRandomStatusCode(requestMethod) {
	        const statusCodeArray = ChaosHandlerData_1.methodStatusCode[requestMethod];
	        return statusCodeArray[Math.floor(Math.random() * statusCodeArray.length)];
	    }
	    /**
	     * Strips out the host url and returns the relative url only
	     * @private
	     * @param {ChaosHandlerOptions} chaosHandlerOptions - The ChaosHandlerOptions object
	     * @param {string} urlMethod - the complete URL
	     * @returns the string as relative URL
	     */
	    getRelativeURL(chaosHandlerOptions, urlMethod) {
	        const baseUrl = chaosHandlerOptions.baseUrl;
	        if (baseUrl === undefined) {
	            return urlMethod;
	        }
	        return urlMethod.replace(baseUrl, "").trim();
	    }
	    /**
	     * Gets a status code from the options or a randomly generated status code
	     * @param {ChaosHandlerOptions} chaosHandlerOptions - The ChaosHandlerOptions object
	     * @param {string} requestURL - the URL for the request
	     * @param {HttpMethod} requestMethod - the API method for the request
	     * @returns {number} generated statusCode
	     */
	    getStatusCode(chaosHandlerOptions, requestURL, requestMethod) {
	        if (chaosHandlerOptions.chaosStrategy === chaosStrategy_1.ChaosStrategy.MANUAL) {
	            if (chaosHandlerOptions.statusCode !== undefined) {
	                return chaosHandlerOptions.statusCode;
	            }
	            else {
	                // manual mode with no status code, can be a global level or request level without statusCode
	                const relativeURL = this.getRelativeURL(chaosHandlerOptions, requestURL);
	                const definedResponses = this.manualMap.get(relativeURL);
	                if (definedResponses !== undefined) {
	                    // checking Manual Map for exact match
	                    const mapCode = definedResponses.get(requestMethod);
	                    if (mapCode !== undefined) {
	                        return mapCode;
	                    }
	                    // else statusCode would be undefined
	                }
	                else {
	                    // checking for regex match if exact match doesn't work
	                    this.manualMap.forEach((value, key) => {
	                        var _a;
	                        const regexURL = new RegExp(key + "$");
	                        if (regexURL.test(relativeURL)) {
	                            const responseCode = (_a = this.manualMap.get(key)) === null || _a === void 0 ? void 0 : _a.get(requestMethod);
	                            if (responseCode !== undefined) {
	                                return responseCode;
	                            }
	                        }
	                    });
	                }
	            }
	        }
	        // for manual mode status or if the url was not mapped to a code return a random status
	        return this.generateRandomStatusCode(requestMethod);
	    }
	    /**
	     * Generates a respondy for the chaoe response
	     * @private
	     * @param {ChaosHandlerOptions} chaosHandlerOptions - The ChaosHandlerOptions object
	     * @param {string} requestID - request id
	     * @param {string} requestDate - date of the request
	     *  * @returns response body
	     */
	    createResponseBody(chaosHandlerOptions, statusCode) {
	        if (chaosHandlerOptions.responseBody) {
	            return chaosHandlerOptions.responseBody;
	        }
	        let body;
	        if (statusCode >= 400) {
	            const codeMessage = ChaosHandlerData_1.httpStatusCode[statusCode];
	            const errMessage = chaosHandlerOptions.statusMessage;
	            body = {
	                error: {
	                    code: codeMessage,
	                    message: errMessage,
	                },
	            };
	        }
	        else {
	            body = {};
	        }
	        return body;
	    }
	    /**
	     * Composes a new chaotic response code with the configured parameters
	     * @param {string} url
	     * @param {FetchRequestInit} fetchRequestInit
	     * @returns {Response}
	     */
	    createChaosResponse(url, fetchRequestInit) {
	        var _a;
	        if (fetchRequestInit.method === undefined) {
	            throw new Error("Request method must be defined.");
	        }
	        const requestMethod = fetchRequestInit.method;
	        const statusCode = this.getStatusCode(this.options, url, requestMethod);
	        const responseBody = this.createResponseBody(this.options, statusCode);
	        const stringBody = typeof responseBody === "string" ? responseBody : JSON.stringify(responseBody);
	        return {
	            url,
	            body: stringBody,
	            status: statusCode,
	            statusText: this.options.statusMessage,
	            headers: (_a = this.options.headers) !== null && _a !== void 0 ? _a : {},
	        };
	    }
	    execute(url, requestInit, requestOptions) {
	        return tslib_1.__awaiter(this, void 0, void 0, function* () {
	            if (Math.floor(Math.random() * 100) < this.options.chaosPercentage) {
	                return Promise.resolve(this.createChaosResponse(url, requestInit));
	            }
	            else {
	                if (!this.next) {
	                    throw new Error("Please set the next middleware to continue the request");
	                }
	                return yield this.next.execute(url, requestInit, requestOptions);
	            }
	        });
	    }
	}
	chaosHandler.ChaosHandler = ChaosHandler;
	return chaosHandler;
}

var chaosHandlerOptions = {};

var hasRequiredChaosHandlerOptions;

function requireChaosHandlerOptions () {
	if (hasRequiredChaosHandlerOptions) return chaosHandlerOptions;
	hasRequiredChaosHandlerOptions = 1;
	/**
	 * -------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
	 * See License in the project root for license information.
	 * -------------------------------------------------------------------------------------------
	 */
	Object.defineProperty(chaosHandlerOptions, "__esModule", { value: true });
	chaosHandlerOptions.ChaosHandlerOptionsKey = void 0;
	chaosHandlerOptions.ChaosHandlerOptionsKey = "ChaosHandlerOptionsKey";
	return chaosHandlerOptions;
}

var telemetryHandlerOptions = {};

var hasRequiredTelemetryHandlerOptions;

function requireTelemetryHandlerOptions () {
	if (hasRequiredTelemetryHandlerOptions) return telemetryHandlerOptions;
	hasRequiredTelemetryHandlerOptions = 1;
	Object.defineProperty(telemetryHandlerOptions, "__esModule", { value: true });
	return telemetryHandlerOptions;
}

var telemetryHandler = {};

var hasRequiredTelemetryHandler;

function requireTelemetryHandler () {
	if (hasRequiredTelemetryHandler) return telemetryHandler;
	hasRequiredTelemetryHandler = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.TelemetryHandler = exports.TelemetryHandlerOptionsKey = void 0;
		exports.TelemetryHandlerOptionsKey = "TelemetryHandlerOptionsKey";
		class TelemetryHandler {
		    constructor(telemetryHandlerOptions) {
		        this.telemetryHandlerOptions = telemetryHandlerOptions;
		    }
		    execute(url, requestInit, requestOptions) {
		        if (this.telemetryHandlerOptions && this.telemetryHandlerOptions.telemetryConfigurator) {
		            this.telemetryHandlerOptions.telemetryConfigurator(url, requestInit, requestOptions, this.telemetryHandlerOptions.telemetryInfomation);
		        }
		        else if (requestOptions && requestOptions[exports.TelemetryHandlerOptionsKey]) {
		            requestOptions[exports.TelemetryHandlerOptionsKey].telemetryConfigurator(url, requestInit, requestOptions);
		        }
		        if (!this.next) {
		            throw new Error("Please set the next middleware to continue the request");
		        }
		        return this.next.execute(url, requestInit, requestOptions);
		    }
		}
		exports.TelemetryHandler = TelemetryHandler;
} (telemetryHandler));
	return telemetryHandler;
}

var fetchDefinitions = {};

var hasRequiredFetchDefinitions;

function requireFetchDefinitions () {
	if (hasRequiredFetchDefinitions) return fetchDefinitions;
	hasRequiredFetchDefinitions = 1;
	/**
	 * -------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
	 * See License in the project root for license information.
	 * -------------------------------------------------------------------------------------------
	 */
	Object.defineProperty(fetchDefinitions, "__esModule", { value: true });
	return fetchDefinitions;
}

(function (exports) {
	/**
	 * -------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
	 * See License in the project root for license information.
	 * -------------------------------------------------------------------------------------------
	 */
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = require$$0;
	/* eslint-disable @typescript-eslint/triple-slash-reference*/
	/// <reference path= "../dom.shim.d.ts" />
	tslib_1.__exportStar(requireFetchRequestAdapter(), exports);
	tslib_1.__exportStar(requireHttpClient(), exports);
	tslib_1.__exportStar(requireMiddleware(), exports);
	tslib_1.__exportStar(requireChaosHandler(), exports);
	tslib_1.__exportStar(requireCustomFetchHandler(), exports);
	tslib_1.__exportStar(requireParametersNameDecodingHandler(), exports);
	tslib_1.__exportStar(requireRedirectHandler(), exports);
	tslib_1.__exportStar(requireRetryHandler(), exports);
	tslib_1.__exportStar(requireChaosHandlerOptions(), exports);
	tslib_1.__exportStar(requireChaosStrategy(), exports);
	tslib_1.__exportStar(requireParametersNameDecodingOptions(), exports);
	tslib_1.__exportStar(requireRedirectHandlerOptions(), exports);
	tslib_1.__exportStar(requireRetryHandlerOptions(), exports);
	tslib_1.__exportStar(requireTelemetryHandlerOptions(), exports);
	tslib_1.__exportStar(requireTelemetryHandler(), exports);
	tslib_1.__exportStar(requireMiddlewareFactory(), exports);
	tslib_1.__exportStar(requireHeadersUtil(), exports);
	tslib_1.__exportStar(requireFetchDefinitions(), exports);
} (src));

/** Access token provider that leverages the Azure Identity library to retrieve an access token. */
class AzureIdentityAccessTokenProvider {
    /**
     *@constructor
     *@param credentials The tokenCredential implementation to use for authentication.
     *@param scopes The scopes to use for authentication.
     *@param options The options to use for authentication.
     *@param allowedHosts The allowed hosts to use for authentication.
     */
    constructor(credentials, scopes = [
        "https://graph.microsoft.com/.default",
    ], options, allowedHosts = new Set([
        "graph.microsoft.com",
        "graph.microsoft.us",
        "dod-graph.microsoft.us",
        "graph.microsoft.de",
        "microsoftgraph.chinacloudapi.cn",
        "canary.graph.microsoft.com",
    ])) {
        this.credentials = credentials;
        this.scopes = scopes;
        this.options = options;
        /**
         * @inheritdoc
         */
        this.getAuthorizationToken = async (url, additionalAuthenticationContext) => {
            var _a;
            if (!url || !this.allowedHostsValidator.isUrlHostValid(url)) {
                return "";
            }
            validateProtocol(url);
            let decodedClaims = "";
            if (additionalAuthenticationContext &&
                additionalAuthenticationContext[AzureIdentityAccessTokenProvider.claimsKey]) {
                const rawClaims = additionalAuthenticationContext[AzureIdentityAccessTokenProvider.claimsKey];
                decodedClaims = Buffer.from(rawClaims, "base64").toString();
            }
            const localOptions = Object.assign({}, this.options);
            if (decodedClaims) {
                localOptions.claims = decodedClaims; // the field is defined in a derived interface for some reason https://github.com/Azure/azure-sdk-for-js/blob/4498fecbede71563fee5daae2ad537ff57de3640/sdk/identity/identity/src/msal/credentials.ts#L29
            }
            const result = await this.credentials.getToken(this.scopes, localOptions);
            return (_a = result === null || result === void 0 ? void 0 : result.token) !== null && _a !== void 0 ? _a : "";
        };
        /**
         * @inheritdoc
         */
        this.getAllowedHostsValidator = () => this.allowedHostsValidator;
        if (!credentials) {
            throw new Error("parameter credentials cannot be null");
        }
        if (!scopes || scopes.length === 0) {
            throw new Error("scopes cannot be null or empty");
        }
        this.allowedHostsValidator = new AllowedHostsValidator(allowedHosts);
    }
}
AzureIdentityAccessTokenProvider.claimsKey = "claims";

class AzureIdentityAuthenticationProvider extends BaseBearerTokenAuthenticationProvider {
    /**
     *@constructor
     *@param credentials The tokenCredential implementation to use for authentication.
     *@param scopes The scopes to use for authentication.
     *@param options The options to use for authentication.
     *@param allowedHosts The allowed hosts to use for authentication.
     */
    constructor(credentials, scopes = ["https://graph.microsoft.com/.default"], options, allowedHosts = new Set([
        "graph.microsoft.com",
        "graph.microsoft.us",
        "dod-graph.microsoft.us",
        "graph.microsoft.de",
        "microsoftgraph.chinacloudapi.cn",
        "canary.graph.microsoft.com",
    ])) {
        super(new AzureIdentityAccessTokenProvider(credentials, scopes, options, allowedHosts));
    }
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
function log(...args) {
    if (args.length > 0) {
        const firstArg = String(args[0]);
        if (firstArg.includes(":error")) {
            console.error(...args);
        }
        else if (firstArg.includes(":warning")) {
            console.warn(...args);
        }
        else if (firstArg.includes(":info")) {
            console.info(...args);
        }
        else if (firstArg.includes(":verbose")) {
            console.debug(...args);
        }
        else {
            console.debug(...args);
        }
    }
}

// Copyright (c) Microsoft Corporation.
const debugEnvVariable = (typeof process !== "undefined" && process.env && process.env.DEBUG) || undefined;
let enabledString;
let enabledNamespaces = [];
let skippedNamespaces = [];
const debuggers = [];
if (debugEnvVariable) {
    enable(debugEnvVariable);
}
const debugObj = Object.assign((namespace) => {
    return createDebugger(namespace);
}, {
    enable,
    enabled,
    disable,
    log
});
function enable(namespaces) {
    enabledString = namespaces;
    enabledNamespaces = [];
    skippedNamespaces = [];
    const wildcard = /\*/g;
    const namespaceList = namespaces.split(",").map((ns) => ns.trim().replace(wildcard, ".*?"));
    for (const ns of namespaceList) {
        if (ns.startsWith("-")) {
            skippedNamespaces.push(new RegExp(`^${ns.substr(1)}$`));
        }
        else {
            enabledNamespaces.push(new RegExp(`^${ns}$`));
        }
    }
    for (const instance of debuggers) {
        instance.enabled = enabled(instance.namespace);
    }
}
function enabled(namespace) {
    if (namespace.endsWith("*")) {
        return true;
    }
    for (const skipped of skippedNamespaces) {
        if (skipped.test(namespace)) {
            return false;
        }
    }
    for (const enabledNamespace of enabledNamespaces) {
        if (enabledNamespace.test(namespace)) {
            return true;
        }
    }
    return false;
}
function disable() {
    const result = enabledString || "";
    enable("");
    return result;
}
function createDebugger(namespace) {
    const newDebugger = Object.assign(debug, {
        enabled: enabled(namespace),
        destroy,
        log: debugObj.log,
        namespace,
        extend
    });
    function debug(...args) {
        if (!newDebugger.enabled) {
            return;
        }
        if (args.length > 0) {
            args[0] = `${namespace} ${args[0]}`;
        }
        newDebugger.log(...args);
    }
    debuggers.push(newDebugger);
    return newDebugger;
}
function destroy() {
    const index = debuggers.indexOf(this);
    if (index >= 0) {
        debuggers.splice(index, 1);
        return true;
    }
    return false;
}
function extend(namespace) {
    const newDebugger = createDebugger(`${this.namespace}:${namespace}`);
    newDebugger.log = this.log;
    return newDebugger;
}
var debug = debugObj;

// Copyright (c) Microsoft Corporation.
const registeredLoggers = new Set();
const logLevelFromEnv = (typeof process !== "undefined" && process.env && process.env.AZURE_LOG_LEVEL) || undefined;
let azureLogLevel;
/**
 * The AzureLogger provides a mechanism for overriding where logs are output to.
 * By default, logs are sent to stderr.
 * Override the `log` method to redirect logs to another location.
 */
const AzureLogger = debug("azure");
AzureLogger.log = (...args) => {
    debug.log(...args);
};
const AZURE_LOG_LEVELS = ["verbose", "info", "warning", "error"];
if (logLevelFromEnv) {
    // avoid calling setLogLevel because we don't want a mis-set environment variable to crash
    if (isAzureLogLevel(logLevelFromEnv)) {
        setLogLevel(logLevelFromEnv);
    }
    else {
        console.error(`AZURE_LOG_LEVEL set to unknown log level '${logLevelFromEnv}'; logging is not enabled. Acceptable values: ${AZURE_LOG_LEVELS.join(", ")}.`);
    }
}
/**
 * Immediately enables logging at the specified log level.
 * @param level - The log level to enable for logging.
 * Options from most verbose to least verbose are:
 * - verbose
 * - info
 * - warning
 * - error
 */
function setLogLevel(level) {
    if (level && !isAzureLogLevel(level)) {
        throw new Error(`Unknown log level '${level}'. Acceptable values: ${AZURE_LOG_LEVELS.join(",")}`);
    }
    azureLogLevel = level;
    const enabledNamespaces = [];
    for (const logger of registeredLoggers) {
        if (shouldEnable(logger)) {
            enabledNamespaces.push(logger.namespace);
        }
    }
    debug.enable(enabledNamespaces.join(","));
}
const levelMap = {
    verbose: 400,
    info: 300,
    warning: 200,
    error: 100
};
/**
 * Creates a logger for use by the Azure SDKs that inherits from `AzureLogger`.
 * @param namespace - The name of the SDK package.
 * @hidden
 */
function createClientLogger(namespace) {
    const clientRootLogger = AzureLogger.extend(namespace);
    patchLogMethod(AzureLogger, clientRootLogger);
    return {
        error: createLogger(clientRootLogger, "error"),
        warning: createLogger(clientRootLogger, "warning"),
        info: createLogger(clientRootLogger, "info"),
        verbose: createLogger(clientRootLogger, "verbose")
    };
}
function patchLogMethod(parent, child) {
    child.log = (...args) => {
        parent.log(...args);
    };
}
function createLogger(parent, level) {
    const logger = Object.assign(parent.extend(level), {
        level
    });
    patchLogMethod(parent, logger);
    if (shouldEnable(logger)) {
        const enabledNamespaces = debug.disable();
        debug.enable(enabledNamespaces + "," + logger.namespace);
    }
    registeredLoggers.add(logger);
    return logger;
}
function shouldEnable(logger) {
    if (azureLogLevel && levelMap[logger.level] <= levelMap[azureLogLevel]) {
        return true;
    }
    else {
        return false;
    }
}
function isAzureLogLevel(logLevel) {
    return AZURE_LOG_LEVELS.includes(logLevel);
}

// Copyright (c) Microsoft Corporation.
/**
 * The AzureLogger used for all clients within the identity package
 */
const logger$3 = createClientLogger("identity");
/**
 * Formatting the success event on the credentials
 */
function formatSuccess(scope) {
    return `SUCCESS. Scopes: ${Array.isArray(scope) ? scope.join(", ") : scope}.`;
}
/**
 * Formatting the success event on the credentials
 */
function formatError(scope, error) {
    let message = "ERROR.";
    if (scope === null || scope === void 0 ? void 0 : scope.length) {
        message += ` Scopes: ${Array.isArray(scope) ? scope.join(", ") : scope}.`;
    }
    return `${message} Error message: ${typeof error === "string" ? error : error.message}.`;
}
/**
 * Generates a CredentialLoggerInstance.
 *
 * It logs with the format:
 *
 *   `[title] => [message]`
 *
 */
function credentialLoggerInstance(title, parent, log = logger$3) {
    const fullTitle = parent ? `${parent.fullTitle} ${title}` : title;
    function info(message) {
        log.info(`${fullTitle} =>`, message);
    }
    function warning(message) {
        log.warning(`${fullTitle} =>`, message);
    }
    function verbose(message) {
        log.verbose(`${fullTitle} =>`, message);
    }
    return {
        title,
        fullTitle,
        info,
        warning,
        verbose,
    };
}
/**
 * Generates a CredentialLogger, which is a logger declared at the credential's constructor, and used at any point in the credential.
 * It has all the properties of a CredentialLoggerInstance, plus other logger instances, one per method.
 *
 * It logs with the format:
 *
 *   `[title] => [message]`
 *   `[title] => getToken() => [message]`
 *
 */
function credentialLogger(title, log = logger$3) {
    const credLogger = credentialLoggerInstance(title, undefined, log);
    return Object.assign(Object.assign({}, credLogger), { parent: log, getToken: credentialLoggerInstance("=> getToken()", credLogger, log) });
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
function isErrorResponse(errorResponse) {
    return (errorResponse &&
        typeof errorResponse.error === "string" &&
        typeof errorResponse.error_description === "string");
}
/**
 * The Error.name value of an AuthenticationError
 */
const AuthenticationErrorName = "AuthenticationError";
/**
 * Provides details about a failure to authenticate with Azure Active
 * Directory.  The `errorResponse` field contains more details about
 * the specific failure.
 */
class AuthenticationError extends Error {
    // eslint-disable-next-line @typescript-eslint/ban-types
    constructor(statusCode, errorBody) {
        let errorResponse = {
            error: "unknown",
            errorDescription: "An unknown error occurred and no additional details are available.",
        };
        if (isErrorResponse(errorBody)) {
            errorResponse = convertOAuthErrorResponseToErrorResponse(errorBody);
        }
        else if (typeof errorBody === "string") {
            try {
                // Most error responses will contain JSON-formatted error details
                // in the response body
                const oauthErrorResponse = JSON.parse(errorBody);
                errorResponse = convertOAuthErrorResponseToErrorResponse(oauthErrorResponse);
            }
            catch (e) {
                if (statusCode === 400) {
                    errorResponse = {
                        error: "authority_not_found",
                        errorDescription: "The specified authority URL was not found.",
                    };
                }
                else {
                    errorResponse = {
                        error: "unknown_error",
                        errorDescription: `An unknown error has occurred. Response body:\n\n${errorBody}`,
                    };
                }
            }
        }
        else {
            errorResponse = {
                error: "unknown_error",
                errorDescription: "An unknown error occurred and no additional details are available.",
            };
        }
        super(`${errorResponse.error} Status code: ${statusCode}\nMore details:\n${errorResponse.errorDescription}`);
        this.statusCode = statusCode;
        this.errorResponse = errorResponse;
        // Ensure that this type reports the correct name
        this.name = AuthenticationErrorName;
    }
}
function convertOAuthErrorResponseToErrorResponse(errorBody) {
    return {
        error: errorBody.error,
        errorDescription: errorBody.error_description,
        correlationId: errorBody.correlation_id,
        errorCodes: errorBody.error_codes,
        timestamp: errorBody.timestamp,
        traceId: errorBody.trace_id,
    };
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/**
 * Current version of the `@azure/identity` package.
 */
const SDK_VERSION$1 = `3.0.0-beta.1`;
/**
 * A list of known Azure authority hosts
 */
var AzureAuthorityHosts;
(function (AzureAuthorityHosts) {
    /**
     * China-based Azure Authority Host
     */
    AzureAuthorityHosts["AzureChina"] = "https://login.chinacloudapi.cn";
    /**
     * Germany-based Azure Authority Host
     */
    AzureAuthorityHosts["AzureGermany"] = "https://login.microsoftonline.de";
    /**
     * US Government Azure Authority Host
     */
    AzureAuthorityHosts["AzureGovernment"] = "https://login.microsoftonline.us";
    /**
     * Public Cloud Azure Authority Host
     */
    AzureAuthorityHosts["AzurePublicCloud"] = "https://login.microsoftonline.com";
})(AzureAuthorityHosts || (AzureAuthorityHosts = {}));
/**
 * The default authority host.
 */
const DefaultAuthorityHost = AzureAuthorityHosts.AzurePublicCloud;
/**
 * Allow acquiring tokens for any tenant for multi-tentant auth.
 */
const ALL_TENANTS = ["*"];

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/** @internal */
const knownContextKeys = {
    span: Symbol.for("@azure/core-tracing span"),
    namespace: Symbol.for("@azure/core-tracing namespace"),
};
/**
 * Creates a new {@link TracingContext} with the given options.
 * @param options - A set of known keys that may be set on the context.
 * @returns A new {@link TracingContext} with the given options.
 *
 * @internal
 */
function createTracingContext(options = {}) {
    let context = new TracingContextImpl(options.parentContext);
    if (options.span) {
        context = context.setValue(knownContextKeys.span, options.span);
    }
    if (options.namespace) {
        context = context.setValue(knownContextKeys.namespace, options.namespace);
    }
    return context;
}
/** @internal */
class TracingContextImpl {
    constructor(initialContext) {
        this._contextMap =
            initialContext instanceof TracingContextImpl
                ? new Map(initialContext._contextMap)
                : new Map();
    }
    setValue(key, value) {
        const newContext = new TracingContextImpl(this);
        newContext._contextMap.set(key, value);
        return newContext;
    }
    getValue(key) {
        return this._contextMap.get(key);
    }
    deleteValue(key) {
        const newContext = new TracingContextImpl(this);
        newContext._contextMap.delete(key);
        return newContext;
    }
}

// Copyright (c) Microsoft Corporation.
function createDefaultTracingSpan() {
    return {
        end: () => {
            // noop
        },
        isRecording: () => false,
        recordException: () => {
            // noop
        },
        setAttribute: () => {
            // noop
        },
        setStatus: () => {
            // noop
        },
    };
}
function createDefaultInstrumenter() {
    return {
        createRequestHeaders: () => {
            return {};
        },
        parseTraceparentHeader: () => {
            return undefined;
        },
        startSpan: (_name, spanOptions) => {
            return {
                span: createDefaultTracingSpan(),
                tracingContext: createTracingContext({ parentContext: spanOptions.tracingContext }),
            };
        },
        withContext(_context, callback, ...callbackArgs) {
            return callback(...callbackArgs);
        },
    };
}
/** @internal */
let instrumenterImplementation;
/**
 * Gets the currently set instrumenter, a No-Op instrumenter by default.
 *
 * @returns The currently set instrumenter
 */
function getInstrumenter() {
    if (!instrumenterImplementation) {
        instrumenterImplementation = createDefaultInstrumenter();
    }
    return instrumenterImplementation;
}

// Copyright (c) Microsoft Corporation.
/**
 * Creates a new tracing client.
 *
 * @param options - Options used to configure the tracing client.
 * @returns - An instance of {@link TracingClient}.
 */
function createTracingClient(options) {
    const { namespace, packageName, packageVersion } = options;
    function startSpan(name, operationOptions, spanOptions) {
        var _a;
        const startSpanResult = getInstrumenter().startSpan(name, Object.assign(Object.assign({}, spanOptions), { packageName: packageName, packageVersion: packageVersion, tracingContext: (_a = operationOptions === null || operationOptions === void 0 ? void 0 : operationOptions.tracingOptions) === null || _a === void 0 ? void 0 : _a.tracingContext }));
        let tracingContext = startSpanResult.tracingContext;
        const span = startSpanResult.span;
        if (!tracingContext.getValue(knownContextKeys.namespace)) {
            tracingContext = tracingContext.setValue(knownContextKeys.namespace, namespace);
        }
        span.setAttribute("az.namespace", tracingContext.getValue(knownContextKeys.namespace));
        const updatedOptions = Object.assign({}, operationOptions, {
            tracingOptions: Object.assign(Object.assign({}, operationOptions === null || operationOptions === void 0 ? void 0 : operationOptions.tracingOptions), { tracingContext }),
        });
        return {
            span,
            updatedOptions,
        };
    }
    async function withSpan(name, operationOptions, callback, spanOptions) {
        const { span, updatedOptions } = startSpan(name, operationOptions, spanOptions);
        try {
            const result = await withContext(updatedOptions.tracingOptions.tracingContext, () => Promise.resolve(callback(updatedOptions, span)));
            span.setStatus({ status: "success" });
            return result;
        }
        catch (err) {
            span.setStatus({ status: "error", error: err });
            throw err;
        }
        finally {
            span.end();
        }
    }
    function withContext(context, callback, ...callbackArgs) {
        return getInstrumenter().withContext(context, callback, ...callbackArgs);
    }
    /**
     * Parses a traceparent header value into a span identifier.
     *
     * @param traceparentHeader - The traceparent header to parse.
     * @returns An implementation-specific identifier for the span.
     */
    function parseTraceparentHeader(traceparentHeader) {
        return getInstrumenter().parseTraceparentHeader(traceparentHeader);
    }
    /**
     * Creates a set of request headers to propagate tracing information to a backend.
     *
     * @param tracingContext - The context containing the span to serialize.
     * @returns The set of headers to add to a request.
     */
    function createRequestHeaders(tracingContext) {
        return getInstrumenter().createRequestHeaders(tracingContext);
    }
    return {
        startSpan,
        withSpan,
        withContext,
        parseTraceparentHeader,
        createRequestHeaders,
    };
}

// Copyright (c) Microsoft Corporation.
/**
 * Creates a span using the global tracer.
 * @internal
 */
const tracingClient = createTracingClient({
    namespace: "Microsoft.AAD",
    packageName: "@azure/identity",
    packageVersion: SDK_VERSION$1,
});

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/// <reference path="../shims-public.d.ts" />
const listenersMap = new WeakMap();
const abortedMap = new WeakMap();
/**
 * An aborter instance implements AbortSignal interface, can abort HTTP requests.
 *
 * - Call AbortSignal.none to create a new AbortSignal instance that cannot be cancelled.
 * Use `AbortSignal.none` when you are required to pass a cancellation token but the operation
 * cannot or will not ever be cancelled.
 *
 * @example
 * Abort without timeout
 * ```ts
 * await doAsyncWork(AbortSignal.none);
 * ```
 */
class AbortSignal {
    constructor() {
        /**
         * onabort event listener.
         */
        this.onabort = null;
        listenersMap.set(this, []);
        abortedMap.set(this, false);
    }
    /**
     * Status of whether aborted or not.
     *
     * @readonly
     */
    get aborted() {
        if (!abortedMap.has(this)) {
            throw new TypeError("Expected `this` to be an instance of AbortSignal.");
        }
        return abortedMap.get(this);
    }
    /**
     * Creates a new AbortSignal instance that will never be aborted.
     *
     * @readonly
     */
    static get none() {
        return new AbortSignal();
    }
    /**
     * Added new "abort" event listener, only support "abort" event.
     *
     * @param _type - Only support "abort" event
     * @param listener - The listener to be added
     */
    addEventListener(
    // tslint:disable-next-line:variable-name
    _type, listener) {
        if (!listenersMap.has(this)) {
            throw new TypeError("Expected `this` to be an instance of AbortSignal.");
        }
        const listeners = listenersMap.get(this);
        listeners.push(listener);
    }
    /**
     * Remove "abort" event listener, only support "abort" event.
     *
     * @param _type - Only support "abort" event
     * @param listener - The listener to be removed
     */
    removeEventListener(
    // tslint:disable-next-line:variable-name
    _type, listener) {
        if (!listenersMap.has(this)) {
            throw new TypeError("Expected `this` to be an instance of AbortSignal.");
        }
        const listeners = listenersMap.get(this);
        const index = listeners.indexOf(listener);
        if (index > -1) {
            listeners.splice(index, 1);
        }
    }
    /**
     * Dispatches a synthetic event to the AbortSignal.
     */
    dispatchEvent(_event) {
        throw new Error("This is a stub dispatchEvent implementation that should not be used.  It only exists for type-checking purposes.");
    }
}
/**
 * Helper to trigger an abort event immediately, the onabort and all abort event listeners will be triggered.
 * Will try to trigger abort event for all linked AbortSignal nodes.
 *
 * - If there is a timeout, the timer will be cancelled.
 * - If aborted is true, nothing will happen.
 *
 * @internal
 */
// eslint-disable-next-line @azure/azure-sdk/ts-use-interface-parameters
function abortSignal(signal) {
    if (signal.aborted) {
        return;
    }
    if (signal.onabort) {
        signal.onabort.call(signal);
    }
    const listeners = listenersMap.get(signal);
    if (listeners) {
        // Create a copy of listeners so mutations to the array
        // (e.g. via removeListener calls) don't affect the listeners
        // we invoke.
        listeners.slice().forEach((listener) => {
            listener.call(signal, { type: "abort" });
        });
    }
    abortedMap.set(signal, true);
}

// Copyright (c) Microsoft Corporation.
/**
 * This error is thrown when an asynchronous operation has been aborted.
 * Check for this error by testing the `name` that the name property of the
 * error matches `"AbortError"`.
 *
 * @example
 * ```ts
 * const controller = new AbortController();
 * controller.abort();
 * try {
 *   doAsyncWork(controller.signal)
 * } catch (e) {
 *   if (e.name === 'AbortError') {
 *     // handle abort error here.
 *   }
 * }
 * ```
 */
class AbortError extends Error {
    constructor(message) {
        super(message);
        this.name = "AbortError";
    }
}
/**
 * An AbortController provides an AbortSignal and the associated controls to signal
 * that an asynchronous operation should be aborted.
 *
 * @example
 * Abort an operation when another event fires
 * ```ts
 * const controller = new AbortController();
 * const signal = controller.signal;
 * doAsyncWork(signal);
 * button.addEventListener('click', () => controller.abort());
 * ```
 *
 * @example
 * Share aborter cross multiple operations in 30s
 * ```ts
 * // Upload the same data to 2 different data centers at the same time,
 * // abort another when any of them is finished
 * const controller = AbortController.withTimeout(30 * 1000);
 * doAsyncWork(controller.signal).then(controller.abort);
 * doAsyncWork(controller.signal).then(controller.abort);
 *```
 *
 * @example
 * Cascaded aborting
 * ```ts
 * // All operations can't take more than 30 seconds
 * const aborter = Aborter.timeout(30 * 1000);
 *
 * // Following 2 operations can't take more than 25 seconds
 * await doAsyncWork(aborter.withTimeout(25 * 1000));
 * await doAsyncWork(aborter.withTimeout(25 * 1000));
 * ```
 */
class AbortController$1 {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    constructor(parentSignals) {
        this._signal = new AbortSignal();
        if (!parentSignals) {
            return;
        }
        // coerce parentSignals into an array
        if (!Array.isArray(parentSignals)) {
            // eslint-disable-next-line prefer-rest-params
            parentSignals = arguments;
        }
        for (const parentSignal of parentSignals) {
            // if the parent signal has already had abort() called,
            // then call abort on this signal as well.
            if (parentSignal.aborted) {
                this.abort();
            }
            else {
                // when the parent signal aborts, this signal should as well.
                parentSignal.addEventListener("abort", () => {
                    this.abort();
                });
            }
        }
    }
    /**
     * The AbortSignal associated with this controller that will signal aborted
     * when the abort method is called on this controller.
     *
     * @readonly
     */
    get signal() {
        return this._signal;
    }
    /**
     * Signal that any operations passed this controller's associated abort signal
     * to cancel any remaining work and throw an `AbortError`.
     */
    abort() {
        abortSignal(this._signal);
    }
    /**
     * Creates a new AbortSignal instance that will abort after the provided ms.
     * @param ms - Elapsed time in milliseconds to trigger an abort.
     */
    static timeout(ms) {
        const signal = new AbortSignal();
        const timer = setTimeout(abortSignal, ms, signal);
        // Prevent the active Timer from keeping the Node.js event loop active.
        if (typeof timer.unref === "function") {
            timer.unref();
        }
        return signal;
    }
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/**
 * A constant that indicates whether the environment the code is running is Node.JS.
 */
const isNode = false;

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/**
 * Returns a random integer value between a lower and upper bound,
 * inclusive of both bounds.
 * Note that this uses Math.random and isn't secure. If you need to use
 * this for any kind of security purpose, find a better source of random.
 * @param min - The smallest integer value allowed.
 * @param max - The largest integer value allowed.
 */
function getRandomIntegerInclusive(min, max) {
    // Make sure inputs are integers.
    min = Math.ceil(min);
    max = Math.floor(max);
    // Pick a random offset from zero to the size of the range.
    // Since Math.random() can never return 1, we have to make the range one larger
    // in order to be inclusive of the maximum value after we take the floor.
    const offset = Math.floor(Math.random() * (max - min + 1));
    return offset + min;
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/**
 * Helper to determine when an input is a generic JS object.
 * @returns true when input is an object type that is not null, Array, RegExp, or Date.
 */
function isObject(input) {
    return (typeof input === "object" &&
        input !== null &&
        !Array.isArray(input) &&
        !(input instanceof RegExp) &&
        !(input instanceof Date));
}

// Copyright (c) Microsoft Corporation.
/**
 * Typeguard for an error object shape (has name and message)
 * @param e - Something caught by a catch clause.
 */
function isError(e) {
    if (isObject(e)) {
        const hasName = typeof e.name === "string";
        const hasMessage = typeof e.message === "string";
        return hasName && hasMessage;
    }
    return false;
}
/**
 * Given what is thought to be an error object, return the message if possible.
 * If the message is missing, returns a stringified version of the input.
 * @param e - Something thrown from a try block
 * @returns The error message or a string of the input
 */
function getErrorMessage(e) {
    if (isError(e)) {
        return e.message;
    }
    else {
        let stringified;
        try {
            if (typeof e === "object" && e) {
                stringified = JSON.stringify(e);
            }
            else {
                stringified = String(e);
            }
        }
        catch (err) {
            stringified = "[unable to stringify input]";
        }
        return `Unknown error ${stringified}`;
    }
}

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return stringify(rnds);
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
const ValidPhaseNames = new Set(["Deserialize", "Serialize", "Retry", "Sign"]);
/**
 * A private implementation of Pipeline.
 * Do not export this class from the package.
 * @internal
 */
class HttpPipeline {
    constructor(policies = []) {
        this._policies = [];
        this._policies = policies;
        this._orderedPolicies = undefined;
    }
    addPolicy(policy, options = {}) {
        if (options.phase && options.afterPhase) {
            throw new Error("Policies inside a phase cannot specify afterPhase.");
        }
        if (options.phase && !ValidPhaseNames.has(options.phase)) {
            throw new Error(`Invalid phase name: ${options.phase}`);
        }
        if (options.afterPhase && !ValidPhaseNames.has(options.afterPhase)) {
            throw new Error(`Invalid afterPhase name: ${options.afterPhase}`);
        }
        this._policies.push({
            policy,
            options,
        });
        this._orderedPolicies = undefined;
    }
    removePolicy(options) {
        const removedPolicies = [];
        this._policies = this._policies.filter((policyDescriptor) => {
            if ((options.name && policyDescriptor.policy.name === options.name) ||
                (options.phase && policyDescriptor.options.phase === options.phase)) {
                removedPolicies.push(policyDescriptor.policy);
                return false;
            }
            else {
                return true;
            }
        });
        this._orderedPolicies = undefined;
        return removedPolicies;
    }
    sendRequest(httpClient, request) {
        const policies = this.getOrderedPolicies();
        const pipeline = policies.reduceRight((next, policy) => {
            return (req) => {
                return policy.sendRequest(req, next);
            };
        }, (req) => httpClient.sendRequest(req));
        return pipeline(request);
    }
    getOrderedPolicies() {
        if (!this._orderedPolicies) {
            this._orderedPolicies = this.orderPolicies();
        }
        return this._orderedPolicies;
    }
    clone() {
        return new HttpPipeline(this._policies);
    }
    static create() {
        return new HttpPipeline();
    }
    orderPolicies() {
        /**
         * The goal of this method is to reliably order pipeline policies
         * based on their declared requirements when they were added.
         *
         * Order is first determined by phase:
         *
         * 1. Serialize Phase
         * 2. Policies not in a phase
         * 3. Deserialize Phase
         * 4. Retry Phase
         * 5. Sign Phase
         *
         * Within each phase, policies are executed in the order
         * they were added unless they were specified to execute
         * before/after other policies or after a particular phase.
         *
         * To determine the final order, we will walk the policy list
         * in phase order multiple times until all dependencies are
         * satisfied.
         *
         * `afterPolicies` are the set of policies that must be
         * executed before a given policy. This requirement is
         * considered satisfied when each of the listed policies
         * have been scheduled.
         *
         * `beforePolicies` are the set of policies that must be
         * executed after a given policy. Since this dependency
         * can be expressed by converting it into a equivalent
         * `afterPolicies` declarations, they are normalized
         * into that form for simplicity.
         *
         * An `afterPhase` dependency is considered satisfied when all
         * policies in that phase have scheduled.
         *
         */
        const result = [];
        // Track all policies we know about.
        const policyMap = new Map();
        function createPhase(name) {
            return {
                name,
                policies: new Set(),
                hasRun: false,
                hasAfterPolicies: false,
            };
        }
        // Track policies for each phase.
        const serializePhase = createPhase("Serialize");
        const noPhase = createPhase("None");
        const deserializePhase = createPhase("Deserialize");
        const retryPhase = createPhase("Retry");
        const signPhase = createPhase("Sign");
        // a list of phases in order
        const orderedPhases = [serializePhase, noPhase, deserializePhase, retryPhase, signPhase];
        // Small helper function to map phase name to each Phase
        function getPhase(phase) {
            if (phase === "Retry") {
                return retryPhase;
            }
            else if (phase === "Serialize") {
                return serializePhase;
            }
            else if (phase === "Deserialize") {
                return deserializePhase;
            }
            else if (phase === "Sign") {
                return signPhase;
            }
            else {
                return noPhase;
            }
        }
        // First walk each policy and create a node to track metadata.
        for (const descriptor of this._policies) {
            const policy = descriptor.policy;
            const options = descriptor.options;
            const policyName = policy.name;
            if (policyMap.has(policyName)) {
                throw new Error("Duplicate policy names not allowed in pipeline");
            }
            const node = {
                policy,
                dependsOn: new Set(),
                dependants: new Set(),
            };
            if (options.afterPhase) {
                node.afterPhase = getPhase(options.afterPhase);
                node.afterPhase.hasAfterPolicies = true;
            }
            policyMap.set(policyName, node);
            const phase = getPhase(options.phase);
            phase.policies.add(node);
        }
        // Now that each policy has a node, connect dependency references.
        for (const descriptor of this._policies) {
            const { policy, options } = descriptor;
            const policyName = policy.name;
            const node = policyMap.get(policyName);
            if (!node) {
                throw new Error(`Missing node for policy ${policyName}`);
            }
            if (options.afterPolicies) {
                for (const afterPolicyName of options.afterPolicies) {
                    const afterNode = policyMap.get(afterPolicyName);
                    if (afterNode) {
                        // Linking in both directions helps later
                        // when we want to notify dependants.
                        node.dependsOn.add(afterNode);
                        afterNode.dependants.add(node);
                    }
                }
            }
            if (options.beforePolicies) {
                for (const beforePolicyName of options.beforePolicies) {
                    const beforeNode = policyMap.get(beforePolicyName);
                    if (beforeNode) {
                        // To execute before another node, make it
                        // depend on the current node.
                        beforeNode.dependsOn.add(node);
                        node.dependants.add(beforeNode);
                    }
                }
            }
        }
        function walkPhase(phase) {
            phase.hasRun = true;
            // Sets iterate in insertion order
            for (const node of phase.policies) {
                if (node.afterPhase && (!node.afterPhase.hasRun || node.afterPhase.policies.size)) {
                    // If this node is waiting on a phase to complete,
                    // we need to skip it for now.
                    // Even if the phase is empty, we should wait for it
                    // to be walked to avoid re-ordering policies.
                    continue;
                }
                if (node.dependsOn.size === 0) {
                    // If there's nothing else we're waiting for, we can
                    // add this policy to the result list.
                    result.push(node.policy);
                    // Notify anything that depends on this policy that
                    // the policy has been scheduled.
                    for (const dependant of node.dependants) {
                        dependant.dependsOn.delete(node);
                    }
                    policyMap.delete(node.policy.name);
                    phase.policies.delete(node);
                }
            }
        }
        function walkPhases() {
            for (const phase of orderedPhases) {
                walkPhase(phase);
                // if the phase isn't complete
                if (phase.policies.size > 0 && phase !== noPhase) {
                    if (!noPhase.hasRun) {
                        // Try running noPhase to see if that unblocks this phase next tick.
                        // This can happen if a phase that happens before noPhase
                        // is waiting on a noPhase policy to complete.
                        walkPhase(noPhase);
                    }
                    // Don't proceed to the next phase until this phase finishes.
                    return;
                }
                if (phase.hasAfterPolicies) {
                    // Run any policies unblocked by this phase
                    walkPhase(noPhase);
                }
            }
        }
        // Iterate until we've put every node in the result list.
        let iteration = 0;
        while (policyMap.size > 0) {
            iteration++;
            const initialResultLength = result.length;
            // Keep walking each phase in order until we can order every node.
            walkPhases();
            // The result list *should* get at least one larger each time
            // after the first full pass.
            // Otherwise, we're going to loop forever.
            if (result.length <= initialResultLength && iteration > 1) {
                throw new Error("Cannot satisfy policy dependencies due to requirements cycle.");
            }
        }
        return result;
    }
}
/**
 * Creates a totally empty pipeline.
 * Useful for testing or creating a custom one.
 */
function createEmptyPipeline() {
    return HttpPipeline.create();
}

// Copyright (c) Microsoft Corporation.
const logger$2 = createClientLogger("core-rest-pipeline");

// Copyright (c) Microsoft Corporation.
const RedactedString = "REDACTED";
// Make sure this list is up-to-date with the one under core/logger/Readme#Keyconcepts
const defaultAllowedHeaderNames = [
    "x-ms-client-request-id",
    "x-ms-return-client-request-id",
    "x-ms-useragent",
    "x-ms-correlation-request-id",
    "x-ms-request-id",
    "client-request-id",
    "ms-cv",
    "return-client-request-id",
    "traceparent",
    "Access-Control-Allow-Credentials",
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Methods",
    "Access-Control-Allow-Origin",
    "Access-Control-Expose-Headers",
    "Access-Control-Max-Age",
    "Access-Control-Request-Headers",
    "Access-Control-Request-Method",
    "Origin",
    "Accept",
    "Accept-Encoding",
    "Cache-Control",
    "Connection",
    "Content-Length",
    "Content-Type",
    "Date",
    "ETag",
    "Expires",
    "If-Match",
    "If-Modified-Since",
    "If-None-Match",
    "If-Unmodified-Since",
    "Last-Modified",
    "Pragma",
    "Request-Id",
    "Retry-After",
    "Server",
    "Transfer-Encoding",
    "User-Agent",
    "WWW-Authenticate",
];
const defaultAllowedQueryParameters = ["api-version"];
/**
 * @internal
 */
class Sanitizer {
    constructor({ additionalAllowedHeaderNames: allowedHeaderNames = [], additionalAllowedQueryParameters: allowedQueryParameters = [], } = {}) {
        allowedHeaderNames = defaultAllowedHeaderNames.concat(allowedHeaderNames);
        allowedQueryParameters = defaultAllowedQueryParameters.concat(allowedQueryParameters);
        this.allowedHeaderNames = new Set(allowedHeaderNames.map((n) => n.toLowerCase()));
        this.allowedQueryParameters = new Set(allowedQueryParameters.map((p) => p.toLowerCase()));
    }
    sanitize(obj) {
        const seen = new Set();
        return JSON.stringify(obj, (key, value) => {
            // Ensure Errors include their interesting non-enumerable members
            if (value instanceof Error) {
                return Object.assign(Object.assign({}, value), { name: value.name, message: value.message });
            }
            if (key === "headers") {
                return this.sanitizeHeaders(value);
            }
            else if (key === "url") {
                return this.sanitizeUrl(value);
            }
            else if (key === "query") {
                return this.sanitizeQuery(value);
            }
            else if (key === "body") {
                // Don't log the request body
                return undefined;
            }
            else if (key === "response") {
                // Don't log response again
                return undefined;
            }
            else if (key === "operationSpec") {
                // When using sendOperationRequest, the request carries a massive
                // field with the autorest spec. No need to log it.
                return undefined;
            }
            else if (Array.isArray(value) || isObject(value)) {
                if (seen.has(value)) {
                    return "[Circular]";
                }
                seen.add(value);
            }
            return value;
        }, 2);
    }
    sanitizeHeaders(obj) {
        const sanitized = {};
        for (const key of Object.keys(obj)) {
            if (this.allowedHeaderNames.has(key.toLowerCase())) {
                sanitized[key] = obj[key];
            }
            else {
                sanitized[key] = RedactedString;
            }
        }
        return sanitized;
    }
    sanitizeQuery(value) {
        if (typeof value !== "object" || value === null) {
            return value;
        }
        const sanitized = {};
        for (const k of Object.keys(value)) {
            if (this.allowedQueryParameters.has(k.toLowerCase())) {
                sanitized[k] = value[k];
            }
            else {
                sanitized[k] = RedactedString;
            }
        }
        return sanitized;
    }
    sanitizeUrl(value) {
        if (typeof value !== "string" || value === null) {
            return value;
        }
        const url = new URL(value);
        if (!url.search) {
            return value;
        }
        for (const [key] of url.searchParams) {
            if (!this.allowedQueryParameters.has(key.toLowerCase())) {
                url.searchParams.set(key, RedactedString);
            }
        }
        return url.toString();
    }
}

// Copyright (c) Microsoft Corporation.
/**
 * The programmatic identifier of the logPolicy.
 */
const logPolicyName = "logPolicy";
/**
 * A policy that logs all requests and responses.
 * @param options - Options to configure logPolicy.
 */
function logPolicy(options = {}) {
    var _a;
    const logger = (_a = options.logger) !== null && _a !== void 0 ? _a : logger$2.info;
    const sanitizer = new Sanitizer({
        additionalAllowedHeaderNames: options.additionalAllowedHeaderNames,
        additionalAllowedQueryParameters: options.additionalAllowedQueryParameters,
    });
    return {
        name: logPolicyName,
        async sendRequest(request, next) {
            if (!logger.enabled) {
                return next(request);
            }
            logger(`Request: ${sanitizer.sanitize(request)}`);
            const response = await next(request);
            logger(`Response status code: ${response.status}`);
            logger(`Headers: ${sanitizer.sanitize(response.headers)}`);
            return response;
        },
    };
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/*
 * NOTE: When moving this file, please update "browser" section in package.json.
 */
/**
 * @internal
 */
function getHeaderName() {
    return "x-ms-useragent";
}
/**
 * @internal
 */
function setPlatformSpecificData(map) {
    const navigator = self.navigator;
    map.set("OS", (navigator.oscpu || navigator.platform).replace(" ", ""));
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
const SDK_VERSION = "1.9.2";
const DEFAULT_RETRY_POLICY_COUNT = 3;

// Copyright (c) Microsoft Corporation.
function getUserAgentString(telemetryInfo) {
    const parts = [];
    for (const [key, value] of telemetryInfo) {
        const token = value ? `${key}/${value}` : key;
        parts.push(token);
    }
    return parts.join(" ");
}
/**
 * @internal
 */
function getUserAgentHeaderName() {
    return getHeaderName();
}
/**
 * @internal
 */
function getUserAgentValue(prefix) {
    const runtimeInfo = new Map();
    runtimeInfo.set("core-rest-pipeline", SDK_VERSION);
    setPlatformSpecificData(runtimeInfo);
    const defaultAgent = getUserAgentString(runtimeInfo);
    const userAgentValue = prefix ? `${prefix} ${defaultAgent}` : defaultAgent;
    return userAgentValue;
}

// Copyright (c) Microsoft Corporation.
const UserAgentHeaderName = getUserAgentHeaderName();
/**
 * The programmatic identifier of the userAgentPolicy.
 */
const userAgentPolicyName = "userAgentPolicy";
/**
 * A policy that sets the User-Agent header (or equivalent) to reflect
 * the library version.
 * @param options - Options to customize the user agent value.
 */
function userAgentPolicy(options = {}) {
    const userAgentValue = getUserAgentValue(options.userAgentPrefix);
    return {
        name: userAgentPolicyName,
        async sendRequest(request, next) {
            if (!request.headers.has(UserAgentHeaderName)) {
                request.headers.set(UserAgentHeaderName, userAgentValue);
            }
            return next(request);
        },
    };
}

// Copyright (c) Microsoft Corporation.
const StandardAbortMessage = "The operation was aborted.";
/**
 * A wrapper for setTimeout that resolves a promise after delayInMs milliseconds.
 * @param delayInMs - The number of milliseconds to be delayed.
 * @param value - The value to be resolved with after a timeout of t milliseconds.
 * @param options - The options for delay - currently abort options
 *                  - abortSignal - The abortSignal associated with containing operation.
 *                  - abortErrorMsg - The abort error message associated with containing operation.
 * @returns Resolved promise
 */
function delay(delayInMs, value, options) {
    return new Promise((resolve, reject) => {
        let timer = undefined;
        let onAborted = undefined;
        const rejectOnAbort = () => {
            return reject(new AbortError((options === null || options === void 0 ? void 0 : options.abortErrorMsg) ? options === null || options === void 0 ? void 0 : options.abortErrorMsg : StandardAbortMessage));
        };
        const removeListeners = () => {
            if ((options === null || options === void 0 ? void 0 : options.abortSignal) && onAborted) {
                options.abortSignal.removeEventListener("abort", onAborted);
            }
        };
        onAborted = () => {
            if (timer) {
                clearTimeout(timer);
            }
            removeListeners();
            return rejectOnAbort();
        };
        if ((options === null || options === void 0 ? void 0 : options.abortSignal) && options.abortSignal.aborted) {
            return rejectOnAbort();
        }
        timer = setTimeout(() => {
            removeListeners();
            resolve(value);
        }, delayInMs);
        if (options === null || options === void 0 ? void 0 : options.abortSignal) {
            options.abortSignal.addEventListener("abort", onAborted);
        }
    });
}
/**
 * @internal
 * @returns the parsed value or undefined if the parsed value is invalid.
 */
function parseHeaderValueAsNumber(response, headerName) {
    const value = response.headers.get(headerName);
    if (!value)
        return;
    const valueAsNum = Number(value);
    if (Number.isNaN(valueAsNum))
        return;
    return valueAsNum;
}

// Copyright (c) Microsoft Corporation.
/**
 * The header that comes back from Azure services representing
 * the amount of time (minimum) to wait to retry (in seconds or timestamp after which we can retry).
 */
const RetryAfterHeader = "Retry-After";
/**
 * The headers that come back from Azure services representing
 * the amount of time (minimum) to wait to retry.
 *
 * "retry-after-ms", "x-ms-retry-after-ms" : milliseconds
 * "Retry-After" : seconds or timestamp
 */
const AllRetryAfterHeaders = ["retry-after-ms", "x-ms-retry-after-ms", RetryAfterHeader];
/**
 * A response is a throttling retry response if it has a throttling status code (429 or 503),
 * as long as one of the [ "Retry-After" or "retry-after-ms" or "x-ms-retry-after-ms" ] headers has a valid value.
 *
 * Returns the `retryAfterInMs` value if the response is a throttling retry response.
 * If not throttling retry response, returns `undefined`.
 *
 * @internal
 */
function getRetryAfterInMs(response) {
    if (!(response && [429, 503].includes(response.status)))
        return undefined;
    try {
        // Headers: "retry-after-ms", "x-ms-retry-after-ms", "Retry-After"
        for (const header of AllRetryAfterHeaders) {
            const retryAfterValue = parseHeaderValueAsNumber(response, header);
            if (retryAfterValue === 0 || retryAfterValue) {
                // "Retry-After" header ==> seconds
                // "retry-after-ms", "x-ms-retry-after-ms" headers ==> milli-seconds
                const multiplyingFactor = header === RetryAfterHeader ? 1000 : 1;
                return retryAfterValue * multiplyingFactor; // in milli-seconds
            }
        }
        // RetryAfterHeader ("Retry-After") has a special case where it might be formatted as a date instead of a number of seconds
        const retryAfterHeader = response.headers.get(RetryAfterHeader);
        if (!retryAfterHeader)
            return;
        const date = Date.parse(retryAfterHeader);
        const diff = date - Date.now();
        // negative diff would mean a date in the past, so retry asap with 0 milliseconds
        return Number.isFinite(diff) ? Math.max(0, diff) : undefined;
    }
    catch (e) {
        return undefined;
    }
}
/**
 * A response is a retry response if it has a throttling status code (429 or 503),
 * as long as one of the [ "Retry-After" or "retry-after-ms" or "x-ms-retry-after-ms" ] headers has a valid value.
 */
function isThrottlingRetryResponse(response) {
    return Number.isFinite(getRetryAfterInMs(response));
}
function throttlingRetryStrategy() {
    return {
        name: "throttlingRetryStrategy",
        retry({ response }) {
            const retryAfterInMs = getRetryAfterInMs(response);
            if (!Number.isFinite(retryAfterInMs)) {
                return { skipStrategy: true };
            }
            return {
                retryAfterInMs,
            };
        },
    };
}

// Copyright (c) Microsoft Corporation.
// intervals are in milliseconds
const DEFAULT_CLIENT_RETRY_INTERVAL = 1000;
const DEFAULT_CLIENT_MAX_RETRY_INTERVAL = 1000 * 64;
/**
 * A retry strategy that retries with an exponentially increasing delay in these two cases:
 * - When there are errors in the underlying transport layer (e.g. DNS lookup failures).
 * - Or otherwise if the outgoing request fails (408, greater or equal than 500, except for 501 and 505).
 */
function exponentialRetryStrategy(options = {}) {
    var _a, _b;
    const retryInterval = (_a = options.retryDelayInMs) !== null && _a !== void 0 ? _a : DEFAULT_CLIENT_RETRY_INTERVAL;
    const maxRetryInterval = (_b = options.maxRetryDelayInMs) !== null && _b !== void 0 ? _b : DEFAULT_CLIENT_MAX_RETRY_INTERVAL;
    let retryAfterInMs = retryInterval;
    return {
        name: "exponentialRetryStrategy",
        retry({ retryCount, response, responseError }) {
            const matchedSystemError = isSystemError(responseError);
            const ignoreSystemErrors = matchedSystemError && options.ignoreSystemErrors;
            const isExponential = isExponentialRetryResponse(response);
            const ignoreExponentialResponse = isExponential && options.ignoreHttpStatusCodes;
            const unknownResponse = response && (isThrottlingRetryResponse(response) || !isExponential);
            if (unknownResponse || ignoreExponentialResponse || ignoreSystemErrors) {
                return { skipStrategy: true };
            }
            if (responseError && !matchedSystemError && !isExponential) {
                return { errorToThrow: responseError };
            }
            // Exponentially increase the delay each time
            const exponentialDelay = retryAfterInMs * Math.pow(2, retryCount);
            // Don't let the delay exceed the maximum
            const clampedExponentialDelay = Math.min(maxRetryInterval, exponentialDelay);
            // Allow the final value to have some "jitter" (within 50% of the delay size) so
            // that retries across multiple clients don't occur simultaneously.
            retryAfterInMs =
                clampedExponentialDelay / 2 + getRandomIntegerInclusive(0, clampedExponentialDelay / 2);
            return { retryAfterInMs };
        },
    };
}
/**
 * A response is a retry response if it has status codes:
 * - 408, or
 * - Greater or equal than 500, except for 501 and 505.
 */
function isExponentialRetryResponse(response) {
    return Boolean(response &&
        response.status !== undefined &&
        (response.status >= 500 || response.status === 408) &&
        response.status !== 501 &&
        response.status !== 505);
}
/**
 * Determines whether an error from a pipeline response was triggered in the network layer.
 */
function isSystemError(err) {
    if (!err) {
        return false;
    }
    return (err.code === "ETIMEDOUT" ||
        err.code === "ESOCKETTIMEDOUT" ||
        err.code === "ECONNREFUSED" ||
        err.code === "ECONNRESET" ||
        err.code === "ENOENT");
}

// Copyright (c) Microsoft Corporation.
const retryPolicyLogger = createClientLogger("core-rest-pipeline retryPolicy");
/**
 * The programmatic identifier of the retryPolicy.
 */
const retryPolicyName = "retryPolicy";
/**
 * retryPolicy is a generic policy to enable retrying requests when certain conditions are met
 */
function retryPolicy(strategies, options = { maxRetries: DEFAULT_RETRY_POLICY_COUNT }) {
    const logger = options.logger || retryPolicyLogger;
    return {
        name: retryPolicyName,
        async sendRequest(request, next) {
            var _a, _b;
            let response;
            let responseError;
            let retryCount = -1;
            // eslint-disable-next-line no-constant-condition
            retryRequest: while (true) {
                retryCount += 1;
                response = undefined;
                responseError = undefined;
                try {
                    logger.info(`Retry ${retryCount}: Attempting to send request`, request.requestId);
                    response = await next(request);
                    logger.info(`Retry ${retryCount}: Received a response from request`, request.requestId);
                }
                catch (e) {
                    logger.error(`Retry ${retryCount}: Received an error from request`, request.requestId);
                    // RestErrors are valid targets for the retry strategies.
                    // If none of the retry strategies can work with them, they will be thrown later in this policy.
                    // If the received error is not a RestError, it is immediately thrown.
                    responseError = e;
                    if (!e || responseError.name !== "RestError") {
                        throw e;
                    }
                    response = responseError.response;
                }
                if ((_a = request.abortSignal) === null || _a === void 0 ? void 0 : _a.aborted) {
                    logger.error(`Retry ${retryCount}: Request aborted.`);
                    const abortError = new AbortError();
                    throw abortError;
                }
                if (retryCount >= ((_b = options.maxRetries) !== null && _b !== void 0 ? _b : DEFAULT_RETRY_POLICY_COUNT)) {
                    logger.info(`Retry ${retryCount}: Maximum retries reached. Returning the last received response, or throwing the last received error.`);
                    if (responseError) {
                        throw responseError;
                    }
                    else if (response) {
                        return response;
                    }
                    else {
                        throw new Error("Maximum retries reached with no response or error to throw");
                    }
                }
                logger.info(`Retry ${retryCount}: Processing ${strategies.length} retry strategies.`);
                strategiesLoop: for (const strategy of strategies) {
                    const strategyLogger = strategy.logger || retryPolicyLogger;
                    strategyLogger.info(`Retry ${retryCount}: Processing retry strategy ${strategy.name}.`);
                    const modifiers = strategy.retry({
                        retryCount,
                        response,
                        responseError,
                    });
                    if (modifiers.skipStrategy) {
                        strategyLogger.info(`Retry ${retryCount}: Skipped.`);
                        continue strategiesLoop;
                    }
                    const { errorToThrow, retryAfterInMs, redirectTo } = modifiers;
                    if (errorToThrow) {
                        strategyLogger.error(`Retry ${retryCount}: Retry strategy ${strategy.name} throws error:`, errorToThrow);
                        throw errorToThrow;
                    }
                    if (retryAfterInMs || retryAfterInMs === 0) {
                        strategyLogger.info(`Retry ${retryCount}: Retry strategy ${strategy.name} retries after ${retryAfterInMs}`);
                        await delay(retryAfterInMs, undefined, { abortSignal: request.abortSignal });
                        continue retryRequest;
                    }
                    if (redirectTo) {
                        strategyLogger.info(`Retry ${retryCount}: Retry strategy ${strategy.name} redirects to ${redirectTo}`);
                        request.url = redirectTo;
                        continue retryRequest;
                    }
                }
                if (responseError) {
                    logger.info(`None of the retry strategies could work with the received error. Throwing it.`);
                    throw responseError;
                }
                if (response) {
                    logger.info(`None of the retry strategies could work with the received response. Returning it.`);
                    return response;
                }
                // If all the retries skip and there's no response,
                // we're still in the retry loop, so a new request will be sent
                // until `maxRetries` is reached.
            }
        },
    };
}

// Copyright (c) Microsoft Corporation.
/**
 * Name of the {@link defaultRetryPolicy}
 */
const defaultRetryPolicyName = "defaultRetryPolicy";
/**
 * A policy that retries according to three strategies:
 * - When the server sends a 429 response with a Retry-After header.
 * - When there are errors in the underlying transport layer (e.g. DNS lookup failures).
 * - Or otherwise if the outgoing request fails, it will retry with an exponentially increasing delay.
 */
function defaultRetryPolicy(options = {}) {
    var _a;
    return {
        name: defaultRetryPolicyName,
        sendRequest: retryPolicy([throttlingRetryStrategy(), exponentialRetryStrategy(options)], {
            maxRetries: (_a = options.maxRetries) !== null && _a !== void 0 ? _a : DEFAULT_RETRY_POLICY_COUNT,
        }).sendRequest,
    };
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/**
 * The programmatic identifier of the formDataPolicy.
 */
const formDataPolicyName = "formDataPolicy";
/**
 * A policy that encodes FormData on the request into the body.
 */
function formDataPolicy() {
    return {
        name: formDataPolicyName,
        async sendRequest(request, next) {
            if (request.formData) {
                const formData = request.formData;
                const requestForm = new FormData();
                for (const formKey of Object.keys(formData)) {
                    const formValue = formData[formKey];
                    if (Array.isArray(formValue)) {
                        for (const subValue of formValue) {
                            requestForm.append(formKey, subValue);
                        }
                    }
                    else {
                        requestForm.append(formKey, formValue);
                    }
                }
                request.body = requestForm;
                request.formData = undefined;
                const contentType = request.headers.get("Content-Type");
                if (contentType && contentType.indexOf("application/x-www-form-urlencoded") !== -1) {
                    request.body = new URLSearchParams(requestForm).toString();
                }
                else if (contentType && contentType.indexOf("multipart/form-data") !== -1) {
                    // browser will automatically apply a suitable content-type header
                    request.headers.delete("Content-Type");
                }
            }
            return next(request);
        },
    };
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/**
 * The programmatic identifier of the setClientRequestIdPolicy.
 */
const setClientRequestIdPolicyName = "setClientRequestIdPolicy";
/**
 * Each PipelineRequest gets a unique id upon creation.
 * This policy passes that unique id along via an HTTP header to enable better
 * telemetry and tracing.
 * @param requestIdHeaderName - The name of the header to pass the request ID to.
 */
function setClientRequestIdPolicy(requestIdHeaderName = "x-ms-client-request-id") {
    return {
        name: setClientRequestIdPolicyName,
        async sendRequest(request, next) {
            if (!request.headers.has(requestIdHeaderName)) {
                request.headers.set(requestIdHeaderName, request.requestId);
            }
            return next(request);
        },
    };
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
const custom = {};

// Copyright (c) Microsoft Corporation.
const errorSanitizer = new Sanitizer();
/**
 * A custom error type for failed pipeline requests.
 */
class RestError extends Error {
    constructor(message, options = {}) {
        super(message);
        this.name = "RestError";
        this.code = options.code;
        this.statusCode = options.statusCode;
        this.request = options.request;
        this.response = options.response;
        Object.setPrototypeOf(this, RestError.prototype);
    }
    /**
     * Logging method for util.inspect in Node
     */
    [custom]() {
        return `RestError: ${this.message} \n ${errorSanitizer.sanitize(this)}`;
    }
}
/**
 * Something went wrong when making the request.
 * This means the actual request failed for some reason,
 * such as a DNS issue or the connection being lost.
 */
RestError.REQUEST_SEND_ERROR = "REQUEST_SEND_ERROR";
/**
 * This means that parsing the response from the server failed.
 * It may have been malformed.
 */
RestError.PARSE_ERROR = "PARSE_ERROR";
/**
 * Typeguard for RestError
 * @param e - Something caught by a catch clause.
 */
function isRestError(e) {
    if (e instanceof RestError) {
        return true;
    }
    return isError(e) && e.name === "RestError";
}

// Copyright (c) Microsoft Corporation.
/**
 * The programmatic identifier of the tracingPolicy.
 */
const tracingPolicyName = "tracingPolicy";
/**
 * A simple policy to create OpenTelemetry Spans for each request made by the pipeline
 * that has SpanOptions with a parent.
 * Requests made without a parent Span will not be recorded.
 * @param options - Options to configure the telemetry logged by the tracing policy.
 */
function tracingPolicy(options = {}) {
    const userAgent = getUserAgentValue(options.userAgentPrefix);
    const tracingClient = tryCreateTracingClient();
    return {
        name: tracingPolicyName,
        async sendRequest(request, next) {
            var _a, _b;
            if (!tracingClient || !((_a = request.tracingOptions) === null || _a === void 0 ? void 0 : _a.tracingContext)) {
                return next(request);
            }
            const { span, tracingContext } = (_b = tryCreateSpan(tracingClient, request, userAgent)) !== null && _b !== void 0 ? _b : {};
            if (!span || !tracingContext) {
                return next(request);
            }
            try {
                const response = await tracingClient.withContext(tracingContext, next, request);
                tryProcessResponse(span, response);
                return response;
            }
            catch (err) {
                tryProcessError(span, err);
                throw err;
            }
        },
    };
}
function tryCreateTracingClient() {
    try {
        return createTracingClient({
            namespace: "",
            packageName: "@azure/core-rest-pipeline",
            packageVersion: SDK_VERSION,
        });
    }
    catch (e) {
        logger$2.warning(`Error when creating the TracingClient: ${getErrorMessage(e)}`);
        return undefined;
    }
}
function tryCreateSpan(tracingClient, request, userAgent) {
    try {
        // As per spec, we do not need to differentiate between HTTP and HTTPS in span name.
        const { span, updatedOptions } = tracingClient.startSpan(`HTTP ${request.method}`, { tracingOptions: request.tracingOptions }, {
            spanKind: "client",
            spanAttributes: {
                "http.method": request.method,
                "http.url": request.url,
                requestId: request.requestId,
            },
        });
        // If the span is not recording, don't do any more work.
        if (!span.isRecording()) {
            span.end();
            return undefined;
        }
        if (userAgent) {
            span.setAttribute("http.user_agent", userAgent);
        }
        // set headers
        const headers = tracingClient.createRequestHeaders(updatedOptions.tracingOptions.tracingContext);
        for (const [key, value] of Object.entries(headers)) {
            request.headers.set(key, value);
        }
        return { span, tracingContext: updatedOptions.tracingOptions.tracingContext };
    }
    catch (e) {
        logger$2.warning(`Skipping creating a tracing span due to an error: ${getErrorMessage(e)}`);
        return undefined;
    }
}
function tryProcessError(span, error) {
    try {
        span.setStatus({
            status: "error",
            error: isError(error) ? error : undefined,
        });
        if (isRestError(error) && error.statusCode) {
            span.setAttribute("http.status_code", error.statusCode);
        }
        span.end();
    }
    catch (e) {
        logger$2.warning(`Skipping tracing span processing due to an error: ${getErrorMessage(e)}`);
    }
}
function tryProcessResponse(span, response) {
    try {
        span.setAttribute("http.status_code", response.status);
        const serviceRequestId = response.headers.get("x-ms-request-id");
        if (serviceRequestId) {
            span.setAttribute("serviceRequestId", serviceRequestId);
        }
        span.setStatus({
            status: "success",
        });
        span.end();
    }
    catch (e) {
        logger$2.warning(`Skipping tracing span processing due to an error: ${getErrorMessage(e)}`);
    }
}

// Copyright (c) Microsoft Corporation.
/**
 * Create a new pipeline with a default set of customizable policies.
 * @param options - Options to configure a custom pipeline.
 */
function createPipelineFromOptions(options) {
    const pipeline = createEmptyPipeline();
    pipeline.addPolicy(formDataPolicy());
    pipeline.addPolicy(userAgentPolicy(options.userAgentOptions));
    pipeline.addPolicy(setClientRequestIdPolicy());
    pipeline.addPolicy(defaultRetryPolicy(options.retryOptions), { phase: "Retry" });
    pipeline.addPolicy(tracingPolicy(options.userAgentOptions), { afterPhase: "Retry" });
    pipeline.addPolicy(logPolicy(options.loggingOptions), { afterPhase: "Sign" });
    return pipeline;
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
function normalizeName(name) {
    return name.toLowerCase();
}
function* headerIterator(map) {
    for (const entry of map.values()) {
        yield [entry.name, entry.value];
    }
}
class HttpHeadersImpl {
    constructor(rawHeaders) {
        this._headersMap = new Map();
        if (rawHeaders) {
            for (const headerName of Object.keys(rawHeaders)) {
                this.set(headerName, rawHeaders[headerName]);
            }
        }
    }
    /**
     * Set a header in this collection with the provided name and value. The name is
     * case-insensitive.
     * @param name - The name of the header to set. This value is case-insensitive.
     * @param value - The value of the header to set.
     */
    set(name, value) {
        this._headersMap.set(normalizeName(name), { name, value: String(value) });
    }
    /**
     * Get the header value for the provided header name, or undefined if no header exists in this
     * collection with the provided name.
     * @param name - The name of the header. This value is case-insensitive.
     */
    get(name) {
        var _a;
        return (_a = this._headersMap.get(normalizeName(name))) === null || _a === void 0 ? void 0 : _a.value;
    }
    /**
     * Get whether or not this header collection contains a header entry for the provided header name.
     * @param name - The name of the header to set. This value is case-insensitive.
     */
    has(name) {
        return this._headersMap.has(normalizeName(name));
    }
    /**
     * Remove the header with the provided headerName.
     * @param name - The name of the header to remove.
     */
    delete(name) {
        this._headersMap.delete(normalizeName(name));
    }
    /**
     * Get the JSON object representation of this HTTP header collection.
     */
    toJSON(options = {}) {
        const result = {};
        if (options.preserveCase) {
            for (const entry of this._headersMap.values()) {
                result[entry.name] = entry.value;
            }
        }
        else {
            for (const [normalizedName, entry] of this._headersMap) {
                result[normalizedName] = entry.value;
            }
        }
        return result;
    }
    /**
     * Get the string representation of this HTTP header collection.
     */
    toString() {
        return JSON.stringify(this.toJSON({ preserveCase: true }));
    }
    /**
     * Iterate over tuples of header [name, value] pairs.
     */
    [Symbol.iterator]() {
        return headerIterator(this._headersMap);
    }
}
/**
 * Creates an object that satisfies the `HttpHeaders` interface.
 * @param rawHeaders - A simple object representing initial headers
 */
function createHttpHeaders(rawHeaders) {
    return new HttpHeadersImpl(rawHeaders);
}

// Copyright (c) Microsoft Corporation.
/**
 * Checks if the body is a NodeReadable stream which is not supported in Browsers
 */
function isNodeReadableStream(body) {
    return body && typeof body.pipe === "function";
}
/**
 * Checks if the body is a ReadableStream supported by browsers
 */
function isReadableStream(body) {
    return Boolean(body &&
        typeof body.getReader === "function" &&
        typeof body.tee === "function");
}
/**
 * A HttpClient implementation that uses window.fetch to send HTTP requests.
 * @internal
 */
class FetchHttpClient {
    /**
     * Makes a request over an underlying transport layer and returns the response.
     * @param request - The request to be made.
     */
    async sendRequest(request) {
        const url = new URL(request.url);
        const isInsecure = url.protocol !== "https:";
        if (isInsecure && !request.allowInsecureConnection) {
            throw new Error(`Cannot connect to ${request.url} while allowInsecureConnection is false.`);
        }
        if (request.proxySettings) {
            throw new Error("HTTP proxy is not supported in browser environment");
        }
        try {
            return await makeRequest(request);
        }
        catch (e) {
            throw getError(e, request);
        }
    }
}
/**
 * Sends a request
 */
async function makeRequest(request) {
    const { abortController, abortControllerCleanup } = setupAbortSignal(request);
    try {
        const headers = buildFetchHeaders(request.headers);
        const requestBody = buildRequestBody(request);
        /**
         * Developers of the future:
         * Do not set redirect: "manual" as part
         * of request options.
         * It will not work as you expect.
         */
        const response = await fetch(request.url, {
            body: requestBody,
            method: request.method,
            headers: headers,
            signal: abortController.signal,
            credentials: request.withCredentials ? "include" : "same-origin",
            cache: "no-store",
        });
        return buildPipelineResponse(response, request);
    }
    finally {
        if (abortControllerCleanup) {
            abortControllerCleanup();
        }
    }
}
/**
 * Creates a pipeline response from a Fetch response;
 */
async function buildPipelineResponse(httpResponse, request) {
    var _a, _b;
    const headers = buildPipelineHeaders(httpResponse);
    const response = {
        request,
        headers,
        status: httpResponse.status,
    };
    const bodyStream = isReadableStream(httpResponse.body)
        ? buildBodyStream(httpResponse.body, request.onDownloadProgress)
        : httpResponse.body;
    if (
    // Value of POSITIVE_INFINITY in streamResponseStatusCodes is considered as any status code
    ((_a = request.streamResponseStatusCodes) === null || _a === void 0 ? void 0 : _a.has(Number.POSITIVE_INFINITY)) ||
        ((_b = request.streamResponseStatusCodes) === null || _b === void 0 ? void 0 : _b.has(response.status))) {
        if (request.enableBrowserStreams) {
            response.browserStreamBody = bodyStream !== null && bodyStream !== void 0 ? bodyStream : undefined;
        }
        else {
            const responseStream = new Response(bodyStream);
            response.blobBody = responseStream.blob();
        }
    }
    else {
        const responseStream = new Response(bodyStream);
        response.bodyAsText = await responseStream.text();
    }
    return response;
}
function setupAbortSignal(request) {
    const abortController = new AbortController();
    // Cleanup function
    let abortControllerCleanup;
    /**
     * Attach an abort listener to the request
     */
    let abortListener;
    if (request.abortSignal) {
        if (request.abortSignal.aborted) {
            throw new AbortError("The operation was aborted.");
        }
        abortListener = (event) => {
            if (event.type === "abort") {
                abortController.abort();
            }
        };
        request.abortSignal.addEventListener("abort", abortListener);
        abortControllerCleanup = () => {
            var _a;
            if (abortListener) {
                (_a = request.abortSignal) === null || _a === void 0 ? void 0 : _a.removeEventListener("abort", abortListener);
            }
        };
    }
    // If a timeout was passed, call the abort signal once the time elapses
    if (request.timeout > 0) {
        setTimeout(() => {
            abortController.abort();
        }, request.timeout);
    }
    return { abortController, abortControllerCleanup };
}
/**
 * Gets the specific error
 */
function getError(e, request) {
    var _a;
    if (e && (e === null || e === void 0 ? void 0 : e.name) === "AbortError") {
        return e;
    }
    else {
        return new RestError(`Error sending request: ${e.message}`, {
            code: (_a = e === null || e === void 0 ? void 0 : e.code) !== null && _a !== void 0 ? _a : RestError.REQUEST_SEND_ERROR,
            request,
        });
    }
}
/**
 * Converts PipelineRequest headers to Fetch headers
 */
function buildFetchHeaders(pipelineHeaders) {
    const headers = new Headers();
    for (const [name, value] of pipelineHeaders) {
        headers.append(name, value);
    }
    return headers;
}
function buildPipelineHeaders(httpResponse) {
    const responseHeaders = createHttpHeaders();
    for (const [name, value] of httpResponse.headers) {
        responseHeaders.set(name, value);
    }
    return responseHeaders;
}
function buildRequestBody(request) {
    const body = typeof request.body === "function" ? request.body() : request.body;
    if (isNodeReadableStream(body)) {
        throw new Error("Node streams are not supported in browser environment.");
    }
    return isReadableStream(body) ? buildBodyStream(body, request.onUploadProgress) : body;
}
/**
 * Reads the request/response original stream and stream it through a new
 * ReadableStream, this is done to be able to report progress in a way that
 * all modern browsers support. TransformStreams would be an alternative,
 * however they are not yet supported by all browsers i.e Firefox
 */
function buildBodyStream(readableStream, onProgress) {
    let loadedBytes = 0;
    // If the current browser supports pipeThrough we use a TransformStream
    // to report progress
    if (isTransformStreamSupported(readableStream)) {
        return readableStream.pipeThrough(new TransformStream({
            transform(chunk, controller) {
                if (chunk === null) {
                    controller.terminate();
                    return;
                }
                controller.enqueue(chunk);
                loadedBytes += chunk.length;
                if (onProgress) {
                    onProgress({ loadedBytes });
                }
            },
        }));
    }
    else {
        // If we can't use transform streams, wrap the original stream in a new readable stream
        // and use pull to enqueue each chunk and report progress.
        const reader = readableStream.getReader();
        return new ReadableStream({
            async pull(controller) {
                var _a;
                const { done, value } = await reader.read();
                // When no more data needs to be consumed, break the reading
                if (done || !value) {
                    // Close the stream
                    controller.close();
                    reader.releaseLock();
                    return;
                }
                loadedBytes += (_a = value === null || value === void 0 ? void 0 : value.length) !== null && _a !== void 0 ? _a : 0;
                // Enqueue the next data chunk into our target stream
                controller.enqueue(value);
                if (onProgress) {
                    onProgress({ loadedBytes });
                }
            },
        });
    }
}
/**
 * Create a new HttpClient instance for the browser environment.
 * @internal
 */
function createFetchHttpClient() {
    return new FetchHttpClient();
}
function isTransformStreamSupported(readableStream) {
    return readableStream.pipeThrough !== undefined && self.TransformStream !== undefined;
}

// Copyright (c) Microsoft Corporation.
/**
 * Create the correct HttpClient for the current environment.
 */
function createDefaultHttpClient() {
    return createFetchHttpClient();
}

// Copyright (c) Microsoft Corporation.
/**
 * Generated Universally Unique Identifier
 *
 * @returns RFC4122 v4 UUID.
 * @internal
 */
function generateUuid() {
    return v4();
}

// Copyright (c) Microsoft Corporation.
class PipelineRequestImpl {
    constructor(options) {
        var _a, _b, _c, _d, _e, _f, _g;
        this.url = options.url;
        this.body = options.body;
        this.headers = (_a = options.headers) !== null && _a !== void 0 ? _a : createHttpHeaders();
        this.method = (_b = options.method) !== null && _b !== void 0 ? _b : "GET";
        this.timeout = (_c = options.timeout) !== null && _c !== void 0 ? _c : 0;
        this.formData = options.formData;
        this.disableKeepAlive = (_d = options.disableKeepAlive) !== null && _d !== void 0 ? _d : false;
        this.proxySettings = options.proxySettings;
        this.streamResponseStatusCodes = options.streamResponseStatusCodes;
        this.withCredentials = (_e = options.withCredentials) !== null && _e !== void 0 ? _e : false;
        this.abortSignal = options.abortSignal;
        this.tracingOptions = options.tracingOptions;
        this.onUploadProgress = options.onUploadProgress;
        this.onDownloadProgress = options.onDownloadProgress;
        this.requestId = options.requestId || generateUuid();
        this.allowInsecureConnection = (_f = options.allowInsecureConnection) !== null && _f !== void 0 ? _f : false;
        this.enableBrowserStreams = (_g = options.enableBrowserStreams) !== null && _g !== void 0 ? _g : false;
    }
}
/**
 * Creates a new pipeline request with the given options.
 * This method is to allow for the easy setting of default values and not required.
 * @param options - The options to create the request with.
 */
function createPipelineRequest(options) {
    return new PipelineRequestImpl(options);
}

// Copyright (c) Microsoft Corporation.
// Default options for the cycler if none are provided
const DEFAULT_CYCLER_OPTIONS = {
    forcedRefreshWindowInMs: 1000,
    retryIntervalInMs: 3000,
    refreshWindowInMs: 1000 * 60 * 2, // Start refreshing 2m before expiry
};
/**
 * Converts an an unreliable access token getter (which may resolve with null)
 * into an AccessTokenGetter by retrying the unreliable getter in a regular
 * interval.
 *
 * @param getAccessToken - A function that produces a promise of an access token that may fail by returning null.
 * @param retryIntervalInMs - The time (in milliseconds) to wait between retry attempts.
 * @param refreshTimeout - The timestamp after which the refresh attempt will fail, throwing an exception.
 * @returns - A promise that, if it resolves, will resolve with an access token.
 */
async function beginRefresh(getAccessToken, retryIntervalInMs, refreshTimeout) {
    // This wrapper handles exceptions gracefully as long as we haven't exceeded
    // the timeout.
    async function tryGetAccessToken() {
        if (Date.now() < refreshTimeout) {
            try {
                return await getAccessToken();
            }
            catch (_a) {
                return null;
            }
        }
        else {
            const finalToken = await getAccessToken();
            // Timeout is up, so throw if it's still null
            if (finalToken === null) {
                throw new Error("Failed to refresh access token.");
            }
            return finalToken;
        }
    }
    let token = await tryGetAccessToken();
    while (token === null) {
        await delay(retryIntervalInMs);
        token = await tryGetAccessToken();
    }
    return token;
}
/**
 * Creates a token cycler from a credential, scopes, and optional settings.
 *
 * A token cycler represents a way to reliably retrieve a valid access token
 * from a TokenCredential. It will handle initializing the token, refreshing it
 * when it nears expiration, and synchronizes refresh attempts to avoid
 * concurrency hazards.
 *
 * @param credential - the underlying TokenCredential that provides the access
 * token
 * @param tokenCyclerOptions - optionally override default settings for the cycler
 *
 * @returns - a function that reliably produces a valid access token
 */
function createTokenCycler(credential, tokenCyclerOptions) {
    let refreshWorker = null;
    let token = null;
    let tenantId;
    const options = Object.assign(Object.assign({}, DEFAULT_CYCLER_OPTIONS), tokenCyclerOptions);
    /**
     * This little holder defines several predicates that we use to construct
     * the rules of refreshing the token.
     */
    const cycler = {
        /**
         * Produces true if a refresh job is currently in progress.
         */
        get isRefreshing() {
            return refreshWorker !== null;
        },
        /**
         * Produces true if the cycler SHOULD refresh (we are within the refresh
         * window and not already refreshing)
         */
        get shouldRefresh() {
            var _a;
            return (!cycler.isRefreshing &&
                ((_a = token === null || token === void 0 ? void 0 : token.expiresOnTimestamp) !== null && _a !== void 0 ? _a : 0) - options.refreshWindowInMs < Date.now());
        },
        /**
         * Produces true if the cycler MUST refresh (null or nearly-expired
         * token).
         */
        get mustRefresh() {
            return (token === null || token.expiresOnTimestamp - options.forcedRefreshWindowInMs < Date.now());
        },
    };
    /**
     * Starts a refresh job or returns the existing job if one is already
     * running.
     */
    function refresh(scopes, getTokenOptions) {
        var _a;
        if (!cycler.isRefreshing) {
            // We bind `scopes` here to avoid passing it around a lot
            const tryGetAccessToken = () => credential.getToken(scopes, getTokenOptions);
            // Take advantage of promise chaining to insert an assignment to `token`
            // before the refresh can be considered done.
            refreshWorker = beginRefresh(tryGetAccessToken, options.retryIntervalInMs, 
            // If we don't have a token, then we should timeout immediately
            (_a = token === null || token === void 0 ? void 0 : token.expiresOnTimestamp) !== null && _a !== void 0 ? _a : Date.now())
                .then((_token) => {
                refreshWorker = null;
                token = _token;
                tenantId = getTokenOptions.tenantId;
                return token;
            })
                .catch((reason) => {
                // We also should reset the refresher if we enter a failed state.  All
                // existing awaiters will throw, but subsequent requests will start a
                // new retry chain.
                refreshWorker = null;
                token = null;
                tenantId = undefined;
                throw reason;
            });
        }
        return refreshWorker;
    }
    return async (scopes, tokenOptions) => {
        //
        // Simple rules:
        // - If we MUST refresh, then return the refresh task, blocking
        //   the pipeline until a token is available.
        // - If we SHOULD refresh, then run refresh but don't return it
        //   (we can still use the cached token).
        // - Return the token, since it's fine if we didn't return in
        //   step 1.
        //
        // If the tenantId passed in token options is different to the one we have
        // Or if we are in claim challenge and the token was rejected and a new access token need to be issued, we need to
        // refresh the token with the new tenantId or token.
        const mustRefresh = tenantId !== tokenOptions.tenantId || Boolean(tokenOptions.claims) || cycler.mustRefresh;
        if (mustRefresh)
            return refresh(scopes, tokenOptions);
        if (cycler.shouldRefresh) {
            refresh(scopes, tokenOptions);
        }
        return token;
    };
}

// Copyright (c) Microsoft Corporation.
/**
 * The programmatic identifier of the bearerTokenAuthenticationPolicy.
 */
const bearerTokenAuthenticationPolicyName = "bearerTokenAuthenticationPolicy";
/**
 * Default authorize request handler
 */
async function defaultAuthorizeRequest(options) {
    const { scopes, getAccessToken, request } = options;
    const getTokenOptions = {
        abortSignal: request.abortSignal,
        tracingOptions: request.tracingOptions,
    };
    const accessToken = await getAccessToken(scopes, getTokenOptions);
    if (accessToken) {
        options.request.headers.set("Authorization", `Bearer ${accessToken.token}`);
    }
}
/**
 * We will retrieve the challenge only if the response status code was 401,
 * and if the response contained the header "WWW-Authenticate" with a non-empty value.
 */
function getChallenge(response) {
    const challenge = response.headers.get("WWW-Authenticate");
    if (response.status === 401 && challenge) {
        return challenge;
    }
    return;
}
/**
 * A policy that can request a token from a TokenCredential implementation and
 * then apply it to the Authorization header of a request as a Bearer token.
 */
function bearerTokenAuthenticationPolicy(options) {
    var _a;
    const { credential, scopes, challengeCallbacks } = options;
    const logger = options.logger || logger$2;
    const callbacks = Object.assign({ authorizeRequest: (_a = challengeCallbacks === null || challengeCallbacks === void 0 ? void 0 : challengeCallbacks.authorizeRequest) !== null && _a !== void 0 ? _a : defaultAuthorizeRequest, authorizeRequestOnChallenge: challengeCallbacks === null || challengeCallbacks === void 0 ? void 0 : challengeCallbacks.authorizeRequestOnChallenge }, challengeCallbacks);
    // This function encapsulates the entire process of reliably retrieving the token
    // The options are left out of the public API until there's demand to configure this.
    // Remember to extend `BearerTokenAuthenticationPolicyOptions` with `TokenCyclerOptions`
    // in order to pass through the `options` object.
    const getAccessToken = credential
        ? createTokenCycler(credential /* , options */)
        : () => Promise.resolve(null);
    return {
        name: bearerTokenAuthenticationPolicyName,
        /**
         * If there's no challenge parameter:
         * - It will try to retrieve the token using the cache, or the credential's getToken.
         * - Then it will try the next policy with or without the retrieved token.
         *
         * It uses the challenge parameters to:
         * - Skip a first attempt to get the token from the credential if there's no cached token,
         *   since it expects the token to be retrievable only after the challenge.
         * - Prepare the outgoing request if the `prepareRequest` method has been provided.
         * - Send an initial request to receive the challenge if it fails.
         * - Process a challenge if the response contains it.
         * - Retrieve a token with the challenge information, then re-send the request.
         */
        async sendRequest(request, next) {
            if (!request.url.toLowerCase().startsWith("https://")) {
                throw new Error("Bearer token authentication is not permitted for non-TLS protected (non-https) URLs.");
            }
            await callbacks.authorizeRequest({
                scopes: Array.isArray(scopes) ? scopes : [scopes],
                request,
                getAccessToken,
                logger,
            });
            let response;
            let error;
            try {
                response = await next(request);
            }
            catch (err) {
                error = err;
                response = err.response;
            }
            if (callbacks.authorizeRequestOnChallenge &&
                (response === null || response === void 0 ? void 0 : response.status) === 401 &&
                getChallenge(response)) {
                // processes challenge
                const shouldSendRequest = await callbacks.authorizeRequestOnChallenge({
                    scopes: Array.isArray(scopes) ? scopes : [scopes],
                    request,
                    response,
                    getAccessToken,
                    logger,
                });
                if (shouldSendRequest) {
                    return next(request);
                }
            }
            if (error) {
                throw error;
            }
            else {
                return response;
            }
        },
    };
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
function createConfigurationErrorMessage(tenantId) {
    return `The current credential is not configured to acquire tokens for tenant ${tenantId}. To enable acquiring tokens for this tenant add it to the AdditionallyAllowedTenants on the credential options, or add "*" to AdditionallyAllowedTenants to allow acquiring tokens for any tenant.`;
}
/**
 * Of getToken contains a tenantId, this functions allows picking this tenantId as the appropriate for authentication,
 * unless multitenant authentication has been disabled through the AZURE_IDENTITY_DISABLE_MULTITENANTAUTH (on Node.js),
 * or unless the original tenant Id is `adfs`.
 * @internal
 */
function processMultiTenantRequest(tenantId, getTokenOptions, additionallyAllowedTenantIds = []) {
    var _a;
    let resolvedTenantId;
    if (tenantId === "adfs") {
        resolvedTenantId = tenantId;
    }
    else {
        resolvedTenantId = (_a = getTokenOptions === null || getTokenOptions === void 0 ? void 0 : getTokenOptions.tenantId) !== null && _a !== void 0 ? _a : tenantId;
    }
    if (tenantId &&
        resolvedTenantId !== tenantId &&
        !additionallyAllowedTenantIds.includes("*") &&
        !additionallyAllowedTenantIds.some((t) => t.localeCompare(resolvedTenantId) === 0)) {
        throw new Error(createConfigurationErrorMessage(tenantId));
    }
    return resolvedTenantId;
}

// Copyright (c) Microsoft Corporation.
/**
 * @internal
 */
function resolveAddionallyAllowedTenantIds(additionallyAllowedTenants) {
    if (!additionallyAllowedTenants || additionallyAllowedTenants.length === 0) {
        return [];
    }
    if (additionallyAllowedTenants.includes("*")) {
        return ALL_TENANTS;
    }
    return additionallyAllowedTenants;
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/**
 * Default key used to access the XML attributes.
 */
const XML_ATTRKEY = "$";
/**
 * Default key used to access the XML value content.
 */
const XML_CHARKEY = "_";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/**
 * A type guard for a primitive response body.
 * @param value - Value to test
 *
 * @internal
 */
function isPrimitiveBody(value, mapperTypeName) {
    return (mapperTypeName !== "Composite" &&
        mapperTypeName !== "Dictionary" &&
        (typeof value === "string" ||
            typeof value === "number" ||
            typeof value === "boolean" ||
            (mapperTypeName === null || mapperTypeName === void 0 ? void 0 : mapperTypeName.match(/^(Date|DateTime|DateTimeRfc1123|UnixTime|ByteArray|Base64Url)$/i)) !==
                null ||
            value === undefined ||
            value === null));
}
/**
 * Maps the response as follows:
 * - wraps the response body if needed (typically if its type is primitive).
 * - returns null if the combination of the headers and the body is empty.
 * - otherwise, returns the combination of the headers and the body.
 *
 * @param responseObject - a representation of the parsed response
 * @returns the response that will be returned to the user which can be null and/or wrapped
 *
 * @internal
 */
function handleNullableResponseAndWrappableBody(responseObject) {
    const combinedHeadersAndBody = Object.assign(Object.assign({}, responseObject.headers), responseObject.body);
    if (responseObject.hasNullableType &&
        Object.getOwnPropertyNames(combinedHeadersAndBody).length === 0) {
        return responseObject.shouldWrapBody ? { body: null } : null;
    }
    else {
        return responseObject.shouldWrapBody
            ? Object.assign(Object.assign({}, responseObject.headers), { body: responseObject.body }) : combinedHeadersAndBody;
    }
}
/**
 * Take a `FullOperationResponse` and turn it into a flat
 * response object to hand back to the consumer.
 * @param fullResponse - The processed response from the operation request
 * @param responseSpec - The response map from the OperationSpec
 *
 * @internal
 */
function flattenResponse(fullResponse, responseSpec) {
    var _a, _b;
    const parsedHeaders = fullResponse.parsedHeaders;
    // head methods never have a body, but we return a boolean set to body property
    // to indicate presence/absence of the resource
    if (fullResponse.request.method === "HEAD") {
        return Object.assign(Object.assign({}, parsedHeaders), { body: fullResponse.parsedBody });
    }
    const bodyMapper = responseSpec && responseSpec.bodyMapper;
    const isNullable = Boolean(bodyMapper === null || bodyMapper === void 0 ? void 0 : bodyMapper.nullable);
    const expectedBodyTypeName = bodyMapper === null || bodyMapper === void 0 ? void 0 : bodyMapper.type.name;
    /** If the body is asked for, we look at the expected body type to handle it */
    if (expectedBodyTypeName === "Stream") {
        return Object.assign(Object.assign({}, parsedHeaders), { blobBody: fullResponse.blobBody, readableStreamBody: fullResponse.readableStreamBody });
    }
    const modelProperties = (expectedBodyTypeName === "Composite" &&
        bodyMapper.type.modelProperties) ||
        {};
    const isPageableResponse = Object.keys(modelProperties).some((k) => modelProperties[k].serializedName === "");
    if (expectedBodyTypeName === "Sequence" || isPageableResponse) {
        const arrayResponse = (_a = fullResponse.parsedBody) !== null && _a !== void 0 ? _a : [];
        for (const key of Object.keys(modelProperties)) {
            if (modelProperties[key].serializedName) {
                arrayResponse[key] = (_b = fullResponse.parsedBody) === null || _b === void 0 ? void 0 : _b[key];
            }
        }
        if (parsedHeaders) {
            for (const key of Object.keys(parsedHeaders)) {
                arrayResponse[key] = parsedHeaders[key];
            }
        }
        return isNullable &&
            !fullResponse.parsedBody &&
            !parsedHeaders &&
            Object.getOwnPropertyNames(modelProperties).length === 0
            ? null
            : arrayResponse;
    }
    return handleNullableResponseAndWrappableBody({
        body: fullResponse.parsedBody,
        headers: parsedHeaders,
        hasNullableType: isNullable,
        shouldWrapBody: isPrimitiveBody(fullResponse.parsedBody, expectedBodyTypeName),
    });
}

// Copyright (c) Microsoft Corporation.
/**
 * Known types of Mappers
 */
const MapperTypeNames = {
    Base64Url: "Base64Url",
    Boolean: "Boolean",
    ByteArray: "ByteArray",
    Composite: "Composite",
    Date: "Date",
    DateTime: "DateTime",
    DateTimeRfc1123: "DateTimeRfc1123",
    Dictionary: "Dictionary",
    Enum: "Enum",
    Number: "Number",
    Object: "Object",
    Sequence: "Sequence",
    String: "String",
    Stream: "Stream",
    TimeSpan: "TimeSpan",
    UnixTime: "UnixTime",
};

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/**
 * @internal
 * Retrieves the value to use for a given operation argument
 * @param operationArguments - The arguments passed from the generated client
 * @param parameter - The parameter description
 * @param fallbackObject - If something isn't found in the arguments bag, look here.
 *  Generally used to look at the service client properties.
 */
function getOperationArgumentValueFromParameter(operationArguments, parameter, fallbackObject) {
    let parameterPath = parameter.parameterPath;
    const parameterMapper = parameter.mapper;
    let value;
    if (typeof parameterPath === "string") {
        parameterPath = [parameterPath];
    }
    if (Array.isArray(parameterPath)) {
        if (parameterPath.length > 0) {
            if (parameterMapper.isConstant) {
                value = parameterMapper.defaultValue;
            }
            else {
                let propertySearchResult = getPropertyFromParameterPath(operationArguments, parameterPath);
                if (!propertySearchResult.propertyFound && fallbackObject) {
                    propertySearchResult = getPropertyFromParameterPath(fallbackObject, parameterPath);
                }
                let useDefaultValue = false;
                if (!propertySearchResult.propertyFound) {
                    useDefaultValue =
                        parameterMapper.required ||
                            (parameterPath[0] === "options" && parameterPath.length === 2);
                }
                value = useDefaultValue ? parameterMapper.defaultValue : propertySearchResult.propertyValue;
            }
        }
    }
    else {
        if (parameterMapper.required) {
            value = {};
        }
        for (const propertyName in parameterPath) {
            const propertyMapper = parameterMapper.type.modelProperties[propertyName];
            const propertyPath = parameterPath[propertyName];
            const propertyValue = getOperationArgumentValueFromParameter(operationArguments, {
                parameterPath: propertyPath,
                mapper: propertyMapper,
            }, fallbackObject);
            if (propertyValue !== undefined) {
                if (!value) {
                    value = {};
                }
                value[propertyName] = propertyValue;
            }
        }
    }
    return value;
}
function getPropertyFromParameterPath(parent, parameterPath) {
    const result = { propertyFound: false };
    let i = 0;
    for (; i < parameterPath.length; ++i) {
        const parameterPathPart = parameterPath[i];
        // Make sure to check inherited properties too, so don't use hasOwnProperty().
        if (parent && parameterPathPart in parent) {
            parent = parent[parameterPathPart];
        }
        else {
            break;
        }
    }
    if (i === parameterPath.length) {
        result.propertyValue = parent;
        result.propertyFound = true;
    }
    return result;
}
const operationRequestMap = new WeakMap();
function getOperationRequestInfo(request) {
    let info = operationRequestMap.get(request);
    if (!info) {
        info = {};
        operationRequestMap.set(request, info);
    }
    return info;
}

// Copyright (c) Microsoft Corporation.
const defaultJsonContentTypes = ["application/json", "text/json"];
const defaultXmlContentTypes = ["application/xml", "application/atom+xml"];
/**
 * The programmatic identifier of the deserializationPolicy.
 */
const deserializationPolicyName = "deserializationPolicy";
/**
 * This policy handles parsing out responses according to OperationSpecs on the request.
 */
function deserializationPolicy(options = {}) {
    var _a, _b, _c, _d, _e, _f, _g;
    const jsonContentTypes = (_b = (_a = options.expectedContentTypes) === null || _a === void 0 ? void 0 : _a.json) !== null && _b !== void 0 ? _b : defaultJsonContentTypes;
    const xmlContentTypes = (_d = (_c = options.expectedContentTypes) === null || _c === void 0 ? void 0 : _c.xml) !== null && _d !== void 0 ? _d : defaultXmlContentTypes;
    const parseXML = options.parseXML;
    const serializerOptions = options.serializerOptions;
    const updatedOptions = {
        xml: {
            rootName: (_e = serializerOptions === null || serializerOptions === void 0 ? void 0 : serializerOptions.xml.rootName) !== null && _e !== void 0 ? _e : "",
            includeRoot: (_f = serializerOptions === null || serializerOptions === void 0 ? void 0 : serializerOptions.xml.includeRoot) !== null && _f !== void 0 ? _f : false,
            xmlCharKey: (_g = serializerOptions === null || serializerOptions === void 0 ? void 0 : serializerOptions.xml.xmlCharKey) !== null && _g !== void 0 ? _g : XML_CHARKEY,
        },
    };
    return {
        name: deserializationPolicyName,
        async sendRequest(request, next) {
            const response = await next(request);
            return deserializeResponseBody(jsonContentTypes, xmlContentTypes, response, updatedOptions, parseXML);
        },
    };
}
function getOperationResponseMap(parsedResponse) {
    let result;
    const request = parsedResponse.request;
    const operationInfo = getOperationRequestInfo(request);
    const operationSpec = operationInfo === null || operationInfo === void 0 ? void 0 : operationInfo.operationSpec;
    if (operationSpec) {
        if (!(operationInfo === null || operationInfo === void 0 ? void 0 : operationInfo.operationResponseGetter)) {
            result = operationSpec.responses[parsedResponse.status];
        }
        else {
            result = operationInfo === null || operationInfo === void 0 ? void 0 : operationInfo.operationResponseGetter(operationSpec, parsedResponse);
        }
    }
    return result;
}
function shouldDeserializeResponse(parsedResponse) {
    const request = parsedResponse.request;
    const operationInfo = getOperationRequestInfo(request);
    const shouldDeserialize = operationInfo === null || operationInfo === void 0 ? void 0 : operationInfo.shouldDeserialize;
    let result;
    if (shouldDeserialize === undefined) {
        result = true;
    }
    else if (typeof shouldDeserialize === "boolean") {
        result = shouldDeserialize;
    }
    else {
        result = shouldDeserialize(parsedResponse);
    }
    return result;
}
async function deserializeResponseBody(jsonContentTypes, xmlContentTypes, response, options, parseXML) {
    const parsedResponse = await parse(jsonContentTypes, xmlContentTypes, response, options, parseXML);
    if (!shouldDeserializeResponse(parsedResponse)) {
        return parsedResponse;
    }
    const operationInfo = getOperationRequestInfo(parsedResponse.request);
    const operationSpec = operationInfo === null || operationInfo === void 0 ? void 0 : operationInfo.operationSpec;
    if (!operationSpec || !operationSpec.responses) {
        return parsedResponse;
    }
    const responseSpec = getOperationResponseMap(parsedResponse);
    const { error, shouldReturnResponse } = handleErrorResponse(parsedResponse, operationSpec, responseSpec);
    if (error) {
        throw error;
    }
    else if (shouldReturnResponse) {
        return parsedResponse;
    }
    // An operation response spec does exist for current status code, so
    // use it to deserialize the response.
    if (responseSpec) {
        if (responseSpec.bodyMapper) {
            let valueToDeserialize = parsedResponse.parsedBody;
            if (operationSpec.isXML && responseSpec.bodyMapper.type.name === MapperTypeNames.Sequence) {
                valueToDeserialize =
                    typeof valueToDeserialize === "object"
                        ? valueToDeserialize[responseSpec.bodyMapper.xmlElementName]
                        : [];
            }
            try {
                parsedResponse.parsedBody = operationSpec.serializer.deserialize(responseSpec.bodyMapper, valueToDeserialize, "operationRes.parsedBody");
            }
            catch (deserializeError) {
                const restError = new RestError(`Error ${deserializeError} occurred in deserializing the responseBody - ${parsedResponse.bodyAsText}`, {
                    statusCode: parsedResponse.status,
                    request: parsedResponse.request,
                    response: parsedResponse,
                });
                throw restError;
            }
        }
        else if (operationSpec.httpMethod === "HEAD") {
            // head methods never have a body, but we return a boolean to indicate presence/absence of the resource
            parsedResponse.parsedBody = response.status >= 200 && response.status < 300;
        }
        if (responseSpec.headersMapper) {
            parsedResponse.parsedHeaders = operationSpec.serializer.deserialize(responseSpec.headersMapper, parsedResponse.headers.toJSON(), "operationRes.parsedHeaders");
        }
    }
    return parsedResponse;
}
function isOperationSpecEmpty(operationSpec) {
    const expectedStatusCodes = Object.keys(operationSpec.responses);
    return (expectedStatusCodes.length === 0 ||
        (expectedStatusCodes.length === 1 && expectedStatusCodes[0] === "default"));
}
function handleErrorResponse(parsedResponse, operationSpec, responseSpec) {
    var _a;
    const isSuccessByStatus = 200 <= parsedResponse.status && parsedResponse.status < 300;
    const isExpectedStatusCode = isOperationSpecEmpty(operationSpec)
        ? isSuccessByStatus
        : !!responseSpec;
    if (isExpectedStatusCode) {
        if (responseSpec) {
            if (!responseSpec.isError) {
                return { error: null, shouldReturnResponse: false };
            }
        }
        else {
            return { error: null, shouldReturnResponse: false };
        }
    }
    const errorResponseSpec = responseSpec !== null && responseSpec !== void 0 ? responseSpec : operationSpec.responses.default;
    const initialErrorMessage = ((_a = parsedResponse.request.streamResponseStatusCodes) === null || _a === void 0 ? void 0 : _a.has(parsedResponse.status))
        ? `Unexpected status code: ${parsedResponse.status}`
        : parsedResponse.bodyAsText;
    const error = new RestError(initialErrorMessage, {
        statusCode: parsedResponse.status,
        request: parsedResponse.request,
        response: parsedResponse,
    });
    // If the item failed but there's no error spec or default spec to deserialize the error,
    // we should fail so we just throw the parsed response
    if (!errorResponseSpec) {
        throw error;
    }
    const defaultBodyMapper = errorResponseSpec.bodyMapper;
    const defaultHeadersMapper = errorResponseSpec.headersMapper;
    try {
        // If error response has a body, try to deserialize it using default body mapper.
        // Then try to extract error code & message from it
        if (parsedResponse.parsedBody) {
            const parsedBody = parsedResponse.parsedBody;
            let deserializedError;
            if (defaultBodyMapper) {
                let valueToDeserialize = parsedBody;
                if (operationSpec.isXML && defaultBodyMapper.type.name === MapperTypeNames.Sequence) {
                    valueToDeserialize = [];
                    const elementName = defaultBodyMapper.xmlElementName;
                    if (typeof parsedBody === "object" && elementName) {
                        valueToDeserialize = parsedBody[elementName];
                    }
                }
                deserializedError = operationSpec.serializer.deserialize(defaultBodyMapper, valueToDeserialize, "error.response.parsedBody");
            }
            const internalError = parsedBody.error || deserializedError || parsedBody;
            error.code = internalError.code;
            if (internalError.message) {
                error.message = internalError.message;
            }
            if (defaultBodyMapper) {
                error.response.parsedBody = deserializedError;
            }
        }
        // If error response has headers, try to deserialize it using default header mapper
        if (parsedResponse.headers && defaultHeadersMapper) {
            error.response.parsedHeaders =
                operationSpec.serializer.deserialize(defaultHeadersMapper, parsedResponse.headers.toJSON(), "operationRes.parsedHeaders");
        }
    }
    catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody - "${parsedResponse.bodyAsText}" for the default response.`;
    }
    return { error, shouldReturnResponse: false };
}
async function parse(jsonContentTypes, xmlContentTypes, operationResponse, opts, parseXML) {
    var _a;
    if (!((_a = operationResponse.request.streamResponseStatusCodes) === null || _a === void 0 ? void 0 : _a.has(operationResponse.status)) &&
        operationResponse.bodyAsText) {
        const text = operationResponse.bodyAsText;
        const contentType = operationResponse.headers.get("Content-Type") || "";
        const contentComponents = !contentType
            ? []
            : contentType.split(";").map((component) => component.toLowerCase());
        try {
            if (contentComponents.length === 0 ||
                contentComponents.some((component) => jsonContentTypes.indexOf(component) !== -1)) {
                operationResponse.parsedBody = JSON.parse(text);
                return operationResponse;
            }
            else if (contentComponents.some((component) => xmlContentTypes.indexOf(component) !== -1)) {
                if (!parseXML) {
                    throw new Error("Parsing XML not supported.");
                }
                const body = await parseXML(text, opts.xml);
                operationResponse.parsedBody = body;
                return operationResponse;
            }
        }
        catch (err) {
            const msg = `Error "${err}" occurred while parsing the response body - ${operationResponse.bodyAsText}.`;
            const errCode = err.code || RestError.PARSE_ERROR;
            const e = new RestError(msg, {
                code: errCode,
                statusCode: operationResponse.status,
                request: operationResponse.request,
                response: operationResponse,
            });
            throw e;
        }
    }
    return operationResponse;
}

// Copyright (c) Microsoft Corporation.
/**
 * Gets the list of status codes for streaming responses.
 * @internal
 */
function getStreamingResponseStatusCodes(operationSpec) {
    const result = new Set();
    for (const statusCode in operationSpec.responses) {
        const operationResponse = operationSpec.responses[statusCode];
        if (operationResponse.bodyMapper &&
            operationResponse.bodyMapper.type.name === MapperTypeNames.Stream) {
            result.add(Number(statusCode));
        }
    }
    return result;
}
/**
 * Get the path to this parameter's value as a dotted string (a.b.c).
 * @param parameter - The parameter to get the path string for.
 * @returns The path to this parameter's value as a dotted string.
 * @internal
 */
function getPathStringFromParameter(parameter) {
    const { parameterPath, mapper } = parameter;
    let result;
    if (typeof parameterPath === "string") {
        result = parameterPath;
    }
    else if (Array.isArray(parameterPath)) {
        result = parameterPath.join(".");
    }
    else {
        result = mapper.serializedName;
    }
    return result;
}

// Copyright (c) Microsoft Corporation.
/**
 * The programmatic identifier of the serializationPolicy.
 */
const serializationPolicyName = "serializationPolicy";
/**
 * This policy handles assembling the request body and headers using
 * an OperationSpec and OperationArguments on the request.
 */
function serializationPolicy(options = {}) {
    const stringifyXML = options.stringifyXML;
    return {
        name: serializationPolicyName,
        async sendRequest(request, next) {
            const operationInfo = getOperationRequestInfo(request);
            const operationSpec = operationInfo === null || operationInfo === void 0 ? void 0 : operationInfo.operationSpec;
            const operationArguments = operationInfo === null || operationInfo === void 0 ? void 0 : operationInfo.operationArguments;
            if (operationSpec && operationArguments) {
                serializeHeaders(request, operationArguments, operationSpec);
                serializeRequestBody(request, operationArguments, operationSpec, stringifyXML);
            }
            return next(request);
        },
    };
}
/**
 * @internal
 */
function serializeHeaders(request, operationArguments, operationSpec) {
    var _a, _b;
    if (operationSpec.headerParameters) {
        for (const headerParameter of operationSpec.headerParameters) {
            let headerValue = getOperationArgumentValueFromParameter(operationArguments, headerParameter);
            if ((headerValue !== null && headerValue !== undefined) || headerParameter.mapper.required) {
                headerValue = operationSpec.serializer.serialize(headerParameter.mapper, headerValue, getPathStringFromParameter(headerParameter));
                const headerCollectionPrefix = headerParameter.mapper
                    .headerCollectionPrefix;
                if (headerCollectionPrefix) {
                    for (const key of Object.keys(headerValue)) {
                        request.headers.set(headerCollectionPrefix + key, headerValue[key]);
                    }
                }
                else {
                    request.headers.set(headerParameter.mapper.serializedName || getPathStringFromParameter(headerParameter), headerValue);
                }
            }
        }
    }
    const customHeaders = (_b = (_a = operationArguments.options) === null || _a === void 0 ? void 0 : _a.requestOptions) === null || _b === void 0 ? void 0 : _b.customHeaders;
    if (customHeaders) {
        for (const customHeaderName of Object.keys(customHeaders)) {
            request.headers.set(customHeaderName, customHeaders[customHeaderName]);
        }
    }
}
/**
 * @internal
 */
function serializeRequestBody(request, operationArguments, operationSpec, stringifyXML = function () {
    throw new Error("XML serialization unsupported!");
}) {
    var _a, _b, _c, _d, _e;
    const serializerOptions = (_a = operationArguments.options) === null || _a === void 0 ? void 0 : _a.serializerOptions;
    const updatedOptions = {
        xml: {
            rootName: (_b = serializerOptions === null || serializerOptions === void 0 ? void 0 : serializerOptions.xml.rootName) !== null && _b !== void 0 ? _b : "",
            includeRoot: (_c = serializerOptions === null || serializerOptions === void 0 ? void 0 : serializerOptions.xml.includeRoot) !== null && _c !== void 0 ? _c : false,
            xmlCharKey: (_d = serializerOptions === null || serializerOptions === void 0 ? void 0 : serializerOptions.xml.xmlCharKey) !== null && _d !== void 0 ? _d : XML_CHARKEY,
        },
    };
    const xmlCharKey = updatedOptions.xml.xmlCharKey;
    if (operationSpec.requestBody && operationSpec.requestBody.mapper) {
        request.body = getOperationArgumentValueFromParameter(operationArguments, operationSpec.requestBody);
        const bodyMapper = operationSpec.requestBody.mapper;
        const { required, serializedName, xmlName, xmlElementName, xmlNamespace, xmlNamespacePrefix, nullable, } = bodyMapper;
        const typeName = bodyMapper.type.name;
        try {
            if ((request.body !== undefined && request.body !== null) ||
                (nullable && request.body === null) ||
                required) {
                const requestBodyParameterPathString = getPathStringFromParameter(operationSpec.requestBody);
                request.body = operationSpec.serializer.serialize(bodyMapper, request.body, requestBodyParameterPathString, updatedOptions);
                const isStream = typeName === MapperTypeNames.Stream;
                if (operationSpec.isXML) {
                    const xmlnsKey = xmlNamespacePrefix ? `xmlns:${xmlNamespacePrefix}` : "xmlns";
                    const value = getXmlValueWithNamespace(xmlNamespace, xmlnsKey, typeName, request.body, updatedOptions);
                    if (typeName === MapperTypeNames.Sequence) {
                        request.body = stringifyXML(prepareXMLRootList(value, xmlElementName || xmlName || serializedName, xmlnsKey, xmlNamespace), { rootName: xmlName || serializedName, xmlCharKey });
                    }
                    else if (!isStream) {
                        request.body = stringifyXML(value, {
                            rootName: xmlName || serializedName,
                            xmlCharKey,
                        });
                    }
                }
                else if (typeName === MapperTypeNames.String &&
                    (((_e = operationSpec.contentType) === null || _e === void 0 ? void 0 : _e.match("text/plain")) || operationSpec.mediaType === "text")) {
                    // the String serializer has validated that request body is a string
                    // so just send the string.
                    return;
                }
                else if (!isStream) {
                    request.body = JSON.stringify(request.body);
                }
            }
        }
        catch (error) {
            throw new Error(`Error "${error.message}" occurred in serializing the payload - ${JSON.stringify(serializedName, undefined, "  ")}.`);
        }
    }
    else if (operationSpec.formDataParameters && operationSpec.formDataParameters.length > 0) {
        request.formData = {};
        for (const formDataParameter of operationSpec.formDataParameters) {
            const formDataParameterValue = getOperationArgumentValueFromParameter(operationArguments, formDataParameter);
            if (formDataParameterValue !== undefined && formDataParameterValue !== null) {
                const formDataParameterPropertyName = formDataParameter.mapper.serializedName || getPathStringFromParameter(formDataParameter);
                request.formData[formDataParameterPropertyName] = operationSpec.serializer.serialize(formDataParameter.mapper, formDataParameterValue, getPathStringFromParameter(formDataParameter), updatedOptions);
            }
        }
    }
}
/**
 * Adds an xml namespace to the xml serialized object if needed, otherwise it just returns the value itself
 */
function getXmlValueWithNamespace(xmlNamespace, xmlnsKey, typeName, serializedValue, options) {
    // Composite and Sequence schemas already got their root namespace set during serialization
    // We just need to add xmlns to the other schema types
    if (xmlNamespace && !["Composite", "Sequence", "Dictionary"].includes(typeName)) {
        const result = {};
        result[options.xml.xmlCharKey] = serializedValue;
        result[XML_ATTRKEY] = { [xmlnsKey]: xmlNamespace };
        return result;
    }
    return serializedValue;
}
function prepareXMLRootList(obj, elementName, xmlNamespaceKey, xmlNamespace) {
    if (!Array.isArray(obj)) {
        obj = [obj];
    }
    if (!xmlNamespaceKey || !xmlNamespace) {
        return { [elementName]: obj };
    }
    const result = { [elementName]: obj };
    result[XML_ATTRKEY] = { [xmlNamespaceKey]: xmlNamespace };
    return result;
}

// Copyright (c) Microsoft Corporation.
/**
 * Creates a new Pipeline for use with a Service Client.
 * Adds in deserializationPolicy by default.
 * Also adds in bearerTokenAuthenticationPolicy if passed a TokenCredential.
 * @param options - Options to customize the created pipeline.
 */
function createClientPipeline(options = {}) {
    const pipeline = createPipelineFromOptions(options !== null && options !== void 0 ? options : {});
    if (options.credentialOptions) {
        pipeline.addPolicy(bearerTokenAuthenticationPolicy({
            credential: options.credentialOptions.credential,
            scopes: options.credentialOptions.credentialScopes,
        }));
    }
    pipeline.addPolicy(serializationPolicy(options.serializationOptions), { phase: "Serialize" });
    pipeline.addPolicy(deserializationPolicy(options.deserializationOptions), {
        phase: "Deserialize",
    });
    return pipeline;
}

// Copyright (c) Microsoft Corporation.
let cachedHttpClient;
function getCachedDefaultHttpClient() {
    if (!cachedHttpClient) {
        cachedHttpClient = createDefaultHttpClient();
    }
    return cachedHttpClient;
}

// Copyright (c) Microsoft Corporation.
const CollectionFormatToDelimiterMap = {
    CSV: ",",
    SSV: " ",
    Multi: "Multi",
    TSV: "\t",
    Pipes: "|",
};
function getRequestUrl(baseUri, operationSpec, operationArguments, fallbackObject) {
    const urlReplacements = calculateUrlReplacements(operationSpec, operationArguments, fallbackObject);
    let isAbsolutePath = false;
    let requestUrl = replaceAll(baseUri, urlReplacements);
    if (operationSpec.path) {
        let path = replaceAll(operationSpec.path, urlReplacements);
        // QUIRK: sometimes we get a path component like /{nextLink}
        // which may be a fully formed URL with a leading /. In that case, we should
        // remove the leading /
        if (operationSpec.path === "/{nextLink}" && path.startsWith("/")) {
            path = path.substring(1);
        }
        // QUIRK: sometimes we get a path component like {nextLink}
        // which may be a fully formed URL. In that case, we should
        // ignore the baseUri.
        if (isAbsoluteUrl(path)) {
            requestUrl = path;
            isAbsolutePath = true;
        }
        else {
            requestUrl = appendPath(requestUrl, path);
        }
    }
    const { queryParams, sequenceParams } = calculateQueryParameters(operationSpec, operationArguments, fallbackObject);
    /**
     * Notice that this call sets the `noOverwrite` parameter to true if the `requestUrl`
     * is an absolute path. This ensures that existing query parameter values in `requestUrl`
     * do not get overwritten. On the other hand when `requestUrl` is not absolute path, it
     * is still being built so there is nothing to overwrite.
     */
    requestUrl = appendQueryParams(requestUrl, queryParams, sequenceParams, isAbsolutePath);
    return requestUrl;
}
function replaceAll(input, replacements) {
    let result = input;
    for (const [searchValue, replaceValue] of replacements) {
        result = result.split(searchValue).join(replaceValue);
    }
    return result;
}
function calculateUrlReplacements(operationSpec, operationArguments, fallbackObject) {
    var _a;
    const result = new Map();
    if ((_a = operationSpec.urlParameters) === null || _a === void 0 ? void 0 : _a.length) {
        for (const urlParameter of operationSpec.urlParameters) {
            let urlParameterValue = getOperationArgumentValueFromParameter(operationArguments, urlParameter, fallbackObject);
            const parameterPathString = getPathStringFromParameter(urlParameter);
            urlParameterValue = operationSpec.serializer.serialize(urlParameter.mapper, urlParameterValue, parameterPathString);
            if (!urlParameter.skipEncoding) {
                urlParameterValue = encodeURIComponent(urlParameterValue);
            }
            result.set(`{${urlParameter.mapper.serializedName || parameterPathString}}`, urlParameterValue);
        }
    }
    return result;
}
function isAbsoluteUrl(url) {
    return url.includes("://");
}
function appendPath(url, pathToAppend) {
    if (!pathToAppend) {
        return url;
    }
    const parsedUrl = new URL(url);
    let newPath = parsedUrl.pathname;
    if (!newPath.endsWith("/")) {
        newPath = `${newPath}/`;
    }
    if (pathToAppend.startsWith("/")) {
        pathToAppend = pathToAppend.substring(1);
    }
    const searchStart = pathToAppend.indexOf("?");
    if (searchStart !== -1) {
        const path = pathToAppend.substring(0, searchStart);
        const search = pathToAppend.substring(searchStart + 1);
        newPath = newPath + path;
        if (search) {
            parsedUrl.search = parsedUrl.search ? `${parsedUrl.search}&${search}` : search;
        }
    }
    else {
        newPath = newPath + pathToAppend;
    }
    parsedUrl.pathname = newPath;
    return parsedUrl.toString();
}
function calculateQueryParameters(operationSpec, operationArguments, fallbackObject) {
    var _a;
    const result = new Map();
    const sequenceParams = new Set();
    if ((_a = operationSpec.queryParameters) === null || _a === void 0 ? void 0 : _a.length) {
        for (const queryParameter of operationSpec.queryParameters) {
            if (queryParameter.mapper.type.name === "Sequence" && queryParameter.mapper.serializedName) {
                sequenceParams.add(queryParameter.mapper.serializedName);
            }
            let queryParameterValue = getOperationArgumentValueFromParameter(operationArguments, queryParameter, fallbackObject);
            if ((queryParameterValue !== undefined && queryParameterValue !== null) ||
                queryParameter.mapper.required) {
                queryParameterValue = operationSpec.serializer.serialize(queryParameter.mapper, queryParameterValue, getPathStringFromParameter(queryParameter));
                const delimiter = queryParameter.collectionFormat
                    ? CollectionFormatToDelimiterMap[queryParameter.collectionFormat]
                    : "";
                if (Array.isArray(queryParameterValue)) {
                    // replace null and undefined
                    queryParameterValue = queryParameterValue.map((item) => {
                        if (item === null || item === undefined) {
                            return "";
                        }
                        return item;
                    });
                }
                if (queryParameter.collectionFormat === "Multi" && queryParameterValue.length === 0) {
                    continue;
                }
                else if (Array.isArray(queryParameterValue) &&
                    (queryParameter.collectionFormat === "SSV" || queryParameter.collectionFormat === "TSV")) {
                    queryParameterValue = queryParameterValue.join(delimiter);
                }
                if (!queryParameter.skipEncoding) {
                    if (Array.isArray(queryParameterValue)) {
                        queryParameterValue = queryParameterValue.map((item) => {
                            return encodeURIComponent(item);
                        });
                    }
                    else {
                        queryParameterValue = encodeURIComponent(queryParameterValue);
                    }
                }
                // Join pipes and CSV *after* encoding, or the server will be upset.
                if (Array.isArray(queryParameterValue) &&
                    (queryParameter.collectionFormat === "CSV" || queryParameter.collectionFormat === "Pipes")) {
                    queryParameterValue = queryParameterValue.join(delimiter);
                }
                result.set(queryParameter.mapper.serializedName || getPathStringFromParameter(queryParameter), queryParameterValue);
            }
        }
    }
    return {
        queryParams: result,
        sequenceParams,
    };
}
function simpleParseQueryParams(queryString) {
    const result = new Map();
    if (!queryString || queryString[0] !== "?") {
        return result;
    }
    // remove the leading ?
    queryString = queryString.slice(1);
    const pairs = queryString.split("&");
    for (const pair of pairs) {
        const [name, value] = pair.split("=", 2);
        const existingValue = result.get(name);
        if (existingValue) {
            if (Array.isArray(existingValue)) {
                existingValue.push(value);
            }
            else {
                result.set(name, [existingValue, value]);
            }
        }
        else {
            result.set(name, value);
        }
    }
    return result;
}
/** @internal */
function appendQueryParams(url, queryParams, sequenceParams, noOverwrite = false) {
    if (queryParams.size === 0) {
        return url;
    }
    const parsedUrl = new URL(url);
    // QUIRK: parsedUrl.searchParams will have their name/value pairs decoded, which
    // can change their meaning to the server, such as in the case of a SAS signature.
    // To avoid accidentally un-encoding a query param, we parse the key/values ourselves
    const combinedParams = simpleParseQueryParams(parsedUrl.search);
    for (const [name, value] of queryParams) {
        const existingValue = combinedParams.get(name);
        if (Array.isArray(existingValue)) {
            if (Array.isArray(value)) {
                existingValue.push(...value);
                const valueSet = new Set(existingValue);
                combinedParams.set(name, Array.from(valueSet));
            }
            else {
                existingValue.push(value);
            }
        }
        else if (existingValue) {
            if (Array.isArray(value)) {
                value.unshift(existingValue);
            }
            else if (sequenceParams.has(name)) {
                combinedParams.set(name, [existingValue, value]);
            }
            if (!noOverwrite) {
                combinedParams.set(name, value);
            }
        }
        else {
            combinedParams.set(name, value);
        }
    }
    const searchPieces = [];
    for (const [name, value] of combinedParams) {
        if (typeof value === "string") {
            searchPieces.push(`${name}=${value}`);
        }
        else if (Array.isArray(value)) {
            // QUIRK: If we get an array of values, include multiple key/value pairs
            for (const subValue of value) {
                searchPieces.push(`${name}=${subValue}`);
            }
        }
        else {
            searchPieces.push(`${name}=${value}`);
        }
    }
    // QUIRK: we have to set search manually as searchParams will encode comma when it shouldn't.
    parsedUrl.search = searchPieces.length ? `?${searchPieces.join("&")}` : "";
    return parsedUrl.toString();
}

// Copyright (c) Microsoft Corporation.
const logger$1 = createClientLogger("core-client");

// Copyright (c) Microsoft Corporation.
/**
 * Initializes a new instance of the ServiceClient.
 */
class ServiceClient {
    /**
     * The ServiceClient constructor
     * @param credential - The credentials used for authentication with the service.
     * @param options - The service client options that govern the behavior of the client.
     */
    constructor(options = {}) {
        var _a, _b;
        this._requestContentType = options.requestContentType;
        this._endpoint = (_a = options.endpoint) !== null && _a !== void 0 ? _a : options.baseUri;
        if (options.baseUri) {
            logger$1.warning("The baseUri option for SDK Clients has been deprecated, please use endpoint instead.");
        }
        this._allowInsecureConnection = options.allowInsecureConnection;
        this._httpClient = options.httpClient || getCachedDefaultHttpClient();
        this.pipeline = options.pipeline || createDefaultPipeline(options);
        if ((_b = options.additionalPolicies) === null || _b === void 0 ? void 0 : _b.length) {
            for (const { policy, position } of options.additionalPolicies) {
                // Sign happens after Retry and is commonly needed to occur
                // before policies that intercept post-retry.
                const afterPhase = position === "perRetry" ? "Sign" : undefined;
                this.pipeline.addPolicy(policy, {
                    afterPhase,
                });
            }
        }
    }
    /**
     * Send the provided httpRequest.
     */
    async sendRequest(request) {
        return this.pipeline.sendRequest(this._httpClient, request);
    }
    /**
     * Send an HTTP request that is populated using the provided OperationSpec.
     * @typeParam T - The typed result of the request, based on the OperationSpec.
     * @param operationArguments - The arguments that the HTTP request's templated values will be populated from.
     * @param operationSpec - The OperationSpec to use to populate the httpRequest.
     */
    async sendOperationRequest(operationArguments, operationSpec) {
        const endpoint = operationSpec.baseUrl || this._endpoint;
        if (!endpoint) {
            throw new Error("If operationSpec.baseUrl is not specified, then the ServiceClient must have a endpoint string property that contains the base URL to use.");
        }
        // Templatized URLs sometimes reference properties on the ServiceClient child class,
        // so we have to pass `this` below in order to search these properties if they're
        // not part of OperationArguments
        const url = getRequestUrl(endpoint, operationSpec, operationArguments, this);
        const request = createPipelineRequest({
            url,
        });
        request.method = operationSpec.httpMethod;
        const operationInfo = getOperationRequestInfo(request);
        operationInfo.operationSpec = operationSpec;
        operationInfo.operationArguments = operationArguments;
        const contentType = operationSpec.contentType || this._requestContentType;
        if (contentType && operationSpec.requestBody) {
            request.headers.set("Content-Type", contentType);
        }
        const options = operationArguments.options;
        if (options) {
            const requestOptions = options.requestOptions;
            if (requestOptions) {
                if (requestOptions.timeout) {
                    request.timeout = requestOptions.timeout;
                }
                if (requestOptions.onUploadProgress) {
                    request.onUploadProgress = requestOptions.onUploadProgress;
                }
                if (requestOptions.onDownloadProgress) {
                    request.onDownloadProgress = requestOptions.onDownloadProgress;
                }
                if (requestOptions.shouldDeserialize !== undefined) {
                    operationInfo.shouldDeserialize = requestOptions.shouldDeserialize;
                }
                if (requestOptions.allowInsecureConnection) {
                    request.allowInsecureConnection = true;
                }
            }
            if (options.abortSignal) {
                request.abortSignal = options.abortSignal;
            }
            if (options.tracingOptions) {
                request.tracingOptions = options.tracingOptions;
            }
        }
        if (this._allowInsecureConnection) {
            request.allowInsecureConnection = true;
        }
        if (request.streamResponseStatusCodes === undefined) {
            request.streamResponseStatusCodes = getStreamingResponseStatusCodes(operationSpec);
        }
        try {
            const rawResponse = await this.sendRequest(request);
            const flatResponse = flattenResponse(rawResponse, operationSpec.responses[rawResponse.status]);
            if (options === null || options === void 0 ? void 0 : options.onResponse) {
                options.onResponse(rawResponse, flatResponse);
            }
            return flatResponse;
        }
        catch (error) {
            if (typeof error === "object" && (error === null || error === void 0 ? void 0 : error.response)) {
                const rawResponse = error.response;
                const flatResponse = flattenResponse(rawResponse, operationSpec.responses[error.statusCode] || operationSpec.responses["default"]);
                error.details = flatResponse;
                if (options === null || options === void 0 ? void 0 : options.onResponse) {
                    options.onResponse(rawResponse, flatResponse, error);
                }
            }
            throw error;
        }
    }
}
function createDefaultPipeline(options) {
    const credentialScopes = getCredentialScopes(options);
    const credentialOptions = options.credential && credentialScopes
        ? { credentialScopes, credential: options.credential }
        : undefined;
    return createClientPipeline(Object.assign(Object.assign({}, options), { credentialOptions }));
}
function getCredentialScopes(options) {
    if (options.credentialScopes) {
        const scopes = options.credentialScopes;
        return Array.isArray(scopes)
            ? scopes.map((scope) => new URL(scope).toString())
            : new URL(scopes).toString();
    }
    if (options.endpoint) {
        return `${options.endpoint}/.default`;
    }
    if (options.baseUri) {
        return `${options.baseUri}/.default`;
    }
    if (options.credential && !options.credentialScopes) {
        throw new Error(`When using credentials, the ServiceClientOptions must contain either a endpoint or a credentialScopes. Unable to create a bearerTokenAuthenticationPolicy`);
    }
    return undefined;
}

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
function getIdentityTokenEndpointSuffix(tenantId) {
    if (tenantId === "adfs") {
        return "oauth2/token";
    }
    else {
        return "oauth2/v2.0/token";
    }
}

// Copyright (c) Microsoft Corporation.
/**
 * Given a token response, return the expiration timestamp as the number of milliseconds from the Unix epoch.
 * @param body - A parsed response body from the authentication endpoint.
 */
function parseExpiresOn(body) {
    if (typeof body.expires_on === "number") {
        return body.expires_on * 1000;
    }
    if (typeof body.expires_on === "string") {
        const asNumber = +body.expires_on;
        if (!isNaN(asNumber)) {
            return asNumber * 1000;
        }
        const asDate = Date.parse(body.expires_on);
        if (!isNaN(asDate)) {
            return asDate;
        }
    }
    if (typeof body.expires_in === "number") {
        return Date.now() + body.expires_in * 1000;
    }
    throw new Error(`Failed to parse token expiration from body. expires_in="${body.expires_in}", expires_on="${body.expires_on}"`);
}

// Copyright (c) Microsoft Corporation.
const noCorrelationId = "noCorrelationId";
/**
 * @internal
 */
function getIdentityClientAuthorityHost(options) {
    // The authorityHost can come from options or from the AZURE_AUTHORITY_HOST environment variable.
    let authorityHost = options === null || options === void 0 ? void 0 : options.authorityHost;
    // The AZURE_AUTHORITY_HOST environment variable can only be provided in Node.js.
    if (isNode) {
        authorityHost = authorityHost !== null && authorityHost !== void 0 ? authorityHost : process.env.AZURE_AUTHORITY_HOST;
    }
    // If the authorityHost is not provided, we use the default one from the public cloud: https://login.microsoftonline.com
    return authorityHost !== null && authorityHost !== void 0 ? authorityHost : DefaultAuthorityHost;
}
/**
 * The network module used by the Identity credentials.
 *
 * It allows for credentials to abort any pending request independently of the MSAL flow,
 * by calling to the `abortRequests()` method.
 *
 */
class IdentityClient extends ServiceClient {
    constructor(options) {
        var _a, _b;
        const packageDetails = `azsdk-js-identity/${SDK_VERSION$1}`;
        const userAgentPrefix = ((_a = options === null || options === void 0 ? void 0 : options.userAgentOptions) === null || _a === void 0 ? void 0 : _a.userAgentPrefix)
            ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
            : `${packageDetails}`;
        const baseUri = getIdentityClientAuthorityHost(options);
        if (!baseUri.startsWith("https:")) {
            throw new Error("The authorityHost address must use the 'https' protocol.");
        }
        super(Object.assign(Object.assign({ requestContentType: "application/json; charset=utf-8", retryOptions: {
                maxRetries: 3,
            } }, options), { userAgentOptions: {
                userAgentPrefix,
            }, baseUri }));
        this.authorityHost = baseUri;
        this.abortControllers = new Map();
        this.allowLoggingAccountIdentifiers = (_b = options === null || options === void 0 ? void 0 : options.loggingOptions) === null || _b === void 0 ? void 0 : _b.allowLoggingAccountIdentifiers;
    }
    async sendTokenRequest(request) {
        logger$3.info(`IdentityClient: sending token request to [${request.url}]`);
        const response = await this.sendRequest(request);
        if (response.bodyAsText && (response.status === 200 || response.status === 201)) {
            const parsedBody = JSON.parse(response.bodyAsText);
            if (!parsedBody.access_token) {
                return null;
            }
            this.logIdentifiers(response);
            const token = {
                accessToken: {
                    token: parsedBody.access_token,
                    expiresOnTimestamp: parseExpiresOn(parsedBody),
                },
                refreshToken: parsedBody.refresh_token,
            };
            logger$3.info(`IdentityClient: [${request.url}] token acquired, expires on ${token.accessToken.expiresOnTimestamp}`);
            return token;
        }
        else {
            const error = new AuthenticationError(response.status, response.bodyAsText);
            logger$3.warning(`IdentityClient: authentication error. HTTP status: ${response.status}, ${error.errorResponse.errorDescription}`);
            throw error;
        }
    }
    async refreshAccessToken(tenantId, clientId, scopes, refreshToken, clientSecret, options = {}) {
        if (refreshToken === undefined) {
            return null;
        }
        logger$3.info(`IdentityClient: refreshing access token with client ID: ${clientId}, scopes: ${scopes} started`);
        const refreshParams = {
            grant_type: "refresh_token",
            client_id: clientId,
            refresh_token: refreshToken,
            scope: scopes,
        };
        if (clientSecret !== undefined) {
            refreshParams.client_secret = clientSecret;
        }
        const query = new URLSearchParams(refreshParams);
        return tracingClient.withSpan("IdentityClient.refreshAccessToken", options, async (updatedOptions) => {
            try {
                const urlSuffix = getIdentityTokenEndpointSuffix(tenantId);
                const request = createPipelineRequest({
                    url: `${this.authorityHost}/${tenantId}/${urlSuffix}`,
                    method: "POST",
                    body: query.toString(),
                    abortSignal: options.abortSignal,
                    headers: createHttpHeaders({
                        Accept: "application/json",
                        "Content-Type": "application/x-www-form-urlencoded",
                    }),
                    tracingOptions: updatedOptions.tracingOptions,
                });
                const response = await this.sendTokenRequest(request);
                logger$3.info(`IdentityClient: refreshed token for client ID: ${clientId}`);
                return response;
            }
            catch (err) {
                if (err.name === AuthenticationErrorName &&
                    err.errorResponse.error === "interaction_required") {
                    // It's likely that the refresh token has expired, so
                    // return null so that the credential implementation will
                    // initiate the authentication flow again.
                    logger$3.info(`IdentityClient: interaction required for client ID: ${clientId}`);
                    return null;
                }
                else {
                    logger$3.warning(`IdentityClient: failed refreshing token for client ID: ${clientId}: ${err}`);
                    throw err;
                }
            }
        });
    }
    // Here is a custom layer that allows us to abort requests that go through MSAL,
    // since MSAL doesn't allow us to pass options all the way through.
    generateAbortSignal(correlationId) {
        const controller = new AbortController$1();
        const controllers = this.abortControllers.get(correlationId) || [];
        controllers.push(controller);
        this.abortControllers.set(correlationId, controllers);
        const existingOnAbort = controller.signal.onabort;
        controller.signal.onabort = (...params) => {
            this.abortControllers.set(correlationId, undefined);
            if (existingOnAbort) {
                existingOnAbort(...params);
            }
        };
        return controller.signal;
    }
    abortRequests(correlationId) {
        const key = correlationId || noCorrelationId;
        const controllers = [
            ...(this.abortControllers.get(key) || []),
            // MSAL passes no correlation ID to the get requests...
            ...(this.abortControllers.get(noCorrelationId) || []),
        ];
        if (!controllers.length) {
            return;
        }
        for (const controller of controllers) {
            controller.abort();
        }
        this.abortControllers.set(key, undefined);
    }
    getCorrelationId(options) {
        var _a;
        const parameter = (_a = options === null || options === void 0 ? void 0 : options.body) === null || _a === void 0 ? void 0 : _a.split("&").map((part) => part.split("=")).find(([key]) => key === "client-request-id");
        return parameter && parameter.length ? parameter[1] || noCorrelationId : noCorrelationId;
    }
    // The MSAL network module methods follow
    async sendGetRequestAsync(url, options) {
        const request = createPipelineRequest({
            url,
            method: "GET",
            body: options === null || options === void 0 ? void 0 : options.body,
            headers: createHttpHeaders(options === null || options === void 0 ? void 0 : options.headers),
            abortSignal: this.generateAbortSignal(noCorrelationId),
        });
        const response = await this.sendRequest(request);
        this.logIdentifiers(response);
        return {
            body: response.bodyAsText ? JSON.parse(response.bodyAsText) : undefined,
            headers: response.headers.toJSON(),
            status: response.status,
        };
    }
    async sendPostRequestAsync(url, options) {
        const request = createPipelineRequest({
            url,
            method: "POST",
            body: options === null || options === void 0 ? void 0 : options.body,
            headers: createHttpHeaders(options === null || options === void 0 ? void 0 : options.headers),
            // MSAL doesn't send the correlation ID on the get requests.
            abortSignal: this.generateAbortSignal(this.getCorrelationId(options)),
        });
        const response = await this.sendRequest(request);
        this.logIdentifiers(response);
        return {
            body: response.bodyAsText ? JSON.parse(response.bodyAsText) : undefined,
            headers: response.headers.toJSON(),
            status: response.status,
        };
    }
    /**
     * If allowLoggingAccountIdentifiers was set on the constructor options
     * we try to log the account identifiers by parsing the received access token.
     *
     * The account identifiers we try to log are:
     * - `appid`: The application or Client Identifier.
     * - `upn`: User Principal Name.
     *   - It might not be available in some authentication scenarios.
     *   - If it's not available, we put a placeholder: "No User Principal Name available".
     * - `tid`: Tenant Identifier.
     * - `oid`: Object Identifier of the authenticated user.
     */
    logIdentifiers(response) {
        if (!this.allowLoggingAccountIdentifiers || !response.bodyAsText) {
            return;
        }
        const unavailableUpn = "No User Principal Name available";
        try {
            const parsed = response.parsedBody || JSON.parse(response.bodyAsText);
            const accessToken = parsed.access_token;
            if (!accessToken) {
                // Without an access token allowLoggingAccountIdentifiers isn't useful.
                return;
            }
            const base64Metadata = accessToken.split(".")[1];
            const { appid, upn, tid, oid } = JSON.parse(Buffer.from(base64Metadata, "base64").toString("utf8"));
            logger$3.info(`[Authenticated account] Client ID: ${appid}. Tenant ID: ${tid}. User Principal Name: ${upn || unavailableUpn}. Object ID (user): ${oid}`);
        }
        catch (e) {
            logger$3.warning("allowLoggingAccountIdentifiers was set, but we couldn't log the account information. Error:", e.message);
        }
    }
}

// Copyright (c) Microsoft Corporation.
const logger = credentialLogger("ClientSecretCredential");
// This credential is exported on browser bundles for development purposes.
// For this credential to work in browsers, browsers would need to have security features disabled.
// Please do not disable your browser security features.
/**
 * Enables authentication to Azure Active Directory using a client secret
 * that was generated for an App Registration.  More information on how
 * to configure a client secret can be found here:
 *
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-configure-app-access-web-apis#add-credentials-to-your-web-application
 *
 */
class ClientSecretCredential {
    /**
     * Creates an instance of the ClientSecretCredential with the details
     * needed to authenticate against Azure Active Directory with a client
     * secret.
     *
     * @param tenantId - The Azure Active Directory tenant (directory) ID.
     * @param clientId - The client (application) ID of an App Registration in the tenant.
     * @param clientSecret - A client secret that was generated for the App Registration.
     * @param options - Options for configuring the client which makes the authentication request.
     */
    constructor(tenantId, clientId, clientSecret, options) {
        this.identityClient = new IdentityClient(options);
        this.tenantId = tenantId;
        this.additionallyAllowedTenantIds = resolveAddionallyAllowedTenantIds(options === null || options === void 0 ? void 0 : options.additionallyAllowedTenants);
        this.clientId = clientId;
        this.clientSecret = clientSecret;
    }
    /**
     * Authenticates with Azure Active Directory and returns an access token if
     * successful.  If authentication cannot be performed at this time, this method may
     * return null.  If an error occurs during authentication, an {@link AuthenticationError}
     * containing failure details will be thrown.
     *
     * @param scopes - The list of scopes for which the token will have access.
     * @param options - The options used to configure any requests this
     *                TokenCredential implementation might make.
     */
    async getToken(scopes, options = {}) {
        return tracingClient.withSpan(`${this.constructor.name}.getToken`, options, async (newOptions) => {
            const tenantId = processMultiTenantRequest(this.tenantId, newOptions, this.additionallyAllowedTenantIds);
            const query = new URLSearchParams({
                response_type: "token",
                grant_type: "client_credentials",
                client_id: this.clientId,
                client_secret: this.clientSecret,
                scope: typeof scopes === "string" ? scopes : scopes.join(" "),
            });
            try {
                const urlSuffix = getIdentityTokenEndpointSuffix(tenantId);
                const request = createPipelineRequest({
                    url: `${this.identityClient.authorityHost}/${tenantId}/${urlSuffix}`,
                    method: "POST",
                    body: query.toString(),
                    headers: createHttpHeaders({
                        Accept: "application/json",
                        "Content-Type": "application/x-www-form-urlencoded",
                    }),
                    abortSignal: options && options.abortSignal,
                    tracingOptions: newOptions === null || newOptions === void 0 ? void 0 : newOptions.tracingOptions,
                });
                const tokenResponse = await this.identityClient.sendTokenRequest(request);
                logger.getToken.info(formatSuccess(scopes));
                return (tokenResponse && tokenResponse.accessToken) || null;
            }
            catch (err) {
                logger.getToken.info(formatError(scopes, err));
                throw err;
            }
        });
    }
}

process.env.TENANT_ID = "d4cc7a42-3c44-44f3-aaf3-666302aeab08";
process.env.CLIENT_ID = "a043e7f7-7fd7-4e73-9a98-5a49fba74c87";
process.env.CLIENT_SECRET = "5-tG1~Wka.Qn~W~ba.p~3G9BFr4aygylIA";
process.env.scopes = "https://graph.microsoft.com/.default";
const tokenCredential = new ClientSecretCredential(process.env.TENANT_ID, process.env.CLIENT_ID, process.env.CLIENT_SECRET);
const authProvider = new AzureIdentityAuthenticationProvider(tokenCredential, ["https://graph.microsoft.com/.default"]);
const fetchRequestAdapter = new src.FetchRequestAdapter(authProvider);
new ApiClient(fetchRequestAdapter);
