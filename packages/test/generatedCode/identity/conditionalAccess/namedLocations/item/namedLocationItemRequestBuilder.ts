import {deserializeIntoNamedLocation} from '../../../../models/deserializeIntoNamedLocation';
import {NamedLocation} from '../../../../models/namedLocation';
import {ODataError} from '../../../../models/oDataErrors/oDataError';
import {serializeNamedLocation} from '../../../../models/serializeNamedLocation';
import {NamedLocationItemRequestBuilderDeleteRequestConfiguration} from './namedLocationItemRequestBuilderDeleteRequestConfiguration';
import {NamedLocationItemRequestBuilderGetRequestConfiguration} from './namedLocationItemRequestBuilderGetRequestConfiguration';
import {NamedLocationItemRequestBuilderPatchRequestConfiguration} from './namedLocationItemRequestBuilderPatchRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the namedLocations property of the microsoft.graph.conditionalAccessRoot entity. */
export class NamedLocationItemRequestBuilder {
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new NamedLocationItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/identity/conditionalAccess/namedLocations/{namedLocation%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property namedLocations for identity
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: NamedLocationItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read-only. Nullable. Returns a collection of the specified named locations.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: NamedLocationItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property namedLocations in identity
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: NamedLocation | undefined, requestConfiguration?: NamedLocationItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeNamedLocation);
        return requestInfo;
    };
    /**
     * Delete navigation property namedLocations for identity
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: NamedLocationItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Read-only. Nullable. Returns a collection of the specified named locations.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of NamedLocation
     */
    public get(requestConfiguration?: NamedLocationItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<NamedLocation | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<NamedLocation>(requestInfo,deserializeIntoNamedLocation, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property namedLocations in identity
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of NamedLocation
     */
    public patch(body: NamedLocation | undefined, requestConfiguration?: NamedLocationItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<NamedLocation | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<NamedLocation>(requestInfo,deserializeIntoNamedLocation, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
