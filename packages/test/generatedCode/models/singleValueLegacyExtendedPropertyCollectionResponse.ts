import {BaseCollectionPaginationCountResponse, SingleValueLegacyExtendedProperty} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SingleValueLegacyExtendedPropertyCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SingleValueLegacyExtendedProperty[];
}
