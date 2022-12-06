import {deserializeIntoEmailAuthenticationMethod} from '../../../models/deserializeIntoEmailAuthenticationMethod';
import {deserializeIntoEmailAuthenticationMethodCollectionResponse} from '../../../models/deserializeIntoEmailAuthenticationMethodCollectionResponse';
import {EmailAuthenticationMethod} from '../../../models/emailAuthenticationMethod';
import {EmailAuthenticationMethodCollectionResponse} from '../../../models/emailAuthenticationMethodCollectionResponse';
import {ODataError} from '../../../models/oDataErrors/oDataError';
import {serializeEmailAuthenticationMethod} from '../../../models/serializeEmailAuthenticationMethod';
import {serializeEmailAuthenticationMethodCollectionResponse} from '../../../models/serializeEmailAuthenticationMethodCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {EmailMethodsRequestBuilderGetRequestConfiguration} from './emailMethodsRequestBuilderGetRequestConfiguration';
import {EmailMethodsRequestBuilderPostRequestConfiguration} from './emailMethodsRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the emailMethods property of the microsoft.graph.authentication entity. */
export class EmailMethodsRequestBuilder {
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
     * Instantiates a new EmailMethodsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/me/authentication/emailMethods{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Retrieve a list of a user's emailAuthenticationMethod objects and their properties. This API will return only a single object in the collection as only one email method can be set for a user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: EmailMethodsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Set a user's emailAuthenticationMethod object. Email authentication is a self-service password reset method. A user may only have one email authentication method.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: EmailAuthenticationMethod | undefined, requestConfiguration?: EmailMethodsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeEmailAuthenticationMethod);
        return requestInfo;
    };
    /**
     * Retrieve a list of a user's emailAuthenticationMethod objects and their properties. This API will return only a single object in the collection as only one email method can be set for a user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EmailAuthenticationMethodCollectionResponse
     */
    public get(requestConfiguration?: EmailMethodsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EmailAuthenticationMethodCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<EmailAuthenticationMethodCollectionResponse>(requestInfo,deserializeIntoEmailAuthenticationMethodCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Set a user's emailAuthenticationMethod object. Email authentication is a self-service password reset method. A user may only have one email authentication method.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EmailAuthenticationMethod
     */
    public post(body: EmailAuthenticationMethod | undefined, requestConfiguration?: EmailMethodsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EmailAuthenticationMethod | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<EmailAuthenticationMethod>(requestInfo,deserializeIntoEmailAuthenticationMethod, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
