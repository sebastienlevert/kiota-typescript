import {deserializeIntoMicrosoftAuthenticatorAuthenticationMethod} from '../../../../models/deserializeIntoMicrosoftAuthenticatorAuthenticationMethod';
import {deserializeIntoMicrosoftAuthenticatorAuthenticationMethodCollectionResponse} from '../../../../models/deserializeIntoMicrosoftAuthenticatorAuthenticationMethodCollectionResponse';
import {MicrosoftAuthenticatorAuthenticationMethod} from '../../../../models/microsoftAuthenticatorAuthenticationMethod';
import {MicrosoftAuthenticatorAuthenticationMethodCollectionResponse} from '../../../../models/microsoftAuthenticatorAuthenticationMethodCollectionResponse';
import {ODataError} from '../../../../models/oDataErrors/oDataError';
import {serializeMicrosoftAuthenticatorAuthenticationMethod} from '../../../../models/serializeMicrosoftAuthenticatorAuthenticationMethod';
import {serializeMicrosoftAuthenticatorAuthenticationMethodCollectionResponse} from '../../../../models/serializeMicrosoftAuthenticatorAuthenticationMethodCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {MicrosoftAuthenticatorMethodsRequestBuilderGetRequestConfiguration} from './microsoftAuthenticatorMethodsRequestBuilderGetRequestConfiguration';
import {MicrosoftAuthenticatorMethodsRequestBuilderPostRequestConfiguration} from './microsoftAuthenticatorMethodsRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the microsoftAuthenticatorMethods property of the microsoft.graph.authentication entity. */
export class MicrosoftAuthenticatorMethodsRequestBuilder {
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
     * Instantiates a new MicrosoftAuthenticatorMethodsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/users/{user%2Did}/authentication/microsoftAuthenticatorMethods{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get a list of the microsoftAuthenticatorAuthenticationMethod objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: MicrosoftAuthenticatorMethodsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to microsoftAuthenticatorMethods for users
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: MicrosoftAuthenticatorAuthenticationMethod | undefined, requestConfiguration?: MicrosoftAuthenticatorMethodsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeMicrosoftAuthenticatorAuthenticationMethod);
        return requestInfo;
    };
    /**
     * Get a list of the microsoftAuthenticatorAuthenticationMethod objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of MicrosoftAuthenticatorAuthenticationMethodCollectionResponse
     */
    public get(requestConfiguration?: MicrosoftAuthenticatorMethodsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<MicrosoftAuthenticatorAuthenticationMethodCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<MicrosoftAuthenticatorAuthenticationMethodCollectionResponse>(requestInfo,deserializeIntoMicrosoftAuthenticatorAuthenticationMethodCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to microsoftAuthenticatorMethods for users
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of MicrosoftAuthenticatorAuthenticationMethod
     */
    public post(body: MicrosoftAuthenticatorAuthenticationMethod | undefined, requestConfiguration?: MicrosoftAuthenticatorMethodsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<MicrosoftAuthenticatorAuthenticationMethod | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<MicrosoftAuthenticatorAuthenticationMethod>(requestInfo,deserializeIntoMicrosoftAuthenticatorAuthenticationMethod, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
