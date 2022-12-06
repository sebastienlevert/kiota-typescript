import {deserializeIntoDeviceComplianceActionItem} from '../../../../../../models/deserializeIntoDeviceComplianceActionItem';
import {deserializeIntoDeviceComplianceActionItemCollectionResponse} from '../../../../../../models/deserializeIntoDeviceComplianceActionItemCollectionResponse';
import {DeviceComplianceActionItem} from '../../../../../../models/deviceComplianceActionItem';
import {DeviceComplianceActionItemCollectionResponse} from '../../../../../../models/deviceComplianceActionItemCollectionResponse';
import {ODataError} from '../../../../../../models/oDataErrors/oDataError';
import {serializeDeviceComplianceActionItem} from '../../../../../../models/serializeDeviceComplianceActionItem';
import {serializeDeviceComplianceActionItemCollectionResponse} from '../../../../../../models/serializeDeviceComplianceActionItemCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ScheduledActionConfigurationsRequestBuilderGetRequestConfiguration} from './scheduledActionConfigurationsRequestBuilderGetRequestConfiguration';
import {ScheduledActionConfigurationsRequestBuilderPostRequestConfiguration} from './scheduledActionConfigurationsRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the scheduledActionConfigurations property of the microsoft.graph.deviceComplianceScheduledActionForRule entity. */
export class ScheduledActionConfigurationsRequestBuilder {
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
     * Instantiates a new ScheduledActionConfigurationsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy%2Did}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule%2Did}/scheduledActionConfigurations{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * The list of scheduled action configurations for this compliance policy. Compliance policy must have one and only one block scheduled action.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: ScheduledActionConfigurationsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to scheduledActionConfigurations for deviceManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: DeviceComplianceActionItem | undefined, requestConfiguration?: ScheduledActionConfigurationsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDeviceComplianceActionItem);
        return requestInfo;
    };
    /**
     * The list of scheduled action configurations for this compliance policy. Compliance policy must have one and only one block scheduled action.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceComplianceActionItemCollectionResponse
     */
    public get(requestConfiguration?: ScheduledActionConfigurationsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceComplianceActionItemCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<DeviceComplianceActionItemCollectionResponse>(requestInfo,deserializeIntoDeviceComplianceActionItemCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to scheduledActionConfigurations for deviceManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceComplianceActionItem
     */
    public post(body: DeviceComplianceActionItem | undefined, requestConfiguration?: ScheduledActionConfigurationsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceComplianceActionItem | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<DeviceComplianceActionItem>(requestInfo,deserializeIntoDeviceComplianceActionItem, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
