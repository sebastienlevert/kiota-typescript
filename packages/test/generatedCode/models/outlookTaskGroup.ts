import {createOutlookTaskFolderFromDiscriminatorValue} from './createOutlookTaskFolderFromDiscriminatorValue';
import {Entity, OutlookTaskFolder} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OutlookTaskGroup extends Entity implements Parsable {
    /** The version of the task group. */
    private _changeKey?: string | undefined;
    /** The unique GUID identifier for the task group. */
    private _groupKey?: string | undefined;
    /** True if the task group is the default task group. */
    private _isDefaultGroup?: boolean | undefined;
    /** The name of the task group. */
    private _name?: string | undefined;
    /** The collection of task folders in the task group. Read-only. Nullable. */
    private _taskFolders?: OutlookTaskFolder[] | undefined;
    /**
     * Gets the changeKey property value. The version of the task group.
     * @returns a string
     */
    public get changeKey() {
        return this._changeKey;
    };
    /**
     * Sets the changeKey property value. The version of the task group.
     * @param value Value to set for the changeKey property.
     */
    public set changeKey(value: string | undefined) {
        this._changeKey = value;
    };
    /**
     * Instantiates a new outlookTaskGroup and sets the default values.
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
            "changeKey": n => { this.changeKey = n.getStringValue(); },
            "groupKey": n => { this.groupKey = n.getGuidValue(); },
            "isDefaultGroup": n => { this.isDefaultGroup = n.getBooleanValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "taskFolders": n => { this.taskFolders = n.getCollectionOfObjectValues<OutlookTaskFolder>(createOutlookTaskFolderFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the groupKey property value. The unique GUID identifier for the task group.
     * @returns a Guid
     */
    public get groupKey() {
        return this._groupKey;
    };
    /**
     * Sets the groupKey property value. The unique GUID identifier for the task group.
     * @param value Value to set for the groupKey property.
     */
    public set groupKey(value: string | undefined) {
        this._groupKey = value;
    };
    /**
     * Gets the isDefaultGroup property value. True if the task group is the default task group.
     * @returns a boolean
     */
    public get isDefaultGroup() {
        return this._isDefaultGroup;
    };
    /**
     * Sets the isDefaultGroup property value. True if the task group is the default task group.
     * @param value Value to set for the isDefaultGroup property.
     */
    public set isDefaultGroup(value: boolean | undefined) {
        this._isDefaultGroup = value;
    };
    /**
     * Gets the name property value. The name of the task group.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The name of the task group.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("changeKey", this.changeKey);
        //writer.writeGuidValue("groupKey", this.groupKey);
        writer.writeBooleanValue("isDefaultGroup", this.isDefaultGroup);
        writer.writeStringValue("name", this.name);
        writer.writeCollectionOfObjectValues<OutlookTaskFolder>("taskFolders", this.taskFolders);
    };
    /**
     * Gets the taskFolders property value. The collection of task folders in the task group. Read-only. Nullable.
     * @returns a outlookTaskFolder
     */
    public get taskFolders() {
        return this._taskFolders;
    };
    /**
     * Sets the taskFolders property value. The collection of task folders in the task group. Read-only. Nullable.
     * @param value Value to set for the taskFolders property.
     */
    public set taskFolders(value: OutlookTaskFolder[] | undefined) {
        this._taskFolders = value;
    };
}
