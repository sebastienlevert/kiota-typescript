import {deserializeIntoPet} from '../models/deserializeIntoPet';
import {Pet} from '../models/pet';
import {serializePet} from '../models/serializePet';
import {FindByStatusRequestBuilder} from './findByStatus/findByStatusRequestBuilder';
import {FindByTagsRequestBuilder} from './findByTags/findByTagsRequestBuilder';
import {PetRequestBuilderPostRequestConfiguration} from './petRequestBuilderPostRequestConfiguration';
import {PetRequestBuilderPutRequestConfiguration} from './petRequestBuilderPutRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /pet */
export class PetRequestBuilder {
    /** The findByStatus property */
    public get findByStatus(): FindByStatusRequestBuilder {
        return new FindByStatusRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The findByTags property */
    public get findByTags(): FindByTagsRequestBuilder {
        return new FindByTagsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new PetRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/pet";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Add a new pet to the store
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: Pet | undefined, requestConfiguration?: PetRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = "application/xml";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializePet);
        return requestInfo;
    };
    /**
     * Update an existing pet by Id
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPutRequestInformation(body: Pet | undefined, requestConfiguration?: PetRequestBuilderPutRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PUT;
        requestInfo.headers["Accept"] = "application/xml";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializePet);
        return requestInfo;
    };
    /**
     * Add a new pet to the store
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Pet
     */
    public post(body: Pet | undefined, requestConfiguration?: PetRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Pet | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<Pet>(requestInfo,deserializeIntoPet, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update an existing pet by Id
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Pet
     */
    public put(body: Pet | undefined, requestConfiguration?: PetRequestBuilderPutRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Pet | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPutRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<Pet>(requestInfo,deserializeIntoPet, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
