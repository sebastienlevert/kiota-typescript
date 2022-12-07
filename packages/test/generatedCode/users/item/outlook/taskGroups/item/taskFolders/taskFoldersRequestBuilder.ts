import {OutlookTaskFolder, OutlookTaskFolderCollectionResponse} from '../../../../../../models/';
import {createOutlookTaskFolderCollectionResponseFromDiscriminatorValue} from '../../../../../../models/createOutlookTaskFolderCollectionResponseFromDiscriminatorValue';
import {createOutlookTaskFolderFromDiscriminatorValue} from '../../../../../../models/createOutlookTaskFolderFromDiscriminatorValue';
import {TaskFoldersRequestBuilderGetRequestConfiguration} from './taskFoldersRequestBuilderGetRequestConfiguration';
import {TaskFoldersRequestBuilderPostRequestConfiguration} from './taskFoldersRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders */
export class TaskFoldersRequestBuilder {
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new TaskFoldersRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/users/{user%2Did}/outlook/taskGroups/{outlookTaskGroup%2Did}/taskFolders{?%24top,%24skip,%24filter,%24count,%24orderby,%24select}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get Outlook task folders in a specific outlookTaskGroup.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: TaskFoldersRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to taskFolders for users
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: OutlookTaskFolder | undefined, requestConfiguration?: TaskFoldersRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
    /**
     * Get Outlook task folders in a specific outlookTaskGroup.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of OutlookTaskFolderCollectionResponse
     */
    public get(requestConfiguration?: TaskFoldersRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<OutlookTaskFolderCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<OutlookTaskFolderCollectionResponse>(requestInfo, createOutlookTaskFolderCollectionResponseFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to taskFolders for users
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of OutlookTaskFolder
     */
    public post(body: OutlookTaskFolder | undefined, requestConfiguration?: TaskFoldersRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<OutlookTaskFolder | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<OutlookTaskFolder>(requestInfo, createOutlookTaskFolderFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('request adapter is null'));
    };
}
