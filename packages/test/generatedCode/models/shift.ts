import {createShiftItemFromDiscriminatorValue} from './createShiftItemFromDiscriminatorValue';
import {ChangeTrackedEntity, ShiftItem} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Shift extends ChangeTrackedEntity implements Parsable {
    /** The draftShift property */
    private _draftShift?: ShiftItem | undefined;
    /** The isStagedForDeletion property */
    private _isStagedForDeletion?: boolean | undefined;
    /** The schedulingGroupId property */
    private _schedulingGroupId?: string | undefined;
    /** The sharedShift property */
    private _sharedShift?: ShiftItem | undefined;
    /** The userId property */
    private _userId?: string | undefined;
    /**
     * Instantiates a new shift and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the draftShift property value. The draftShift property
     * @returns a shiftItem
     */
    public get draftShift() {
        return this._draftShift;
    };
    /**
     * Sets the draftShift property value. The draftShift property
     * @param value Value to set for the draftShift property.
     */
    public set draftShift(value: ShiftItem | undefined) {
        this._draftShift = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "draftShift": n => { this.draftShift = n.getObjectValue<ShiftItem>(createShiftItemFromDiscriminatorValue); },
            "isStagedForDeletion": n => { this.isStagedForDeletion = n.getBooleanValue(); },
            "schedulingGroupId": n => { this.schedulingGroupId = n.getStringValue(); },
            "sharedShift": n => { this.sharedShift = n.getObjectValue<ShiftItem>(createShiftItemFromDiscriminatorValue); },
            "userId": n => { this.userId = n.getStringValue(); },
        };
    };
    /**
     * Gets the isStagedForDeletion property value. The isStagedForDeletion property
     * @returns a boolean
     */
    public get isStagedForDeletion() {
        return this._isStagedForDeletion;
    };
    /**
     * Sets the isStagedForDeletion property value. The isStagedForDeletion property
     * @param value Value to set for the isStagedForDeletion property.
     */
    public set isStagedForDeletion(value: boolean | undefined) {
        this._isStagedForDeletion = value;
    };
    /**
     * Gets the schedulingGroupId property value. The schedulingGroupId property
     * @returns a string
     */
    public get schedulingGroupId() {
        return this._schedulingGroupId;
    };
    /**
     * Sets the schedulingGroupId property value. The schedulingGroupId property
     * @param value Value to set for the schedulingGroupId property.
     */
    public set schedulingGroupId(value: string | undefined) {
        this._schedulingGroupId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<ShiftItem>("draftShift", this.draftShift);
        writer.writeBooleanValue("isStagedForDeletion", this.isStagedForDeletion);
        writer.writeStringValue("schedulingGroupId", this.schedulingGroupId);
        writer.writeObjectValue<ShiftItem>("sharedShift", this.sharedShift);
        writer.writeStringValue("userId", this.userId);
    };
    /**
     * Gets the sharedShift property value. The sharedShift property
     * @returns a shiftItem
     */
    public get sharedShift() {
        return this._sharedShift;
    };
    /**
     * Sets the sharedShift property value. The sharedShift property
     * @param value Value to set for the sharedShift property.
     */
    public set sharedShift(value: ShiftItem | undefined) {
        this._sharedShift = value;
    };
    /**
     * Gets the userId property value. The userId property
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * Sets the userId property value. The userId property
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        this._userId = value;
    };
}
