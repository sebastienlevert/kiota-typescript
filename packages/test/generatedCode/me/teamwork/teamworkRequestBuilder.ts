import {deserializeIntoUserTeamwork} from '../../models/deserializeIntoUserTeamwork';
import {ODataError} from '../../models/oDataErrors/oDataError';
import {serializeUserTeamwork} from '../../models/serializeUserTeamwork';
import {UserTeamwork} from '../../models/userTeamwork';
import {AssociatedTeamsRequestBuilder} from './associatedTeams/associatedTeamsRequestBuilder';
import {AssociatedTeamInfoItemRequestBuilder} from './associatedTeams/item/associatedTeamInfoItemRequestBuilder';
import {InstalledAppsRequestBuilder} from './installedApps/installedAppsRequestBuilder';
import {UserScopeTeamsAppInstallationItemRequestBuilder} from './installedApps/item/userScopeTeamsAppInstallationItemRequestBuilder';
import {SendActivityNotificationRequestBuilder} from './sendActivityNotification/sendActivityNotificationRequestBuilder';
import {TeamworkRequestBuilderDeleteRequestConfiguration} from './teamworkRequestBuilderDeleteRequestConfiguration';
import {TeamworkRequestBuilderGetRequestConfiguration} from './teamworkRequestBuilderGetRequestConfiguration';
import {TeamworkRequestBuilderPatchRequestConfiguration} from './teamworkRequestBuilderPatchRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the teamwork property of the microsoft.graph.user entity. */
export class TeamworkRequestBuilder {
    /** Provides operations to manage the associatedTeams property of the microsoft.graph.userTeamwork entity. */
    public get associatedTeams(): AssociatedTeamsRequestBuilder {
        return new AssociatedTeamsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the installedApps property of the microsoft.graph.userTeamwork entity. */
    public get installedApps(): InstalledAppsRequestBuilder {
        return new InstalledAppsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Provides operations to call the sendActivityNotification method. */
    public get sendActivityNotification(): SendActivityNotificationRequestBuilder {
        return new SendActivityNotificationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Provides operations to manage the associatedTeams property of the microsoft.graph.userTeamwork entity.
     * @param id Unique identifier of the item
     * @returns a AssociatedTeamInfoItemRequestBuilder
     */
    public associatedTeamsById(id: string) : AssociatedTeamInfoItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["associatedTeamInfo%2Did"] = id
        return new AssociatedTeamInfoItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new TeamworkRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/me/teamwork{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property teamwork for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: TeamworkRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get teamwork from me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: TeamworkRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property teamwork in me
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: UserTeamwork | undefined, requestConfiguration?: TeamworkRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeUserTeamwork);
        return requestInfo;
    };
    /**
     * Delete navigation property teamwork for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: TeamworkRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get teamwork from me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UserTeamwork
     */
    public get(requestConfiguration?: TeamworkRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UserTeamwork | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<UserTeamwork>(requestInfo,deserializeIntoUserTeamwork, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the installedApps property of the microsoft.graph.userTeamwork entity.
     * @param id Unique identifier of the item
     * @returns a UserScopeTeamsAppInstallationItemRequestBuilder
     */
    public installedAppsById(id: string) : UserScopeTeamsAppInstallationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userScopeTeamsAppInstallation%2Did"] = id
        return new UserScopeTeamsAppInstallationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property teamwork in me
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UserTeamwork
     */
    public patch(body: UserTeamwork | undefined, requestConfiguration?: TeamworkRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UserTeamwork | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<UserTeamwork>(requestInfo,deserializeIntoUserTeamwork, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
