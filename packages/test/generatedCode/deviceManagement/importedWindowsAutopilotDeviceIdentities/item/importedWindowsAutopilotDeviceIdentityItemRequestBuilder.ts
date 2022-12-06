import {deserializeIntoImportedWindowsAutopilotDeviceIdentity} from '../../../models/deserializeIntoImportedWindowsAutopilotDeviceIdentity';
import {ImportedWindowsAutopilotDeviceIdentity} from '../../../models/importedWindowsAutopilotDeviceIdentity';
import {ODataError} from '../../../models/oDataErrors/oDataError';
import {serializeImportedWindowsAutopilotDeviceIdentity} from '../../../models/serializeImportedWindowsAutopilotDeviceIdentity';
import {ImportedWindowsAutopilotDeviceIdentityItemRequestBuilderDeleteRequestConfiguration} from './importedWindowsAutopilotDeviceIdentityItemRequestBuilderDeleteRequestConfiguration';
import {ImportedWindowsAutopilotDeviceIdentityItemRequestBuilderGetRequestConfiguration} from './importedWindowsAutopilotDeviceIdentityItemRequestBuilderGetRequestConfiguration';
import {ImportedWindowsAutopilotDeviceIdentityItemRequestBuilderPatchRequestConfiguration} from './importedWindowsAutopilotDeviceIdentityItemRequestBuilderPatchRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the importedWindowsAutopilotDeviceIdentities property of the microsoft.graph.deviceManagement entity. */
export class ImportedWindowsAutopilotDeviceIdentityItemRequestBuilder {
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new ImportedWindowsAutopilotDeviceIdentityItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property importedWindowsAutopilotDeviceIdentities for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: ImportedWindowsAutopilotDeviceIdentityItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Collection of imported Windows autopilot devices.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: ImportedWindowsAutopilotDeviceIdentityItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property importedWindowsAutopilotDeviceIdentities in deviceManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: ImportedWindowsAutopilotDeviceIdentity | undefined, requestConfiguration?: ImportedWindowsAutopilotDeviceIdentityItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeImportedWindowsAutopilotDeviceIdentity);
        return requestInfo;
    };
    /**
     * Delete navigation property importedWindowsAutopilotDeviceIdentities for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: ImportedWindowsAutopilotDeviceIdentityItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Collection of imported Windows autopilot devices.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ImportedWindowsAutopilotDeviceIdentity
     */
    public get(requestConfiguration?: ImportedWindowsAutopilotDeviceIdentityItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ImportedWindowsAutopilotDeviceIdentity | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<ImportedWindowsAutopilotDeviceIdentity>(requestInfo,deserializeIntoImportedWindowsAutopilotDeviceIdentity, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property importedWindowsAutopilotDeviceIdentities in deviceManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ImportedWindowsAutopilotDeviceIdentity
     */
    public patch(body: ImportedWindowsAutopilotDeviceIdentity | undefined, requestConfiguration?: ImportedWindowsAutopilotDeviceIdentityItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ImportedWindowsAutopilotDeviceIdentity | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<ImportedWindowsAutopilotDeviceIdentity>(requestInfo,deserializeIntoImportedWindowsAutopilotDeviceIdentity, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
