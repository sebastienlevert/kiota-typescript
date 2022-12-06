import {deserializeIntoEducationSubmission} from '../../../../../../../../models/deserializeIntoEducationSubmission';
import {EducationSubmission} from '../../../../../../../../models/educationSubmission';
import {ODataError} from '../../../../../../../../models/oDataErrors/oDataError';
import {serializeEducationSubmission} from '../../../../../../../../models/serializeEducationSubmission';
import {SubmitRequestBuilderPostRequestConfiguration} from './submitRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to call the submit method. */
export class SubmitRequestBuilder {
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new SubmitRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/education/users/{educationUser%2Did}/assignments/{educationAssignment%2Did}/submissions/{educationSubmission%2Did}/microsoft.graph.submit";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Indicate that a student is done with the work and is ready to hand in the assignment.  This method changes the status of the submission from `working` to `submitted`. During the submit process, all the resources are copied to the **submittedResources** bucket. The teacher will be looking at the submitted resources list for grading. A teacher can also submit a student's assignment on their behalf.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(requestConfiguration?: SubmitRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Indicate that a student is done with the work and is ready to hand in the assignment.  This method changes the status of the submission from `working` to `submitted`. During the submit process, all the resources are copied to the **submittedResources** bucket. The teacher will be looking at the submitted resources list for grading. A teacher can also submit a student's assignment on their behalf.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EducationSubmission
     */
    public post(requestConfiguration?: SubmitRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EducationSubmission | undefined> {
        const requestInfo = this.createPostRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<EducationSubmission>(requestInfo,deserializeIntoEducationSubmission, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
