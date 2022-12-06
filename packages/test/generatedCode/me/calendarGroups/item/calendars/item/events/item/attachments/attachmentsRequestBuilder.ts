import {Attachment} from '../../../../../../../../models/attachment';
import {AttachmentCollectionResponse} from '../../../../../../../../models/attachmentCollectionResponse';
import {deserializeIntoAttachment} from '../../../../../../../../models/deserializeIntoAttachment';
import {deserializeIntoAttachmentCollectionResponse} from '../../../../../../../../models/deserializeIntoAttachmentCollectionResponse';
import {ODataError} from '../../../../../../../../models/oDataErrors/oDataError';
import {serializeAttachment} from '../../../../../../../../models/serializeAttachment';
import {serializeAttachmentCollectionResponse} from '../../../../../../../../models/serializeAttachmentCollectionResponse';
import {AttachmentsRequestBuilderGetRequestConfiguration} from './attachmentsRequestBuilderGetRequestConfiguration';
import {AttachmentsRequestBuilderPostRequestConfiguration} from './attachmentsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {CreateUploadSessionRequestBuilder} from './createUploadSession/createUploadSessionRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the attachments property of the microsoft.graph.event entity. */
export class AttachmentsRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the createUploadSession method. */
    public get createUploadSession(): CreateUploadSessionRequestBuilder {
        return new CreateUploadSessionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new AttachmentsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/me/calendarGroups/{calendarGroup%2Did}/calendars/{calendar%2Did}/events/{event%2Did}/attachments{?%24top,%24skip,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Retrieve a list of attachment objects attached to an event.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: AttachmentsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Use this API to add an attachment to an existing event. This operation limits the size of the attachment you can add to under 3 MB. If an organizer adds an attachment to a meeting event, the organizer can subsequently update the event to send the attachment and update the event for each attendee as well.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: Attachment | undefined, requestConfiguration?: AttachmentsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAttachment);
        return requestInfo;
    };
    /**
     * Retrieve a list of attachment objects attached to an event.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AttachmentCollectionResponse
     */
    public get(requestConfiguration?: AttachmentsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AttachmentCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<AttachmentCollectionResponse>(requestInfo,deserializeIntoAttachmentCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Use this API to add an attachment to an existing event. This operation limits the size of the attachment you can add to under 3 MB. If an organizer adds an attachment to a meeting event, the organizer can subsequently update the event to send the attachment and update the event for each attendee as well.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Attachment
     */
    public post(body: Attachment | undefined, requestConfiguration?: AttachmentsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Attachment | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<Attachment>(requestInfo,deserializeIntoAttachment, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
