import {DataSourceContainer, EdiscoveryIndexOperation, SiteSource, UnifiedGroupSource, UserSource} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EdiscoveryCustodian extends DataSourceContainer, Partial<Parsable> {
    /** Date and time the custodian acknowledged a hold notification. */
    acknowledgedDateTime?: Date;
    /** Email address of the custodian. */
    email?: string;
    /** Operation entity that represents the latest indexing for the custodian. */
    lastIndexOperation?: EdiscoveryIndexOperation;
    /** Data source entity for SharePoint sites associated with the custodian. */
    siteSources?: SiteSource[];
    /** Data source entity for groups associated with the custodian. */
    unifiedGroupSources?: UnifiedGroupSource[];
    /** Data source entity for a the custodian. This is the container for a custodian's mailbox and OneDrive for Business site. */
    userSources?: UserSource[];
}
