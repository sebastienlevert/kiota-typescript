import {createDirectoryDefinitionFromDiscriminatorValue} from './createDirectoryDefinitionFromDiscriminatorValue';
import {createSynchronizationRuleFromDiscriminatorValue} from './createSynchronizationRuleFromDiscriminatorValue';
import {DirectoryDefinition, Entity, SynchronizationRule} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SynchronizationSchema extends Entity implements Parsable {
    /** Contains the collection of directories and all of their objects. */
    private _directories?: DirectoryDefinition[] | undefined;
    /** A collection of synchronization rules configured for the synchronizationJob or synchronizationTemplate. */
    private _synchronizationRules?: SynchronizationRule[] | undefined;
    /** The version of the schema, updated automatically with every schema change. */
    private _version?: string | undefined;
    /**
     * Instantiates a new synchronizationSchema and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the directories property value. Contains the collection of directories and all of their objects.
     * @returns a directoryDefinition
     */
    public get directories() {
        return this._directories;
    };
    /**
     * Sets the directories property value. Contains the collection of directories and all of their objects.
     * @param value Value to set for the directories property.
     */
    public set directories(value: DirectoryDefinition[] | undefined) {
        this._directories = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "directories": n => { this.directories = n.getCollectionOfObjectValues<DirectoryDefinition>(createDirectoryDefinitionFromDiscriminatorValue); },
            "synchronizationRules": n => { this.synchronizationRules = n.getCollectionOfObjectValues<SynchronizationRule>(createSynchronizationRuleFromDiscriminatorValue); },
            "version": n => { this.version = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<DirectoryDefinition>("directories", this.directories);
        writer.writeCollectionOfObjectValues<SynchronizationRule>("synchronizationRules", this.synchronizationRules);
        writer.writeStringValue("version", this.version);
    };
    /**
     * Gets the synchronizationRules property value. A collection of synchronization rules configured for the synchronizationJob or synchronizationTemplate.
     * @returns a synchronizationRule
     */
    public get synchronizationRules() {
        return this._synchronizationRules;
    };
    /**
     * Sets the synchronizationRules property value. A collection of synchronization rules configured for the synchronizationJob or synchronizationTemplate.
     * @param value Value to set for the synchronizationRules property.
     */
    public set synchronizationRules(value: SynchronizationRule[] | undefined) {
        this._synchronizationRules = value;
    };
    /**
     * Gets the version property value. The version of the schema, updated automatically with every schema change.
     * @returns a string
     */
    public get version() {
        return this._version;
    };
    /**
     * Sets the version property value. The version of the schema, updated automatically with every schema change.
     * @param value Value to set for the version property.
     */
    public set version(value: string | undefined) {
        this._version = value;
    };
}
