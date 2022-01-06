import { MultiValueLegacyExtendedProperty } from '../../../../../models/microsoft/graph/multiValueLegacyExtendedProperty';
import { MultiValueExtendedPropertiesResponse } from './multiValueExtendedPropertiesResponse';
import { RequestAdapter, RequestInformation, RequestOption, ResponseHandler } from '@microsoft/kiota-abstractions';
/** Builds and executes requests for operations under /users/{user-id}/messages/{message-id}/multiValueExtendedProperties  */
export declare class MultiValueExtendedPropertiesRequestBuilder {
    /** Path parameters for the request  */
    private readonly pathParameters;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate;
    /**
     * Instantiates a new MultiValueExtendedPropertiesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters: Map<string, unknown> | string | undefined, requestAdapter: RequestAdapter);
    /**
     * The collection of multi-value extended properties defined for the message. Nullable.
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
     * The collection of multi-value extended properties defined for the message. Nullable.
     * @param body
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    createPostRequestInformation(body: MultiValueLegacyExtendedProperty | undefined, h?: object | undefined, o?: RequestOption[] | undefined): RequestInformation;
    /**
     * The collection of multi-value extended properties defined for the message. Nullable.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of MultiValueExtendedPropertiesResponse
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
    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined): Promise<MultiValueExtendedPropertiesResponse | undefined>;
    /**
     * The collection of multi-value extended properties defined for the message. Nullable.
     * @param body
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of MultiValueLegacyExtendedProperty
     */
    post(body: MultiValueLegacyExtendedProperty | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined): Promise<MultiValueLegacyExtendedProperty | undefined>;
}
//# sourceMappingURL=multiValueExtendedPropertiesRequestBuilder.d.ts.map