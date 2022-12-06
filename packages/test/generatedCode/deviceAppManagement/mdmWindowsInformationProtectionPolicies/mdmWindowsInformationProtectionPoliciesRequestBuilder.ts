import {deserializeIntoMdmWindowsInformationProtectionPolicy} from '../../models/deserializeIntoMdmWindowsInformationProtectionPolicy';
import {deserializeIntoMdmWindowsInformationProtectionPolicyCollectionResponse} from '../../models/deserializeIntoMdmWindowsInformationProtectionPolicyCollectionResponse';
import {MdmWindowsInformationProtectionPolicy} from '../../models/mdmWindowsInformationProtectionPolicy';
import {MdmWindowsInformationProtectionPolicyCollectionResponse} from '../../models/mdmWindowsInformationProtectionPolicyCollectionResponse';
import {ODataError} from '../../models/oDataErrors/oDataError';
import {serializeMdmWindowsInformationProtectionPolicy} from '../../models/serializeMdmWindowsInformationProtectionPolicy';
import {serializeMdmWindowsInformationProtectionPolicyCollectionResponse} from '../../models/serializeMdmWindowsInformationProtectionPolicyCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {MdmWindowsInformationProtectionPoliciesRequestBuilderGetRequestConfiguration} from './mdmWindowsInformationProtectionPoliciesRequestBuilderGetRequestConfiguration';
import {MdmWindowsInformationProtectionPoliciesRequestBuilderPostRequestConfiguration} from './mdmWindowsInformationProtectionPoliciesRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the mdmWindowsInformationProtectionPolicies property of the microsoft.graph.deviceAppManagement entity. */
export class MdmWindowsInformationProtectionPoliciesRequestBuilder {
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
     * Instantiates a new MdmWindowsInformationProtectionPoliciesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceAppManagement/mdmWindowsInformationProtectionPolicies{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Windows information protection for apps running on devices which are MDM enrolled.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: MdmWindowsInformationProtectionPoliciesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to mdmWindowsInformationProtectionPolicies for deviceAppManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: MdmWindowsInformationProtectionPolicy | undefined, requestConfiguration?: MdmWindowsInformationProtectionPoliciesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeMdmWindowsInformationProtectionPolicy);
        return requestInfo;
    };
    /**
     * Windows information protection for apps running on devices which are MDM enrolled.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of MdmWindowsInformationProtectionPolicyCollectionResponse
     */
    public get(requestConfiguration?: MdmWindowsInformationProtectionPoliciesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<MdmWindowsInformationProtectionPolicyCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<MdmWindowsInformationProtectionPolicyCollectionResponse>(requestInfo,deserializeIntoMdmWindowsInformationProtectionPolicyCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to mdmWindowsInformationProtectionPolicies for deviceAppManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of MdmWindowsInformationProtectionPolicy
     */
    public post(body: MdmWindowsInformationProtectionPolicy | undefined, requestConfiguration?: MdmWindowsInformationProtectionPoliciesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<MdmWindowsInformationProtectionPolicy | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<MdmWindowsInformationProtectionPolicy>(requestInfo,deserializeIntoMdmWindowsInformationProtectionPolicy, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
