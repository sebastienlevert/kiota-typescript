import {createTimeOffItemFromDiscriminatorValue} from './createTimeOffItemFromDiscriminatorValue';
import {ChangeTrackedEntity, TimeOffItem} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TimeOff extends ChangeTrackedEntity implements Parsable {
    /** The draftTimeOff property */
    private _draftTimeOff?: TimeOffItem | undefined;
    /** The isStagedForDeletion property */
    private _isStagedForDeletion?: boolean | undefined;
    /** The sharedTimeOff property */
    private _sharedTimeOff?: TimeOffItem | undefined;
    /** ID of the user assigned to the timeOff. Required. */
    private _userId?: string | undefined;
    /**
     * Instantiates a new timeOff and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the draftTimeOff property value. The draftTimeOff property
     * @returns a timeOffItem
     */
    public get draftTimeOff() {
        return this._draftTimeOff;
    };
    /**
     * Sets the draftTimeOff property value. The draftTimeOff property
     * @param value Value to set for the draftTimeOff property.
     */
    public set draftTimeOff(value: TimeOffItem | undefined) {
        this._draftTimeOff = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "draftTimeOff": n => { this.draftTimeOff = n.getObjectValue<TimeOffItem>(createTimeOffItemFromDiscriminatorValue); },
            "isStagedForDeletion": n => { this.isStagedForDeletion = n.getBooleanValue(); },
            "sharedTimeOff": n => { this.sharedTimeOff = n.getObjectValue<TimeOffItem>(createTimeOffItemFromDiscriminatorValue); },
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<TimeOffItem>("draftTimeOff", this.draftTimeOff);
        writer.writeBooleanValue("isStagedForDeletion", this.isStagedForDeletion);
        writer.writeObjectValue<TimeOffItem>("sharedTimeOff", this.sharedTimeOff);
        writer.writeStringValue("userId", this.userId);
    };
    /**
     * Gets the sharedTimeOff property value. The sharedTimeOff property
     * @returns a timeOffItem
     */
    public get sharedTimeOff() {
        return this._sharedTimeOff;
    };
    /**
     * Sets the sharedTimeOff property value. The sharedTimeOff property
     * @param value Value to set for the sharedTimeOff property.
     */
    public set sharedTimeOff(value: TimeOffItem | undefined) {
        this._sharedTimeOff = value;
    };
    /**
     * Gets the userId property value. ID of the user assigned to the timeOff. Required.
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * Sets the userId property value. ID of the user assigned to the timeOff. Required.
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        this._userId = value;
    };
}
