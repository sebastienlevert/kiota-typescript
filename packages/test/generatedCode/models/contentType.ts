import {ColumnDefinition, ColumnLink, ContentTypeOrder, DocumentSet, DocumentSetContent, Entity, ItemReference} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ContentType extends Entity, Partial<Parsable> {
    /** List of canonical URLs for hub sites with which this content type is associated to. This will contain all hubsites where this content type is queued to be enforced or is already enforced. Enforcing a content type means that the content type will be applied to the lists in the enforced sites. */
    associatedHubsUrls?: string[];
    /** The base property */
    base?: ContentType;
    /** The collection of content types that are ancestors of this content type. */
    baseTypes?: ContentType[];
    /** The collection of columns that are required by this content type */
    columnLinks?: ColumnLink[];
    /** Column order information in a content type. */
    columnPositions?: ColumnDefinition[];
    /** The collection of column definitions for this contentType. */
    columns?: ColumnDefinition[];
    /** The descriptive text for the item. */
    description?: string;
    /** The documentSet property */
    documentSet?: DocumentSet;
    /** The documentTemplate property */
    documentTemplate?: DocumentSetContent;
    /** The name of the group this content type belongs to. Helps organize related content types. */
    group?: string;
    /** Indicates whether the content type is hidden in the list's 'New' menu. */
    hidden?: boolean;
    /** The inheritedFrom property */
    inheritedFrom?: ItemReference;
    /** Specifies if a content type is a built-in content type. */
    isBuiltIn?: boolean;
    /** The name of the content type. */
    name?: string;
    /** The order property */
    order?: ContentTypeOrder;
    /** The unique identifier of the content type. */
    parentId?: string;
    /** If true, any changes made to the content type will be pushed to inherited content types and lists that implement the content type. */
    propagateChanges?: boolean;
    /** If true, the content type cannot be modified unless this value is first set to false. */
    readOnly?: boolean;
    /** If true, the content type cannot be modified by users or through push-down operations. Only site collection administrators can seal or unseal content types. */
    sealed?: boolean;
}
