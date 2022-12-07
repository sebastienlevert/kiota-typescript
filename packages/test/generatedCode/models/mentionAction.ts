import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MentionAction implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The identities of the users mentioned in this action. */
    private _mentionees?: IdentitySet[] | undefined;
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
     * Instantiates a new mentionAction and sets the default values.
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
            "mentionees": n => { this.mentionees = n.getCollectionOfObjectValues<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the mentionees property value. The identities of the users mentioned in this action.
     * @returns a identitySet
     */
    public get mentionees() {
        return this._mentionees;
    };
    /**
     * Sets the mentionees property value. The identities of the users mentioned in this action.
     * @param value Value to set for the mentionees property.
     */
    public set mentionees(value: IdentitySet[] | undefined) {
        this._mentionees = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<IdentitySet>("mentionees", this.mentionees);
        writer.writeAdditionalData(this.additionalData);
    };
}
