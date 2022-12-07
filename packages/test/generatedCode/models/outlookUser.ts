import {createOutlookCategoryFromDiscriminatorValue} from './createOutlookCategoryFromDiscriminatorValue';
import {createOutlookTaskFolderFromDiscriminatorValue} from './createOutlookTaskFolderFromDiscriminatorValue';
import {createOutlookTaskFromDiscriminatorValue} from './createOutlookTaskFromDiscriminatorValue';
import {createOutlookTaskGroupFromDiscriminatorValue} from './createOutlookTaskGroupFromDiscriminatorValue';
import {Entity, OutlookCategory, OutlookTask, OutlookTaskFolder, OutlookTaskGroup} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OutlookUser extends Entity implements Parsable {
    /** A list of categories defined for the user. */
    private _masterCategories?: OutlookCategory[] | undefined;
    /** The taskFolders property */
    private _taskFolders?: OutlookTaskFolder[] | undefined;
    /** The taskGroups property */
    private _taskGroups?: OutlookTaskGroup[] | undefined;
    /** The tasks property */
    private _tasks?: OutlookTask[] | undefined;
    /**
     * Instantiates a new outlookUser and sets the default values.
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
            "masterCategories": n => { this.masterCategories = n.getCollectionOfObjectValues<OutlookCategory>(createOutlookCategoryFromDiscriminatorValue); },
            "taskFolders": n => { this.taskFolders = n.getCollectionOfObjectValues<OutlookTaskFolder>(createOutlookTaskFolderFromDiscriminatorValue); },
            "taskGroups": n => { this.taskGroups = n.getCollectionOfObjectValues<OutlookTaskGroup>(createOutlookTaskGroupFromDiscriminatorValue); },
            "tasks": n => { this.tasks = n.getCollectionOfObjectValues<OutlookTask>(createOutlookTaskFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the masterCategories property value. A list of categories defined for the user.
     * @returns a outlookCategory
     */
    public get masterCategories() {
        return this._masterCategories;
    };
    /**
     * Sets the masterCategories property value. A list of categories defined for the user.
     * @param value Value to set for the masterCategories property.
     */
    public set masterCategories(value: OutlookCategory[] | undefined) {
        this._masterCategories = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<OutlookCategory>("masterCategories", this.masterCategories);
        writer.writeCollectionOfObjectValues<OutlookTaskFolder>("taskFolders", this.taskFolders);
        writer.writeCollectionOfObjectValues<OutlookTaskGroup>("taskGroups", this.taskGroups);
        writer.writeCollectionOfObjectValues<OutlookTask>("tasks", this.tasks);
    };
    /**
     * Gets the taskFolders property value. The taskFolders property
     * @returns a outlookTaskFolder
     */
    public get taskFolders() {
        return this._taskFolders;
    };
    /**
     * Sets the taskFolders property value. The taskFolders property
     * @param value Value to set for the taskFolders property.
     */
    public set taskFolders(value: OutlookTaskFolder[] | undefined) {
        this._taskFolders = value;
    };
    /**
     * Gets the taskGroups property value. The taskGroups property
     * @returns a outlookTaskGroup
     */
    public get taskGroups() {
        return this._taskGroups;
    };
    /**
     * Sets the taskGroups property value. The taskGroups property
     * @param value Value to set for the taskGroups property.
     */
    public set taskGroups(value: OutlookTaskGroup[] | undefined) {
        this._taskGroups = value;
    };
    /**
     * Gets the tasks property value. The tasks property
     * @returns a outlookTask
     */
    public get tasks() {
        return this._tasks;
    };
    /**
     * Sets the tasks property value. The tasks property
     * @param value Value to set for the tasks property.
     */
    public set tasks(value: OutlookTask[] | undefined) {
        this._tasks = value;
    };
}
