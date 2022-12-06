import {Entity, IdentitySet} from '../';
import {DataSourceHoldStatus} from './dataSourceHoldStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DataSource extends Entity, Partial<Parsable> {
    /** The user who created the dataSource. */
    createdBy?: IdentitySet;
    /** The date and time the dataSource was created. */
    createdDateTime?: Date;
    /** The display name of the dataSource. This will be the name of the SharePoint site. */
    displayName?: string;
    /** The hold status of the dataSource.The possible values are: notApplied, applied, applying, removing, partial */
    holdStatus?: DataSourceHoldStatus;
}
