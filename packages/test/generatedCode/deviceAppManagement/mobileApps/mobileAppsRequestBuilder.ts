import {deserializeIntoMobileApp} from '../../models/deserializeIntoMobileApp';
import {deserializeIntoMobileAppCollectionResponse} from '../../models/deserializeIntoMobileAppCollectionResponse';
import {MobileApp} from '../../models/mobileApp';
import {MobileAppCollectionResponse} from '../../models/mobileAppCollectionResponse';
import {ODataError} from '../../models/oDataErrors/oDataError';
import {serializeMobileApp} from '../../models/serializeMobileApp';
import {serializeMobileAppCollectionResponse} from '../../models/serializeMobileAppCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ManagedMobileLobAppRequestBuilder} from './managedMobileLobApp/managedMobileLobAppRequestBuilder';
import {MobileAppsRequestBuilderGetRequestConfiguration} from './mobileAppsRequestBuilderGetRequestConfiguration';
import {MobileAppsRequestBuilderPostRequestConfiguration} from './mobileAppsRequestBuilderPostRequestConfiguration';
import {MobileLobAppRequestBuilder} from './mobileLobApp/mobileLobAppRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the mobileApps property of the microsoft.graph.deviceAppManagement entity. */
export class MobileAppsRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Casts the previous resource to managedMobileLobApp. */
    public get managedMobileLobApp(): ManagedMobileLobAppRequestBuilder {
        return new ManagedMobileLobAppRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Casts the previous resource to mobileLobApp. */
    public get mobileLobApp(): MobileLobAppRequestBuilder {
        return new MobileLobAppRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new MobileAppsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceAppManagement/mobileApps{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * The mobile apps.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: MobileAppsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to mobileApps for deviceAppManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: MobileApp | undefined, requestConfiguration?: MobileAppsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeMobileApp);
        return requestInfo;
    };
    /**
     * The mobile apps.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of MobileAppCollectionResponse
     */
    public get(requestConfiguration?: MobileAppsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<MobileAppCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<MobileAppCollectionResponse>(requestInfo,deserializeIntoMobileAppCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to mobileApps for deviceAppManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of MobileApp
     */
    public post(body: MobileApp | undefined, requestConfiguration?: MobileAppsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<MobileApp | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<MobileApp>(requestInfo,deserializeIntoMobileApp, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
