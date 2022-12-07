import {Notebook, OnenoteEntitySchemaObjectModel, OnenoteSection, PageLinks} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OnenotePage extends OnenoteEntitySchemaObjectModel, Partial<Parsable> {
    /** The page's HTML content. */
    content?: string;
    /** The URL for the page's HTML content.  Read-only. */
    contentUrl?: string;
    /** The unique identifier of the application that created the page. Read-only. */
    createdByAppId?: string;
    /** The date and time when the page was last modified. The timestamp represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    lastModifiedDateTime?: Date;
    /** The indentation level of the page. Read-only. */
    level?: number;
    /** The links property */
    links?: PageLinks;
    /** The order of the page within its parent section. Read-only. */
    order?: number;
    /** The parentNotebook property */
    parentNotebook?: Notebook;
    /** The parentSection property */
    parentSection?: OnenoteSection;
    /** The title of the page. */
    title?: string;
    /** The userTags property */
    userTags?: string[];
}
