import {deserializeIntoDrive} from '../models/deserializeIntoDrive';
import {Drive} from '../models/drive';
import {ODataError} from '../models/oDataErrors/oDataError';
import {serializeDrive} from '../models/serializeDrive';
import {BundlesRequestBuilder} from './bundles/bundlesRequestBuilder';
import {DriveItemItemRequestBuilder as ic2460d3e1cbbf7c14ab473e1d1b433b889c01dd7887902a46c1d0bb7bf68ef39} from './bundles/item/driveItemItemRequestBuilder';
import {DriveRequestBuilderGetRequestConfiguration} from './driveRequestBuilderGetRequestConfiguration';
import {DriveRequestBuilderPatchRequestConfiguration} from './driveRequestBuilderPatchRequestConfiguration';
import {FollowingRequestBuilder} from './following/followingRequestBuilder';
import {DriveItemItemRequestBuilder as i1ef23460afa998665732e79b07f635c3adf4c15b2622ac02533b7827c631e862} from './following/item/driveItemItemRequestBuilder';
import {DriveItemItemRequestBuilder as i54685d2726bd7c0d8690d11d19b8bfc0a73e35b63e4f34ade909fd0ae240fdb0} from './items/item/driveItemItemRequestBuilder';
import {ItemsRequestBuilder} from './items/itemsRequestBuilder';
import {ListRequestBuilder} from './list/listRequestBuilder';
import {RecentRequestBuilder} from './recent/recentRequestBuilder';
import {RootRequestBuilder} from './root/rootRequestBuilder';
import {SearchWithQRequestBuilder} from './searchWithQ/searchWithQRequestBuilder';
import {SharedWithMeRequestBuilder} from './sharedWithMe/sharedWithMeRequestBuilder';
import {DriveItemItemRequestBuilder as i96a52f17b371c521bd35415c6e78438ab56e0d42e91196951b0c7b52d8adcc2d} from './special/item/driveItemItemRequestBuilder';
import {SpecialRequestBuilder} from './special/specialRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the drive singleton. */
export class DriveRequestBuilder {
    /** Provides operations to manage the bundles property of the microsoft.graph.drive entity. */
    public get bundles(): BundlesRequestBuilder {
        return new BundlesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the following property of the microsoft.graph.drive entity. */
    public get following(): FollowingRequestBuilder {
        return new FollowingRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the items property of the microsoft.graph.drive entity. */
    public get items(): ItemsRequestBuilder {
        return new ItemsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the list property of the microsoft.graph.drive entity. */
    public get list(): ListRequestBuilder {
        return new ListRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Provides operations to manage the root property of the microsoft.graph.drive entity. */
    public get root(): RootRequestBuilder {
        return new RootRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the special property of the microsoft.graph.drive entity. */
    public get special(): SpecialRequestBuilder {
        return new SpecialRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Provides operations to manage the bundles property of the microsoft.graph.drive entity.
     * @param id Unique identifier of the item
     * @returns a DriveItemItemRequestBuilder
     */
    public bundlesById(id: string) : ic2460d3e1cbbf7c14ab473e1d1b433b889c01dd7887902a46c1d0bb7bf68ef39 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["driveItem%2Did"] = id
        return new ic2460d3e1cbbf7c14ab473e1d1b433b889c01dd7887902a46c1d0bb7bf68ef39(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DriveRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/drive{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get drive
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: DriveRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update drive
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Drive | undefined, requestConfiguration?: DriveRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDrive);
        return requestInfo;
    };
    /**
     * Provides operations to manage the following property of the microsoft.graph.drive entity.
     * @param id Unique identifier of the item
     * @returns a DriveItemItemRequestBuilder
     */
    public followingById(id: string) : i1ef23460afa998665732e79b07f635c3adf4c15b2622ac02533b7827c631e862 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["driveItem%2Did"] = id
        return new i1ef23460afa998665732e79b07f635c3adf4c15b2622ac02533b7827c631e862(urlTplParams, this.requestAdapter);
    };
    /**
     * Get drive
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Drive
     */
    public get(requestConfiguration?: DriveRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Drive | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<Drive>(requestInfo,deserializeIntoDrive, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the items property of the microsoft.graph.drive entity.
     * @param id Unique identifier of the item
     * @returns a DriveItemItemRequestBuilder
     */
    public itemsById(id: string) : i54685d2726bd7c0d8690d11d19b8bfc0a73e35b63e4f34ade909fd0ae240fdb0 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["driveItem%2Did"] = id
        return new i54685d2726bd7c0d8690d11d19b8bfc0a73e35b63e4f34ade909fd0ae240fdb0(urlTplParams, this.requestAdapter);
    };
    /**
     * Update drive
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Drive
     */
    public patch(body: Drive | undefined, requestConfiguration?: DriveRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Drive | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<Drive>(requestInfo,deserializeIntoDrive, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to call the recent method.
     * @returns a recentRequestBuilder
     */
    public recent() : RecentRequestBuilder {
        return new RecentRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Provides operations to call the search method.
     * @param q Usage: q='{q}'
     * @returns a searchWithQRequestBuilder
     */
    public searchWithQ(q: string | undefined) : SearchWithQRequestBuilder {
        if(!q) throw new Error("q cannot be undefined");
        return new SearchWithQRequestBuilder(this.pathParameters, this.requestAdapter, q);
    };
    /**
     * Provides operations to call the sharedWithMe method.
     * @returns a sharedWithMeRequestBuilder
     */
    public sharedWithMe() : SharedWithMeRequestBuilder {
        return new SharedWithMeRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Provides operations to manage the special property of the microsoft.graph.drive entity.
     * @param id Unique identifier of the item
     * @returns a DriveItemItemRequestBuilder
     */
    public specialById(id: string) : i96a52f17b371c521bd35415c6e78438ab56e0d42e91196951b0c7b52d8adcc2d {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["driveItem%2Did"] = id
        return new i96a52f17b371c521bd35415c6e78438ab56e0d42e91196951b0c7b52d8adcc2d(urlTplParams, this.requestAdapter);
    };
}
