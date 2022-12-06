import {DataSource} from './index';
import {SourceType} from './sourceType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserSource extends DataSource, Partial<Parsable> {
    /** Email address of the user's mailbox. */
    email?: string;
    /** Specifies which sources are included in this group. Possible values are: mailbox, site. */
    includedSources?: SourceType;
    /** The URL of the user's OneDrive for Business site. Read-only. */
    siteWebUrl?: string;
}
