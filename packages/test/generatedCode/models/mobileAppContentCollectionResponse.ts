import {BaseCollectionPaginationCountResponse, MobileAppContent} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MobileAppContentCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: MobileAppContent[];
}
