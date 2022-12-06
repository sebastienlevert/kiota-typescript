import {ODataError} from '../../../../../../models/oDataErrors/oDataError';
import {deserializeIntoEdiscoverySearch} from '../../../../../../models/security/deserializeIntoEdiscoverySearch';
import {EdiscoverySearch} from '../../../../../../models/security/ediscoverySearch';
import {serializeEdiscoverySearch} from '../../../../../../models/security/serializeEdiscoverySearch';
import {AdditionalSourcesRequestBuilder} from './additionalSources/additionalSourcesRequestBuilder';
import {DataSourceItemRequestBuilder as i83db53ccbd81a2425774387273472b5092ea99c55ae00560ff33247edf0a9622} from './additionalSources/item/dataSourceItemRequestBuilder';
import {AddToReviewSetOperationRequestBuilder} from './addToReviewSetOperation/addToReviewSetOperationRequestBuilder';
import {CustodianSourcesRequestBuilder} from './custodianSources/custodianSourcesRequestBuilder';
import {DataSourceItemRequestBuilder as i5e127fb8be6ea45f307f4225ee8e56fbdcbe9ac3742985eab1ff3efd7d8395f4} from './custodianSources/item/dataSourceItemRequestBuilder';
import {EdiscoverySearchItemRequestBuilderDeleteRequestConfiguration} from './ediscoverySearchItemRequestBuilderDeleteRequestConfiguration';
import {EdiscoverySearchItemRequestBuilderGetRequestConfiguration} from './ediscoverySearchItemRequestBuilderGetRequestConfiguration';
import {EdiscoverySearchItemRequestBuilderPatchRequestConfiguration} from './ediscoverySearchItemRequestBuilderPatchRequestConfiguration';
import {EstimateStatisticsRequestBuilder} from './estimateStatistics/estimateStatisticsRequestBuilder';
import {LastEstimateStatisticsOperationRequestBuilder} from './lastEstimateStatisticsOperation/lastEstimateStatisticsOperationRequestBuilder';
import {EdiscoveryNoncustodialDataSourceItemRequestBuilder} from './noncustodialSources/item/ediscoveryNoncustodialDataSourceItemRequestBuilder';
import {NoncustodialSourcesRequestBuilder} from './noncustodialSources/noncustodialSourcesRequestBuilder';
import {PurgeDataRequestBuilder} from './purgeData/purgeDataRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the searches property of the microsoft.graph.security.ediscoveryCase entity. */
export class EdiscoverySearchItemRequestBuilder {
    /** Provides operations to manage the additionalSources property of the microsoft.graph.security.ediscoverySearch entity. */
    public get additionalSources(): AdditionalSourcesRequestBuilder {
        return new AdditionalSourcesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the addToReviewSetOperation property of the microsoft.graph.security.ediscoverySearch entity. */
    public get addToReviewSetOperation(): AddToReviewSetOperationRequestBuilder {
        return new AddToReviewSetOperationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the custodianSources property of the microsoft.graph.security.ediscoverySearch entity. */
    public get custodianSources(): CustodianSourcesRequestBuilder {
        return new CustodianSourcesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the estimateStatistics method. */
    public get estimateStatistics(): EstimateStatisticsRequestBuilder {
        return new EstimateStatisticsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the lastEstimateStatisticsOperation property of the microsoft.graph.security.ediscoverySearch entity. */
    public get lastEstimateStatisticsOperation(): LastEstimateStatisticsOperationRequestBuilder {
        return new LastEstimateStatisticsOperationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the noncustodialSources property of the microsoft.graph.security.ediscoverySearch entity. */
    public get noncustodialSources(): NoncustodialSourcesRequestBuilder {
        return new NoncustodialSourcesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** Provides operations to call the purgeData method. */
    public get purgeData(): PurgeDataRequestBuilder {
        return new PurgeDataRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Provides operations to manage the additionalSources property of the microsoft.graph.security.ediscoverySearch entity.
     * @param id Unique identifier of the item
     * @returns a DataSourceItemRequestBuilder
     */
    public additionalSourcesById(id: string) : i83db53ccbd81a2425774387273472b5092ea99c55ae00560ff33247edf0a9622 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["dataSource%2Did"] = id
        return new i83db53ccbd81a2425774387273472b5092ea99c55ae00560ff33247edf0a9622(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new EdiscoverySearchItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/searches/{ediscoverySearch%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property searches for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: EdiscoverySearchItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Returns a list of eDiscoverySearch objects associated with this case.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: EdiscoverySearchItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property searches in security
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: EdiscoverySearch | undefined, requestConfiguration?: EdiscoverySearchItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeEdiscoverySearch);
        return requestInfo;
    };
    /**
     * Provides operations to manage the custodianSources property of the microsoft.graph.security.ediscoverySearch entity.
     * @param id Unique identifier of the item
     * @returns a DataSourceItemRequestBuilder
     */
    public custodianSourcesById(id: string) : i5e127fb8be6ea45f307f4225ee8e56fbdcbe9ac3742985eab1ff3efd7d8395f4 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["dataSource%2Did"] = id
        return new i5e127fb8be6ea45f307f4225ee8e56fbdcbe9ac3742985eab1ff3efd7d8395f4(urlTplParams, this.requestAdapter);
    };
    /**
     * Delete navigation property searches for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: EdiscoverySearchItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Returns a list of eDiscoverySearch objects associated with this case.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EdiscoverySearch
     */
    public get(requestConfiguration?: EdiscoverySearchItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EdiscoverySearch | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<EdiscoverySearch>(requestInfo,deserializeIntoEdiscoverySearch, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the noncustodialSources property of the microsoft.graph.security.ediscoverySearch entity.
     * @param id Unique identifier of the item
     * @returns a EdiscoveryNoncustodialDataSourceItemRequestBuilder
     */
    public noncustodialSourcesById(id: string) : EdiscoveryNoncustodialDataSourceItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["ediscoveryNoncustodialDataSource%2Did"] = id
        return new EdiscoveryNoncustodialDataSourceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property searches in security
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EdiscoverySearch
     */
    public patch(body: EdiscoverySearch | undefined, requestConfiguration?: EdiscoverySearchItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EdiscoverySearch | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<EdiscoverySearch>(requestInfo,deserializeIntoEdiscoverySearch, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
