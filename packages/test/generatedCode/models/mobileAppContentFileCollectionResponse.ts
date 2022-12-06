import {BaseCollectionPaginationCountResponse, MobileAppContentFile} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MobileAppContentFileCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: MobileAppContentFile[];
}
