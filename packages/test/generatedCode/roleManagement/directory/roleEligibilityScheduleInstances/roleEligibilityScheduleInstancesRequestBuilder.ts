import {deserializeIntoUnifiedRoleEligibilityScheduleInstance} from '../../../models/deserializeIntoUnifiedRoleEligibilityScheduleInstance';
import {deserializeIntoUnifiedRoleEligibilityScheduleInstanceCollectionResponse} from '../../../models/deserializeIntoUnifiedRoleEligibilityScheduleInstanceCollectionResponse';
import {ODataError} from '../../../models/oDataErrors/oDataError';
import {serializeUnifiedRoleEligibilityScheduleInstance} from '../../../models/serializeUnifiedRoleEligibilityScheduleInstance';
import {serializeUnifiedRoleEligibilityScheduleInstanceCollectionResponse} from '../../../models/serializeUnifiedRoleEligibilityScheduleInstanceCollectionResponse';
import {UnifiedRoleEligibilityScheduleInstance} from '../../../models/unifiedRoleEligibilityScheduleInstance';
import {UnifiedRoleEligibilityScheduleInstanceCollectionResponse} from '../../../models/unifiedRoleEligibilityScheduleInstanceCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {FilterByCurrentUserWithOnRequestBuilder} from './filterByCurrentUserWithOn/filterByCurrentUserWithOnRequestBuilder';
import {RoleEligibilityScheduleInstancesRequestBuilderGetRequestConfiguration} from './roleEligibilityScheduleInstancesRequestBuilderGetRequestConfiguration';
import {RoleEligibilityScheduleInstancesRequestBuilderPostRequestConfiguration} from './roleEligibilityScheduleInstancesRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the roleEligibilityScheduleInstances property of the microsoft.graph.rbacApplication entity. */
export class RoleEligibilityScheduleInstancesRequestBuilder {
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
     * Instantiates a new RoleEligibilityScheduleInstancesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/roleManagement/directory/roleEligibilityScheduleInstances{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get the instances of role eligibilities.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: RoleEligibilityScheduleInstancesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to roleEligibilityScheduleInstances for roleManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: UnifiedRoleEligibilityScheduleInstance | undefined, requestConfiguration?: RoleEligibilityScheduleInstancesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeUnifiedRoleEligibilityScheduleInstance);
        return requestInfo;
    };
    /**
     * Provides operations to call the filterByCurrentUser method.
     * @param on Usage: on='{on}'
     * @returns a filterByCurrentUserWithOnRequestBuilder
     */
    public filterByCurrentUserWithOn(on: string | undefined) : FilterByCurrentUserWithOnRequestBuilder {
        if(!on) throw new Error("on cannot be undefined");
        return new FilterByCurrentUserWithOnRequestBuilder(this.pathParameters, this.requestAdapter, on);
    };
    /**
     * Get the instances of role eligibilities.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UnifiedRoleEligibilityScheduleInstanceCollectionResponse
     */
    public get(requestConfiguration?: RoleEligibilityScheduleInstancesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UnifiedRoleEligibilityScheduleInstanceCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<UnifiedRoleEligibilityScheduleInstanceCollectionResponse>(requestInfo,deserializeIntoUnifiedRoleEligibilityScheduleInstanceCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to roleEligibilityScheduleInstances for roleManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UnifiedRoleEligibilityScheduleInstance
     */
    public post(body: UnifiedRoleEligibilityScheduleInstance | undefined, requestConfiguration?: RoleEligibilityScheduleInstancesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UnifiedRoleEligibilityScheduleInstance | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<UnifiedRoleEligibilityScheduleInstance>(requestInfo,deserializeIntoUnifiedRoleEligibilityScheduleInstance, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
