import {BookingCustomerBase} from '../../../../models/bookingCustomerBase';
import {BookingCustomerBaseCollectionResponse} from '../../../../models/bookingCustomerBaseCollectionResponse';
import {deserializeIntoBookingCustomerBase} from '../../../../models/deserializeIntoBookingCustomerBase';
import {deserializeIntoBookingCustomerBaseCollectionResponse} from '../../../../models/deserializeIntoBookingCustomerBaseCollectionResponse';
import {ODataError} from '../../../../models/oDataErrors/oDataError';
import {serializeBookingCustomerBase} from '../../../../models/serializeBookingCustomerBase';
import {serializeBookingCustomerBaseCollectionResponse} from '../../../../models/serializeBookingCustomerBaseCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {CustomersRequestBuilderGetRequestConfiguration} from './customersRequestBuilderGetRequestConfiguration';
import {CustomersRequestBuilderPostRequestConfiguration} from './customersRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the customers property of the microsoft.graph.bookingBusiness entity. */
export class CustomersRequestBuilder {
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
     * Instantiates a new CustomersRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/solutions/bookingBusinesses/{bookingBusiness%2Did}/customers{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get a list of bookingCustomer objects of a business.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: CustomersRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new bookingCustomer object.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: BookingCustomerBase | undefined, requestConfiguration?: CustomersRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeBookingCustomerBase);
        return requestInfo;
    };
    /**
     * Get a list of bookingCustomer objects of a business.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of BookingCustomerBaseCollectionResponse
     */
    public get(requestConfiguration?: CustomersRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<BookingCustomerBaseCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<BookingCustomerBaseCollectionResponse>(requestInfo,deserializeIntoBookingCustomerBaseCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create a new bookingCustomer object.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of BookingCustomerBase
     */
    public post(body: BookingCustomerBase | undefined, requestConfiguration?: CustomersRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<BookingCustomerBase | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<BookingCustomerBase>(requestInfo,deserializeIntoBookingCustomerBase, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
