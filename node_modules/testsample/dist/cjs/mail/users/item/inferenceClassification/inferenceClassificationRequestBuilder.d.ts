import { InferenceClassification } from '../../../models/microsoft/graph/inferenceClassification';
import { InferenceClassificationOverrideRequestBuilder } from './overrides/item/inferenceClassificationOverrideRequestBuilder';
import { OverridesRequestBuilder } from './overrides/overridesRequestBuilder';
import { RequestAdapter, RequestInformation, RequestOption, ResponseHandler } from '@microsoft/kiota-abstractions';
/** Builds and executes requests for operations under /users/{user-id}/inferenceClassification  */
export declare class InferenceClassificationRequestBuilder {
    get overrides(): OverridesRequestBuilder;
    /** Path parameters for the request  */
    private readonly pathParameters;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate;
    /**
     * Instantiates a new InferenceClassificationRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters: Map<string, unknown> | string | undefined, requestAdapter: RequestAdapter);
    /**
     * Relevance classification of the user's messages based on explicit designations which override inferred relevance or importance.
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    createDeleteRequestInformation(h?: object | undefined, o?: RequestOption[] | undefined): RequestInformation;
    /**
     * Relevance classification of the user's messages based on explicit designations which override inferred relevance or importance.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    createGetRequestInformation(q?: {
        select?: string[];
    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined): RequestInformation;
    /**
     * Relevance classification of the user's messages based on explicit designations which override inferred relevance or importance.
     * @param body
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    createPatchRequestInformation(body: InferenceClassification | undefined, h?: object | undefined, o?: RequestOption[] | undefined): RequestInformation;
    /**
     * Relevance classification of the user's messages based on explicit designations which override inferred relevance or importance.
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    delete(h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined): Promise<void>;
    /**
     * Relevance classification of the user's messages based on explicit designations which override inferred relevance or importance.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of InferenceClassification
     */
    get(q?: {
        select?: string[];
    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined): Promise<InferenceClassification | undefined>;
    /**
     * Gets an item from the MicrosoftGraph.users.item.inferenceClassification.overrides.item collection
     * @param id Unique identifier of the item
     * @returns a inferenceClassificationOverrideRequestBuilder
     */
    overridesById(id: string): InferenceClassificationOverrideRequestBuilder;
    /**
     * Relevance classification of the user's messages based on explicit designations which override inferred relevance or importance.
     * @param body
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    patch(body: InferenceClassification | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined): Promise<void>;
}
//# sourceMappingURL=inferenceClassificationRequestBuilder.d.ts.map