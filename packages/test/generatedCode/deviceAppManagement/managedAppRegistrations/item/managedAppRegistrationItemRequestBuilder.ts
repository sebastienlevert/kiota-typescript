import {deserializeIntoManagedAppRegistration} from '../../../models/deserializeIntoManagedAppRegistration';
import {ManagedAppRegistration} from '../../../models/managedAppRegistration';
import {ODataError} from '../../../models/oDataErrors/oDataError';
import {serializeManagedAppRegistration} from '../../../models/serializeManagedAppRegistration';
import {AppliedPoliciesRequestBuilder} from './appliedPolicies/appliedPoliciesRequestBuilder';
import {ManagedAppPolicyItemRequestBuilder as i7de6815c1756ba63ef79d4a3ca47bd8330e4bf7f0b6a1095255310ade1a20994} from './appliedPolicies/item/managedAppPolicyItemRequestBuilder';
import {IntendedPoliciesRequestBuilder} from './intendedPolicies/intendedPoliciesRequestBuilder';
import {ManagedAppPolicyItemRequestBuilder as i001e9863398f17ac355891dec939f11d2bc1931e7476aa95363f76478a5968ad} from './intendedPolicies/item/managedAppPolicyItemRequestBuilder';
import {ManagedAppRegistrationItemRequestBuilderDeleteRequestConfiguration} from './managedAppRegistrationItemRequestBuilderDeleteRequestConfiguration';
import {ManagedAppRegistrationItemRequestBuilderGetRequestConfiguration} from './managedAppRegistrationItemRequestBuilderGetRequestConfiguration';
import {ManagedAppRegistrationItemRequestBuilderPatchRequestConfiguration} from './managedAppRegistrationItemRequestBuilderPatchRequestConfiguration';
import {ManagedAppOperationItemRequestBuilder} from './operations/item/managedAppOperationItemRequestBuilder';
import {OperationsRequestBuilder} from './operations/operationsRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the managedAppRegistrations property of the microsoft.graph.deviceAppManagement entity. */
export class ManagedAppRegistrationItemRequestBuilder {
    /** Provides operations to manage the appliedPolicies property of the microsoft.graph.managedAppRegistration entity. */
    public get appliedPolicies(): AppliedPoliciesRequestBuilder {
        return new AppliedPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the intendedPolicies property of the microsoft.graph.managedAppRegistration entity. */
    public get intendedPolicies(): IntendedPoliciesRequestBuilder {
        return new IntendedPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the operations property of the microsoft.graph.managedAppRegistration entity. */
    public get operations(): OperationsRequestBuilder {
        return new OperationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Provides operations to manage the appliedPolicies property of the microsoft.graph.managedAppRegistration entity.
     * @param id Unique identifier of the item
     * @returns a ManagedAppPolicyItemRequestBuilder
     */
    public appliedPoliciesById(id: string) : i7de6815c1756ba63ef79d4a3ca47bd8330e4bf7f0b6a1095255310ade1a20994 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedAppPolicy%2Did"] = id
        return new i7de6815c1756ba63ef79d4a3ca47bd8330e4bf7f0b6a1095255310ade1a20994(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ManagedAppRegistrationItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceAppManagement/managedAppRegistrations/{managedAppRegistration%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property managedAppRegistrations for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: ManagedAppRegistrationItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The managed app registrations.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: ManagedAppRegistrationItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property managedAppRegistrations in deviceAppManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: ManagedAppRegistration | undefined, requestConfiguration?: ManagedAppRegistrationItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeManagedAppRegistration);
        return requestInfo;
    };
    /**
     * Delete navigation property managedAppRegistrations for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: ManagedAppRegistrationItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The managed app registrations.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ManagedAppRegistration
     */
    public get(requestConfiguration?: ManagedAppRegistrationItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ManagedAppRegistration | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<ManagedAppRegistration>(requestInfo,deserializeIntoManagedAppRegistration, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the intendedPolicies property of the microsoft.graph.managedAppRegistration entity.
     * @param id Unique identifier of the item
     * @returns a ManagedAppPolicyItemRequestBuilder
     */
    public intendedPoliciesById(id: string) : i001e9863398f17ac355891dec939f11d2bc1931e7476aa95363f76478a5968ad {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedAppPolicy%2Did"] = id
        return new i001e9863398f17ac355891dec939f11d2bc1931e7476aa95363f76478a5968ad(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the operations property of the microsoft.graph.managedAppRegistration entity.
     * @param id Unique identifier of the item
     * @returns a ManagedAppOperationItemRequestBuilder
     */
    public operationsById(id: string) : ManagedAppOperationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["managedAppOperation%2Did"] = id
        return new ManagedAppOperationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property managedAppRegistrations in deviceAppManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ManagedAppRegistration
     */
    public patch(body: ManagedAppRegistration | undefined, requestConfiguration?: ManagedAppRegistrationItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ManagedAppRegistration | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<ManagedAppRegistration>(requestInfo,deserializeIntoManagedAppRegistration, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
