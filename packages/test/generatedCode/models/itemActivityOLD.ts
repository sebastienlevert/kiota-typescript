import {createDriveItemFromDiscriminatorValue} from './createDriveItemFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createItemActionSetFromDiscriminatorValue} from './createItemActionSetFromDiscriminatorValue';
import {createItemActivityTimeSetFromDiscriminatorValue} from './createItemActivityTimeSetFromDiscriminatorValue';
import {createListItemFromDiscriminatorValue} from './createListItemFromDiscriminatorValue';
import {DriveItem, Entity, IdentitySet, ItemActionSet, ItemActivityTimeSet, ListItem} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ItemActivityOLD extends Entity implements Parsable {
    /** The action property */
    private _action?: ItemActionSet | undefined;
    /** The actor property */
    private _actor?: IdentitySet | undefined;
    /** The driveItem property */
    private _driveItem?: DriveItem | undefined;
    /** The listItem property */
    private _listItem?: ListItem | undefined;
    /** The times property */
    private _times?: ItemActivityTimeSet | undefined;
    /**
     * Gets the action property value. The action property
     * @returns a itemActionSet
     */
    public get action() {
        return this._action;
    };
    /**
     * Sets the action property value. The action property
     * @param value Value to set for the action property.
     */
    public set action(value: ItemActionSet | undefined) {
        this._action = value;
    };
    /**
     * Gets the actor property value. The actor property
     * @returns a identitySet
     */
    public get actor() {
        return this._actor;
    };
    /**
     * Sets the actor property value. The actor property
     * @param value Value to set for the actor property.
     */
    public set actor(value: IdentitySet | undefined) {
        this._actor = value;
    };
    /**
     * Instantiates a new itemActivityOLD and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the driveItem property value. The driveItem property
     * @returns a driveItem
     */
    public get driveItem() {
        return this._driveItem;
    };
    /**
     * Sets the driveItem property value. The driveItem property
     * @param value Value to set for the driveItem property.
     */
    public set driveItem(value: DriveItem | undefined) {
        this._driveItem = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "action": n => { this.action = n.getObjectValue<ItemActionSet>(createItemActionSetFromDiscriminatorValue); },
            "actor": n => { this.actor = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "driveItem": n => { this.driveItem = n.getObjectValue<DriveItem>(createDriveItemFromDiscriminatorValue); },
            "listItem": n => { this.listItem = n.getObjectValue<ListItem>(createListItemFromDiscriminatorValue); },
            "times": n => { this.times = n.getObjectValue<ItemActivityTimeSet>(createItemActivityTimeSetFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the listItem property value. The listItem property
     * @returns a listItem
     */
    public get listItem() {
        return this._listItem;
    };
    /**
     * Sets the listItem property value. The listItem property
     * @param value Value to set for the listItem property.
     */
    public set listItem(value: ListItem | undefined) {
        this._listItem = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<ItemActionSet>("action", this.action);
        writer.writeObjectValue<IdentitySet>("actor", this.actor);
        writer.writeObjectValue<DriveItem>("driveItem", this.driveItem);
        writer.writeObjectValue<ListItem>("listItem", this.listItem);
        writer.writeObjectValue<ItemActivityTimeSet>("times", this.times);
    };
    /**
     * Gets the times property value. The times property
     * @returns a itemActivityTimeSet
     */
    public get times() {
        return this._times;
    };
    /**
     * Sets the times property value. The times property
     * @param value Value to set for the times property.
     */
    public set times(value: ItemActivityTimeSet | undefined) {
        this._times = value;
    };
}
