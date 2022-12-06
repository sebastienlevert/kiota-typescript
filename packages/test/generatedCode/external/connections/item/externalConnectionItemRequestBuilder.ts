import {deserializeIntoExternalConnection} from '../../../models/externalConnectors/deserializeIntoExternalConnection';
import {ExternalConnection} from '../../../models/externalConnectors/externalConnection';
import {serializeExternalConnection} from '../../../models/externalConnectors/serializeExternalConnection';
import {ODataError} from '../../../models/oDataErrors/oDataError';
import {ExternalConnectionItemRequestBuilderDeleteRequestConfiguration} from './externalConnectionItemRequestBuilderDeleteRequestConfiguration';
import {ExternalConnectionItemRequestBuilderGetRequestConfiguration} from './externalConnectionItemRequestBuilderGetRequestConfiguration';
import {ExternalConnectionItemRequestBuilderPatchRequestConfiguration} from './externalConnectionItemRequestBuilderPatchRequestConfiguration';
import {GroupsRequestBuilder} from './groups/groupsRequestBuilder';
import {ExternalGroupItemRequestBuilder} from './groups/item/externalGroupItemRequestBuilder';
import {ExternalItemItemRequestBuilder} from './items/item/externalItemItemRequestBuilder';
import {ItemsRequestBuilder} from './items/itemsRequestBuilder';
import {ConnectionOperationItemRequestBuilder} from './operations/item/connectionOperationItemRequestBuilder';
import {OperationsRequestBuilder} from './operations/operationsRequestBuilder';
import {SchemaRequestBuilder} from './schema/schemaRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the connections property of the microsoft.graph.externalConnectors.external entity. */
export class ExternalConnectionItemRequestBuilder {
    /** Provides operations to manage the groups property of the microsoft.graph.externalConnectors.externalConnection entity. */
    public get groups(): GroupsRequestBuilder {
        return new GroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the items property of the microsoft.graph.externalConnectors.externalConnection entity. */
    public get items(): ItemsRequestBuilder {
        return new ItemsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the operations property of the microsoft.graph.externalConnectors.externalConnection entity. */
    public get operations(): OperationsRequestBuilder {
        return new OperationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Provides operations to manage the schema property of the microsoft.graph.externalConnectors.externalConnection entity. */
    public get schema(): SchemaRequestBuilder {
        return new SchemaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new ExternalConnectionItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/external/connections/{externalConnection%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property connections for external
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: ExternalConnectionItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get connections from external
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: ExternalConnectionItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property connections in external
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: ExternalConnection | undefined, requestConfiguration?: ExternalConnectionItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeExternalConnection);
        return requestInfo;
    };
    /**
     * Delete navigation property connections for external
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: ExternalConnectionItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get connections from external
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ExternalConnection
     */
    public get(requestConfiguration?: ExternalConnectionItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ExternalConnection | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<ExternalConnection>(requestInfo,deserializeIntoExternalConnection, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the groups property of the microsoft.graph.externalConnectors.externalConnection entity.
     * @param id Unique identifier of the item
     * @returns a ExternalGroupItemRequestBuilder
     */
    public groupsById(id: string) : ExternalGroupItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["externalGroup%2Did"] = id
        return new ExternalGroupItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the items property of the microsoft.graph.externalConnectors.externalConnection entity.
     * @param id Unique identifier of the item
     * @returns a ExternalItemItemRequestBuilder
     */
    public itemsById(id: string) : ExternalItemItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["externalItem%2Did"] = id
        return new ExternalItemItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the operations property of the microsoft.graph.externalConnectors.externalConnection entity.
     * @param id Unique identifier of the item
     * @returns a ConnectionOperationItemRequestBuilder
     */
    public operationsById(id: string) : ConnectionOperationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["connectionOperation%2Did"] = id
        return new ConnectionOperationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property connections in external
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ExternalConnection
     */
    public patch(body: ExternalConnection | undefined, requestConfiguration?: ExternalConnectionItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ExternalConnection | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<ExternalConnection>(requestInfo,deserializeIntoExternalConnection, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
