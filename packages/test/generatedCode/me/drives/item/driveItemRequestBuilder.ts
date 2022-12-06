import {deserializeIntoDrive} from '../../../models/deserializeIntoDrive';
import {Drive} from '../../../models/drive';
import {ODataError} from '../../../models/oDataErrors/oDataError';
import {serializeDrive} from '../../../models/serializeDrive';
import {BundlesRequestBuilder} from './bundles/bundlesRequestBuilder';
import {DriveItemItemRequestBuilder as i5d6ec8f9d636b6cbbf3b77aa7dc81a83ea152415aba53862c7b41f04ed4c8d24} from './bundles/item/driveItemItemRequestBuilder';
import {DriveItemRequestBuilderDeleteRequestConfiguration} from './driveItemRequestBuilderDeleteRequestConfiguration';
import {DriveItemRequestBuilderGetRequestConfiguration} from './driveItemRequestBuilderGetRequestConfiguration';
import {DriveItemRequestBuilderPatchRequestConfiguration} from './driveItemRequestBuilderPatchRequestConfiguration';
import {FollowingRequestBuilder} from './following/followingRequestBuilder';
import {DriveItemItemRequestBuilder as ic3aadff2a10185b10c0f3d171a9b29f58f0b5ca272fd05c7166aa24540fd2f22} from './following/item/driveItemItemRequestBuilder';
import {DriveItemItemRequestBuilder as i8fef91c73902bd069b82d7cf62882c5da7c3d90248dd6b2bb491b84a7997ca3a} from './items/item/driveItemItemRequestBuilder';
import {ItemsRequestBuilder} from './items/itemsRequestBuilder';
import {ListRequestBuilder} from './list/listRequestBuilder';
import {RecentRequestBuilder} from './recent/recentRequestBuilder';
import {RootRequestBuilder} from './root/rootRequestBuilder';
import {SearchWithQRequestBuilder} from './searchWithQ/searchWithQRequestBuilder';
import {SharedWithMeRequestBuilder} from './sharedWithMe/sharedWithMeRequestBuilder';
import {DriveItemItemRequestBuilder as i491ad4ddaf934abeb2e0b904c1f085d3a5891b0e4d7280c31805f4e1af9e4320} from './special/item/driveItemItemRequestBuilder';
import {SpecialRequestBuilder} from './special/specialRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the drives property of the microsoft.graph.user entity. */
export class DriveItemRequestBuilder {
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
    public bundlesById(id: string) : i5d6ec8f9d636b6cbbf3b77aa7dc81a83ea152415aba53862c7b41f04ed4c8d24 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["driveItem%2Did"] = id
        return new i5d6ec8f9d636b6cbbf3b77aa7dc81a83ea152415aba53862c7b41f04ed4c8d24(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DriveItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/me/drives/{drive%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property drives for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: DriveItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * A collection of drives available for this user. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: DriveItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property drives in me
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Drive | undefined, requestConfiguration?: DriveItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
     * Delete navigation property drives for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: DriveItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the following property of the microsoft.graph.drive entity.
     * @param id Unique identifier of the item
     * @returns a DriveItemItemRequestBuilder
     */
    public followingById(id: string) : ic3aadff2a10185b10c0f3d171a9b29f58f0b5ca272fd05c7166aa24540fd2f22 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["driveItem%2Did"] = id
        return new ic3aadff2a10185b10c0f3d171a9b29f58f0b5ca272fd05c7166aa24540fd2f22(urlTplParams, this.requestAdapter);
    };
    /**
     * A collection of drives available for this user. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Drive
     */
    public get(requestConfiguration?: DriveItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Drive | undefined> {
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
    public itemsById(id: string) : i8fef91c73902bd069b82d7cf62882c5da7c3d90248dd6b2bb491b84a7997ca3a {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["driveItem%2Did"] = id
        return new i8fef91c73902bd069b82d7cf62882c5da7c3d90248dd6b2bb491b84a7997ca3a(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property drives in me
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Drive
     */
    public patch(body: Drive | undefined, requestConfiguration?: DriveItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Drive | undefined> {
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
    public specialById(id: string) : i491ad4ddaf934abeb2e0b904c1f085d3a5891b0e4d7280c31805f4e1af9e4320 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["driveItem%2Did"] = id
        return new i491ad4ddaf934abeb2e0b904c1f085d3a5891b0e4d7280c31805f4e1af9e4320(urlTplParams, this.requestAdapter);
    };
}
