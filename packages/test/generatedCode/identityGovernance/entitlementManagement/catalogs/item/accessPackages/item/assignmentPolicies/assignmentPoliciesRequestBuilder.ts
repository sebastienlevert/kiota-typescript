import {AccessPackageAssignmentPolicy} from '../../../../../../../models/accessPackageAssignmentPolicy';
import {AccessPackageAssignmentPolicyCollectionResponse} from '../../../../../../../models/accessPackageAssignmentPolicyCollectionResponse';
import {deserializeIntoAccessPackageAssignmentPolicy} from '../../../../../../../models/deserializeIntoAccessPackageAssignmentPolicy';
import {deserializeIntoAccessPackageAssignmentPolicyCollectionResponse} from '../../../../../../../models/deserializeIntoAccessPackageAssignmentPolicyCollectionResponse';
import {ODataError} from '../../../../../../../models/oDataErrors/oDataError';
import {serializeAccessPackageAssignmentPolicy} from '../../../../../../../models/serializeAccessPackageAssignmentPolicy';
import {serializeAccessPackageAssignmentPolicyCollectionResponse} from '../../../../../../../models/serializeAccessPackageAssignmentPolicyCollectionResponse';
import {AssignmentPoliciesRequestBuilderGetRequestConfiguration} from './assignmentPoliciesRequestBuilderGetRequestConfiguration';
import {AssignmentPoliciesRequestBuilderPostRequestConfiguration} from './assignmentPoliciesRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the assignmentPolicies property of the microsoft.graph.accessPackage entity. */
export class AssignmentPoliciesRequestBuilder {
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
     * Instantiates a new AssignmentPoliciesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog%2Did}/accessPackages/{accessPackage%2Did}/assignmentPolicies{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get assignmentPolicies from identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: AssignmentPoliciesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to assignmentPolicies for identityGovernance
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: AccessPackageAssignmentPolicy | undefined, requestConfiguration?: AssignmentPoliciesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAccessPackageAssignmentPolicy);
        return requestInfo;
    };
    /**
     * Get assignmentPolicies from identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AccessPackageAssignmentPolicyCollectionResponse
     */
    public get(requestConfiguration?: AssignmentPoliciesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AccessPackageAssignmentPolicyCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<AccessPackageAssignmentPolicyCollectionResponse>(requestInfo,deserializeIntoAccessPackageAssignmentPolicyCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to assignmentPolicies for identityGovernance
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AccessPackageAssignmentPolicy
     */
    public post(body: AccessPackageAssignmentPolicy | undefined, requestConfiguration?: AssignmentPoliciesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AccessPackageAssignmentPolicy | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<AccessPackageAssignmentPolicy>(requestInfo,deserializeIntoAccessPackageAssignmentPolicy, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
