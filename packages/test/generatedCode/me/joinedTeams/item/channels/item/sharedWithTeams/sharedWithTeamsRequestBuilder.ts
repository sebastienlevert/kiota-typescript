import {deserializeIntoSharedWithChannelTeamInfo} from '../../../../../../models/deserializeIntoSharedWithChannelTeamInfo';
import {deserializeIntoSharedWithChannelTeamInfoCollectionResponse} from '../../../../../../models/deserializeIntoSharedWithChannelTeamInfoCollectionResponse';
import {ODataError} from '../../../../../../models/oDataErrors/oDataError';
import {serializeSharedWithChannelTeamInfo} from '../../../../../../models/serializeSharedWithChannelTeamInfo';
import {serializeSharedWithChannelTeamInfoCollectionResponse} from '../../../../../../models/serializeSharedWithChannelTeamInfoCollectionResponse';
import {SharedWithChannelTeamInfo} from '../../../../../../models/sharedWithChannelTeamInfo';
import {SharedWithChannelTeamInfoCollectionResponse} from '../../../../../../models/sharedWithChannelTeamInfoCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {SharedWithTeamsRequestBuilderGetRequestConfiguration} from './sharedWithTeamsRequestBuilderGetRequestConfiguration';
import {SharedWithTeamsRequestBuilderPostRequestConfiguration} from './sharedWithTeamsRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the sharedWithTeams property of the microsoft.graph.channel entity. */
export class SharedWithTeamsRequestBuilder {
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
     * Instantiates a new SharedWithTeamsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/me/joinedTeams/{team%2Did}/channels/{channel%2Did}/sharedWithTeams{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get the list of teams that has been shared a specified channel. This operation is allowed only for channels with a **membershipType** value of `shared`.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: SharedWithTeamsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to sharedWithTeams for me
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: SharedWithChannelTeamInfo | undefined, requestConfiguration?: SharedWithTeamsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeSharedWithChannelTeamInfo);
        return requestInfo;
    };
    /**
     * Get the list of teams that has been shared a specified channel. This operation is allowed only for channels with a **membershipType** value of `shared`.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of SharedWithChannelTeamInfoCollectionResponse
     */
    public get(requestConfiguration?: SharedWithTeamsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<SharedWithChannelTeamInfoCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<SharedWithChannelTeamInfoCollectionResponse>(requestInfo,deserializeIntoSharedWithChannelTeamInfoCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to sharedWithTeams for me
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of SharedWithChannelTeamInfo
     */
    public post(body: SharedWithChannelTeamInfo | undefined, requestConfiguration?: SharedWithTeamsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<SharedWithChannelTeamInfo | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<SharedWithChannelTeamInfo>(requestInfo,deserializeIntoSharedWithChannelTeamInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
