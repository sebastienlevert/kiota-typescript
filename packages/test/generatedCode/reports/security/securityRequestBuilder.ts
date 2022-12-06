import {deserializeIntoSecurityReportsRoot} from '../../models/deserializeIntoSecurityReportsRoot';
import {ODataError} from '../../models/oDataErrors/oDataError';
import {SecurityReportsRoot} from '../../models/securityReportsRoot';
import {serializeSecurityReportsRoot} from '../../models/serializeSecurityReportsRoot';
import {GetAttackSimulationRepeatOffendersRequestBuilder} from './getAttackSimulationRepeatOffenders/getAttackSimulationRepeatOffendersRequestBuilder';
import {GetAttackSimulationSimulationUserCoverageRequestBuilder} from './getAttackSimulationSimulationUserCoverage/getAttackSimulationSimulationUserCoverageRequestBuilder';
import {GetAttackSimulationTrainingUserCoverageRequestBuilder} from './getAttackSimulationTrainingUserCoverage/getAttackSimulationTrainingUserCoverageRequestBuilder';
import {SecurityRequestBuilderDeleteRequestConfiguration} from './securityRequestBuilderDeleteRequestConfiguration';
import {SecurityRequestBuilderGetRequestConfiguration} from './securityRequestBuilderGetRequestConfiguration';
import {SecurityRequestBuilderPatchRequestConfiguration} from './securityRequestBuilderPatchRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the security property of the microsoft.graph.reportRoot entity. */
export class SecurityRequestBuilder {
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new SecurityRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/reports/security{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property security for reports
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: SecurityRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get security from reports
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: SecurityRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property security in reports
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: SecurityReportsRoot | undefined, requestConfiguration?: SecurityRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeSecurityReportsRoot);
        return requestInfo;
    };
    /**
     * Delete navigation property security for reports
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: SecurityRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get security from reports
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of SecurityReportsRoot
     */
    public get(requestConfiguration?: SecurityRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<SecurityReportsRoot | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<SecurityReportsRoot>(requestInfo,deserializeIntoSecurityReportsRoot, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to call the getAttackSimulationRepeatOffenders method.
     * @returns a getAttackSimulationRepeatOffendersRequestBuilder
     */
    public getAttackSimulationRepeatOffenders() : GetAttackSimulationRepeatOffendersRequestBuilder {
        return new GetAttackSimulationRepeatOffendersRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Provides operations to call the getAttackSimulationSimulationUserCoverage method.
     * @returns a getAttackSimulationSimulationUserCoverageRequestBuilder
     */
    public getAttackSimulationSimulationUserCoverage() : GetAttackSimulationSimulationUserCoverageRequestBuilder {
        return new GetAttackSimulationSimulationUserCoverageRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Provides operations to call the getAttackSimulationTrainingUserCoverage method.
     * @returns a getAttackSimulationTrainingUserCoverageRequestBuilder
     */
    public getAttackSimulationTrainingUserCoverage() : GetAttackSimulationTrainingUserCoverageRequestBuilder {
        return new GetAttackSimulationTrainingUserCoverageRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Update the navigation property security in reports
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of SecurityReportsRoot
     */
    public patch(body: SecurityReportsRoot | undefined, requestConfiguration?: SecurityRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<SecurityReportsRoot | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<SecurityReportsRoot>(requestInfo,deserializeIntoSecurityReportsRoot, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
