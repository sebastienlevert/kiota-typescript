import {createSynchronizationJobFromDiscriminatorValue} from './createSynchronizationJobFromDiscriminatorValue';
import {createSynchronizationSecretKeyStringValuePairFromDiscriminatorValue} from './createSynchronizationSecretKeyStringValuePairFromDiscriminatorValue';
import {createSynchronizationTemplateFromDiscriminatorValue} from './createSynchronizationTemplateFromDiscriminatorValue';
import {Entity, SynchronizationJob, SynchronizationSecretKeyStringValuePair, SynchronizationTemplate} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Synchronization extends Entity implements Parsable {
    /** Performs synchronization by periodically running in the background, polling for changes in one directory, and pushing them to another directory. */
    private _jobs?: SynchronizationJob[] | undefined;
    /** Represents a collection of credentials to access provisioned cloud applications. */
    private _secrets?: SynchronizationSecretKeyStringValuePair[] | undefined;
    /** Pre-configured synchronization settings for a particular application. */
    private _templates?: SynchronizationTemplate[] | undefined;
    /**
     * Instantiates a new synchronization and sets the default values.
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
            "jobs": n => { this.jobs = n.getCollectionOfObjectValues<SynchronizationJob>(createSynchronizationJobFromDiscriminatorValue); },
            "secrets": n => { this.secrets = n.getCollectionOfObjectValues<SynchronizationSecretKeyStringValuePair>(createSynchronizationSecretKeyStringValuePairFromDiscriminatorValue); },
            "templates": n => { this.templates = n.getCollectionOfObjectValues<SynchronizationTemplate>(createSynchronizationTemplateFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the jobs property value. Performs synchronization by periodically running in the background, polling for changes in one directory, and pushing them to another directory.
     * @returns a synchronizationJob
     */
    public get jobs() {
        return this._jobs;
    };
    /**
     * Sets the jobs property value. Performs synchronization by periodically running in the background, polling for changes in one directory, and pushing them to another directory.
     * @param value Value to set for the jobs property.
     */
    public set jobs(value: SynchronizationJob[] | undefined) {
        this._jobs = value;
    };
    /**
     * Gets the secrets property value. Represents a collection of credentials to access provisioned cloud applications.
     * @returns a synchronizationSecretKeyStringValuePair
     */
    public get secrets() {
        return this._secrets;
    };
    /**
     * Sets the secrets property value. Represents a collection of credentials to access provisioned cloud applications.
     * @param value Value to set for the secrets property.
     */
    public set secrets(value: SynchronizationSecretKeyStringValuePair[] | undefined) {
        this._secrets = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<SynchronizationJob>("jobs", this.jobs);
        writer.writeCollectionOfObjectValues<SynchronizationSecretKeyStringValuePair>("secrets", this.secrets);
        writer.writeCollectionOfObjectValues<SynchronizationTemplate>("templates", this.templates);
    };
    /**
     * Gets the templates property value. Pre-configured synchronization settings for a particular application.
     * @returns a synchronizationTemplate
     */
    public get templates() {
        return this._templates;
    };
    /**
     * Sets the templates property value. Pre-configured synchronization settings for a particular application.
     * @param value Value to set for the templates property.
     */
    public set templates(value: SynchronizationTemplate[] | undefined) {
        this._templates = value;
    };
}
