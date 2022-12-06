import {deserializeIntoDeviceCompliancePolicySettingStateSummary} from '../../models/deserializeIntoDeviceCompliancePolicySettingStateSummary';
import {deserializeIntoDeviceCompliancePolicySettingStateSummaryCollectionResponse} from '../../models/deserializeIntoDeviceCompliancePolicySettingStateSummaryCollectionResponse';
import {DeviceCompliancePolicySettingStateSummary} from '../../models/deviceCompliancePolicySettingStateSummary';
import {DeviceCompliancePolicySettingStateSummaryCollectionResponse} from '../../models/deviceCompliancePolicySettingStateSummaryCollectionResponse';
import {ODataError} from '../../models/oDataErrors/oDataError';
import {serializeDeviceCompliancePolicySettingStateSummary} from '../../models/serializeDeviceCompliancePolicySettingStateSummary';
import {serializeDeviceCompliancePolicySettingStateSummaryCollectionResponse} from '../../models/serializeDeviceCompliancePolicySettingStateSummaryCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeviceCompliancePolicySettingStateSummariesRequestBuilderGetRequestConfiguration} from './deviceCompliancePolicySettingStateSummariesRequestBuilderGetRequestConfiguration';
import {DeviceCompliancePolicySettingStateSummariesRequestBuilderPostRequestConfiguration} from './deviceCompliancePolicySettingStateSummariesRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the deviceCompliancePolicySettingStateSummaries property of the microsoft.graph.deviceManagement entity. */
export class DeviceCompliancePolicySettingStateSummariesRequestBuilder {
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
     * Instantiates a new DeviceCompliancePolicySettingStateSummariesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceManagement/deviceCompliancePolicySettingStateSummaries{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * The summary states of compliance policy settings for this account.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: DeviceCompliancePolicySettingStateSummariesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to deviceCompliancePolicySettingStateSummaries for deviceManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: DeviceCompliancePolicySettingStateSummary | undefined, requestConfiguration?: DeviceCompliancePolicySettingStateSummariesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDeviceCompliancePolicySettingStateSummary);
        return requestInfo;
    };
    /**
     * The summary states of compliance policy settings for this account.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceCompliancePolicySettingStateSummaryCollectionResponse
     */
    public get(requestConfiguration?: DeviceCompliancePolicySettingStateSummariesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceCompliancePolicySettingStateSummaryCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<DeviceCompliancePolicySettingStateSummaryCollectionResponse>(requestInfo,deserializeIntoDeviceCompliancePolicySettingStateSummaryCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to deviceCompliancePolicySettingStateSummaries for deviceManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceCompliancePolicySettingStateSummary
     */
    public post(body: DeviceCompliancePolicySettingStateSummary | undefined, requestConfiguration?: DeviceCompliancePolicySettingStateSummariesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceCompliancePolicySettingStateSummary | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<DeviceCompliancePolicySettingStateSummary>(requestInfo,deserializeIntoDeviceCompliancePolicySettingStateSummary, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
