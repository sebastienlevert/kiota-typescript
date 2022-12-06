import {BaseCollectionPaginationCountResponse} from '../';
import {LocalizedDescription} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface LocalizedDescriptionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: LocalizedDescription[];
}
