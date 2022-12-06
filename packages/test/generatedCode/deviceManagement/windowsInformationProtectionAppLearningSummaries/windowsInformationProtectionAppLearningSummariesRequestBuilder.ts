import {deserializeIntoWindowsInformationProtectionAppLearningSummary} from '../../models/deserializeIntoWindowsInformationProtectionAppLearningSummary';
import {deserializeIntoWindowsInformationProtectionAppLearningSummaryCollectionResponse} from '../../models/deserializeIntoWindowsInformationProtectionAppLearningSummaryCollectionResponse';
import {ODataError} from '../../models/oDataErrors/oDataError';
import {serializeWindowsInformationProtectionAppLearningSummary} from '../../models/serializeWindowsInformationProtectionAppLearningSummary';
import {serializeWindowsInformationProtectionAppLearningSummaryCollectionResponse} from '../../models/serializeWindowsInformationProtectionAppLearningSummaryCollectionResponse';
import {WindowsInformationProtectionAppLearningSummary} from '../../models/windowsInformationProtectionAppLearningSummary';
import {WindowsInformationProtectionAppLearningSummaryCollectionResponse} from '../../models/windowsInformationProtectionAppLearningSummaryCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {WindowsInformationProtectionAppLearningSummariesRequestBuilderGetRequestConfiguration} from './windowsInformationProtectionAppLearningSummariesRequestBuilderGetRequestConfiguration';
import {WindowsInformationProtectionAppLearningSummariesRequestBuilderPostRequestConfiguration} from './windowsInformationProtectionAppLearningSummariesRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the windowsInformationProtectionAppLearningSummaries property of the microsoft.graph.deviceManagement entity. */
export class WindowsInformationProtectionAppLearningSummariesRequestBuilder {
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
     * Instantiates a new WindowsInformationProtectionAppLearningSummariesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceManagement/windowsInformationProtectionAppLearningSummaries{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * The windows information protection app learning summaries.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: WindowsInformationProtectionAppLearningSummariesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to windowsInformationProtectionAppLearningSummaries for deviceManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: WindowsInformationProtectionAppLearningSummary | undefined, requestConfiguration?: WindowsInformationProtectionAppLearningSummariesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeWindowsInformationProtectionAppLearningSummary);
        return requestInfo;
    };
    /**
     * The windows information protection app learning summaries.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WindowsInformationProtectionAppLearningSummaryCollectionResponse
     */
    public get(requestConfiguration?: WindowsInformationProtectionAppLearningSummariesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WindowsInformationProtectionAppLearningSummaryCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<WindowsInformationProtectionAppLearningSummaryCollectionResponse>(requestInfo,deserializeIntoWindowsInformationProtectionAppLearningSummaryCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to windowsInformationProtectionAppLearningSummaries for deviceManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WindowsInformationProtectionAppLearningSummary
     */
    public post(body: WindowsInformationProtectionAppLearningSummary | undefined, requestConfiguration?: WindowsInformationProtectionAppLearningSummariesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WindowsInformationProtectionAppLearningSummary | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<WindowsInformationProtectionAppLearningSummary>(requestInfo,deserializeIntoWindowsInformationProtectionAppLearningSummary, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
