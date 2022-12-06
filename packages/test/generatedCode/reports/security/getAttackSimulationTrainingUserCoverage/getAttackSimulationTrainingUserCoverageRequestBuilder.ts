import {ODataError} from '../../../models/oDataErrors/oDataError';
import {deserializeIntoGetAttackSimulationTrainingUserCoverageResponse} from './deserializeIntoGetAttackSimulationTrainingUserCoverageResponse';
import {GetAttackSimulationTrainingUserCoverageRequestBuilderGetRequestConfiguration} from './getAttackSimulationTrainingUserCoverageRequestBuilderGetRequestConfiguration';
import {GetAttackSimulationTrainingUserCoverageResponse} from './getAttackSimulationTrainingUserCoverageResponse';
import {serializeGetAttackSimulationTrainingUserCoverageResponse} from './serializeGetAttackSimulationTrainingUserCoverageResponse';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getAttackSimulationTrainingUserCoverage method. */
export class GetAttackSimulationTrainingUserCoverageRequestBuilder {
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new GetAttackSimulationTrainingUserCoverageRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/reports/security/microsoft.graph.getAttackSimulationTrainingUserCoverage(){?%24top,%24skip,%24search,%24filter,%24count}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Invoke function getAttackSimulationTrainingUserCoverage
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: GetAttackSimulationTrainingUserCoverageRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Invoke function getAttackSimulationTrainingUserCoverage
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of GetAttackSimulationTrainingUserCoverageResponse
     */
    public get(requestConfiguration?: GetAttackSimulationTrainingUserCoverageRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<GetAttackSimulationTrainingUserCoverageResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<GetAttackSimulationTrainingUserCoverageResponse>(requestInfo,deserializeIntoGetAttackSimulationTrainingUserCoverageResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
