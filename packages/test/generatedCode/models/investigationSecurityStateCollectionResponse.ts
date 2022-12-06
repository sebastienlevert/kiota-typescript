import {BaseCollectionPaginationCountResponse, InvestigationSecurityState} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface InvestigationSecurityStateCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: InvestigationSecurityState[];
}
