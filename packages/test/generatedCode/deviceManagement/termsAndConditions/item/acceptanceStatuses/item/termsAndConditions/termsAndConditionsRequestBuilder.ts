import {deserializeIntoTermsAndConditions} from '../../../../../../models/deserializeIntoTermsAndConditions';
import {ODataError} from '../../../../../../models/oDataErrors/oDataError';
import {serializeTermsAndConditions} from '../../../../../../models/serializeTermsAndConditions';
import {TermsAndConditions} from '../../../../../../models/termsAndConditions';
import {TermsAndConditionsRequestBuilderGetRequestConfiguration} from './termsAndConditionsRequestBuilderGetRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the termsAndConditions property of the microsoft.graph.termsAndConditionsAcceptanceStatus entity. */
export class TermsAndConditionsRequestBuilder {
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new TermsAndConditionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceManagement/termsAndConditions/{termsAndConditions%2Did}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus%2Did}/termsAndConditions{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Navigation link to the terms and conditions that are assigned.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: TermsAndConditionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Navigation link to the terms and conditions that are assigned.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of TermsAndConditions
     */
    public get(requestConfiguration?: TermsAndConditionsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<TermsAndConditions | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<TermsAndConditions>(requestInfo,deserializeIntoTermsAndConditions, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
