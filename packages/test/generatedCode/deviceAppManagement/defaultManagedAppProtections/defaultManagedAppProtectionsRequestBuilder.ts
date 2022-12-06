import {DefaultManagedAppProtection} from '../../models/defaultManagedAppProtection';
import {DefaultManagedAppProtectionCollectionResponse} from '../../models/defaultManagedAppProtectionCollectionResponse';
import {deserializeIntoDefaultManagedAppProtection} from '../../models/deserializeIntoDefaultManagedAppProtection';
import {deserializeIntoDefaultManagedAppProtectionCollectionResponse} from '../../models/deserializeIntoDefaultManagedAppProtectionCollectionResponse';
import {ODataError} from '../../models/oDataErrors/oDataError';
import {serializeDefaultManagedAppProtection} from '../../models/serializeDefaultManagedAppProtection';
import {serializeDefaultManagedAppProtectionCollectionResponse} from '../../models/serializeDefaultManagedAppProtectionCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DefaultManagedAppProtectionsRequestBuilderGetRequestConfiguration} from './defaultManagedAppProtectionsRequestBuilderGetRequestConfiguration';
import {DefaultManagedAppProtectionsRequestBuilderPostRequestConfiguration} from './defaultManagedAppProtectionsRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the defaultManagedAppProtections property of the microsoft.graph.deviceAppManagement entity. */
export class DefaultManagedAppProtectionsRequestBuilder {
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
     * Instantiates a new DefaultManagedAppProtectionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceAppManagement/defaultManagedAppProtections{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Default managed app policies.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: DefaultManagedAppProtectionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to defaultManagedAppProtections for deviceAppManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: DefaultManagedAppProtection | undefined, requestConfiguration?: DefaultManagedAppProtectionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDefaultManagedAppProtection);
        return requestInfo;
    };
    /**
     * Default managed app policies.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DefaultManagedAppProtectionCollectionResponse
     */
    public get(requestConfiguration?: DefaultManagedAppProtectionsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DefaultManagedAppProtectionCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<DefaultManagedAppProtectionCollectionResponse>(requestInfo,deserializeIntoDefaultManagedAppProtectionCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to defaultManagedAppProtections for deviceAppManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DefaultManagedAppProtection
     */
    public post(body: DefaultManagedAppProtection | undefined, requestConfiguration?: DefaultManagedAppProtectionsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DefaultManagedAppProtection | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<DefaultManagedAppProtection>(requestInfo,deserializeIntoDefaultManagedAppProtection, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
