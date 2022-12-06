import {deserializeIntoEducationRubric} from '../../../models/deserializeIntoEducationRubric';
import {deserializeIntoEducationRubricCollectionResponse} from '../../../models/deserializeIntoEducationRubricCollectionResponse';
import {EducationRubric} from '../../../models/educationRubric';
import {EducationRubricCollectionResponse} from '../../../models/educationRubricCollectionResponse';
import {ODataError} from '../../../models/oDataErrors/oDataError';
import {serializeEducationRubric} from '../../../models/serializeEducationRubric';
import {serializeEducationRubricCollectionResponse} from '../../../models/serializeEducationRubricCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {RubricsRequestBuilderGetRequestConfiguration} from './rubricsRequestBuilderGetRequestConfiguration';
import {RubricsRequestBuilderPostRequestConfiguration} from './rubricsRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the rubrics property of the microsoft.graph.educationUser entity. */
export class RubricsRequestBuilder {
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
     * Instantiates a new RubricsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/education/me/rubrics{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Retrieve a list of educationRubric objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: RubricsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new educationRubric object.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: EducationRubric | undefined, requestConfiguration?: RubricsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeEducationRubric);
        return requestInfo;
    };
    /**
     * Retrieve a list of educationRubric objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EducationRubricCollectionResponse
     */
    public get(requestConfiguration?: RubricsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EducationRubricCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<EducationRubricCollectionResponse>(requestInfo,deserializeIntoEducationRubricCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create a new educationRubric object.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EducationRubric
     */
    public post(body: EducationRubric | undefined, requestConfiguration?: RubricsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EducationRubric | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<EducationRubric>(requestInfo,deserializeIntoEducationRubric, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
