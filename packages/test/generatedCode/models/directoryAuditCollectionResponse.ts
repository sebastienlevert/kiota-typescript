import {BaseCollectionPaginationCountResponse, DirectoryAudit} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DirectoryAuditCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DirectoryAudit[];
}
