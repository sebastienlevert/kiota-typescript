import {BookingBusiness} from '../../../models/bookingBusiness';
import {deserializeIntoBookingBusiness} from '../../../models/deserializeIntoBookingBusiness';
import {ODataError} from '../../../models/oDataErrors/oDataError';
import {serializeBookingBusiness} from '../../../models/serializeBookingBusiness';
import {AppointmentsRequestBuilder} from './appointments/appointmentsRequestBuilder';
import {BookingAppointmentItemRequestBuilder as i6144d500b98686cfe11c9654148872eb8449d2950490f59e12abe4b8454d95c2} from './appointments/item/bookingAppointmentItemRequestBuilder';
import {BookingBusinessItemRequestBuilderDeleteRequestConfiguration} from './bookingBusinessItemRequestBuilderDeleteRequestConfiguration';
import {BookingBusinessItemRequestBuilderGetRequestConfiguration} from './bookingBusinessItemRequestBuilderGetRequestConfiguration';
import {BookingBusinessItemRequestBuilderPatchRequestConfiguration} from './bookingBusinessItemRequestBuilderPatchRequestConfiguration';
import {CalendarViewRequestBuilder} from './calendarView/calendarViewRequestBuilder';
import {BookingAppointmentItemRequestBuilder as ic501fefdfe732f3ed2120c9f46d1fc02c9402fda6e554aadeffd2aec1250aa97} from './calendarView/item/bookingAppointmentItemRequestBuilder';
import {CustomersRequestBuilder} from './customers/customersRequestBuilder';
import {BookingCustomerBaseItemRequestBuilder} from './customers/item/bookingCustomerBaseItemRequestBuilder';
import {CustomQuestionsRequestBuilder} from './customQuestions/customQuestionsRequestBuilder';
import {BookingCustomQuestionItemRequestBuilder} from './customQuestions/item/bookingCustomQuestionItemRequestBuilder';
import {GetStaffAvailabilityRequestBuilder} from './getStaffAvailability/getStaffAvailabilityRequestBuilder';
import {PublishRequestBuilder} from './publish/publishRequestBuilder';
import {BookingServiceItemRequestBuilder} from './services/item/bookingServiceItemRequestBuilder';
import {ServicesRequestBuilder} from './services/servicesRequestBuilder';
import {BookingStaffMemberBaseItemRequestBuilder} from './staffMembers/item/bookingStaffMemberBaseItemRequestBuilder';
import {StaffMembersRequestBuilder} from './staffMembers/staffMembersRequestBuilder';
import {UnpublishRequestBuilder} from './unpublish/unpublishRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the bookingBusinesses property of the microsoft.graph.solutionsRoot entity. */
export class BookingBusinessItemRequestBuilder {
    /** Provides operations to manage the appointments property of the microsoft.graph.bookingBusiness entity. */
    public get appointments(): AppointmentsRequestBuilder {
        return new AppointmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the calendarView property of the microsoft.graph.bookingBusiness entity. */
    public get calendarView(): CalendarViewRequestBuilder {
        return new CalendarViewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the customers property of the microsoft.graph.bookingBusiness entity. */
    public get customers(): CustomersRequestBuilder {
        return new CustomersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the customQuestions property of the microsoft.graph.bookingBusiness entity. */
    public get customQuestions(): CustomQuestionsRequestBuilder {
        return new CustomQuestionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getStaffAvailability method. */
    public get getStaffAvailability(): GetStaffAvailabilityRequestBuilder {
        return new GetStaffAvailabilityRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** Provides operations to call the publish method. */
    public get publish(): PublishRequestBuilder {
        return new PublishRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Provides operations to manage the services property of the microsoft.graph.bookingBusiness entity. */
    public get services(): ServicesRequestBuilder {
        return new ServicesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the staffMembers property of the microsoft.graph.bookingBusiness entity. */
    public get staffMembers(): StaffMembersRequestBuilder {
        return new StaffMembersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the unpublish method. */
    public get unpublish(): UnpublishRequestBuilder {
        return new UnpublishRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Provides operations to manage the appointments property of the microsoft.graph.bookingBusiness entity.
     * @param id Unique identifier of the item
     * @returns a BookingAppointmentItemRequestBuilder
     */
    public appointmentsById(id: string) : i6144d500b98686cfe11c9654148872eb8449d2950490f59e12abe4b8454d95c2 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["bookingAppointment%2Did"] = id
        return new i6144d500b98686cfe11c9654148872eb8449d2950490f59e12abe4b8454d95c2(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the calendarView property of the microsoft.graph.bookingBusiness entity.
     * @param id Unique identifier of the item
     * @returns a BookingAppointmentItemRequestBuilder
     */
    public calendarViewById(id: string) : ic501fefdfe732f3ed2120c9f46d1fc02c9402fda6e554aadeffd2aec1250aa97 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["bookingAppointment%2Did"] = id
        return new ic501fefdfe732f3ed2120c9f46d1fc02c9402fda6e554aadeffd2aec1250aa97(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new BookingBusinessItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/solutions/bookingBusinesses/{bookingBusiness%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property bookingBusinesses for solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: BookingBusinessItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get bookingBusinesses from solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: BookingBusinessItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property bookingBusinesses in solutions
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: BookingBusiness | undefined, requestConfiguration?: BookingBusinessItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeBookingBusiness);
        return requestInfo;
    };
    /**
     * Provides operations to manage the customers property of the microsoft.graph.bookingBusiness entity.
     * @param id Unique identifier of the item
     * @returns a BookingCustomerBaseItemRequestBuilder
     */
    public customersById(id: string) : BookingCustomerBaseItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["bookingCustomerBase%2Did"] = id
        return new BookingCustomerBaseItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the customQuestions property of the microsoft.graph.bookingBusiness entity.
     * @param id Unique identifier of the item
     * @returns a BookingCustomQuestionItemRequestBuilder
     */
    public customQuestionsById(id: string) : BookingCustomQuestionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["bookingCustomQuestion%2Did"] = id
        return new BookingCustomQuestionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Delete navigation property bookingBusinesses for solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: BookingBusinessItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get bookingBusinesses from solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of BookingBusiness
     */
    public get(requestConfiguration?: BookingBusinessItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<BookingBusiness | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<BookingBusiness>(requestInfo,deserializeIntoBookingBusiness, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property bookingBusinesses in solutions
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of BookingBusiness
     */
    public patch(body: BookingBusiness | undefined, requestConfiguration?: BookingBusinessItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<BookingBusiness | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<BookingBusiness>(requestInfo,deserializeIntoBookingBusiness, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the services property of the microsoft.graph.bookingBusiness entity.
     * @param id Unique identifier of the item
     * @returns a BookingServiceItemRequestBuilder
     */
    public servicesById(id: string) : BookingServiceItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["bookingService%2Did"] = id
        return new BookingServiceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the staffMembers property of the microsoft.graph.bookingBusiness entity.
     * @param id Unique identifier of the item
     * @returns a BookingStaffMemberBaseItemRequestBuilder
     */
    public staffMembersById(id: string) : BookingStaffMemberBaseItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["bookingStaffMemberBase%2Did"] = id
        return new BookingStaffMemberBaseItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
