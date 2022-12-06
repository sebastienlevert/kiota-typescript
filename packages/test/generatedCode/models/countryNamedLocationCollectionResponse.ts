import {BaseCollectionPaginationCountResponse, CountryNamedLocation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CountryNamedLocationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: CountryNamedLocation[];
}
