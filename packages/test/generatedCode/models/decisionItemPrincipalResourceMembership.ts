import {DecisionItemPrincipalResourceMembershipType} from './decisionItemPrincipalResourceMembershipType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DecisionItemPrincipalResourceMembership implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The membershipType property */
    private _membershipType?: DecisionItemPrincipalResourceMembershipType | undefined;
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
     * Instantiates a new decisionItemPrincipalResourceMembership and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "membershipType": n => { this.membershipType = n.getEnumValue<DecisionItemPrincipalResourceMembershipType>(DecisionItemPrincipalResourceMembershipType); },
        };
    };
    /**
     * Gets the membershipType property value. The membershipType property
     * @returns a decisionItemPrincipalResourceMembershipType
     */
    public get membershipType() {
        return this._membershipType;
    };
    /**
     * Sets the membershipType property value. The membershipType property
     * @param value Value to set for the membershipType property.
     */
    public set membershipType(value: DecisionItemPrincipalResourceMembershipType | undefined) {
        this._membershipType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<DecisionItemPrincipalResourceMembershipType>("membershipType", this.membershipType);
        writer.writeAdditionalData(this.additionalData);
    };
}
