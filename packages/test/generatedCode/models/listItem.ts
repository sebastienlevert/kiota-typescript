import {BaseItem, ContentTypeInfo, Deleted, DocumentSetVersion, DriveItem, FieldValueSet, ItemActivityOLD, ItemAnalytics, ListItemVersion, SharepointIds} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ListItem extends BaseItem, Partial<Parsable> {
    /** The list of recent activities that took place on this item. */
    activities?: ItemActivityOLD[];
    /** The analytics property */
    analytics?: ItemAnalytics;
    /** The contentType property */
    contentType?: ContentTypeInfo;
    /** The deleted property */
    deleted?: Deleted;
    /** Version information for a document set version created by a user. */
    documentSetVersions?: DocumentSetVersion[];
    /** The driveItem property */
    driveItem?: DriveItem;
    /** The fields property */
    fields?: FieldValueSet;
    /** The sharepointIds property */
    sharepointIds?: SharepointIds;
    /** The list of previous versions of the list item. */
    versions?: ListItemVersion[];
}
