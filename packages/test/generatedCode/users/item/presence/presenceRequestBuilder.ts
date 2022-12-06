import {deserializeIntoPresence} from '../../../models/deserializeIntoPresence';
import {ODataError} from '../../../models/oDataErrors/oDataError';
import {Presence} from '../../../models/presence';
import {serializePresence} from '../../../models/serializePresence';
import {ClearPresenceRequestBuilder} from './clearPresence/clearPresenceRequestBuilder';
import {ClearUserPreferredPresenceRequestBuilder} from './clearUserPreferredPresence/clearUserPreferredPresenceRequestBuilder';
import {PresenceRequestBuilderDeleteRequestConfiguration} from './presenceRequestBuilderDeleteRequestConfiguration';
import {PresenceRequestBuilderGetRequestConfiguration} from './presenceRequestBuilderGetRequestConfiguration';
import {PresenceRequestBuilderPatchRequestConfiguration} from './presenceRequestBuilderPatchRequestConfiguration';
import {SetPresenceRequestBuilder} from './setPresence/setPresenceRequestBuilder';
import {SetUserPreferredPresenceRequestBuilder} from './setUserPreferredPresence/setUserPreferredPresenceRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the presence property of the microsoft.graph.user entity. */
export class PresenceRequestBuilder {
    /** Provides operations to call the clearPresence method. */
    public get clearPresence(): ClearPresenceRequestBuilder {
        return new ClearPresenceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the clearUserPreferredPresence method. */
    public get clearUserPreferredPresence(): ClearUserPreferredPresenceRequestBuilder {
        return new ClearUserPreferredPresenceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Provides operations to call the setPresence method. */
    public get setPresence(): SetPresenceRequestBuilder {
        return new SetPresenceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the setUserPreferredPresence method. */
    public get setUserPreferredPresence(): SetUserPreferredPresenceRequestBuilder {
        return new SetUserPreferredPresenceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new PresenceRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/users/{user%2Did}/presence{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property presence for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: PresenceRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Get a user's presence information.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: PresenceRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Update the navigation property presence in users
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Presence | undefined, requestConfiguration?: PresenceRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializePresence);
        return requestInfo;
    };
    /**
     * Delete navigation property presence for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: PresenceRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get a user's presence information.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Presence
     */
    public get(requestConfiguration?: PresenceRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Presence | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<Presence>(requestInfo,deserializeIntoPresence, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property presence in users
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Presence
     */
    public patch(body: Presence | undefined, requestConfiguration?: PresenceRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Presence | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<Presence>(requestInfo,deserializeIntoPresence, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
