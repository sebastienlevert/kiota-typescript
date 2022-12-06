import {deserializeIntoTargetedManagedAppConfiguration} from '../../models/deserializeIntoTargetedManagedAppConfiguration';
import {deserializeIntoTargetedManagedAppConfigurationCollectionResponse} from '../../models/deserializeIntoTargetedManagedAppConfigurationCollectionResponse';
import {ODataError} from '../../models/oDataErrors/oDataError';
import {serializeTargetedManagedAppConfiguration} from '../../models/serializeTargetedManagedAppConfiguration';
import {serializeTargetedManagedAppConfigurationCollectionResponse} from '../../models/serializeTargetedManagedAppConfigurationCollectionResponse';
import {TargetedManagedAppConfiguration} from '../../models/targetedManagedAppConfiguration';
import {TargetedManagedAppConfigurationCollectionResponse} from '../../models/targetedManagedAppConfigurationCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {TargetedManagedAppConfigurationsRequestBuilderGetRequestConfiguration} from './targetedManagedAppConfigurationsRequestBuilderGetRequestConfiguration';
import {TargetedManagedAppConfigurationsRequestBuilderPostRequestConfiguration} from './targetedManagedAppConfigurationsRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the targetedManagedAppConfigurations property of the microsoft.graph.deviceAppManagement entity. */
export class TargetedManagedAppConfigurationsRequestBuilder {
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
     * Instantiates a new TargetedManagedAppConfigurationsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceAppManagement/targetedManagedAppConfigurations{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Targeted managed app configurations.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: TargetedManagedAppConfigurationsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to targetedManagedAppConfigurations for deviceAppManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: TargetedManagedAppConfiguration | undefined, requestConfiguration?: TargetedManagedAppConfigurationsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeTargetedManagedAppConfiguration);
        return requestInfo;
    };
    /**
     * Targeted managed app configurations.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of TargetedManagedAppConfigurationCollectionResponse
     */
    public get(requestConfiguration?: TargetedManagedAppConfigurationsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<TargetedManagedAppConfigurationCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<TargetedManagedAppConfigurationCollectionResponse>(requestInfo,deserializeIntoTargetedManagedAppConfigurationCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to targetedManagedAppConfigurations for deviceAppManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of TargetedManagedAppConfiguration
     */
    public post(body: TargetedManagedAppConfiguration | undefined, requestConfiguration?: TargetedManagedAppConfigurationsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<TargetedManagedAppConfiguration | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<TargetedManagedAppConfiguration>(requestInfo,deserializeIntoTargetedManagedAppConfiguration, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
