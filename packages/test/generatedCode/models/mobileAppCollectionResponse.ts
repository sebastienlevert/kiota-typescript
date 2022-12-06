import {BaseCollectionPaginationCountResponse, MobileApp} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MobileAppCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: MobileApp[];
}
