import {deserializeIntoServicePrincipal} from '../../models/deserializeIntoServicePrincipal';
import {ODataError} from '../../models/oDataErrors/oDataError';
import {serializeServicePrincipal} from '../../models/serializeServicePrincipal';
import {ServicePrincipal} from '../../models/servicePrincipal';
import {AddKeyRequestBuilder} from './addKey/addKeyRequestBuilder';
import {AddPasswordRequestBuilder} from './addPassword/addPasswordRequestBuilder';
import {AddTokenSigningCertificateRequestBuilder} from './addTokenSigningCertificate/addTokenSigningCertificateRequestBuilder';
import {AppRoleAssignedToRequestBuilder} from './appRoleAssignedTo/appRoleAssignedToRequestBuilder';
import {AppRoleAssignmentItemRequestBuilder as ie9fd911dd4da1dc67790d1ad2b2a3f2ba6d4b4c9a884b0cafe2207bd2af54871} from './appRoleAssignedTo/item/appRoleAssignmentItemRequestBuilder';
import {AppRoleAssignmentsRequestBuilder} from './appRoleAssignments/appRoleAssignmentsRequestBuilder';
import {AppRoleAssignmentItemRequestBuilder as i313f565aba8625bb68feb1932b15d5f9bc7e2caf621299c32a53c168a67b165a} from './appRoleAssignments/item/appRoleAssignmentItemRequestBuilder';
import {CheckMemberGroupsRequestBuilder} from './checkMemberGroups/checkMemberGroupsRequestBuilder';
import {CheckMemberObjectsRequestBuilder} from './checkMemberObjects/checkMemberObjectsRequestBuilder';
import {ClaimsMappingPoliciesRequestBuilder} from './claimsMappingPolicies/claimsMappingPoliciesRequestBuilder';
import {ClaimsMappingPolicyItemRequestBuilder} from './claimsMappingPolicies/item/claimsMappingPolicyItemRequestBuilder';
import {CreatedObjectsRequestBuilder} from './createdObjects/createdObjectsRequestBuilder';
import {DirectoryObjectItemRequestBuilder as ie2e2e8858a75fc09f7929218acf0be449f9588468327d9624f6b41f1dff8d081} from './createdObjects/item/directoryObjectItemRequestBuilder';
import {DelegatedPermissionClassificationsRequestBuilder} from './delegatedPermissionClassifications/delegatedPermissionClassificationsRequestBuilder';
import {DelegatedPermissionClassificationItemRequestBuilder} from './delegatedPermissionClassifications/item/delegatedPermissionClassificationItemRequestBuilder';
import {EndpointsRequestBuilder} from './endpoints/endpointsRequestBuilder';
import {EndpointItemRequestBuilder} from './endpoints/item/endpointItemRequestBuilder';
import {FederatedIdentityCredentialsRequestBuilder} from './federatedIdentityCredentials/federatedIdentityCredentialsRequestBuilder';
import {FederatedIdentityCredentialItemRequestBuilder} from './federatedIdentityCredentials/item/federatedIdentityCredentialItemRequestBuilder';
import {GetMemberGroupsRequestBuilder} from './getMemberGroups/getMemberGroupsRequestBuilder';
import {GetMemberObjectsRequestBuilder} from './getMemberObjects/getMemberObjectsRequestBuilder';
import {HomeRealmDiscoveryPoliciesRequestBuilder} from './homeRealmDiscoveryPolicies/homeRealmDiscoveryPoliciesRequestBuilder';
import {HomeRealmDiscoveryPolicyItemRequestBuilder} from './homeRealmDiscoveryPolicies/item/homeRealmDiscoveryPolicyItemRequestBuilder';
import {DirectoryObjectItemRequestBuilder as ie3cbc50e564b524736ddea664411e052298572795739829c3d637c90404d0b44} from './memberOf/item/directoryObjectItemRequestBuilder';
import {MemberOfRequestBuilder} from './memberOf/memberOfRequestBuilder';
import {OAuth2PermissionGrantItemRequestBuilder} from './oauth2PermissionGrants/item/oAuth2PermissionGrantItemRequestBuilder';
import {Oauth2PermissionGrantsRequestBuilder} from './oauth2PermissionGrants/oauth2PermissionGrantsRequestBuilder';
import {DirectoryObjectItemRequestBuilder as i74dd756cb522d3b5657120ab43ed39ac4db9af232dd0c43ae47bd188d9821056} from './ownedObjects/item/directoryObjectItemRequestBuilder';
import {OwnedObjectsRequestBuilder} from './ownedObjects/ownedObjectsRequestBuilder';
import {DirectoryObjectItemRequestBuilder as i4d2b933816b436a620f7dc95133c544a238d8241f973fc01af3b2dce9cae897c} from './owners/item/directoryObjectItemRequestBuilder';
import {OwnersRequestBuilder} from './owners/ownersRequestBuilder';
import {RemoveKeyRequestBuilder} from './removeKey/removeKeyRequestBuilder';
import {RemovePasswordRequestBuilder} from './removePassword/removePasswordRequestBuilder';
import {RestoreRequestBuilder} from './restore/restoreRequestBuilder';
import {ServicePrincipalItemRequestBuilderDeleteRequestConfiguration} from './servicePrincipalItemRequestBuilderDeleteRequestConfiguration';
import {ServicePrincipalItemRequestBuilderGetRequestConfiguration} from './servicePrincipalItemRequestBuilderGetRequestConfiguration';
import {ServicePrincipalItemRequestBuilderPatchRequestConfiguration} from './servicePrincipalItemRequestBuilderPatchRequestConfiguration';
import {TokenIssuancePolicyItemRequestBuilder} from './tokenIssuancePolicies/item/tokenIssuancePolicyItemRequestBuilder';
import {TokenIssuancePoliciesRequestBuilder} from './tokenIssuancePolicies/tokenIssuancePoliciesRequestBuilder';
import {TokenLifetimePolicyItemRequestBuilder} from './tokenLifetimePolicies/item/tokenLifetimePolicyItemRequestBuilder';
import {TokenLifetimePoliciesRequestBuilder} from './tokenLifetimePolicies/tokenLifetimePoliciesRequestBuilder';
import {DirectoryObjectItemRequestBuilder as ic4fdc45f46ef36b3d99d97489222c65c6ac19d568cb6e7f2f1bea0279b6ce166} from './transitiveMemberOf/item/directoryObjectItemRequestBuilder';
import {TransitiveMemberOfRequestBuilder} from './transitiveMemberOf/transitiveMemberOfRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of servicePrincipal entities. */
export class ServicePrincipalItemRequestBuilder {
    /** Provides operations to call the addKey method. */
    public get addKey(): AddKeyRequestBuilder {
        return new AddKeyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the addPassword method. */
    public get addPassword(): AddPasswordRequestBuilder {
        return new AddPasswordRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the addTokenSigningCertificate method. */
    public get addTokenSigningCertificate(): AddTokenSigningCertificateRequestBuilder {
        return new AddTokenSigningCertificateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the appRoleAssignedTo property of the microsoft.graph.servicePrincipal entity. */
    public get appRoleAssignedTo(): AppRoleAssignedToRequestBuilder {
        return new AppRoleAssignedToRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the appRoleAssignments property of the microsoft.graph.servicePrincipal entity. */
    public get appRoleAssignments(): AppRoleAssignmentsRequestBuilder {
        return new AppRoleAssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the checkMemberGroups method. */
    public get checkMemberGroups(): CheckMemberGroupsRequestBuilder {
        return new CheckMemberGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the checkMemberObjects method. */
    public get checkMemberObjects(): CheckMemberObjectsRequestBuilder {
        return new CheckMemberObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the claimsMappingPolicies property of the microsoft.graph.servicePrincipal entity. */
    public get claimsMappingPolicies(): ClaimsMappingPoliciesRequestBuilder {
        return new ClaimsMappingPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the createdObjects property of the microsoft.graph.servicePrincipal entity. */
    public get createdObjects(): CreatedObjectsRequestBuilder {
        return new CreatedObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the delegatedPermissionClassifications property of the microsoft.graph.servicePrincipal entity. */
    public get delegatedPermissionClassifications(): DelegatedPermissionClassificationsRequestBuilder {
        return new DelegatedPermissionClassificationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the endpoints property of the microsoft.graph.servicePrincipal entity. */
    public get endpoints(): EndpointsRequestBuilder {
        return new EndpointsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the federatedIdentityCredentials property of the microsoft.graph.servicePrincipal entity. */
    public get federatedIdentityCredentials(): FederatedIdentityCredentialsRequestBuilder {
        return new FederatedIdentityCredentialsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getMemberGroups method. */
    public get getMemberGroups(): GetMemberGroupsRequestBuilder {
        return new GetMemberGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getMemberObjects method. */
    public get getMemberObjects(): GetMemberObjectsRequestBuilder {
        return new GetMemberObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the homeRealmDiscoveryPolicies property of the microsoft.graph.servicePrincipal entity. */
    public get homeRealmDiscoveryPolicies(): HomeRealmDiscoveryPoliciesRequestBuilder {
        return new HomeRealmDiscoveryPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the memberOf property of the microsoft.graph.servicePrincipal entity. */
    public get memberOf(): MemberOfRequestBuilder {
        return new MemberOfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the oauth2PermissionGrants property of the microsoft.graph.servicePrincipal entity. */
    public get oauth2PermissionGrants(): Oauth2PermissionGrantsRequestBuilder {
        return new Oauth2PermissionGrantsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the ownedObjects property of the microsoft.graph.servicePrincipal entity. */
    public get ownedObjects(): OwnedObjectsRequestBuilder {
        return new OwnedObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the owners property of the microsoft.graph.servicePrincipal entity. */
    public get owners(): OwnersRequestBuilder {
        return new OwnersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** Provides operations to call the removeKey method. */
    public get removeKey(): RemoveKeyRequestBuilder {
        return new RemoveKeyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the removePassword method. */
    public get removePassword(): RemovePasswordRequestBuilder {
        return new RemovePasswordRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Provides operations to call the restore method. */
    public get restore(): RestoreRequestBuilder {
        return new RestoreRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the tokenIssuancePolicies property of the microsoft.graph.servicePrincipal entity. */
    public get tokenIssuancePolicies(): TokenIssuancePoliciesRequestBuilder {
        return new TokenIssuancePoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the tokenLifetimePolicies property of the microsoft.graph.servicePrincipal entity. */
    public get tokenLifetimePolicies(): TokenLifetimePoliciesRequestBuilder {
        return new TokenLifetimePoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the transitiveMemberOf property of the microsoft.graph.servicePrincipal entity. */
    public get transitiveMemberOf(): TransitiveMemberOfRequestBuilder {
        return new TransitiveMemberOfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Provides operations to manage the appRoleAssignedTo property of the microsoft.graph.servicePrincipal entity.
     * @param id Unique identifier of the item
     * @returns a AppRoleAssignmentItemRequestBuilder
     */
    public appRoleAssignedToById(id: string) : ie9fd911dd4da1dc67790d1ad2b2a3f2ba6d4b4c9a884b0cafe2207bd2af54871 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["appRoleAssignment%2Did"] = id
        return new ie9fd911dd4da1dc67790d1ad2b2a3f2ba6d4b4c9a884b0cafe2207bd2af54871(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the appRoleAssignments property of the microsoft.graph.servicePrincipal entity.
     * @param id Unique identifier of the item
     * @returns a AppRoleAssignmentItemRequestBuilder
     */
    public appRoleAssignmentsById(id: string) : i313f565aba8625bb68feb1932b15d5f9bc7e2caf621299c32a53c168a67b165a {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["appRoleAssignment%2Did"] = id
        return new i313f565aba8625bb68feb1932b15d5f9bc7e2caf621299c32a53c168a67b165a(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.servicePrincipals.item.claimsMappingPolicies.item collection
     * @param id Unique identifier of the item
     * @returns a ClaimsMappingPolicyItemRequestBuilder
     */
    public claimsMappingPoliciesById(id: string) : ClaimsMappingPolicyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["claimsMappingPolicy%2Did"] = id
        return new ClaimsMappingPolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ServicePrincipalItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/servicePrincipals/{servicePrincipal%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete a servicePrincipal object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: ServicePrincipalItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Provides operations to manage the createdObjects property of the microsoft.graph.servicePrincipal entity.
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public createdObjectsById(id: string) : ie2e2e8858a75fc09f7929218acf0be449f9588468327d9624f6b41f1dff8d081 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new ie2e2e8858a75fc09f7929218acf0be449f9588468327d9624f6b41f1dff8d081(urlTplParams, this.requestAdapter);
    };
    /**
     * Retrieve the properties and relationships of a servicePrincipal object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: ServicePrincipalItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update entity in servicePrincipals
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: ServicePrincipal | undefined, requestConfiguration?: ServicePrincipalItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeServicePrincipal);
        return requestInfo;
    };
    /**
     * Provides operations to manage the delegatedPermissionClassifications property of the microsoft.graph.servicePrincipal entity.
     * @param id Unique identifier of the item
     * @returns a DelegatedPermissionClassificationItemRequestBuilder
     */
    public delegatedPermissionClassificationsById(id: string) : DelegatedPermissionClassificationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["delegatedPermissionClassification%2Did"] = id
        return new DelegatedPermissionClassificationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Delete a servicePrincipal object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: ServicePrincipalItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the endpoints property of the microsoft.graph.servicePrincipal entity.
     * @param id Unique identifier of the item
     * @returns a EndpointItemRequestBuilder
     */
    public endpointsById(id: string) : EndpointItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["endpoint%2Did"] = id
        return new EndpointItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the federatedIdentityCredentials property of the microsoft.graph.servicePrincipal entity.
     * @param id Unique identifier of the item
     * @returns a FederatedIdentityCredentialItemRequestBuilder
     */
    public federatedIdentityCredentialsById(id: string) : FederatedIdentityCredentialItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["federatedIdentityCredential%2Did"] = id
        return new FederatedIdentityCredentialItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Retrieve the properties and relationships of a servicePrincipal object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ServicePrincipal
     */
    public get(requestConfiguration?: ServicePrincipalItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ServicePrincipal | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<ServicePrincipal>(requestInfo,deserializeIntoServicePrincipal, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Gets an item from the ApiSdk.servicePrincipals.item.homeRealmDiscoveryPolicies.item collection
     * @param id Unique identifier of the item
     * @returns a HomeRealmDiscoveryPolicyItemRequestBuilder
     */
    public homeRealmDiscoveryPoliciesById(id: string) : HomeRealmDiscoveryPolicyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["homeRealmDiscoveryPolicy%2Did"] = id
        return new HomeRealmDiscoveryPolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the memberOf property of the microsoft.graph.servicePrincipal entity.
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public memberOfById(id: string) : ie3cbc50e564b524736ddea664411e052298572795739829c3d637c90404d0b44 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new ie3cbc50e564b524736ddea664411e052298572795739829c3d637c90404d0b44(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the oauth2PermissionGrants property of the microsoft.graph.servicePrincipal entity.
     * @param id Unique identifier of the item
     * @returns a OAuth2PermissionGrantItemRequestBuilder
     */
    public oauth2PermissionGrantsById(id: string) : OAuth2PermissionGrantItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["oAuth2PermissionGrant%2Did"] = id
        return new OAuth2PermissionGrantItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the ownedObjects property of the microsoft.graph.servicePrincipal entity.
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public ownedObjectsById(id: string) : i74dd756cb522d3b5657120ab43ed39ac4db9af232dd0c43ae47bd188d9821056 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new i74dd756cb522d3b5657120ab43ed39ac4db9af232dd0c43ae47bd188d9821056(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.servicePrincipals.item.owners.item collection
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public ownersById(id: string) : i4d2b933816b436a620f7dc95133c544a238d8241f973fc01af3b2dce9cae897c {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new i4d2b933816b436a620f7dc95133c544a238d8241f973fc01af3b2dce9cae897c(urlTplParams, this.requestAdapter);
    };
    /**
     * Update entity in servicePrincipals
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ServicePrincipal
     */
    public patch(body: ServicePrincipal | undefined, requestConfiguration?: ServicePrincipalItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ServicePrincipal | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<ServicePrincipal>(requestInfo,deserializeIntoServicePrincipal, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the tokenIssuancePolicies property of the microsoft.graph.servicePrincipal entity.
     * @param id Unique identifier of the item
     * @returns a TokenIssuancePolicyItemRequestBuilder
     */
    public tokenIssuancePoliciesById(id: string) : TokenIssuancePolicyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["tokenIssuancePolicy%2Did"] = id
        return new TokenIssuancePolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the tokenLifetimePolicies property of the microsoft.graph.servicePrincipal entity.
     * @param id Unique identifier of the item
     * @returns a TokenLifetimePolicyItemRequestBuilder
     */
    public tokenLifetimePoliciesById(id: string) : TokenLifetimePolicyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["tokenLifetimePolicy%2Did"] = id
        return new TokenLifetimePolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the transitiveMemberOf property of the microsoft.graph.servicePrincipal entity.
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public transitiveMemberOfById(id: string) : ic4fdc45f46ef36b3d99d97489222c65c6ac19d568cb6e7f2f1bea0279b6ce166 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new ic4fdc45f46ef36b3d99d97489222c65c6ac19d568cb6e7f2f1bea0279b6ce166(urlTplParams, this.requestAdapter);
    };
}
