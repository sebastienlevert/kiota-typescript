import {ConnectedOrganization} from '../../../../models/connectedOrganization';
import {deserializeIntoConnectedOrganization} from '../../../../models/deserializeIntoConnectedOrganization';
import {ODataError} from '../../../../models/oDataErrors/oDataError';
import {serializeConnectedOrganization} from '../../../../models/serializeConnectedOrganization';
import {ConnectedOrganizationItemRequestBuilderDeleteRequestConfiguration} from './connectedOrganizationItemRequestBuilderDeleteRequestConfiguration';
import {ConnectedOrganizationItemRequestBuilderGetRequestConfiguration} from './connectedOrganizationItemRequestBuilderGetRequestConfiguration';
import {ConnectedOrganizationItemRequestBuilderPatchRequestConfiguration} from './connectedOrganizationItemRequestBuilderPatchRequestConfiguration';
import {ExternalSponsorsRequestBuilder} from './externalSponsors/externalSponsorsRequestBuilder';
import {DirectoryObjectItemRequestBuilder as ibf931c4f4a1f72d822c478b9b317d593dddf28c8a442bff31cba8447d50530bf} from './externalSponsors/item/directoryObjectItemRequestBuilder';
import {InternalSponsorsRequestBuilder} from './internalSponsors/internalSponsorsRequestBuilder';
import {DirectoryObjectItemRequestBuilder as i4bdd81145e707b08f75e46eed75a248f2793c15527dc4ac974ba34de02bf546f} from './internalSponsors/item/directoryObjectItemRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the connectedOrganizations property of the microsoft.graph.entitlementManagement entity. */
export class ConnectedOrganizationItemRequestBuilder {
    /** Provides operations to manage the externalSponsors property of the microsoft.graph.connectedOrganization entity. */
    public get externalSponsors(): ExternalSponsorsRequestBuilder {
        return new ExternalSponsorsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the internalSponsors property of the microsoft.graph.connectedOrganization entity. */
    public get internalSponsors(): InternalSponsorsRequestBuilder {
        return new InternalSponsorsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new ConnectedOrganizationItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property connectedOrganizations for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: ConnectedOrganizationItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * References to a directory or domain of another organization whose users can request access.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: ConnectedOrganizationItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property connectedOrganizations in identityGovernance
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: ConnectedOrganization | undefined, requestConfiguration?: ConnectedOrganizationItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeConnectedOrganization);
        return requestInfo;
    };
    /**
     * Delete navigation property connectedOrganizations for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: ConnectedOrganizationItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Gets an item from the ApiSdk.identityGovernance.entitlementManagement.connectedOrganizations.item.externalSponsors.item collection
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public externalSponsorsById(id: string) : ibf931c4f4a1f72d822c478b9b317d593dddf28c8a442bff31cba8447d50530bf {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new ibf931c4f4a1f72d822c478b9b317d593dddf28c8a442bff31cba8447d50530bf(urlTplParams, this.requestAdapter);
    };
    /**
     * References to a directory or domain of another organization whose users can request access.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ConnectedOrganization
     */
    public get(requestConfiguration?: ConnectedOrganizationItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ConnectedOrganization | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<ConnectedOrganization>(requestInfo,deserializeIntoConnectedOrganization, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Gets an item from the ApiSdk.identityGovernance.entitlementManagement.connectedOrganizations.item.internalSponsors.item collection
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public internalSponsorsById(id: string) : i4bdd81145e707b08f75e46eed75a248f2793c15527dc4ac974ba34de02bf546f {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new i4bdd81145e707b08f75e46eed75a248f2793c15527dc4ac974ba34de02bf546f(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property connectedOrganizations in identityGovernance
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ConnectedOrganization
     */
    public patch(body: ConnectedOrganization | undefined, requestConfiguration?: ConnectedOrganizationItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ConnectedOrganization | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<ConnectedOrganization>(requestInfo,deserializeIntoConnectedOrganization, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
