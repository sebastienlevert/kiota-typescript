import {deserializeIntoSubscription} from '../../models/deserializeIntoSubscription';
import {ODataError} from '../../models/oDataErrors/oDataError';
import {serializeSubscription} from '../../models/serializeSubscription';
import {Subscription} from '../../models/subscription';
import {ReauthorizeRequestBuilder} from './reauthorize/reauthorizeRequestBuilder';
import {SubscriptionItemRequestBuilderDeleteRequestConfiguration} from './subscriptionItemRequestBuilderDeleteRequestConfiguration';
import {SubscriptionItemRequestBuilderGetRequestConfiguration} from './subscriptionItemRequestBuilderGetRequestConfiguration';
import {SubscriptionItemRequestBuilderPatchRequestConfiguration} from './subscriptionItemRequestBuilderPatchRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of subscription entities. */
export class SubscriptionItemRequestBuilder {
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** Provides operations to call the reauthorize method. */
    public get reauthorize(): ReauthorizeRequestBuilder {
        return new ReauthorizeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new SubscriptionItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/subscriptions/{subscription%2Did}{?%24select}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete a subscription. For the list of resources that support subscribing to change notifications, see the table in the Permissions section.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: SubscriptionItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties and relationships of a subscription. See the table in the Permissions section for the list of resources that support subscribing to change notifications.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: SubscriptionItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Renew a subscription by extending its expiry time. The table in the Permissions section lists the resources that support subscribing to change notifications. Subscriptions expire after a length of time that varies by resource type. In order to avoid missing change notifications, an app should renew its subscriptions well in advance of their expiry date. See subscription for maximum length of a subscription for each resource type.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Subscription | undefined, requestConfiguration?: SubscriptionItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeSubscription);
        return requestInfo;
    };
    /**
     * Delete a subscription. For the list of resources that support subscribing to change notifications, see the table in the Permissions section.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: SubscriptionItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Retrieve the properties and relationships of a subscription. See the table in the Permissions section for the list of resources that support subscribing to change notifications.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Subscription
     */
    public get(requestConfiguration?: SubscriptionItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Subscription | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<Subscription>(requestInfo,deserializeIntoSubscription, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Renew a subscription by extending its expiry time. The table in the Permissions section lists the resources that support subscribing to change notifications. Subscriptions expire after a length of time that varies by resource type. In order to avoid missing change notifications, an app should renew its subscriptions well in advance of their expiry date. See subscription for maximum length of a subscription for each resource type.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Subscription
     */
    public patch(body: Subscription | undefined, requestConfiguration?: SubscriptionItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Subscription | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<Subscription>(requestInfo,deserializeIntoSubscription, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
