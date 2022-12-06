import {ActivityHistoryItem} from '../../../../models/activityHistoryItem';
import {ActivityHistoryItemCollectionResponse} from '../../../../models/activityHistoryItemCollectionResponse';
import {deserializeIntoActivityHistoryItem} from '../../../../models/deserializeIntoActivityHistoryItem';
import {deserializeIntoActivityHistoryItemCollectionResponse} from '../../../../models/deserializeIntoActivityHistoryItemCollectionResponse';
import {ODataError} from '../../../../models/oDataErrors/oDataError';
import {serializeActivityHistoryItem} from '../../../../models/serializeActivityHistoryItem';
import {serializeActivityHistoryItemCollectionResponse} from '../../../../models/serializeActivityHistoryItemCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {HistoryItemsRequestBuilderGetRequestConfiguration} from './historyItemsRequestBuilderGetRequestConfiguration';
import {HistoryItemsRequestBuilderPostRequestConfiguration} from './historyItemsRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the historyItems property of the microsoft.graph.userActivity entity. */
export class HistoryItemsRequestBuilder {
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
     * Instantiates a new HistoryItemsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/me/activities/{userActivity%2Did}/historyItems{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Optional. NavigationProperty/Containment; navigation property to the activity's historyItems.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: HistoryItemsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to historyItems for me
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: ActivityHistoryItem | undefined, requestConfiguration?: HistoryItemsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeActivityHistoryItem);
        return requestInfo;
    };
    /**
     * Optional. NavigationProperty/Containment; navigation property to the activity's historyItems.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ActivityHistoryItemCollectionResponse
     */
    public get(requestConfiguration?: HistoryItemsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ActivityHistoryItemCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<ActivityHistoryItemCollectionResponse>(requestInfo,deserializeIntoActivityHistoryItemCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to historyItems for me
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ActivityHistoryItem
     */
    public post(body: ActivityHistoryItem | undefined, requestConfiguration?: HistoryItemsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ActivityHistoryItem | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<ActivityHistoryItem>(requestInfo,deserializeIntoActivityHistoryItem, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
