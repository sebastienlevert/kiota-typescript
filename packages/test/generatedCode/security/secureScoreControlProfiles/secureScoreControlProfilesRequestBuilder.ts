import {deserializeIntoSecureScoreControlProfile} from '../../models/deserializeIntoSecureScoreControlProfile';
import {deserializeIntoSecureScoreControlProfileCollectionResponse} from '../../models/deserializeIntoSecureScoreControlProfileCollectionResponse';
import {ODataError} from '../../models/oDataErrors/oDataError';
import {SecureScoreControlProfile} from '../../models/secureScoreControlProfile';
import {SecureScoreControlProfileCollectionResponse} from '../../models/secureScoreControlProfileCollectionResponse';
import {serializeSecureScoreControlProfile} from '../../models/serializeSecureScoreControlProfile';
import {serializeSecureScoreControlProfileCollectionResponse} from '../../models/serializeSecureScoreControlProfileCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {SecureScoreControlProfilesRequestBuilderGetRequestConfiguration} from './secureScoreControlProfilesRequestBuilderGetRequestConfiguration';
import {SecureScoreControlProfilesRequestBuilderPostRequestConfiguration} from './secureScoreControlProfilesRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the secureScoreControlProfiles property of the microsoft.graph.security entity. */
export class SecureScoreControlProfilesRequestBuilder {
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
     * Instantiates a new SecureScoreControlProfilesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/security/secureScoreControlProfiles{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Retrieve the properties and relationships of a secureScoreControlProfiles object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: SecureScoreControlProfilesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to secureScoreControlProfiles for security
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: SecureScoreControlProfile | undefined, requestConfiguration?: SecureScoreControlProfilesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeSecureScoreControlProfile);
        return requestInfo;
    };
    /**
     * Retrieve the properties and relationships of a secureScoreControlProfiles object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of SecureScoreControlProfileCollectionResponse
     */
    public get(requestConfiguration?: SecureScoreControlProfilesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<SecureScoreControlProfileCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<SecureScoreControlProfileCollectionResponse>(requestInfo,deserializeIntoSecureScoreControlProfileCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to secureScoreControlProfiles for security
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of SecureScoreControlProfile
     */
    public post(body: SecureScoreControlProfile | undefined, requestConfiguration?: SecureScoreControlProfilesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<SecureScoreControlProfile | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<SecureScoreControlProfile>(requestInfo,deserializeIntoSecureScoreControlProfile, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
