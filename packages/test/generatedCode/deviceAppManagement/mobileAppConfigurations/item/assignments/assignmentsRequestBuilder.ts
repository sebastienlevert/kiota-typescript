import {deserializeIntoManagedDeviceMobileAppConfigurationAssignment} from '../../../../models/deserializeIntoManagedDeviceMobileAppConfigurationAssignment';
import {deserializeIntoManagedDeviceMobileAppConfigurationAssignmentCollectionResponse} from '../../../../models/deserializeIntoManagedDeviceMobileAppConfigurationAssignmentCollectionResponse';
import {ManagedDeviceMobileAppConfigurationAssignment} from '../../../../models/managedDeviceMobileAppConfigurationAssignment';
import {ManagedDeviceMobileAppConfigurationAssignmentCollectionResponse} from '../../../../models/managedDeviceMobileAppConfigurationAssignmentCollectionResponse';
import {ODataError} from '../../../../models/oDataErrors/oDataError';
import {serializeManagedDeviceMobileAppConfigurationAssignment} from '../../../../models/serializeManagedDeviceMobileAppConfigurationAssignment';
import {serializeManagedDeviceMobileAppConfigurationAssignmentCollectionResponse} from '../../../../models/serializeManagedDeviceMobileAppConfigurationAssignmentCollectionResponse';
import {AssignmentsRequestBuilderGetRequestConfiguration} from './assignmentsRequestBuilderGetRequestConfiguration';
import {AssignmentsRequestBuilderPostRequestConfiguration} from './assignmentsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the assignments property of the microsoft.graph.managedDeviceMobileAppConfiguration entity. */
export class AssignmentsRequestBuilder {
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
     * Instantiates a new AssignmentsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration%2Did}/assignments{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * The list of group assignemenets for app configration.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: AssignmentsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to assignments for deviceAppManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: ManagedDeviceMobileAppConfigurationAssignment | undefined, requestConfiguration?: AssignmentsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeManagedDeviceMobileAppConfigurationAssignment);
        return requestInfo;
    };
    /**
     * The list of group assignemenets for app configration.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ManagedDeviceMobileAppConfigurationAssignmentCollectionResponse
     */
    public get(requestConfiguration?: AssignmentsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ManagedDeviceMobileAppConfigurationAssignmentCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<ManagedDeviceMobileAppConfigurationAssignmentCollectionResponse>(requestInfo,deserializeIntoManagedDeviceMobileAppConfigurationAssignmentCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to assignments for deviceAppManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ManagedDeviceMobileAppConfigurationAssignment
     */
    public post(body: ManagedDeviceMobileAppConfigurationAssignment | undefined, requestConfiguration?: AssignmentsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ManagedDeviceMobileAppConfigurationAssignment | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<ManagedDeviceMobileAppConfigurationAssignment>(requestInfo,deserializeIntoManagedDeviceMobileAppConfigurationAssignment, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
