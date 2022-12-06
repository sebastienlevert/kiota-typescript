import {deserializeIntoScopedRoleMembership} from '../../models/deserializeIntoScopedRoleMembership';
import {deserializeIntoScopedRoleMembershipCollectionResponse} from '../../models/deserializeIntoScopedRoleMembershipCollectionResponse';
import {ODataError} from '../../models/oDataErrors/oDataError';
import {ScopedRoleMembership} from '../../models/scopedRoleMembership';
import {ScopedRoleMembershipCollectionResponse} from '../../models/scopedRoleMembershipCollectionResponse';
import {serializeScopedRoleMembership} from '../../models/serializeScopedRoleMembership';
import {serializeScopedRoleMembershipCollectionResponse} from '../../models/serializeScopedRoleMembershipCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ScopedRoleMemberOfRequestBuilderGetRequestConfiguration} from './scopedRoleMemberOfRequestBuilderGetRequestConfiguration';
import {ScopedRoleMemberOfRequestBuilderPostRequestConfiguration} from './scopedRoleMemberOfRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the scopedRoleMemberOf property of the microsoft.graph.user entity. */
export class ScopedRoleMemberOfRequestBuilder {
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
     * Instantiates a new ScopedRoleMemberOfRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/me/scopedRoleMemberOf{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get scopedRoleMemberOf from me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: ScopedRoleMemberOfRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to scopedRoleMemberOf for me
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: ScopedRoleMembership | undefined, requestConfiguration?: ScopedRoleMemberOfRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeScopedRoleMembership);
        return requestInfo;
    };
    /**
     * Get scopedRoleMemberOf from me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ScopedRoleMembershipCollectionResponse
     */
    public get(requestConfiguration?: ScopedRoleMemberOfRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ScopedRoleMembershipCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<ScopedRoleMembershipCollectionResponse>(requestInfo,deserializeIntoScopedRoleMembershipCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to scopedRoleMemberOf for me
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ScopedRoleMembership
     */
    public post(body: ScopedRoleMembership | undefined, requestConfiguration?: ScopedRoleMemberOfRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ScopedRoleMembership | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<ScopedRoleMembership>(requestInfo,deserializeIntoScopedRoleMembership, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
