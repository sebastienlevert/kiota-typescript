import {deserializeIntoSingleValueLegacyExtendedProperty} from '../../../../../models/deserializeIntoSingleValueLegacyExtendedProperty';
import {ODataError} from '../../../../../models/oDataErrors/oDataError';
import {serializeSingleValueLegacyExtendedProperty} from '../../../../../models/serializeSingleValueLegacyExtendedProperty';
import {SingleValueLegacyExtendedProperty} from '../../../../../models/singleValueLegacyExtendedProperty';
import {SingleValueLegacyExtendedPropertyItemRequestBuilderDeleteRequestConfiguration} from './singleValueLegacyExtendedPropertyItemRequestBuilderDeleteRequestConfiguration';
import {SingleValueLegacyExtendedPropertyItemRequestBuilderGetRequestConfiguration} from './singleValueLegacyExtendedPropertyItemRequestBuilderGetRequestConfiguration';
import {SingleValueLegacyExtendedPropertyItemRequestBuilderPatchRequestConfiguration} from './singleValueLegacyExtendedPropertyItemRequestBuilderPatchRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the singleValueExtendedProperties property of the microsoft.graph.calendar entity. */
export class SingleValueLegacyExtendedPropertyItemRequestBuilder {
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new SingleValueLegacyExtendedPropertyItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/users/{user%2Did}/calendar/singleValueExtendedProperties/{singleValueLegacyExtendedProperty%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property singleValueExtendedProperties for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: SingleValueLegacyExtendedPropertyItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The collection of single-value extended properties defined for the calendar. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: SingleValueLegacyExtendedPropertyItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property singleValueExtendedProperties in users
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: SingleValueLegacyExtendedProperty | undefined, requestConfiguration?: SingleValueLegacyExtendedPropertyItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeSingleValueLegacyExtendedProperty);
        return requestInfo;
    };
    /**
     * Delete navigation property singleValueExtendedProperties for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: SingleValueLegacyExtendedPropertyItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The collection of single-value extended properties defined for the calendar. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of SingleValueLegacyExtendedProperty
     */
    public get(requestConfiguration?: SingleValueLegacyExtendedPropertyItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<SingleValueLegacyExtendedProperty | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<SingleValueLegacyExtendedProperty>(requestInfo,deserializeIntoSingleValueLegacyExtendedProperty, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property singleValueExtendedProperties in users
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of SingleValueLegacyExtendedProperty
     */
    public patch(body: SingleValueLegacyExtendedProperty | undefined, requestConfiguration?: SingleValueLegacyExtendedPropertyItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<SingleValueLegacyExtendedProperty | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<SingleValueLegacyExtendedProperty>(requestInfo,deserializeIntoSingleValueLegacyExtendedProperty, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
