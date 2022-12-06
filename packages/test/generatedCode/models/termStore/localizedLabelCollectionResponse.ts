import {BaseCollectionPaginationCountResponse} from '../';
import {LocalizedLabel} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface LocalizedLabelCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: LocalizedLabel[];
}
