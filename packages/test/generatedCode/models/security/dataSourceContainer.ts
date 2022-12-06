import {Entity} from '../';
import {DataSourceContainerStatus} from './dataSourceContainerStatus';
import {DataSourceHoldStatus} from './dataSourceHoldStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DataSourceContainer extends Entity, Partial<Parsable> {
    /** Created date and time of the dataSourceContainer entity. */
    createdDateTime?: Date;
    /** Display name of the dataSourceContainer entity. */
    displayName?: string;
    /** The hold status of the dataSourceContainer. The possible values are: notApplied, applied, applying, removing, partial */
    holdStatus?: DataSourceHoldStatus;
    /** Last modified date and time of the dataSourceContainer. */
    lastModifiedDateTime?: Date;
    /** Date and time that the dataSourceContainer was released from the case. */
    releasedDateTime?: Date;
    /** Latest status of the dataSourceContainer. Possible values are: Active, Released. */
    status?: DataSourceContainerStatus;
}
