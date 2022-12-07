import {createBaseItemFromDiscriminatorValue} from './createBaseItemFromDiscriminatorValue';
import {createColumnDefinitionFromDiscriminatorValue} from './createColumnDefinitionFromDiscriminatorValue';
import {createContentTypeFromDiscriminatorValue} from './createContentTypeFromDiscriminatorValue';
import {createDeletedFromDiscriminatorValue} from './createDeletedFromDiscriminatorValue';
import {createDriveFromDiscriminatorValue} from './createDriveFromDiscriminatorValue';
import {createItemAnalyticsFromDiscriminatorValue} from './createItemAnalyticsFromDiscriminatorValue';
import {createListFromDiscriminatorValue} from './createListFromDiscriminatorValue';
import {createOnenoteFromDiscriminatorValue} from './createOnenoteFromDiscriminatorValue';
import {createPermissionFromDiscriminatorValue} from './createPermissionFromDiscriminatorValue';
import {createRichLongRunningOperationFromDiscriminatorValue} from './createRichLongRunningOperationFromDiscriminatorValue';
import {createRootFromDiscriminatorValue} from './createRootFromDiscriminatorValue';
import {createSharepointIdsFromDiscriminatorValue} from './createSharepointIdsFromDiscriminatorValue';
import {createSiteCollectionFromDiscriminatorValue} from './createSiteCollectionFromDiscriminatorValue';
import {createSiteFromDiscriminatorValue} from './createSiteFromDiscriminatorValue';
import {createSitePageFromDiscriminatorValue} from './createSitePageFromDiscriminatorValue';
import {createSiteSettingsFromDiscriminatorValue} from './createSiteSettingsFromDiscriminatorValue';
import {BaseItem, ColumnDefinition, ContentType, Deleted, Drive, ItemAnalytics, List, Onenote, Permission, RichLongRunningOperation, Root, SharepointIds, SiteCollection, SitePage, SiteSettings} from './index';
import {Store} from './termStore/';
import {createStoreFromDiscriminatorValue} from './termStore/createStoreFromDiscriminatorValue';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Site extends BaseItem implements Parsable {
    /** The analytics property */
    private _analytics?: ItemAnalytics | undefined;
    /** The collection of column definitions reusable across lists under this site. */
    private _columns?: ColumnDefinition[] | undefined;
    /** The collection of content types defined for this site. */
    private _contentTypes?: ContentType[] | undefined;
    /** The deleted property */
    private _deleted?: Deleted | undefined;
    /** The full title for the site. Read-only. */
    private _displayName?: string | undefined;
    /** The drive property */
    private _drive?: Drive | undefined;
    /** The collection of drives (document libraries) under this site. */
    private _drives?: Drive[] | undefined;
    /** The collection of column definitions available in the site that are referenced from the sites in the parent hierarchy of the current site. */
    private _externalColumns?: ColumnDefinition[] | undefined;
    /** Used to address any item contained in this site. This collection cannot be enumerated. */
    private _items?: BaseItem[] | undefined;
    /** The collection of lists under this site. */
    private _lists?: List[] | undefined;
    /** The onenote property */
    private _onenote?: Onenote | undefined;
    /** The collection of long running operations for the site. */
    private _operations?: RichLongRunningOperation[] | undefined;
    /** The collection of pages in the SitePages list in this site. */
    private _pages?: SitePage[] | undefined;
    /** The permissions associated with the site. Nullable. */
    private _permissions?: Permission[] | undefined;
    /** The root property */
    private _root?: Root | undefined;
    /** The settings property */
    private _settings?: SiteSettings | undefined;
    /** The sharepointIds property */
    private _sharepointIds?: SharepointIds | undefined;
    /** The siteCollection property */
    private _siteCollection?: SiteCollection | undefined;
    /** The collection of the sub-sites under this site. */
    private _sites?: Site[] | undefined;
    /** The termStore property */
    private _termStore?: Store | undefined;
    /**
     * Gets the analytics property value. The analytics property
     * @returns a itemAnalytics
     */
    public get analytics() {
        return this._analytics;
    };
    /**
     * Sets the analytics property value. The analytics property
     * @param value Value to set for the analytics property.
     */
    public set analytics(value: ItemAnalytics | undefined) {
        this._analytics = value;
    };
    /**
     * Gets the columns property value. The collection of column definitions reusable across lists under this site.
     * @returns a columnDefinition
     */
    public get columns() {
        return this._columns;
    };
    /**
     * Sets the columns property value. The collection of column definitions reusable across lists under this site.
     * @param value Value to set for the columns property.
     */
    public set columns(value: ColumnDefinition[] | undefined) {
        this._columns = value;
    };
    /**
     * Instantiates a new site and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the contentTypes property value. The collection of content types defined for this site.
     * @returns a contentType
     */
    public get contentTypes() {
        return this._contentTypes;
    };
    /**
     * Sets the contentTypes property value. The collection of content types defined for this site.
     * @param value Value to set for the contentTypes property.
     */
    public set contentTypes(value: ContentType[] | undefined) {
        this._contentTypes = value;
    };
    /**
     * Gets the deleted property value. The deleted property
     * @returns a deleted
     */
    public get deleted() {
        return this._deleted;
    };
    /**
     * Sets the deleted property value. The deleted property
     * @param value Value to set for the deleted property.
     */
    public set deleted(value: Deleted | undefined) {
        this._deleted = value;
    };
    /**
     * Gets the displayName property value. The full title for the site. Read-only.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The full title for the site. Read-only.
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
     * Gets the drives property value. The collection of drives (document libraries) under this site.
     * @returns a drive
     */
    public get drives() {
        return this._drives;
    };
    /**
     * Sets the drives property value. The collection of drives (document libraries) under this site.
     * @param value Value to set for the drives property.
     */
    public set drives(value: Drive[] | undefined) {
        this._drives = value;
    };
    /**
     * Gets the externalColumns property value. The collection of column definitions available in the site that are referenced from the sites in the parent hierarchy of the current site.
     * @returns a columnDefinition
     */
    public get externalColumns() {
        return this._externalColumns;
    };
    /**
     * Sets the externalColumns property value. The collection of column definitions available in the site that are referenced from the sites in the parent hierarchy of the current site.
     * @param value Value to set for the externalColumns property.
     */
    public set externalColumns(value: ColumnDefinition[] | undefined) {
        this._externalColumns = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "analytics": n => { this.analytics = n.getObjectValue<ItemAnalytics>(createItemAnalyticsFromDiscriminatorValue); },
            "columns": n => { this.columns = n.getCollectionOfObjectValues<ColumnDefinition>(createColumnDefinitionFromDiscriminatorValue); },
            "contentTypes": n => { this.contentTypes = n.getCollectionOfObjectValues<ContentType>(createContentTypeFromDiscriminatorValue); },
            "deleted": n => { this.deleted = n.getObjectValue<Deleted>(createDeletedFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "drive": n => { this.drive = n.getObjectValue<Drive>(createDriveFromDiscriminatorValue); },
            "drives": n => { this.drives = n.getCollectionOfObjectValues<Drive>(createDriveFromDiscriminatorValue); },
            "externalColumns": n => { this.externalColumns = n.getCollectionOfObjectValues<ColumnDefinition>(createColumnDefinitionFromDiscriminatorValue); },
            "items": n => { this.items = n.getCollectionOfObjectValues<BaseItem>(createBaseItemFromDiscriminatorValue); },
            "lists": n => { this.lists = n.getCollectionOfObjectValues<List>(createListFromDiscriminatorValue); },
            "onenote": n => { this.onenote = n.getObjectValue<Onenote>(createOnenoteFromDiscriminatorValue); },
            "operations": n => { this.operations = n.getCollectionOfObjectValues<RichLongRunningOperation>(createRichLongRunningOperationFromDiscriminatorValue); },
            "pages": n => { this.pages = n.getCollectionOfObjectValues<SitePage>(createSitePageFromDiscriminatorValue); },
            "permissions": n => { this.permissions = n.getCollectionOfObjectValues<Permission>(createPermissionFromDiscriminatorValue); },
            "root": n => { this.root = n.getObjectValue<Root>(createRootFromDiscriminatorValue); },
            "settings": n => { this.settings = n.getObjectValue<SiteSettings>(createSiteSettingsFromDiscriminatorValue); },
            "sharepointIds": n => { this.sharepointIds = n.getObjectValue<SharepointIds>(createSharepointIdsFromDiscriminatorValue); },
            "siteCollection": n => { this.siteCollection = n.getObjectValue<SiteCollection>(createSiteCollectionFromDiscriminatorValue); },
            "sites": n => { this.sites = n.getCollectionOfObjectValues<Site>(createSiteFromDiscriminatorValue); },
            "termStore": n => { this.termStore = n.getObjectValue<Store>(createStoreFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the items property value. Used to address any item contained in this site. This collection cannot be enumerated.
     * @returns a baseItem
     */
    public get items() {
        return this._items;
    };
    /**
     * Sets the items property value. Used to address any item contained in this site. This collection cannot be enumerated.
     * @param value Value to set for the items property.
     */
    public set items(value: BaseItem[] | undefined) {
        this._items = value;
    };
    /**
     * Gets the lists property value. The collection of lists under this site.
     * @returns a list
     */
    public get lists() {
        return this._lists;
    };
    /**
     * Sets the lists property value. The collection of lists under this site.
     * @param value Value to set for the lists property.
     */
    public set lists(value: List[] | undefined) {
        this._lists = value;
    };
    /**
     * Gets the onenote property value. The onenote property
     * @returns a onenote
     */
    public get onenote() {
        return this._onenote;
    };
    /**
     * Sets the onenote property value. The onenote property
     * @param value Value to set for the onenote property.
     */
    public set onenote(value: Onenote | undefined) {
        this._onenote = value;
    };
    /**
     * Gets the operations property value. The collection of long running operations for the site.
     * @returns a richLongRunningOperation
     */
    public get operations() {
        return this._operations;
    };
    /**
     * Sets the operations property value. The collection of long running operations for the site.
     * @param value Value to set for the operations property.
     */
    public set operations(value: RichLongRunningOperation[] | undefined) {
        this._operations = value;
    };
    /**
     * Gets the pages property value. The collection of pages in the SitePages list in this site.
     * @returns a sitePage
     */
    public get pages() {
        return this._pages;
    };
    /**
     * Sets the pages property value. The collection of pages in the SitePages list in this site.
     * @param value Value to set for the pages property.
     */
    public set pages(value: SitePage[] | undefined) {
        this._pages = value;
    };
    /**
     * Gets the permissions property value. The permissions associated with the site. Nullable.
     * @returns a permission
     */
    public get permissions() {
        return this._permissions;
    };
    /**
     * Sets the permissions property value. The permissions associated with the site. Nullable.
     * @param value Value to set for the permissions property.
     */
    public set permissions(value: Permission[] | undefined) {
        this._permissions = value;
    };
    /**
     * Gets the root property value. The root property
     * @returns a root
     */
    public get root() {
        return this._root;
    };
    /**
     * Sets the root property value. The root property
     * @param value Value to set for the root property.
     */
    public set root(value: Root | undefined) {
        this._root = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<ItemAnalytics>("analytics", this.analytics);
        writer.writeCollectionOfObjectValues<ColumnDefinition>("columns", this.columns);
        writer.writeCollectionOfObjectValues<ContentType>("contentTypes", this.contentTypes);
        writer.writeObjectValue<Deleted>("deleted", this.deleted);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue<Drive>("drive", this.drive);
        writer.writeCollectionOfObjectValues<Drive>("drives", this.drives);
        writer.writeCollectionOfObjectValues<ColumnDefinition>("externalColumns", this.externalColumns);
        writer.writeCollectionOfObjectValues<BaseItem>("items", this.items);
        writer.writeCollectionOfObjectValues<List>("lists", this.lists);
        writer.writeObjectValue<Onenote>("onenote", this.onenote);
        writer.writeCollectionOfObjectValues<RichLongRunningOperation>("operations", this.operations);
        writer.writeCollectionOfObjectValues<SitePage>("pages", this.pages);
        writer.writeCollectionOfObjectValues<Permission>("permissions", this.permissions);
        writer.writeObjectValue<Root>("root", this.root);
        writer.writeObjectValue<SiteSettings>("settings", this.settings);
        writer.writeObjectValue<SharepointIds>("sharepointIds", this.sharepointIds);
        writer.writeObjectValue<SiteCollection>("siteCollection", this.siteCollection);
        writer.writeCollectionOfObjectValues<Site>("sites", this.sites);
        writer.writeObjectValue<Store>("termStore", this.termStore);
    };
    /**
     * Gets the settings property value. The settings property
     * @returns a siteSettings
     */
    public get settings() {
        return this._settings;
    };
    /**
     * Sets the settings property value. The settings property
     * @param value Value to set for the settings property.
     */
    public set settings(value: SiteSettings | undefined) {
        this._settings = value;
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
     * Gets the siteCollection property value. The siteCollection property
     * @returns a siteCollection
     */
    public get siteCollection() {
        return this._siteCollection;
    };
    /**
     * Sets the siteCollection property value. The siteCollection property
     * @param value Value to set for the siteCollection property.
     */
    public set siteCollection(value: SiteCollection | undefined) {
        this._siteCollection = value;
    };
    /**
     * Gets the sites property value. The collection of the sub-sites under this site.
     * @returns a site
     */
    public get sites() {
        return this._sites;
    };
    /**
     * Sets the sites property value. The collection of the sub-sites under this site.
     * @param value Value to set for the sites property.
     */
    public set sites(value: Site[] | undefined) {
        this._sites = value;
    };
    /**
     * Gets the termStore property value. The termStore property
     * @returns a store
     */
    public get termStore() {
        return this._termStore;
    };
    /**
     * Sets the termStore property value. The termStore property
     * @param value Value to set for the termStore property.
     */
    public set termStore(value: Store | undefined) {
        this._termStore = value;
    };
}
