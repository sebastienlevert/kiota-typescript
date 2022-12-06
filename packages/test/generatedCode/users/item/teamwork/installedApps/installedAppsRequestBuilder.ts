import {deserializeIntoUserScopeTeamsAppInstallation} from '../../../../models/deserializeIntoUserScopeTeamsAppInstallation';
import {deserializeIntoUserScopeTeamsAppInstallationCollectionResponse} from '../../../../models/deserializeIntoUserScopeTeamsAppInstallationCollectionResponse';
import {ODataError} from '../../../../models/oDataErrors/oDataError';
import {serializeUserScopeTeamsAppInstallation} from '../../../../models/serializeUserScopeTeamsAppInstallation';
import {serializeUserScopeTeamsAppInstallationCollectionResponse} from '../../../../models/serializeUserScopeTeamsAppInstallationCollectionResponse';
import {UserScopeTeamsAppInstallation} from '../../../../models/userScopeTeamsAppInstallation';
import {UserScopeTeamsAppInstallationCollectionResponse} from '../../../../models/userScopeTeamsAppInstallationCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {InstalledAppsRequestBuilderGetRequestConfiguration} from './installedAppsRequestBuilderGetRequestConfiguration';
import {InstalledAppsRequestBuilderPostRequestConfiguration} from './installedAppsRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the installedApps property of the microsoft.graph.userTeamwork entity. */
export class InstalledAppsRequestBuilder {
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
     * Instantiates a new InstalledAppsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/users/{user%2Did}/teamwork/installedApps{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Retrieve the list of apps installed in the personal scope of the specified user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: InstalledAppsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Install an app in the personal scope of the specified user.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: UserScopeTeamsAppInstallation | undefined, requestConfiguration?: InstalledAppsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeUserScopeTeamsAppInstallation);
        return requestInfo;
    };
    /**
     * Retrieve the list of apps installed in the personal scope of the specified user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UserScopeTeamsAppInstallationCollectionResponse
     */
    public get(requestConfiguration?: InstalledAppsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UserScopeTeamsAppInstallationCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<UserScopeTeamsAppInstallationCollectionResponse>(requestInfo,deserializeIntoUserScopeTeamsAppInstallationCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Install an app in the personal scope of the specified user.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UserScopeTeamsAppInstallation
     */
    public post(body: UserScopeTeamsAppInstallation | undefined, requestConfiguration?: InstalledAppsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UserScopeTeamsAppInstallation | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<UserScopeTeamsAppInstallation>(requestInfo,deserializeIntoUserScopeTeamsAppInstallation, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
