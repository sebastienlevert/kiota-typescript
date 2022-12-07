import {createColumnDefinitionFromDiscriminatorValue} from './createColumnDefinitionFromDiscriminatorValue';
import {createContentTypeFromDiscriminatorValue} from './createContentTypeFromDiscriminatorValue';
import {createDriveFromDiscriminatorValue} from './createDriveFromDiscriminatorValue';
import {createItemActivityOLDFromDiscriminatorValue} from './createItemActivityOLDFromDiscriminatorValue';
import {createListInfoFromDiscriminatorValue} from './createListInfoFromDiscriminatorValue';
import {createListItemFromDiscriminatorValue} from './createListItemFromDiscriminatorValue';
import {createRichLongRunningOperationFromDiscriminatorValue} from './createRichLongRunningOperationFromDiscriminatorValue';
import {createSharepointIdsFromDiscriminatorValue} from './createSharepointIdsFromDiscriminatorValue';
import {createSubscriptionFromDiscriminatorValue} from './createSubscriptionFromDiscriminatorValue';
import {createSystemFacetFromDiscriminatorValue} from './createSystemFacetFromDiscriminatorValue';
import {BaseItem, ColumnDefinition, ContentType, Drive, ItemActivityOLD, ListInfo, ListItem, RichLongRunningOperation, SharepointIds, Subscription, SystemFacet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class List extends BaseItem implements Parsable {
    /** The recent activities that took place within this list. */
    private _activities?: ItemActivityOLD[] | undefined;
    /** The columns property */
    private _columns?: ColumnDefinition[] | undefined;
    /** The contentTypes property */
    private _contentTypes?: ContentType[] | undefined;
    /** The displayable title of the list. */
    private _displayName?: string | undefined;
    /** The drive property */
    private _drive?: Drive | undefined;
    /** All items contained in the list. */
    private _items?: ListItem[] | undefined;
    /** The list property */
    private _list?: ListInfo | undefined;
    /** The collection of long running operations for the list. */
    private _operations?: RichLongRunningOperation[] | undefined;
    /** The sharepointIds property */
    private _sharepointIds?: SharepointIds | undefined;
    /** The set of subscriptions on the list. */
    private _subscriptions?: Subscription[] | undefined;
    /** The system property */
    private _system?: SystemFacet | undefined;
    /**
     * Gets the activities property value. The recent activities that took place within this list.
     * @returns a itemActivityOLD
     */
    public get activities() {
        return this._activities;
    };
    /**
     * Sets the activities property value. The recent activities that took place within this list.
     * @param value Value to set for the activities property.
     */
    public set activities(value: ItemActivityOLD[] | undefined) {
        this._activities = value;
    };
    /**
     * Gets the columns property value. The columns property
     * @returns a columnDefinition
     */
    public get columns() {
        return this._columns;
    };
    /**
     * Sets the columns property value. The columns property
     * @param value Value to set for the columns property.
     */
    public set columns(value: ColumnDefinition[] | undefined) {
        this._columns = value;
    };
    /**
     * Instantiates a new list and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the contentTypes property value. The contentTypes property
     * @returns a contentType
     */
    public get contentTypes() {
        return this._contentTypes;
    };
    /**
     * Sets the contentTypes property value. The contentTypes property
     * @param value Value to set for the contentTypes property.
     */
    public set contentTypes(value: ContentType[] | undefined) {
        this._contentTypes = value;
    };
    /**
     * Gets the displayName property value. The displayable title of the list.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The displayable title of the list.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the drive property value. The drive property
     * @returns a drive
     */
    public get drive() {
        return this._drive;
    };
    /**
     * Sets the drive property value. The drive property
     * @param value Value to set for the drive property.
     */
    public set drive(value: Drive | undefined) {
        this._drive = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "activities": n => { this.activities = n.getCollectionOfObjectValues<ItemActivityOLD>(createItemActivityOLDFromDiscriminatorValue); },
            "columns": n => { this.columns = n.getCollectionOfObjectValues<ColumnDefinition>(createColumnDefinitionFromDiscriminatorValue); },
            "contentTypes": n => { this.contentTypes = n.getCollectionOfObjectValues<ContentType>(createContentTypeFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "drive": n => { this.drive = n.getObjectValue<Drive>(createDriveFromDiscriminatorValue); },
            "items": n => { this.items = n.getCollectionOfObjectValues<ListItem>(createListItemFromDiscriminatorValue); },
            "list": n => { this.list = n.getObjectValue<ListInfo>(createListInfoFromDiscriminatorValue); },
            "operations": n => { this.operations = n.getCollectionOfObjectValues<RichLongRunningOperation>(createRichLongRunningOperationFromDiscriminatorValue); },
            "sharepointIds": n => { this.sharepointIds = n.getObjectValue<SharepointIds>(createSharepointIdsFromDiscriminatorValue); },
            "subscriptions": n => { this.subscriptions = n.getCollectionOfObjectValues<Subscription>(createSubscriptionFromDiscriminatorValue); },
            "system": n => { this.system = n.getObjectValue<SystemFacet>(createSystemFacetFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the items property value. All items contained in the list.
     * @returns a listItem
     */
    public get items() {
        return this._items;
    };
    /**
     * Sets the items property value. All items contained in the list.
     * @param value Value to set for the items property.
     */
    public set items(value: ListItem[] | undefined) {
        this._items = value;
    };
    /**
     * Gets the list property value. The list property
     * @returns a listInfo
     */
    public get list() {
        return this._list;
    };
    /**
     * Sets the list property value. The list property
     * @param value Value to set for the list property.
     */
    public set list(value: ListInfo | undefined) {
        this._list = value;
    };
    /**
     * Gets the operations property value. The collection of long running operations for the list.
     * @returns a richLongRunningOperation
     */
    public get operations() {
        return this._operations;
    };
    /**
     * Sets the operations property value. The collection of long running operations for the list.
     * @param value Value to set for the operations property.
     */
    public set operations(value: RichLongRunningOperation[] | undefined) {
        this._operations = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<ItemActivityOLD>("activities", this.activities);
        writer.writeCollectionOfObjectValues<ColumnDefinition>("columns", this.columns);
        writer.writeCollectionOfObjectValues<ContentType>("contentTypes", this.contentTypes);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue<Drive>("drive", this.drive);
        writer.writeCollectionOfObjectValues<ListItem>("items", this.items);
        writer.writeObjectValue<ListInfo>("list", this.list);
        writer.writeCollectionOfObjectValues<RichLongRunningOperation>("operations", this.operations);
        writer.writeObjectValue<SharepointIds>("sharepointIds", this.sharepointIds);
        writer.writeCollectionOfObjectValues<Subscription>("subscriptions", this.subscriptions);
        writer.writeObjectValue<SystemFacet>("system", this.system);
    };
    /**
     * Gets the sharepointIds property value. The sharepointIds property
     * @returns a sharepointIds
     */
    public get sharepointIds() {
        return this._sharepointIds;
    };
    /**
     * Sets the sharepointIds property value. The sharepointIds property
     * @param value Value to set for the sharepointIds property.
     */
    public set sharepointIds(value: SharepointIds | undefined) {
        this._sharepointIds = value;
    };
    /**
     * Gets the subscriptions property value. The set of subscriptions on the list.
     * @returns a subscription
     */
    public get subscriptions() {
        return this._subscriptions;
    };
    /**
     * Sets the subscriptions property value. The set of subscriptions on the list.
     * @param value Value to set for the subscriptions property.
     */
    public set subscriptions(value: Subscription[] | undefined) {
        this._subscriptions = value;
    };
    /**
     * Gets the system property value. The system property
     * @returns a systemFacet
     */
    public get system() {
        return this._system;
    };
    /**
     * Sets the system property value. The system property
     * @param value Value to set for the system property.
     */
    public set system(value: SystemFacet | undefined) {
        this._system = value;
    };
}
