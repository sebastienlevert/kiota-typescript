import {deserializeIntoLocalizedNotificationMessage} from '../../../../models/deserializeIntoLocalizedNotificationMessage';
import {deserializeIntoLocalizedNotificationMessageCollectionResponse} from '../../../../models/deserializeIntoLocalizedNotificationMessageCollectionResponse';
import {LocalizedNotificationMessage} from '../../../../models/localizedNotificationMessage';
import {LocalizedNotificationMessageCollectionResponse} from '../../../../models/localizedNotificationMessageCollectionResponse';
import {ODataError} from '../../../../models/oDataErrors/oDataError';
import {serializeLocalizedNotificationMessage} from '../../../../models/serializeLocalizedNotificationMessage';
import {serializeLocalizedNotificationMessageCollectionResponse} from '../../../../models/serializeLocalizedNotificationMessageCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {LocalizedNotificationMessagesRequestBuilderGetRequestConfiguration} from './localizedNotificationMessagesRequestBuilderGetRequestConfiguration';
import {LocalizedNotificationMessagesRequestBuilderPostRequestConfiguration} from './localizedNotificationMessagesRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the localizedNotificationMessages property of the microsoft.graph.notificationMessageTemplate entity. */
export class LocalizedNotificationMessagesRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new LocalizedNotificationMessagesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate%2Did}/localizedNotificationMessages{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * The list of localized messages for this Notification Message Template.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: LocalizedNotificationMessagesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to localizedNotificationMessages for deviceManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: LocalizedNotificationMessage | undefined, requestConfiguration?: LocalizedNotificationMessagesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeLocalizedNotificationMessage);
        return requestInfo;
    };
    /**
     * The list of localized messages for this Notification Message Template.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of LocalizedNotificationMessageCollectionResponse
     */
    public get(requestConfiguration?: LocalizedNotificationMessagesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<LocalizedNotificationMessageCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<LocalizedNotificationMessageCollectionResponse>(requestInfo,deserializeIntoLocalizedNotificationMessageCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to localizedNotificationMessages for deviceManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of LocalizedNotificationMessage
     */
    public post(body: LocalizedNotificationMessage | undefined, requestConfiguration?: LocalizedNotificationMessagesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<LocalizedNotificationMessage | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<LocalizedNotificationMessage>(requestInfo,deserializeIntoLocalizedNotificationMessage, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
