import {ODataError} from '../../../../models/oDataErrors/oDataError';
import {deserializeIntoSupportedLanguagesResponse} from './deserializeIntoSupportedLanguagesResponse';
import {serializeSupportedLanguagesResponse} from './serializeSupportedLanguagesResponse';
import {SupportedLanguagesRequestBuilderGetRequestConfiguration} from './supportedLanguagesRequestBuilderGetRequestConfiguration';
import {SupportedLanguagesResponse} from './supportedLanguagesResponse';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to call the supportedLanguages method. */
export class SupportedLanguagesRequestBuilder {
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new SupportedLanguagesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/users/{user%2Did}/outlook/microsoft.graph.supportedLanguages(){?%24top,%24skip,%24search,%24filter,%24count}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get the list of locales and languages that are supported for the user, as configured on the user's mailbox server. When setting up an Outlook client, the user selects the preferred language from this supported list. You can subsequently get the preferred language by getting the user's mailbox settings.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: SupportedLanguagesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Get the list of locales and languages that are supported for the user, as configured on the user's mailbox server. When setting up an Outlook client, the user selects the preferred language from this supported list. You can subsequently get the preferred language by getting the user's mailbox settings.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of SupportedLanguagesResponse
     */
    public get(requestConfiguration?: SupportedLanguagesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<SupportedLanguagesResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<SupportedLanguagesResponse>(requestInfo,deserializeIntoSupportedLanguagesResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
