import {ODataError} from '../../../../../models/oDataErrors/oDataError';
import {deserializeIntoEdiscoveryNoncustodialDataSource} from '../../../../../models/security/deserializeIntoEdiscoveryNoncustodialDataSource';
import {deserializeIntoEdiscoveryNoncustodialDataSourceCollectionResponse} from '../../../../../models/security/deserializeIntoEdiscoveryNoncustodialDataSourceCollectionResponse';
import {EdiscoveryNoncustodialDataSource} from '../../../../../models/security/ediscoveryNoncustodialDataSource';
import {EdiscoveryNoncustodialDataSourceCollectionResponse} from '../../../../../models/security/ediscoveryNoncustodialDataSourceCollectionResponse';
import {serializeEdiscoveryNoncustodialDataSource} from '../../../../../models/security/serializeEdiscoveryNoncustodialDataSource';
import {serializeEdiscoveryNoncustodialDataSourceCollectionResponse} from '../../../../../models/security/serializeEdiscoveryNoncustodialDataSourceCollectionResponse';
import {ApplyHoldRequestBuilder} from './applyHold/applyHoldRequestBuilder';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {NoncustodialDataSourcesRequestBuilderGetRequestConfiguration} from './noncustodialDataSourcesRequestBuilderGetRequestConfiguration';
import {NoncustodialDataSourcesRequestBuilderPostRequestConfiguration} from './noncustodialDataSourcesRequestBuilderPostRequestConfiguration';
import {RemoveHoldRequestBuilder} from './removeHold/removeHoldRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the noncustodialDataSources property of the microsoft.graph.security.ediscoveryCase entity. */
export class NoncustodialDataSourcesRequestBuilder {
    /** Provides operations to call the applyHold method. */
    public get applyHold(): ApplyHoldRequestBuilder {
        return new ApplyHoldRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** Provides operations to call the removeHold method. */
    public get removeHold(): RemoveHoldRequestBuilder {
        return new RemoveHoldRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new NoncustodialDataSourcesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/noncustodialDataSources{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Returns a list of case ediscoveryNoncustodialDataSource objects for this case.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: NoncustodialDataSourcesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new ediscoveryNoncustodialDataSource object.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: EdiscoveryNoncustodialDataSource | undefined, requestConfiguration?: NoncustodialDataSourcesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeEdiscoveryNoncustodialDataSource);
        return requestInfo;
    };
    /**
     * Returns a list of case ediscoveryNoncustodialDataSource objects for this case.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EdiscoveryNoncustodialDataSourceCollectionResponse
     */
    public get(requestConfiguration?: NoncustodialDataSourcesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EdiscoveryNoncustodialDataSourceCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<EdiscoveryNoncustodialDataSourceCollectionResponse>(requestInfo,deserializeIntoEdiscoveryNoncustodialDataSourceCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create a new ediscoveryNoncustodialDataSource object.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EdiscoveryNoncustodialDataSource
     */
    public post(body: EdiscoveryNoncustodialDataSource | undefined, requestConfiguration?: NoncustodialDataSourcesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EdiscoveryNoncustodialDataSource | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<EdiscoveryNoncustodialDataSource>(requestInfo,deserializeIntoEdiscoveryNoncustodialDataSource, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
