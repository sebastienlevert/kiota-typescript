import {ContentType} from '../../../../../../../models/contentType';
import {deserializeIntoContentType} from '../../../../../../../models/deserializeIntoContentType';
import {ODataError} from '../../../../../../../models/oDataErrors/oDataError';
import {serializeContentType} from '../../../../../../../models/serializeContentType';
import {AssociateWithHubSitesRequestBuilder} from './associateWithHubSites/associateWithHubSitesRequestBuilder';
import {BaseRequestBuilder} from './base/baseRequestBuilder';
import {BaseTypesRequestBuilder} from './baseTypes/baseTypesRequestBuilder';
import {ContentTypeItemRequestBuilder as ic9545ffc7b845942153915449e9a031a68af6d200b3596313c688d1d450f1432} from './baseTypes/item/contentTypeItemRequestBuilder';
import {ColumnLinksRequestBuilder} from './columnLinks/columnLinksRequestBuilder';
import {ColumnLinkItemRequestBuilder} from './columnLinks/item/columnLinkItemRequestBuilder';
import {ColumnPositionsRequestBuilder} from './columnPositions/columnPositionsRequestBuilder';
import {ColumnDefinitionItemRequestBuilder as ic8e61f5ddcb145c77a3678774b42aaad54517817cfcbe0433a46dd0dbb510adf} from './columnPositions/item/columnDefinitionItemRequestBuilder';
import {ColumnsRequestBuilder} from './columns/columnsRequestBuilder';
import {ColumnDefinitionItemRequestBuilder as i843c0763bacbe8b35f61513d7bba548e9c5f6d2918a4c15e533a4402e63fc2f3} from './columns/item/columnDefinitionItemRequestBuilder';
import {ContentTypeItemRequestBuilderDeleteRequestConfiguration} from './contentTypeItemRequestBuilderDeleteRequestConfiguration';
import {ContentTypeItemRequestBuilderGetRequestConfiguration} from './contentTypeItemRequestBuilderGetRequestConfiguration';
import {ContentTypeItemRequestBuilderPatchRequestConfiguration} from './contentTypeItemRequestBuilderPatchRequestConfiguration';
import {CopyToDefaultContentLocationRequestBuilder} from './copyToDefaultContentLocation/copyToDefaultContentLocationRequestBuilder';
import {IsPublishedRequestBuilder} from './isPublished/isPublishedRequestBuilder';
import {PublishRequestBuilder} from './publish/publishRequestBuilder';
import {UnpublishRequestBuilder} from './unpublish/unpublishRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the contentTypes property of the microsoft.graph.list entity. */
export class ContentTypeItemRequestBuilder {
    /** Provides operations to call the associateWithHubSites method. */
    public get associateWithHubSites(): AssociateWithHubSitesRequestBuilder {
        return new AssociateWithHubSitesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the base property of the microsoft.graph.contentType entity. */
    public get base(): BaseRequestBuilder {
        return new BaseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the baseTypes property of the microsoft.graph.contentType entity. */
    public get baseTypes(): BaseTypesRequestBuilder {
        return new BaseTypesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the columnLinks property of the microsoft.graph.contentType entity. */
    public get columnLinks(): ColumnLinksRequestBuilder {
        return new ColumnLinksRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the columnPositions property of the microsoft.graph.contentType entity. */
    public get columnPositions(): ColumnPositionsRequestBuilder {
        return new ColumnPositionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the columns property of the microsoft.graph.contentType entity. */
    public get columns(): ColumnsRequestBuilder {
        return new ColumnsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the copyToDefaultContentLocation method. */
    public get copyToDefaultContentLocation(): CopyToDefaultContentLocationRequestBuilder {
        return new CopyToDefaultContentLocationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** Provides operations to call the publish method. */
    public get publish(): PublishRequestBuilder {
        return new PublishRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Provides operations to call the unpublish method. */
    public get unpublish(): UnpublishRequestBuilder {
        return new UnpublishRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Provides operations to manage the baseTypes property of the microsoft.graph.contentType entity.
     * @param id Unique identifier of the item
     * @returns a ContentTypeItemRequestBuilder
     */
    public baseTypesById(id: string) : ic9545ffc7b845942153915449e9a031a68af6d200b3596313c688d1d450f1432 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["contentType%2Did1"] = id
        return new ic9545ffc7b845942153915449e9a031a68af6d200b3596313c688d1d450f1432(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the columnLinks property of the microsoft.graph.contentType entity.
     * @param id Unique identifier of the item
     * @returns a ColumnLinkItemRequestBuilder
     */
    public columnLinksById(id: string) : ColumnLinkItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["columnLink%2Did"] = id
        return new ColumnLinkItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the columnPositions property of the microsoft.graph.contentType entity.
     * @param id Unique identifier of the item
     * @returns a ColumnDefinitionItemRequestBuilder
     */
    public columnPositionsById(id: string) : ic8e61f5ddcb145c77a3678774b42aaad54517817cfcbe0433a46dd0dbb510adf {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["columnDefinition%2Did"] = id
        return new ic8e61f5ddcb145c77a3678774b42aaad54517817cfcbe0433a46dd0dbb510adf(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the columns property of the microsoft.graph.contentType entity.
     * @param id Unique identifier of the item
     * @returns a ColumnDefinitionItemRequestBuilder
     */
    public columnsById(id: string) : i843c0763bacbe8b35f61513d7bba548e9c5f6d2918a4c15e533a4402e63fc2f3 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["columnDefinition%2Did"] = id
        return new i843c0763bacbe8b35f61513d7bba548e9c5f6d2918a4c15e533a4402e63fc2f3(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ContentTypeItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/users/{user%2Did}/drives/{drive%2Did}/list/contentTypes/{contentType%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property contentTypes for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: ContentTypeItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The collection of content types present in this list.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: ContentTypeItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property contentTypes in users
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: ContentType | undefined, requestConfiguration?: ContentTypeItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeContentType);
        return requestInfo;
    };
    /**
     * Delete navigation property contentTypes for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: ContentTypeItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The collection of content types present in this list.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ContentType
     */
    public get(requestConfiguration?: ContentTypeItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ContentType | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<ContentType>(requestInfo,deserializeIntoContentType, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to call the isPublished method.
     * @returns a isPublishedRequestBuilder
     */
    public isPublished() : IsPublishedRequestBuilder {
        return new IsPublishedRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Update the navigation property contentTypes in users
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ContentType
     */
    public patch(body: ContentType | undefined, requestConfiguration?: ContentTypeItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ContentType | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<ContentType>(requestInfo,deserializeIntoContentType, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
