import {BaseCollectionPaginationCountResponse, MultiValueLegacyExtendedProperty} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MultiValueLegacyExtendedPropertyCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: MultiValueLegacyExtendedProperty[];
}
