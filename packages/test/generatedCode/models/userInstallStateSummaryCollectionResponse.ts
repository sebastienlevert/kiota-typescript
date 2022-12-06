import {BaseCollectionPaginationCountResponse, UserInstallStateSummary} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserInstallStateSummaryCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: UserInstallStateSummary[];
}
