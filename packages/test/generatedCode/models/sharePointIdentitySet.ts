import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import {createSharePointIdentityFromDiscriminatorValue} from './createSharePointIdentityFromDiscriminatorValue';
import {Identity, IdentitySet, SharePointIdentity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SharePointIdentitySet extends IdentitySet implements Parsable {
    /** The group property */
    private _group?: Identity | undefined;
    /** The siteGroup property */
    private _siteGroup?: SharePointIdentity | undefined;
    /** The siteUser property */
    private _siteUser?: SharePointIdentity | undefined;
    /**
     * Instantiates a new SharePointIdentitySet and sets the default values.
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
            "group": n => { this.group = n.getObjectValue<Identity>(createIdentityFromDiscriminatorValue); },
            "siteGroup": n => { this.siteGroup = n.getObjectValue<SharePointIdentity>(createSharePointIdentityFromDiscriminatorValue); },
            "siteUser": n => { this.siteUser = n.getObjectValue<SharePointIdentity>(createSharePointIdentityFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the group property value. The group property
     * @returns a identity
     */
    public get group() {
        return this._group;
    };
    /**
     * Sets the group property value. The group property
     * @param value Value to set for the group property.
     */
    public set group(value: Identity | undefined) {
        this._group = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<Identity>("group", this.group);
        writer.writeObjectValue<SharePointIdentity>("siteGroup", this.siteGroup);
        writer.writeObjectValue<SharePointIdentity>("siteUser", this.siteUser);
    };
    /**
     * Gets the siteGroup property value. The siteGroup property
     * @returns a sharePointIdentity
     */
    public get siteGroup() {
        return this._siteGroup;
    };
    /**
     * Sets the siteGroup property value. The siteGroup property
     * @param value Value to set for the siteGroup property.
     */
    public set siteGroup(value: SharePointIdentity | undefined) {
        this._siteGroup = value;
    };
    /**
     * Gets the siteUser property value. The siteUser property
     * @returns a sharePointIdentity
     */
    public get siteUser() {
        return this._siteUser;
    };
    /**
     * Sets the siteUser property value. The siteUser property
     * @param value Value to set for the siteUser property.
     */
    public set siteUser(value: SharePointIdentity | undefined) {
        this._siteUser = value;
    };
}
