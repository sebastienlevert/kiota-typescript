import {PlannerCreationSourceKind} from './plannerCreationSourceKind';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PlannerPlanCreation implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The creationSourceKind property */
    private _creationSourceKind?: PlannerCreationSourceKind | undefined;
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
     * Instantiates a new plannerPlanCreation and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the creationSourceKind property value. The creationSourceKind property
     * @returns a plannerCreationSourceKind
     */
    public get creationSourceKind() {
        return this._creationSourceKind;
    };
    /**
     * Sets the creationSourceKind property value. The creationSourceKind property
     * @param value Value to set for the creationSourceKind property.
     */
    public set creationSourceKind(value: PlannerCreationSourceKind | undefined) {
        this._creationSourceKind = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "creationSourceKind": n => { this.creationSourceKind = n.getEnumValue<PlannerCreationSourceKind>(PlannerCreationSourceKind); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<PlannerCreationSourceKind>("creationSourceKind", this.creationSourceKind);
        writer.writeAdditionalData(this.additionalData);
    };
}
