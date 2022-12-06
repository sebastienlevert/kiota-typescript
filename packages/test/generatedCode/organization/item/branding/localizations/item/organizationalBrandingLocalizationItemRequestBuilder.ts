import {deserializeIntoOrganizationalBrandingLocalization} from '../../../../../models/deserializeIntoOrganizationalBrandingLocalization';
import {ODataError} from '../../../../../models/oDataErrors/oDataError';
import {OrganizationalBrandingLocalization} from '../../../../../models/organizationalBrandingLocalization';
import {serializeOrganizationalBrandingLocalization} from '../../../../../models/serializeOrganizationalBrandingLocalization';
import {BackgroundImageRequestBuilder} from './backgroundImage/backgroundImageRequestBuilder';
import {BannerLogoRequestBuilder} from './bannerLogo/bannerLogoRequestBuilder';
import {OrganizationalBrandingLocalizationItemRequestBuilderDeleteRequestConfiguration} from './organizationalBrandingLocalizationItemRequestBuilderDeleteRequestConfiguration';
import {OrganizationalBrandingLocalizationItemRequestBuilderGetRequestConfiguration} from './organizationalBrandingLocalizationItemRequestBuilderGetRequestConfiguration';
import {OrganizationalBrandingLocalizationItemRequestBuilderPatchRequestConfiguration} from './organizationalBrandingLocalizationItemRequestBuilderPatchRequestConfiguration';
import {SquareLogoRequestBuilder} from './squareLogo/squareLogoRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the localizations property of the microsoft.graph.organizationalBranding entity. */
export class OrganizationalBrandingLocalizationItemRequestBuilder {
    /** Provides operations to manage the media for the organization entity. */
    public get backgroundImage(): BackgroundImageRequestBuilder {
        return new BackgroundImageRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the media for the organization entity. */
    public get bannerLogo(): BannerLogoRequestBuilder {
        return new BannerLogoRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Provides operations to manage the media for the organization entity. */
    public get squareLogo(): SquareLogoRequestBuilder {
        return new SquareLogoRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new OrganizationalBrandingLocalizationItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/organization/{organization%2Did}/branding/localizations/{organizationalBrandingLocalization%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property localizations for organization
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: OrganizationalBrandingLocalizationItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Add different branding based on a locale.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: OrganizationalBrandingLocalizationItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property localizations in organization
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: OrganizationalBrandingLocalization | undefined, requestConfiguration?: OrganizationalBrandingLocalizationItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeOrganizationalBrandingLocalization);
        return requestInfo;
    };
    /**
     * Delete navigation property localizations for organization
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: OrganizationalBrandingLocalizationItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Add different branding based on a locale.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of OrganizationalBrandingLocalization
     */
    public get(requestConfiguration?: OrganizationalBrandingLocalizationItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<OrganizationalBrandingLocalization | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<OrganizationalBrandingLocalization>(requestInfo,deserializeIntoOrganizationalBrandingLocalization, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property localizations in organization
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of OrganizationalBrandingLocalization
     */
    public patch(body: OrganizationalBrandingLocalization | undefined, requestConfiguration?: OrganizationalBrandingLocalizationItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<OrganizationalBrandingLocalization | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<OrganizationalBrandingLocalization>(requestInfo,deserializeIntoOrganizationalBrandingLocalization, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
