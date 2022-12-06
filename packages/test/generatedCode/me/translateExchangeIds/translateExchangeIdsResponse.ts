import {BaseCollectionPaginationCountResponse, ConvertIdResult} from '../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TranslateExchangeIdsResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ConvertIdResult[];
}
