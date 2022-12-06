import {deserializeIntoSharedWithChannelTeamInfo} from '../../../../../models/deserializeIntoSharedWithChannelTeamInfo';
import {ODataError} from '../../../../../models/oDataErrors/oDataError';
import {serializeSharedWithChannelTeamInfo} from '../../../../../models/serializeSharedWithChannelTeamInfo';
import {SharedWithChannelTeamInfo} from '../../../../../models/sharedWithChannelTeamInfo';
import {AllowedMembersRequestBuilder} from './allowedMembers/allowedMembersRequestBuilder';
import {ConversationMemberItemRequestBuilder} from './allowedMembers/item/conversationMemberItemRequestBuilder';
import {SharedWithChannelTeamInfoItemRequestBuilderDeleteRequestConfiguration} from './sharedWithChannelTeamInfoItemRequestBuilderDeleteRequestConfiguration';
import {SharedWithChannelTeamInfoItemRequestBuilderGetRequestConfiguration} from './sharedWithChannelTeamInfoItemRequestBuilderGetRequestConfiguration';
import {SharedWithChannelTeamInfoItemRequestBuilderPatchRequestConfiguration} from './sharedWithChannelTeamInfoItemRequestBuilderPatchRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the sharedWithTeams property of the microsoft.graph.channel entity. */
export class SharedWithChannelTeamInfoItemRequestBuilder {
    /** Provides operations to manage the allowedMembers property of the microsoft.graph.sharedWithChannelTeamInfo entity. */
    public get allowedMembers(): AllowedMembersRequestBuilder {
        return new AllowedMembersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Provides operations to manage the allowedMembers property of the microsoft.graph.sharedWithChannelTeamInfo entity.
     * @param id Unique identifier of the item
     * @returns a ConversationMemberItemRequestBuilder
     */
    public allowedMembersById(id: string) : ConversationMemberItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["conversationMember%2Did"] = id
        return new ConversationMemberItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new SharedWithChannelTeamInfoItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/teams/{team%2Did}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property sharedWithTeams for teams
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: SharedWithChannelTeamInfoItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * A collection of teams with which a channel is shared.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: SharedWithChannelTeamInfoItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property sharedWithTeams in teams
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: SharedWithChannelTeamInfo | undefined, requestConfiguration?: SharedWithChannelTeamInfoItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeSharedWithChannelTeamInfo);
        return requestInfo;
    };
    /**
     * Delete navigation property sharedWithTeams for teams
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: SharedWithChannelTeamInfoItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * A collection of teams with which a channel is shared.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of SharedWithChannelTeamInfo
     */
    public get(requestConfiguration?: SharedWithChannelTeamInfoItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<SharedWithChannelTeamInfo | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<SharedWithChannelTeamInfo>(requestInfo,deserializeIntoSharedWithChannelTeamInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property sharedWithTeams in teams
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of SharedWithChannelTeamInfo
     */
    public patch(body: SharedWithChannelTeamInfo | undefined, requestConfiguration?: SharedWithChannelTeamInfoItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<SharedWithChannelTeamInfo | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<SharedWithChannelTeamInfo>(requestInfo,deserializeIntoSharedWithChannelTeamInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
