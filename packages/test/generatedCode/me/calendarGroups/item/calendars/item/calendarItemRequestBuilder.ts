import {Calendar} from '../../../../../models/calendar';
import {deserializeIntoCalendar} from '../../../../../models/deserializeIntoCalendar';
import {ODataError} from '../../../../../models/oDataErrors/oDataError';
import {serializeCalendar} from '../../../../../models/serializeCalendar';
import {AllowedCalendarSharingRolesWithUserRequestBuilder} from './allowedCalendarSharingRolesWithUser/allowedCalendarSharingRolesWithUserRequestBuilder';
import {CalendarItemRequestBuilderDeleteRequestConfiguration} from './calendarItemRequestBuilderDeleteRequestConfiguration';
import {CalendarItemRequestBuilderGetRequestConfiguration} from './calendarItemRequestBuilderGetRequestConfiguration';
import {CalendarItemRequestBuilderPatchRequestConfiguration} from './calendarItemRequestBuilderPatchRequestConfiguration';
import {CalendarPermissionsRequestBuilder} from './calendarPermissions/calendarPermissionsRequestBuilder';
import {CalendarPermissionItemRequestBuilder} from './calendarPermissions/item/calendarPermissionItemRequestBuilder';
import {CalendarViewRequestBuilder} from './calendarView/calendarViewRequestBuilder';
import {EventItemRequestBuilder as i8c3dc487d17c309db74f810c42c913d12ca2190073cae3714e3f8bfc6e2ca327} from './calendarView/item/eventItemRequestBuilder';
import {EventsRequestBuilder} from './events/eventsRequestBuilder';
import {EventItemRequestBuilder as i4716a62d2bc85de065583b4f0086b9e5e462fcfb09167a043575022b62a86160} from './events/item/eventItemRequestBuilder';
import {GetScheduleRequestBuilder} from './getSchedule/getScheduleRequestBuilder';
import {MultiValueLegacyExtendedPropertyItemRequestBuilder} from './multiValueExtendedProperties/item/multiValueLegacyExtendedPropertyItemRequestBuilder';
import {MultiValueExtendedPropertiesRequestBuilder} from './multiValueExtendedProperties/multiValueExtendedPropertiesRequestBuilder';
import {SingleValueLegacyExtendedPropertyItemRequestBuilder} from './singleValueExtendedProperties/item/singleValueLegacyExtendedPropertyItemRequestBuilder';
import {SingleValueExtendedPropertiesRequestBuilder} from './singleValueExtendedProperties/singleValueExtendedPropertiesRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the calendars property of the microsoft.graph.calendarGroup entity. */
export class CalendarItemRequestBuilder {
    /** Provides operations to manage the calendarPermissions property of the microsoft.graph.calendar entity. */
    public get calendarPermissions(): CalendarPermissionsRequestBuilder {
        return new CalendarPermissionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the calendarView property of the microsoft.graph.calendar entity. */
    public get calendarView(): CalendarViewRequestBuilder {
        return new CalendarViewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the events property of the microsoft.graph.calendar entity. */
    public get events(): EventsRequestBuilder {
        return new EventsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getSchedule method. */
    public get getSchedule(): GetScheduleRequestBuilder {
        return new GetScheduleRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the multiValueExtendedProperties property of the microsoft.graph.calendar entity. */
    public get multiValueExtendedProperties(): MultiValueExtendedPropertiesRequestBuilder {
        return new MultiValueExtendedPropertiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Provides operations to manage the singleValueExtendedProperties property of the microsoft.graph.calendar entity. */
    public get singleValueExtendedProperties(): SingleValueExtendedPropertiesRequestBuilder {
        return new SingleValueExtendedPropertiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Provides operations to call the allowedCalendarSharingRoles method.
     * @param User Usage: User='{User}'
     * @returns a allowedCalendarSharingRolesWithUserRequestBuilder
     */
    public allowedCalendarSharingRolesWithUser(user: string | undefined) : AllowedCalendarSharingRolesWithUserRequestBuilder {
        if(!user) throw new Error("user cannot be undefined");
        return new AllowedCalendarSharingRolesWithUserRequestBuilder(this.pathParameters, this.requestAdapter, user);
    };
    /**
     * Provides operations to manage the calendarPermissions property of the microsoft.graph.calendar entity.
     * @param id Unique identifier of the item
     * @returns a CalendarPermissionItemRequestBuilder
     */
    public calendarPermissionsById(id: string) : CalendarPermissionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["calendarPermission%2Did"] = id
        return new CalendarPermissionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the calendarView property of the microsoft.graph.calendar entity.
     * @param id Unique identifier of the item
     * @returns a EventItemRequestBuilder
     */
    public calendarViewById(id: string) : i8c3dc487d17c309db74f810c42c913d12ca2190073cae3714e3f8bfc6e2ca327 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["event%2Did"] = id
        return new i8c3dc487d17c309db74f810c42c913d12ca2190073cae3714e3f8bfc6e2ca327(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new CalendarItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/me/calendarGroups/{calendarGroup%2Did}/calendars/{calendar%2Did}{?%24select}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property calendars for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: CalendarItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The calendars in the calendar group. Navigation property. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: CalendarItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property calendars in me
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Calendar | undefined, requestConfiguration?: CalendarItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeCalendar);
        return requestInfo;
    };
    /**
     * Delete navigation property calendars for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: CalendarItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the events property of the microsoft.graph.calendar entity.
     * @param id Unique identifier of the item
     * @returns a EventItemRequestBuilder
     */
    public eventsById(id: string) : i4716a62d2bc85de065583b4f0086b9e5e462fcfb09167a043575022b62a86160 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["event%2Did"] = id
        return new i4716a62d2bc85de065583b4f0086b9e5e462fcfb09167a043575022b62a86160(urlTplParams, this.requestAdapter);
    };
    /**
     * The calendars in the calendar group. Navigation property. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Calendar
     */
    public get(requestConfiguration?: CalendarItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Calendar | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<Calendar>(requestInfo,deserializeIntoCalendar, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the multiValueExtendedProperties property of the microsoft.graph.calendar entity.
     * @param id Unique identifier of the item
     * @returns a MultiValueLegacyExtendedPropertyItemRequestBuilder
     */
    public multiValueExtendedPropertiesById(id: string) : MultiValueLegacyExtendedPropertyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["multiValueLegacyExtendedProperty%2Did"] = id
        return new MultiValueLegacyExtendedPropertyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property calendars in me
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Calendar
     */
    public patch(body: Calendar | undefined, requestConfiguration?: CalendarItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Calendar | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<Calendar>(requestInfo,deserializeIntoCalendar, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the singleValueExtendedProperties property of the microsoft.graph.calendar entity.
     * @param id Unique identifier of the item
     * @returns a SingleValueLegacyExtendedPropertyItemRequestBuilder
     */
    public singleValueExtendedPropertiesById(id: string) : SingleValueLegacyExtendedPropertyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["singleValueLegacyExtendedProperty%2Did"] = id
        return new SingleValueLegacyExtendedPropertyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
