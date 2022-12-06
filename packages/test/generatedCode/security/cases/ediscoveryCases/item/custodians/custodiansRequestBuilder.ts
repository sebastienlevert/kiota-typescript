import {ODataError} from '../../../../../models/oDataErrors/oDataError';
import {deserializeIntoEdiscoveryCustodian} from '../../../../../models/security/deserializeIntoEdiscoveryCustodian';
import {deserializeIntoEdiscoveryCustodianCollectionResponse} from '../../../../../models/security/deserializeIntoEdiscoveryCustodianCollectionResponse';
import {EdiscoveryCustodian} from '../../../../../models/security/ediscoveryCustodian';
import {EdiscoveryCustodianCollectionResponse} from '../../../../../models/security/ediscoveryCustodianCollectionResponse';
import {serializeEdiscoveryCustodian} from '../../../../../models/security/serializeEdiscoveryCustodian';
import {serializeEdiscoveryCustodianCollectionResponse} from '../../../../../models/security/serializeEdiscoveryCustodianCollectionResponse';
import {ApplyHoldRequestBuilder} from './applyHold/applyHoldRequestBuilder';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {CustodiansRequestBuilderGetRequestConfiguration} from './custodiansRequestBuilderGetRequestConfiguration';
import {CustodiansRequestBuilderPostRequestConfiguration} from './custodiansRequestBuilderPostRequestConfiguration';
import {RemoveHoldRequestBuilder} from './removeHold/removeHoldRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the custodians property of the microsoft.graph.security.ediscoveryCase entity. */
export class CustodiansRequestBuilder {
    /** Provides operations to call the applyHold method. */
    public get applyHold(): ApplyHoldRequestBuilder {
        return new ApplyHoldRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** Provides operations to call the removeHold method. */
    public get removeHold(): RemoveHoldRequestBuilder {
        return new RemoveHoldRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new CustodiansRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/custodians{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get a list of the custodian objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: CustodiansRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new ediscoveryCustodian object.After the custodian object is created, you will need to create the custodian's userSource to reference their mailbox and OneDrive for Business site.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: EdiscoveryCustodian | undefined, requestConfiguration?: CustodiansRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeEdiscoveryCustodian);
        return requestInfo;
    };
    /**
     * Get a list of the custodian objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EdiscoveryCustodianCollectionResponse
     */
    public get(requestConfiguration?: CustodiansRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EdiscoveryCustodianCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<EdiscoveryCustodianCollectionResponse>(requestInfo,deserializeIntoEdiscoveryCustodianCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create a new ediscoveryCustodian object.After the custodian object is created, you will need to create the custodian's userSource to reference their mailbox and OneDrive for Business site.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EdiscoveryCustodian
     */
    public post(body: EdiscoveryCustodian | undefined, requestConfiguration?: CustodiansRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EdiscoveryCustodian | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<EdiscoveryCustodian>(requestInfo,deserializeIntoEdiscoveryCustodian, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
