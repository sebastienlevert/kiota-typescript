import {createStringKeyLongValuePairFromDiscriminatorValue} from './createStringKeyLongValuePairFromDiscriminatorValue';
import {createSynchronizationProgressFromDiscriminatorValue} from './createSynchronizationProgressFromDiscriminatorValue';
import {createSynchronizationQuarantineFromDiscriminatorValue} from './createSynchronizationQuarantineFromDiscriminatorValue';
import {createSynchronizationTaskExecutionFromDiscriminatorValue} from './createSynchronizationTaskExecutionFromDiscriminatorValue';
import {StringKeyLongValuePair, SynchronizationProgress, SynchronizationQuarantine, SynchronizationTaskExecution} from './index';
import {SynchronizationStatusCode} from './synchronizationStatusCode';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SynchronizationStatus implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The code property */
    private _code?: SynchronizationStatusCode | undefined;
    /** Number of consecutive times this job failed. */
    private _countSuccessiveCompleteFailures?: number | undefined;
    /** true if the job's escrows (object-level errors) were pruned during initial synchronization. Escrows can be pruned if during the initial synchronization, you reach the threshold of errors that would normally put the job in quarantine. Instead of going into quarantine, the synchronization process clears the job's errors and continues until the initial synchronization is completed. When the initial synchronization is completed, the job will pause and wait for the customer to clean up the errors. */
    private _escrowsPruned?: boolean | undefined;
    /** The lastExecution property */
    private _lastExecution?: SynchronizationTaskExecution | undefined;
    /** The lastSuccessfulExecution property */
    private _lastSuccessfulExecution?: SynchronizationTaskExecution | undefined;
    /** The lastSuccessfulExecutionWithExports property */
    private _lastSuccessfulExecutionWithExports?: SynchronizationTaskExecution | undefined;
    /** Details of the progress of a job toward completion. */
    private _progress?: SynchronizationProgress[] | undefined;
    /** The quarantine property */
    private _quarantine?: SynchronizationQuarantine | undefined;
    /** The time when steady state (no more changes to the process) was first achieved. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    private _steadyStateFirstAchievedTime?: Date | undefined;
    /** The time when steady state (no more changes to the process) was last achieved. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    private _steadyStateLastAchievedTime?: Date | undefined;
    /** Count of synchronized objects, listed by object type. */
    private _synchronizedEntryCountByType?: StringKeyLongValuePair[] | undefined;
    /** In the event of an error, the URL with the troubleshooting steps for the issue. */
    private _troubleshootingUrl?: string | undefined;
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
     * Gets the code property value. The code property
     * @returns a synchronizationStatusCode
     */
    public get code() {
        return this._code;
    };
    /**
     * Sets the code property value. The code property
     * @param value Value to set for the code property.
     */
    public set code(value: SynchronizationStatusCode | undefined) {
        this._code = value;
    };
    /**
     * Instantiates a new synchronizationStatus and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the countSuccessiveCompleteFailures property value. Number of consecutive times this job failed.
     * @returns a int64
     */
    public get countSuccessiveCompleteFailures() {
        return this._countSuccessiveCompleteFailures;
    };
    /**
     * Sets the countSuccessiveCompleteFailures property value. Number of consecutive times this job failed.
     * @param value Value to set for the countSuccessiveCompleteFailures property.
     */
    public set countSuccessiveCompleteFailures(value: number | undefined) {
        this._countSuccessiveCompleteFailures = value;
    };
    /**
     * Gets the escrowsPruned property value. true if the job's escrows (object-level errors) were pruned during initial synchronization. Escrows can be pruned if during the initial synchronization, you reach the threshold of errors that would normally put the job in quarantine. Instead of going into quarantine, the synchronization process clears the job's errors and continues until the initial synchronization is completed. When the initial synchronization is completed, the job will pause and wait for the customer to clean up the errors.
     * @returns a boolean
     */
    public get escrowsPruned() {
        return this._escrowsPruned;
    };
    /**
     * Sets the escrowsPruned property value. true if the job's escrows (object-level errors) were pruned during initial synchronization. Escrows can be pruned if during the initial synchronization, you reach the threshold of errors that would normally put the job in quarantine. Instead of going into quarantine, the synchronization process clears the job's errors and continues until the initial synchronization is completed. When the initial synchronization is completed, the job will pause and wait for the customer to clean up the errors.
     * @param value Value to set for the escrowsPruned property.
     */
    public set escrowsPruned(value: boolean | undefined) {
        this._escrowsPruned = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "code": n => { this.code = n.getEnumValue<SynchronizationStatusCode>(SynchronizationStatusCode); },
            "countSuccessiveCompleteFailures": n => { this.countSuccessiveCompleteFailures = n.getNumberValue(); },
            "escrowsPruned": n => { this.escrowsPruned = n.getBooleanValue(); },
            "lastExecution": n => { this.lastExecution = n.getObjectValue<SynchronizationTaskExecution>(createSynchronizationTaskExecutionFromDiscriminatorValue); },
            "lastSuccessfulExecution": n => { this.lastSuccessfulExecution = n.getObjectValue<SynchronizationTaskExecution>(createSynchronizationTaskExecutionFromDiscriminatorValue); },
            "lastSuccessfulExecutionWithExports": n => { this.lastSuccessfulExecutionWithExports = n.getObjectValue<SynchronizationTaskExecution>(createSynchronizationTaskExecutionFromDiscriminatorValue); },
            "progress": n => { this.progress = n.getCollectionOfObjectValues<SynchronizationProgress>(createSynchronizationProgressFromDiscriminatorValue); },
            "quarantine": n => { this.quarantine = n.getObjectValue<SynchronizationQuarantine>(createSynchronizationQuarantineFromDiscriminatorValue); },
            "steadyStateFirstAchievedTime": n => { this.steadyStateFirstAchievedTime = n.getDateValue(); },
            "steadyStateLastAchievedTime": n => { this.steadyStateLastAchievedTime = n.getDateValue(); },
            "synchronizedEntryCountByType": n => { this.synchronizedEntryCountByType = n.getCollectionOfObjectValues<StringKeyLongValuePair>(createStringKeyLongValuePairFromDiscriminatorValue); },
            "troubleshootingUrl": n => { this.troubleshootingUrl = n.getStringValue(); },
        };
    };
    /**
     * Gets the lastExecution property value. The lastExecution property
     * @returns a synchronizationTaskExecution
     */
    public get lastExecution() {
        return this._lastExecution;
    };
    /**
     * Sets the lastExecution property value. The lastExecution property
     * @param value Value to set for the lastExecution property.
     */
    public set lastExecution(value: SynchronizationTaskExecution | undefined) {
        this._lastExecution = value;
    };
    /**
     * Gets the lastSuccessfulExecution property value. The lastSuccessfulExecution property
     * @returns a synchronizationTaskExecution
     */
    public get lastSuccessfulExecution() {
        return this._lastSuccessfulExecution;
    };
    /**
     * Sets the lastSuccessfulExecution property value. The lastSuccessfulExecution property
     * @param value Value to set for the lastSuccessfulExecution property.
     */
    public set lastSuccessfulExecution(value: SynchronizationTaskExecution | undefined) {
        this._lastSuccessfulExecution = value;
    };
    /**
     * Gets the lastSuccessfulExecutionWithExports property value. The lastSuccessfulExecutionWithExports property
     * @returns a synchronizationTaskExecution
     */
    public get lastSuccessfulExecutionWithExports() {
        return this._lastSuccessfulExecutionWithExports;
    };
    /**
     * Sets the lastSuccessfulExecutionWithExports property value. The lastSuccessfulExecutionWithExports property
     * @param value Value to set for the lastSuccessfulExecutionWithExports property.
     */
    public set lastSuccessfulExecutionWithExports(value: SynchronizationTaskExecution | undefined) {
        this._lastSuccessfulExecutionWithExports = value;
    };
    /**
     * Gets the progress property value. Details of the progress of a job toward completion.
     * @returns a synchronizationProgress
     */
    public get progress() {
        return this._progress;
    };
    /**
     * Sets the progress property value. Details of the progress of a job toward completion.
     * @param value Value to set for the progress property.
     */
    public set progress(value: SynchronizationProgress[] | undefined) {
        this._progress = value;
    };
    /**
     * Gets the quarantine property value. The quarantine property
     * @returns a synchronizationQuarantine
     */
    public get quarantine() {
        return this._quarantine;
    };
    /**
     * Sets the quarantine property value. The quarantine property
     * @param value Value to set for the quarantine property.
     */
    public set quarantine(value: SynchronizationQuarantine | undefined) {
        this._quarantine = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<SynchronizationStatusCode>("code", this.code);
        writer.writeNumberValue("countSuccessiveCompleteFailures", this.countSuccessiveCompleteFailures);
        writer.writeBooleanValue("escrowsPruned", this.escrowsPruned);
        writer.writeObjectValue<SynchronizationTaskExecution>("lastExecution", this.lastExecution);
        writer.writeObjectValue<SynchronizationTaskExecution>("lastSuccessfulExecution", this.lastSuccessfulExecution);
        writer.writeObjectValue<SynchronizationTaskExecution>("lastSuccessfulExecutionWithExports", this.lastSuccessfulExecutionWithExports);
        writer.writeCollectionOfObjectValues<SynchronizationProgress>("progress", this.progress);
        writer.writeObjectValue<SynchronizationQuarantine>("quarantine", this.quarantine);
        writer.writeDateValue("steadyStateFirstAchievedTime", this.steadyStateFirstAchievedTime);
        writer.writeDateValue("steadyStateLastAchievedTime", this.steadyStateLastAchievedTime);
        writer.writeCollectionOfObjectValues<StringKeyLongValuePair>("synchronizedEntryCountByType", this.synchronizedEntryCountByType);
        writer.writeStringValue("troubleshootingUrl", this.troubleshootingUrl);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the steadyStateFirstAchievedTime property value. The time when steady state (no more changes to the process) was first achieved. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get steadyStateFirstAchievedTime() {
        return this._steadyStateFirstAchievedTime;
    };
    /**
     * Sets the steadyStateFirstAchievedTime property value. The time when steady state (no more changes to the process) was first achieved. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the steadyStateFirstAchievedTime property.
     */
    public set steadyStateFirstAchievedTime(value: Date | undefined) {
        this._steadyStateFirstAchievedTime = value;
    };
    /**
     * Gets the steadyStateLastAchievedTime property value. The time when steady state (no more changes to the process) was last achieved. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get steadyStateLastAchievedTime() {
        return this._steadyStateLastAchievedTime;
    };
    /**
     * Sets the steadyStateLastAchievedTime property value. The time when steady state (no more changes to the process) was last achieved. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the steadyStateLastAchievedTime property.
     */
    public set steadyStateLastAchievedTime(value: Date | undefined) {
        this._steadyStateLastAchievedTime = value;
    };
    /**
     * Gets the synchronizedEntryCountByType property value. Count of synchronized objects, listed by object type.
     * @returns a stringKeyLongValuePair
     */
    public get synchronizedEntryCountByType() {
        return this._synchronizedEntryCountByType;
    };
    /**
     * Sets the synchronizedEntryCountByType property value. Count of synchronized objects, listed by object type.
     * @param value Value to set for the synchronizedEntryCountByType property.
     */
    public set synchronizedEntryCountByType(value: StringKeyLongValuePair[] | undefined) {
        this._synchronizedEntryCountByType = value;
    };
    /**
     * Gets the troubleshootingUrl property value. In the event of an error, the URL with the troubleshooting steps for the issue.
     * @returns a string
     */
    public get troubleshootingUrl() {
        return this._troubleshootingUrl;
    };
    /**
     * Sets the troubleshootingUrl property value. In the event of an error, the URL with the troubleshooting steps for the issue.
     * @param value Value to set for the troubleshootingUrl property.
     */
    public set troubleshootingUrl(value: string | undefined) {
        this._troubleshootingUrl = value;
    };
}
