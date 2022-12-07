import {createDriveItemFromDiscriminatorValue} from './createDriveItemFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createItemActivityOLDFromDiscriminatorValue} from './createItemActivityOLDFromDiscriminatorValue';
import {createListFromDiscriminatorValue} from './createListFromDiscriminatorValue';
import {createQuotaFromDiscriminatorValue} from './createQuotaFromDiscriminatorValue';
import {createSharepointIdsFromDiscriminatorValue} from './createSharepointIdsFromDiscriminatorValue';
import {createSystemFacetFromDiscriminatorValue} from './createSystemFacetFromDiscriminatorValue';
import {BaseItem, DriveItem, IdentitySet, ItemActivityOLD, List, Quota, SharepointIds, SystemFacet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Drive extends BaseItem implements Parsable {
    /** The list of recent activities that took place under this drive. */
    private _activities?: ItemActivityOLD[] | undefined;
    /** Collection of [bundles][bundle] (albums and multi-select-shared sets of items). Only in personal OneDrive. */
    private _bundles?: DriveItem[] | undefined;
    /** Describes the type of drive represented by this resource. OneDrive personal drives will return personal. OneDrive for Business will return business. SharePoint document libraries will return documentLibrary. Read-only. */
    private _driveType?: string | undefined;
    /** The list of items the user is following. Only in OneDrive for Business. */
    private _following?: DriveItem[] | undefined;
    /** All items contained in the drive. Read-only. Nullable. */
    private _items?: DriveItem[] | undefined;
    /** The list property */
    private _list?: List | undefined;
    /** The owner property */
    private _owner?: IdentitySet | undefined;
    /** The quota property */
    private _quota?: Quota | undefined;
    /** The root property */
    private _root?: DriveItem | undefined;
    /** The sharePointIds property */
    private _sharePointIds?: SharepointIds | undefined;
    /** Collection of common folders available in OneDrive. Read-only. Nullable. */
    private _special?: DriveItem[] | undefined;
    /** The system property */
    private _system?: SystemFacet | undefined;
    /**
     * Gets the activities property value. The list of recent activities that took place under this drive.
     * @returns a itemActivityOLD
     */
    public get activities() {
        return this._activities;
    };
    /**
     * Sets the activities property value. The list of recent activities that took place under this drive.
     * @param value Value to set for the activities property.
     */
    public set activities(value: ItemActivityOLD[] | undefined) {
        this._activities = value;
    };
    /**
     * Gets the bundles property value. Collection of [bundles][bundle] (albums and multi-select-shared sets of items). Only in personal OneDrive.
     * @returns a driveItem
     */
    public get bundles() {
        return this._bundles;
    };
    /**
     * Sets the bundles property value. Collection of [bundles][bundle] (albums and multi-select-shared sets of items). Only in personal OneDrive.
     * @param value Value to set for the bundles property.
     */
    public set bundles(value: DriveItem[] | undefined) {
        this._bundles = value;
    };
    /**
     * Instantiates a new drive and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the driveType property value. Describes the type of drive represented by this resource. OneDrive personal drives will return personal. OneDrive for Business will return business. SharePoint document libraries will return documentLibrary. Read-only.
     * @returns a string
     */
    public get driveType() {
        return this._driveType;
    };
    /**
     * Sets the driveType property value. Describes the type of drive represented by this resource. OneDrive personal drives will return personal. OneDrive for Business will return business. SharePoint document libraries will return documentLibrary. Read-only.
     * @param value Value to set for the driveType property.
     */
    public set driveType(value: string | undefined) {
        this._driveType = value;
    };
    /**
     * Gets the following property value. The list of items the user is following. Only in OneDrive for Business.
     * @returns a driveItem
     */
    public get following() {
        return this._following;
    };
    /**
     * Sets the following property value. The list of items the user is following. Only in OneDrive for Business.
     * @param value Value to set for the following property.
     */
    public set following(value: DriveItem[] | undefined) {
        this._following = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "activities": n => { this.activities = n.getCollectionOfObjectValues<ItemActivityOLD>(createItemActivityOLDFromDiscriminatorValue); },
            "bundles": n => { this.bundles = n.getCollectionOfObjectValues<DriveItem>(createDriveItemFromDiscriminatorValue); },
            "driveType": n => { this.driveType = n.getStringValue(); },
            "following": n => { this.following = n.getCollectionOfObjectValues<DriveItem>(createDriveItemFromDiscriminatorValue); },
            "items": n => { this.items = n.getCollectionOfObjectValues<DriveItem>(createDriveItemFromDiscriminatorValue); },
            "list": n => { this.list = n.getObjectValue<List>(createListFromDiscriminatorValue); },
            "owner": n => { this.owner = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "quota": n => { this.quota = n.getObjectValue<Quota>(createQuotaFromDiscriminatorValue); },
            "root": n => { this.root = n.getObjectValue<DriveItem>(createDriveItemFromDiscriminatorValue); },
            "sharePointIds": n => { this.sharePointIds = n.getObjectValue<SharepointIds>(createSharepointIdsFromDiscriminatorValue); },
            "special": n => { this.special = n.getCollectionOfObjectValues<DriveItem>(createDriveItemFromDiscriminatorValue); },
            "system": n => { this.system = n.getObjectValue<SystemFacet>(createSystemFacetFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the items property value. All items contained in the drive. Read-only. Nullable.
     * @returns a driveItem
     */
    public get items() {
        return this._items;
    };
    /**
     * Sets the items property value. All items contained in the drive. Read-only. Nullable.
     * @param value Value to set for the items property.
     */
    public set items(value: DriveItem[] | undefined) {
        this._items = value;
    };
    /**
     * Gets the list property value. The list property
     * @returns a list
     */
    public get list() {
        return this._list;
    };
    /**
     * Sets the list property value. The list property
     * @param value Value to set for the list property.
     */
    public set list(value: List | undefined) {
        this._list = value;
    };
    /**
     * Gets the owner property value. The owner property
     * @returns a identitySet
     */
    public get owner() {
        return this._owner;
    };
    /**
     * Sets the owner property value. The owner property
     * @param value Value to set for the owner property.
     */
    public set owner(value: IdentitySet | undefined) {
        this._owner = value;
    };
    /**
     * Gets the quota property value. The quota property
     * @returns a quota
     */
    public get quota() {
        return this._quota;
    };
    /**
     * Sets the quota property value. The quota property
     * @param value Value to set for the quota property.
     */
    public set quota(value: Quota | undefined) {
        this._quota = value;
    };
    /**
     * Gets the root property value. The root property
     * @returns a driveItem
     */
    public get root() {
        return this._root;
    };
    /**
     * Sets the root property value. The root property
     * @param value Value to set for the root property.
     */
    public set root(value: DriveItem | undefined) {
        this._root = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<ItemActivityOLD>("activities", this.activities);
        writer.writeCollectionOfObjectValues<DriveItem>("bundles", this.bundles);
        writer.writeStringValue("driveType", this.driveType);
        writer.writeCollectionOfObjectValues<DriveItem>("following", this.following);
        writer.writeCollectionOfObjectValues<DriveItem>("items", this.items);
        writer.writeObjectValue<List>("list", this.list);
        writer.writeObjectValue<IdentitySet>("owner", this.owner);
        writer.writeObjectValue<Quota>("quota", this.quota);
        writer.writeObjectValue<DriveItem>("root", this.root);
        writer.writeObjectValue<SharepointIds>("sharePointIds", this.sharePointIds);
        writer.writeCollectionOfObjectValues<DriveItem>("special", this.special);
        writer.writeObjectValue<SystemFacet>("system", this.system);
    };
    /**
     * Gets the sharePointIds property value. The sharePointIds property
     * @returns a sharepointIds
     */
    public get sharePointIds() {
        return this._sharePointIds;
    };
    /**
     * Sets the sharePointIds property value. The sharePointIds property
     * @param value Value to set for the sharePointIds property.
     */
    public set sharePointIds(value: SharepointIds | undefined) {
        this._sharePointIds = value;
    };
    /**
     * Gets the special property value. Collection of common folders available in OneDrive. Read-only. Nullable.
     * @returns a driveItem
     */
    public get special() {
        return this._special;
    };
    /**
     * Sets the special property value. Collection of common folders available in OneDrive. Read-only. Nullable.
     * @param value Value to set for the special property.
     */
    public set special(value: DriveItem[] | undefined) {
        this._special = value;
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
