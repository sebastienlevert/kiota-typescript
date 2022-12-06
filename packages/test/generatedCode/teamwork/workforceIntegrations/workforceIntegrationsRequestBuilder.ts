import {deserializeIntoWorkforceIntegration} from '../../models/deserializeIntoWorkforceIntegration';
import {deserializeIntoWorkforceIntegrationCollectionResponse} from '../../models/deserializeIntoWorkforceIntegrationCollectionResponse';
import {ODataError} from '../../models/oDataErrors/oDataError';
import {serializeWorkforceIntegration} from '../../models/serializeWorkforceIntegration';
import {serializeWorkforceIntegrationCollectionResponse} from '../../models/serializeWorkforceIntegrationCollectionResponse';
import {WorkforceIntegration} from '../../models/workforceIntegration';
import {WorkforceIntegrationCollectionResponse} from '../../models/workforceIntegrationCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {WorkforceIntegrationsRequestBuilderGetRequestConfiguration} from './workforceIntegrationsRequestBuilderGetRequestConfiguration';
import {WorkforceIntegrationsRequestBuilderPostRequestConfiguration} from './workforceIntegrationsRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the workforceIntegrations property of the microsoft.graph.teamwork entity. */
export class WorkforceIntegrationsRequestBuilder {
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
     * Instantiates a new WorkforceIntegrationsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/teamwork/workforceIntegrations{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Retrieve a list of workforceIntegration objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: WorkforceIntegrationsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new workforceIntegration object.You can set up which entities you want to receive Shifts synchronous change notifications on and set entities to configure filtering by WFM rules eligibility for, including swap requests.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: WorkforceIntegration | undefined, requestConfiguration?: WorkforceIntegrationsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeWorkforceIntegration);
        return requestInfo;
    };
    /**
     * Retrieve a list of workforceIntegration objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WorkforceIntegrationCollectionResponse
     */
    public get(requestConfiguration?: WorkforceIntegrationsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WorkforceIntegrationCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<WorkforceIntegrationCollectionResponse>(requestInfo,deserializeIntoWorkforceIntegrationCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create a new workforceIntegration object.You can set up which entities you want to receive Shifts synchronous change notifications on and set entities to configure filtering by WFM rules eligibility for, including swap requests.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WorkforceIntegration
     */
    public post(body: WorkforceIntegration | undefined, requestConfiguration?: WorkforceIntegrationsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WorkforceIntegration | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<WorkforceIntegration>(requestInfo,deserializeIntoWorkforceIntegration, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
