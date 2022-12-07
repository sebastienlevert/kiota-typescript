import {createAppConsentRequestScopeFromDiscriminatorValue} from './createAppConsentRequestScopeFromDiscriminatorValue';
import {createUserConsentRequestFromDiscriminatorValue} from './createUserConsentRequestFromDiscriminatorValue';
import {AppConsentRequestScope, Entity, UserConsentRequest} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AppConsentRequest extends Entity implements Parsable {
    /** The display name of the app for which consent is requested. Required. Supports $filter (eq only) and $orderby. */
    private _appDisplayName?: string | undefined;
    /** The identifier of the application. Required. Supports $filter (eq only) and $orderby. */
    private _appId?: string | undefined;
    /** The consent type of the request. Possible values are: Static and Dynamic. These represent static and dynamic permissions, respectively, requested in the consent workflow. Supports $filter (eq only) and $orderby. Required. */
    private _consentType?: string | undefined;
    /** A list of pending scopes waiting for approval. This is empty if the consentType is Static. Required. */
    private _pendingScopes?: AppConsentRequestScope[] | undefined;
    /** A list of pending user consent requests. Supports $filter (eq). */
    private _userConsentRequests?: UserConsentRequest[] | undefined;
    /**
     * Gets the appDisplayName property value. The display name of the app for which consent is requested. Required. Supports $filter (eq only) and $orderby.
     * @returns a string
     */
    public get appDisplayName() {
        return this._appDisplayName;
    };
    /**
     * Sets the appDisplayName property value. The display name of the app for which consent is requested. Required. Supports $filter (eq only) and $orderby.
     * @param value Value to set for the appDisplayName property.
     */
    public set appDisplayName(value: string | undefined) {
        this._appDisplayName = value;
    };
    /**
     * Gets the appId property value. The identifier of the application. Required. Supports $filter (eq only) and $orderby.
     * @returns a string
     */
    public get appId() {
        return this._appId;
    };
    /**
     * Sets the appId property value. The identifier of the application. Required. Supports $filter (eq only) and $orderby.
     * @param value Value to set for the appId property.
     */
    public set appId(value: string | undefined) {
        this._appId = value;
    };
    /**
     * Gets the consentType property value. The consent type of the request. Possible values are: Static and Dynamic. These represent static and dynamic permissions, respectively, requested in the consent workflow. Supports $filter (eq only) and $orderby. Required.
     * @returns a string
     */
    public get consentType() {
        return this._consentType;
    };
    /**
     * Sets the consentType property value. The consent type of the request. Possible values are: Static and Dynamic. These represent static and dynamic permissions, respectively, requested in the consent workflow. Supports $filter (eq only) and $orderby. Required.
     * @param value Value to set for the consentType property.
     */
    public set consentType(value: string | undefined) {
        this._consentType = value;
    };
    /**
     * Instantiates a new appConsentRequest and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appDisplayName": n => { this.appDisplayName = n.getStringValue(); },
            "appId": n => { this.appId = n.getStringValue(); },
            "consentType": n => { this.consentType = n.getStringValue(); },
            "pendingScopes": n => { this.pendingScopes = n.getCollectionOfObjectValues<AppConsentRequestScope>(createAppConsentRequestScopeFromDiscriminatorValue); },
            "userConsentRequests": n => { this.userConsentRequests = n.getCollectionOfObjectValues<UserConsentRequest>(createUserConsentRequestFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the pendingScopes property value. A list of pending scopes waiting for approval. This is empty if the consentType is Static. Required.
     * @returns a appConsentRequestScope
     */
    public get pendingScopes() {
        return this._pendingScopes;
    };
    /**
     * Sets the pendingScopes property value. A list of pending scopes waiting for approval. This is empty if the consentType is Static. Required.
     * @param value Value to set for the pendingScopes property.
     */
    public set pendingScopes(value: AppConsentRequestScope[] | undefined) {
        this._pendingScopes = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("appDisplayName", this.appDisplayName);
        writer.writeStringValue("appId", this.appId);
        writer.writeStringValue("consentType", this.consentType);
        writer.writeCollectionOfObjectValues<AppConsentRequestScope>("pendingScopes", this.pendingScopes);
        writer.writeCollectionOfObjectValues<UserConsentRequest>("userConsentRequests", this.userConsentRequests);
    };
    /**
     * Gets the userConsentRequests property value. A list of pending user consent requests. Supports $filter (eq).
     * @returns a userConsentRequest
     */
    public get userConsentRequests() {
        return this._userConsentRequests;
    };
    /**
     * Sets the userConsentRequests property value. A list of pending user consent requests. Supports $filter (eq).
     * @param value Value to set for the userConsentRequests property.
     */
    public set userConsentRequests(value: UserConsentRequest[] | undefined) {
        this._userConsentRequests = value;
    };
}
