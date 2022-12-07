import {createKeyValuePairFromDiscriminatorValue} from './createKeyValuePairFromDiscriminatorValue';
import {createSynchronizationScheduleFromDiscriminatorValue} from './createSynchronizationScheduleFromDiscriminatorValue';
import {createSynchronizationSchemaFromDiscriminatorValue} from './createSynchronizationSchemaFromDiscriminatorValue';
import {createSynchronizationStatusFromDiscriminatorValue} from './createSynchronizationStatusFromDiscriminatorValue';
import {Entity, KeyValuePair, SynchronizationSchedule, SynchronizationSchema, SynchronizationStatus} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SynchronizationJob extends Entity implements Parsable {
    /** The schedule property */
    private _schedule?: SynchronizationSchedule | undefined;
    /** The schema property */
    private _schema?: SynchronizationSchema | undefined;
    /** The status property */
    private _status?: SynchronizationStatus | undefined;
    /** Settings associated with the job. Some settings are inherited from the template. */
    private _synchronizationJobSettings?: KeyValuePair[] | undefined;
    /** Identifier of the synchronization template this job is based on. */
    private _templateId?: string | undefined;
    /**
     * Instantiates a new synchronizationJob and sets the default values.
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
            "schedule": n => { this.schedule = n.getObjectValue<SynchronizationSchedule>(createSynchronizationScheduleFromDiscriminatorValue); },
            "schema": n => { this.schema = n.getObjectValue<SynchronizationSchema>(createSynchronizationSchemaFromDiscriminatorValue); },
            "status": n => { this.status = n.getObjectValue<SynchronizationStatus>(createSynchronizationStatusFromDiscriminatorValue); },
            "synchronizationJobSettings": n => { this.synchronizationJobSettings = n.getCollectionOfObjectValues<KeyValuePair>(createKeyValuePairFromDiscriminatorValue); },
            "templateId": n => { this.templateId = n.getStringValue(); },
        };
    };
    /**
     * Gets the schedule property value. The schedule property
     * @returns a synchronizationSchedule
     */
    public get schedule() {
        return this._schedule;
    };
    /**
     * Sets the schedule property value. The schedule property
     * @param value Value to set for the schedule property.
     */
    public set schedule(value: SynchronizationSchedule | undefined) {
        this._schedule = value;
    };
    /**
     * Gets the schema property value. The schema property
     * @returns a synchronizationSchema
     */
    public get schema() {
        return this._schema;
    };
    /**
     * Sets the schema property value. The schema property
     * @param value Value to set for the schema property.
     */
    public set schema(value: SynchronizationSchema | undefined) {
        this._schema = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<SynchronizationSchedule>("schedule", this.schedule);
        writer.writeObjectValue<SynchronizationSchema>("schema", this.schema);
        writer.writeObjectValue<SynchronizationStatus>("status", this.status);
        writer.writeCollectionOfObjectValues<KeyValuePair>("synchronizationJobSettings", this.synchronizationJobSettings);
        writer.writeStringValue("templateId", this.templateId);
    };
    /**
     * Gets the status property value. The status property
     * @returns a synchronizationStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status property
     * @param value Value to set for the status property.
     */
    public set status(value: SynchronizationStatus | undefined) {
        this._status = value;
    };
    /**
     * Gets the synchronizationJobSettings property value. Settings associated with the job. Some settings are inherited from the template.
     * @returns a keyValuePair
     */
    public get synchronizationJobSettings() {
        return this._synchronizationJobSettings;
    };
    /**
     * Sets the synchronizationJobSettings property value. Settings associated with the job. Some settings are inherited from the template.
     * @param value Value to set for the synchronizationJobSettings property.
     */
    public set synchronizationJobSettings(value: KeyValuePair[] | undefined) {
        this._synchronizationJobSettings = value;
    };
    /**
     * Gets the templateId property value. Identifier of the synchronization template this job is based on.
     * @returns a string
     */
    public get templateId() {
        return this._templateId;
    };
    /**
     * Sets the templateId property value. Identifier of the synchronization template this job is based on.
     * @param value Value to set for the templateId property.
     */
    public set templateId(value: string | undefined) {
        this._templateId = value;
    };
}
