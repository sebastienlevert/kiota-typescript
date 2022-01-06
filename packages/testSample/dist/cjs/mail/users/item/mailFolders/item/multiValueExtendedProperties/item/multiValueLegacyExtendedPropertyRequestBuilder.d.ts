import { MultiValueLegacyExtendedProperty } from '../../../../../../models/microsoft/graph/multiValueLegacyExtendedProperty';
import { RequestAdapter, RequestInformation, RequestOption, ResponseHandler } from '@microsoft/kiota-abstractions';
/** Builds and executes requests for operations under /users/{user-id}/mailFolders/{mailFolder-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}  */
export declare class MultiValueLegacyExtendedPropertyRequestBuilder {
    /** Path parameters for the request  */
    private readonly pathParameters;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate;
    /**
     * Instantiates a new MultiValueLegacyExtendedPropertyRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters: Map<string, unknown> | string | undefined, requestAdapter: RequestAdapter);
    /**
     * The collection of multi-value extended properties defined for the mailFolder. Read-only. Nullable.
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    createDeleteRequestInformation(h?: object | undefined, o?: RequestOption[] | undefined): RequestInformation;
    /**
     * The collection of multi-value extended properties defined for the mailFolder. Read-only. Nullable.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    createGetRequestInformation(q?: {
        expand?: string[];
        select?: string[];
    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined): RequestInformation;
    /**
     * The collection of multi-value extended properties defined for the mailFolder. Read-only. Nullable.
     * @param body
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    createPatchRequestInformation(body: MultiValueLegacyExtendedProperty | undefined, h?: object | undefined, o?: RequestOption[] | undefined): RequestInformation;
    /**
     * The collection of multi-value extended properties defined for the mailFolder. Read-only. Nullable.
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    delete(h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined): Promise<void>;
    /**
     * The collection of multi-value extended properties defined for the mailFolder. Read-only. Nullable.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of MultiValueLegacyExtendedProperty
     */
    get(q?: {
        expand?: string[];
        select?: string[];
    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined): Promise<MultiValueLegacyExtendedProperty | undefined>;
    /**
     * The collection of multi-value extended properties defined for the mailFolder. Read-only. Nullable.
     * @param body
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    patch(body: MultiValueLegacyExtendedProperty | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined): Promise<void>;
}
//# sourceMappingURL=multiValueLegacyExtendedPropertyRequestBuilder.d.ts.map