import {deserializeIntoWindowsInformationProtectionNetworkLearningSummary} from '../../models/deserializeIntoWindowsInformationProtectionNetworkLearningSummary';
import {deserializeIntoWindowsInformationProtectionNetworkLearningSummaryCollectionResponse} from '../../models/deserializeIntoWindowsInformationProtectionNetworkLearningSummaryCollectionResponse';
import {ODataError} from '../../models/oDataErrors/oDataError';
import {serializeWindowsInformationProtectionNetworkLearningSummary} from '../../models/serializeWindowsInformationProtectionNetworkLearningSummary';
import {serializeWindowsInformationProtectionNetworkLearningSummaryCollectionResponse} from '../../models/serializeWindowsInformationProtectionNetworkLearningSummaryCollectionResponse';
import {WindowsInformationProtectionNetworkLearningSummary} from '../../models/windowsInformationProtectionNetworkLearningSummary';
import {WindowsInformationProtectionNetworkLearningSummaryCollectionResponse} from '../../models/windowsInformationProtectionNetworkLearningSummaryCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {WindowsInformationProtectionNetworkLearningSummariesRequestBuilderGetRequestConfiguration} from './windowsInformationProtectionNetworkLearningSummariesRequestBuilderGetRequestConfiguration';
import {WindowsInformationProtectionNetworkLearningSummariesRequestBuilderPostRequestConfiguration} from './windowsInformationProtectionNetworkLearningSummariesRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the windowsInformationProtectionNetworkLearningSummaries property of the microsoft.graph.deviceManagement entity. */
export class WindowsInformationProtectionNetworkLearningSummariesRequestBuilder {
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
     * Instantiates a new WindowsInformationProtectionNetworkLearningSummariesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceManagement/windowsInformationProtectionNetworkLearningSummaries{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * The windows information protection network learning summaries.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: WindowsInformationProtectionNetworkLearningSummariesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to windowsInformationProtectionNetworkLearningSummaries for deviceManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: WindowsInformationProtectionNetworkLearningSummary | undefined, requestConfiguration?: WindowsInformationProtectionNetworkLearningSummariesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeWindowsInformationProtectionNetworkLearningSummary);
        return requestInfo;
    };
    /**
     * The windows information protection network learning summaries.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WindowsInformationProtectionNetworkLearningSummaryCollectionResponse
     */
    public get(requestConfiguration?: WindowsInformationProtectionNetworkLearningSummariesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WindowsInformationProtectionNetworkLearningSummaryCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<WindowsInformationProtectionNetworkLearningSummaryCollectionResponse>(requestInfo,deserializeIntoWindowsInformationProtectionNetworkLearningSummaryCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to windowsInformationProtectionNetworkLearningSummaries for deviceManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WindowsInformationProtectionNetworkLearningSummary
     */
    public post(body: WindowsInformationProtectionNetworkLearningSummary | undefined, requestConfiguration?: WindowsInformationProtectionNetworkLearningSummariesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WindowsInformationProtectionNetworkLearningSummary | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<WindowsInformationProtectionNetworkLearningSummary>(requestInfo,deserializeIntoWindowsInformationProtectionNetworkLearningSummary, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
