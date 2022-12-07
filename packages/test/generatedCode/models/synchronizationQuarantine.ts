import {createSynchronizationErrorFromDiscriminatorValue} from './createSynchronizationErrorFromDiscriminatorValue';
import {SynchronizationError} from './index';
import {QuarantineReason} from './quarantineReason';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SynchronizationQuarantine implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Date and time when the quarantine was last evaluated and imposed. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    private _currentBegan?: Date | undefined;
    /** The error property */
    private _error_escaped?: SynchronizationError | undefined;
    /** Date and time when the next attempt to re-evaluate the quarantine will be made. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    private _nextAttempt?: Date | undefined;
    /** The reason property */
    private _reason?: QuarantineReason | undefined;
    /** Date and time when the quarantine was first imposed in this series (a series starts when a quarantine is first imposed, and is reset as soon as the quarantine is lifted). The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    private _seriesBegan?: Date | undefined;
    /** Number of times in this series the quarantine was re-evaluated and left in effect (a series starts when quarantine is first imposed, and is reset as soon as quarantine is lifted). */
    private _seriesCount?: number | undefined;
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
     * Instantiates a new synchronizationQuarantine and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the currentBegan property value. Date and time when the quarantine was last evaluated and imposed. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get currentBegan() {
        return this._currentBegan;
    };
    /**
     * Sets the currentBegan property value. Date and time when the quarantine was last evaluated and imposed. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the currentBegan property.
     */
    public set currentBegan(value: Date | undefined) {
        this._currentBegan = value;
    };
    /**
     * Gets the error property value. The error property
     * @returns a synchronizationError
     */
    public get error_escaped() {
        return this._error_escaped;
    };
    /**
     * Sets the error property value. The error property
     * @param value Value to set for the error_escaped property.
     */
    public set error_escaped(value: SynchronizationError | undefined) {
        this._error_escaped = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "currentBegan": n => { this.currentBegan = n.getDateValue(); },
            "error": n => { this.error_escaped = n.getObjectValue<SynchronizationError>(createSynchronizationErrorFromDiscriminatorValue); },
            "nextAttempt": n => { this.nextAttempt = n.getDateValue(); },
            "reason": n => { this.reason = n.getEnumValue<QuarantineReason>(QuarantineReason); },
            "seriesBegan": n => { this.seriesBegan = n.getDateValue(); },
            "seriesCount": n => { this.seriesCount = n.getNumberValue(); },
        };
    };
    /**
     * Gets the nextAttempt property value. Date and time when the next attempt to re-evaluate the quarantine will be made. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get nextAttempt() {
        return this._nextAttempt;
    };
    /**
     * Sets the nextAttempt property value. Date and time when the next attempt to re-evaluate the quarantine will be made. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the nextAttempt property.
     */
    public set nextAttempt(value: Date | undefined) {
        this._nextAttempt = value;
    };
    /**
     * Gets the reason property value. The reason property
     * @returns a quarantineReason
     */
    public get reason() {
        return this._reason;
    };
    /**
     * Sets the reason property value. The reason property
     * @param value Value to set for the reason property.
     */
    public set reason(value: QuarantineReason | undefined) {
        this._reason = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeDateValue("currentBegan", this.currentBegan);
        writer.writeObjectValue<SynchronizationError>("error", this.error_escaped);
        writer.writeDateValue("nextAttempt", this.nextAttempt);
        writer.writeEnumValue<QuarantineReason>("reason", this.reason);
        writer.writeDateValue("seriesBegan", this.seriesBegan);
        writer.writeNumberValue("seriesCount", this.seriesCount);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the seriesBegan property value. Date and time when the quarantine was first imposed in this series (a series starts when a quarantine is first imposed, and is reset as soon as the quarantine is lifted). The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get seriesBegan() {
        return this._seriesBegan;
    };
    /**
     * Sets the seriesBegan property value. Date and time when the quarantine was first imposed in this series (a series starts when a quarantine is first imposed, and is reset as soon as the quarantine is lifted). The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the seriesBegan property.
     */
    public set seriesBegan(value: Date | undefined) {
        this._seriesBegan = value;
    };
    /**
     * Gets the seriesCount property value. Number of times in this series the quarantine was re-evaluated and left in effect (a series starts when quarantine is first imposed, and is reset as soon as quarantine is lifted).
     * @returns a int64
     */
    public get seriesCount() {
        return this._seriesCount;
    };
    /**
     * Sets the seriesCount property value. Number of times in this series the quarantine was re-evaluated and left in effect (a series starts when quarantine is first imposed, and is reset as soon as quarantine is lifted).
     * @param value Value to set for the seriesCount property.
     */
    public set seriesCount(value: number | undefined) {
        this._seriesCount = value;
    };
}
