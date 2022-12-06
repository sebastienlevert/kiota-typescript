import {DataPolicyOperation} from '../models/dataPolicyOperation';
import {DataPolicyOperationCollectionResponse} from '../models/dataPolicyOperationCollectionResponse';
import {deserializeIntoDataPolicyOperation} from '../models/deserializeIntoDataPolicyOperation';
import {deserializeIntoDataPolicyOperationCollectionResponse} from '../models/deserializeIntoDataPolicyOperationCollectionResponse';
import {ODataError} from '../models/oDataErrors/oDataError';
import {serializeDataPolicyOperation} from '../models/serializeDataPolicyOperation';
import {serializeDataPolicyOperationCollectionResponse} from '../models/serializeDataPolicyOperationCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DataPolicyOperationsRequestBuilderGetRequestConfiguration} from './dataPolicyOperationsRequestBuilderGetRequestConfiguration';
import {DataPolicyOperationsRequestBuilderPostRequestConfiguration} from './dataPolicyOperationsRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of dataPolicyOperation entities. */
export class DataPolicyOperationsRequestBuilder {
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
     * Instantiates a new DataPolicyOperationsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/dataPolicyOperations{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Retrieve the properties of a **dataPolicyOperation** object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: DataPolicyOperationsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Add new entity to dataPolicyOperations
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: DataPolicyOperation | undefined, requestConfiguration?: DataPolicyOperationsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDataPolicyOperation);
        return requestInfo;
    };
    /**
     * Retrieve the properties of a **dataPolicyOperation** object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DataPolicyOperationCollectionResponse
     */
    public get(requestConfiguration?: DataPolicyOperationsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DataPolicyOperationCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<DataPolicyOperationCollectionResponse>(requestInfo,deserializeIntoDataPolicyOperationCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Add new entity to dataPolicyOperations
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DataPolicyOperation
     */
    public post(body: DataPolicyOperation | undefined, requestConfiguration?: DataPolicyOperationsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DataPolicyOperation | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<DataPolicyOperation>(requestInfo,deserializeIntoDataPolicyOperation, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
