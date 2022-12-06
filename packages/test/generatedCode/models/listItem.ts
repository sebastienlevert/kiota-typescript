import {BaseItem, ContentTypeInfo, DocumentSetVersion, DriveItem, FieldValueSet, ItemAnalytics, ListItemVersion, SharepointIds} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ListItem extends BaseItem, Partial<Parsable> {
    /** Analytics about the view activities that took place on this item. */
    analytics?: ItemAnalytics;
    /** The content type of this list item */
    contentType?: ContentTypeInfo;
    /** Version information for a document set version created by a user. */
    documentSetVersions?: DocumentSetVersion[];
    /** For document libraries, the driveItem relationship exposes the listItem as a [driveItem][] */
    driveItem?: DriveItem;
    /** The values of the columns set on this list item. */
    fields?: FieldValueSet;
    /** Returns identifiers useful for SharePoint REST compatibility. Read-only. */
    sharepointIds?: SharepointIds;
    /** The list of previous versions of the list item. */
    versions?: ListItemVersion[];
}
