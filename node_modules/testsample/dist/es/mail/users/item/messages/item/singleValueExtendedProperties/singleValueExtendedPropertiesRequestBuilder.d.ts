import { SingleValueLegacyExtendedProperty } from '../../../../../models/microsoft/graph/singleValueLegacyExtendedProperty';
import { SingleValueExtendedPropertiesResponse } from './singleValueExtendedPropertiesResponse';
import { RequestAdapter, RequestInformation, RequestOption, ResponseHandler } from '@microsoft/kiota-abstractions';
/** Builds and executes requests for operations under /users/{user-id}/messages/{message-id}/singleValueExtendedProperties  */
export declare class SingleValueExtendedPropertiesRequestBuilder {
    /** Path parameters for the request  */
    private readonly pathParameters;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate;
    /**
     * Instantiates a new SingleValueExtendedPropertiesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters: Map<string, unknown> | string | undefined, requestAdapter: RequestAdapter);
    /**
     * The collection of single-value extended properties defined for the message. Nullable.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    createGetRequestInformation(q?: {
        count?: boolean;
        expand?: string[];
        filter?: string;
        orderby?: string[];
        search?: string;
        select?: string[];
        skip?: number;
        top?: number;
    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined): RequestInformation;
    /**
     * The collection of single-value extended properties defined for the message. Nullable.
     * @param body
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    createPostRequestInformation(body: SingleValueLegacyExtendedProperty | undefined, h?: object | undefined, o?: RequestOption[] | undefined): RequestInformation;
    /**
     * The collection of single-value extended properties defined for the message. Nullable.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of SingleValueExtendedPropertiesResponse
     */
    get(q?: {
        count?: boolean;
        expand?: string[];
        filter?: string;
        orderby?: string[];
        search?: string;
        select?: string[];
        skip?: number;
        top?: number;
    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined): Promise<SingleValueExtendedPropertiesResponse | undefined>;
    /**
     * The collection of single-value extended properties defined for the message. Nullable.
     * @param body
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of SingleValueLegacyExtendedProperty
     */
    post(body: SingleValueLegacyExtendedProperty | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined): Promise<SingleValueLegacyExtendedProperty | undefined>;
}
//# sourceMappingURL=singleValueExtendedPropertiesRequestBuilder.d.ts.map