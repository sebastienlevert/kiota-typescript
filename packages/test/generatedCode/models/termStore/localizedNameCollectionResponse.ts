import {BaseCollectionPaginationCountResponse} from '../';
import {LocalizedName} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface LocalizedNameCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: LocalizedName[];
}
