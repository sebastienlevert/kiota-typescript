import {AuthenticationContextClassReference} from '../../../models/authenticationContextClassReference';
import {AuthenticationContextClassReferenceCollectionResponse} from '../../../models/authenticationContextClassReferenceCollectionResponse';
import {deserializeIntoAuthenticationContextClassReference} from '../../../models/deserializeIntoAuthenticationContextClassReference';
import {deserializeIntoAuthenticationContextClassReferenceCollectionResponse} from '../../../models/deserializeIntoAuthenticationContextClassReferenceCollectionResponse';
import {ODataError} from '../../../models/oDataErrors/oDataError';
import {serializeAuthenticationContextClassReference} from '../../../models/serializeAuthenticationContextClassReference';
import {serializeAuthenticationContextClassReferenceCollectionResponse} from '../../../models/serializeAuthenticationContextClassReferenceCollectionResponse';
import {AuthenticationContextClassReferencesRequestBuilderGetRequestConfiguration} from './authenticationContextClassReferencesRequestBuilderGetRequestConfiguration';
import {AuthenticationContextClassReferencesRequestBuilderPostRequestConfiguration} from './authenticationContextClassReferencesRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the authenticationContextClassReferences property of the microsoft.graph.conditionalAccessRoot entity. */
export class AuthenticationContextClassReferencesRequestBuilder {
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
     * Instantiates a new AuthenticationContextClassReferencesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/identity/conditionalAccess/authenticationContextClassReferences{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Retrieve a list of authenticationContextClassReference objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: AuthenticationContextClassReferencesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to authenticationContextClassReferences for identity
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: AuthenticationContextClassReference | undefined, requestConfiguration?: AuthenticationContextClassReferencesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAuthenticationContextClassReference);
        return requestInfo;
    };
    /**
     * Retrieve a list of authenticationContextClassReference objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AuthenticationContextClassReferenceCollectionResponse
     */
    public get(requestConfiguration?: AuthenticationContextClassReferencesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AuthenticationContextClassReferenceCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<AuthenticationContextClassReferenceCollectionResponse>(requestInfo,deserializeIntoAuthenticationContextClassReferenceCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to authenticationContextClassReferences for identity
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AuthenticationContextClassReference
     */
    public post(body: AuthenticationContextClassReference | undefined, requestConfiguration?: AuthenticationContextClassReferencesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AuthenticationContextClassReference | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<AuthenticationContextClassReference>(requestInfo,deserializeIntoAuthenticationContextClassReference, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
