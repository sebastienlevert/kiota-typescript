import {BaseCollectionPaginationCountResponse, TelecomExpenseManagementPartner} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TelecomExpenseManagementPartnerCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: TelecomExpenseManagementPartner[];
}
