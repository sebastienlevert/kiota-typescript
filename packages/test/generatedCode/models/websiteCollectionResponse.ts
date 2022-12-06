import {BaseCollectionPaginationCountResponse, Website} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WebsiteCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Website[];
}
