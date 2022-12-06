import {deserializeIntoPrintUsageByUser} from '../../models/deserializeIntoPrintUsageByUser';
import {deserializeIntoPrintUsageByUserCollectionResponse} from '../../models/deserializeIntoPrintUsageByUserCollectionResponse';
import {ODataError} from '../../models/oDataErrors/oDataError';
import {PrintUsageByUser} from '../../models/printUsageByUser';
import {PrintUsageByUserCollectionResponse} from '../../models/printUsageByUserCollectionResponse';
import {serializePrintUsageByUser} from '../../models/serializePrintUsageByUser';
import {serializePrintUsageByUserCollectionResponse} from '../../models/serializePrintUsageByUserCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {MonthlyPrintUsageByUserRequestBuilderGetRequestConfiguration} from './monthlyPrintUsageByUserRequestBuilderGetRequestConfiguration';
import {MonthlyPrintUsageByUserRequestBuilderPostRequestConfiguration} from './monthlyPrintUsageByUserRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the monthlyPrintUsageByUser property of the microsoft.graph.reportRoot entity. */
export class MonthlyPrintUsageByUserRequestBuilder {
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
     * Instantiates a new MonthlyPrintUsageByUserRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/reports/monthlyPrintUsageByUser{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Retrieve a list of monthly print usage summaries, grouped by user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: MonthlyPrintUsageByUserRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to monthlyPrintUsageByUser for reports
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: PrintUsageByUser | undefined, requestConfiguration?: MonthlyPrintUsageByUserRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializePrintUsageByUser);
        return requestInfo;
    };
    /**
     * Retrieve a list of monthly print usage summaries, grouped by user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of PrintUsageByUserCollectionResponse
     */
    public get(requestConfiguration?: MonthlyPrintUsageByUserRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<PrintUsageByUserCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<PrintUsageByUserCollectionResponse>(requestInfo,deserializeIntoPrintUsageByUserCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to monthlyPrintUsageByUser for reports
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of PrintUsageByUser
     */
    public post(body: PrintUsageByUser | undefined, requestConfiguration?: MonthlyPrintUsageByUserRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<PrintUsageByUser | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<PrintUsageByUser>(requestInfo,deserializeIntoPrintUsageByUser, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
