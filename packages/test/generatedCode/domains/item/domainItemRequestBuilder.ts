import {deserializeIntoDomain} from '../../models/deserializeIntoDomain';
import {Domain} from '../../models/domain';
import {ODataError} from '../../models/oDataErrors/oDataError';
import {serializeDomain} from '../../models/serializeDomain';
import {DomainItemRequestBuilderDeleteRequestConfiguration} from './domainItemRequestBuilderDeleteRequestConfiguration';
import {DomainItemRequestBuilderGetRequestConfiguration} from './domainItemRequestBuilderGetRequestConfiguration';
import {DomainItemRequestBuilderPatchRequestConfiguration} from './domainItemRequestBuilderPatchRequestConfiguration';
import {DomainNameReferencesRequestBuilder} from './domainNameReferences/domainNameReferencesRequestBuilder';
import {DirectoryObjectItemRequestBuilder} from './domainNameReferences/item/directoryObjectItemRequestBuilder';
import {FederationConfigurationRequestBuilder} from './federationConfiguration/federationConfigurationRequestBuilder';
import {InternalDomainFederationItemRequestBuilder} from './federationConfiguration/item/internalDomainFederationItemRequestBuilder';
import {ForceDeleteRequestBuilder} from './forceDelete/forceDeleteRequestBuilder';
import {DomainDnsRecordItemRequestBuilder as i0c2a72f12f7b53bfd95a6e31e45d429002d715cc85185cb1a86c46a4e0c43e34} from './serviceConfigurationRecords/item/domainDnsRecordItemRequestBuilder';
import {ServiceConfigurationRecordsRequestBuilder} from './serviceConfigurationRecords/serviceConfigurationRecordsRequestBuilder';
import {DomainDnsRecordItemRequestBuilder as idfeb2c79faf177ed6dd366d5db8814ca6d6e9fdec009742f22c17bb888cd85ef} from './verificationDnsRecords/item/domainDnsRecordItemRequestBuilder';
import {VerificationDnsRecordsRequestBuilder} from './verificationDnsRecords/verificationDnsRecordsRequestBuilder';
import {VerifyRequestBuilder} from './verify/verifyRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of domain entities. */
export class DomainItemRequestBuilder {
    /** Provides operations to manage the domainNameReferences property of the microsoft.graph.domain entity. */
    public get domainNameReferences(): DomainNameReferencesRequestBuilder {
        return new DomainNameReferencesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the federationConfiguration property of the microsoft.graph.domain entity. */
    public get federationConfiguration(): FederationConfigurationRequestBuilder {
        return new FederationConfigurationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the forceDelete method. */
    public get forceDelete(): ForceDeleteRequestBuilder {
        return new ForceDeleteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Provides operations to manage the serviceConfigurationRecords property of the microsoft.graph.domain entity. */
    public get serviceConfigurationRecords(): ServiceConfigurationRecordsRequestBuilder {
        return new ServiceConfigurationRecordsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /** Provides operations to manage the verificationDnsRecords property of the microsoft.graph.domain entity. */
    public get verificationDnsRecords(): VerificationDnsRecordsRequestBuilder {
        return new VerificationDnsRecordsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the verify method. */
    public get verify(): VerifyRequestBuilder {
        return new VerifyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new DomainItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/domains/{domain%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Deletes a domain from a tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: DomainItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties and relationships of domain object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: DomainItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of domain object.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Domain | undefined, requestConfiguration?: DomainItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDomain);
        return requestInfo;
    };
    /**
     * Deletes a domain from a tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: DomainItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the domainNameReferences property of the microsoft.graph.domain entity.
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public domainNameReferencesById(id: string) : DirectoryObjectItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new DirectoryObjectItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the federationConfiguration property of the microsoft.graph.domain entity.
     * @param id Unique identifier of the item
     * @returns a InternalDomainFederationItemRequestBuilder
     */
    public federationConfigurationById(id: string) : InternalDomainFederationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["internalDomainFederation%2Did"] = id
        return new InternalDomainFederationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Retrieve the properties and relationships of domain object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Domain
     */
    public get(requestConfiguration?: DomainItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Domain | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<Domain>(requestInfo,deserializeIntoDomain, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the properties of domain object.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Domain
     */
    public patch(body: Domain | undefined, requestConfiguration?: DomainItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Domain | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<Domain>(requestInfo,deserializeIntoDomain, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the serviceConfigurationRecords property of the microsoft.graph.domain entity.
     * @param id Unique identifier of the item
     * @returns a DomainDnsRecordItemRequestBuilder
     */
    public serviceConfigurationRecordsById(id: string) : i0c2a72f12f7b53bfd95a6e31e45d429002d715cc85185cb1a86c46a4e0c43e34 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["domainDnsRecord%2Did"] = id
        return new i0c2a72f12f7b53bfd95a6e31e45d429002d715cc85185cb1a86c46a4e0c43e34(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the verificationDnsRecords property of the microsoft.graph.domain entity.
     * @param id Unique identifier of the item
     * @returns a DomainDnsRecordItemRequestBuilder
     */
    public verificationDnsRecordsById(id: string) : idfeb2c79faf177ed6dd366d5db8814ca6d6e9fdec009742f22c17bb888cd85ef {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["domainDnsRecord%2Did"] = id
        return new idfeb2c79faf177ed6dd366d5db8814ca6d6e9fdec009742f22c17bb888cd85ef(urlTplParams, this.requestAdapter);
    };
}
