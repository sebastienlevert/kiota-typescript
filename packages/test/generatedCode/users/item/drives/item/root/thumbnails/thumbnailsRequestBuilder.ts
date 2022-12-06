import {deserializeIntoThumbnailSet} from '../../../../../../models/deserializeIntoThumbnailSet';
import {deserializeIntoThumbnailSetCollectionResponse} from '../../../../../../models/deserializeIntoThumbnailSetCollectionResponse';
import {ODataError} from '../../../../../../models/oDataErrors/oDataError';
import {serializeThumbnailSet} from '../../../../../../models/serializeThumbnailSet';
import {serializeThumbnailSetCollectionResponse} from '../../../../../../models/serializeThumbnailSetCollectionResponse';
import {ThumbnailSet} from '../../../../../../models/thumbnailSet';
import {ThumbnailSetCollectionResponse} from '../../../../../../models/thumbnailSetCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ThumbnailsRequestBuilderGetRequestConfiguration} from './thumbnailsRequestBuilderGetRequestConfiguration';
import {ThumbnailsRequestBuilderPostRequestConfiguration} from './thumbnailsRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the thumbnails property of the microsoft.graph.driveItem entity. */
export class ThumbnailsRequestBuilder {
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
     * Instantiates a new ThumbnailsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/users/{user%2Did}/drives/{drive%2Did}/root/thumbnails{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Retrieve a collection of ThumbnailSet resources for a DriveItem resource. A DriveItem can be represented by zero or more ThumbnailSet resources.Each **thumbnailSet** can have one or more **thumbnail** objects, which are images that represent the item.For example, a **thumbnailSet** may include **thumbnail** objects, such as common ones including `small`, `medium`, or `large`. There are many ways to work with thumbnails on OneDrive.Here are the most common ones:
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: ThumbnailsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to thumbnails for users
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: ThumbnailSet | undefined, requestConfiguration?: ThumbnailsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeThumbnailSet);
        return requestInfo;
    };
    /**
     * Retrieve a collection of ThumbnailSet resources for a DriveItem resource. A DriveItem can be represented by zero or more ThumbnailSet resources.Each **thumbnailSet** can have one or more **thumbnail** objects, which are images that represent the item.For example, a **thumbnailSet** may include **thumbnail** objects, such as common ones including `small`, `medium`, or `large`. There are many ways to work with thumbnails on OneDrive.Here are the most common ones:
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ThumbnailSetCollectionResponse
     */
    public get(requestConfiguration?: ThumbnailsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ThumbnailSetCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<ThumbnailSetCollectionResponse>(requestInfo,deserializeIntoThumbnailSetCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to thumbnails for users
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ThumbnailSet
     */
    public post(body: ThumbnailSet | undefined, requestConfiguration?: ThumbnailsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ThumbnailSet | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<ThumbnailSet>(requestInfo,deserializeIntoThumbnailSet, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
