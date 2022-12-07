import {createApprovalStepFromDiscriminatorValue} from './createApprovalStepFromDiscriminatorValue';
import {ApprovalStep, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Approval extends Entity implements Parsable {
    /** The steps property */
    private _steps?: ApprovalStep[] | undefined;
    /**
     * Instantiates a new approval and sets the default values.
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
            "steps": n => { this.steps = n.getCollectionOfObjectValues<ApprovalStep>(createApprovalStepFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<ApprovalStep>("steps", this.steps);
    };
    /**
     * Gets the steps property value. The steps property
     * @returns a approvalStep
     */
    public get steps() {
        return this._steps;
    };
    /**
     * Sets the steps property value. The steps property
     * @param value Value to set for the steps property.
     */
    public set steps(value: ApprovalStep[] | undefined) {
        this._steps = value;
    };
}
