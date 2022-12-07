import {Entity, Notebook, OnenoteOperation, OnenotePage, OnenoteResource, OnenoteSection, SectionGroup} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Onenote extends Entity, Partial<Parsable> {
    /** The collection of OneNote notebooks that are owned by the user or group. Read-only. Nullable. */
    notebooks?: Notebook[];
    /** The status of OneNote operations. Getting an operations collection is not supported, but you can get the status of long-running operations if the Operation-Location header is returned in the response. Read-only. Nullable. */
    operations?: OnenoteOperation[];
    /** The pages in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable. */
    pages?: OnenotePage[];
    /** The image and other file resources in OneNote pages. Getting a resources collection is not supported, but you can get the binary content of a specific resource. Read-only. Nullable. */
    resources?: OnenoteResource[];
    /** The section groups in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable. */
    sectionGroups?: SectionGroup[];
    /** The sections in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable. */
    sections?: OnenoteSection[];
}
