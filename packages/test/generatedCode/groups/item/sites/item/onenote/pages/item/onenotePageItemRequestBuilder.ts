import {deserializeIntoOnenotePage} from '../../../../../../../models/deserializeIntoOnenotePage';
import {ODataError} from '../../../../../../../models/oDataErrors/oDataError';
import {OnenotePage} from '../../../../../../../models/onenotePage';
import {serializeOnenotePage} from '../../../../../../../models/serializeOnenotePage';
import {ContentRequestBuilder} from './content/contentRequestBuilder';
import {CopyToSectionRequestBuilder} from './copyToSection/copyToSectionRequestBuilder';
import {OnenotePageItemRequestBuilderDeleteRequestConfiguration} from './onenotePageItemRequestBuilderDeleteRequestConfiguration';
import {OnenotePageItemRequestBuilderGetRequestConfiguration} from './onenotePageItemRequestBuilderGetRequestConfiguration';
import {OnenotePageItemRequestBuilderPatchRequestConfiguration} from './onenotePageItemRequestBuilderPatchRequestConfiguration';
import {OnenotePatchContentRequestBuilder} from './onenotePatchContent/onenotePatchContentRequestBuilder';
import {ParentNotebookRequestBuilder} from './parentNotebook/parentNotebookRequestBuilder';
import {ParentSectionRequestBuilder} from './parentSection/parentSectionRequestBuilder';
import {PreviewRequestBuilder} from './preview/previewRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the pages property of the microsoft.graph.onenote entity. */
export class OnenotePageItemRequestBuilder {
    /** Provides operations to manage the media for the group entity. */
    public get content(): ContentRequestBuilder {
        return new ContentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the copyToSection method. */
    public get copyToSection(): CopyToSectionRequestBuilder {
        return new CopyToSectionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the onenotePatchContent method. */
    public get onenotePatchContent(): OnenotePatchContentRequestBuilder {
        return new OnenotePatchContentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the parentNotebook property of the microsoft.graph.onenotePage entity. */
    public get parentNotebook(): ParentNotebookRequestBuilder {
        return new ParentNotebookRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the parentSection property of the microsoft.graph.onenotePage entity. */
    public get parentSection(): ParentSectionRequestBuilder {
        return new ParentSectionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new OnenotePageItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/groups/{group%2Did}/sites/{site%2Did}/onenote/pages/{onenotePage%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property pages for groups
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: OnenotePageItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The pages in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: OnenotePageItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property pages in groups
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: OnenotePage | undefined, requestConfiguration?: OnenotePageItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeOnenotePage);
        return requestInfo;
    };
    /**
     * Delete navigation property pages for groups
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: OnenotePageItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The pages in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of OnenotePage
     */
    public get(requestConfiguration?: OnenotePageItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<OnenotePage | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<OnenotePage>(requestInfo,deserializeIntoOnenotePage, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property pages in groups
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of OnenotePage
     */
    public patch(body: OnenotePage | undefined, requestConfiguration?: OnenotePageItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<OnenotePage | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<OnenotePage>(requestInfo,deserializeIntoOnenotePage, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to call the preview method.
     * @returns a previewRequestBuilder
     */
    public preview() : PreviewRequestBuilder {
        return new PreviewRequestBuilder(this.pathParameters, this.requestAdapter);
    };
}
