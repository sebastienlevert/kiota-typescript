import {deserializeIntoWindowsHelloForBusinessAuthenticationMethod} from '../../../models/deserializeIntoWindowsHelloForBusinessAuthenticationMethod';
import {deserializeIntoWindowsHelloForBusinessAuthenticationMethodCollectionResponse} from '../../../models/deserializeIntoWindowsHelloForBusinessAuthenticationMethodCollectionResponse';
import {ODataError} from '../../../models/oDataErrors/oDataError';
import {serializeWindowsHelloForBusinessAuthenticationMethod} from '../../../models/serializeWindowsHelloForBusinessAuthenticationMethod';
import {serializeWindowsHelloForBusinessAuthenticationMethodCollectionResponse} from '../../../models/serializeWindowsHelloForBusinessAuthenticationMethodCollectionResponse';
import {WindowsHelloForBusinessAuthenticationMethod} from '../../../models/windowsHelloForBusinessAuthenticationMethod';
import {WindowsHelloForBusinessAuthenticationMethodCollectionResponse} from '../../../models/windowsHelloForBusinessAuthenticationMethodCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {WindowsHelloForBusinessMethodsRequestBuilderGetRequestConfiguration} from './windowsHelloForBusinessMethodsRequestBuilderGetRequestConfiguration';
import {WindowsHelloForBusinessMethodsRequestBuilderPostRequestConfiguration} from './windowsHelloForBusinessMethodsRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the windowsHelloForBusinessMethods property of the microsoft.graph.authentication entity. */
export class WindowsHelloForBusinessMethodsRequestBuilder {
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
     * Instantiates a new WindowsHelloForBusinessMethodsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/me/authentication/windowsHelloForBusinessMethods{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get a list of the windowsHelloForBusinessAuthenticationMethod objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: WindowsHelloForBusinessMethodsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to windowsHelloForBusinessMethods for me
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: WindowsHelloForBusinessAuthenticationMethod | undefined, requestConfiguration?: WindowsHelloForBusinessMethodsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeWindowsHelloForBusinessAuthenticationMethod);
        return requestInfo;
    };
    /**
     * Get a list of the windowsHelloForBusinessAuthenticationMethod objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WindowsHelloForBusinessAuthenticationMethodCollectionResponse
     */
    public get(requestConfiguration?: WindowsHelloForBusinessMethodsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WindowsHelloForBusinessAuthenticationMethodCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<WindowsHelloForBusinessAuthenticationMethodCollectionResponse>(requestInfo,deserializeIntoWindowsHelloForBusinessAuthenticationMethodCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to windowsHelloForBusinessMethods for me
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WindowsHelloForBusinessAuthenticationMethod
     */
    public post(body: WindowsHelloForBusinessAuthenticationMethod | undefined, requestConfiguration?: WindowsHelloForBusinessMethodsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WindowsHelloForBusinessAuthenticationMethod | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<WindowsHelloForBusinessAuthenticationMethod>(requestInfo,deserializeIntoWindowsHelloForBusinessAuthenticationMethod, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
