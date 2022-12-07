import {PersonRelationship} from './personRelationship';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RelatedPerson implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Name of the person. */
    private _displayName?: string | undefined;
    /** The relationship property */
    private _relationship?: PersonRelationship | undefined;
    /** Email address or reference to person within organization. */
    private _userPrincipalName?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new relatedPerson and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the displayName property value. Name of the person.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Name of the person.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "displayName": n => { this.displayName = n.getStringValue(); },
            "relationship": n => { this.relationship = n.getEnumValue<PersonRelationship>(PersonRelationship); },
            "userPrincipalName": n => { this.userPrincipalName = n.getStringValue(); },
        };
    };
    /**
     * Gets the relationship property value. The relationship property
     * @returns a personRelationship
     */
    public get relationship() {
        return this._relationship;
    };
    /**
     * Sets the relationship property value. The relationship property
     * @param value Value to set for the relationship property.
     */
    public set relationship(value: PersonRelationship | undefined) {
        this._relationship = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("displayName", this.displayName);
        writer.writeEnumValue<PersonRelationship>("relationship", this.relationship);
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the userPrincipalName property value. Email address or reference to person within organization.
     * @returns a string
     */
    public get userPrincipalName() {
        return this._userPrincipalName;
    };
    /**
     * Sets the userPrincipalName property value. Email address or reference to person within organization.
     * @param value Value to set for the userPrincipalName property.
     */
    public set userPrincipalName(value: string | undefined) {
        this._userPrincipalName = value;
    };
}
