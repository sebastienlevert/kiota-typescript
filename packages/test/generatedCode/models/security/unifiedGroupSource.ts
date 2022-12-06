import {Group} from '../';
import {DataSource} from './index';
import {SourceType} from './sourceType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedGroupSource extends DataSource, Partial<Parsable> {
    /** The group property */
    group?: Group;
    /** Specifies which sources are included in this group. Possible values are: mailbox, site. */
    includedSources?: SourceType;
}
