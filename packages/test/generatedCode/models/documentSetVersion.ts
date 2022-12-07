import {DocumentSetVersionItem, IdentitySet, ListItemVersion} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DocumentSetVersion extends ListItemVersion, Partial<Parsable> {
    /** Comment about the captured version. */
    comment?: string;
    /** The createdBy property */
    createdBy?: IdentitySet;
    /** Date and time when this version was created. */
    createdDateTime?: Date;
    /** Items within the document set that are captured as part of this version. */
    items?: DocumentSetVersionItem[];
    /** If true, minor versions of items are also captured; otherwise, only major versions will be captured. Default value is false. */
    shouldCaptureMinorVersion?: boolean;
}
