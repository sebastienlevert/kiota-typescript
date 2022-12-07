import {deserializeIntoOutlookUser} from '../../../models/deserializeIntoOutlookUser';
import {OutlookUser} from '../../../models/outlookUser';
import {serializeOutlookUser} from '../../../models/serializeOutlookUser';
import {OutlookCategoryItemRequestBuilder} from './masterCategories/item/outlookCategoryItemRequestBuilder';
import {MasterCategoriesRequestBuilder} from './masterCategories/masterCategoriesRequestBuilder';
import {OutlookRequestBuilderGetRequestConfiguration} from './outlookRequestBuilderGetRequestConfiguration';
import {OutlookTaskFolderItemRequestBuilder} from './taskFolders/item/outlookTaskFolderItemRequestBuilder';
import {TaskFoldersRequestBuilder} from './taskFolders/taskFoldersRequestBuilder';
import {OutlookTaskGroupItemRequestBuilder} from './taskGroups/item/outlookTaskGroupItemRequestBuilder';
import {TaskGroupsRequestBuilder} from './taskGroups/taskGroupsRequestBuilder';
import {OutlookTaskItemRequestBuilder} from './tasks/item/outlookTaskItemRequestBuilder';
import {TasksRequestBuilder} from './tasks/tasksRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /users/{user-id}/outlook */
export class OutlookRequestBuilder {
    /** The masterCategories property */
    public get masterCategories(): MasterCategoriesRequestBuilder {
        return new MasterCategoriesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** The taskFolders property */
    public get taskFolders(): TaskFoldersRequestBuilder {
        return new TaskFoldersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The taskGroups property */
    public get taskGroups(): TaskGroupsRequestBuilder {
        return new TaskGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The tasks property */
    public get tasks(): TasksRequestBuilder {
        return new TasksRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new OutlookRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/users/{user%2Did}/outlook{?%24select}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Selective Outlook services available to the user. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: OutlookRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Selective Outlook services available to the user. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of OutlookUser
     */
    public get(requestConfiguration?: OutlookRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<OutlookUser | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<OutlookUser>(requestInfo,deserializeIntoOutlookUser, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Gets an item from the ApiSdk.users.item.outlook.masterCategories.item collection
     * @param id Unique identifier of the item
     * @returns a OutlookCategoryItemRequestBuilder
     */
    public masterCategoriesById(id: string) : OutlookCategoryItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["outlookCategory%2Did"] = id
        return new OutlookCategoryItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.users.item.outlook.taskFolders.item collection
     * @param id Unique identifier of the item
     * @returns a OutlookTaskFolderItemRequestBuilder
     */
    public taskFoldersById(id: string) : OutlookTaskFolderItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["outlookTaskFolder%2Did"] = id
        return new OutlookTaskFolderItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.users.item.outlook.taskGroups.item collection
     * @param id Unique identifier of the item
     * @returns a OutlookTaskGroupItemRequestBuilder
     */
    public taskGroupsById(id: string) : OutlookTaskGroupItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["outlookTaskGroup%2Did"] = id
        return new OutlookTaskGroupItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.users.item.outlook.tasks.item collection
     * @param id Unique identifier of the item
     * @returns a OutlookTaskItemRequestBuilder
     */
    public tasksById(id: string) : OutlookTaskItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["outlookTask%2Did"] = id
        return new OutlookTaskItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
