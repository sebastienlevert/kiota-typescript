import {CallRecord} from '../../models/callRecords/callRecord';
import {CallRecordCollectionResponse} from '../../models/callRecords/callRecordCollectionResponse';
import {deserializeIntoCallRecord} from '../../models/callRecords/deserializeIntoCallRecord';
import {deserializeIntoCallRecordCollectionResponse} from '../../models/callRecords/deserializeIntoCallRecordCollectionResponse';
import {serializeCallRecord} from '../../models/callRecords/serializeCallRecord';
import {serializeCallRecordCollectionResponse} from '../../models/callRecords/serializeCallRecordCollectionResponse';
import {ODataError} from '../../models/oDataErrors/oDataError';
import {CallRecordsRequestBuilderGetRequestConfiguration} from './callRecordsRequestBuilderGetRequestConfiguration';
import {CallRecordsRequestBuilderPostRequestConfiguration} from './callRecordsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {GetDirectRoutingCallsWithFromDateTimeWithToDateTimeRequestBuilder} from './getDirectRoutingCallsWithFromDateTimeWithToDateTime/getDirectRoutingCallsWithFromDateTimeWithToDateTimeRequestBuilder';
import {GetPstnCallsWithFromDateTimeWithToDateTimeRequestBuilder} from './getPstnCallsWithFromDateTimeWithToDateTime/getPstnCallsWithFromDateTimeWithToDateTimeRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the callRecords property of the microsoft.graph.cloudCommunications entity. */
export class CallRecordsRequestBuilder {
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
     * Instantiates a new CallRecordsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/communications/callRecords{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get callRecords from communications
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: CallRecordsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to callRecords for communications
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: CallRecord | undefined, requestConfiguration?: CallRecordsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeCallRecord);
        return requestInfo;
    };
    /**
     * Get callRecords from communications
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of CallRecordCollectionResponse
     */
    public get(requestConfiguration?: CallRecordsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<CallRecordCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<CallRecordCollectionResponse>(requestInfo,deserializeIntoCallRecordCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to call the getDirectRoutingCalls method.
     * @param fromDateTime Usage: fromDateTime={fromDateTime}
     * @param toDateTime Usage: toDateTime={toDateTime}
     * @returns a getDirectRoutingCallsWithFromDateTimeWithToDateTimeRequestBuilder
     */
    public getDirectRoutingCallsWithFromDateTimeWithToDateTime(fromDateTime: Date | undefined, toDateTime: Date | undefined) : GetDirectRoutingCallsWithFromDateTimeWithToDateTimeRequestBuilder {
        if(!fromDateTime) throw new Error("fromDateTime cannot be undefined");
        if(!toDateTime) throw new Error("toDateTime cannot be undefined");
        return new GetDirectRoutingCallsWithFromDateTimeWithToDateTimeRequestBuilder(this.pathParameters, this.requestAdapter, fromDateTime, toDateTime);
    };
    /**
     * Provides operations to call the getPstnCalls method.
     * @param fromDateTime Usage: fromDateTime={fromDateTime}
     * @param toDateTime Usage: toDateTime={toDateTime}
     * @returns a getPstnCallsWithFromDateTimeWithToDateTimeRequestBuilder
     */
    public getPstnCallsWithFromDateTimeWithToDateTime(fromDateTime: Date | undefined, toDateTime: Date | undefined) : GetPstnCallsWithFromDateTimeWithToDateTimeRequestBuilder {
        if(!fromDateTime) throw new Error("fromDateTime cannot be undefined");
        if(!toDateTime) throw new Error("toDateTime cannot be undefined");
        return new GetPstnCallsWithFromDateTimeWithToDateTimeRequestBuilder(this.pathParameters, this.requestAdapter, fromDateTime, toDateTime);
    };
    /**
     * Create new navigation property to callRecords for communications
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of CallRecord
     */
    public post(body: CallRecord | undefined, requestConfiguration?: CallRecordsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<CallRecord | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<CallRecord>(requestInfo,deserializeIntoCallRecord, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
