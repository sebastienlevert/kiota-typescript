import {BaseCollectionPaginationCountResponse, InternetMessageHeader} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface InternetMessageHeaderCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: InternetMessageHeader[];
}
