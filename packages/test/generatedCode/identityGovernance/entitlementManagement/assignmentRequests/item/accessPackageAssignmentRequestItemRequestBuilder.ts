import {AccessPackageAssignmentRequest} from '../../../../models/accessPackageAssignmentRequest';
import {deserializeIntoAccessPackageAssignmentRequest} from '../../../../models/deserializeIntoAccessPackageAssignmentRequest';
import {ODataError} from '../../../../models/oDataErrors/oDataError';
import {serializeAccessPackageAssignmentRequest} from '../../../../models/serializeAccessPackageAssignmentRequest';
import {AccessPackageRequestBuilder} from './accessPackage/accessPackageRequestBuilder';
import {AccessPackageAssignmentRequestItemRequestBuilderDeleteRequestConfiguration} from './accessPackageAssignmentRequestItemRequestBuilderDeleteRequestConfiguration';
import {AccessPackageAssignmentRequestItemRequestBuilderGetRequestConfiguration} from './accessPackageAssignmentRequestItemRequestBuilderGetRequestConfiguration';
import {AccessPackageAssignmentRequestItemRequestBuilderPatchRequestConfiguration} from './accessPackageAssignmentRequestItemRequestBuilderPatchRequestConfiguration';
import {AssignmentRequestBuilder} from './assignment/assignmentRequestBuilder';
import {CancelRequestBuilder} from './cancel/cancelRequestBuilder';
import {ReprocessRequestBuilder} from './reprocess/reprocessRequestBuilder';
import {RequestorRequestBuilder} from './requestor/requestorRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the assignmentRequests property of the microsoft.graph.entitlementManagement entity. */
export class AccessPackageAssignmentRequestItemRequestBuilder {
    /** Provides operations to manage the accessPackage property of the microsoft.graph.accessPackageAssignmentRequest entity. */
    public get accessPackage(): AccessPackageRequestBuilder {
        return new AccessPackageRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the assignment property of the microsoft.graph.accessPackageAssignmentRequest entity. */
    public get assignment(): AssignmentRequestBuilder {
        return new AssignmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the cancel method. */
    public get cancel(): CancelRequestBuilder {
        return new CancelRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** Provides operations to call the reprocess method. */
    public get reprocess(): ReprocessRequestBuilder {
        return new ReprocessRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Provides operations to manage the requestor property of the microsoft.graph.accessPackageAssignmentRequest entity. */
    public get requestor(): RequestorRequestBuilder {
        return new RequestorRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new AccessPackageAssignmentRequestItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property assignmentRequests for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: AccessPackageAssignmentRequestItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Access package assignment requests created by or on behalf of a subject.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: AccessPackageAssignmentRequestItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property assignmentRequests in identityGovernance
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: AccessPackageAssignmentRequest | undefined, requestConfiguration?: AccessPackageAssignmentRequestItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAccessPackageAssignmentRequest);
        return requestInfo;
    };
    /**
     * Delete navigation property assignmentRequests for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: AccessPackageAssignmentRequestItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Access package assignment requests created by or on behalf of a subject.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AccessPackageAssignmentRequest
     */
    public get(requestConfiguration?: AccessPackageAssignmentRequestItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AccessPackageAssignmentRequest | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<AccessPackageAssignmentRequest>(requestInfo,deserializeIntoAccessPackageAssignmentRequest, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property assignmentRequests in identityGovernance
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AccessPackageAssignmentRequest
     */
    public patch(body: AccessPackageAssignmentRequest | undefined, requestConfiguration?: AccessPackageAssignmentRequestItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AccessPackageAssignmentRequest | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<AccessPackageAssignmentRequest>(requestInfo,deserializeIntoAccessPackageAssignmentRequest, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
